function playSelectionSound() {
    let sound = document.getElementById("selectingSound");
    sound.currentTime = 0;
    sound.play();
}

import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.0.0/+esm';

const supabaseUrl = 'https://qnhciscuypjihlebiyuy.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFuaGNpc2N1eXBqaWhsZWJpeXV5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIwMjkxODUsImV4cCI6MjA1NzYwNTE4NX0.ZbLXbq2gauvJN8tpQjGqQnMkXKvgB_78ewCdscd00ag'; // Replace with your actual Supabase key for testing
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
                'public class Main {\n    \npublic static void main(String[] args) {\n    system.out.println("Hello, World!")\n   }\n}',
                'public class Main {\n    \npublic static void main(String[] args) {\n    System.out.println("Hello, Corrupted!")\n   }\n}',
                'public class Main {\n    public static void main(String[] args) {\n    System.out.println("Hello, Santos!")\n   }\n}',
                'public class Main {\n    public static void main(String[] args) {\n    System.out.println("Hello, Neighbor!")\n   }\n}',
                'public class Main {\n    public static void main(String[] args) {\n    System.out.println("Hello, League!")\n   }\n}'
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
            easy: `<!DOCTYPE html>\n<html>\n<head>\n    <title>Welcome Page</title>\n</head>\n<body>\n    <h1>Welcome to Corrupted Prompt</h1>\n    <p>Enjoy the game!</p>\n</body>\n</html>`,
            moderate: `<div class="container">\n    <h2>Game Modes</h2>\n    <ul>\n        <li>Normal Mode</li>\n        <li>Moderate Mode</li>\n        <li>Hard Mode</li>\n    </ul>\n</div>`,
            hardcore: `<form action="submit.php" method="post">\n    <label for="username">Username:</label>\n    <input type="text" id="username" name="username">\n    <input type="submit" value="Submit">\n</form>`
        },
    css: {
            easy: `body {\n    background-color: #222;\n    color: #fff;\n    font-family: Arial, sans-serif;\n}`,
            moderate: `.button {\n    background: blue;\n    padding: 10px;\n    border-radius: 5px;\n    color: #fff;\n}`,
            hardcore: `#gameScreen {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100vh;\n}`
        }
    };
    
    const solutions = {
        java: {
            easy: [
                'public class Main {\n    \npublic static void main(String[] args) {\n    System.out.println("Hello, World!");\n   }\n}',
                'public class Main {\n    \npublic static void main(String[] args) {\n    System.out.println("Hello, Corrupted!");\n   }\n}',
                'public class Main {\n    public static void main(String[] args) {\n    System.out.println("Hello, Santos!");\n   }\n}',
                'public class Main {\n    public static void main(String[] args) {\n    System.out.println("Hello, Neighbor!");\n   }\n}',
                'public class Main {\n    public static void main(String[] args) {\n    System.out.println("Hello, League!");\n   }\n}'
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
            easy: `<!DOCTYPE html>\n<html>\n<head>\n    <title>Welcome Page</title>\n</head>\n<body>\n    <h1>Welcome to Corrupted Prompt</h1>\n    <p>Enjoy the game!</p>\n</body>\n</html>`,
            moderate: `<div class="container">\n    <h2>Game Modes</h2>\n    <ul>\n        <li>Normal Mode</li>\n        <li>Moderate Mode</li>\n        <li>Hard Mode</li>\n    </ul>\n</div>`,
            hardcore: `<form action="submit.php" method="post">\n    <label for="username">Username:</label>\n    <input type="text" id="username" name="username" required>\n    <input type="submit" value="Submit">\n</form>`
        },
        css: {
            easy: `body {\n    background-color: transparent;\n    color: #fff;\n    font-family: Arial, sans-serif;\n}`,
            moderate: `.button {\n    background: blue;\n    padding: 10px;\n    border-radius: 5px;\n    color: #fff;\n    cursor: pointer;\n}`,
            hardcore: `#gameScreen {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100vh;\n    flex-direction: column;\n}`
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

        // Check if the code exists
        if (code) {
            unfixedCodeDiv.innerHTML = `<pre>${code.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</pre>`;
        } else {
            unfixedCodeDiv.innerHTML = '<pre>Code not found for this selection</pre>';
            console.error(`Buggy code not found for language "${language}", difficulty "${difficulty}", question ${questionIndex + 1}.`);
            return;
        }

        // Set the guide text
        guideTextDiv.innerHTML = guide ? `<p>${guide}</p>` : '<p>No guide available for this selection</p>';

        // Update the game title
        document.querySelector('.gameTitle').textContent = `${language.toUpperCase()} - ${difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}`;

        // Show the game screen
        document.querySelector('.gameScreen').style.display = 'block';
        document.querySelector('.languageMenu').style.display = 'none';
        document.querySelector('.difficultiesMenu').style.display = 'none';

        // Initialize the Monaco editor
        require.config({ paths: { 'vs': 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.43.0/min/vs' } });
        require(['vs/editor/editor.main'], function () {
            if (window.editor) {
                window.editor.dispose(); // Dispose of the previous editor instance
            }

            // Create the Monaco editor
            window.editor = monaco.editor.create(editorContainer, {
                value: code || '', // Use the buggy code or an empty string
                language: language, // Set the language for syntax highlighting
                theme: 'vs-dark',
                fontSize: 14,
                automaticLayout: true
            });

            // Define the handleSubmit function
            function handleSubmit() {
                const userCode = window.editor.getValue().trim();
                const correctCodes = solutions[language]?.[difficulty];

                const progressIcon = document.querySelector(`.questions-finished[data-question="${questionIndex}"]`);
                const customNotification = document.getElementById('customNotification');

                // Fix: Case-insensitive and whitespace-trimmed comparison
                if (correctCodes?.some(correctCode => userCode.toLowerCase() === correctCode.trim().toLowerCase())) {
                     customNotification.style.display = 'block';
                    customNotification.innerHTML = '<p>You fixed it! Loading next challenge...</p>';
                    customNotification.style.backgroundColor = 'green';

                    if (progressIcon) {
                        progressIcon.textContent = '✔'; // Set to check icon
                        progressIcon.style.color = 'green';
                    }

                    // Load the next question
                    const nextQuestionIndex = (questionIndex + 1) % buggyCodeSamples[language][difficulty].length;
                    setTimeout(() => {
                        customNotification.style.display = 'none'; // Hide notification after 2 seconds
                        startGame(language, difficulty, nextQuestionIndex); // Pass the next question index
                    }, 2000);
                } else {
                    customNotification.style.display = 'block';
        customNotification.innerHTML = '<p>Incorrect. Please try again.</p>';
        customNotification.style.backgroundColor = 'red';
                    if (progressIcon) {
                        progressIcon.textContent = '✖'; // Set to X icon
                        progressIcon.style.color = 'red';
                    }
                }
            }

            // Attach the handleSubmit function to the submit button
            submitButton.removeEventListener('click', handleSubmit); // Remove any previous listeners
            submitButton.addEventListener('click', handleSubmit);
        });
    }

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
    // Register user
    registerButton.addEventListener("click", async function () {
        const email = registerUsername.value.trim();
        const password = registerPassword.value.trim();

        const { user, error } = await supabase.auth.signUp({
            email: email,
            password: password,
        });

        if (error) {
            alert("Error: " + error.message);
        } else {
            alert("Registration successful! Please check your email to confirm your account.");
            registerBox.style.display = "none";
            loginBox.style.display = "block";
        }
    });

    // Login user
    loginButton.addEventListener("click", async function () {
        const email = loginUsername.value.trim();
        const password = loginPassword.value.trim();

        const { data: user, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        });

        if (error) {
            alert("Error: " + error.message);
        } else {
            // Show main content
            authContainer.style.display = "none";
            mainContainer.style.display = "block";

            // Save user data to local storage
            const username = email.split('@')[0];
            const userData = {
                id: user.user.id, // Correctly access the user ID
                title: registerTitle.value,
                section: registerSection.value,
                profilePicture: "noprofile.png"
            };
            localStorage.setItem("loggedInUser", username);
            localStorage.setItem(username, JSON.stringify(userData));

            // Update profile information
            profileName.textContent = username;
            profileID.textContent = `ID: ${userData.id}`;
            profileTitle.textContent = `Status: ${userData.title}`;
            profileSection.textContent = userData.section;
            profilePicture.src = userData.profilePicture;
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
});