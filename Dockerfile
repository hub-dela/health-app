FROM node:16.18.1-alpine

COPY ./dist /app/

WORKDIR /app/

ENV docker=1
ENV EXPOSEPORT 4000
RUN adduser \
    --disabled-password \
    --home /app \
    --gecos '' app \
    && chown -R app:app /app

USER app

ENTRYPOINT node index.js