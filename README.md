# Example Project using Docker and Nodemon Debugging

## Installation

1. Build the image using `docker image build -t bbs-v2:1.0 .`
2. Deploy the image using `docker stack deploy -c app-stack.yml bbs-v2`
3. Read Logs Using `docker service logs bbs-v2_bbs-v2`
4. Stop Service Using `docker stack rm bbs-v2 `

## Modification

To install a new dependency, start the image, then use the `docker exec -it bbs-v2_web.1.oz4c0qbw3wj18yodlrsnlreq0 npm i aws-sdk` to install a package.