# COMP.SE.140

A docker compose project for software engineering course at the University of Tampere.

## Explanation of the addresses

The first request's address comes from the caller's computer. The second request's address comes from Service1 (outer-service).

The caller's IP address can be seen on the second row.

## Output of dockerd

`$ docker container ls`

```txt
CONTAINER ID   IMAGE                     COMMAND                  CREATED         STATUS         PORTS                                       NAMES
4ab3714cdb3a   compse140_outer-service   "docker-entrypoint.s…"   2 minutes ago   Up 2 minutes   0.0.0.0:8001->8001/tcp, :::8001->8001/tcp   compse140_outer-service_1
7de4dafefd36   compse140_inner-service   "docker-entrypoint.s…"   2 minutes ago   Up 2 minutes                                               compse140_inner-service_1
```

`$ docker container ls`

```txt
NETWORK ID     NAME                       DRIVER    SCOPE
24d8cfaec918   compse140_default          bridge    local
21c18e3fad7a   private                    bridge    local
...
```
