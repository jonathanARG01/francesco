import React from 'react'
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { LanguageProvider } from './LanguageContext.jsx';

import Home from './routes/Home.jsx';
import Registro from './routes/Registro.jsx';
import Postular from './routes/Postular.jsx';

import './reset.css';
import './styles.css';



const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
		errorElement: <h2>Not Found</h2>
	},
	{
		path: '/registro',
		element: <Registro />
	},
	{
		path: '/postular',
		element: <Postular />
	}
]);



ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<LanguageProvider>
			<RouterProvider router={ router } />
		</LanguageProvider>
	</React.StrictMode>
)
