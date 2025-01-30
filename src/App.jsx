import './App.css';

import { Route, Routes } from 'react-router-dom';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

import { Content } from './layouts/content';
import { Footer } from './layouts/footer';
import { Header } from './layouts/header';
import { Home } from './pages/home';
import { routePaths } from './constants/paths';
import { useThemeChooser } from './contexts/theme-chooser';

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Helvetica, Roboto, Arial, sans-serif;
    transition: all 0.50s linear;
  }
  `;

function App() {
  const { themeConfig } = useThemeChooser();
  return (
    <ThemeProvider theme={themeConfig}>
      <GlobalStyles />
      <Header />
      <Content>
        <Routes>
          <Route path={routePaths.Home} element={<Home />} />
        </Routes>
      </Content>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
