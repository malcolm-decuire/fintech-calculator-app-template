'use client';
import createTheme from '@/theme';
import { CssBaseline, ThemeProvider as MuiThemeProvider } from '@mui/material';
import React, { ReactNode } from 'react';

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  return (
    <MuiThemeProvider theme={createTheme()}>
      <CssBaseline enableColorScheme />
      {children}
    </MuiThemeProvider>
  );
};
