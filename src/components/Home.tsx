import React from "react";
import "./Home.css";

const Home: React.FC = () => {
    return (
        <div>
            <section>
                <div className='column-container'>
                    <div className='left-column' >
                        <pre id="quote">
                            Quote text for display  <br></br>
                            I just have to win. . . right, Izuku?
                        </pre>
                        <button className='random-button'> Random quote! </button>
                    </div>

                    <div className='right-column'>
                        <div className='imgContainer'>
                            <img id='myImg'
                                src='https://cdn.discordapp.com/attachments/668167761792466963/1316025712204972032/20241210_135217.jpg?ex=675b8634&is=675a34b4&hm=72454e2846b12b3a6a2f8879c5bc7d832ba09c477d199f626024df6421741e0f&'
                            ></img>
                      </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Home;