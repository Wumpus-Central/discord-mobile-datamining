// === Module 120: setUpDefaltReactNativeEnvironment ===

// Module 120 (setUpDefaltReactNativeEnvironment)
const require = arg1;
const dependencyMap = arg6;
let c2 = false;
arg5.default = function setUpDefaltReactNativeEnvironment() {
  if (!c2) {
    c2 = true;
    require(121) /* env */;
    require(122) /* setUpDOM */.default();
    require(153) /* NativePerformanceCxx */;
    require(174) /* polyfillObjectProperty */;
    require(179);
    require(188);
    require(195);
    require(198);
    require(230) /* Alert */;
    require(234) /* polyfillObjectProperty */;
    require(235);
    require(241) /* __fetchSegment */;
    require(244) /* AppRegistry */;
    const obj = require(122) /* setUpDOM */;
    if (obj2.enableIntersectionObserverByDefault()) {
      let tmpResult = tmp(262);
      tmpResult.default();
    }
    tmpResult = tmp(27);
    if (tmpResult.enableMutationObserverByDefault()) {
      tmp(267).default();
      const tmpResult1 = tmp(267);
    }
    obj2 = require(27) /* javaScriptFlagGetter */;
  }
};