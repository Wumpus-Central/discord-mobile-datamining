// _runtime/metro/00120__.js
import _mod27 from "00027__.js";
import env from "../00121_env.js";
import _mod122 from "00122__.js";
import NativePerformanceCxx from "../00153_NativePerformanceCxx.js";
import _mod174 from "00174__.js";
import _mod179 from "00179__.js";
import _mod188 from "00188__.js";
import _mod195 from "00195__.js";
import _mod198 from "00198__.js";
import Alert from "../00230_Alert.js";
import _mod234 from "00234__.js";
import _mod235 from "00235__.js";
import __fetchSegment from "../00241___fetchSegment.js";
import AppRegistry from "../00244_AppRegistry.js";
import _mod262 from "00262__.js";
import _mod267 from "00267__.js";

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
}
