import React from 'react';
import { getInitColorSchemeScript } from '@mui/material/styles';
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles';
import extTheme from '@site/src/components/extTheme';
import { ThemeProvider } from '@mui/material/styles';

export default function Root(props: { children: React.ReactNode }) {
	return (
		<>
			{getInitColorSchemeScript()}
			{console.log('extTheme', extTheme)}
			<CssVarsProvider theme={extTheme}>{props.children}</CssVarsProvider>
			{/* <ThemeProvider theme={extTheme}>{props.children}</ThemeProvider> */}
		</>
	);
}
