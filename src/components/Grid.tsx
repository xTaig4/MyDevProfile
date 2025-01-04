import './Grid.css';
import React from 'react'

const Grid: React.FC = () => {    
    return (
        <div className="Section">
            <div className="row">
                <div className="Column">
                    <image className="img" src="https://www.nemprogrammering.dk/Billeder/PNG/csharp.png"></image>
                </div>
                <div className="Column">
                    <image className="img" src="https://www.nemprogrammering.dk/Billeder/PNG/csharp.png"></image>
                </div>
                <div className="Column">
                    <image className="img" src="https://www.nemprogrammering.dk/Billeder/PNG/csharp.png"></image>
                </div>
                <div className="Column">
                    <image className="img" src="https://www.nemprogrammering.dk/Billeder/PNG/csharp.png"></image>
                </div>
            </div>

            <div className="row">
                <div className="Column">
                    <image className="img" src="https://www.nemprogrammering.dk/Billeder/PNG/csharp.png"></image>
                </div>
                <div className="Column">
                    <image className="img" src="https://www.nemprogrammering.dk/Billeder/PNG/csharp.png"></image>
                </div>
                <div className="Column">
                    <image className="img" src="https://www.nemprogrammering.dk/Billeder/PNG/csharp.png"></image>
                </div>
                <div className="Column">
                    <image className="img" src="https://www.nemprogrammering.dk/Billeder/PNG/csharp.png"></image>
                </div>
            </div>
        </div>
    );
}

export default Grid;