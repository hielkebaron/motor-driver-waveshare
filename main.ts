/**
 * Functions are mapped to blocks using various macros
 * in comments starting with %. The most important macro
 * is "block", and it specifies that a block should be
 * generated for an **exported** function.
 */

//% color="#AA278D" weight=100
namespace hello {
    //% block
    export function motor_forward() {
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.digitalWritePin(DigitalPin.P13, 1)
        pins.analogWritePin(AnalogPin.P8, 1023)
        pins.analogWritePin(AnalogPin.P1, 600)

    }

    //% block
    export function motor_stop() {
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.analogWritePin(AnalogPin.P8, 0)
        pins.analogWritePin(AnalogPin.P1, 0)

    }



    // note that Caml casing yields lower case
    // block text with spaces

    //% block   
    export function motor_reverse() {
        pins.digitalWritePin(DigitalPin.P12, 1)
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.analogWritePin(AnalogPin.P8, 1023)
        pins.analogWritePin(AnalogPin.P1, 600)

    }
}