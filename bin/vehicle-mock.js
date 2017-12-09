const fs = require('fs');
const readline = require('n-readlines');

class VehicleMock {

    constructor (sourcePath) {

        if (sourcePath) {
            this.sourcePath = sourcePath;
        } else {
            throw new Error('No source path defined');
        }

        this.steerAngle = 0;
        this.pathMiddleX = 0;
        this.pathMiddleY = 0;
        this.vehicleX = 0;
        this.vehicleY = 0;

        try {
            this.lineReader = new readline(this.sourcePath);
        } catch (e) {
            throw new Error(e.message);
        }

        this.nextLine();
    }

    nextLine () {
        let lr = this.lineReader;
        var line = lr.next();
        if (lr.linesCache.length === 1 && lr.eofReached) {
            lr.reset();
        }
        let dataArray = line.toString('ascii').split(',');
        this.steerAngle = parseFloat(dataArray[1]);
        this.pathMiddleX = parseFloat(dataArray[2]);
        this.pathMiddleY = parseFloat(dataArray[3]);
        this.vehicleX = parseFloat(dataArray[4]);
        this.vehicleY = parseFloat(dataArray[5]);
        setTimeout(() => {
            this.nextLine();
        }, 100);
    }

    printStatus () {
        console.log('steerAngle='+this.steerAngle+' pathMiddleX='+this.pathMiddleX+
            ' pathMiddleY='+this.pathMiddleY+' vehicleX='+this.vehicleX+
            ' vehicleY='+this.vehicleY);
    }
}

module.exports = VehicleMock;