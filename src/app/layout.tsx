import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lorenzo Cicuttin - Web Developer",
  description:
    "Lorenzo Cicuttin is a Senior Software Developer @nearform",
};

export default function RootLayout(props: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main>
          <fieldset>
            <legend>cicuttin.com</legend>
            {props.children}
          </fieldset>
        </main>
        <footer>cicuttin.com © 2026 Lorenzo Cicuttin</footer>
      </body>
    </html>
  );
}
