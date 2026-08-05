// _runtime/01154_fillTyped.js
import { registerSpanErrorInstrumentation } from "00817_registerSpanErrorInstrumentation.js";
const require = arg1;
const dependencyMap = arg6;
arg5.fillTyped = function fillTyped(AppRegistry, runApplication, arg2) {
  registerSpanErrorInstrumentation /* registerSpanErrorInstrumentation */.fill(AppRegistry, runApplication, arg2);
};