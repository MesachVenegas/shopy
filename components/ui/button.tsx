import { forwardRef } from "react";

import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva("", {
	variants: {
		variant: {
			default: "",
		},
		size: {
			default: "",
		},
	},
	defaultVariants: {
		variant: "default",
		size: "default",
	},
});

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, asChild, ...props }, ref) => {
		const Comp = asChild ? Slot : "button";
		return (
			<Comp className={cn(buttonVariants(), className)} ref={ref} {...props} />
		);
	}
);
