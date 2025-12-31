import "./globals.css";
import Header from "./components/header";
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk">
      <body className="bg-background text-foreground">
        <Header />
        {children}
      </body>
    </html>
  );
}
