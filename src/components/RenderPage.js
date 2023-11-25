import { useEffect, useState } from 'react';

window.captive = {};
const captive = window.captive;

captive.current_page = 'login';

captive.renderPage = (value) => {
    window.captive.current_page = value;
    const renderPageEvent = new Event('renderPageChange');
    window.dispatchEvent(renderPageEvent);
};

const RenderPage = ({ state }) => {
    const { updateFlags } = state;
    const [renderPage, setRenderPage] = useState(captive.current_page);

    useEffect(() => {
        const handleRenderPageChange = () => setRenderPage(captive.current_page);

        window.addEventListener('renderPageChange', handleRenderPageChange);
        if (renderPage === 'waiting' || renderPage === 'connected' || renderPage === 'error') {
            updateFlags({ success: false, waiting: false, connected: false, error: false, disconnected: false });
        }
        if (renderPage === 'waiting') updateFlags({ success: true, waiting: true });
        if (renderPage === 'connected') updateFlags({ success: true, connected: true });
        if (renderPage === 'error') updateFlags({ error: true });

        return () => window.removeEventListener('renderPageChange', handleRenderPageChange);

    }, [renderPage]);
};

export default RenderPage;