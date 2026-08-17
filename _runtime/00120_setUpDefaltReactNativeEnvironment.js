// _runtime/00120_setUpDefaltReactNativeEnvironment.js
import javaScriptFlagGetter from "javaScriptFlagGetter" /* 27 */;
import env from "env" /* 121 */;
import setUpDOM from "setUpDOM" /* 122 */;
import NativePerformanceCxx from "NativePerformanceCxx" /* 153 */;
import polyfillObjectProperty from "polyfillObjectProperty" /* 174 */;
import _mod179 from "module_179" /* 179 */;
import _mod188 from "module_188" /* 188 */;
import _mod195 from "module_195" /* 195 */;
import _mod198 from "module_198" /* 198 */;
import Alert from "Alert" /* 230 */;
import polyfillObjectProperty2 from "polyfillObjectProperty" /* 234 */;
import _mod235 from "module_235" /* 235 */;
import __fetchSegment from "__fetchSegment" /* 241 */;
import AppRegistry from "AppRegistry" /* 244 */;

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
    const obj = setUpDOM;
    if (obj2.enableIntersectionObserverByDefault()) {
      let tmpResult = tmp(262);
      tmpResult.default();
    }
    tmpResult = tmp(27);
    if (tmpResult.enableMutationObserverByDefault()) {
      tmp(267).default();
      const tmpResult1 = tmp(267);
    }
    obj2 = javaScriptFlagGetter;
  }
};