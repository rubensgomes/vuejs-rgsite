# Setting Up Project

** Ensure to read and configure [ENV_SETUP](./ENV_SETUP.md) first.

### Scaffold Project

```bash
vue create rgsite
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

1. Login to the [GitHub Account](https://github.com/rubensgomes)
2. Select and click on the [Repositories link](https://github.com/rubensgomes?tab=repositories)
3. Create a new repository called "rubensgomes/rgsite
4. Then follow commands below locally

```bash
git init
git add README.md
git commit -m "first commit"
git branch -M master
git remote add origin https://github.com/rubensgomes/rgsite.git
git push -u origin master
```
