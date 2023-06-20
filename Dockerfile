# 创建一个node镜像
FROM node
# 拷贝当前目录的文件，到镜像中
COPY . /root/vue-back
# 进入该目录 相当于cd 
WORKDIR /root/vue-back
RUN npm install
CMD npm start