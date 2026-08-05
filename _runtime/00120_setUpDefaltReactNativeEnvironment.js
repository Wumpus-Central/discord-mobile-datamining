// _runtime/00120_setUpDefaltReactNativeEnvironment.js
const require = arg1;
const dependencyMap = arg6;
let c2 = false;
arg5.default = function setUpDefaltReactNativeEnvironment() {
  if (!c2) {
    c2 = true;
    require("00121_env.js") /* env */;
    require("00122_setUpDOM.js") /* setUpDOM */.default();
    require("00153_NativePerformanceCxx.js") /* NativePerformanceCxx */;
    require("00174_polyfillObjectProperty.js") /* polyfillObjectProperty */;
    require("metro/00179__.js");
    require("metro/00188__.js");
    require("metro/00195__.js");
    require("metro/00198__.js");
    require("00230_Alert.js") /* Alert */;
    require("00234_polyfillObjectProperty.js") /* polyfillObjectProperty */;
    require("metro/00235__.js");
    require("00241___fetchSegment.js") /* __fetchSegment */;
    require("00244_AppRegistry.js") /* AppRegistry */;
    const obj = require("00122_setUpDOM.js") /* setUpDOM */;
    if (obj2.enableIntersectionObserverByDefault()) {
      let tmpResult = tmp(262);
      tmpResult.default();
    }
    tmpResult = tmp(27);
    if (tmpResult.enableMutationObserverByDefault()) {
      tmp(267).default();
      const tmpResult1 = tmp(267);
    }
    obj2 = require("00027_javaScriptFlagGetter.js") /* javaScriptFlagGetter */;
  }
};