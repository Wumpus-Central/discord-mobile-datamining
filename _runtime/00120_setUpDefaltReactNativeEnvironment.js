// _runtime/00120_setUpDefaltReactNativeEnvironment.js
import { javaScriptFlagGetter } from "00027_javaScriptFlagGetter.js";
import { env } from "00121_env.js";
import { setUpDOM } from "00122_setUpDOM.js";
import { NativePerformanceCxx } from "00153_NativePerformanceCxx.js";
import { polyfillObjectProperty } from "00174_polyfillObjectProperty.js";
import { Alert } from "00230_Alert.js";
import { polyfillObjectProperty } from "00234_polyfillObjectProperty.js";
import { __fetchSegment } from "00241___fetchSegment.js";
import { AppRegistry } from "00244_AppRegistry.js";
import { 00179__ } from "metro/00179__.js";
import { 00188__ } from "metro/00188__.js";
import { 00195__ } from "metro/00195__.js";
import { 00198__ } from "metro/00198__.js";
import { 00235__ } from "metro/00235__.js";
const require = arg1;
const dependencyMap = arg6;
let c2 = false;
arg5.default = function setUpDefaltReactNativeEnvironment() {
  if (!c2) {
    c2 = true;
    env /* env */;
    setUpDOM /* setUpDOM */.default();
    NativePerformanceCxx /* NativePerformanceCxx */;
    polyfillObjectProperty /* polyfillObjectProperty */;
    00179__;
    00188__;
    00195__;
    00198__;
    Alert /* Alert */;
    polyfillObjectProperty /* polyfillObjectProperty */;
    00235__;
    __fetchSegment /* __fetchSegment */;
    AppRegistry /* AppRegistry */;
    const obj = setUpDOM /* setUpDOM */;
    if (obj2.enableIntersectionObserverByDefault()) {
      let tmpResult = tmp(262);
      tmpResult.default();
    }
    tmpResult = tmp(27);
    if (tmpResult.enableMutationObserverByDefault()) {
      tmp(267).default();
      const tmpResult1 = tmp(267);
    }
    obj2 = javaScriptFlagGetter /* javaScriptFlagGetter */;
  }
};