# CA Certificate

## Creating Certificate


## CA Authority

* Let's Encrypt <https://letsencrypt.org/getting-started/>
* Configured below entry in server VM under "root" user's crontab:

```bash
# renew letsencrypt certificates
0 0,12 * * * /usr/bin/certbot renew > /dev/null
```

* Configured below entries in Apache HTTPD ssl configuration:

```bash
  Include /etc/letsencrypt/options-ssl-apache.conf
  ServerAlias www.ezlista.com
  SSLCertificateFile /etc/letsencrypt/live/ezlista.com/cert.pem
  SSLCertificateKeyFile /etc/letsencrypt/live/ezlista.com/privkey.pem
  SSLCertificateChainFile /etc/letsencrypt/live/ezlista.com/chain.pem
```

