// === Module 7982: MediaModalWebView ===

// Module 7982 (MediaModalWebView)
import LinkingDefault from "Linking" /* 4571 */;
import timing from "timing" /* 4897 */;
import WebViewDefault from "WebView" /* 7983 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, importDefault, num, num2, openURLResult, tmp6, url;

let c9;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let closure_3 = ["style", "playerState", "onDataReceived", "baseURL", "injectedJavaScript", "panGestureConfig"];
({ ActivityIndicator: metroRequire, View: metroImportDefault } = react_native);
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let str = "";
if (PlatformUtils.isIOS()) {
  str = "\n  window.addEventListener('click', function(event) {\n    window.ReactNativeWebView.postMessage(JSON.stringify({event: 'click'}));\n  });\n";
}
let obj = { UNREADY: 0, [0]: "UNREADY", READY: 1, [1]: "READY", ERRORED: 2, [2]: "ERRORED", UNSTARTED: 3, [3]: "UNSTARTED", ENDED: 4, [4]: "ENDED", PLAYING: 5, [5]: "PLAYING", PAUSED: 6, [6]: "PAUSED", BUFFERING: 7, [7]: "BUFFERING", VIDEO_CUED: 8, [8]: "VIDEO_CUED" };
let closure_12 = createStyles.createStyles({ loading: { top: 0, left: 0, right: 0, bottom: 0, position: "absolute", alignItems: "center", justifyContent: "center" } });
const __initData = { code: "function MediaModalWebViewTsx1(){const{withTiming,webviewOpacity}=this.__closure;return{opacity:withTiming(webviewOpacity.get())};}" };
const __initData2 = { code: "function MediaModalWebViewTsx2(){const{withTiming,loaderOpacity}=this.__closure;return{opacity:withTiming(loaderOpacity.get())};}" };
const __initData3 = { code: "function MediaModalWebViewTsx3(){const{withTiming,webviewOpacity}=this.__closure;return{opacity:withTiming(webviewOpacity.get())};}" };
const __initData4 = { code: "function MediaModalWebViewTsx4(){const{withTiming,loaderOpacity}=this.__closure;return{opacity:withTiming(loaderOpacity.get())};}" };
const forwardRef = react.forwardRef;
const memoResult = react.memo(forwardRef(ReactCompilerGating.isReactCompilerEnabled() ? ((onDataReceived, ref) => {
  let closure_0;
  let closure_1;
  let closure_2;
  let injectedJavaScript;
  let panGestureConfig;
  let playerState;
  let sharedValue;
  let style;
  let tmp4;
  let tmp5;
  let tmp9;
  let tmp = _require;
  let obj = require("react");
  const cResult = obj.c(38);
  if (cResult[0] !== onDataReceived) {
    ({ style, playerState } = onDataReceived);
    closure_3 = playerState;
    onDataReceived = onDataReceived.onDataReceived;
    importDefault = onDataReceived;
    const baseURL = onDataReceived.baseURL;
    _require = baseURL;
    ({ injectedJavaScript, panGestureConfig } = onDataReceived);
    dependencyMap = panGestureConfig;
    const tmp13 = sharedValue(onDataReceived, closure_3);
    cResult[0] = onDataReceived;
    cResult[1] = baseURL;
    cResult[2] = injectedJavaScript;
    class O {
      constructor() {
        obj = { opacity: null };
        obj2 = closure_0(closure_2[9]);
        obj.opacity = obj2.withTiming(closure_5.get());
        return obj;
      }
    }
    cResult[3] = onDataReceived;
    cResult[4] = panGestureConfig;
    cResult[5] = playerState;
    cResult[6] = tmp13;
    cResult[7] = style;
    tmp9 = tmp13;
    class U {
      constructor() {
        obj = { opacity: null };
        obj2 = closure_0(closure_2[9]);
        obj.opacity = obj2.withTiming(closure_4.get());
        return obj;
      }
    }
    tmp5 = injectedJavaScript;
    tmp4 = baseURL;
  } else {
    _require = cResult[1];
    tmp5 = cResult[2];
    importDefault = cResult[3];
    dependencyMap = cResult[4];
    closure_3 = cResult[5];
    tmp9 = cResult[6];
  }
  closure_12();
  const tmpResult = tmp(4618);
  sharedValue = tmpResult.useSharedValue(1);
  const tmpResult4 = tmp(4618);
  const sharedValue1 = tmpResult4.useSharedValue(0);
  const tmpResult5 = tmp(4618);
  class O {
    constructor() {
      obj = { opacity: null };
      obj2 = closure_0(closure_2[9]);
      obj.opacity = obj2.withTiming(closure_5.get());
      return obj;
    }
  }
  let obj2 = { withTiming: tmp(4897).withTiming, webviewOpacity: sharedValue1 };
  O.__closure = obj2;
  O.__workletHash = 2179142865986;
  O.__initData = __initData;
  const animatedStyle = tmpResult5.useAnimatedStyle(O);
  const tmpResult6 = tmp(4618);
  class U {
    constructor() {
      obj = { opacity: null };
      obj2 = closure_0(closure_2[9]);
      obj.opacity = obj2.withTiming(closure_4.get());
      return obj;
    }
  }
  U.__closure = { withTiming: tmp(4897).withTiming, loaderOpacity: sharedValue };
  U.__workletHash = 7752174298017;
  U.__initData = __initData2;
  ({ withTiming: tmp(4897).withTiming, loaderOpacity: sharedValue });
  const animatedStyle1 = tmpResult6.useAnimatedStyle(U);
  if (cResult[8] === sharedValue) {
    if (cResult[9] === tmp8) {
      let tmp19;
      let tmp20;
      if (cResult[10] === sharedValue1) {
        tmp19 = cResult[11];
        tmp20 = cResult[12];
      }
      const effect = sharedValue1.useEffect(tmp19, tmp20);
      if (cResult[13] === tmp6) {
        let tmp23;
        if (cResult[14] === panGestureConfig) {
          tmp23 = cResult[15];
        }
        if (cResult[16] !== tmp4) {
          class G {
            constructor(arg0) {
              tmp = "about:blank" !== onDataReceived.url;
              if (tmp) {
                url = onDataReceived.url;
                tmp2 = closure_0;
                tmp = !url.startsWith(closure_0);
              }
              if (tmp) {
                tmp3 = null;
                tmp4 = null == onDataReceived.isTopFrame || onDataReceived.isTopFrame;
                tmp = tmp4;
              }
              flag = !tmp;
              if (tmp) {
                tmp5 = closure_1;
                tmp6 = closure_2;
                obj = closure_1(closure_2[10]);
                openURLResult = obj.openURL(onDataReceived.url);
                flag = false;
              }
              return flag;
            }
          }
          cResult[16] = tmp4;
          class V {
            constructor(arg0) {
              parsed = JSON.parse(onDataReceived.nativeEvent.data);
              if (null != parsed) {
                str = "click";
                if ("click" === parsed.event) {
                  tmp3 = closure_2;
                  ({ overlayEnabled, overlayEnabled: overlayEnabled2 } = closure_2);
                  result = overlayEnabled.set(!overlayEnabled2.get());
                }
                return;
              }
              tmp2 = closure_1(onDataReceived.nativeEvent.data);
              return;
            }
          }
        } else {
          class G {
            constructor(arg0) {
              tmp = "about:blank" !== onDataReceived.url;
              if (tmp) {
                url = onDataReceived.url;
                tmp2 = closure_0;
                tmp = !url.startsWith(closure_0);
              }
              if (tmp) {
                tmp3 = null;
                tmp4 = null == onDataReceived.isTopFrame || onDataReceived.isTopFrame;
                tmp = tmp4;
              }
              flag = !tmp;
              if (tmp) {
                tmp5 = closure_1;
                tmp6 = closure_2;
                obj = closure_1(closure_2[10]);
                openURLResult = obj.openURL(onDataReceived.url);
                flag = false;
              }
              return flag;
            }
          }
        }
        const _Symbol = Symbol;
        class V {
          constructor(arg0) {
            parsed = JSON.parse(onDataReceived.nativeEvent.data);
            if (null != parsed) {
              str = "click";
              if ("click" === parsed.event) {
                tmp3 = closure_2;
                ({ overlayEnabled, overlayEnabled: overlayEnabled2 } = closure_2);
                result = overlayEnabled.set(!overlayEnabled2.get());
              }
              return;
            }
            tmp2 = closure_1(onDataReceived.nativeEvent.data);
            return;
          }
        }
        if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
          class G {
            constructor(arg0) {
              tmp = "about:blank" !== onDataReceived.url;
              if (tmp) {
                url = onDataReceived.url;
                tmp2 = closure_0;
                tmp = !url.startsWith(closure_0);
              }
              if (tmp) {
                tmp3 = null;
                tmp4 = null == onDataReceived.isTopFrame || onDataReceived.isTopFrame;
                tmp = tmp4;
              }
              flag = !tmp;
              if (tmp) {
                tmp5 = closure_1;
                tmp6 = closure_2;
                obj = closure_1(closure_2[10]);
                openURLResult = obj.openURL(onDataReceived.url);
                flag = false;
              }
              return flag;
            }
          }
          cResult[18] = tmp27;
        } else {
          class G {
            constructor(arg0) {
              tmp = "about:blank" !== onDataReceived.url;
              if (tmp) {
                url = onDataReceived.url;
                tmp2 = closure_0;
                tmp = !url.startsWith(closure_0);
              }
              if (tmp) {
                tmp3 = null;
                tmp4 = null == onDataReceived.isTopFrame || onDataReceived.isTopFrame;
                tmp = tmp4;
              }
              flag = !tmp;
              if (tmp) {
                tmp5 = closure_1;
                tmp6 = closure_2;
                obj = closure_1(closure_2[10]);
                openURLResult = obj.openURL(onDataReceived.url);
                flag = false;
              }
              return flag;
            }
          }
        }
        if (cResult[19] !== animatedStyle) {
          class G {
            constructor(arg0) {
              tmp = "about:blank" !== onDataReceived.url;
              if (tmp) {
                url = onDataReceived.url;
                tmp2 = closure_0;
                tmp = !url.startsWith(closure_0);
              }
              if (tmp) {
                tmp3 = null;
                tmp4 = null == onDataReceived.isTopFrame || onDataReceived.isTopFrame;
                tmp = tmp4;
              }
              flag = !tmp;
              if (tmp) {
                tmp5 = closure_1;
                tmp6 = closure_2;
                obj = closure_1(closure_2[10]);
                openURLResult = obj.openURL(onDataReceived.url);
                flag = false;
              }
              return flag;
            }
          }
          tmp29[0] = animatedStyle;
          tmp29[1] = tmp27;
          class V {
            constructor(arg0) {
              parsed = JSON.parse(onDataReceived.nativeEvent.data);
              if (null != parsed) {
                str = "click";
                if ("click" === parsed.event) {
                  tmp3 = closure_2;
                  ({ overlayEnabled, overlayEnabled: overlayEnabled2 } = closure_2);
                  result = overlayEnabled.set(!overlayEnabled2.get());
                }
                return;
              }
              tmp2 = closure_1(onDataReceived.nativeEvent.data);
              return;
            }
          }
          cResult[20] = tmp29;
        } else {
          class G {
            constructor(arg0) {
              tmp = "about:blank" !== onDataReceived.url;
              if (tmp) {
                url = onDataReceived.url;
                tmp2 = closure_0;
                tmp = !url.startsWith(closure_0);
              }
              if (tmp) {
                tmp3 = null;
                tmp4 = null == onDataReceived.isTopFrame || onDataReceived.isTopFrame;
                tmp = tmp4;
              }
              flag = !tmp;
              if (tmp) {
                tmp5 = closure_1;
                tmp6 = closure_2;
                obj = closure_1(closure_2[10]);
                openURLResult = obj.openURL(onDataReceived.url);
                flag = false;
              }
              return flag;
            }
          }
        }
        const _HermesInternal = HermesInternal;
        const combined = "" + tmp5 + "\n" + str;
        if (cResult[21] === tmp23) {
          class G {
            constructor(arg0) {
              tmp = "about:blank" !== onDataReceived.url;
              if (tmp) {
                url = onDataReceived.url;
                tmp2 = closure_0;
                tmp = !url.startsWith(closure_0);
              }
              if (tmp) {
                tmp3 = null;
                tmp4 = null == onDataReceived.isTopFrame || onDataReceived.isTopFrame;
                tmp = tmp4;
              }
              flag = !tmp;
              if (tmp) {
                tmp5 = closure_1;
                tmp6 = closure_2;
                obj = closure_1(closure_2[10]);
                openURLResult = obj.openURL(onDataReceived.url);
                flag = false;
              }
              return flag;
            }
          }
        }
        const obj4 = { injectedJavaScript: combined, bounces: false, ref, scrollEnabled: false, javaScriptEnabled: true, onMessage: tmp23, allowsInlineMediaPlayback: true, onShouldStartLoadWithRequest: G };
        class O {
          constructor() {
            obj = { opacity: null };
            obj2 = closure_0(closure_2[9]);
            obj.opacity = obj2.withTiming(closure_5.get());
            return obj;
          }
        }
        const tmp36 = WebViewDefault;
        const merged = Object.assign(tmp9);
        let flag = false;
        class U {
          constructor() {
            obj = { opacity: null };
            obj2 = closure_0(closure_2[9]);
            obj.opacity = obj2.withTiming(closure_4.get());
            return obj;
          }
        }
        cResult[21] = tmp23;
        cResult[22] = G;
        cResult[23] = tmp9;
        cResult[24] = ref;
        const tmp39 = closure_8(tmp36, obj4);
        class N {
          constructor() {
            tmp = closure_3;
            tmp2 = closure_11;
            tmp3 = closure_3 !== closure_11.BUFFERING && tmp !== tmp2.PLAYING && tmp !== tmp2.ERRORED;
            if (!tmp3) {
              tmp4 = closure_4;
              num = 0;
              result = closure_4.set(0);
              tmp6 = closure_5;
              num2 = 1;
              result1 = closure_5.set(1);
            }
            return;
          }
        }
        cResult[26] = tmp39;
      }
      class V {
        constructor(arg0) {
          parsed = JSON.parse(onDataReceived.nativeEvent.data);
          if (null != parsed) {
            str = "click";
            if ("click" === parsed.event) {
              tmp3 = closure_2;
              ({ overlayEnabled, overlayEnabled: overlayEnabled2 } = closure_2);
              result = overlayEnabled.set(!overlayEnabled2.get());
            }
            return;
          }
          tmp2 = closure_1(onDataReceived.nativeEvent.data);
          return;
        }
      }
      cResult[13] = tmp6;
      cResult[14] = panGestureConfig;
      cResult[15] = V;
      tmp23 = V;
    }
  }
  class N {
    constructor() {
      tmp = closure_3;
      tmp2 = closure_11;
      tmp3 = closure_3 !== closure_11.BUFFERING && tmp !== tmp2.PLAYING && tmp !== tmp2.ERRORED;
      if (!tmp3) {
        tmp4 = closure_4;
        num = 0;
        result = closure_4.set(0);
        tmp6 = closure_5;
        num2 = 1;
        result1 = closure_5.set(1);
      }
      return;
    }
  }
  const items = [tmp8, sharedValue, sharedValue1];
  cResult[8] = sharedValue;
  cResult[9] = tmp8;
  cResult[10] = sharedValue1;
  cResult[11] = N;
  cResult[12] = items;
  tmp20 = items;
  tmp19 = N;
}) : ((playerState, ref) => {
  let injectedJavaScript;
  let items3;
  let items4;
  let items5;
  let obj9;
  let style;
  let tmp15;
  playerState = playerState.playerState;
  const onDataReceived = playerState.onDataReceived;
  const baseURL = playerState.baseURL;
  const panGestureConfig = playerState.panGestureConfig;
  ({ style, injectedJavaScript } = playerState);
  const merged = Object.assign(playerState, Object.assign({ style: 0, playerState: 0, onDataReceived: 0, baseURL: 0, injectedJavaScript: 0, panGestureConfig: 0 }));
  let tmp3 = baseURL;
  const tmp2 = closure_12();
  let obj = playerState(baseURL[8]);
  const sharedValue = obj.useSharedValue(1);
  let obj2 = playerState(baseURL[8]);
  const sharedValue1 = obj2.useSharedValue(0);
  const obj3 = playerState(baseURL[8]);
  class T {
    constructor() {
      let obj2;
      const obj = { opacity: obj2.withTiming(sharedValue1.get()) };
      obj2 = timing;
      return obj;
    }
  }
  T.__closure = { withTiming: playerState(baseURL[9]).withTiming, webviewOpacity: sharedValue1 };
  T.__workletHash = 12268127790848;
  T.__initData = __initData3;
  ({ withTiming: playerState(baseURL[9]).withTiming, webviewOpacity: sharedValue1 });
  const animatedStyle = obj3.useAnimatedStyle(T);
  const fn = function f() {
    let obj2;
    const obj = { opacity: obj2.withTiming(sharedValue.get()) };
    obj2 = timing;
    return obj;
  };
  const obj5 = playerState(baseURL[8]);
  fn.__closure = { withTiming: playerState(baseURL[9]).withTiming, loaderOpacity: sharedValue };
  fn.__workletHash = 3523153039463;
  fn.__initData = __initData4;
  const items = [playerState, sharedValue, sharedValue1];
  ({ withTiming: playerState(baseURL[9]).withTiming, loaderOpacity: sharedValue });
  const animatedStyle1 = obj5.useAnimatedStyle(fn);
  const effect = sharedValue1.useEffect(() => {
    const tmp3 = playerState !== obj.BUFFERING && playerState !== obj.PLAYING && playerState !== obj.ERRORED;
    if (!tmp3) {
      const result = sharedValue.set(0);
      const result1 = sharedValue1.set(1);
    }
  }, items);
  const items1 = [onDataReceived, panGestureConfig];
  const items2 = [baseURL];
  const callback = sharedValue1.useCallback((nativeEvent) => {
    let overlayEnabled;
    let overlayEnabled2;
    const parsed = JSON.parse(nativeEvent.nativeEvent.data);
    if (null != parsed) {
      if ("click" === parsed.event) {
        ({ overlayEnabled, overlayEnabled: overlayEnabled2 } = panGestureConfig);
        const result = overlayEnabled.set(!overlayEnabled2.get());
      }
    }
    onDataReceived(nativeEvent.nativeEvent.data);
  }, items1);
  const obj7 = { style, children: items4 };
  const callback1 = sharedValue1.useCallback((url) => {
    let tmp = "about:blank" !== url.url;
    if (tmp) {
      url = url.url;
      tmp = !url.startsWith(baseURL);
    }
    if (tmp) {
      tmp = null == url.isTopFrame || url.isTopFrame;
    }
    let flag = !tmp;
    if (tmp) {
      const obj = LinkingDefault;
      obj.openURL(url.url);
      flag = false;
    }
    return flag;
  }, items2);
  const obj8 = { style: items3, children: closure_8(tmp15, obj9) };
  items3 = [animatedStyle, { flex: 1 }];
  const View = onDataReceived(baseURL[8]).View;
  obj9 = { injectedJavaScript: "" + injectedJavaScript + "\n" + str, bounces: false, ref, scrollEnabled: false, javaScriptEnabled: true, onMessage: callback, allowsInlineMediaPlayback: true, mediaPlaybackRequiresUserAction: false, onShouldStartLoadWithRequest: callback1 };
  tmp15 = onDataReceived(baseURL[11]);
  const merged1 = Object.assign(merged);
  items4 = [closure_8(View, obj8), ];
  let tmp13Result = playerState !== obj.PLAYING && playerState !== obj.PAUSED;
  const tmp14 = onDataReceived;
  if (tmp13Result) {
    const obj10 = { style: items5, children: closure_8(closure_6, { color: "white", size: "large" }) };
    items5 = [animatedStyle1, tmp2.loading];
    const View2 = tmp14(tmp3[8]).View;
    tmp13Result = closure_8(View2, obj10);
  }
  items4[1] = tmp13Result;
  return closure_9(closure_7, obj7);
})));
let result = size.fileFinishedImporting("modules/media_viewer/native/components/renderers/MediaModalWebView.tsx");

export default memoResult;
export const PlayerState = obj;