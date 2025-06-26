import React, { useState } from 'react';
import './Content.css';

const Content = () => {
    const [count, setCount] = useState(0);

    return (
        <div className="content">
            <div className="content-card">
                <h2>🎯 Main Content Area</h2>
                <p>This is the main content micro frontend. It demonstrates interactive features.</p>

                <div className="counter-section">
                    <h3>Interactive Counter</h3>
                    <p>Count: {count}</p>
                    <div className="button-group">
                        <button onClick={() => setCount(count - 1)} className="btn btn-secondary">
                            Decrease
                        </button>
                        <button onClick={() => setCount(0)} className="btn btn-warning">
                            Reset
                        </button>
                        <button onClick={() => setCount(count + 1)} className="btn btn-primary">
                            Increase
                        </button>
                    </div>
                </div>

                <div className="features-section">
                    <h3>Micro Frontend Features</h3>
                    <ul>
                        <li>✅ Independent development and deployment</li>
                        <li>✅ Technology agnostic</li>
                        <li>✅ Team autonomy</li>
                        <li>✅ Scalable architecture</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Content; 