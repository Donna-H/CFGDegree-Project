# Project to Create Eat Well App

This project was to build a healthy meal planner based on the calories that the user will eat during one day.  Deployed here:https://cfg-full-stack-project.netlify.app/

## Project Description


Our meal planner is called “Eat Well” and via its website, the users will be able to input the amount of the calories they expect to consume on a day and based on some rules* for the minimum and maximum consumption of calories, it fetches the recipes from a database via an API and generates a meal plan for the user, that consists of three meals: breakfast, lunch and dinner. Each card has the meal description and a link for an external website that has more details about the recipe and the preparation.

This website was developed using React and it connects to an external API called Spoonacular (source: [https://spoonacular.com/food-api](https://spoonacular.com/food-api)) and our main objective was to deliver a minimalist and easy to use interface, where our users could get their output effectively and avoiding any errors.

*The rules for the calories intake is based on a research. According to the following resources, the estimated minimum amount for calories intake on a day would be 1600, and the maximum would be 2500.

Source for minimum amount: [https://www.dietaryguidelines.gov/sites/default/files/2020-12/Dietary_Guidelines_for_Americans_2020-2025.pdf](https://www.dietaryguidelines.gov/sites/default/files/2020-12/Dietary_Guidelines_for_Americans_2020-2025.pdf)

Source for maximum amount: [https://www.nhs.uk/common-health-questions/food-and-diet/what-should-my-daily-intake-of-calories-be/#:~:text=Generally%2C the recommended daily calorie,women and 2%2C500 for men](https://www.nhs.uk/common-health-questions/food-and-diet/what-should-my-daily-intake-of-calories-be/#:~:text=Generally%2C%20the%20recommended%20daily%20calorie,women%20and%202%2C500%20for%20men).

### Table of Contents

1. Eat Well Project is contained in the main branch of CFGproject/ in the structure of a typical React app therefore access the code in the file structure as follows:
CFGproject/public
CFGproject/src
To run on your local machine the recommended method is to:
Create a new directory: # mkdir new_dir
Copy all the contents of the project - CFGproject/public and CFGproject/src 
Must include package.json and package-lock.json to maintain package versions across parallel installs.
Now, navigate to the "new_dir" & run: npm install
This will install all the packages required & should work without any issues
run: npm start 
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

2. Project work document - document used to asses CFG project work and understand approach to the project
delivery. It will also provide an insight into architecture, testing and implementation strategy as
a team. 
Project work document in a folder CFGproject/CFGproject-work-document/  containing files in two formats md and pdf includes folder containing images for md and md file both with the same file name as follows:
- folder containing images for md and md file both with the same file name  
- CFGproject/CFGproject-work-document/Project work document 2361968967f24c9ea22d510e08e4d285/
- CFGproject/CFGproject-work-document/Project work document 2361968967f24c9ea22d510e08e4d285.md
- CFGproject/CFGproject-work-document/project-work-document.pdf

3. Project presentation slides in folder CFGproject/CFGproject-presentation containing files in two formats ppt and pdf:
CFGproject/CFGproject-presentation/CFGproject.pptx (this pptx is 9mb therefore can be downloaded from this folder to view on your computer)
CFGproject/CFGproject-presentation/CFGproject.pdf
