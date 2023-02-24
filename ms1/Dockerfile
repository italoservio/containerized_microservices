# 171.1.0.10
# docker run -d --name ms1 -p 3000:3000 --ip 171.1.0.10 --network customnet ms1

FROM node:18.13.0-alpine
EXPOSE 3000
COPY . .
RUN npm i
RUN npm run build
CMD ["npm", "run", "start:prod"]
