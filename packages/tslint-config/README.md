# myu-config

## TODO's

-   Convert to eslint instead of tslint!

    https://www.robertcooper.me/using-eslint-and-prettier-in-a-typescript-project

## tslint

Just extend the `tslint.js` file onto your root's one.

## vscode settings

```json
{
    "editor.formatOnSave": true,
    "eslint.autoFixOnSave": true,
    "eslint.validate": [
        "javascript",
        "javascriptreact",
        { "language": "typescript", "autoFix": true },
        { "language": "typescriptreact", "autoFix": true }
    ],
    "[javascript]": {
        "editor.formatOnSave": false
    },
    "[javascriptreact]": {
        "editor.formatOnSave": false
    },
    "[typescript]": {
        "editor.formatOnSave": false
    },
    "[typescriptreact]": {
        "editor.formatOnSave": false
    }
}
```

## package.json scripts

```json
{
    "scripts": {
        "lint": "tsc --noEmit && eslint '*/**/*.{js,ts,tsx}' --quiet --fix"
    }
}
```
