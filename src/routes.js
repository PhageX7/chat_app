import { useRoutes } from 'react-router-dom';
import { Authtabs } from './pages/auth';

export const AppRouter = () => {
    const elements = useRoutes([
        {
            path: '/',
            element: <Authtabs />
        }
    ])

    return elements;
}