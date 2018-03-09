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
}```

Where user_email is the email address of the user to login, user_pass is that users password, and dashboard_id is the ID visible in the dashboard URL.
EG: https://app.cyfe.com/dashboards/123456 would be 123456

#### MacOS

If you're running macOS, your app's default user data directory is ~/Library/Application\ Support/cyfe-screen/Settings.

#### Windows

If you're running Windows, your app's default user data directory is %APPDATA%/cyfe-screen/Settings.

#### Linux

If you're running Linux, your app's default user data directory is either $XDG_CONFIG_HOME/cyfe-screen/Settings or ~/.config/cyfe-screen/Settings.
