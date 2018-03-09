# cyfe-screen

An electron app dedicated to running an automated cyfe dashboard screen

## To use:

- Git clone the repo
- To install dependencies run: 'npm run setup'
- To build the debian app run: 'npm run build-deb'
  
### Configuration

Edit the following configuration file, entering the following contents:

```json
{
    "user_email": "",
    "user_pass": "",
    "dashboard_ids": [],
    "dashboard_rotate": 300
}
```

- user_email is the email address of the user to login
- user_pass is that users password
- dashboard_ids is and array of IDs visible in the dashboard URL.
  EG: https://app.cyfe.com/dashboards/123456 would be 123456
- dashboard_rotate is the time in seconds before rotating to the next dashboard

#### MacOS

~/Library/Application\ Support/cyfe-screen/Settings

#### Windows

%APPDATA%/cyfe-screen/Settings

#### Linux

Either $XDG_CONFIG_HOME/cyfe-screen/Settings or ~/.config/cyfe-screen/Settings
