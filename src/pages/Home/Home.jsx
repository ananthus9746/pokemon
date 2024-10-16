import React from "react";

const Home = () => {
    return (
        <div class="wrapper">
            
            <header>
                <h1>Pokemon GameBoy CSS-Framework</h1>
                <span>This is a demo of a joke CSS-framework.</span>
            </header>
            <main>
                <section class="framed contains-code">
                    <h2>Frames</h2>
                    <p>Frames can be used to clearly indicate sections or menu's.</p>

                    <div class="viewable-code">
                        <div class="framed primary">
                            <span>Frames can be styled with the primary...</span>
                        </div>

                        <div class="framed secondary">
                            <span>... secondary and danger accents.</span>
                        </div>

                        <div class="framed danger">
                            <span>Letters will be outlined when an accent is applied.</span>
                        </div>

                        <div class="framed primary exclude-border">
                            <span>Use the 'exclude-border' class to not draw the accent under the border.</span>
                        </div>

                        <div class="framed no-hd">
                            <span>You can get the frame in it's original (unscaled) size by adding the no-hd class.</span>
                        </div>
                    </div>
                </section>
                <section class="framed contains-code">
                    <h2>Buttons</h2>
                    <p>Buttons are recognizable by their text being uppercase. Hover over buttons to see a selection
                        indicator</p>

                    <div class="viewable-code">
                        <button>This is an example button</button>
                    </div>

                    <p>You can organize buttons like you would see them in Pokémon, either in a list (start-menu) or in a
                        group of 4.</p>

                    <div class="options viewable-code">
                        <div>
                            <h3>Start menu style</h3>
                            <ul class="framed buttons">
                                <li><button>Pokédex</button></li>
                                <li><button>Pokémon</button></li>
                                <li><button>Item</button></li>
                                <li><button>Player</button></li>
                                <li><button>Save</button></li>
                                <li><button>Option</button></li>
                                <li><button>Exit</button></li>
                            </ul>
                        </div>
                        <div>
                            <h3>Battle style</h3>
                            <ul class="framed buttons compact">
                                <li><button>Fight</button></li>
                                <li><button class="pokemon">PKMN</button></li>
                                <li><button>Item</button></li>
                                <li><button>Run</button></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section class="framed contains-code">
                    <h2>Progress / Health Bar</h2>
                    <p>Like in the game, this progress/health bar changes colour when it's low (by default).</p>

                    <div class="viewable-code">
                        <div class="progress-bar-container">
                            <label for="progressBarG">Good health:</label>
                            <div class="progress-bar p100" id="progressBarG"></div>
                        </div>
                        <div class="progress-bar-container">
                            <label for="progressBarP">Poor health:</label>
                            <div class="progress-bar p50" id="progressBarP"></div>
                        </div>
                        <div class="progress-bar-container">
                            <label for="progressBarL">Low health:</label>
                            <div class="progress-bar p20" id="progressBarL"></div>
                        </div>
                        <div class="progress-bar-container">
                            <label for="progressBarF">Forced color:</label>
                            <div class="progress-bar p20 primary" id="progressBarF"></div>
                        </div>
                        <div class="progress-bar-container">
                            <label for="progressBarR">Using &lt;Progress&gt;*:</label>
                            <progress id="progressBarR" class="p20" value="20" max="100">20%</progress>
                        </div>
                        <p>
                            <em>* On Google Chrome the &lt;Progress&gt; element does not support changing color based on
                                [value] attribute. Apply a .p1 - .p100 class to the progressbar for maximum
                                compatibility.</em>
                        </p>
                    </div>
                </section>
            </main>
            <div id="githubHint">
                <div class="framed neutral github">
                    <div class="stats">
                        <h2>Helix Fossil</h2>
                        <div class="progress-bar-container">
                            <label for="progressBar">HP:</label>
                            <div class="progress-bar p45" id="progressBar"></div>
                        </div>
                    </div>
                    <div class="opponent">
                        <img src="./styles/images/helix-hd.png" alt=""/>
                    </div>
                    <div class="framed">
                        <p class="message"><span>Helix Fossil:</span> Please come to GitHub and help me make this project
                            better!</p>
                        <p>
                            <a href="https://github.com/luttje/css-pokemon-gameboy/" target="_new" class="button">Go to
                                GitHub Repo</a>
                        </p>
                        <p>
                            <a href="javascript:var gh = document.getElementById('githubHint'); gh.classList.add('closed');"
                                class="button">Close this message</a>
                        </p>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Home;
