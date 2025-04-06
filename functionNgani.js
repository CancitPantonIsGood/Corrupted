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
            hoverSound.currentTime = 0; // Reset the audio to the start
            hoverSound.play().catch(error => {
                console.error("Audio playback failed:", error);
            });
        }
    });
});


import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.0.0/+esm';
import bcrypt from 'https://cdn.jsdelivr.net/npm/bcryptjs/+esm';

const supabaseUrl = 'https://qnhciscuypjihlebiyuy.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFuaGNpc2N1eXBqaWhsZWJpeXV5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIwMjkxODUsImV4cCI6MjA1NzYwNTE4NX0.ZbLXbq2gauvJN8tpQjGqQnMkXKvgB_78ewCdscd00ag';
const supabase = createClient(supabaseUrl, supabaseKey);



document.addEventListener("DOMContentLoaded", function () {
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

    const buttons = [playButton, profileButton, settingsButton, leaderboardButton, creditsButton];
    const menus = [playMenu, profileMenu, settingsMenu, leaderboardMenu, creditsMenu];

    difficultiesMenu.style.display = 'none';
    languageMenu.style.display = 'none';
    gameScreen.style.display = 'none';
    corruptedText.style.top = '50px';

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
                'public class Main {\n    \npublic static void main(String[] args) {\n    System.out.println("Hello, Neighbor!")\n   }\n}',
                'public class Main {\n    \npublic static void main(String[] args) {\n    System.out.println("Hello, League!")\n   }\n}',
                'public class Main {\n    \npublic static void main(String[] args) {\n    System.out.println("Hello, Java!");\n    }\n',
                'public class Main {\n    \npublic static void main(String[] args) {\n    System.out.println("Hello, Easy!");\n    }\n}',
                'public class Main {\n    \npublic static void main(String[] args) {\n    System.out.println("Hello, Buggy!");\n    }\n}', 
                'public class Main {\n    \npublic static void main(String[] args) {\n    System.out.println("Hello, Code!");\n    }\n}', 
                'public class Main {\n    \npublic static void main(String[] args) {\n    System.out.println("Hello, World!");\n    }\n}'
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
                'public class Main {\n    \npublic static void main(String[] args) {\n    System.out.println("Hello World");\n   }\n}',
                'public class Main {\n    \npublic static void main(String[] args) {\n    String x = "Hello World";\n    system.out.print(x);\n   }\n}',
                'public class Main {\n    \npublic static void main(String[] args) {\n    int a = 5;\n    int b = 10;\n    System.out.println(a + b);\n   }\n}',
                'public class Main {\n    \npublic static void main(String[] args) {\n    System.out.println("Hello, Neighbor!");\n   }\n}',
                'public class Main {\n    \npublic static void main(String[] args) {\n    System.out.println("Hello, League!");\n   }\n}',
                'public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, Java!");\n    }\n}',
                'public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, Easy!");\n    }\n}',
                'public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, Buggy!");\n    }\n}',
                'public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, Code!");\n    }\n}',
                'public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n    }\n}'
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

    
    const guideQuestions = {
        java: {
            easy: "Why is this Java program not printing correctly?",
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
    const questionIndices = {};
    for (const lang in buggyCodeSamples) {
        questionIndices[lang] = {};
        for (const level in buggyCodeSamples[lang]) {
            questionIndices[lang][level] = 0; // Start at the first question
        }
    }

     // Function to start the game
     function startGame(language, difficulty, questionIndex = 0) {
        console.log(`Starting game with ${language} - ${difficulty}, Question: ${questionIndex + 1}`);
    
        const unfixedCodeDiv = document.querySelector('.unfixedCode');
        const guideTextDiv = document.querySelector('.guide-text');
        const editorContainer = document.getElementById('editor-container');
        const submitButton = document.getElementById('submit-button');
    
        // Ensure the editor container exists
        if (!editorContainer) {
            console.error("Editor container not found in the DOM.");
            return;
        }
    
        // Validate language and difficulty
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
    
        // Get the buggy code and guide text
        const code = buggyCodeSamples[language][difficulty][questionIndex];
        const guide = guideQuestions[language]?.[difficulty];

        // Escape HTML characters in the buggy code
const escapedCode = code.replace(/</g, '&lt;').replace(/>/g, '&gt;');
unfixedCodeDiv.innerHTML = `<pre>${escapedCode}</pre>`;

    
        // Set the guide text
        guideTextDiv.innerHTML = guide ? `<p>${guide}</p>` : '<p>No guide available for this selection</p>';
    
        // Update the game title
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
            
            function handleSubmit() {
                const userCode = window.editor.getValue().trim();
                const correctCodes = solutions[language]?.[difficulty];
                console.log("User Code:", userCode);
console.log("Correct Codes:", correctCodes);
            
                const progressIcon = document.querySelector(`.questions-finished-num[data-question="${questionIndex + 1}"] .icon`);
                const customNotification = document.getElementById('customNotification');
            
                if (!progressIcon) {
                    console.error(`Progress icon for "Question ${questionIndex + 1}" not found.`);
                    return;
                }
            
                // Disable the submit button to prevent multiple clicks
                const submitButton = document.getElementById('submit-button');
                submitButton.disabled = true;
            
                if (correctCodes && correctCodes.some(correctCode => userCode.toLowerCase() === correctCode.trim().toLowerCase())) {
                    if (progressIcon.dataset.status !== 'completed' && progressIcon.dataset.status !== 'incorrect') {
                        customNotification.style.display = 'block';
                        customNotification.innerHTML = '<p>YOU FIXED IT!';
                        customNotification.style.color = 'green';
                        customNotification.style.border = '2px solid rgb(0, 255, 42)';
                        customNotification.style.boxShadow = '0 0 10px rgb(0, 255, 115), 0 0 20px rgb(30, 255, 0)';
                        customNotification.style.webkitTextStroke = '2px #00ff80';

                        progressIcon.textContent = '✔'; 
                        progressIcon.style.color = 'green';
                        progressIcon.dataset.status = 'completed';
                    }
                } else {
                    if (progressIcon.dataset.status !== 'completed') {
                        customNotification.style.display = 'block';
                        customNotification.innerHTML = '<p>SYNTAX ERROR!</p>';
                        customNotification.style.color = 'red';
                        customNotification.style.border = '2px solid red';
                        customNotification.style.webkitTextStroke = '2px white';
                        customNotification.style.boxShadow = '0 0 10px rgb(255, 0, 128), 0 0 20px rgb(255, 0, 76)';
            
                        progressIcon.textContent = '✖';
                        progressIcon.style.color = 'red';
                        progressIcon.dataset.status = 'incorrect';
                    }
                }
            
                // Load the next question after a delay
                const nextQuestionIndex = (questionIndex + 1) % buggyCodeSamples[language][difficulty].length;
                setTimeout(() => {
                    customNotification.style.display = 'none'; // Hide notification after 2 seconds
                    submitButton.disabled = false; // Re-enable the submit button for the next question
                    startGame(language, difficulty, nextQuestionIndex); // Pass the next question index
                }, 2000);
            }
    
            // Remove any previous event listeners and attach the handleSubmit function to the submit button
            submitButton.replaceWith(submitButton.cloneNode(true));
            const newSubmitButton = document.getElementById('submit-button');
            newSubmitButton.addEventListener('click', handleSubmit);
        });
        
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

function startInfiniteMode() {
    document.querySelector('.playMenu').style.display = 'none';
    document.querySelector('.languageMenu').style.display = 'none';
    document.querySelector('.difficultiesMenu').style.display = 'none';

    const gameScreen = document.querySelector('.gameScreen');
    gameScreen.style.display = 'block';

    const gameTitle = document.querySelector('.gameTitle');
    gameTitle.textContent = "INFINITE Mode - Test Your Limits";

    const unfixedCodeDiv = document.querySelector('.unfixedCode');
    const guideTextDiv = document.querySelector('.guide-text');
    const editorContainer = document.querySelector('#editor-container');

    const languages = Object.keys(infiniteBuggyCodeTemplates);
    const selectedLanguage = languages[Math.floor(Math.random() * languages.length)];

    const buggyCode = generateBuggyCode(selectedLanguage);

    unfixedCodeDiv.innerHTML = `<pre>${buggyCode.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</pre>`;
    guideTextDiv.innerHTML = `<p>Fix the bugs in the ${selectedLanguage.toUpperCase()} code!</p>`;

    editorContainer.innerHTML = `
        <textarea id="infinite-textarea" class="code-editor" rows="15" style="width: 100%; font-family: monospace; font-size: 14px;">${buggyCode}</textarea>
    `;

    console.log("Infinite mode started with language:", selectedLanguage);

    const submitButton = document.getElementById('submit-button');
    submitButton.onclick = function () {
        const userCode = document.getElementById('infinite-textarea').value.trim();

        const correctCodes = solutions[selectedLanguage]?.easy; // Adjust difficulty if needed
        const customNotification = document.getElementById('customNotification');

        if (correctCodes && correctCodes.some(correctCode => userCode === correctCode.trim())) {
            customNotification.style.display = 'block';
            customNotification.innerHTML = '<p>You fixed it! Loading next challenge...</p>';
            customNotification.style.backgroundColor = 'green';

            // Load the next buggy code after a delay
            setTimeout(() => {
                customNotification.style.display = 'none';
                startInfiniteMode(); // Restart infinite mode with a new buggy code
            }, 2000);
        } else {
            customNotification.style.display = 'block';
            customNotification.innerHTML = '<p>Incorrect. Try again!</p>';
            customNotification.style.backgroundColor = 'red';
        }
    };
}

// Attach event listener to the infinite button
document.getElementById('infinite-button').addEventListener('click', startInfiniteMode);
    
    // Event listeners for language selection
    document.querySelectorAll('.languageMenu div').forEach(option => {
        option.addEventListener('click', function () {
            selectedLanguage = option.getAttribute('data-language'); // Use a data attribute for language
            console.log("Selected language:", selectedLanguage);

            // Hide language menu and show difficulties menu
            languageMenu.style.display = "none";
            difficultiesMenu.style.display = "block";
        });
    });

    // Event listeners for difficulty selection
    document.querySelectorAll('.difficultiesMenu div').forEach(option => {
        option.addEventListener('click', function () {
            selectedDifficulty = option.getAttribute('data-difficulty'); // Use a data attribute for difficulty
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
            const hashedPassword = await bcrypt.hash(password, 10); // Hash the password
            const { data, error } = await supabase
                .from("user")
                .insert([
                    {
                        username: username,
                        password: hashedPassword, // Store the hashed password
                        id: id,
                        section: section,
                        title: title,
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

    loginButton.addEventListener("click", async function () {
        const username = loginUsername.value.trim();
        const password = loginPassword.value.trim();
    
        if (!username || !password) {
            alert("Please fill out both username and password.");
            return;
        }
    
        try {
            // Fetch the user data from Supabase
            const { data: users, error } = await supabase
                .from("user") // Replace 'user' with your actual table name
                .select("username, password, id, section, title")
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
    
            // Debugging: Log the entered and stored passwords
            console.log("Entered password:", password);
            console.log("Stored hashed password:", user.password);
    
            // Validate the password
            const isPasswordValid = await bcrypt.compare(password, user.password);
            console.log("Password valid:", isPasswordValid); // Debugging
    
            if (!isPasswordValid) {
                alert("Invalid username or password.");
                return;
            }
    
            // Login successful
            alert("Login successful!");
    
            // Show main content
            authContainer.style.display = "none";
            mainContainer.style.display = "block";
    
            // Save user data to local storage
            const userData = {
                id: user.id,
                title: user.title,
                section: user.section,
                profilePicture: "",
            };
            localStorage.setItem("loggedInUser", username);
            localStorage.setItem(username, JSON.stringify(userData));
    
            // Update profile information
            profileName.textContent = username;
            profileID.textContent = `ID: ${user.id}`;
            profileTitle.textContent = `Status: ${user.title}`;
            profileSection.textContent = user.section;
            profilePicture.src = userData.profilePicture;
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
    });

    // Auto login if already logged in
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
        const userData = JSON.parse(localStorage.getItem(loggedInUser));
        profileName.textContent = loggedInUser;
        profileID.textContent = `ID: ${userData.id}`;
        profileTitle.textContent = `Title: ${userData.title}`;
        profileSection.textContent = userData.section;

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
    fetchAndPopulateLeaderboard();

// Function to reset the game state
function resetGame() {
    // Reset the editor content
    if (window.editor) {
        window.editor.setValue('');
    }

    // Reset game-related UI elements
    document.querySelector('.gameTitle').textContent = '';
    document.querySelector('.unfixedCode').innerHTML = '';
    document.querySelector('.guide-text').innerHTML = '';
    document.querySelector('#editor-container').innerHTML = '';
    document.querySelector('.questions-finished-num .icon').textContent = '';
    document.querySelector('.questions-finished-num .icon').dataset.status = '';

    // Hide game-specific elements
    document.querySelector('.gameScreen').style.display = 'none';
    document.querySelector('.languageMenu').style.display = 'none';
    document.querySelector('.difficultiesMenu').style.display = 'none';
}

const exitButton = document.querySelector("#exit-button");

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

});

