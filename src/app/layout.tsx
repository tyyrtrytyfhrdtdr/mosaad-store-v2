import "./globals.css";

export const metadata = {
  title: "MOSAAD | PHOENIX",
  description: "Largest importer of bicycles in Egypt",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body style={{ backgroundColor: 'black', color: 'white', margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  );
}
