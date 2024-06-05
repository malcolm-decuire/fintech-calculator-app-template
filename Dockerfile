# Start with the official Node.js image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json before other files
# Utilise Docker cache to save re-installing dependencies if unchanged
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --production

# Copy all files
COPY . .

# Build the Next.js app
RUN yarn build

# Expose the listening port
EXPOSE 3000

# Run yarn start command
CMD ["yarn", "start"]