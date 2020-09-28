# Setting Up Project

** Ensure to read and configure [DEV_SETUP](./DEV_SETUP.md) first.

### Scaffold Project

```bash
vue create <GIT_PROJ_NAME>
# select Vue 3
```

### Build Project

```bash
npm run lint
npm run build
```

### Run / Stop Server

1. Start server listening on port 8080

```bash
npm run serve
```

2. Stop server listening on port 8080.

On Microsoft Windows after CTRL-C, do the following:

```bash
netstat -ano | findstr :8080
# locate and copy the PID (process ID)
taskkill /PID <PID> /F
```

### Check and Review Required Software

```bash
node --version
node -p process.versions
node -p process.platform
node -p process.arch
npm --version
npx --version
vue -V
# vue info may only work on Windows shell
vue info
```

### Create Git Repository

```bash
git init
git add -A
git commit -m 'Initial Commit'
git push git@github.com:rubensgomes/<GIT_PROJ_NAME>.git
# GIT_PROJ_NAME is the actual name of this project given to the vue create project command.
```

