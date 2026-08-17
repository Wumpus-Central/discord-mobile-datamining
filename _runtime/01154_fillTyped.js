// _runtime/01154_fillTyped.js
import registerSpanErrorInstrumentation from "registerSpanErrorInstrumentation" /* 817 */;

require = arg1;
const dependencyMap = arg6;
arg5.fillTyped = function fillTyped(AppRegistry, runApplication, arg2) {
  registerSpanErrorInstrumentation.fill(AppRegistry, runApplication, arg2);
};