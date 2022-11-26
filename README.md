# NodeJS_Express_Mongo_Angular13_Docker
Realized by Rafa Ferri Torró

I'ts a docker project which use nodejs and mongo with express who is the charge the conection between them and angular is charge of frontend.

For up the project, you need to put this command, if isn't work, you can try to put sudo before this:

          docker-compose up --build
--build is very important for starting the Dockerfiles

<hr>

## Tecnologies

It's charge to up the containers for running the project:
     
     mongo_container: The container which contains the configuration and data of database
          mongo-init.js : Script who is charge to complete database
          db-dumb: The data of databse
     backend_container: The container which cotains data of backend, it's works by multi-staged
     frontend_container: The container which cotains data of frotend, it's works by multi-staged
     adminMongo_container: The container which cotains express which depends on mongo
     loadbalancer_container: The container which cotains nginx for the load data because
     it's use for balacing it
     prometheus_containers: The container which cotains prometheus which it's a applications 
     to monitorizing container
     grafana_container: The container contains grafana which it's use for see and format metrics
     
     
## Archieves
 | Module     | Url |
| ---      | ---       |
| Docker-compose |  https://github.com/rferritorro/NodeJS_Express_Mongo_Angular13_DOCKER/blob/master/docker-compose.yml
| data.env     | https://github.com/rferritorro/NodeJS_Express_Mongo_Angular13_DOCKER/blob/master/data.env 
| Docker-file backend |  https://github.com/rferritorro/NodeJS_Express_Mongo_Angular13_DOCKER/blob/master/backend/Dockerfile    |
Docker-file frontend     | https://github.com/rferritorro/NodeJS_Express_Mongo_Angular13_DOCKER/blob/master/frontend/Dockerfile|
 LoadBalancer | https://github.com/rferritorro/NodeJS_Express_Mongo_Angular13_DOCKER/blob/master/loadbalancer/nginx.conf|
 Mongo |  https://github.com/rferritorro/NodeJS_Express_Mongo_Angular13_DOCKER/blob/master/mongo/mongo-init.js  https://github.com/rferritorro/NodeJS_Express_Mongo_Angular13_DOCKER/blob/master/mongo/mongorestore.sh
|Prometheus     |  https://github.com/rferritorro/NodeJS_Express_Mongo_Angular13_DOCKER/blob/master/prometheus/prometheus.yml|
     
## Logs

 | Url     | Description |
| ---      | ---       |
 http://localhost:4200 | For access to frontend
 http://localhost:8081  | For access mongodb
 http://localhost:9090  | For access to Prometheus Panel
 http://localhost:3500  | For access to Grafana Panel

     
