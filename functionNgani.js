// Select all menu hyperlinks
const menuLinks = document.querySelectorAll('.userMenu .menu a, .userMenu .sources a');
const hoverSound = document.getElementById('selectingSound');

let audioEnabled = true;

// Enable audio playback after user interaction
document.addEventListener('mouseover', () => {
    audioEnabled = true;
});

// Add event listeners for hover
menuLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        if (audioEnabled) {
            hoverSound.play();
        }
    });
});

import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.0.0/+esm';
import bcrypt from 'https://cdn.jsdelivr.net/npm/bcryptjs/+esm';

const supabaseUrl = 'https://qnhciscuypjihlebiyuy.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFuaGNpc2N1eXBqaWhsZWJpeXV5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIwMjkxODUsImV4cCI6MjA1NzYwNTE4NX0.ZbLXbq2gauvJN8tpQjGqQnMkXKvgB_78ewCdscd00ag';
const supabase = createClient(supabaseUrl, supabaseKey);



document.addEventListener("DOMContentLoaded", async function () {
    // Login
    const authContainer = document.querySelector(".login-container");
    const mainContainer = document.querySelector(".main-container");

    const loginBox = document.querySelector(".login-box");
    const registerBox = document.querySelector(".register-box");

    const loginShowPassword = document.querySelector("#login-show-password");
    const loginEyeIcon = document.querySelector("#login-eye-icon");

    const loginUsername = document.querySelector("#login-username");
    const loginPassword = document.querySelector("#login-password");
    const loginButton = document.querySelector("#login-button");

    const registerUsername = document.querySelector("#register-username");
    const registerPassword = document.querySelector("#register-password");
    const registerID = document.querySelector("#register-id");
    const registerTitle = document.querySelector("#register-title");
    const registerSection = document.querySelector("#register-section");
    const registerButton = document.querySelector("#register-button");

    const showRegister = document.querySelector("#show-register");
    const showLogin = document.querySelector("#show-login");

    const logoutButton = document.querySelector("#logout-button");
    const profileName = document.querySelector(".profile-name");
    const profileID = document.querySelector(".profile-id");
    const profileTitle = document.querySelector(".profile-title");
    const profileSection = document.querySelector(".profile-section");

    const profilePicture = document.querySelector("#profile-picture");
    const profileInput = document.querySelector("#input-file");
    const profilePoints = document.querySelector(".points");

    // Menu 
    const userMenu = document.querySelector('.userMenu');
    const logo = document.querySelector('.logo');
    const corruptedText = document.querySelector('.text');
    const notifier = document.querySelector('.customNotifier');

    const playButton = document.querySelector(".menu .play");
    const profileButton = document.querySelector(".menu .profile");
    const settingsButton = document.querySelector(".menu .settings");
    const leaderboardButton = document.querySelector(".menu .leaderboard");
    const creditsButton = document.querySelector(".menu .credits");

    const playMenu = document.querySelector(".playMenu");
    const profileMenu = document.querySelector(".profileMenu");
    const settingsMenu = document.querySelector(".settingsMenu");
    const leaderboardMenu = document.querySelector(".leaderboardMenu");
    const creditsMenu = document.querySelector(".creditsMenu");

    const normalButton = document.getElementById('normal-button');
    const difficultiesMenu = document.querySelector('.difficultiesMenu');
    const languageMenu = document.querySelector('.languageMenu');

    const gameScreen = document.querySelector('.gameScreen');
    const submitAnswer = document.querySelector('.submit');

    const randomText = document.querySelector('.randomtext');
    const feedback = document.querySelector('.feedback');
    const note = document.querySelector('.note');

    const buttons = [playButton, profileButton, settingsButton, leaderboardButton, creditsButton];
    const menus = [playMenu, profileMenu, settingsMenu, leaderboardMenu, creditsMenu];

    difficultiesMenu.style.display = 'none';
    languageMenu.style.display = 'none';
    gameScreen.style.display = 'none';
    corruptedText.style.top = '50px';
    randomText.style.display = 'none'; 
    feedback.style.display = 'none';

    let selectedLanguage = "";
    let selectedDifficulty = "";

    normalButton.addEventListener('click', () => {
        languageMenu.style.display = 'block'; 
    });

    playButton.addEventListener('click', () => {
        corruptedText.style.top = '50px';
    });

    languageMenu.addEventListener('click', () => {
        difficultiesMenu.style.display = 'block';
    });


    loginShowPassword.addEventListener("change", function () {
        const loginPassword = document.querySelector("#login-password");
        if (loginShowPassword.checked) {
            loginPassword.type = "text";
            loginEyeIcon.classList.remove("fa-eye");
            loginEyeIcon.classList.add("fa-eye-slash");
        } else {
            loginPassword.type = "password";
            loginEyeIcon.classList.remove("fa-eye-slash");
            loginEyeIcon.classList.add("fa-eye");
        }
    });

    

    function validateLoginInputs() {
        if (loginUsername.value.trim() !== "" && loginPassword.value.trim() !== "") {
            loginButton.disabled = false;
        } else {
            loginButton.disabled = true;
        }
    }

    loginUsername.addEventListener("input", validateLoginInputs);
    loginPassword.addEventListener("input", validateLoginInputs);
    //game  
    
    const buggyCodeSamples = {
        java: {
            easy: [
                'public class Main {\n    \npublic static void main(String[] args) {\n    print("Hello World")\n   }\n}',
                'public class Main {\n    \npublic static void main(String[] args) {\n    string x;\n    system.out.print(x);\n   }\n}',
                'public class Main {\n    \npublic static void main(String[] args) {\n    int a = 5;\n    int b = 10\n    System.out.println(a + b);\n   }\n}',
                'public class Main {\n    \npublic static void main(String[] args) {\n    String name = "Jhon Doe";\n    System.our.println(name);\n   }\n}',
                'public class Main {\n    \npublic static void main(String[] args) {\n   boolen switch;\n   switch = "true";\n   if(switch = true) {\n      System.out.println("The light switch is on");\n   } else {\n      System.out.println("The light switch is off")\n   }\n}',
                'public class Main {\n    \npublic static void main(String[] args) {\n    String school = "STI";\n      String goal = "";\n         System.out.println(school + goal);\n    }\n',
                'public class Main {\n    \npublic static void main(String[] args) {\n    System.out.println("Hello, Easy!");\n    }\n}',
                'public class Main {\n    \npublic static void main(String[] args) {\n    System.out.println("Hello, Buggy!");\n    }\n}', 
                'public class Main {\n    \npublic static void main(String[] args) {\n    System.out.println("Hello, Code!");\n    }\n}', 
                'public class Main {\n    \npublic static void main(String[] args) {\n    System.out.println("Hello, World!");\n    }\n}',
                'public class Main {\n    \npublic static void main(String[] args) {\n    System.out.println("Hello, MY LOVE!");\n    }\n}',
                'public class Main {\n    \npublic static void main(String[] args) {\n    System.out.println("Hello, SUNSHINE!");\n    }\n}',
                'public class Main {\n    \npublic static void main(String[] args) {\n    System.out.println("Hello, NEIGHBOR!");\n    }\n}'
            ],
            moderate: [
                'public class Calculator {\n  public int add(int a, int b) {\n      return a + b;\n}\n \n  public int subtract(int a, int b) {\n      return a - b;\n   }\n}',
                'public class Calculator {\n  public int add(int a, int b) {\n      return a + b;\n}\n \n  public int subtract(int a, int b) {\n      return a - b;\n   }\n}',
                'public class Calculator {\n  public int add(int a, int b) {\n      return a + b;\n}\n \n  public int subtract(int a, int b) {\n      return a - b;\n   }\n}',
                'public class Calculator {\n  public int add(int a, int b) {\n      return a + b;\n}\n \n  public int subtract(int a, int b) {\n      return a - b;\n   }\n}',
                'public class Calculator {\n  public int add(int a, int b) {\n      return a + b;\n}\n \n  public int subtract(int a, int b) {\n      return a - b;\n   }\n}'
            ],
            hardcore: [
                'import java.util.ArrayList;\n    import java.util.List;\n    public class DataManager {\n    List<String> data = new ArrayList<>();\n    \n    public void addData(String item) {\n    data.add(item);\n   }\n}',
                'import java.util.ArrayList;\n    import java.util.List;\n    public class DataManager {\n    List<String> data = new ArrayList<>();\n    \n    public void addData(String item) {\n    data.add(item);\n   }\n}',
                'import java.util.ArrayList;\n    import java.util.List;\n    public class DataManager {\n    List<String> data = new ArrayList<>();\n    \n    public void addData(String item) {\n    data.add(item);\n   }\n}',
                'import java.util.ArrayList;\n    import java.util.List;\n    public class DataManager {\n    List<String> data = new ArrayList<>();\n    \n    public void addData(String item) {\n    data.add(item);\n   }\n}',
                'import java.util.ArrayList;\n    import java.util.List;\n    public class DataManager {\n    List<String> data = new ArrayList<>();\n    \n    public void addData(String item) {\n    data.add(item);\n   }\n}'
            ]
    },
    html: {
        easy: [
            `<!DOCTYPE html>\n<html>\n<head>\n    <title>Welcome Page</title>\n</head>\n<body>\n    <h1>Welcome to Corrupted Prompt</h1>\n    <p>Enjoy the game!</p>\n</body>\n</html>`,
            `<!DOCTYPE html>\n<html>\n<head>\n    <title>Sample Page</title>\n</head>\n<body>\n    <h1>Sample Header</h1>\n    <p>Sample paragraph.</p>\n</body>\n</html>`,
            `<!DOCTYPE html>\n<html>\n<head>\n    <title>Test Page</title>\n</head>\n<body>\n    <h1>Test Header</h1>\n    <p>Test paragraph.</p>\n</body>\n</html>`,
            `<!DOCTYPE html>\n<html>\n<head>\n    <title>Example Page</title>\n</head>\n<body>\n    <h1>Example Header</h1>\n    <p>Example paragraph.</p>\n</body>\n</html>`,
            `<!DOCTYPE html>\n<html>\n<head>\n    <title>Demo Page</title>\n</head>\n<body>\n    <h1>Demo Header</h1>\n    <p>Demo paragraph.</p>\n</body>\n</html>`
        ],
        moderate: [
            `<div class="container">\n    <h2>Game Modes</h2>\n    <ul>\n        <li>Normal Mode</li>\n        <li>Moderate Mode</li>\n        <li>Hard Mode</li>\n    </ul>\n</div>`,
            `<div class="content">\n    <h1>Welcome</h1>\n    <p>This is a sample content block.</p>\n</div>`,
            `<div class="header">\n    <h1>Header</h1>\n    <nav>\n        <ul>\n            <li>Home</li>\n            <li>About</li>\n            <li>Contact</li>\n        </ul>\n    </nav>\n</div>`,
            `<section>\n    <h2>Section Title</h2>\n    <p>Section content goes here.</p>\n</section>`,
            `<footer>\n    <p>Footer content</p>\n</footer>`
        ],
        hardcore: [
            `<form action="submit.php" method="post">\n    <label for="username">Username:</label>\n    <input type="text" id="username" name="username">\n    <input type="submit" value="Submit">\n</form>`,
            `<form>\n    <label for="email">Email:</label>\n    <input type="email" id="email" name="email">\n    <button type="submit">Submit</button>\n</form>`,
            `<article>\n    <h1>Article Title</h1>\n    <p>Article content goes here.</p>\n</article>`,
            `<aside>\n    <h2>Sidebar</h2>\n    <p>Sidebar content goes here.</p>\n</aside>`,
            `<header>\n    <h1>Header Title</h1>\n    <p>Header description.</p>\n</header>`
        ]
    },
    css: {
        easy: [
            `body {\n    background-color: yellow;\n    color: #fff;\n    font-family: Arial, sans-serif;\n}`,
            `h1 {\n    color: blue;\n    font-size: 24px;\n    text-align: center;\n}`,
            `p {\n    color: green;\n    font-size: 16px;\n    line-height: 1.5;\n}`,
            `.container {\n    width: 80%;\n    margin: 0 auto;\n    padding: 20px;\n}`,
            `.button {\n    background-color: red;\n    color: white;\n    padding: 10px;\n    border-radius: 5px;\n}`
        ],
        moderate: [
            `.header {\n    background-color: #333;\n    color: white;\n    padding: 10px;\n    text-align: center;\n}`,
            `.footer {\n    background-color: #222;\n    color: #ccc;\n    padding: 20px;\n    text-align: center;\n}`,
            `.nav {\n    display: flex;\n    justify-content: space-around;\n    background-color: #444;\n    padding: 10px;\n}`,
            `.card {\n    border: 1px solid #ccc;\n    padding: 15px;\n    border-radius: 10px;\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n}`,
            `.grid {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    gap: 20px;\n}`
        ],
        hardcore: [
            `#container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100vh;\n}`,
            `.modal {\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    background-color: white;\n    padding: 20px;\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\n}`,
            `.tooltip {\n    position: relative;\n    display: inline-block;\n    cursor: pointer;\n}`,
            `.tooltip .tooltip-text {\n    visibility: hidden;\n    width: 120px;\n    background-color: black;\n    color: #fff;\n    text-align: center;\n    padding: 5px;\n    border-radius: 5px;\n    position: absolute;\n    z-index: 1;\n}`,
            `.tooltip:hover .tooltip-text {\n    visibility: visible;\n}`
        ]
    }};
    
    const solutions = {
        java: {
            easy: [
                'public class Main {\n    \npublic static void main(String[] args) {\n    System.out.print("Hello World!");\n   }\n}',
                'public class Main {\n    \npublic static void main(String[] args) {\n    String x = "Hello World";\n    system.out.print(x);\n   }\n}',
                'public class Main {\n    \npublic static void main(String[] args) {\n    int a = 5;\n    int b = 10;\n    System.out.println(a + b);\n   }\n}',
                'public class Main {\n    \npublic static void main(String[] args) {\n    System.out.println("Hello, Neighbor!");\n   }\n}',
                'public class Main {\n    \npublic static void main(String[] args) {\n   boolen switch;\n   switch = true;\n   if(switch = true) {\n      System.out.println("The light switch is on");\n   } else {\n      System.out.println("The light switch is off")\n   }\n}',
                'public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, Java!");\n    }\n}',
                'public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, Easy!");\n    }\n}',
                'public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, Buggy!");\n    }\n}',
                'public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, Code!");\n    }\n}',
                'public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n    }\n}',
                'public class Main {\n    \npublic static void main(String[] args) {\n    System.out.println("Hello, MY LOVE!");\n    }\n}',
                'public class Main {\n    \npublic static void main(String[] args) {\n    System.out.println("Hello, SUNSHINE!");\n    }\n}',
                'public class Main {\n    \npublic static void main(String[] args) {\n    System.out.println("Hello, NEIGHBOR!");\n    }\n}'
            ],
            moderate: [
                'public class Calculator {\n  public int add(int a, int b) {\n      return a + b;\n}\n \n  public int subtract(int a, int b) {\n      return a - b;\n   }\n}',
                'public class Calculator {\n  public int add(int a, int b) {\n      return a + b;\n}\n \n  public int subtract(int a, int b) {\n      return a - b;\n   }\n}',
                'public class Calculator {\n  public int add(int a, int b) {\n      return a + b;\n}\n \n  public int subtract(int a, int b) {\n      return a - b;\n   }\n}',
                'public class Calculator {\n  public int add(int a, int b) {\n      return a + b;\n}\n \n  public int subtract(int a, int b) {\n      return a - b;\n   }\n}',
                'public class Calculator {\n  public int add(int a, int b) {\n      return a + b;\n}\n \n  public int subtract(int a, int b) {\n      return a - b;\n   }\n}'
            ],
            hardcore: [
                'import java.util.ArrayList;\n    import java.util.List;\n    public class DataManager {\n    List<String> data = new ArrayList<>();\n    \n    public void addData(String item) {\n    data.add(item);\n   }\n}',
                'import java.util.ArrayList;\n    import java.util.List;\n    public class DataManager {\n    List<String> data = new ArrayList<>();\n    \n    public void addData(String item) {\n    data.add(item);\n   }\n}',
                'import java.util.ArrayList;\n    import java.util.List;\n    public class DataManager {\n    List<String> data = new ArrayList<>();\n    \n    public void addData(String item) {\n    data.add(item);\n   }\n}',
                'import java.util.ArrayList;\n    import java.util.List;\n    public class DataManager {\n    List<String> data = new ArrayList<>();\n    \n    public void addData(String item) {\n    data.add(item);\n   }\n}',
                'import java.util.ArrayList;\n    import java.util.List;\n    public class DataManager {\n    List<String> data = new ArrayList<>();\n    \n    public void addData(String item) {\n    data.add(item);\n   }\n}'
            ]
        },
        html: {
            easy: [
                `<!DOCTYPE html>\n<html>\n<head>\n    <title>Welcome Page</title>\n</head>\n<body>\n    <h1>Welcome to Corrupted Prompt</h1>\n    <p>Enjoy the game!</p>\n</body>\n</html>`,
                `<!DOCTYPE html>\n<html>\n<head>\n    <title>Sample Page</title>\n</head>\n<body>\n    <h1>Sample Header</h1>\n    <p>Sample paragraph.</p>\n</body>\n</html>`,
                `<!DOCTYPE html>\n<html>\n<head>\n    <title>Test Page</title>\n</head>\n<body>\n    <h1>Test Header</h1>\n    <p>Test paragraph.</p>\n</body>\n</html>`,
                `<!DOCTYPE html>\n<html>\n<head>\n    <title>Example Page</title>\n</head>\n<body>\n    <h1>Example Header</h1>\n    <p>Example paragraph.</p>\n</body>\n</html>`,
                `<!DOCTYPE html>\n<html>\n<head>\n    <title>Demo Page</title>\n</head>\n<body>\n    <h1>Demo Header</h1>\n    <p>Demo paragraph.</p>\n</body>\n</html>`
            ],
            moderate: [
                `<div class="container">\n    <h2>Game Modes</h2>\n    <ul>\n        <li>Normal Mode</li>\n        <li>Moderate Mode</li>\n        <li>Hard Mode</li>\n    </ul>\n</div>`,
                `<div class="content">\n    <h1>Welcome</h1>\n    <p>This is a sample content block.</p>\n</div>`,
                `<div class="header">\n    <h1>Header</h1>\n    <nav>\n        <ul>\n            <li>Home</li>\n            <li>About</li>\n            <li>Contact</li>\n        </ul>\n    </nav>\n</div>`,
                `<section>\n    <h2>Section Title</h2>\n    <p>Section content goes here.</p>\n</section>`,
                `<footer>\n    <p>Footer content</p>\n</footer>`
            ],
            hardcore: [
                `<form action="submit.php" method="post">\n    <label for="username">Username:</label>\n    <input type="text" id="username" name="username" required>\n    <input type="submit" value="Submit">\n</form>`,
                `<form>\n    <label for="email">Email:</label>\n    <input type="email" id="email" name="email" required>\n    <button type="submit">Submit</button>\n</form>`,
                `<article>\n    <h1>Article Title</h1>\n    <p>Article content goes here.</p>\n</article>`,
                `<aside>\n    <h2>Sidebar</h2>\n    <p>Sidebar content goes here.</p>\n</aside>`,
                `<header>\n    <h1>Header Title</h1>\n    <p>Header description.</p>\n</header>`
            ]
        },
        css: {
            easy: [
                `body {\n    background-color: yellow;\n    color: #fff;\n    font-family: Arial, sans-serif;\n}`,
                `h1 {\n    color: blue;\n    font-size: 24px;\n    text-align: center;\n}`,
                `p {\n    color: green;\n    font-size: 16px;\n    line-height: 1.5;\n}`,
                `.container {\n    width: 80%;\n    margin: 0 auto;\n    padding: 20px;\n}`,
                `.button {\n    background-color: red;\n    color: white;\n    padding: 10px;\n    border-radius: 5px;\n}`
            ],
            moderate: [
                `.header {\n    background-color: #333;\n    color: white;\n    padding: 10px;\n    text-align: center;\n}`,
                `.footer {\n    background-color: #222;\n    color: #ccc;\n    padding: 20px;\n    text-align: center;\n}`,
                `.nav {\n    display: flex;\n    justify-content: space-around;\n    background-color: #444;\n    padding: 10px;\n}`,
                `.card {\n    border: 1px solid #ccc;\n    padding: 15px;\n    border-radius: 10px;\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n}`,
                `.grid {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    gap: 20px;\n}`
            ],
            hardcore: [
                `#container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100vh;\n}`,
                `.modal {\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    background-color: white;\n    padding: 20px;\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\n}`,
                `.tooltip {\n    position: relative;\n    display: inline-block;\n    cursor: pointer;\n}`,
                `.tooltip .tooltip-text {\n    visibility: hidden;\n    width: 120px;\n    background-color: black;\n    color: #fff;\n    text-align: center;\n    padding: 5px;\n    border-radius: 5px;\n    position: absolute;\n    z-index: 1;\n}`,
                `.tooltip:hover .tooltip-text {\n    visibility: visible;\n}`
            ]
        }
    };
    
    const expectedOutputs = {
        java: {
            easy: [
                "Hello World",
                "Hello World",
                "15",
                "Jhon Doe",
                "The light switch is on",
                "",
                "Hello, Easy!",
                "Hello, Buggy!",
                "Hello, Code!",
                "Hello, World!"
            ],
            moderate: [
                "",
                "",
                "",
                "",
                ""
            ],
            hardcore: [
                "",
                "",
                "",
                "",
                ""
            ]
        },
        html: {
            easy: [
                "Welcome to Corrupted Prompt\nEnjoy the game!",
                "Sample Header\nSample paragraph.",
                "Test Header\nTest paragraph.",
                "Example Header\nExample paragraph.",
                "Demo Header\nDemo paragraph."
            ],
            moderate: [
                "Game Modes\nNormal Mode\nModerate Mode\nHard Mode",
                "Welcome\nThis is a sample content block.",
                "Header\nHome About Contact",
                "Section Title\nSection content goes here.",
                "Footer content"
            ],
            hardcore: [
                "",
                "",
                "Article Title\nArticle content goes here.",
                "Sidebar\nSidebar content goes here.",
                "Header Title\nHeader description."
            ]
        },
        css: {
            easy: [
                "Yellow background with white text",
                "Blue header text centered",
                "Green paragraph text with line spacing",
                "Container centered with padding",
                "Red button with rounded corners"
            ],
            moderate: [
                "Header with dark background and white text",
                "Footer with dark background and light text",
                "Navigation bar with flex layout",
                "Card with shadow and rounded corners",
                "Grid layout with three columns"
            ],
            hardcore: [
                "Centered container with flexbox",
                "Modal centered on the screen",
                "Tooltip hidden until hovered",
                "Tooltip text visible on hover",
                "Tooltip text visible on hover"
            ]
        }
    };

    const guideQuestions = {
        java: {
            easy: "The program is missing a statement, it should be printed using 'System'. You should not use the 'println' on a single lined statement",
            moderate: "What’s missing in this Java class definition?",
            hardcore: "How can you fix the data management in this Java code?"
        },
        html: {
            easy: "Why isn’t this HTML structure rendering properly?",
            moderate: "What’s wrong with this HTML layout?",
            hardcore: "How can you make this HTML form work as intended?"
        },
        css: {
            easy: "There is hidden element that prevent the background to have color",
            moderate: "The button contains ID instead of CLASS",
            hardcore: "Why isn’t this flexbox layout working correctly?"
        }
    };
    
    // Initialize question indices for all languages and difficulties
    // Function to shuffle an array
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    let questionOrder = [];
    let questionsAnswered = 0;

    function startGame(language, difficulty, questionIndex = 0, isFirstGame = true) {
        if (isFirstGame) {
            const totalQuestions = buggyCodeSamples[language][difficulty].length;
            questionOrder = shuffleArray(Array.from({ length: totalQuestions }, (_, i) => i)); // Shuffle the order
            questionsAnswered = 0; // Reset the counter
            showCinematicText();
        }

        const currentQuestionIndex = questionOrder[questionIndex];
        initializeGame(language, difficulty, currentQuestionIndex);
    }

    function updateProgress() {
        const progressText = document.querySelector('.progress .p1');
        progressText.textContent = `Progress: ${questionsAnswered}/10`;
    }

    
    
    async function handleSubmit(language, difficulty) {
        const userCode = window.editor.getValue().trim();
        const correctCodes = solutions[language]?.[difficulty];
        const customNotification = document.getElementById('customNotification');
        const submitButton = document.getElementById('submit-button');
        submitButton.disabled = true;
    
        function normalizeCode(code) {
            return code.replace(/\s+/g, ' ').trim();
        }
    
        if (correctCodes && correctCodes.some(correctCode => normalizeCode(userCode) === normalizeCode(correctCode))) {
             customNotification.style.display = 'block';
                        customNotification.innerHTML = '<p>YOU FIXED IT!';
                        customNotification.style.color = 'green';
                        customNotification.style.border = '2px solid rgb(0, 255, 42)';
                        customNotification.style.boxShadow = '0 0 10px rgb(0, 255, 115), 0 0 20px rgb(30, 255, 0)';
                        customNotification.style.webkitTextStroke = '2px #00ff80';
                        points++;
                
                } else {
                        customNotification.style.display = 'block';
                        customNotification.innerHTML = '<p>SYNTAX ERROR!</p>';
                        customNotification.style.color = 'red';
                        customNotification.style.border = '2px solid red';
                        customNotification.style.webkitTextStroke = '2px white';
                        customNotification.style.boxShadow = '0 0 10px rgb(255, 0, 128), 0 0 20px rgb(255, 0, 76)';
                }
        // Increment questionsAnswered and update progress
        questionsAnswered++;
        updateProgress();
    
        if (questionsAnswered >= 10) {
            // All 10 questions answered, show Game Over screen
            setTimeout(async () => {
                customNotification.style.display = 'none';
            
                const loggedInUser = localStorage.getItem('loggedInUser');
                const userData = JSON.parse(localStorage.getItem(loggedInUser));
                const totalPoints = (userData.points || 0) + points;
                
                try {
                    const { data, error } = await supabase
                    .from("user")
                    .update({ points: totalPoints })
                    .eq("username", loggedInUser);

                    if (error) {
                        console.error("Error updating points:", error);
                    } else {
                        console.log("Points updated successfully in database:", data);
                        userData.points = totalPoints; // Update local storage
                        localStorage.setItem(loggedInUser, JSON.stringify(userData));
                    }
                } catch (error) {
                    console.error("Error updating points:", error);
                }
                showGameOverScreen();
            }, 1000);
        } else {
            // Move to the next question in the shuffled order
            const nextQuestionIndex = questionsAnswered; // Use the next index in the shuffled order
            setTimeout(() => {
                customNotification.style.display = 'none';
                submitButton.disabled = false;
                startGame(language, difficulty, nextQuestionIndex, false);
            }, 1000);
        }
    }
    
    function initializeGame(language, difficulty, questionIndex) {
        console.log("Game is starting...");
    
        document.querySelector('.gameScreen').style.display = 'block';
    
        const unfixedCodeDiv = document.querySelector('.unfixedCode');
        const guideTextDiv = document.querySelector('.guide-text');
        const editorContainer = document.getElementById('editor-container');
        const expectedOutputDiv = document.getElementById('expectedOutput'); // New expected output div
        const submitButton = document.getElementById('submit-button');
    
        if (!editorContainer) {
            console.error("Editor container not found in the DOM.");
            return;
        }
    
        if (!buggyCodeSamples[language]) {
            console.error(`Language "${language}" not found in buggyCodeSamples.`);
            unfixedCodeDiv.innerHTML = `<pre>Language "${language}" not found.</pre>`;
            return;
        }
        if (!buggyCodeSamples[language][difficulty]) {
            console.error(`Difficulty "${difficulty}" not found for language "${language}".`);
            unfixedCodeDiv.innerHTML = `<pre>Difficulty "${difficulty}" not found for language "${language}".</pre>`;
            return;
        }
    
        const code = buggyCodeSamples[language][difficulty][questionIndex];
        const guide = guideQuestions[language]?.[difficulty];
        const expectedOutput = expectedOutputs[language]?.[difficulty][questionIndex]; // Get the expected output
    
        const escapedCode = code.replace(/</g, '&lt;').replace(/>/g, '&gt;');
        unfixedCodeDiv.innerHTML = `<pre>${escapedCode}</pre>`;
    
        guideTextDiv.innerHTML = guide ? `<p>${guide}</p>` : '<p>No guide available for this selection</p>';
    
        // Populate the expected output
        expectedOutputDiv.textContent = expectedOutput ? expectedOutput : "No expected output available.";
    
        document.querySelector('.gameTitle').textContent = `${language.toUpperCase()} - ${difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}`;
    
        // Show the game screen
        document.querySelector('.gameScreen').style.display = 'block';
        document.querySelector('.languageMenu').style.display = 'none';
        document.querySelector('.difficultiesMenu').style.display = 'none';
        document.querySelector('.randomtext').style.display = 'none';
        document.querySelector('.feedback').style.display = 'none';
        document.querySelector('.logo').style.display = 'none';
        document.querySelector('.customNotifier').style.display = 'none';
        document.querySelector('.userMenu').style.display = 'none';
        document.querySelector('.note').style.display = 'none';
    
        require.config({ paths: { 'vs': 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.43.0/min/vs' } });
        require(['vs/editor/editor.main'], function () {
            if (window.editor) {
                window.editor.dispose();
            }
    
            window.editor = monaco.editor.create(editorContainer, {
                value: code || '',
                language: language,
                theme: 'vs-dark',
                fontSize: 14,
                automaticLayout: true 
            });
        });
    
        // Reattach submit button logic
        submitButton.disabled = false; // Ensure the button is enabled
        submitButton.replaceWith(submitButton.cloneNode(true));
        const newSubmitButton = document.getElementById('submit-button');
        newSubmitButton.addEventListener('click', () => handleSubmit(language, difficulty));
    }
    
    // Pool of buggy code templates
const infiniteBuggyCodeTemplates = {
    java: [
        'public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n    }\n}',
        'public class Calculator {\n    public int add(int a, int b) {\n        return a + b;\n    }\n}',
        'import java.util.ArrayList;\npublic class DataManager {\n    ArrayList<String> data = new ArrayList<>();\n    public void addData(String item) {\n        data.add(item);\n    }\n}'
    ],
    html: [
        '<!DOCTYPE html>\n<html>\n<head>\n    <title>Sample Page</title>\n</head>\n<body>\n    <h1>Welcome</h1>\n</body>\n</html>',
        '<div class="container">\n    <h2>Game Modes</h2>\n    <ul>\n        <li>Normal</li>\n        <li>Infinite</li>\n    </ul>\n</div>',
        '<form action="/submit" method="post">\n    <label for="name">Name:</label>\n    <input type="text" id="name" name="name">\n    <input type="submit" value="Submit">\n</form>'
    ],
    css: [
        'body {\n    background-color: #fff;\n    color: #000;\n    font-family: Arial, sans-serif;\n}',
        '.button {\n    background-color: blue;\n    color: white;\n    padding: 10px;\n    border-radius: 5px;\n}',
        '#container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100vh;\n}'
    ]
};

let points = 0;


// Function to introduce random bugs into code
function generateBuggyCode(language) {
    const templates = infiniteBuggyCodeTemplates[language];
    if (!templates) {
        console.error(`No templates found for language: ${language}`);
        return '/* No buggy code available for this language */';
    }

    // Select a random template
    const template = templates[Math.floor(Math.random() * templates.length)];

    // Introduce random bugs
    let buggyCode = template;
    if (language === 'java') {
        buggyCode = buggyCode.replace('System.out.println', 'system.out.println'); // Lowercase 'System'
        buggyCode = buggyCode.replace(';', ''); // Remove semicolons
    } else if (language === 'html') {
        buggyCode = buggyCode.replace('<h1>', '<h1'); // Missing closing '>'
        buggyCode = buggyCode.replace('</h1>', '</h1 '); // Extra space in closing tag
    } else if (language === 'css') {
        buggyCode = buggyCode.replace('background-color', 'backgroundcolor'); // Typo in property name
        buggyCode = buggyCode.replace(':', ''); // Remove colons
    }

    return buggyCode;
}


// Attach event listener to the infinite button
document.getElementById('infinite-button').addEventListener('click', startInfiniteMode);
    
    // Event listeners for language selection
    document.querySelectorAll('.languageMenu div').forEach(option => {
        option.addEventListener('click', function () {
            selectedLanguage = option.getAttribute('data-language');
            console.log("Selected language:", selectedLanguage);

            // Hide language menu and show difficulties menu
            languageMenu.style.display = "none";
            difficultiesMenu.style.display = "block";
        });
    });

    // Event listeners for difficulty selection
    document.querySelectorAll('.difficultiesMenu div').forEach(option => {
        option.addEventListener('click', function () {
            selectedDifficulty = option.getAttribute('data-difficulty'); 
            console.log("Selected difficulty:", selectedDifficulty);

            // Hide difficulties menu and show game screen
            difficultiesMenu.style.display = "none";
            gameScreen.style.display = "block";

            // Start the game with the selected language and difficulty
            startGame(selectedLanguage, selectedDifficulty);
        });
    });
    
    //---------------------------------------
    
    
    
    /* open and close */
    document.querySelectorAll('.languageMenu div').forEach(option => {
        option.addEventListener('click', () => {
            document.querySelector('.languageMenu').style.display = 'none';
        });
    });
    document.querySelector('.play').addEventListener('click', () => {
        document.querySelector('.languageMenu').style.display = 'none';
    });
    
    document.querySelectorAll('.difficultiesMenu div').forEach(option => {
        option.addEventListener('click', () => {
            document.querySelector('.difficultiesMenu').style.display = 'none';
        });
    });

    document.querySelector('.play').addEventListener('click', () => {
        document.querySelector('.difficultiesMenu').style.display = 'none';
    });

    function toggleMenu(menu, button) {
        const isOpen = menu.classList.toggle("show");
        button.classList.toggle("active", isOpen);
        menus.forEach((m, i) => {
            if (m !== menu) {
                m.classList.remove("show");
                buttons[i].classList.remove("active");
            }
        });
    }

    function closeMenu(menu, button) {
        menu.classList.remove("show");
        button.classList.remove("active");
    }

    buttons.forEach((button, index) => {
        if (button) {
            button.addEventListener("click", function (event) {
                event.stopPropagation();
                toggleMenu(menus[index], button);
            });
        }
    });

    document.addEventListener("click", function (event) {
        menus.forEach((menu, i) => {
            if (!menu.contains(event.target) && !buttons[i].contains(event.target)) {
                closeMenu(menu, buttons[i]);
            }
        });
    });

    showRegister.addEventListener("click", function (event) {
        event.preventDefault();
        console.log("Register clicked");
        loginBox.style.display = "none";
        registerBox.style.display = "block";
        
    });

    // Event listener for "Login" hyperlink
    showLogin.addEventListener("click", function (event) {
        event.preventDefault();
        registerBox.style.display = "none";
        loginBox.style.display = "block";
    });
    
    registerButton.addEventListener("click", async function () {
        const username = document.getElementById("register-username").value.trim();
        const password = document.getElementById("register-password").value.trim();
        const id = document.getElementById("register-id").value.trim();
        const section = document.getElementById("register-section").value.trim();
        const title = document.getElementById("register-title").value.trim();
    
        if (!username || !password || !id || !section || !title) {
            alert("Please fill out all fields.");
            return;
        }
        
        try {
            const hashedPassword = await bcrypt.hash(password, 10);
            const { data, error } = await supabase
                .from("user")
                .insert([
                    {
                        username: username,
                        password: hashedPassword,
                        id: id,
                        section: section,
                        title: title,
                        points: 0
                    },
                ]);
    
            if (error) {
                console.error("Error registering user:", error);
                alert(`Registration failed: ${error.message}`);
                return;
            }
    
            alert("Registration successful!");
            registerBox.style.display = "none";
            loginBox.style.display = "block";
        } catch (error) {
            console.error("Unexpected error during registration:", error);
            alert("An unexpected error occurred. Please try again.");
        }
    });

    // Login button logic
    loginButton.addEventListener("click", async function () {
        const username = loginUsername.value.trim();
        const password = loginPassword.value.trim();

        if (!username || !password) {
            alert("Please fill out both username and password.");
            return;
        }

        try {
            const { data: users, error } = await supabase
                .from("user")
                .select("username, password, id, section, title, points")
                .eq("username", username);

            if (error) {
                console.error("Error fetching user data:", error);
                alert("An error occurred while logging in. Please try again.");
                return;
            }

            if (!users || users.length === 0) {
                alert("Invalid username or password.");
                return;
            }

            const user = users[0];
            const isPasswordValid = await bcrypt.compare(password, user.password);

            if (!isPasswordValid) {
                alert("Invalid username or password.");
                return;
            }

            alert("Login successful!");

            // Update UI after login
            authContainer.style.display = "none";
            mainContainer.style.display = "block";
            randomText.style.display = "block";
            feedback.style.display = "block";

            // Update user data in localStorage
            const userData = {
                id: user.id,
                title: user.title,
                section: user.section,
                profilePicture: "",
                points: user.points || 0,
            };
            localStorage.setItem("loggedInUser", username);
            localStorage.setItem(username, JSON.stringify(userData));

            // Update profile information
            profileName.textContent = username;
            profileID.textContent = `ID: ${user.id}`;
            profileTitle.textContent = `Status: ${user.title}`;
            profileSection.textContent = user.section;
            profilePicture.src = userData.profilePicture || "noprofile.jpg";
            profilePoints.textContent = `Total Points: ${user.points || 0}`;
        } catch (error) {
            console.error("Unexpected error during login:", error);
            alert("An unexpected error occurred. Please try again.");
        }
    });

    profileInput.addEventListener("change", function () {
        const file = profileInput.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                profilePicture.src = e.target.result;

                const loggedInUser = localStorage.getItem("loggedInUser");
                const userData = JSON.parse(localStorage.getItem(loggedInUser));
                userData.profilePicture = e.target.result;
                localStorage.setItem(loggedInUser, JSON.stringify(userData));
            };
            reader.readAsDataURL(file);
        }
    });

    // logout for my 
    logoutButton.addEventListener("click", function () {
        localStorage.removeItem("loggedInUser");
        authContainer.style.display = "block";
        mainContainer.style.display = "none";
        profileMenu.style.display = "none";
        randomText.style.display = "none";
        feedback.style.display = "none";
    });

    // Auto login if already logged in
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
        const userData = JSON.parse(localStorage.getItem(loggedInUser));
        profileName.textContent = loggedInUser;
        profileID.textContent = `ID: ${userData.id}`;
        profileTitle.textContent = `Title: ${userData.title}`;
        profileSection.textContent = userData.section;
        profilePicture.src = userData.profilePicture || "noprofile.jpg";
        profilePoints.textContent = `Total Points: ${userData.points || 0}`; // Display total points

        authContainer.style.display = "none";
        mainContainer.style.display = "block";
    }

    document.querySelector('.feedback h2').addEventListener('click', function () {
        document.querySelector('.feedback').style.right = '5px';
    });
    document.querySelector('.feedback .close').addEventListener('click', function () {
        document.querySelector('.feedback').style.right = '-455px';
    });
    const textElement = document.querySelector(".randomtext .text .first");
    const textContent = textElement.textContent;
    textElement.textContent = ""; // Clear the text initially


    let index = 0;
    function typeEffect() {
        if (index < textContent.length) {
            textElement.textContent += textContent.charAt(index);
            index++;
            setTimeout(typeEffect, 100); // Adjust typing speed here (100ms per character)
        }
    }
    typeEffect();
    
    // Function to fetch registered users from Supabase and populate the leaderboard
    async function fetchAndPopulateLeaderboard() {
        const leaderboardTable = document.querySelector("#leaderboard-table tbody");
    
        try {
            // Fetch user data from Supabase
            const { data: user, error } = await supabase
                .from('user') // Replace 'user' with your actual table name
                .select('username, section, id, points');
    
            if (error) {
                console.error("Error fetching users from Supabase:", error);
                return;
            }
    
            if (!user || user.length === 0) {
                console.log("No users found in the database.");
                leaderboardTable.innerHTML = "<tr><td colspan='5'>No data available</td></tr>";
                return;
            }
    
            // Sort users by points in descending order
            const sortedUsers = user.sort((a, b) => b.points - a.points);
    
            // Clear existing rows
            leaderboardTable.innerHTML = "";
    
            // Add sorted user data to the table
            sortedUsers.forEach((user, index) => {
                const row = document.createElement("tr");
    
                row.innerHTML = `
                    <th class="top${index + 1}">
                        ${index === 0 ? '<div class="crown-container"><img src="crown.png" alt="Crown" class="animated-crown"></div>' : ''}
                        ${index + 1}
                    </th>
                    <th>${user.username}</th>
                    <th>${user.section}</th>
                    <th>${user.id}</th>
                    <th>${user.points}</th>
                `;
    
                leaderboardTable.appendChild(row);
            });
        } catch (error) {
            console.error("Error fetching or populating leaderboard:", error);
        }
        
    }
    
    // Call the function to fetch and populate the leaderboard

    await fetchAndPopulateLeaderboard();

// Function to reset the game state
function resetGame() {
    // Reset the editor content
    if (window.editor) {
        window.editor.setValue(''); // Clear the editor
        window.editor.dispose(); // Dispose of the editor instance
        window.editor = null; // Reset the editor reference
    }

    // Reset game-related variables
    questionsAnswered = 0; // Reset progress
    questionOrder = []; // Clear the question order
    selectedLanguage = "";
    selectedDifficulty = "";

    // Reset game UI elements
    document.querySelector('.gameTitle').textContent = '';
    document.querySelector('.unfixedCode').innerHTML = '';
    document.querySelector('.guide-text').innerHTML = '';
    document.querySelector('#editor-container').innerHTML = ''; // Clear the editor container
    document.querySelector('.progress .p1').textContent = `Progress: 0/10`; // Reset progress text

    // Hide game screen and show main menu
    document.querySelector('.gameScreen').style.display = 'none';
    document.querySelector('.languageMenu').style.display = 'block'; // Show language menu
    document.querySelector('.difficultiesMenu').style.display = 'none';
    document.querySelector('.randomtext').style.display = 'block';
    document.querySelector('.logo').style.display = 'block';
    document.querySelector('.userMenu').style.display = 'block';
    document.querySelector('.customNotifier').style.display = 'block';
    document.querySelector('.feedback').style.display = 'block';

    console.log("Game state has been reset. Ready to start again.");
}

document.getElementById('exit-button').addEventListener("click", resetGame);
document.getElementById('return-button').addEventListener("click", resetGame);

exitButton.addEventListener("click", function () {
    resetGame(); // Call the reset function

    // Show the main menu and other UI elements
    document.querySelector('.randomtext').style.display = 'block';
    document.querySelector('.logo').style.display = 'block';
    document.querySelector('.userMenu').style.display = 'block';
    document.querySelector('.customNotifier').style.display = 'block';
    document.querySelector('.feedback').style.display = 'block';

    console.log("Game exited and reset.");
});
    // Function to start Infinite Mode
    function startInfiniteMode() {
    console.log("Starting Infinite Mode");

    // Hide menus and show the game screen
    document.querySelector('.languageMenu').style.display = 'none';
    document.querySelector('.difficultiesMenu').style.display = 'none';
    document.querySelector('.gameScreen').style.display = 'block';
    document.querySelector('.randomtext').style.display = 'none';
    document.querySelector('.feedback').style.display = 'none';
    document.querySelector('.logo').style.display = 'none';
    document.querySelector('.customNotifier').style.display = 'none';
    document.querySelector('.userMenu').style.display = 'none';
    document.querySelector('.playMenu').style.display = 'none';
    document.querySelector('.note').style.display = 'none';

    const editorContainer = document.getElementById('editor-container');
    const unfixedCodeDiv = document.querySelector('.unfixedCode');
    const guideTextDiv = document.querySelector('.guide-text');
    const submitButton = document.getElementById('submit-button');

    // Function to load a random question
    function loadNextQuestion() {
        const languages = Object.keys(infiniteBuggyCodeTemplates);
        const randomLanguage = languages[Math.floor(Math.random() * languages.length)];
        const buggyCode = generateBuggyCode(randomLanguage);
    
        // Escape HTML characters in the buggy code
        const escapedCode = buggyCode.replace(/</g, '&lt;').replace(/>/g, '&gt;');
        const unfixedCodeDiv = document.querySelector('.unfixedCode');
        const guideTextDiv = document.querySelector('.guide-text');
        const editorContainer = document.getElementById('editor-container');
    
        unfixedCodeDiv.innerHTML = `<pre>${escapedCode}</pre>`;
        guideTextDiv.innerHTML = `<p>Fix the code in ${randomLanguage.toUpperCase()}!</p>`;
    
        // Update the editor with the new question
        require.config({ paths: { 'vs': 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.43.0/min/vs' } });
        require(['vs/editor/editor.main'], function () {
            if (window.editor) {
                window.editor.dispose();
            }
    
            window.editor = monaco.editor.create(editorContainer, {
                value: buggyCode || '',
                language: randomLanguage,
                theme: 'vs-dark',
                fontSize: 14,
                automaticLayout: true
            });
        });

        // Attach submit button logic
        submitButton.replaceWith(submitButton.cloneNode(true));
        const newSubmitButton = document.getElementById('submit-button');
        newSubmitButton.addEventListener('click', function () {
            handleSubmit(randomLanguage, buggyCode, loadRandomQuestion);
        });
    }

    // Load the first random question
    loadNextQuestion();
}


// Define the infiniteSolutions object
const infiniteSolutions = {
    java: [
        'public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n    }\n}',
        'public class Calculator {\n    public int add(int a, int b) {\n        return a + b;\n    }\n}',
        'import java.util.ArrayList;\npublic class DataManager {\n    ArrayList<String> data = new ArrayList<>();\n    public void addData(String item) {\n        data.add(item);\n    }\n}'
    ],
    html: [
        '<!DOCTYPE html>\n<html>\n<head>\n    <title>Sample Page</title>\n</head>\n<body>\n    <h1>Welcome</h1>\n</body>\n</html>',
        '<div class="container">\n    <h2>Game Modes</h2>\n    <ul>\n        <li>Normal</li>\n        <li>Infinite</li>\n    </ul>\n</div>',
        '<form action="/submit" method="post">\n    <label for="name">Name:</label>\n    <input type="text" id="name" name="name">\n    <input type="submit" value="Submit">\n</form>'
    ],
    css: [
        'body {\n    background-color: #fff;\n    color: #000;\n    font-family: Arial, sans-serif;\n}',
        '.button {\n    background-color: blue;\n    color: white;\n    padding: 10px;\n    border-radius: 5px;\n}',
        '#container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100vh;\n}'
    ]
};
// Function to detect if the user is on a mobile or tablet device
function isMobileOrTablet() {
    return /Mobi|Android|iPad|iPhone|Tablet/i.test(navigator.userAgent);
}

// Restrict access for mobile or tablet devices
if (isMobileOrTablet()) {
    document.body.innerHTML = `
    <body background="black"; color:white;>
        <div style="text-align: center; margin-top: 20%; font-family: Arial, sans-serif;">
            <h1>Access Restricted</h1>
            <p>This website is only available for computers or laptops.</p>
            <p>Please access this website from a desktop or laptop device.</p>
        </div>
    </body>`;
}
function showCinematicText(callback) {
    const messages = [
        "GAME ON",
        "WELCOME TO THE GAME",
        "LET THE CODING BEGIN",
        "GET READY TO CODE",
        "PREPARE FOR THE CHALLENGE",
        "DEBUGGING IS AN ART",
        "THINK BEFORE YOU CODE",
        "GET READY TO SOLVE"
    ];

    // Randomize the message
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];

    // Display the cinematic text
    const cinematicText = document.getElementById('cinematicText');
    const cinematicMessage = document.getElementById('cinematicMessage');
    cinematicMessage.setAttribute('data-text', randomMessage);
    cinematicMessage.textContent = randomMessage;
    cinematicText.style.display = 'block';

    // Hide the cinematic text after 6 seconds and start the game
    setTimeout(() => {
        cinematicText.style.display = 'none';
        if (callback) callback(); // Call the callback function to start the game
    }, 2000);
}

const exitButton = document.getElementById("exit-button");
    const returnButton = document.getElementById("return-button");

    if (exitButton) {
        exitButton.addEventListener("click", resetGame);
    }

    if (returnButton) {
        returnButton.addEventListener("click", resetGame);
    }

function showGameOverScreen() {
    const gameOverScreen = document.querySelector('.gameOverScreen');
    const returnButton = document.getElementById('return-button');

    // Show the Game Over screen
    gameOverScreen.style.display = 'block';

    // Hide other game elements
    document.querySelector('.gameScreen').style.display = 'none';
    returnButton.addEventListener("click", function () {
        resetGame(); // Call the reset function
    
        // Show the main menu and other UI elements
        document.querySelector('.randomtext').style.display = 'block';
        document.querySelector('.logo').style.display = 'block';
        document.querySelector('.userMenu').style.display = 'block';
        document.querySelector('.customNotifier').style.display = 'block';
        document.querySelector('.feedback').style.display = 'block';
        gameOverScreen.style.display = 'none'; // Hide the Game Over screen
    
        console.log("Game exited and reset.");
    });
}
});



