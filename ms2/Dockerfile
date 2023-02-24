# 171.1.0.20
# docker run -d --name ms2 -p 3001:3001 --ip 171.1.0.20 --network customnet ms2

FROM node:18.13.0-alpine
EXPOSE 3001
COPY . .
RUN npm i
RUN npm run build
CMD ["npm", "run", "start:prod"]
