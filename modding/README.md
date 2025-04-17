# Modding "Help Me Satori Sama!"
This document is a guide for modding the game "Help Me Satori Sama!".  
For basic modding, We will use dnSpyEx to decompile&recompile the game.  

## Requirements
- [dnSpyEx](https://github.com/dnSpyEx/dnSpy)

## Decompiling & Patching the Game

### Decompiling the game
1. Go to Steam, Click on the game, and click on the gear icon on the right side of the screen.
2. Click on "Manage" and then "Browse local files".
3. `%steamapps%\common\たすけて！おつかれさとり様` would be opened.
4. Navigate to `HelpMeSatori\HelpMeRememberSatorisama_Data\Managed`.
5. Open dnSpyEx
6. Drag the `Assembly-CSharp.dll` file into dnSpy's Assembly Explorer on the left side of the screen.
7. Open `Assembly-CSharp` tree, `Assembly-CSharp.dll` tree, and `-` tree to see the classes in the game.  
   ![Image](https://github.com/user-attachments/assets/dc08b405-f971-4b7a-a0bf-bfa5ff3b49e7)

Due to BB Obfuscator, the variable names are not readable, but the code structure is still intact.
We can safely navigate through the code to patch the game to load external files, instead of fetching Unity assets from the game files.

Due to compliance with [ Guidelines for Touhou Project Fan Creators (Last updated on 2020-11-10)](https://touhou-project.news/guidelines_en/), The image examples will be blurred to prevent any copyright issues.

### Patching Quiz Data Loading Mechanism
1. First, Open the `-` tree in the `Assembly-CSharp.dll` tree.
2. Find `MainSceneManager` class under the `-` tree.  
   ![Image](https://github.com/user-attachments/assets/9bbd7faf-4928-4650-a56a-df83c7b17c56)
3. Click on `MainSceneManager` to open the code.
4. You will see the MSIL decompiled and BB Obfuscated MainSceneManager class.
5. Find the `ReadQuizData` method. (Use Ctrl+F to search for `ReadQuizData`).  
   ![Image](https://github.com/user-attachments/assets/8b6dbc44-2e11-4717-8146-3d5ef2ffda17)
6. Right click on `ReadQuizData`, Click `Edit Method`.  
   ![Image](https://github.com/user-attachments/assets/bffd3071-2c97-407d-87c0-caac03ca81ab)
7. Add the following code before the `bool flag = true;` line.  
   ```csharp
	if (File.Exists("./custom/QuizData_" + SingletonMonoBehaviour<MasterGameData>.DALBAJFFLIP.StageNum.ToString()))
	{
        if (stringReader != null) stringReader.Close(); // Prevent memory leak
		stringReader = new StringReader(File.ReadAllText("./custom/QuizData_" + SingletonMonoBehaviour<MasterGameData>.DALBAJFFLIP.StageNum.ToString()));
	}
    ```
8. Click `Compile` to compile the code.

### Patching Stage Data Loading Mechanism
1. Open the `-` tree in the `Assembly-CSharp.dll` tree.
2. Find `MasterGameData` class under the `-` tree.
   ![Image](https://github.com/user-attachments/assets/8a273c05-b452-4722-a2cb-7823aa5a647b)
3. Click on `MasterGameData` to open the code.
4. You will see the MSIL decompiled and BB Obfuscated MasterGameData class.
5. Find the `ReadStageData` method. (Use Ctrl+F to search for `ReadStageData`).
6. Right click on `ReadStageData`, Click `Edit Method`.
   ![Image](https://github.com/user-attachments/assets/1761b332-16fd-422d-aa70-7e9c435fcbe4)
7. Add the following code before the `bool flag = true;` line.
   ```csharp
    if (File.Exists("./custom/StageData"))
    {
        if (stringReader != null) stringReader.Close();
        stringReader = new StringReader(File.ReadAllText("./custom/StageData"));
    }
    ```
8. Click `Compile` to compile the code.

### Export the Patched Assembly
1. Click on `File` on the top left corner of dnSpyEx.
2. Click on `Save Module`.
3. Press `OK` to save the module.

## Setting up the `custom` folder
1. Go to Steam, Click on the game, and click on the gear icon on the right side of the screen.
2. Click on "Manage" and then "Browse local files".
3. `%steamapps%\common\たすけて！おつかれさとり様` would be opened.
4. Create a new folder named `custom` in the game directory.

### Creating `StageData` file
The StageData file is a CSV file that contains the stage data for the game.  
inside the `custom` folder, create a new file named `StageData` without any extension.
The file can be generated via `html/stagedata.html`.  

### Creating `QuizData_{stage}` file
The QuizData file is a CSV file that contains the quiz data for the game.
inside the `custom` folder, create a new file named `QuizData_{stage}` without any extension.
The `{stage}` is the stage number you want to create the quiz data for. (0 for tutorial, 1 for stage 1, etc.)
The file can be generated via `html/quiz.html`.

Now start the game and you should see the custom stage data and quiz data loaded from the `custom` folder.
Enjoy modding the game!
