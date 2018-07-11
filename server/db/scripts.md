<!-- Generating Models -->
sequelize model:create --name products --attributes name:string,description:string,cost_price:integer,quantity:integer,sale_price:integer,image:string

<!-- Database Migrations -->
sequelize db:migrate