# 171.1.0.5
# docker run -d --name nginx1 -p 80:80 --ip 171.1.0.5 --network customnet nginx1

FROM nginx:latest
EXPOSE 80
RUN rm -rf /etc/nginx/conf.d/default.conf
COPY custom.conf /etc/nginx/conf.d/custom.conf
