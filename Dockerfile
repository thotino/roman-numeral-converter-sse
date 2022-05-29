FROM node:14.19.1-stretch

# Install mandatory lib
RUN apt-get update && \
  apt-get upgrade -y && \
  apt-get install -y bash make g++ git 

# Prepare the destination
RUN mkdir -p /usr/app
WORKDIR /usr/app

# Add source files
COPY . /usr/app

# Make the install in the container to avoid compilation problems
RUN yarn install --production && \
    yarn autoclean --init && \
    yarn autoclean --force

# Clean image
RUN npm uninstall -g npm && \
    rm -rf /tmp/* /var/cache/apk/* /root/.npm /root/.node-gyp

# Grant access to the entrypoint
RUN chmod +x docker-entrypoint.sh

# Start application
ENTRYPOINT ["./docker-entrypoint.sh"]

# Expose ports
EXPOSE 3000
