# cyfe-screen

An electron app dedicated to running automatic an cyfe dashboard screen

## To use:

- Git clone the repo
- To install dependencies run: 'npm install'
- To build the electron app run: 'npm script build'
- To build the debian package run: 'npm script deb64'
  
### An example configuration file is available as example.settings,

Copy this file to the Settings file in your relevant path:

In general, the settings file is stored in your app's user data directory in a file called Settings. The default user data directory for your system can be found below.

#### MacOS

If you're running macOS, your app's default user data directory is ~/Library/Application\ Support/<Your App>.

#### Windows

If you're running Windows, your app's default user data directory is %APPDATA%/<Your App>.

#### Linux

If you're running Linux, your app's default user data directory is either $XDG_CONFIG_HOME/<Your App> or ~/.config/<Your App>.
