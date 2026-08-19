// _runtime/00360_shouldUseTurboAnimatedModule.js
import javaScriptFlagGetterAll from "00027_javaScriptFlagGetter.js";

importAll = arg3;
const dependencyMap = arg6;
arg5.default = function shouldUseTurboAnimatedModule() {
  const result = javaScriptFlagGetterAll.cxxNativeAnimatedEnabled();
  return false;
};