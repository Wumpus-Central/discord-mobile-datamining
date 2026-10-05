// === Module 120: setUpDefaltReactNativeEnvironment ===

// Module 120 (setUpDefaltReactNativeEnvironment)
import javaScriptFlagGetter from "javaScriptFlagGetter" /* 27 */;
import _mod121 from "module_121" /* 121 */;
import setUpDOM from "setUpDOM" /* 122 */;
import NativePerformanceCxx from "NativePerformanceCxx" /* 153 */;
import defineLazyObjectProperty from "defineLazyObjectProperty" /* 174 */;
import _mod179 from "module_179" /* 179 */;
import _mod188 from "module_188" /* 188 */;
import _mod195 from "module_195" /* 195 */;
import _mod198 from "module_198" /* 198 */;
import _mod230 from "module_230" /* 230 */;
import defineLazyObjectProperty2 from "defineLazyObjectProperty" /* 234 */;
import _mod235 from "module_235" /* 235 */;
import SegmentFetcher from "SegmentFetcher" /* 241 */;
import AppRegistry from "AppRegistry" /* 244 */;
import setUpIntersectionObserver from "setUpIntersectionObserver" /* 262 */;
import setUpMutationObserver from "setUpMutationObserver" /* 267 */;

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
};