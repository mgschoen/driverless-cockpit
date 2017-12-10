# driverless-cockpit
Visualisations for municHMotorsport's driverless car

## Setup

Make sure you have [Node.js version 6.2.2](https://nodejs.org/download/release/v6.2.2/) or higher as well as [Bower](https://bower.io/#install-bower) installed.

To be able to run the app locally, you will need a bunch of comma separated dummy data in an ASCII or utf-8 encoded text file, such as:

```
timestamp,steerAngle,path_middle_point_x,path_middle_point_y,vehicle_x,vehicle_y
0,0,52.099,29.948,50.95,29.98
0.1,-33.006,52.099,29.948,50.95,29.98
0.2,-11.344,52.119,29.947,50.968,29.979
0.3,-4.8535,52.195,29.944,51.044,29.976
0.4,-3.3109,52.334,29.938,51.183,29.972
0.5,-2.7109,52.534,29.929,51.383,29.965
0.6,-2.434,52.792,29.917,51.641,29.956
0.7,-2.2872,53.101,29.9,51.951,29.944
0.8,-2.1836,53.456,29.878,52.306,29.929
0.9,-2.073,53.849,29.85,52.7,29.911
...
```

Download a sample file [here](http://argonn.me/share/driverless-cockpit-dummy.txt).

Follow these steps to setup your app:

1. Clone this repository
2. Run `npm install` in your app directory
3. Store the absolute path to your sample file in the environment variable `FSD_MOCKDATA_PATH`, e.g.

```
$ export FSD_MOCKDATA_PATH=/path/to/file.txt
```

4. Switch to the app's frontend directory and install frontend dependencies:

```
$ cd ./public/map/
$ bower install
```

## Run the app

Start the server by hitting `npm start` in the app's root directory.

Access the API at `http://localhost:3000/vehiclestats/`.

The frontend is served at `http://localhost:3000/map/`.

## Credits

This project proudly uses

- [Polymer](https://www.polymer-project.org) and [WebComponents](https://www.webcomponents.org/)
- [Two.js](https://two.js.org/)
- [Express.js](http://expressjs.com/)
- [n-readlines](https://github.com/nacholibre/node-readlines)