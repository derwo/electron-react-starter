# electron-react-starter

Electron / React / Redux boilerplate forked from [electron-react-redux-boilerplate](https://github.com/jschr/electron-react-redux-boilerplate) and modified to use Redux Hooks and a different structure.

## Quick start

Clone the repository
```bash
git clone --depth=1 https://github.com/darwev0/electron-react-starter.git
```

Install dependencies
```bash
cd electron-react-starter
npm install
```

Development
```bash
npm run develop
```

## Packaging

Edit [electron-builder.yml](./electron-builder.yml)

```
npm run pack:mac
npm run pack:win
npm run pack:linux
```
