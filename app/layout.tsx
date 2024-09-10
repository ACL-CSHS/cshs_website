import React from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import "./globals.css";
import {ThemeProvider} from "@mui/material";
import theme from "@/theme/theme";
import Navbar from "@/components/Navbar/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
          <AppRouterCacheProvider>
              <ThemeProvider theme={theme}>
                  <Navbar />
                  {children}
              </ThemeProvider>
          </AppRouterCacheProvider>
      </body>
    </html>
  );
}
