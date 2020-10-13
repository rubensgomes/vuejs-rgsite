# Setting Up Project

** Ensure to read [ENV_SETUP](./ENV_SETUP.md) first.

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

### Configure GitHub Page

## Configure GitHub Page

* A user GitHub Page is being set up as follows:

1. Create new public repository named "rubensgomes.github.io" to be used to
   publish this User GitHub Page site: <https://rubensgomes.github.io/rgsite>
2. A branch 'gh-pages' will be initialized during build (deploy.sh) in order
   to deploy to GitHub Pages.
3. Configure the project GitHub 'Settings', under the 'GitHub Pages' to use
   the branch 'gh-pages'  and the root '/(root)' path folder.
4. Then, after a successful deployment, you may see the page rendered at 
   <https://rubensgomes.github.io/rgsite/>
