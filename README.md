# cypress_talonro
## Condition
- Install docker
    - https://docs.docker.com/install/linux/docker-ce/ubuntu/
- Install heroku
- Login to heroku, heroku container, and docker
    - heroku login
    - heroku container:login
    - docker login
- Build Dockerfile
    - docker build .
- Deploy to heroku
    - heroku container:push web --app \<appname\>
    - heroku container:release web --app \<appname\>
## References
- https://github.com/cypress-io/cypress-example-kitchensink
- https://github.com/cypress-io/cypress-docker-images
