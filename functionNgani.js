function playSelectionSound() {
    let sound = document.getElementById("selectingSound");
    sound.currentTime = 0;
    sound.play();
}

document.addEventListener("DOMContentLoaded", function () {
    // Login
    const authContainer = document.querySelector(".login-container");
    const mainContainer = document.querySelector(".main-container");

    const loginBox = document.querySelector(".login-box");
    const registerBox = document.querySelector(".register-box");

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
            moderate: `<div class="container">\n    <h2>Game Modes</h2>\n    <ul>\n        <li>Normal Mode</li>\n        <li>Moderate Mode</li>\n        <li>Hardcore Mode</li>\n    </ul>\n</div>`,
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
    
    document.querySelectorAll('.languageMenu div').forEach(option => {
        option.addEventListener('click', function () {
            selectedLanguage = option.className.toLowerCase();
            console.log("Selected language:", selectedLanguage);
            languageMenu.style.display = "none";
            difficultiesMenu.style.display = "block";
        });
    });

    document.querySelectorAll('.difficultiesMenu div').forEach(option => {
        option.addEventListener('click', function () {
            selectedDifficulty = option.className.toLowerCase();
            console.log("Selected difficulty:", selectedDifficulty);
            difficultiesMenu.style.display = "none";
            startGame(selectedLanguage, selectedDifficulty);
            gameScreen.style.display = "block";
        });
    });
    
    const questionIndices = {};
    for (const lang in buggyCodeSamples) {
        questionIndices[lang] = {};
        for (const level in buggyCodeSamples[lang]) {
            questionIndices[lang][level] = 0;
        }
    }

    // Function to get the next question index
    function getNextQuestionIndex(language, difficulty) {
        const index = questionIndices[language][difficulty];
        questionIndices[language][difficulty] = (index + 1) % buggyCodeSamples[language][difficulty].length;
        return index;
    }

    // Update startGame function to use the next question index
    function startGame(language, difficulty) {
        console.log(`Starting game with ${language} - ${difficulty}`);

        const unfixedCodeDiv = document.querySelector('.unfixedCode');
        const guideTextDiv = document.querySelector('.guide-text');
        const questionIndex = getNextQuestionIndex(language, difficulty);
        const code = buggyCodeSamples[language][difficulty][questionIndex];
        const guide = guideQuestions[language][difficulty];

        if (code) {
            unfixedCodeDiv.innerHTML = `<pre>${code.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</pre>`;
        } else {
            unfixedCodeDiv.innerHTML = '<pre>Code not found for this selection</pre>';
        }
        // Update the guide text display
        guideTextDiv.innerHTML = guide ? `<p>${guide}</p>` : '<p>No guide available for this selection</p>';

        // Update the game title
        document.querySelector('.gameTitle').textContent = `${language.toUpperCase()} - ${difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}`;

        // Show the game screen and hide other menus
        document.querySelector('.gameScreen').style.display = 'block';
        document.querySelector('.languageMenu').style.display = 'none';
        document.querySelector('.difficultiesMenu').style.display = 'none';
        userMenu.style.display = 'none';
        notifier.style.display = 'none';
        logo.style.display = 'none';

        // Initialize the Monaco editor
        require.config({ paths: { 'vs': 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.43.0/min/vs' } });
        require(['vs/editor/editor.main'], function() {
            if (window.editor) {
                window.editor.dispose();
            }
            window.editor = monaco.editor.create(document.getElementById('editor-container'), {
                value: code,
                language: language,
                theme: 'vs-dark',
                fontSize: 14,
                automaticLayout: true
            });

            function handleSubmit() {
                const userCode = window.editor.getValue();
                const correctCode = solutions[language][difficulty];

                console.log('User code:', userCode); // Debugging line
                console.log('Correct code:', correctCode); // Debugging line

                if (userCode.trim() === correctCode.trim()) {
                    alert('Correct! Loading next challenge...');
                    // Load next buggy code
                    startGame(language, difficulty);
                } else {
                    alert('Incorrect. Please try again.');
                }
            }

            // Remove existing event listener before adding a new one
            submitAnswer.removeEventListener('click', handleSubmit);
            submitAnswer.addEventListener('click', handleSubmit);
        });
    }
    
    // Event listeners for language selection
    document.getElementById('java-button').addEventListener('click', () => chooseLanguage('java'));
    document.getElementById('html-button').addEventListener('click', () => chooseLanguage('html'));
    document.getElementById('css-button').addEventListener('click', () => chooseLanguage('css'));
    
    // Event listeners for difficulty selection
    document.querySelector('.Normal').addEventListener('click', () => {
        if (selectedLanguage) {
            startGame(selectedLanguage, 'easy');
        } else {
            alert("Please select a language first.");
        }
    });
    
    document.querySelector('.Moderate').addEventListener('click', () => {
        if (selectedLanguage) {
            startGame(selectedLanguage, 'moderate');
        } else {
            alert("Please select a language first.");
        }
    });
    
    document.querySelector('.Hardcore').addEventListener('click', () => {
        if (selectedLanguage) {
            startGame(selectedLanguage, 'hardcore');
        } else {
            alert("Please select a language first.");
        }
    });
    
    function chooseLanguage(language) {
        selectedLanguage = language;
        document.querySelector('.languageMenu').style.display = 'none';
        document.querySelector('.difficultiesMenu').style.display = 'block';
    }
    
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

    // login and register SWITCH 
    showRegister.addEventListener("click", function () {
        loginBox.style.display = "none";
        registerBox.style.display = "block";
    });

    showLogin.addEventListener("click", function () {
        registerBox.style.display = "none";
        loginBox.style.display = "block";
    });

    // new 
    registerButton.addEventListener("click", function () {
        const username = registerUsername.value.trim();
        const password = registerPassword.value.trim();
        const id = registerID.value.trim();
        const title = registerTitle.value;
        const section = registerSection.value;

        if (username === "" || password === "" || id === "") {
            alert("Please fill in all fields.");
            return;
        }

        if (id.length !== 10 || isNaN(id)) {
            alert("ID must be exactly 10 digits.");
            return;
        }

        if (title !== "Student" && title !== "Professor") {
            alert("Invalid title selection.");
            return;
        }

        if (localStorage.getItem(username)) {
            alert("Username already taken!");
            return;
        }

        localStorage.setItem(username, JSON.stringify({ password, id, title, section }));
        alert("Registration successful! You can now log in.");
        registerBox.style.display = "none";
        loginBox.style.display = "block";
    });

    // existing 
    loginButton.addEventListener("click", function () {
        const username = loginUsername.value.trim();
        const password = loginPassword.value.trim();

        const storedUser = localStorage.getItem(username);
        if (!storedUser) {
            alert("User not found! Please register.");
            return;
        }

        const userData = JSON.parse(storedUser);
        if (userData.password !== password) {
            alert("Incorrect password!");
            return;
        }

        // success login for my 
        localStorage.setItem("loggedInUser", username);
        profileName.textContent = username;
        profileID.textContent = `ID: ${userData.id}`;
        profileTitle.textContent = `Status: ${userData.title}`;
        profileSection.textContent = `${userData.section}`;

        const userProfilePicture = userData.profilePicture || "noprofile.png";
        profilePicture.src = userProfilePicture;

        authContainer.style.display = "none";
        mainContainer.style.display = "block";
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

    // auto login if already login for my HOMIES B)
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