// _runtime/00120_setUpDefaltReactNativeEnvironment.js
import javaScriptFlagGetter from "00027_javaScriptFlagGetter.js";
import _mod121 from "metro/00121__.js";
import setUpDOM from "00122_setUpDOM.js";
import NativePerformanceCxx from "00153_NativePerformanceCxx.js";
import defineLazyObjectProperty from "00174_defineLazyObjectProperty.js";
import _mod179 from "metro/00179__.js";
import _mod188 from "metro/00188__.js";
import _mod195 from "metro/00195__.js";
import _mod198 from "metro/00198__.js";
import _mod230 from "metro/00230__.js";
import defineLazyObjectProperty2 from "00234_defineLazyObjectProperty.js";
import _mod235 from "metro/00235__.js";
import SegmentFetcher from "00241_SegmentFetcher.js";
import AppRegistry from "00244_AppRegistry.js";
import setUpIntersectionObserver from "00262_setUpIntersectionObserver.js";
import setUpMutationObserver from "00267_setUpMutationObserver.js";

let c2 = false;

export default function setUpDefaltReactNativeEnvironment() {
  const tmp = c2;
  if (!tmp) {
    c2 = true;
    _mod121;
    const obj = setUpDOM;
    obj.default();
    NativePerformanceCxx;
    defineLazyObjectProperty;
    _mod179;
    _mod188;
    _mod195;
    _mod198;
    _mod230;
    defineLazyObjectProperty2;
    _mod235;
    SegmentFetcher;
    AppRegistry;
    const obj2 = javaScriptFlagGetter;
    if (obj2.enableIntersectionObserverByDefault()) {
      const tmp2Result = setUpIntersectionObserver;
      tmp2Result.default();
    }
    const tmp2Result3 = javaScriptFlagGetter;
    if (tmp2Result3.enableMutationObserverByDefault()) {
      const tmp2Result4 = setUpMutationObserver;
      tmp2Result4.default();
    }
  }
}
