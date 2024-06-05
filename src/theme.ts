'use client';

import { ThemeOptions } from '@mui/material';
import { createTheme as muiCreateTheme } from '@mui/material/styles';

const createTheme = (): ThemeOptions =>
  muiCreateTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 576,
        md: 768,
        lg: 1024,
        xl: 1280,
      },
    },
    palette: {
      mode: 'light',
      primary: {
        light: '#88c155',
        500: '#5E801E',
      },
      error: {
        500: '#ee294c',
      },
    },
    typography: {
      h1: {
        fontSize: 36,
      },
      h2: {
        fontSize: 28,
      }
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: '24px',
            height: '40px',
            padding: '0 20px',
            cursor: 'pointer',
            textTransform: 'none',
            outline: '',
            '&.Mui-focused': {
              borderRadius: '10px',
            },
            '&.Mui-disabled': {
              opacity: 0.3,
            },
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            position: 'relative',
          }
        }
      },
      MuiFormHelperText: {
        styleOverrides: {
          root: {
            position: 'absolute',
            bottom: -20,
            left: 0,
            margin: 0
          }
        }
      },
      MuiSlider: {
        styleOverrides: {
          root: ({ theme }) => {

            return {
              color: theme.palette.primary.light,
            }
          },
        },
      },
    },
  });

export default createTheme;
