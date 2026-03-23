import "./globals.css";

export const metadata = {
  title: "Bag Shop",
  description: "Bag Details Page",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}