import { MainProvider } from './context/main';
import AppRouter from './router/appRouter';
import Layout from './componets/Layout';

function App() {
  return (
    <Layout>
      <MainProvider>
        <AppRouter />
      </MainProvider>
    </Layout>
  );
}

export default App;
