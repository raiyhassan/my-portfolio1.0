import '@fontsource/inter/variable.css';
import '@fontsource/source-sans-pro/variable.css';
import './globals.css';

export const metadata = {
  title: 'Raiy Hassan | Portfolio',
  description: 'Transforming AI content into trusted, brand-aligned narratives.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-offwhite font-sans text-[#222] min-h-screen">
        {children}
      </body>
    </html>
  );
} 