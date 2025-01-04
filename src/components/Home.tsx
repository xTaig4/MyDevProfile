import React from "react";
import "./Home.css";

const Home: React.FC = () => {
    return (
        <div>
            <section>
                <div className='column-container'>
                    <div className='left-column' >
                        <h1 id="quote">
                            Hello, I am  <br></br>
                            Tai Nguyen
                        </h1>
                    </div>

                    <div className='right-column'>
                        <div className='imgContainer'>
                            <img id='myImg'
                                src='https://cdn.discordapp.com/attachments/668167761792466963/1316025712204972032/20241210_135217.jpg?ex=676174f4&is=67602374&hm=55ca3039f7aa87de7d8314b9ceed3474b415eefd2a89501301558f05aea3c60c&'
                            ></img>
                      </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Home;