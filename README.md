# cyfe-screen

An electron app dedicated to running an automated cyfe dashboard screen

## To use:

- Git clone the repo
- To install dependencies run: 'npm script setup'
- To build the debian app run: 'npm script build-deb'
  
### Configuration

Edit the following configuration file, entering the following contents:

```{
    "user_email": "",
    "user_pass": "",
    "dashboard_id": ""
}
```

- user_email is the email address of the user to login
- user_pass is that users password
- dashboard_id is the ID visible in the dashboard URL.
  EG: https://app.cyfe.com/dashboards/123456 would be 123456

#### MacOS

~/Library/Application\ Support/cyfe-screen/Settings

#### Windows

%APPDATA%/cyfe-screen/Settings

#### Linux

Either $XDG_CONFIG_HOME/cyfe-screen/Settings or ~/.config/cyfe-screen/Settings
