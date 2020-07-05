# Code Adventure - Curso Docker

Aplicação de referência do curso de Docker da Code Aventure.

Endereço do curso: [Code Adventure - Docker](https://codeadventure.com.br/docs/docker)


## Incializando o projeto:

Primeiramente executar o seguinte comando:

```sh
docker-compose up
``` 
Em seguida, quando a aplicação estiver funcionando, executar o seguinte comando:

```sh
docker exec -it code_backend sequelize db:migrate && sequelize db:seed:all
``` 
