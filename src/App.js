import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/Home';
import ProductPage from './pages/Product';
import RootLayout from './pages/Root';
import ErrorPage from './pages/Error';
import ProductDetailPage from './pages/ProductDetail';

//다른 컴포넌트에서 Link로 움직이고 router를 쓰려면
//루트 라우터로 래핑을 해야 한다. RootLayout안에 
//네비게이션바를 쓴다.
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout></RootLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { path: '/', element: <HomePage></HomePage> },
      { path: '/products', element: <ProductPage /> },
      { path: '/products/:productId', element: <ProductDetailPage></ProductDetailPage>}
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
