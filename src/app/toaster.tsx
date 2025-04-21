import { cookies } from "next/headers";
import { ClientToasts } from "./toasts";

export async function Toaster() {
	const cookieStore = await cookies();
	const toasts = cookieStore
		.getAll()
		.filter((cookie) => cookie.name.startsWith("toast-") && cookie.value)
		.map((cookie) => {
			const [type, message] = cookie.value.split("|");
			return {
				id: cookie.name,
				type: type as "success" | "error" | "warning" | "info",
				message,
				dismiss: async () => {
					"use server";
					const cookieStore = await cookies();
					cookieStore.delete(cookie.name);
				},
			};
		});

	return <ClientToasts toasts={toasts} />;
}
