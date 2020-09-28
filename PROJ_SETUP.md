# Setting Up Project

** Ensure to read and configure [DEV_SETUP](./DEV_SETUP.md) first.

### Install NodeJS

1. Download and install Node 12.18.4 from <https://nodejs.org/en/download/>

Note: Latest NodeJS versions will not work under Win7.

2. Install NPX

```bash
npm install -g npx
```

### Install VueJS

1. Install Vue CLI

```bash
npm install -g @vue/cli
```

2. Install serve

```bash
npm install -g serve
```

### Scaffold Project

```bash
vue create <GIT REPO/PROJ NAME>
# select Vue 3
```

### Build Project

```bash
npm run lint
npm run build
```

### Run/Stop Server

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
```

