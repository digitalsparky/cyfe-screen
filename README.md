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


# Like my stuff?

Would you like to buy me a coffee or send me a tip?
While it's not expected, I would really appreciate it.

[![Paypal](https://www.paypalobjects.com/webstatic/mktg/Logo/pp-logo-100px.png)](https://paypal.me/MattSpurrier) <a href="https://www.buymeacoffee.com/digitalsparky" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/white_img.png" alt="Buy Me A Coffee" style="height: 41px !important;width: 174px !important;box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;" ></a>
