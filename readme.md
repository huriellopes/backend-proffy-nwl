<p align="center">
  <img src="img/banner.png" alt="Next Level Week" />
</p>

# Semana Next Level Week - Backend Nodejs

> backend do **Proffy Application** desenvolvido na NWL #02 da RocketSeat, em homenagem aos professores!

### 📄 O que foi usado:

- Node.Js
- Express
- Cors
- Dotenv
- Celebrate
- Knex
- sqlite3
- Typescript
- Eslint
- Prettier
- EditorConfig

### 🎯 Documentação:

> Para vê os requisitos que foi levantado para desenvolver a api. Vaja aqui [Doc](doc.md)

### 🛠 Mão na massa:

> Você pode realizar o clone deste repositório ou baixar o arquivo .zip!

Clone o repositório:

````
git clone https://github.com/huriellopes/backend-proffy-nwl.git
````

Para baixar o zip: https://github.com/huriellopes/backend-proffy-nwl/archive/master.zip

### 💻 Executando o projeto:

#### Na raiz do projeto, execute os comandos:

````
# Para instalar as dependências
yarn ou npm install

# Para copiar o .env.example
cp .env.example .env ou copy .env.example .env

# Criar o banco de dados
yarn knex:migrate ou npm knex:migrate

# Caso queira desfazer
yarn knex:migrate:rollback  ou npm knex:migrate:rollback
````

### 🚀 Rodando o servidor

#### Para rodar o servidor, execute o comando:

````
yarn dev:server
````

### 📑 Licença

Este projeto está sob a licença MIT. Veja aqui [Licença](LICENSE)
