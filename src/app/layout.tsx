import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ApolloProvider, ThemeProvider } from "@/providers";
import { headers } from "next/headers";

import "./globals.css";
import { Box } from "@mui/material";
import Navigation from "@/components/Navigation";
import SideNav from "@/components/side-nav";
import MarginWidthWrapper from "@/components/margin-width-wrapper";
import Header from "@/components/header";
import HeaderMobile from "@/components/header-mobile";
import PageWrapper from "@/components/page-wrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fintech calculator",
  description: "Fintech rent calculator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const authHeaders = {
    COOKIE: headers().get('COOKIE') || '',
  };
  return (
    <html lang="en">
      <body id="__next" className={inter.className}>
        <ApolloProvider clientOpts={{ authHeaders }}>
          <ThemeProvider>
            <div className="flex">
              <SideNav />
              <main className="flex-1">
                <MarginWidthWrapper>
                  <Header />
                  <HeaderMobile />
                  <PageWrapper>
                    {children}
                  </PageWrapper>
                </MarginWidthWrapper>
              </main>
            </div>
            {/* <Box>
              <Navigation />
              {children}
            </Box> */}
          </ThemeProvider>
        </ApolloProvider>
      </body>
    </html>
  );
}
