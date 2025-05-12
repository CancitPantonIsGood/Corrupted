

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
    playMenu.style.display = 'none';

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
                `public class Main {\n   public static void main(String[] args) {\n      System.our.print("Hello World")\n   }\n}`, //wrong spelling
                `public class Main {\n   public static void main(String[] args) {\n      String name = "Jhon";\n   }\n}`, //print the name
                `public class Main {\n   public static void main(String[] args) {\n      int a = 5;\n      int b = 15;\n      int c = 25;\n      int total;\n      System.out.println("Total: ");\n   }\n}`, //declare the total`s value
                `public class Main {\n   public static void main(String[] args) {\n      String apple = 5;\n      String orange = 10;\n      System.out.println("Apple: $");\n      System.out.println("Orage: $");\n   }\n}`,
                `public class Main {\n   public static void main(String[] args) {\n      int shirt = ;\n      int pants = 10;\n      Sting total;\n      System.out.println(shirt);\n      System.out.println(pants);\n      System.out.println("Cost: " + total);\n   }\n}`,
                `public class Main {\n   public static void main(String[] args) {\n      boolean light = false;\n      if (light = true) {\n            System.out.println("The light is on");\n      } else if (light = false) {\n            System.out.println("The light is off");\n      }\n   }\n}`,
                `public class Main {\n   public static void main(String[] args) {\n      int age = 17;\n      System.out.println("Sasha just turned 18");\n      if (age = 18) {\n            System.out.println("Sasha is legal");\n      } else {\n            System.out.println("Sasha is not legal age");\n      }\n   }\n}`,
                `public class Main {\n   public static void main(String[] args) {\n      int toyo = 10;\n      int suka = 10;\n      char sibuyas = 10;\n      int bawang = 10;\n      int laurel = 5;\n      int total = toyo +;\n      System.out.println("Total: ");\n   }\n}`,
                `public class Main {\n   public stakatistic void main(String[] args) {\n      char ave = "A"\n      System.out.print("Marry got an " + ave + " on the exam)\n   }\n}`,

            ],
            moderate: [
                `public class Main {\n    public static void main(String[] args) {\n        String student = "Student 1";\n    }\n}`,
                `public class Main {\n    public int subtract(int a, int b) {\n        return a - b;\n    }\n}`,
                `public class Main {\n    public int multiply(int a, int b) {\n        return a * b;\n    }\n}`,
                `public class Main {\n    public int divide(int a, int b) {\n        return a / b;\n    }\n}`,
                `public class Main {\n    public int modulus(int a, int b) {\n        return a % b;\n    }\n}`,
                `public class Main {\n    public static void main(String[] args) {\n        int x = 10;\n        if (x > 5) System.out.println("Greater");\n    }\n}`,
                `public class Main {\n    public static void main(String[] args) {\n        int x = 10;\n        if (x < 5) System.out.println("Smaller");\n    }\n}`,
                `public class Main {\n    public static void main(String[] args) {\n        int x = 10;\n        if (x == 10) System.out.println("Equal");\n    }\n}`,
                `public class Main {\n    public static void main(String[] args) {\n        int x = 10;\n        if (x != 10) System.out.println("Not Equal");\n    }\n}`,
                `public class Main {\n    public static void main(String[] args) {\n        int x = 10;\n        if (x >= 10) System.out.println("Greater or Equal");\n    }\n}`,
                `public class Main {\n    public static void main(String[] args) {\n        int x = 10;\n        if (x <= 10) System.out.println("Smaller or Equal");\n    }\n}`,
                `public class Main {\n    public static void main(String[] args) {\n        int x = 10;\n        if (x > 5 && x < 15) System.out.println("Between");\n    }\n}`,
                `public class Main {\n    public static void main(String[] args) {\n        int x = 10;\n        if (x < 5 || x > 15) System.out.println("Outside");\n    }\n}`,
                `public class Main {\n    public static void main(String[] args) {\n        int x = 10;\n        if (!(x > 5)) System.out.println("Not Greater");\n    }\n}`,
                `public class Main {\n    public static void main(String[] args) {\n        int x = 10;\n        if (x == 10) System.out.println("Perfect Match");\n    }\n}`
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
                `<!DOCTYPE html>\n<html>\n<head>\n    <title>Welcome Page</title>\n</head>\n<body>\n    <h1>Welcome to Corrupted Prompt</h1>\n    <p>Enjoy the game!</p>\n    <p>HELLO!</p>\n</body>\n</html>`,
                `<!DOCTYPE html>\n<html>\n<head>\n    <title>Welcome Page</title>\n</head>\n<body>\n    <h1>\n    <button></button>\n</body>\n</html>`,

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
                `div {\n    background-color: black;\n    width: 80px;\n    height: 30px;\n    padding: 20px;\n}`,
                `button {\n    background-color: red;\n    color: white;\n    padding: 10px;\n    border-radius: 5px;\n    width: 50px;\n    height: 40px;\n}`
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

    const solutions = {
        java: {
            easy: [
                'public class Main {\n   public static void main(String[] args) {\n      System.out.print("Hello World");\n   }\n}', // done
                'public class Main {\n   public static void main(String[] args) {\n      String name = "Jhon";\n      System.out.print("Name: " + name);\n   }\n}', //done
                'public class Main {\n   public static void main(String[] args) {\n      int a = 5;\n      int b = 15;\n      int c = 25;\n      int total = a + b + c;\n      System.out.println("Total: " + total);\n   }\n}',//done
                'public class Main {\n   public static void main(String[] args) {\n      int apple = 5;\n      int orange = 10;\n      System.out.println("Apple: $" + apple);\n      System.out.println("Orange: $" + orange);\n   }\n}',//done
                'public class Main {\n   public static void main(String[] args) {\n      int shirt = 15;\n      int pants = 10;\n      int total = shirt + pants;\n      System.out.println("Shirt: $" + shirt);\n      System.out.println("Pants: $" + pants);\n      System.out.println("Cost: $" + total);\n   }\n}',//done
                'public class Main {\n   public static void main(String[] args) {\n      boolean light = true;\n      if (light = true) {\n            System.out.println("The light is on");\n      } else if (light = false) {\n            System.out.println("The light is off");\n      }\n   }\n}',
                'public class Main {\n   public static void main(String[] args) {\n      int age = 18;\n      System.out.println("Sasha just turned 18");\n      if (age = 18) {\n            System.out.println("Sasha is legal");\n      } else {\n            System.out.println("Sasha is not legal age");\n      }\n   }\n}',
                'public class Main {\n   public static void main(String[] args) {\n      int toyo = 10;\n      int suka = 10;\n      int sibuyas = 10;\n      int bawang = 10;\n      int laurel = 5;\n      int total = toyo + suka + sibuyas + bawang + laurel;\n      System.out.println("Total: " + total);\n   }\n}',
                'public class Main {\n   public static void main(String[] args) {\n      char ave = "A";\n      System.out.print("Marry got an " + ave + " on the exam");\n   }\n}',
                'public class Main {\n   public static void main(String[] args) {\n      char ave = "A";\n      System.out.print("Marry got an " + ave + " on the exam");\n   }\n}',
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
                `<!DOCTYPE html>\n<html>\n<head>\n    <title>Welcome Page</title>\n</head>\n<body>\n    <h1>Welcome to Corrupted Prompt</h1>\n    <p>Enjoy the game!</p>\n    <p>SHEEESH!</p>\n</body>\n</html>`,
                `<!DOCTYPE html>\n<html>\n<head>\n    <title>Welcome Page</title>\n</head>\n<body>\n    <button class="button">Button</button>\n</body>\n</html>`,

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
                `div {\n    background: black;\n    width: 80px;\n    height: 30px;\n    padding: 20px;\n}`,
                `button {\n    background-color: red;\n    color: white;\n    padding: 10px;\n    border-radius: 5px;\n    width: 50px;\n    height: 40px;\n}`
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
                "Name: Jhon",
                "Total: 45",
                "Apple: $5\nOrange: $10",
                "Shirt: $15\nPants: $10\nCost: $25",
                "The light is on",
                "Sasha is legal",
                "Total: 45",
                "Marry got an A on the exam"
            ],
            moderate: [
                "Addition: 15",
                "Subtraction: 5",
                "Multiplication: 50",
                "Division: 2",
                "Modulus: 1"
            ],
            hardcore: [
                "Data added successfully",
                "Data retrieved successfully",
                "Data updated successfully",
                "Data deleted successfully",
                "DataManager operations completed"
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
                "Form submitted successfully",
                "Email submitted successfully",
                "Article content displayed",
                "Sidebar content displayed",
                "Header content displayed"
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
            easy: [
                `Read the statement and make sure that the statement is correct.`,
                `Create a the printing method and set the name 'Jhon'.`,
                `The "total" data type has no value. Set the value of the data type to be the sum of the list.`,
                `The program only prints the product  name. The program should also print the value of the product.`,
                `Correct the missing value in the 'shirt' variable`,
                `Make sure the light is on. Check the value of the data and `,
                `There is a wrong value that prevents Sasha from being of legal age.`,
                `Create data that sums the given list. Always double-check the program to ensure the right answer`,
                `The code is corrupted because of the wrong statement. Make sure to check the statement\nproperly.`,
            ],
            moderate: [
                "Implement the addition method.",
                "Implement the subtraction method.",
                "Implement the multiplication method.",
                "Implement the division method.",
                "Implement the modulus method."
            ],
            hardcore: [
                "Fix the method to add data to the list.",
                "Fix the method to retrieve data from the list.",
                "Fix the method to update data in the list.",
                "Fix the method to delete data from the list.",
                "Fix the DataManager class to handle all operations."
            ]
        },
        html: {
            easy: [
                "Fix the missing closing tag in the HTML structure.",
                "Add a paragraph element to the HTML structure.",
                "Fix the missing title in the HTML structure.",
                "Add a header element to the HTML structure.",
                "Fix the missing body tag in the HTML structure."
            ],
            moderate: [
                "Fix the missing class attribute in the HTML structure.",
                "Add a navigation bar to the HTML structure.",
                "Fix the missing section element in the HTML structure.",
                "Add a footer element to the HTML structure.",
                "Fix the missing list items in the HTML structure."
            ],
            hardcore: [
                "Fix the form action attribute to submit data.",
                "Add a required attribute to the email input field.",
                "Fix the missing article element in the HTML structure.",
                "Add a sidebar element to the HTML structure.",
                "Fix the missing header element in the HTML structure."
            ]
        },
        css: {
            easy: [
                "Fix the missing background-color property.",
                "Add a text-align property to center the header.",
                "Fix the missing line-height property in the paragraph.",
                "Add a padding property to the container.",
                "Fix the missing border-radius property in the button."
            ],
            moderate: [
                "Fix the missing background-color property in the header.",
                "Add a padding property to the footer.",
                "Fix the missing display property in the navigation bar.",
                "Add a box-shadow property to the card.",
                "Fix the missing grid-template-columns property in the grid."
            ],
            hardcore: [
                "Fix the missing justify-content property in the container.",
                "Add a transform property to center the modal.",
                "Fix the missing visibility property in the tooltip.",
                "Add a hover effect to display the tooltip text.",
                "Fix the missing z-index property in the tooltip."
            ]
        }
    };

    // Define a mapping for achievement IDs
    const achievementIds = {
        firstCorrect: 'first-correct',
        perfectJavaEasy: 'perfect-java-easy',
        godOfJava: 'god-of-java',
        hundredPoints: '100-points',
        completeNormalMode: 'complete-normal-mode'
    };

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    let totalMultiplier = 0;
    let questionOrder = [];
    let questionsAnswered = 0;

    let firstRewardGiven = false;
    let hundredPointsGiven = false;

    function startGame(language, difficulty, questionIndex = 0, isFirstGame = true) {
        if (isFirstGame) {
            const totalQuestions = buggyCodeSamples[language][difficulty].length;
            questionOrder = shuffleArray(Array.from({ length: totalQuestions }, (_, i) => i));
            questionsAnswered = 0;
            showCinematicText();
        }

        const currentQuestionIndex = questionOrder[questionIndex];
        initializeGame(language, difficulty, currentQuestionIndex);
    }

    function updateProgress() {
        const progressText = document.querySelector('.progress .p1');
        progressText.textContent = `Progress: ${questionsAnswered}/10`;
    }


    let userAnswers = [];
    async function handleSubmit(language, difficulty) {
        const userCode = window.editor.getValue().trim();
        userAnswers[questionsAnswered] = userCode;
        const correctCodes = solutions[language]?.[difficulty];
        const customNotification = document.getElementById('customNotification');
        const submitButton = document.getElementById('submit-button');
        const border1 = document.querySelector('.border1');
        const border2 = document.querySelector('.border2');
        const border3 = document.querySelector('.border3');
        const border4 = document.querySelector('.border4');

        submitButton.disabled = true;

        // Function to normalize code by removing extra spaces and formatting
        function normalizeCode(code) {
            if (!code) return ""; // Return an empty string if the code is undefined or null
            return code
                .replace(/\s+/g, ' ') // Replace multiple spaces with a single space
                .replace(/\s*=\s*/g, '=') // Ensure equal signs are consistent
                .replace(/\s*\+\s*/g, '+') // Ensure plus signs are consistent
                .replace(/\s*-\s*/g, '-') // Ensure minus signs are consistent
                .replace(/\s*\*\s*/g, '*') // Ensure multiplication signs are consistent
                .replace(/\s*\/\s*/g, '/') // Ensure division signs are consistent
                .trim(); // Trim leading and trailing spaces
        }
        if (correctCodes && correctCodes.some(correctCode => normalizeCode(userCode) === normalizeCode(correctCode))) {
            customNotification.style.display = 'block';
            customNotification.innerHTML = '<p>YOU FIXED IT!</p>';
            customNotification.style.color = 'green';
            customNotification.style.border = '2px solid rgb(0, 255, 42)';
            customNotification.style.boxShadow = '0 0 10px rgb(0, 255, 115), 0 0 20px rgb(30, 255, 0)';
            customNotification.style.webkitTextStroke = '2px #00ff80';
            border1.style.background = '#00ff80';
            border2.style.background = '#00ff80';
            border3.style.background = '#00ff80';
            border4.style.background = '#00ff80';

            if (!firstRewardGiven) {
                firstRewardGiven = true;
                const firstAchievement = document.getElementById('first-correct');
                firstAchievement.querySelector('.lock').textContent = 'Completed';
                firstAchievement.querySelector('.lock').style.color = 'green';
                firstAchievement.style.border = '2px solid rgb(0, 190, 0)';
                firstAchievement.querySelector('.cover').style.display = 'none';
                updateTotalMultiplier();
                markAchievementCompleted('firstCorrect');

                const loggedInUser = localStorage.getItem('loggedInUser');
                let userData = JSON.parse(localStorage.getItem(loggedInUser)) || {};
                userData.achievements = userData.achievements || {};
                userData.achievements.firstCorrect = true;
                localStorage.setItem(loggedInUser, JSON.stringify(userData));
            }
            points += totalMultiplier;
            console.log("Correct");
        } else {
            customNotification.style.display = 'block';
            customNotification.innerHTML = '<p>SYNTAX ERROR!</p>';
            customNotification.style.color = 'red';
            customNotification.style.border = '2px solid red';
            customNotification.style.webkitTextStroke = '2px white';
            customNotification.style.boxShadow = '0 0 10px rgb(255, 0, 128), 0 0 20px rgb(255, 0, 76)';
            border1.style.background = 'red';
            border2.style.background = 'red';
            border3.style.background = 'red';
            border4.style.background = 'red';
            console.log("Incorrect");
        }

        questionsAnswered++;
        updateProgress();


        if (questionsAnswered >= 10) {
            const isPerfectScore = userAnswers.every((answer, index) => {
                const correctAnswer = solutions['java']['easy'][questionOrder[index]];
                return normalizeCode(answer) === normalizeCode(correctAnswer);
            });

            if (isPerfectScore && selectedLanguage === 'java' && selectedDifficulty === 'easy') {
                const loggedInUser = localStorage.getItem('loggedInUser');
                const userData = JSON.parse(localStorage.getItem(loggedInUser)) || {};
                userData.achievements = userData.achievements || {};

                if (!userData.achievements.perfectJavaEasy) {
                    userData.achievements.perfectJavaEasy = true;
                    localStorage.setItem(loggedInUser, JSON.stringify(userData));

                    // Update the UI for the second achievement
                    const secondAchievement = document.getElementById('perfect-java-easy');
                    secondAchievement.querySelector('.lock').textContent = 'Completed';
                    secondAchievement.querySelector('.lock').style.color = 'green';
                    secondAchievement.querySelector('.cover').style.background = 'transparent';
                    secondAchievement.style.border = '2px solid rgb(0, 190, 0)';

                    console.log("Second achievement unlocked: Perfect score in Java easy mode!");
                    updateTotalMultiplier();
                    markAchievementCompleted('perfectJavaEasy');
                }
            }
            const loggedInUser = localStorage.getItem('loggedInUser');
            const userData = JSON.parse(localStorage.getItem(loggedInUser)) || {};
            const totalPoints = (userData.points || 0) + points;
            userData.points = totalPoints + points;

            // Check if the user has reached 100 points
            if (totalPoints >= 100) {
                if (!hundredPointsGiven) {
                    hundredPointsGiven = true;
                    const hundredPointsAchievement = document.getElementById('100-points');
                    hundredPointsAchievement.querySelector('.lock').textContent = 'Completed';
                    hundredPointsAchievement.querySelector('.lock').style.color = 'green';
                    hundredPointsAchievement.querySelector('.cover').style.background = 'transparent';
                    hundredPointsAchievement.style.border = '2px solid rgb(0, 190, 0)';

                    userData.achievements = userData.achievements || {};
                    userData.achievements.hundredPoints = true;
                    localStorage.setItem(loggedInUser, JSON.stringify(userData));
                    updateTotalMultiplier();
                    markAchievementCompleted('hundredPoints');
                }

                // Update the UI for the "100 Points" achievement
                console.log("Achievement unlocked: 100 Points!");
            }

            // Update points in local storage and database
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
                border1.style.background = 'transparent';
                border2.style.background = 'transparent';
                border3.style.background = 'transparent';
                border4.style.background = 'transparent';
            }, 1000);
        } else {
            // Move to the next question in the shuffled order
            const nextQuestionIndex = questionsAnswered; // Use the next index in the shuffled order
            setTimeout(() => {
                customNotification.style.display = 'none';
                border1.style.background = 'transparent';
                border2.style.background = 'transparent';
                border3.style.background = 'transparent';
                border4.style.background = 'transparent';
                submitButton.disabled = false;
                startGame(language, difficulty, nextQuestionIndex, false);
            }, 1000);
        }
    }

    let timerInterval;


   /**
 * Generate a preview element based on the CSS solution.
 * @param {string} cssCode - The CSS code to analyze.
 * @returns {string} - The HTML element to preview.
 */
