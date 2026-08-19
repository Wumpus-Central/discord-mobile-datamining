// _runtime/00120_setUpDefaltReactNativeEnvironment.js
import javaScriptFlagGetter from "00027_javaScriptFlagGetter.js";
import env from "00121_env.js";
import setUpDOM from "00122_setUpDOM.js";
import NativePerformanceCxx from "00153_NativePerformanceCxx.js";
import polyfillObjectProperty from "00174_polyfillObjectProperty.js";
import _mod179 from "metro/00179__.js";
import _mod188 from "metro/00188__.js";
import _mod195 from "metro/00195__.js";
import _mod198 from "metro/00198__.js";
import Alert from "00230_Alert.js";
import polyfillObjectProperty2 from "00234_polyfillObjectProperty.js";
import _mod235 from "metro/00235__.js";
import __fetchSegment from "00241___fetchSegment.js";
import AppRegistry from "00244_AppRegistry.js";
import setUpIntersectionObserver from "00262_setUpIntersectionObserver.js";
import setUpMutationObserver from "00267_setUpMutationObserver.js";

require = arg1;
const dependencyMap = arg6;
let c2 = false;
arg5.default = function setUpDefaltReactNativeEnvironment() {
  if (!c2) {
    c2 = true;
    env;
    setUpDOM.default();
    NativePerformanceCxx;
    polyfillObjectProperty;
    _mod179;
    _mod188;
    _mod195;
    _mod198;
    Alert;
    polyfillObjectProperty2;
    _mod235;
    __fetchSegment;
    AppRegistry;
    if (obj2.enableIntersectionObserverByDefault()) {
      let tmpResult = setUpIntersectionObserver;
      tmpResult.default();
    }
    tmpResult = javaScriptFlagGetter;
    if (tmpResult.enableMutationObserverByDefault()) {
      setUpMutationObserver.default();
      const tmpResult1 = setUpMutationObserver;
    }
    obj2 = javaScriptFlagGetter;
  }
};