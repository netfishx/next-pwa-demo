"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
async function toast(
	message: string,
	type: "success" | "error" | "warning" | "info",
) {
	const cookieStore = await cookies();
	const id = crypto.randomUUID();

	cookieStore.set(`toast-${id}`, `${type}|${message}`, {
		path: "/",
		maxAge: 5,
	});
}

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
export async function testToast() {
	await sleep(1000);
	await toast("Success!", "success");
}

export async function testToastError() {
	await toast("Error!", "error");
	redirect("/about");
}
