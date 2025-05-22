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
    function formatPoints(points) {
        if (points >= 1_000_000_000_000) {
            return (points / 1_000_000_000_000).toLocaleString(undefined, { maximumFractionDigits: 3 }) + 'T';
        } else if (points >= 1_000_000_000) {
            return (points / 1_000_000_000).toLocaleString(undefined, { maximumFractionDigits: 3 }) + 'B';
        } else if (points >= 1_000_000) {
            return (points / 1_000_000).toLocaleString(undefined, { maximumFractionDigits: 3 }) + 'M';
        } else if (points >= 1_000) {
            return (points / 1_000).toLocaleString(undefined, { maximumFractionDigits: 3 }) + 'K';
        }
        return points.toString();
    }

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
                `public class Main {\n   public static void main(String[] args) {\n      boolean light = false;\n      if (light == true) {\n            System.out.println("The light is on");\n      } else if (light = false) {\n            System.out.println("The light is off");\n      }\n   }\n}`,
                `public class Main {\n   public static void main(String[] args) {\n      int age = 17;\n      System.out.println("Sasha just turned 18");\n      if (age = 18) {\n            System.out.println("Sasha is legal");\n      } else {\n            System.out.println("Sasha is not legal age");\n      }\n   }\n}`,
                `public class Main {\n   public static void main(String[] args) {\n      int toyo = 10;\n      int suka = 10;\n      char sibuyas = 10;\n      int bawang = 10;\n      int laurel = 5;\n      int total = toyo +;\n      System.out.println("Total: ");\n   }\n}`,
                `public class Main {\n   public stakatistic void main(String[] args) {\n      char ave = "A"\n      System.out.print("Marry got an " + ave + " on the exam)\n   }\n}`,
                `public class Addition {\n   public static void main(String[] args) {\n      int x = 16;\n      int y = 32;\n      int total = x - y;\n   }\n}`,
                `public class Subtruction {\n   public static void main(String[] args) {\n      int x = 50;\n      int y = 30;\n      int total = x + y;\n   }\n}`,
                `public class Multiplication {\n   public static void main(String[] args) {\n      int x = 13;\n      int y = 10;\n      int total = x / y;\n   }\n}`,
                `public class Division {\n   public static void main(String[] args) {\n      int x = 150;\n      int y = 150;\n      int total = x * y;\n   }\n}`,
                `import java.util.Scanner;\npublic class Main {\n   public static void main(String[] args) {\n      Scanner Scammer = new Scanner(System.in);\n      System.out.print("Enter your name ");\n      String name = scanner.nextLine();\n      System.out.println("Your name is " + name);\n   }\n}`,
                `public class Main {\n   public static void main(String[] args) {\n      print("Hello Neighbor")\n   }\n}`,
            ],
            moderate: [
                `public class Loop {\n   public static void main(String[] args) {\n      four(int i = 0; i < 5; i++) {\n         System.out.printing(i);\n      }\n   }\n}`,
                `public class Loop {\n   public static void main(String[] args) {\n      int i = 0;\n      do {\n         System.out.println(i)\n         i++;\n      }\n      while (i > 5);\n   }\n}`,
                `public class Days {\n   public static void main(String[] args) {\n      int day = null\n      switch (day) {\n         case 1:\n            System.out.println("Sunday");\n            break;\n         case 2:\n            System.out.println("Monday");\n            break;\n         case 3:\n            System.out.println("Tuesday");\n            break;\n         case 4:\n            System.out.println("Wednesday");\n            break;\n         case 5:\n            System.out.println("Thursday");\n            break;\n         case 6:\n            System.out.println("Friday");\n            break;\n         case 7:\n            System.out.println("Saturday");\n            break;\n         default;\n      }\n   }\n}`,
                `public class Days {\n   public static void main(String[] args) {\n      int day = 0;\n      switch (day) {\n         case 1:\n            System.out.println("Sunday");\n            break;\n         case 2:\n            System.out.println("Monday");\n            break;\n         case 3:\n            System.out.println("Tuesday");\n            break;\n         case 4:\n            System.out.println("Wednesday");\n            break;\n         case 5:\n            System.out.println("Thursday");\n            break;\n         case 6:\n            System.out.println("Friday");\n            break;\n         case 7:\n            System.out.println("Saturday");\n            break;\n         default:\n      }\n   }\n}`,
                `public class Response {\n   public static void main(String[] args) {\n      int response = 0;\n      switch (response) {\n         case 1:\n            System.out.println("Yes");\n            break;\n         case 2:\n            System.out.println("No");\n            break;\n         default:\n      }\n   }\n}`,
                `public class Main {\n   public static void main(String[] args) {\n      try {\n         int[] numbers = {1,3,5};\n         System.out.println(numbers[3]);\n      } catch (Exception e) {\n         System.out.println("Something went wrong");\n      }\n   }\n}`,
                `public class Main {\n   public static void main(String[] args) {\n      int number = 5;\n      float decimal = f;\n      boolean bool = yes;\n      System.out.println("Number: " + number);\n      System.out.println("Decimals: " + decimal);\n      System.out.println("Boolean: " + boolean);\n   }\n}`,
                `public class Loop {\n   public static void main(String[] args) {\n      int i = 0;\n      whille (i < 5) {\n         System.out.println(i);\n         i++;\n      }\n   }\n}`,
                `public class Main {\n   public static void main(String[] args) {\n      String[] names = {"Jhon", "Christoper", "Micheal");\n      System.out.println(names[3]);\n   }\n}`, //wrong spelling
                `public class Main {\n   int x;\n   public Main() {\n      x = x;\n   }\n   public static void main(String[] args) {\n      Main obj = new Mains();\n      System.out.println(obj.x);\n   }\n}`,
                `class Animal {\n   public void animalSound() {\n      System.out.println("The animal makes a sound");\n   }\n}\n\nClass Pig extends Animal {\n   public void animalSound() {\n      System.out.println("The pig says: wee wee");\n   }\n}\n\npublic class Main {\n   public static void main(String[] args) {\n      Animal myAnimal = NEW Pig();\n      myAnimal.animalSound());\n   }\n}`,

            ],
            hardcore: [
                // 1. Reverse string (buggy)
                `public class Main {\n   public static void main(String[] args) {\n      String originalStr = "Hello";\n      String reversedStr = "";\n      System.out.println("Original string: " + originalStr);\n      for (int i = 0; i <= originalStr.length(); i++) {\n         reversedStr += originalStr.charAt(i);\n      }\n      System.out.println("Reversed string: " + reversedStr);\n   }\n}`,
                // 2. Find lowest age (buggy)
                `public class Main {\n   public static void main(String[] args) {\n      int ages[] = {20, 22, 18, 35, 48, 26, 87, 70};\n      int lowestAge = 0;\n      for (int age : ages) {\n         if (lowestAge > age) {\n            lowestAge = age;\n         }\n      }\n      System.out.println("The lowest age in the array is: " + lowestAge);\n   }\n}`,
                // 3. Average age (buggy)
                `public class Main {\n   public static void main(String[] args) {\n      int ages[] = {20, 22, 18, 35, 48, 26, 87, 70};\n      float avg, sum = 0;\n      int length = ages.length;\n      for (int age : ages) {\n         sum += age;\n      }\n      avg = sum / length;\n      System.out.println("The average age is: " + avg);\n   }\n}`,
                // 4. Array sum (buggy)
                `public class Main {\n   public static void main(String[] args) {\n      int[] myArray = {1, 5, 10, 25};\n      int sum;\n      for (int i = 0; i < myArray.length; i++) {\n         sum += myArray[i];\n      }\n      System.out.println("The sum is: " + sum);\n   }\n}`,
                // 5. ArrayList print (buggy)
                `public class Main {\n   public static void main(String[] args) {\n      ArrayList<String> cars = new ArrayList<String>();\n      cars.add("Volvo");\n      cars.add("BMW");\n      cars.add("Ford");\n      cars.add("Mazda");\n      for (String i : cars) {\n         System.out.println(i);\n      }\n   }\n}`,
                // 6. Sort names (buggy)
                `public class Main {\n   public static void main(String[] args) {\n      String[] names = {"Lee", "Riven", "Jhon", "Christoper", "Deezna", "Sakamoto", "Aimie"};\n      Arrays.sort(names);\n      for (String i : names) {\n         System.out.println(i);\n      }\n   }\n}`,
                // 7. Find max value (buggy)
                `public class Main {\n   public static void main(String[] args) {\n      int[] nums = {3, 7, 2, 9, 4};\n      int max = 0;\n      for (int n : nums) {\n         if (n > max) {\n            max = n;\n         }\n      }\n      System.out.println("Max value: " + max);\n   }\n}`,
                // 8. Count even numbers (buggy)
                `public class Main {\n   public static void main(String[] args) {\n      int[] nums = {2, 3, 4, 5, 6};\n      int count = 0;\n      for (int n : nums) {\n         if (n % 2 == 1) {\n            count++;\n         }\n      }\n      System.out.println("Even count: " + count);\n   }\n}`,
                // 9. Print 2D array (buggy)
                `public class Main {\n   public static void main(String[] args) {\n      int[][] arr = {{1,2},{3,4}};\n      for (int i = 0; i < arr.length; i++) {\n         for (int j = 0; j < arr.length; j++) {\n            System.out.print(arr[i][j] + " ");\n         }\n         System.out.println();\n      }\n   }\n}`,
                // 10. String concatenation (buggy)
                `public class Main {\n   public static void main(String[] args) {\n      String a = "Java";\n      String b = "Hardcore";\n      String c = a - b;\n      System.out.println(c);\n   }\n}`,
                // 11. Factorial (buggy)
                `public class Main {\n   public static void main(String[] args) {\n      int n = 5;\n      int fact = 1;\n      for (int i = 1; i <= n; i++) {\n         fact = fact + i;\n      }\n      System.out.println("Factorial: " + fact);\n   }\n}`,
                // 12. Fibonacci (buggy)
                `public classes Main {\n   public static void main(String[] args) {\n      int n1 = 0, n2 = 1, n3, i, count = 5;\n      System.out.print(n1 + " " + n2);\n      for (i = 2; i < count; ++i) {\n         n3 = n1 + n2;\n         System.out.print(" " + n3);\n         n1 = n2;\n         n2 = n3;\n      }\n   }\n}`,
                // 13. Palindrome check (buggy)
                `public class Main {\n   public static void main(String[] args) {\n      String str = "madam";\n      String rev = "";\n      for (int i = str.length(); i >= 0; i--) {\n         rev += str.charAt(i);\n      }\n      if (str == rev) {\n         System.out.println("Palindrome");\n      } else {\n         System.out.println("Not Palindrome");\n      }\n   }\n}`,
                // 14. Sum of digits (buggy)
                `public class Main {\n   public static void main(String[] args) {\n      int num = 1234;\n      int sum = 0;\n      while (num > 0) {\n         sum = num % 10;\n         num = num / 10;\n      }\n      System.out.println("Sum: " + sum);\n   }\n}`,
                // 15. Array copy (buggy)
                `public class Main {\n   public static void main(String[] args) {\n      int[] a = {1,2,3};\n      int[] b = a;\n      b[0] = 99;\n      System.out.println(a[0]);\n   }\n}`,

            ]
        },
        html: {
            easy: [
                `<!DOCTYPE html>\n<html>\n<head>\n    <title>Welcome Page</title>\n</head>\n<body>\n    <h1>Welcome to Corrupted Prompt</h1>\n    <p>Enjoy the game!</p>\n</body>\n</html>`,
                `<!DOCTYPE html>\n<html>\n<head>\n    <title>Welcome Page</title>\n</head>\n<body>\n    <h1>Welcome to Corrupted Prompt</h1>\n    <p>Enjoy the game!</p>\n    <p>HELLO!</p>\n</body>\n</html>`,
                `<!DOCTYPE html>\n<html>\n<head>\n    <title>Home</title>\n</head>\n<body>\n    <h1>Pindutin para pumogi</h1>\n    <button></button>\n</body>\n</html>`,
                `<!DOCTYPE html>\n<html>\n<head>\n    <title>Home</title>\n</head>\n<body>\n    <a href="https://example.com">Example Page</a>\n</body>\n</html>`,
                `<!DOCTYPE html>\n<html>\n<head>\n    <title>Home</title>\n</head>\n<body>\n    <table>\n      <tr>\n        <th>Name</th>\n        <th>Age</age>\n        <th>Birthday</th>\n      </tr>\n    </table>\n</body>\n</html>`,
                `<!DOCTYPE html>\n<html>\n<head>\n    <title>Home</title>\n</head>\n<body>\n    <ol>\n      <li>Coffee</li>\n      <li>Milk</li>\n      <li>Milo</li>\n      <li>Alaksan FR</li>\n    </ol>\n</body>\n</html>`,
                // 7. Missing closing </h1> tag
                `<!DOCTYPE html>\n<html>\n<head>\n    <title>Sample</title>\n</head>\n<body>\n    <h1>Sample Header\n    <p>Sample paragraph.</p>\n</body>\n</html>`,
                // 8. No <title> in <head>
                `<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n    <h1>Test Header</h1>\n    <p>Test paragraph.</p>\n</body>\n</html>`,
                // 9. <p> tag not closed
                `<!DOCTYPE html>\n<html>\n<head>\n    <title>Example</title>\n</head>\n<body>\n    <h1>Example Header</h1>\n    <p>Example paragraph.\n</body>\n</html>`,
                // 10. <body> tag missing
                `<!DOCTYPE html>\n<html>\n<head>\n    <title>Demo</title>\n</head>\n    <h1>Demo Header</h1>\n    <p>Demo paragraph.</p>\n</html>`,
                // 11. <ul> list missing <li>
                `<!DOCTYPE html>\n<html>\n<head>\n    <title>List Example</title>\n</head>\n<body>\n    <ul>\n    </ul>\n</body>\n</html>`,
                // 12. <img> tag missing src
                `<!DOCTYPE html>\n<html>\n<head>\n    <title>Image Example</title>\n</head>\n<body>\n    <img alt="Sample Image">\n</body>\n</html>`,
                // 13. <a> tag missing href
                `<!DOCTYPE html>\n<html>\n<head>\n    <title>Link Example</title>\n</head>\n<body>\n    <a>Click here</a>\n</body>\n</html>`,
                // 14. <form> missing action
                `<!DOCTYPE html>\n<html>\n<head>\n    <title>Form Example</title>\n</head>\n<body>\n    <form>\n      <input type="text" name="name">\n      <input type="submit">\n    </form>\n</body>\n</html>`,
                // 15. <input> missing type
                `<!DOCTYPE html>\n<html>\n<head>\n    <title>Input Example</title>\n</head>\n<body>\n    <input name="username">\n</body>\n</html>`,


            ],
            moderate: [
                // 1
                `<!DOCTYPE html>\n<html>\n<head>\n    <title>Game Modes</title>\n</head>\n<body>\n    <div>\n        <h2>Game Modes</h2>\n        <ul>\n            <li>Normal Mode</li>\n            <li>Moderate Mode</li>\n            <li>Hard Mode</li>\n        </ul>\n    </div>\n</body>\n</html>`,
                // 2
                `<!DOCTYPE html>\n<html>\n<head>\n    <title>Content Block</title>\n</head>\n<body>\n    <div class="content">\n        <p>This is a sample content block.</p>\n    </div>\n</body>\n</html>`,
                // 3
                `<!DOCTYPE html>\n<html>\n<head>\n    <title>Header</title>\n</head>\n<body>\n    <div class="header">\n        <h1>Header</h1>\n        <nav>\n        </nav>\n    </div>\n</body>\n</html>`,
                // 4
                `<!DOCTYPE html>\n<html>\n<head>\n    <title>Section</title>\n</head>\n<body>\n    <section>\n        <p>Section content goes here.</p>\n    </section>\n</body>\n</html>`,
                // 5
                `<!DOCTYPE html>\n<html>\n<head>\n    <title>Footer</title>\n</head>\n<body>\n    <footer>\n    </footer>\n</body>\n</html>`,
                // 6
                `<!DOCTYPE html>\n<html>\n<head>\n    <title>Table Example</title>\n</head>\n<body>\n    <table>\n      <tr>\n        <th>Name</th>\n        <th>Age</th>\n      </tr>\n      <tr>\n        <td>John</td>\n        <td>25</td>\n      </tr>\n    </table>\n</body>\n</html>`,
                // 7
                `<!DOCTYPE html>\n<html>\n<head>\n    <title>List Example</title>\n</head>\n<body>\n    <li>Item 1</li>\n    <li>Item 2</li>\n</body>\n</html>`,
                // 8
                `<!DOCTYPE html>\n<html>\n<head>\n    <title>Image Example</title>\n</head>\n<body>\n    <img src="cat.jpg">\n</body>\n</html>`,
                // 9
                `<!DOCTYPE html>\n<html>\n<head>\n    <title>Form Example</title>\n</head>\n<body>\n    <form>\n      <input type="text" name="username">\n      <input type="submit">\n    </form>\n</body>\n</html>`,
                // 10
                `<!DOCTYPE html>\n<html>\n<head>\n    <title>Button Example</title>\n</head>\n<body>\n    <button>Click me</button>\n</body>\n</html>`,
                // 11
                `<!DOCTYPE html>\n<html>\n<head>\n    <title>Table Example</title>\n</head>\n<body>\n    <table>\n      <tr><td>Apple</td><td>10</td></tr>\n      <tr><td>Banana</td><td>5</td></tr>\n</body>\n</html>`,
                // 12
                `<!DOCTYPE html>\n<html>\n<head>\n    <title>Input Example</title>\n</head>\n<body>\n    <input type="text" name="email">\n</body>\n</html>`,
                // 13
                `<!DOCTYPE html>\n<html>\n<head>\n    <title>Link Example</title>\n</head>\n<body>\n    <a href="https://google.com">Google\n</body>\n</html>`,
                // 14
                `<!DOCTYPE html>\n<html>\n<head>\n    <title>Logo Example</title>\n</head>\n<body>\n    <img alt="Logo">\n</body>\n</html>`,
                // 15
                `<!DOCTYPE html>\n<html>\n<head>\n    <title>Form Example</title>\n</head>\n<body>\n    <form>\n      <input type="text" name="user">\n    </form>\n</body>\n</html>`
            ],
            hardcore: [
                // 1
                `<!DOCTYPE html>\n<html>\n<head>\n    <title>Form Hardcore</title>\n</head>\n<body>\n    <form action="submit.php">\n        <label>Username</label>\n        <input type="text" id="username">\n        <input type="submit" value="Submit">\n    </form>\n</body>\n</html>`,
                // 2
                `<!DOCTYPE html>\n<html>\n<head>\n    <title>Email Hardcore</title>\n</head>\n<body>\n    <form>\n        <label for="email">Email:</label>\n        <input id="email" name="email">\n    </form>\n    <button>Submit</button>\n</body>\n</html>`,
                // 3
                `<!DOCTYPE html>\n<html>\n<head>\n    <title>Article Hardcore</title>\n</head>\n<body>\n    <article>\n        <p class="main" open>Article content goes here.\n    </article>\n</body>\n</html>`,
                // 4
                `<!DOCTYPE html>\n<html>\n<head>\n    <title>Aside Hardcore</title>\n</head>\n<body>\n    <aside>\n        <h3>Sidebar</h3>\n        <p>Sidebar content goes here.\n    </aside>\n</body>\n</html>`,
                // 5
                `<!DOCTYPE html>\n<html>\n<head>\n    <title>Header Hardcore</title>\n</head>\n<body>\n    <header>\n        <h1 Header Title\n        <pHeader description.</header>\n</body>\n</html>`,
                // 6
                `<!DOCTYPE html>\n<html>\n<head>\n    <title>Table Hardcore</title>\n</head>\n<body>\n    <table>\n      <thead>\n        <tr><thh>Name</thh><thh>Score</thh></tr>\n      </thead>\n      <tr><td>Alice<td>90</tr>\n    </table>\n</body>\n</html>`,
                // 7
                `<!DOCTYPE html>\n<html>\n<head>\n    <title>List Hardcore</title>\n</head>\n<body>\n    <ul>\n      <li class="item">Apple\n      <li>Banana\n</body>\n</html>`,
                // 8
                `<!DOCTYPE html>\n<html>\n<head>\n    <title>Input Hardcore</title>\n</head>\n<body>\n    <form>\n      <label>Email</label>\n      <input>\n      <input type="submit">\n    </form>\n</body>\n</html>`,
                // 9
                `<!DOCTYPE html>\n<html>\n<head>\n    <title>Image Hardcore</title>\n</head>\n<body>\n    <img srcc="dog.jpg" altDog"\n</body>\n</html>`,
                // 10
                `<!DOCTYPE html>\n<html>\n<head>\n    <title>Anchor Hardcore</title>\n</head>\n<body>\n    <a target="_blank"></a>\n</body>\n</html>`,
                // 11
                `<!DOCTYPE html>\n<html>\n<head>\n    <title>Form Hardcore</title>\n</head>\n<body>\n    <form>\n      <input type="text" name="username">\n    </form>\n</body>\n</html>`,
                // 12
                `<!DOCTYPE html>\n<html>\n<head>\n    <title>Table Hardcore</title>\n</head>\n<body>\n    <table>\n      <tr><tds>Item<td>Price</tr>\n      <tr><td>Pen<td>5</tr>\n    </table>\n</body>\n</html>`,
                // 13
                `<!DOCTYPE html>\n<html>\n<head>\n    <title>Checkbox Hardcore</title>\n</head>\n<body>\n    <form>\n      <input type="checkbox" cheked>\n    </form>\n</body>\n</html>`,
                // 14
                `<!DOCTYPE html>\n<html>\n<head>\n    <title>Logo Hardcore</title>\n</head>\n<body>\n    <img width="100">\n</body>\n</html>`,
                // 15
                `<!DOCTYPE html>\n<html>\n<head>\n    <title>Button Hardcore</title>\n</head>\n<body>\n    <button>\n</body>\n</html>`
            ]
        },
        css: {
            easy: [
                `body {\n    background-color: yellow;\n}`,
                `h1 {\n    color: blue;\n}`,
                `p {\n    color: green;\n}`,
                `div {\n    background: black;\n}`,
                `button {\n    background-color: red;\n}`,
                `.container {\n    width: 100px;\n}`,
                `#main {\n    color: purple;\n}`,
                `ul {\n    list-style: none;\n}`,
                `li {\n    color: orange;\n}`,
                `.box {\n    border: 1px solid #000;\n}`,
                `#header {\n    background-color: #eee;\n}`,
                `a {\n    color: red;\n}`,
                `.footer {\n    text-align: center;\n}`,
                `input {\n    border-radius: 5px;\n}`,
                `.title {\n    font-size: 24px;\n}`
            ],
            moderate: [
                `.header {\n    background-color: #333;\n    color: white;\n}`,
                `.footer {\n    background-color: #222;\n    color: #ccc;\n}`,
                `.nav {\n    display: flex;\n    justify-content: space-around;\n}`,
                `.card {\n    border: 1px solid #ccc;\n    border-radius: 10px;\n}`,
                `.grid {\n    display: grid;\n    gap: 20px;\n}`,
                `#main {\n    padding: 20px;\n    background-color: #fafafa;\n}`,
                `.sidebar {\n    width: 200px;\n    background: #f0f0f0;\n}`,
                `button {\n    color: white;\n    border-radius: 5px;\n}`,
                `.alert {\n    color: white;\n    background: red;\n}`,
                `#profile {\n    border: 2px solid #333;\n    padding: 10px;\n}`,
                `.menu {\n    display: flex;\n    gap: 10px;\n}`,
                `.avatar {\n    width: 50px;\n    height: 50px;\n}`,
                `input[type="text"] {\n    border: 1px solid #ccc;\n    padding: 5px;\n}`,
                `.highlight {\n    background: yellow;\n    color: black;\n}`,
                `#logo {\n    width: 100px;\n    height: 100px;\n}`
            ],
            hardcore: [
                `#container {\n    display: flex;\n    align-items: center;\n    height: 100vh;\n}`,
                `.modal {\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    background-color: white;\n    padding: 20px;\n}`,
                `.tooltip {\n    position: relative;\n    display: inline-block;\n}`,
                `.tooltip .tooltip-text {\n    width: 120px;\n    background-color: black;\n    color: #fff;\n    text-align: center;\n    padding: 5px;\n    border-radius: 5px;\n    position: absolute;\n}`,
                `.tooltip:hover .tooltip-text {\n    color: red;\n}`,
                `#main-content {\n    margin: 0 auto;\n    width: 80%;\n}`,
                `.dropdown {\n    background: #fff;\n    border: 1px solid #ccc;\n}`,
                `.dropdown-content {\n    display: none;\n    position: absolute;\n    background: #f9f9f9;\n    min-width: 160px;\n}`,
                `.dropdown:hover .dropdown-content {\n    display: block;\n}`,
                `.overlay {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n}`,
                `#sidebar {\n    position: absolute;\n    left: 0;\n    width: 250px;\n    background: #222;\n}`,
                `.progress-bar {\n    width: 0;\n    height: 20px;\n    background: green;\n}`,
                `.progress-bar.active {\n    width: 100%;\n}`,
                `.tab {\n    display: inline-block;\n    padding: 10px;\n    border: 1px solid #ccc;\n}`,
                `.tab.active {\n    background: #333;\n    color: #fff;\n}`
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
                'public class Main {\n   public static void main(String[] args) {\n      boolean light = true;\n      if (light == true) {\n            System.out.println("The light is on");\n      } else if (light = false) {\n            System.out.println("The light is off");\n      }\n   }\n}',
                'public class Main {\n   public static void main(String[] args) {\n      int age = 18;\n      System.out.println("Sasha just turned 18");\n      if (age = 18) {\n            System.out.println("Sasha is legal");\n      } else {\n            System.out.println("Sasha is not legal age");\n      }\n   }\n}',
                'public class Main {\n   public static void main(String[] args) {\n      int toyo = 10;\n      int suka = 10;\n      int sibuyas = 10;\n      int bawang = 10;\n      int laurel = 5;\n      int total = toyo + suka + sibuyas + bawang + laurel;\n      System.out.println("Total: " + total);\n   }\n}',
                'public class Main {\n   public static void main(String[] args) {\n      char ave = "A";\n      System.out.print("Marry got an " + ave + " on the exam");\n   }\n}',
                `public class Addition {\n   public static void main(String[] args) {\n      int x = 16;\n      int y = 32;\n      int total = x + y;\n      System.out.print(total);\n   }\n}`,
                `public class Subtruction {\n   public static void main(String[] args) {\n      int x = 50;\n      int y = 30;\n      int total = x - y;\n      System.out.print(total);\n   }\n}`,
                `public class Multiplication {\n   public static void main(String[] args) {\n      int x = 13;\n      int y = 19;\n      int total = x * y;\n      System.out.print(total);\n   }\n}`,
                `public class Division {\n   public static void main(String[] args) {\n      int x = 150;\n      int y = 150;\n      int total = x / y;\n      System.out.print(total);\n   }\n}`,
                `import java.util.Scanner;\npublic class Main {\n   public static void main(String[] args) {\n      Scanner scanner = new Scanner(System.in);\n      System.out.print("Enter your name ");\n      String name = scanner.nextLine();\n      System.out.println("Your name is " + name);\n   }\n}`,

            ],
            moderate: [
                `public class Loop {\n   public static void main(String[] args) {\n      for(int i = 0; i < 5; i++) {\n         System.out.println(i);\n      }\n   }\n}`,
                `public class Loop {\n   public static void main(String[] args) {\n      int i = 0;\n      do {\n         System.out.println(i)\n         i++;\n      }\n      while (i < 5);\n   }\n}`,
                `public class Days {\n   public static void main(String[] args) {\n      int day = 4;\n      switch (day) {\n         case 1:\n            System.out.println("Sunday");\n            break;\n         case 2:\n            System.out.println("Monday");\n            break;\n         case 3:\n            System.out.println("Tuesday");\n            break;\n         case 4:\n            System.out.println("Wednesday");\n            break;\n         case 5:\n            System.out.println("Thursday");\n            break;\n         case 6:\n            System.out.println("Friday");\n            break;\n         case 7:\n            System.out.println("Saturday");\n            break;\n         default;\n      }\n   }\n}`,
                `public class Days {\n   public static void main(String[] args) {\n      int day = 1;\n      switch (day) {\n         case 1:\n            System.out.println("Sunday");\n            break;\n         case 2:\n            System.out.println("Monday");\n            break;\n         case 3:\n            System.out.println("Tuesday");\n            break;\n         case 4:\n            System.out.println("Wednesday");\n            break;\n         case 5:\n            System.out.println("Thursday");\n            break;\n         case 6:\n            System.out.println("Friday");\n            break;\n         case 7:\n            System.out.println("Saturday");\n            break;\n         default:\n      }\n   }\n}`,
                `public class Response {\n   public static void main(String[] args) {\n      int response = 1;\n      switch (response) {\n         case 1:\n            System.out.println("Yes");\n            break;\n         case 2:\n            System.out.println("No");\n            break;\n         default:\n      }\n   }\n}`,
                `public class Main {\n   public static void main(String[] args) {\n      try {\n         int[] numbers = {1,3,5};\n         System.out.println(numbers[2]);\n      } catch (Exception e) {\n         System.out.println("Something went wrong");\n      }\n   }\n}`,
                `public class Main {\n   public static void main(String[] args) {\n      int number = 5;\n      float decimal = 4.99f;\n      boolean bool = true;\n      System.out.println("Number: " + number);\n      System.out.println("Decimals: " + decimal);\n      System.out.println("Boolean: " + bool);\n   }\n}`,
                `public class Loop {\n   public static void main(String[] args) {\n      int i = 0;\n      while (i < 5) {\n         System.out.println(i);\n         i++;\n      }\n   }\n}`,
                `public class Main {\n   public static void main(String[] args) {\n      String[] names = {"Jhon", "Christoper", "Micheal");\n      System.out.println(names[0]);\n   }\n}`,
                `public class Main {\n   int x;\n   public Main() {\n      x = 5;\n   }\n   public static void main(String[] args) {\n      Main obj = new Main();\n      System.out.println(obj.x);\n   }\n}`,
                `class Animal {\n   public void animalSound() {\n      System.out.println("The animal makes a sound");\n   }\n}\n\nClass Pig extends Animal {\n   public void animalSound() {\n      System.out.println("The pig says: wee wee");\n   }\n}\n\npublic class Main {\n   public static void main(String[] args) {\n      Animal myAnimal = new Pig();\n      myAnimal.animalSound();\n   }\n}`,

            ],
            hardcore: [
                // 1. Reverse string (correct)
                `public class Main {\n   public static void main(String[] args) {\n      String originalStr = "Hello";\n      String reversedStr = "";\n      System.out.println("Original string: " + originalStr);\n      for (int i = 0; i < originalStr.length(); i++) {\n         reversedStr = originalStr.charAt(i) + reversedStr;\n      }\n      System.out.println("Reversed string: " + reversedStr);\n   }\n}`,
                // 2. Find lowest age (correct)
                `public class Main {\n   public static void main(String[] args) {\n      int ages[] = {20, 22, 18, 35, 48, 26, 87, 70};\n      int lowestAge = ages[0];\n      for (int age : ages) {\n         if (lowestAge > age) {\n            lowestAge = age;\n         }\n      }\n      System.out.println("The lowest age in the array is: " + lowestAge);\n   }\n}`,
                // 3. Average age (correct)
                `public class Main {\n   public static void main(String[] args) {\n      int ages[] = {20, 22, 18, 35, 48, 26, 87, 70};\n      float avg, sum = 0;\n      int length = ages.length;\n      for (int age : ages) {\n         sum += age;\n      }\n      avg = sum / length;\n      System.out.println("The average age is: " + avg);\n   }\n}`,
                // 4. Array sum (correct)
                `public class Main {\n   public static void main(String[] args) {\n      int[] myArray = {1, 5, 10, 25};\n      int sum = 0;\n      for (int i = 0; i < myArray.length; i++) {\n         sum += myArray[i];\n      }\n      System.out.println("The sum is: " + sum);\n   }\n}`,
                // 5. ArrayList print (correct, with import)
                `import java.util.ArrayList;\npublic class Main {\n   public static void main(String[] args) {\n      ArrayList<String> cars = new ArrayList<String>();\n      cars.add("Volvo");\n      cars.add("BMW");\n      cars.add("Ford");\n      cars.add("Mazda");\n      for (String i : cars) {\n         System.out.println(i);\n      }\n   }\n}`,
                // 6. Sort names (correct, with import)
                `import java.util.Arrays;\npublic class Main {\n   public static void main(String[] args) {\n      String[] names = {"Lee", "Riven", "Jhon", "Christoper", "Deezna", "Sakamoto", "Aimie"};\n      Arrays.sort(names);\n      for (String i : names) {\n         System.out.println(i);\n      }\n   }\n}`,
                // 7. Find max value (correct)
                `public class Main {\n   public static void main(String[] args) {\n      int[] nums = {3, 7, 2, 9, 4};\n      int max = nums[0];\n      for (int n : nums) {\n         if (n > max) {\n            max = n;\n         }\n      }\n      System.out.println("Max value: " + max);\n   }\n}`,
                // 8. Count even numbers (correct)
                `public class Main {\n   public static void main(String[] args) {\n      int[] nums = {2, 3, 4, 5, 6};\n      int count = 0;\n      for (int n : nums) {\n         if (n % 2 == 0) {\n            count++;\n         }\n      }\n      System.out.println("Even count: " + count);\n   }\n}`,
                // 9. Print 2D array (correct)
                `public class Main {\n   public static void main(String[] args) {\n      int[][] arr = {{1,2},{3,4}};\n      for (int i = 0; i < arr.length; i++) {\n         for (int j = 0; j < arr[i].length; j++) {\n            System.out.print(arr[i][j] + " ");\n         }\n         System.out.println();\n      }\n   }\n}`,
                // 10. String concatenation (correct)
                `public class Main {\n   public static void main(String[] args) {\n      String a = "Java";\n      String b = "Hardcore";\n      String c = a + b;\n      System.out.println(c);\n   }\n}`,
                // 11. Factorial (correct)
                `public class Main {\n   public static void main(String[] args) {\n      int n = 5;\n      int fact = 1;\n      for (int i = 1; i <= n; i++) {\n         fact = fact * i;\n      }\n      System.out.println("Factorial: " + fact);\n   }\n}`,
                // 12. Fibonacci (correct)
                `public class Main {\n   public static void main(String[] args) {\n      int n1 = 0, n2 = 1, n3, i, count = 5;\n      System.out.print(n1 + " " + n2);\n      for (i = 2; i < count; ++i) {\n         n3 = n1 + n2;\n         System.out.print(" " + n3);\n         n1 = n2;\n         n2 = n3;\n      }\n   }\n}`,
                // 13. Palindrome check (correct)
                `public class Main {\n   public static void main(String[] args) {\n      String str = "madam";\n      String rev = "";\n      for (int i = str.length() - 1; i >= 0; i--) {\n         rev += str.charAt(i);\n      }\n      if (str.equals(rev)) {\n         System.out.println("Palindrome");\n      } else {\n         System.out.println("Not Palindrome");\n      }\n   }\n}`,
                // 14. Sum of digits (correct)
                `public class Main {\n   public static void main(String[] args) {\n      int num = 1234;\n      int sum = 0;\n      while (num > 0) {\n         sum += num % 10;\n         num = num / 10;\n      }\n      System.out.println("Sum: " + sum);\n   }\n}`,
                // 15. Array copy (correct)
                `public class Main {\n   public static void main(String[] args) {\n      int[] a = {1,2,3};\n      int[] b = a.clone();\n      b[0] = 99;\n      System.out.println(a[0]);\n   }\n}`,
            ]
        },
        html: {
            easy: [
                // 1
                `<!DOCTYPE html>\n<html>\n<head>\n    <title>Welcome Page</title>\n</head>\n<body>\n    <h1>Welcome to Corrupted Prompt</h1>\n    <p>Enjoy the game!</p>\n</body>\n</html>`,
                // 2
                `<!DOCTYPE html>\n<html>\n<head>\n    <title>Welcome Page</title>\n</head>\n<body>\n    <h1>Welcome to Corrupted Prompt</h1>\n    <p>Enjoy the game!</p>\n    <p>HELLO!</p>\n</body>\n</html>`,
                // 3
                `<!DOCTYPE html>\n<html>\n<head>\n    <title>Home</title>\n</head>\n<body>\n    <h1>Pindutin para pumogi</h1>\n    <button>Pogi</button>\n</body>\n</html>`,
                // 4
                `<!DOCTYPE html>\n<html>\n<head>\n    <title>Home</title>\n</head>\n<body>\n    <a href="https://example.com">Example Page</a>\n</body>\n</html>`,
                // 5
                `<!DOCTYPE html>\n<html>\n<head>\n    <title>Home</title>\n</head>\n<body>\n    <table>\n      <tr>\n        <th>Name</th>\n        <th>Age</th>\n        <th>Birthday</th>\n      </tr>\n    </table>\n</body>\n</html>`,
                // 6
                `<!DOCTYPE html>\n<html>\n<head>\n    <title>Home</title>\n</head>\n<body>\n    <ol>\n      <li>Coffee</li>\n      <li>Milk</li>\n      <li>Milo</li>\n      <li>Alaksan FR</li>\n    </ol>\n</body>\n</html>`,
                // 7
                `<!DOCTYPE html>\n<html>\n<head>\n    <title>Sample</title>\n</head>\n<body>\n    <h1>Sample Header</h1>\n    <p>Sample paragraph.</p>\n</body>\n</html>`,
                // 8
                `<!DOCTYPE html>\n<html>\n<head>\n    <title>Test Page</title>\n</head>\n<body>\n    <h1>Test Header</h1>\n    <p>Test paragraph.</p>\n</body>\n</html>`,
                // 9
                `<!DOCTYPE html>\n<html>\n<head>\n    <title>Example</title>\n</head>\n<body>\n    <h1>Example Header</h1>\n    <p>Example paragraph.</p>\n</body>\n</html>`,
                // 10
                `<!DOCTYPE html>\n<html>\n<head>\n    <title>Demo</title>\n</head>\n<body>\n    <h1>Demo Header</h1>\n    <p>Demo paragraph.</p>\n</body>\n</html>`,
                // 11
                `<!DOCTYPE html>\n<html>\n<head>\n    <title>List Example</title>\n</head>\n<body>\n    <ul>\n      <li>Item 1</li>\n      <li>Item 2</li>\n    </ul>\n</body>\n</html>`,
                // 12
                `<!DOCTYPE html>\n<html>\n<head>\n    <title>Image Example</title>\n</head>\n<body>\n    <img src="sample.jpg" alt="Sample Image">\n</body>\n</html>`,
                // 13
                `<!DOCTYPE html>\n<html>\n<head>\n    <title>Link Example</title>\n</head>\n<body>\n    <a href="https://example.com">Click here</a>\n</body>\n</html>`,
                // 14
                `<!DOCTYPE html>\n<html>\n<head>\n    <title>Form Example</title>\n</head>\n<body>\n    <form action="/submit">\n      <input type="text" name="name">\n      <input type="submit">\n    </form>\n</body>\n</html>`,
                // 15
                `<!DOCTYPE html>\n<html>\n<head>\n    <title>Input Example</title>\n</head>\n<body>\n    <input type="text" name="username">\n</body>\n</html>`,
            ],
            moderate: [
                `<!DOCTYPE html>\n<html>\n<head>\n    <title>Game Modes</title>\n</head>\n<body>\n    <div class="container">\n        <h2>Game Modes</h2>\n        <ul>\n            <li>Normal Mode</li>\n            <li>Moderate Mode</li>\n            <li>Hard Mode</li>\n        </ul>\n    </div>\n</body>\n</html>`,
                `<!DOCTYPE html>\n<html>\n<head>\n    <title>Content Block</title>\n</head>\n<body>\n    <div class="content">\n        <h1>Welcome</h1>\n        <p>This is a sample content block.</p>\n    </div>\n</body>\n</html>`,
                `<!DOCTYPE html>\n<html>\n<head>\n    <title>Header</title>\n</head>\n<body>\n    <div class="header">\n        <h1>Header</h1>\n        <nav>\n            <ul>\n                <li>Home</li>\n                <li>About</li>\n                <li>Contact</li>\n            </ul>\n        </nav>\n    </div>\n</body>\n</html>`,
                `<!DOCTYPE html>\n<html>\n<head>\n    <title>Section</title>\n</head>\n<body>\n    <section>\n        <h2>Section Title</h2>\n        <p>Section content goes here.</p>\n    </section>\n</body>\n</html>`,
                `<!DOCTYPE html>\n<html>\n<head>\n    <title>Footer</title>\n</head>\n<body>\n    <footer>\n        <p>Footer content</p>\n    </footer>\n</body>\n</html>`,
                `<!DOCTYPE html>\n<html>\n<head>\n    <title>Table Example</title>\n</head>\n<body>\n    <table>\n      <thead>\n        <tr>\n          <th>Name</th>\n          <th>Age</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>John</td>\n          <td>25</td>\n        </tr>\n      </tbody>\n    </table>\n</body>\n</html>`,
                `<!DOCTYPE html>\n<html>\n<head>\n    <title>List Example</title>\n</head>\n<body>\n    <ul>\n      <li>Item 1</li>\n      <li>Item 2</li>\n    </ul>\n</body>\n</html>`,
                `<!DOCTYPE html>\n<html>\n<head>\n    <title>Image Example</title>\n</head>\n<body>\n    <img src="cat.jpg" alt="Cat">\n</body>\n</html>`,
                `<!DOCTYPE html>\n<html>\n<head>\n    <title>Form Example</title>\n</head>\n<body>\n    <form>\n      <label for="username">Username:</label>\n      <input type="text" name="username" id="username">\n      <input type="submit">\n    </form>\n</body>\n</html>`,
                `<!DOCTYPE html>\n<html>\n<head>\n    <title>Button Example</title>\n</head>\n<body>\n    <button type="button">Click me</button>\n</body>\n</html>`,
                `<!DOCTYPE html>\n<html>\n<head>\n    <title>Table Example</title>\n</head>\n<body>\n    <table>\n      <tr><td>Apple</td><td>10</td></tr>\n      <tr><td>Banana</td><td>5</td></tr>\n    </table>\n</body>\n</html>`,
                `<!DOCTYPE html>\n<html>\n<head>\n    <title>Input Example</title>\n</head>\n<body>\n    <input type="text" name="email" placeholder="Enter your email">\n</body>\n</html>`,
                `<!DOCTYPE html>\n<html>\n<head>\n    <title>Link Example</title>\n</head>\n<body>\n    <a href="https://google.com">Google</a>\n</body>\n</html>`,
                `<!DOCTYPE html>\n<html>\n<head>\n    <title>Logo Example</title>\n</head>\n<body>\n    <img src="logo.png" alt="Logo">\n</body>\n</html>`,
                `<!DOCTYPE html>\n<html>\n<head>\n    <title>Form Example</title>\n</head>\n<body>\n    <form>\n      <input type="text" name="user">\n      <input type="submit" value="Submit">\n    </form>\n</body>\n</html>`
            ],
            hardcore: [
                `<!DOCTYPE html>\n<html>\n<head>\n    <title>Form Hardcore</title>\n</head>\n<body>\n    <form action="submit.php" method="post">\n        <label for="username">Username</label>\n        <input type="text" id="username" name="username" required>\n        <input type="submit" value="Submit">\n    </form>\n</body>\n</html>`,
                `<!DOCTYPE html>\n<html>\n<head>\n    <title>Email Hardcore</title>\n</head>\n<body>\n    <form>\n        <label for="email">Email:</label>\n        <input type="email" id="email" name="email" required>\n        <button type="submit">Submit</button>\n    </form>\n</body>\n</html>`,
                `<!DOCTYPE html>\n<html>\n<head>\n    <title>Article Hardcore</title>\n</head>\n<body>\n    <article>\n        <h1>Article Title</h1>\n        <p class="main">Article content goes here.</p>\n    </article>\n</body>\n</html>`,
                `<!DOCTYPE html>\n<html>\n<head>\n    <title>Aside Hardcore</title>\n</head>\n<body>\n    <aside>\n        <h2>Sidebar</h2>\n        <p>Sidebar content goes here.</p>\n    </aside>\n</body>\n</html>`,
                `<!DOCTYPE html>\n<html>\n<head>\n    <title>Header Hardcore</title>\n</head>\n<body>\n    <header>\n        <h1>Header Title</h1>\n        <p>Header description.</p>\n    </header>\n</body>\n</html>`,
                `<!DOCTYPE html>\n<html>\n<head>\n    <title>Table Hardcore</title>\n</head>\n<body>\n    <table>\n      <thead>\n        <tr><th>Name</th><th>Score</th></tr>\n      </thead>\n      <tbody>\n        <tr><td>Alice</td><td>90</td></tr>\n      </tbody>\n    </table>\n</body>\n</html>`,
                `<!DOCTYPE html>\n<html>\n<head>\n    <title>List Hardcore</title>\n</head>\n<body>\n    <ul>\n      <li class="item">Apple</li>\n      <li>Banana</li>\n    </ul>\n</body>\n</html>`,
                `<!DOCTYPE html>\n<html>\n<head>\n    <title>Input Hardcore</title>\n</head>\n<body>\n    <form>\n      <label for="email">Email</label>\n      <input type="email" id="email" name="email">\n      <input type="submit">\n    </form>\n</body>\n</html>`,
                `<!DOCTYPE html>\n<html>\n<head>\n    <title>Image Hardcore</title>\n</head>\n<body>\n    <img src="dog.jpg" alt="Dog">\n</body>\n</html>`,
                `<!DOCTYPE html>\n<html>\n<head>\n    <title>Anchor Hardcore</title>\n</head>\n<body>\n    <a href="https://example.com" target="_blank">Visit Example</a>\n</body>\n</html>`,
                `<!DOCTYPE html>\n<html>\n<head>\n    <title>Form Hardcore</title>\n</head>\n<body>\n    <form action="/submit" method="post">\n      <input type="text" name="username">\n      <input type="submit">\n    </form>\n</body>\n</html>`,
                `<!DOCTYPE html>\n<html>\n<head>\n    <title>Table Hardcore</title>\n</head>\n<body>\n    <table>\n      <tr><th>Item</th><th>Price</th></tr>\n      <tr><td>Pen</td><td>5</td></tr>\n    </table>\n</body>\n</html>`,
                `<!DOCTYPE html>\n<html>\n<head>\n    <title>Checkbox Hardcore</title>\n</head>\n<body>\n    <form>\n      <input type="checkbox" cheked>\n    </form>\n</body>\n</html>`,
                `<!DOCTYPE html>\n<html>\n<head>\n    <title>Logo Hardcore</title>\n</head>\n<body>\n    <img src="logo.png" alt="Logo" width="100">\n</body>\n</html>`,
                `<!DOCTYPE html>\n<html>\n<head>\n    <title>Button Hardcore</title>\n</head>\n<body>\n    <button type="button">Submit</button>\n</body>\n</html>`
            ]
        },
        css: {
            easy: [
                `body {\n    background-color: yellow;\n}`,
                `h1 {\n    color: blue;\n}`,
                `p {\n    color: green;\n}`,
                `div {\n    background: black;\n}`,
                `button {\n    background-color: red;\n}`,
                `.container {\n    width: 100px;\n}`,
                `#main {\n    color: purple;\n}`,
                `ul {\n    list-style: none;\n}`,
                `li {\n    color: orange;\n}`,
                `.box {\n    border: 1px solid #000;\n}`,
                `#header {\n    background-color: #eee;\n}`,
                `a {\n    color: red;\n}`,
                `.footer {\n    text-align: center;\n}`,
                `input {\n    border-radius: 5px;\n}`,
                `.title {\n    font-size: 24px;\n}`
            ],
            moderate: [
                `.header {\n    background-color: #333;\n    color: white;\n}`,
                `.footer {\n    background-color: #222;\n    color: #ccc;\n}`,
                `.nav {\n    display: flex;\n    justify-content: space-around;\n}`,
                `.card {\n    border: 1px solid #ccc;\n    border-radius: 10px;\n}`,
                `.grid {\n    display: grid;\n    gap: 20px;\n}`,
                `#main {\n    padding: 20px;\n    background-color: #fafafa;\n}`,
                `.sidebar {\n    width: 200px;\n    background: #f0f0f0;\n}`,
                `button {\n    color: white;\n    border-radius: 5px;\n}`,
                `.alert {\n    color: white;\n    background: red;\n}`,
                `#profile {\n    border: 2px solid #333;\n    padding: 10px;\n}`,
                 `.alert {\n    color: white;\n    background: red;\n    padding: 10px;\n    border-radius: 5px;\n}`,
                `#profile {\n    border: 2px solid #333;\n    padding: 10px;\n    border-radius: 8px;\n}`,
                `.menu {\n    display: flex;\n    gap: 10px;\n    background: #eee;\n    padding: 10px;\n}`,
                `.avatar {\n    width: 50px;\n    height: 50px;\n    border-radius: 50%;\n}`,
                `input[type="text"] {\n    border: 1px solid #ccc;\n    padding: 5px;\n    width: 200px;\n}`,
                `.highlight {\n    background: yellow;\n    color: black;\n    font-weight: bold;\n}`,
                `#logo {\n    width: 100px;\n    height: 100px;\n    display: block;\n    margin: 0 auto;\n}`
            ],
            hardcore: [
                `#container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100vh;\n    background: #f5f5f5;\n}`,
                `.modal {\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    background-color: white;\n    padding: 20px;\n    box-shadow: 0 0 10px rgba(0,0,0,0.5);\n    z-index: 1000;\n}`,
                `.tooltip {\n    position: relative;\n    display: inline-block;\n    cursor: pointer;\n}`,
                `.tooltip .tooltip-text {\n    visibility: hidden;\n    width: 120px;\n    background-color: black;\n    color: #fff;\n    text-align: center;\n    padding: 5px;\n    border-radius: 5px;\n    position: absolute;\n    z-index: 1;\n    bottom: 125%;\n    left: 50%;\n    transform: translateX(-50%);\n}`,
                `.tooltip:hover .tooltip-text {\n    visibility: visible;\n}`,
                `#main-content {\n    margin: 0 auto;\n    width: 80%;\n    max-width: 1200px;\n    background: #fff;\n    box-shadow: 0 2px 8px rgba(0,0,0,0.1);\n    padding: 40px;\n}`,
                `.dropdown {\n    background: #fff;\n    border: 1px solid #ccc;\n    position: relative;\n    width: 200px;\n}`,
                `.dropdown-content {\n    display: none;\n    position: absolute;\n    background: #f9f9f9;\n    min-width: 160px;\n    box-shadow: 0 8px 16px rgba(0,0,0,0.2);\n    z-index: 1;\n}`,
                `.dropdown:hover .dropdown-content {\n    display: block;\n}`,
                `.overlay {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n    background: rgba(0,0,0,0.5);\n    z-index: 999;\n}`,
                `#sidebar {\n    position: fixed;\n    left: 0;\n    top: 0;\n    width: 250px;\n    height: 100vh;\n    background: #222;\n    color: #fff;\n    padding: 20px;\n}`,
                `.progress-bar {\n    width: 0;\n    height: 20px;\n    background: linear-gradient(90deg, #4caf50, #8bc34a);\n    transition: width 0.5s;\n}`,
                `.progress-bar.active {\n    width: 100%;\n}`,
                `.tab {\n    display: inline-block;\n    padding: 10px;\n    border: 1px solid #ccc;\n    background: #f9f9f9;\n    cursor: pointer;\n}`,
                `.tab.active {\n    background: #333;\n    color: #fff;\n    border-bottom: none;\n}`
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
                "Marry got an A on the exam",
                "48",
                "20",
                "130",
                "1",
                "Enter your name //Sample Name\nYour name is //Sample Name"

            ],
            moderate: [
                // 1
                "0\n1\n2\n3\n4",
                // 2
                "0\n1\n2\n3\n4",
                // 3
                "Wednesday",
                // 4
                "Sunday",
                // 5
                "Yes",
                // 6
                "5",
                // 7
                "Number: 5\nDecimals: 4.99\nBoolean: true",
                // 8
                "0\n1\n2\n3\n4",
                // 9
                "Jhon",
                // 10
                "5",
                // 11
                "The animal makes a sound\nThe pig says: wee wee",

            ],
            hardcore: [
                // 1
                "Original string: Hello\nReversed string: olleH",
                // 2
                "The lowest age in the array is: 18",
                // 3
                "The average age is: 35.875",
                // 4
                "The sum is: 41",
                // 5
                "Volvo\nBMW\nFord\nMazda",
                // 6
                "Aimie\nChristoper\nDeezna\nJhon\nLee\nRiven\nSakamoto",
                // 7
                "Max value: 9",
                // 8
                "Even count: 3",
                // 9
                "1 2 \n3 4",
                // 10
                "JavaHardcore",
                // 11
                "Factorial: 120",
                // 12
                "0 1 1 2 3",
                // 13
                "Palindrome",
                // 14
                "Sum: 10",
                // 15
                "1",
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
                `The operation used to sum the total is wrong.`,
                `The operation used to minus the total is wrong.`,
                `The operation used to multiply the total is wrong.`,
                `The operation used to divide the total is wrong.`,
                `The Scanner is not called because of the incorrect data name. Do not copy the comments, it is only for direction.`,
            ],
            moderate: [
                "The for loop keyword is misspelled and the print method is incorrect. Use 'for' and 'System.out.println'.",
                "The loop condition is wrong. 'while (i > 5)' will not run as expected. Also, don't forget the semicolon after println.",
                "You can't assign null to an int. Also, check the switch statement and default case syntax.",
                "The value of 'day' is 0, but valid days start at 1. Set 'day' to a valid value to match a case.",
                "The value of 'response' is 0, but there is no case 0. Set it to 1 or 2 to match a case.",
                "You are trying to access numbers[3], but the array only has indices 0, 1, and 2. Use a valid index.",
                "The float and boolean values are not declared correctly.",
                "The statement keyword is wrong. Check the spelling correctly to make the code run.",
                "Array index out of bounds: 'names[3]' does not exist for a 3-element array. Use a valid index like 0, 1, or 2.",
                "The constructor and class name must match, and 'x = x;' does not assign a value. Also, 'Mains' should be 'Main'.",
                "Class and object keywords are case-sensitive. Use 'class' and 'new', not 'Class' and 'NEW'. Also, check for extra parentheses.",
            ],
            hardcore: [
                "The loop is going out of bounds. Remember: for a string, the last index is length - 1, not length.",
                "You should set the initial value of lowestAge to the first element of the array, not zero.",
                "You're dividing sum by length, but make sure both are the correct type and value. Double-check your division.",
                "The sum variable is not initialized. Always set sum = 0 before using it in a loop.",
                "You forgot to import ArrayList and use the correct syntax for creating and using it.",
                "You need to import Arrays and use Arrays.sort to sort the array before printing.",
                "If your array has only negative numbers, starting max at 0 will be wrong. Use the first element instead.",
                "You are counting odd numbers, not even. Even numbers have n % 2 == 0.",
                "The inner loop should use arr[i].length, not arr.length, to avoid index errors.",
                "You can't use - to join strings. Use the correct operator to concatenate strings.",
                "You are adding numbers for factorial, but you should multiply them (fact = fact * i).",
                "Check your Fibonacci logic: print the first two numbers, then add them to get the next.",
                "You are comparing strings with ==, which doesn't work in Java. Use .equals() instead.",
                "You are overwriting sum instead of adding each digit. Use sum += num % 10.",
                "Copying arrays by assignment makes them share memory. Use .clone() to make a real copy.",
            ]
        },
        html: {
            easy: [
                "No changes needed. This is a correct HTML structure.",
                "No changes needed. This is a correct HTML structure.",
                "The 'button' tag is empty. Add the text 'Pogi' inside the button.",
                "No changes needed. This is a correct HTML structure.",
                "The 'th' tag for 'Age' is written as 'th'Age'/age'. Change it to 'th'Age'/th'.",
                "No changes needed. This is a correct HTML sucture.",
                "The 'h1' tag is missing a closing '/h1'. Add '/h1' after 'Sample Header'.",
                "The 'head' section is missing a 'title' tag. Add a 'title' inside 'head'.",
                "The 'p' tag is not closed. Add '/p' after 'Example paragraph.'.",
                "The 'body' tag is missing. Add 'body' and '/body' tags around the content.",
                "The 'ul' list is empty. Add at least one 'li' item inside the 'ul'.",
                "The 'img' tag is missing the src attribute. Add src=\"sample.jpg\" to the 'img' tag.",
                "The 'a' tag is missing the href attribute. Add href=\"https://example.com\" to the 'a' tag.",
                "The 'form' tag is missing the action attribute. Add action=\"/submit\" to the 'form' tag.",
                "The 'input' tag is missing the type attribute. Add type=\"text\" to the 'input' tag.",
            ],
            moderate: [
                "The 'div' tag is missing the class attribute. Add class=\"container\" to the div.",
                "The content block is missing a 'h1' header. Add 'h1'Welcome'/h1' before the paragraph.",
                "The navigation bar is missing the list of links. Add a 'ul' with 'li' items inside 'nav'.",
                "The section is missing a title. Add 'h2'Section Title'/h2' before the paragraph.",
                "The footer is empty. Add a 'p' tag with some text inside the 'footer'.",
                "The table is missing a 'thead' and 'tbody'. Add them for better structure.",
                "The list items are not inside a 'ul'. Wrap them with 'ul'...'/ul'.",
                "The image is missing an alt attribute. Add alt=\"Cat\" to the 'img' tag.",
                "The form is missing a label for the input. Add a 'label' for the username input.",
                "The button is missing a type. Add type=\"button\" to the 'button' tag.",
                "The table is missing the closing '/table' tag. Add '/table' at the end.",
                "The input is missing a placeholder. Add placeholder=\"Enter your email\".",
                "The anchor tag is missing a closing '/a'. Add '/a' at the end.",
                "The image tag is missing the src attribute. Add src=\"logo.png\".",
                "The form is missing a submit button. Add 'input type=\"submit\" value=\"Submit\"' inside the form."
            ],
            hardcore: [
                "The form is missing the method, required attribute, and the label is not linked to the input. Add method, required, and use 'for' in the label.",
                "The email input is missing required and type, and the submit button is outside the form. Add type, required, and move the button inside the form.",
                "The article is missing a heading, the paragraph is not closed, and there is an extra attribute. Add 'h1', close 'p', and remove extra attributes.",
                "The aside is missing a proper heading, the paragraph is not closed, and the heading tag is wrong. Use 'h2' and close 'p'.",
                "The header is missing a closed 'h1', a 'p' tag, and has a typo in the tag. Fix the tags and close them properly.",
                "The table is missing 'tbody', 'th' is misspelled, and a row is not closed. Use correct tags and structure.",
                "The list is missing the closing '/ul', 'li' tags are not closed, and there is an extra attribute. Close all tags and fix attributes.",
                "The input is missing name and type, and the label is not linked. Add name, type, and use 'for' in the label.",
                "The image tag is missing closing ', alt, and src is misspelled. Use correct attributes and close the tag.",
                "The anchor tag is missing text, href, and has an extra attribute. Add href and text between the tags.",
                "The form is missing action, method, and a submit button. Add these attributes and elements.",
                "The table is missing 'th', 'tr' is not closed, and 'td' is misspelled. Use correct tags and close them.",
                "The checkbox is missing a label, id, and the checked attribute is misspelled. Add label, id, and use 'checked'.",
                "The image is missing alt, src, and has an extra attribute. Add src and alt attributes.",
                "The button is missing closing tag, type, and text. Add type and text, and close the tag."
            ]
        },
        css: {
            easy: [
                "Add a yellow background color to the whole page using the body selector.",
                "Change the text color of all h1 headers to blue.",
                "Set the color of all paragraph (p) text to green.",
                "Make all divs have a black background.",
                "Set the background color of all buttons to red.",
                "Make elements with the class 'container' 100px wide.",
                "Change the text color of the element with id 'main' to purple.",
                "Remove the bullet points from all unordered lists (ul).",
                "Set the text color of all list items (li) to orange.",
                "Add a black border to elements with the class 'box'.",
                "Set the background color of the element with id 'header' to #eee.",
                "Change the color of all links (a) to red.",
                "Center the text inside elements with the class 'footer'.",
                "Make all input fields have rounded corners (border-radius).",
                "Set the font size of elements with the class 'title' to 24px."
            ],
            moderate: [
                "Make the .header background dark (#333) and the text white, with padding and centered text.",
                "Set the .footer background to #222, text color to #ccc, add padding, and center the text.",
                "Make the .nav use flex layout, space items evenly, set background to #444, and add padding.",
                "Add a border, rounded corners, shadow, and padding to elements with the class .card.",
                "Make .grid a grid layout with 3 columns and a 20px gap.",
                "Add 20px padding, a light background, and rounded corners to the element with id 'main'.",
                "Set the .sidebar width to 200px, background to #f0f0f0, and add padding.",
                "Style all buttons with white text, blue background, rounded corners, and padding.",
                "Make .alert have white text, red background, padding, and rounded corners.",
                "Add a 2px solid border, padding, and rounded corners to the element with id 'profile'.",
                "Make .menu use flex layout, add a gap, light background, and padding.",
                "Set .avatar to be a 50x50px circle.",
                "Style text inputs with a border, padding, and set width to 200px.",
                "Make .highlight have a yellow background, black text, and bold font.",
                "Set #logo to 100x100px, center it, and make it a block element."
            ],
            hardcore: [
                "Use flex to center #container both vertically and horizontally, fill the whole viewport, and set a light background.",
                "Position .modal in the center of the screen, add padding, a white background, shadow, and high z-index.",
                "Make .tooltip relative, display inline-block, and show a pointer cursor.",
                "Hide .tooltip-text by default, style it as a tooltip box, and position it above the parent.",
                "Show .tooltip-text when hovering over .tooltip.",
                "Style #main-content with a max width, white background, shadow, and 40px padding.",
                "Make .dropdown have a white background, border, relative position, and set width.",
                "Hide .dropdown-content by default, position it absolutely, and style as a dropdown menu.",
                "Show .dropdown-content when hovering over .dropdown.",
                "Make .overlay cover the whole screen, fixed position, and use a semi-transparent dark background.",
                "Fix #sidebar to the left, full height, dark background, white text, and padding.",
                "Style .progress-bar with a gradient background, height 20px, width 0, and smooth transition.",
                "When .progress-bar has the class .active, set its width to 100%.",
                "Style .tab as inline-block, with border, background, padding, and pointer cursor.",
                "When .tab has the class .active, make the background dark, text white, and remove the bottom border."
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
            return `<div class="${selector.slice(1)}">.${selector.slice(1)} preview</div>`;
        } else if (selector.startsWith('#')) {
            return `<div id="${selector.slice(1)}">#${selector.slice(1)} preview</div>`;
        } else if (selector === 'button') {
            return '<button class="button">Button</button>';
        } else if (selector === 'h1') {
            return '<h1>Header</h1>';
        } else if (selector === 'p') {
            return '<p>Paragraph</p>';
        } else if (selector === 'ul') {
            return '<ul><li>Item 1</li><li>Item 2</li></ul>';
        } else if (selector === 'li') {
            return '<ul><li>List Item</li></ul>';
        } else if (selector === 'a') {
            return '<a href="#">Link</a>';
        } else if (selector === 'input') {
            return '<input type="text" placeholder="Input">';
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
            startTimer(45, () => {
                questionsAnswered++;
                updateProgress();
                if (questionsAnswered >= 10) {
                    showGameOverScreen();
                } else {
                    const nextQuestionIndex = questionsAnswered;
                    startGame(language, difficulty, nextQuestionIndex, false);
                }
            });
        } else if (difficulty === 'moderate') {
            startTimer(60, () => {
                questionsAnswered++;
                updateProgress();
                if (questionsAnswered >= 10) {
                    showGameOverScreen();
                } else {
                    const nextQuestionIndex = questionsAnswered;
                    startGame(language, difficulty, nextQuestionIndex, false);
                }
            });
        } else if (difficulty === 'hardcore') {
            startTimer(75, () => {
                questionsAnswered++;
                updateProgress();
                if (questionsAnswered >= 10) {
                    showGameOverScreen();
                } else {
                    const nextQuestionIndex = questionsAnswered;
                    startGame(language, difficulty, nextQuestionIndex, false);
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
            profilePoints.textContent = `Total Points: ${formatPoints(user.points || 0)}`;

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
        profilePoints.textContent = `Total Points: ${formatPoints(userData.points || 0)}`;

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
                    <th>${formatPoints(user.points)}</th>
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

        // Helper to extract text from HTML/CSS code
        function extractTextFromCode(code, language) {
            if (!code) return '';
            if (language === 'html') {
                // Remove all tags and decode HTML entities
                const div = document.createElement('div');
                div.innerHTML = code;
                return div.textContent || div.innerText || '';
            } else if (language === 'css') {
                // For CSS, show the expected output description if available
                // Or just show the selector name (e.g., ".box") if not
                // You can improve this logic as needed
                return code.replace(/[{].*?[}]/gs, '').replace(/[.#]/g, '').trim();
            }
            return code;
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

                let displayCorrect = correctAnswer;
                let displayUser = userAnswer;

                // Only show text for HTML and CSS
                if (selectedLanguage === 'html' || selectedLanguage === 'css') {
                    displayCorrect = (correctAnswer || '').replace(/</g, '&lt;').replace(/>/g, '&gt;');
                    displayUser = (userAnswer || '').replace(/</g, '&lt;').replace(/>/g, '&gt;');
                }

                summaryHTML += `
    <tr>
        <td>Question ${i + 1}</td>
        <td><pre>${displayCorrect}</pre></td>
        <td><pre style="background:${isCorrect ? 'rgb(0, 133, 66)' : 'rgb(133, 0, 0)'};">${displayUser}</pre></td>
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
