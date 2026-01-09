FROM nginx:alpine

COPY digitalClock.html /usr/share/nginx/html/index.html
COPY digitalClock.css /usr/share/nginx/html/
COPY digitalClock.js /usr/share/nginx/html/
