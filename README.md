# Quick TS Setup

> Quick TypeScript setup for projects

This repository provides a default configuration to quickly start TypeScript projects without the need for additional setup. It comes with minimal Prettier, ESLint, and strict tsconfig configurations, along with essential npm scripts.

## Installation

1. Clone this repository: `git clone https://github.com/casantosmu/quick-ts-setup.git`
2. Navigate to the project directory: `cd quick-ts-setup`
3. Install the dependencies: `npm install`

## Configuration

Before starting your project, please make the following changes:

- Update the information in `package.json`:
  - `"name"`: Change the name of the project.
  - `"description"`: Modify the project description.
  - `"author"`: Update the author field.
  - `"license"`: Change the license if needed.
- Clean Git history:
  - Remove the existing Git repository by deleting the `.git` folder.
  - Initialize a new Git repository: `git init`.
  - Make an initial commit: `git add .` and `git commit -m "Initial commit"`.
- Update the README.md:
  - Modify the content of the README.md file to provide information about your project.
- (Optional) Remove or modify any additional files, such as workflows, that are not needed for your project.

## Usage

- `npm start`: Start the application.
- `npm run build`: Compile TypeScript code into the `build` folder.
- `npm run dev`: Start the application in development mode with automatic restart and debug mode.
- `npm run lint`: Run ESLint for static code analysis.
- `npm run format`: Automatically format the code with Prettier.

## License

This project is licensed under the [MIT License](LICENSE).
