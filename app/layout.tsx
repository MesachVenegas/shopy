import type { Metadata } from "next";
import { geistMono, geistSans } from "@/app/fonts";
import "@/styles/globals.css";

export const metadata: Metadata = {
	title: "E-Shop",
	description: "Find the best products for you, and your needs in one place. With E-Shop, you can easily find the products you need. We are committed to providing you with the best possible shopping experience.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20`}>
				{children}
			</body>
		</html>
	);
}
