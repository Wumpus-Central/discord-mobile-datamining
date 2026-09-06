// === Module 120: ? ===

// Module 120
import _mod27 from "module_27" /* 27 */;
import env from "env" /* 121 */;
import _mod122 from "module_122" /* 122 */;
import NativePerformanceCxx from "NativePerformanceCxx" /* 153 */;
import _mod174 from "module_174" /* 174 */;
import _mod179 from "module_179" /* 179 */;
import _mod188 from "module_188" /* 188 */;
import _mod195 from "module_195" /* 195 */;
import _mod198 from "module_198" /* 198 */;
import Alert from "Alert" /* 230 */;
import _mod234 from "module_234" /* 234 */;
import _mod235 from "module_235" /* 235 */;
import __fetchSegment from "__fetchSegment" /* 241 */;
import AppRegistry from "AppRegistry" /* 244 */;
import _mod262 from "module_262" /* 262 */;
import _mod267 from "module_267" /* 267 */;

require = arg1;
const dependencyMap = arg6;
let c2 = false;

export default function setUpDefaltReactNativeEnvironment() {
  if (!c2) {
    c2 = true;
    env;
    _mod122.default();
    NativePerformanceCxx;
    _mod174;
    _mod179;
    _mod188;
    _mod195;
    _mod198;
    Alert;
    _mod234;
    _mod235;
    __fetchSegment;
    AppRegistry;
    if (obj2.enableIntersectionObserverByDefault()) {
      let tmpResult = _mod262;
      tmpResult.default();
    }
    tmpResult = _mod27;
    if (tmpResult.enableMutationObserverByDefault()) {
      _mod267.default();
      const tmpResult1 = _mod267;
    }
    obj2 = _mod27;
  }
};