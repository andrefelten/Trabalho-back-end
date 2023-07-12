Inicializa configurações
npm init -y
tsc --init

instala dependencias do projeto. 
npm i -D typescript @types/node ts-node-dev @types/express
npm i express


    PACKAGE.JSON
  "scripts": {
    "dev": "ts-node-dev --respawn --transpile-only ./src/index.ts",
    "build": "tsc",
    "start": "node ./build/index.js"
  },




  CRIAR UMA CLASSE REVENDA - NOME - COMPOSTA POR CARROS 

  CRIAR UMA CLASSE DE CARROS  - MARCA - MODELO - ANO - KM 

nome 

parametro 

o que vai fazer 

