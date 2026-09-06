// _runtime/01019_fillTyped.js
import registerSpanErrorInstrumentation from "00682_registerSpanErrorInstrumentation.js";

require = arg1;
const dependencyMap = arg6;
arg5.fillTyped = function fillTyped(AppRegistry, runApplication, arg2) {
  registerSpanErrorInstrumentation.fill(AppRegistry, runApplication, arg2);
};
