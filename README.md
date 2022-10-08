
# kubee-frontend

This is an example React frontend packaged in a docker image.

This was created using npx create-react-app command
```
npx create-react-app kubee-frontend
```

# Build

To build the app and package into a docker image, execute command:
```
docker build -f Dockerfile -t kubee-frontend 
```

# Run

To run the app container locally, execute the command:
```
docker run -it --rm -p 1337:80 kubee-frontend
```

# Publish

Before running commands below ensure that you have Signed-in in your Docker Desktop application.
This assumes you are using docker desktop and you have your own Docker Hub account.

```
docker build -t sbanal/kubee-frontend .
docker push sbanal/kubee-frontend
```

# Reference

* https://mherman.org/blog/dockerizing-a-react-app/
* https://docs.docker.com/docker-hub/
