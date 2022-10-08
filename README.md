
# kubee-frontend

This is an example React frontend packaged in a docker image.

This was created using npx create-react-app command
```
npx create-react-app kubee-frontend --template typescript
```

# Build

To build the app and package into a docker image, execute command:
```
docker build -t kubee-frontend .
```

# Run

To run the app container locally, execute the command:
```
docker run -it --rm --name kubee-frontend --link kubee-backend:kubee-backend -p 3000:80 kubee-frontend
```

Note that this requires the backend kubee-backend running in container at port 8080.
For instructions how to build and run kubee-backend check the [readme](https://github.com/sbanal/kubee-backend).


# Publish

Before running commands below ensure that you have Signed-in in your Docker Desktop application.
This assumes you are using docker desktop and you have your own Docker Hub account.

```
docker build -t sbanal/kubee-frontend .
docker push sbanal/kubee-frontend
```

Test run:
```
docker run -it --rm --name kubee-frontend --link kubee-backend:kubee-backend -p 3000:80 sbanal/kubee-frontend
```

# Reference

* https://create-react-app.dev/docs/getting-started/
* https://mherman.org/blog/dockerizing-a-react-app/
* https://collabnix.com/creating-your-first-react-app-using-docker/
* https://docs.docker.com/docker-hub/
* https://www.codementor.io/@jesselangford472/building-a-simple-react-hook-api-call-with-typescript-1dpji3wcyt
* https://www.bogotobogo.com/DevOps/Docker/Docker-Compose-Nginx-Reverse-Proxy-Multiple-Containers.php
