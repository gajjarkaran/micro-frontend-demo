import React, { Suspense, lazy, useState, useEffect } from 'react';
import './App.css';

// Test with just one micro frontend first
const Header = lazy(() =>
    import('header/Header').catch(err => {
        console.error('Failed to load Header:', err);
        return { default: () => <div className="error">Failed to load Header: {err.message}</div> };
    })
);

const Content = lazy(() =>
    import('content/Content').catch(err => {
        console.error('Failed to load Content:', err);
        return { default: () => <div className="error">Failed to load Content: {err.message}</div> };
    })
);

const Footer = lazy(() =>
    import('footer/Footer').catch(err => {
        console.error('Failed to load Footer:', err);
        return { default: () => <div className="error">Failed to load Footer: {err.message}</div> };
    })
);

function App() {
    const [loadingStatus, setLoadingStatus] = useState({
        header: 'loading',
        content: 'loading',
        footer: 'loading',
    });

    useEffect(() => {
        const testRemote = async (name, url) => {
            try {
                const response = await fetch(url);
                setLoadingStatus(prev => ({ ...prev, [name]: response.ok ? 'ready' : 'failed' }));
            } catch (err) {
                setLoadingStatus(prev => ({ ...prev, [name]: 'failed' }));
            }
        };
        testRemote('header', 'http://localhost:3001/remoteEntry.js');
        testRemote('content', 'http://localhost:3002/remoteEntry.js');
        testRemote('footer', 'http://localhost:3003/remoteEntry.js');
    }, []);

    return (
        <div className="App">
            <h1>🚀 Micro Frontend Test</h1>
            <p>Testing Header, Content, and Footer Micro Frontends</p>

            <div className="status-section">
                <h2>Status</h2>
                <div className="status-grid">
                    <div className={`status-item ${loadingStatus.header}`}>Header: {loadingStatus.header}</div>
                    <div className={`status-item ${loadingStatus.content}`}>Content: {loadingStatus.content}</div>
                    <div className={`status-item ${loadingStatus.footer}`}>Footer: {loadingStatus.footer}</div>
                </div>
            </div>

            <div className="micro-frontends-section">
                <Suspense fallback={<div className="loading">Loading Header...</div>}>
                    <Header />
                </Suspense>
                <main className="main-content">
                    <Suspense fallback={<div className="loading">Loading Content...</div>}>
                        <Content />
                    </Suspense>
                </main>
                <Suspense fallback={<div className="loading">Loading Footer...</div>}>
                    <Footer />
                </Suspense>
            </div>

            <div className="debug-section">
                <h2>Debug Information</h2>
                <p>Check browser console for detailed error messages.</p>
                <p>If you see "Unexpected token &lt;", it means HTML is being returned instead of JavaScript.</p>
            </div>
        </div>
    );
}

export default App;
