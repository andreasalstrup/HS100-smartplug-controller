# HS100-smartplug-controller

Simple control of smartplug without 3rd party software. 

## Setup

The device is likely using port 9999. Do a network scan to find the device IP.

1. Find your network IP.

```bash
ifconfig
```

2.  Scan your network to find the device IP.

```bash
nmap <inet addr>/26
```

3. Edit '/src/config.json' to device IP.

4. Install dependencies.

```bash
 npm install
```

## Run

Run the CLI of the controller.

```bash
npm start build
```

## Resource

[Reverse Engineering the TP-Link HS110](https://www.softscheck.com/en/reverse-engineering-tp-link-hs110)

[Controlling the TP-LINK HS100 Wi-Fi smart plug](https://blog.georgovassilis.com/2016/05/07/controlling-the-tp-link-hs100-wi-fi-smart-plug)