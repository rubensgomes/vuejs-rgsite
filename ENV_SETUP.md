## Setting Up Development Environment (Windows)

### Install Microsoft Visual C++

- Download and install Microsoft Visual C++ Redistributable for Visual Studio 2015-2019
- <https://support.microsoft.com/en-us/help/2977003/the-latest-supported-visual-c-downloads>

### Install Curl

- Download curl (version 7.68.0 or later) for windows from <https://curl.haxx.se/windows/>
- Install curl in installation folder: "c:/curl"

### Install Git

- Download Git SCM for Windows from <https://gitforwindows.org/>
- Install git in default setup folder

### Install Microsoft Visual Studio Code

- Download Microsoft Visual Studio Code from <https://code.visualstudio.com/>
- Install Visual Studio Code
- Install the extension "Settings Sync":

 <https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync>

  - "sync.gist": " 454924095dee3e4a1444c6692c54c661"
  - Github personal access token <https://github.com/settings/tokens>

- To see the "Settings Sync" configuration

  - Go to <https://gist.github.com> and login with your GitHub account
  - After login, ensure you are on the GitHub Gist page <https://gist.github.com/>,
  - Or click on the navigation bar link that says "GitHub Gisst".

## Configuring Hosts

- Add following entries to the Windows hosts file (C:\Windows\System32\drivers\etc\hosts)

These entries will come handy when configuring virtual hosts during local testing:

```
127.0.0.1       ezlista.localhost
127.0.0.1       softlagos.localhost
127.0.0.1       rubens-gomes.localhost
127.0.0.1       restportal.localhost
127.0.0.1       template.localhost
```

### Install NodeJS / NPM Tools

1. Download and install Node 12.18.4 from <https://nodejs.org/en/download/>

Note: Latest NodeJS versions will not work under Win7.

2. Install NPX

```bash
npm install -g npx
```

3. Install Gulp

```bash
npm install -g gulp-cli
```

4. Install Vue CLI

```bash
npm install -g @vue/cli
```

5. Install serve

```bash
npm install -g serve

