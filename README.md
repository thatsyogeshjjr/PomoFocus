
# PomoFocus

A Pomodoro Timer
Created using Electron.JS

## Screenshots
#### Main Window
![dark_theme](/showoff/dark_theme.png)
#### Settings Window
![dark_settings](/showoff/dark_settings.png)

## How to run App
* clone the git repo and change directory to app
* run `npm install`
* run `npm start`.

**If you want to develop this further**
Some general advice use command: 	`npm run watch`
This will update the app live as you change data.

## Application Info
**Different Modes**
* Focus
* Short break
* Long break

You can further modify then using the settings page, link to which is in the gear icon.

The timer **automatically** changes modes after a working session for a short break (default: 5min) and after every four sessions, long break (default: 15min) is started and continues further in the same way.
