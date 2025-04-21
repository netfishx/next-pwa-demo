"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { testToast, testToastError } from "./actions";
export default function Home() {
	return (
		<div className="flex flex-col gap-4 p-4">
			<h1 className="text-3xl font-bold">Hello World123</h1>
			<div>
				<Button
					onClick={() => {
						testToast();
					}}
				>
					toast success
				</Button>
				<Button
					variant="destructive"
					onClick={() => {
						testToastError();
					}}
				>
					toast error
				</Button>
			</div>
			<Select>
				<SelectTrigger className="w-[180px]">
					<SelectValue placeholder="Select a fruit" />
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						<SelectLabel>Fruits</SelectLabel>
						<SelectItem value="apple">Apple</SelectItem>
						<SelectItem value="banana">Banana</SelectItem>
						<SelectItem value="blueberry">Blueberry</SelectItem>
						<SelectItem value="grapes">Grapes</SelectItem>
						<SelectItem value="pineapple">Pineapple</SelectItem>
					</SelectGroup>
				</SelectContent>
			</Select>
			<Input type="number" placeholder="Enter your name" />
			<Calendar autoFocus mode="range" disabled={{ before: new Date() }} />
		</div>
	);
}
