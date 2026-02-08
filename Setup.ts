//
// install typescript in dev
npm install typescript --save-dev


// start
npm init -y

// 
npm i -D typescript

//
npx tsc --init

{
  "compilerOptions": {
    "strict": true
    "useUnknownInCatchVariables": true
    "module": "es2022",
    "moduleResolution": "bundler",
    "outDir": "dist",
    "rootDir": "src",
    "exactOptionalPropertyTypes": true,
    "noUnchekedIndexedAccess": true,
    "target": "es2022"
  },
  "include":  ["src"]
}

