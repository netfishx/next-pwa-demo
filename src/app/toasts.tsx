"use client";

import { startTransition, useEffect, useOptimistic, useState } from "react";
import { Toaster as SonnerToaster, toast as sonnerToast } from "sonner";

type Toast = {
	id: string;
	type: "success" | "error" | "warning" | "info";
	message: string;
	dismiss: () => Promise<void>;
};

export function ClientToasts({ toasts }: { toasts: Toast[] }) {
	const [optimisticToasts, remove] = useOptimistic(toasts, (current, id) =>
		current.filter((toast) => toast.id !== id),
	);

	const localToasts = optimisticToasts.map((toast) => ({
		...toast,
		dismiss: async () => {
			remove(toast.id);
			await toast.dismiss();
		},
	}));

	const [sentToSonner, setSentToSonner] = useState<string[]>([]);

	useEffect(() => {
		localToasts
			.filter((toast) => !sentToSonner.includes(toast.id))
			.forEach((toast) => {
				setSentToSonner((prev) => [...prev, toast.id]);
				const params = {
					id: toast.id,
					onDismiss: () => startTransition(toast.dismiss),
					onAutoClose: () => startTransition(toast.dismiss),
				};
				switch (toast.type) {
					case "success":
						sonnerToast.success(toast.message, params);
						break;
					case "error":
						sonnerToast.error(toast.message, params);
						break;
					case "warning":
						sonnerToast.warning(toast.message, params);
						break;
					case "info":
						sonnerToast.info(toast.message, params);
						break;
					default:
						sonnerToast(toast.message, {
							id: toast.id,
							onDismiss: () => startTransition(toast.dismiss),
							onAutoClose: () => startTransition(toast.dismiss),
						});
				}
			});
	}, [localToasts, sentToSonner]);

	return <SonnerToaster position="top-center" richColors />;
}