function generatePreviewElement(cssCode) {
    if (!cssCode) return '<div>Preview</div>';

    const normalizedCode = cssCode.replace(/\s+/g, ' ').trim();

    // Extract the selector from the CSS code
    const selectorMatch = normalizedCode.match(/^[.#]?[a-zA-Z0-9_-]+/);
    const selector = selectorMatch ? selectorMatch[0] : 'div';

    if (selector.startsWith('.')) {
        return `<div class="${selector.slice(1)}">Div Element</div>`;
    } else if (selector.startsWith('#')) {
        return `<div id="${selector.slice(1)}">Div Element</div>`;
    } else if (selector === 'button') {
        return '<button class="button">Button</button>';
    } else if (selector === 'h1') {
        return '<h1>Header</h1>';
    } else if (selector === 'p') {
        return '<p>Paragraph</p>';
    } else if (selector === 'div') {
        return '<div>Div Element</div>';
    } else {
        return `<${selector}>Preview</${selector}>`; 
    }
}

    function initializeGame(language, difficulty, questionIndex) {
        console.log("Game is starting...");

        document.querySelector('.gameScreen').style.display = 'block';

        const unfixedCodeDiv = document.querySelector('.unfixedCode');
        const guideTextDiv = document.querySelector('.guide-text');
        const editorContainer = document.getElementById('editor-container');
        const expectedOutputDiv = document.getElementById('expectedOutput');
        const submitButton = document.getElementById('submit-button');
        const timerDisplay = document.getElementById('timer-display');

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
        const guide = guideQuestions[language]?.[difficulty]?.[questionIndex];
        const solution = solutions[language]?.[difficulty][questionIndex];
        const expectedOutput = expectedOutputs[language]?.[difficulty][questionIndex];

        const escapedCode = code.replace(/</g, '&lt;').replace(/>/g, '&gt;');
        unfixedCodeDiv.innerHTML = `<pre>${escapedCode}</pre>`;

        guideTextDiv.innerHTML = guide ? `<pre>${guide}</pre>` : '<p>No guide available for this selection</p>';

        if (language === 'java') {
            expectedOutputDiv.innerHTML = `${expectedOutput}`;
        } else if (language === 'css') {
            const iframe = document.createElement('iframe');
            iframe.style.width = '100%';
            iframe.style.height = '150px';
            iframe.style.border = 'none';
            iframe.style.background = 'white';

            iframe.onload = function () {
                const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
                iframeDocument.open();
                iframeDocument.writeln(`
                <!DOCTYPE html>
                <html>
                <head>
                    <style>
                        ${solution || ''}
                    </style>
                </head>
                <body>
                    ${generatePreviewElement(solution)}
                </body>
                </html>
            `);
                iframeDocument.close();
            };

            expectedOutputDiv.innerHTML = '';
            expectedOutputDiv.appendChild(iframe);
        } else if (language === 'html') {
            const iframe = document.createElement('iframe');
            iframe.style.width = '100%';
            iframe.style.height = 'auto';
            iframe.style.padding = '0';
            iframe.style.background = 'white';
            iframe.srcdoc = solution || '';
            expectedOutputDiv.innerHTML = '';
            expectedOutputDiv.appendChild(iframe);
        } else {
            expectedOutputDiv.innerHTML = `<pre>${solution || "No expected output available."}</pre>`;
        }

        document.querySelector('.gameTitle').textContent = `${language.toUpperCase()} - ${difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}`;
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

        if (difficulty === 'easy') {
            startTimer(30, () => {
                questionsAnswered++;
                updateProgress();
                if (questionsAnswered >= 10) {
                    showGameOverScreen();
                } else {
                    initializeGame(language, difficulty, questionsAnswered);
                }
            });
        } else if (difficulty === 'moderate') {
            startTimer(45, () => {
                questionsAnswered++;
                updateProgress();
                if (questionsAnswered >= 10) {
                    showGameOverScreen();
                } else {
                    initializeGame(language, difficulty, questionsAnswered);
                }
            });
        } else if (difficulty === 'hardcore') {
            startTimer(60, () => {
                questionsAnswered++;
                updateProgress();
                if (questionsAnswered >= 10) {
                    showGameOverScreen();
                } else {
                    initializeGame(language, difficulty, questionsAnswered);
                }
            });
        }
    }

    function startTimer(duration, onTimeUp) {
        const timerDisplay = document.getElementById('timer-display');
        const customNotification = document.getElementById('customNotification');
        let timeLeft = duration;

        clearInterval(timerInterval); // Clear any existing timer
        timerInterval = setInterval(() => {
            timerDisplay.textContent = `Time Left: ${timeLeft}s`;
            timeLeft--;

            if (timeLeft < 0) {
                clearInterval(timerInterval);

                // Show "Time out" notification
                customNotification.style.display = 'block';
                customNotification.innerHTML = '<p>TIME OUT!</p>';
                customNotification.style.color = 'orange';
                customNotification.style.border = '2px solid orange';
                customNotification.style.boxShadow = '0 0 10px orange, 0 0 20px orange';

                // Hide the notification after 1 second and move to the next question
                setTimeout(() => {
                    customNotification.style.display = 'none';
                    onTimeUp();
                }, 1000);
            }
        }, 1000);
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
    //document.getElementById('infinite-button').addEventListener('click', startInfiniteMode);
    updateTotalMultiplier();

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
        const isVisible = menu.style.display === "flex";

        // Hide all other menus and deactivate their buttons
        menus.forEach((m, i) => {
            m.style.display = "none";
            buttons[i].classList.remove("active");
        });

        // Toggle the visibility of the clicked menu
        menu.style.display = isVisible ? "none" : "flex";

        // Toggle the active state of the button
        if (!isVisible) {
            button.classList.add("active");
        } else {
            button.classList.remove("active");
        }
    }

    function closeMenu(menu, button) {
        menu.classList.remove("show");
        button.classList.remove("active");
    }

    buttons.forEach((button, index) => {
        if (button) {
            button.addEventListener("click", function (event) {
                event.stopPropagation();
                const isVisible = menus[index].style.display === "flex";
                toggleMenu(menus[index], button);
                menus.forEach(menu => menu.style.display = "none");
                menus[index].style.display = isVisible ? "none" : "flex";
            });

        }
    });

    document.addEventListener("click", function (event) {
        menus.forEach((menu, i) => {
            if (!menu.contains(event.target) && !buttons[i].contains(event.target)) {
                menu.style.display = "none";
                buttons[i].classList.remove("active");
            }
        });
    });

    showRegister.addEventListener("click", function (event) {
        event.preventDefault();
        console.log("Register clicked");
        loginBox.style.display = "none";
        registerBox.style.display = "block";

    });

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

        const bannedUsernames = ["nigger", "knee grow", "knee gross", "test", "banneduser"];
        if (bannedUsernames.includes(username.toLowerCase())) {
            alert("This username is not allowed. Please choose a different username.");
            return;
        }

        if (!username || !password || !id || !section || !title) {
            alert("Please fill out all fields.");
            return;
        }

        // Validate ID format
        if (!/^02000\d{6}$/.test(id)) {
            alert("ID must be your STI ID NUMBER.");
            return;
        }

        try {
            const { data: existingUser, error: fetchError } = await supabase
                .from("user")
                .select("id")
                .eq("id", id);

            if (fetchError) {
                console.error("Error checking ID existence:", fetchError);
                alert("An error occurred while checking the ID. Please try again.");
                return;
            }

            if (existingUser && existingUser.length > 0) {
                alert("This ID is already registered. Please use a different ID.");
                return;
            }

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
        const loggedInUser = localStorage.getItem('loggedInUser');
        const profileRank = document.querySelector('.rank');

        if (!username || !password) {
            alert("Please fill out both username and password.");
            return;
        }

        try {
            const { data: users, error } = await supabase
                .from("user")
                .select("username, password, id, section, title, points, achievements")
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


            const backgroundMusic = document.getElementById("backgroundMusic");
            backgroundMusic.volume = 0.5;
            backgroundMusic.play();
            localStorage.setItem("isMusicPlaying", "true");

            authContainer.style.display = "none";
            mainContainer.style.display = "block";
            randomText.style.display = "block";
            feedback.style.display = "block";
            note.style.display = "block";
            if (user.username === loggedInUser && profileRank) {
                profileRank.textContent = `Rank: #${index + 1}` || "Rank: N/A";
            }

            const userData = {
                id: user.id,
                title: user.title,
                section: user.section,
                profilePicture: "",
                points: user.points || 0,
                achievements: user.achievements || {},
            };
            localStorage.setItem("loggedInUser", username);
            localStorage.setItem(username, JSON.stringify(userData));

            profileName.textContent = username;
            profileID.textContent = `ID: ${user.id}`;
            profileTitle.textContent = `Status: ${user.title}`;
            profileSection.textContent = user.section;
            profilePicture.src = userData.profilePicture || "noprofile.jpg";
            profilePoints.textContent = `Total Points: ${user.points || 0}`;

            loadAchievements();
            updateTotalMultiplier();

        } catch (error) {
            console.error("Unexpected error during login:", error);
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
        localStorage.setItem("isMusicPlaying", "false");
        const backgroundMusic = document.getElementById("backgroundMusic");
        backgroundMusic.pause();

        authContainer.style.display = "block";
        mainContainer.style.display = "none";
        profileMenu.style.display = "none";
        randomText.style.display = "none";
        feedback.style.display = "none";
        note.style.display = 'none';

        const achievementElements = document.querySelectorAll(".reward");
        achievementElements.forEach(element => {
            element.querySelector(".lock").textContent = "Locked";
            element.querySelector(".lock").style.color = "red";
            element.querySelector(".cover").style.background = "rgba(0, 0, 0, 0.5)";
            element.style.border = "2px solid red";
        });
    });

    loginUsername.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            if (!loginButton.disabled) {
                loginButton.click();
            }
        }
    });

    loginPassword.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            if (!loginButton.disabled) {
                loginButton.click();
            }
        }
    });

    registerUsername.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            registerButton.click();
        }
    });

    registerPassword.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            registerButton.click();
        }
    });

    registerID.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            registerButton.click();
        }
    });

    registerTitle.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            registerButton.click();
        }
    });

    registerSection.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            registerButton.click();
        }
    });

    // Wait for user interaction to play background music
    document.addEventListener("click", function enableMusicPlayback() {
        const backgroundMusic = document.getElementById("backgroundMusic");
        backgroundMusic.volume = 0;

        const isMusicPlaying = localStorage.getItem("isMusicPlaying");
        if (isMusicPlaying === "true") {
            backgroundMusic.play().catch((error) => {
                console.error("Error playing background music:", error);
            });
        }
        document.removeEventListener("click", enableMusicPlayback);
    });

    // Auto login if already logged in
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
        const userData = JSON.parse(localStorage.getItem(loggedInUser));
        const achievements = userData.achievements || {};

        profileName.textContent = loggedInUser;
        profileID.textContent = `ID: ${userData.id}`;
        profileTitle.textContent = `Status: ${userData.title}`;
        profileSection.textContent = userData.section;
        profilePicture.src = userData.profilePicture || "noprofile.jpg";
        profilePoints.textContent = `Total Points: ${userData.points || 0}`;

        const backgroundMusic = document.getElementById("backgroundMusic");
        backgroundMusic.volume = 0;

        const isMusicPlaying = localStorage.getItem("isMusicPlaying");
        if (isMusicPlaying === "true") {
            backgroundMusic.play();
        }

        backgroundMusic.addEventListener("play", () => {
            localStorage.setItem("isMusicPlaying", "true");
        });

        backgroundMusic.addEventListener("pause", () => {
            localStorage.setItem("isMusicPlaying", "false");
        });

        authContainer.style.display = "none";
        mainContainer.style.display = "block";
        feedback.style.display = "block";
        note.style.display = "block";

        updateTotalMultiplier();
        loadAchievements();
    }


    // Function to fetch registered users from Supabase and populate the leaderboard
    async function fetchAndPopulateLeaderboard() {
        const leaderboardTable = document.querySelector("#leaderboard-table tbody");
        const loggedInUser = localStorage.getItem('loggedInUser');
        const profileRank = document.querySelector('.rank');

        try {
            const { data: user, error } = await supabase
                .from('user')
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
            const sortedUsers = user.sort((a, b) => b.points - a.points);

            leaderboardTable.innerHTML = "";
            sortedUsers.forEach((user, index) => {
                const row = document.createElement("tr");

                row.innerHTML = `
                    <th class="top${index + 1}">
                        ${index === 0 ? '<div class="crown-container"><img src="top1.png" alt="Crown" "></div>' : ''}
                        ${index + 1}
                    </th>
                    <th>${user.username}</th>
                    <th>${user.section}</th>
                    <th>${user.id}</th>
                    <th>${user.points}</th>
                `;

                leaderboardTable.appendChild(row);

                if (user.username === loggedInUser && profileRank) {
                    profileRank.textContent = `Rank: #${index + 1}` || "Rank: N/A";
                }
            });
        } catch (error) {
            console.error("Error fetching or populating leaderboard:", error);
        }

    }
    setInterval(fetchAndPopulateLeaderboard, 100);

    await fetchAndPopulateLeaderboard();

    // Function to reset the game state
    function resetGame() {
        if (window.editor) {
            window.editor.setValue('');
            window.editor.dispose();
            window.editor = null;
        }

        questionsAnswered = 0;
        questionOrder = [];
        selectedLanguage = "";
        selectedDifficulty = "";

        document.querySelector('.gameTitle').textContent = '';
        document.querySelector('.unfixedCode').innerHTML = '';
        document.querySelector('.guide-text').innerHTML = '';
        document.querySelector('#editor-container').innerHTML = '';
        document.querySelector('.progress .p1').textContent = `Progress: 0/10`;

        document.querySelector('.gameScreen').style.display = 'none';
        document.querySelector('.languageMenu').style.display = 'none';
        document.querySelector('.difficultiesMenu').style.display = 'none';
        document.querySelector('.randomtext').style.display = 'block';
        document.querySelector('.logo').style.display = 'block';
        document.querySelector('.userMenu').style.display = 'block';
        document.querySelector('.customNotifier').style.display = 'block';
        document.querySelector('.feedback').style.display = 'block';

        clearInterval(timerInterval);
        updateTotalMultiplier();
        loadAchievements();
        console.log("Game state has been reset. Ready to start again.");
    }

    document.getElementById('exit-button').addEventListener("click", resetGame);
    document.getElementById('return-button').addEventListener("click", resetGame);


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

        function loadNextQuestion() {
            const languages = Object.keys(infiniteBuggyCodeTemplates);
            const randomLanguage = languages[Math.floor(Math.random() * languages.length)];
            const buggyCode = generateBuggyCode(randomLanguage);

            const escapedCode = buggyCode.replace(/</g, '&lt;').replace(/>/g, '&gt;');
            const unfixedCodeDiv = document.querySelector('.unfixedCode');
            const guideTextDiv = document.querySelector('.guide-text');
            const editorContainer = document.getElementById('editor-container');

            unfixedCodeDiv.innerHTML = `<pre>${escapedCode}</pre>`;
            guideTextDiv.innerHTML = `<p>Fix the code in ${randomLanguage.toUpperCase()}!</p>`;

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

            submitButton.replaceWith(submitButton.cloneNode(true));
            const newSubmitButton = document.getElementById('submit-button');
            newSubmitButton.addEventListener('click', function () {
                handleSubmit(randomLanguage, buggyCode, loadRandomQuestion);
            });
        }
        loadNextQuestion();
    }



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

    function isMobileOrTablet() {
        return /Mobi|Android|iPad|iPhone|Tablet/i.test(navigator.userAgent);
    }

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
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];

        const cinematicText = document.getElementById('cinematicText');
        const cinematicMessage = document.getElementById('cinematicMessage');
        cinematicMessage.setAttribute('data-text', randomMessage);
        cinematicMessage.textContent = randomMessage;
        cinematicText.style.display = 'block';

        setTimeout(() => {
            cinematicText.style.display = 'none';
            if (callback) callback();
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
        const summaryContainer = document.getElementById('summary-container');
        gameOverScreen.style.display = 'block';

        document.querySelector('.gameScreen').style.display = 'none';

        function normalizeCode(code) {
            return code
                .replace(/\s+/g, ' ') // Replace multiple spaces with a single space
                .replace(/\s*=\s*/g, '=') // Ensure equal signs are consistent
                .replace(/\s*\+\s*/g, '+') // Ensure plus signs are consistent
                .replace(/\s*-\s*/g, '-') // Ensure minus signs are consistent
                .replace(/\s*\*\s*/g, '*') // Ensure multiplication signs are consistent
                .replace(/\s*\/\s*/g, '/') // Ensure division signs are consistent
                .replace(/\s*;\s*/g, ';') // Ensure semicolons are consistent
                .replace(/[\r\n]+/g, '') // Remove newlines for consistent comparison
                .trim();
        }

        let summaryHTML = `<table>
            <tr>
                <th>Question</th>
                <th>Correct Answer</th>
                <th>Your Answer</th>
            </tr>`;

        questionOrder.forEach((questionIndex, i) => {
            const userAnswer = userAnswers[i];
            if (userAnswer) {
                const correctAnswer = solutions[selectedLanguage][selectedDifficulty][questionIndex];
                const isCorrect = normalizeCode(userAnswer) === normalizeCode(correctAnswer);
                summaryHTML += `
                    <tr>
                        <td>Question ${i + 1}</td>
                        <td><pre>${correctAnswer}</pre></td>
                        <td><pre style="background:${isCorrect ? 'rgb(0, 133, 66)' : 'rgb(133, 0, 0)'};">${userAnswer}</pre></td>
                    </tr>
                `;
            }
        });

        summaryHTML += '</table>';
        summaryContainer.innerHTML = summaryHTML;

        returnButton.addEventListener("click", function () {
            resetGame();

            document.querySelector('.randomtext').style.display = 'block';
            document.querySelector('.logo').style.display = 'block';
            document.querySelector('.userMenu').style.display = 'block';
            document.querySelector('.customNotifier').style.display = 'block';
            document.querySelector('.feedback').style.display = 'block';
            note.style.display = 'block';
            gameOverScreen.style.display = 'none';

            console.log("Game exited and reset.");
        });
    }

    async function markAchievementCompleted(achievementKey) {
        const achievementId = achievementIds[achievementKey];
        if (!achievementId) {
            console.error("Invalid achievementKey:", achievementKey);
            return;
        }

        const loggedInUser = localStorage.getItem("loggedInUser");
        if (loggedInUser) {
            try {
                const { data: user, error } = await supabase
                    .from("user")
                    .select("achievements")
                    .eq("username", loggedInUser)
                    .single();

                if (error) {
                    console.error("Error fetching achievements:", error);
                    return;
                }

                const achievements = user.achievements || {};
                achievements[achievementKey] = true;

                const { error: updateError } = await supabase
                    .from("user")
                    .update({ achievements })
                    .eq("username", loggedInUser);

                if (updateError) {
                    console.error("Error updating achievements:", updateError);
                    return;
                }

                // Update UI
                loadAchievements();
            } catch (error) {
                console.error("Unexpected error while marking achievement:", error);
            }
        }
    }

    async function loadAchievements() {
        const loggedInUser = localStorage.getItem("loggedInUser");
        if (loggedInUser) {
            try {
                const { data: user, error } = await supabase
                    .from("user")
                    .select("achievements")
                    .eq("username", loggedInUser)
                    .single();

                if (error) {
                    console.error("Error fetching achievements:", error);
                    return;
                }

                const achievements = user.achievements || {};
                Object.keys(achievements).forEach(achievementKey => {
                    if (achievements[achievementKey]) {
                        const achievementId = achievementIds[achievementKey];
                        const achievementElement = document.getElementById(achievementId);
                        if (achievementElement) {
                            achievementElement.querySelector(".lock").textContent = "Completed";
                            achievementElement.querySelector(".lock").style.color = "green";
                            achievementElement.querySelector(".cover").style.background = "transparent";
                            achievementElement.style.border = "2px solid rgb(0, 190, 0)";
                        }
                    }
                });
            } catch (error) {
                console.error("Unexpected error while loading achievements:", error);
            }
        }
    }

    // Call this function on page load
    document.addEventListener('DOMContentLoaded', () => {
        loadAchievements();
    });

    function updateTotalMultiplier() {
        const totalMultiplierElement = document.querySelector('.total-multiplier');
        const totalCompletedElement = document.querySelector('.total-completed');
        let totalCompleted = 0;
        const loggedInUser = localStorage.getItem('loggedInUser');
        if (loggedInUser) {
            const userData = JSON.parse(localStorage.getItem(loggedInUser)) || {};
            const achievements = userData.achievements || {};

            totalMultiplier = 0;

            if (achievements.firstCorrect) {
                totalMultiplier += 1;
                totalCompleted++;
            }
            if (achievements.perfectJavaEasy) {
                totalMultiplier += 2;
                totalCompleted++;
            }
            if (achievements.godOfJava) {
                totalMultiplier += 10;
                totalCompleted++;
            }
            if (achievements.hundredPoints) {
                totalMultiplier += 2;
                totalCompleted++;
            }
        }
        totalMultiplierElement.textContent = `Multiplier: x${totalMultiplier + 1}`;
        totalCompletedElement.textContent = `Completed: ${totalCompleted}`;
    }
});