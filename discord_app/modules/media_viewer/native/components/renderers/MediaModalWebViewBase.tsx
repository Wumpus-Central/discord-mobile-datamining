// discord_app/modules/media_viewer/native/components/renderers/MediaModalWebViewBase.tsx
import LinkingDefault from "../../../../../lib/native/Linking.tsx";
import ReanimatedRexportDefault from "../../../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../../../design/animation/reanimated/timing/timing.tsx";
import WebViewDefault from "../../../../../../_runtime/07518_WebView.js";
import _objectWithoutProperties from "../../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
let closure_3 = ["baseURL", "injectedJavaScript", "onDataReceived", "onToggleOverlay", "playerState", "style", "ref"];
get_ActivityIndicator = fn(17);
({ ActivityIndicator: metroRequire, View: closure_7 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const PlatformUtils = fn(1382);
let str = "";
if (PlatformUtils.isIOS()) {
  str =
    "\n  window.addEventListener('click', function(event) {\n    window.ReactNativeWebView.postMessage(JSON.stringify({event: 'click'}));\n  });\n";
}
const PlayerState = {
  UNREADY: 0,
  [0]: "UNREADY",
  READY: 1,
  [1]: "READY",
  ERRORED: 2,
  [2]: "ERRORED",
  UNSTARTED: 3,
  [3]: "UNSTARTED",
  ENDED: 4,
  [4]: "ENDED",
  PLAYING: 5,
  [5]: "PLAYING",
  PAUSED: 6,
  [6]: "PAUSED",
  BUFFERING: 7,
  [7]: "BUFFERING",
  VIDEO_CUED: 8,
  [8]: "VIDEO_CUED",
};
const createStyles = fn(5091);
let closure_12 = createStyles.createStyles({
  loading: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
});
const __initData = {
  code: "function MediaModalWebViewBaseTsx1(){const{withTiming,webviewOpacity}=this.__closure;return{opacity:withTiming(webviewOpacity.get())};}",
};
const __initData2 = {
  code: "function MediaModalWebViewBaseTsx2(){const{withTiming,loaderOpacity}=this.__closure;return{opacity:withTiming(loaderOpacity.get())};}",
};
const __initData3 = {
  code: "function MediaModalWebViewBaseTsx3(){const{withTiming,webviewOpacity}=this.__closure;return{opacity:withTiming(webviewOpacity.get())};}",
};
const __initData4 = {
  code: "function MediaModalWebViewBaseTsx4(){const{withTiming,loaderOpacity}=this.__closure;return{opacity:withTiming(loaderOpacity.get())};}",
};
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/media_viewer/native/components/renderers/MediaModalWebViewBase.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function MediaModalWebViewBase(baseURL) {
        let obj = require("c");
        const cResult = obj.c(39);
        if (cResult[0] !== baseURL) {
          baseURL = baseURL.baseURL;
          _require = baseURL;
          ({ injectedJavaScript, onDataReceived } = baseURL);
          importDefault = onDataReceived;
          const onToggleOverlay = baseURL.onToggleOverlay;
          dependencyMap = onToggleOverlay;
          const playerState = baseURL.playerState;
          closure_3 = playerState;
          ({ style, ref } = baseURL);
          const tmp14 = sharedValue(baseURL, closure_3);
          cResult[0] = baseURL;
          cResult[1] = baseURL;
          cResult[2] = onDataReceived;
          cResult[3] = onToggleOverlay;
          class A {
            constructor() {
              obj = { opacity: null };
              obj2 = closure_0(closure_2[9]);
              obj.opacity = obj2.withTiming(closure_5.get());
              return obj;
            }
          }
          cResult[4] = playerState;
          cResult[5] = ref;
          cResult[6] = style;
          cResult[7] = injectedJavaScript;
          cResult[8] = tmp14;
          let tmp11 = tmp14;
          let tmp10 = injectedJavaScript;
          class U {
            constructor() {
              obj = { opacity: null };
              obj2 = closure_0(closure_2[9]);
              obj.opacity = obj2.withTiming(closure_4.get());
              return obj;
            }
          }
          let tmp8 = ref;
        } else {
          _require = cResult[1];
          importDefault = cResult[2];
          dependencyMap = cResult[3];
          closure_3 = cResult[4];
          tmp8 = cResult[5];
          tmp10 = cResult[7];
          tmp11 = cResult[8];
        }
        str = "";
        if (undefined !== tmp10) {
          str = tmp10;
        }
        const tmp15 = closure_12();
        sharedValue = require("ReanimatedRexport").useSharedValue(1);
        const tmpResult = require("ReanimatedRexport");
        const sharedValue1 = require("ReanimatedRexport").useSharedValue(0);
        const tmpResult4 = require("ReanimatedRexport");
        class A {
          constructor() {
            obj = { opacity: null };
            obj2 = closure_0(closure_2[9]);
            obj.opacity = obj2.withTiming(closure_5.get());
            return obj;
          }
        }
        const tmpResult5 = require("ReanimatedRexport");
        A.__closure = { withTiming: require("timing").withTiming, webviewOpacity: sharedValue1 };
        A.__workletHash = 10763244381367;
        A.__initData = __initData;
        const animatedStyle = tmpResult5.useAnimatedStyle(A);
        const obj2 = { withTiming: require("timing").withTiming, webviewOpacity: sharedValue1 };
        class U {
          constructor() {
            obj = { opacity: null };
            obj2 = closure_0(closure_2[9]);
            obj.opacity = obj2.withTiming(closure_4.get());
            return obj;
          }
        }
        const tmpResult6 = require("ReanimatedRexport");
        U.__closure = { withTiming: require("timing").withTiming, loaderOpacity: sharedValue };
        U.__workletHash = 335623571284;
        U.__initData = __initData2;
        const animatedStyle1 = tmpResult6.useAnimatedStyle(U);
        if (cResult[9] === sharedValue) {
          if (cResult[10] === tmp7) {
            if (cResult[11] === sharedValue1) {
              let tmp20 = cResult[12];
              let tmp21 = cResult[13];
            }
            const effect = sharedValue1.useEffect(tmp20, tmp21);
            if (cResult[14] === onDataReceived) {
              if (cResult[15] === tmp6) {
                let tmp24 = cResult[16];
              }
              if (cResult[17] !== tmp4) {
                const fn = function j(url) {
                  let tmp = "about:blank" !== url.url;
                  if (tmp) {
                    url = url.url;
                    tmp = !url.startsWith(closure_0);
                  }
                  if (tmp) {
                    tmp = null == url.isTopFrame || url.isTopFrame;
                    const tmp4 = null == url.isTopFrame || url.isTopFrame;
                  }
                  let flag = !tmp;
                  if (tmp) {
                    LinkingDefault.openURL(url.url);
                    flag = false;
                  }
                  return flag;
                };
                cResult[17] = tmp4;
                class V {
                  constructor(arg0) {
                    parsed = JSON.parse(baseURL.nativeEvent.data);
                    if (null != parsed) {
                      str = "click";
                      if ("click" === parsed.event) {
                        tmp3 = closure_2;
                        tmp4 = closure_2();
                      }
                      return;
                    }
                    tmp2 = closure_1(baseURL.nativeEvent.data);
                    return;
                  }
                }
                let tmp25 = fn;
              } else {
                tmp25 = cResult[18];
              }
              const _Symbol = Symbol;
              class V {
                constructor(arg0) {
                  parsed = JSON.parse(baseURL.nativeEvent.data);
                  if (null != parsed) {
                    str = "click";
                    if ("click" === parsed.event) {
                      tmp3 = closure_2;
                      tmp4 = closure_2();
                    }
                    return;
                  }
                  tmp2 = closure_1(baseURL.nativeEvent.data);
                  return;
                }
              }
              if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
                const obj4 = { flex: 1 };
                cResult[19] = obj4;
                let tmp27 = obj4;
              } else {
                tmp27 = cResult[19];
              }
              if (cResult[20] !== animatedStyle) {
                const items = [animatedStyle, tmp27];
                class V {
                  constructor(arg0) {
                    parsed = JSON.parse(baseURL.nativeEvent.data);
                    if (null != parsed) {
                      str = "click";
                      if ("click" === parsed.event) {
                        tmp3 = closure_2;
                        tmp4 = closure_2();
                      }
                      return;
                    }
                    tmp2 = closure_1(baseURL.nativeEvent.data);
                    return;
                  }
                }
                cResult[21] = items;
                let tmp28 = items;
              } else {
                tmp28 = cResult[21];
              }
              const _HermesInternal = HermesInternal;
              const combined = "" + str + "\n" + str;
              if (cResult[22] === tmp24) {
                if (cResult[23] === tmp25) {
                  if (cResult[24] === tmp8) {
                    if (cResult[25] === combined) {
                      if (cResult[26] === tmp11) {
                        let tmp31 = cResult[27];
                      }
                      if (cResult[28] === tmp28) {
                        if (cResult[29] === tmp31) {
                          let tmp39 = cResult[30];
                        }
                        if (cResult[31] === animatedStyle1) {
                          if (cResult[32] === tmp7) {
                            if (cResult[33] === tmp15) {
                              let tmp44 = cResult[34];
                            }
                            if (cResult[35] === tmp9) {
                              if (cResult[36] === tmp39) {
                                if (cResult[37] === tmp44) {
                                  let tmp49 = cResult[38];
                                }
                                return tmp49;
                              }
                            }
                            class V {
                              constructor(arg0) {
                                parsed = JSON.parse(baseURL.nativeEvent.data);
                                if (null != parsed) {
                                  str = "click";
                                  if ("click" === parsed.event) {
                                    tmp3 = closure_2;
                                    tmp4 = closure_2();
                                  }
                                  return;
                                }
                                tmp2 = closure_1(baseURL.nativeEvent.data);
                                return;
                              }
                            }
                            tmp52[0] = tmp9;
                            const items1 = [tmp39, tmp44];
                            tmp52[1] = items1;
                            const tmp53 = closure_9(closure_7, tmp52);
                            cResult[35] = tmp9;
                            cResult[36] = tmp39;
                            cResult[37] = tmp44;
                            cResult[38] = tmp53;
                            tmp49 = tmp53;
                          }
                        }
                        let tmp45 = tmp7 !== obj.PLAYING && tmp7 !== obj.PAUSED;
                        if (tmp45) {
                          const obj5 = { style: null, children: null };
                          const items2 = [,];
                          class V {
                            constructor(arg0) {
                              parsed = JSON.parse(baseURL.nativeEvent.data);
                              if (null != parsed) {
                                str = "click";
                                if ("click" === parsed.event) {
                                  tmp3 = closure_2;
                                  tmp4 = closure_2();
                                }
                                return;
                              }
                              tmp2 = closure_1(baseURL.nativeEvent.data);
                              return;
                            }
                          }
                          items2[1] = tmp15.loading;
                          obj5.style = items2;
                          obj5.children = closure_8(closure_6, { color: "white", size: "large" });
                          tmp45 = closure_8(ReanimatedRexportDefault.View, obj5);
                        }
                        class V {
                          constructor(arg0) {
                            parsed = JSON.parse(baseURL.nativeEvent.data);
                            if (null != parsed) {
                              str = "click";
                              if ("click" === parsed.event) {
                                tmp3 = closure_2;
                                tmp4 = closure_2();
                              }
                              return;
                            }
                            tmp2 = closure_1(baseURL.nativeEvent.data);
                            return;
                          }
                        }
                        cResult[31] = animatedStyle1;
                        cResult[32] = tmp7;
                        cResult[33] = tmp15;
                        cResult[34] = tmp45;
                        tmp44 = tmp45;
                      }
                      class V {
                        constructor(arg0) {
                          parsed = JSON.parse(baseURL.nativeEvent.data);
                          if (null != parsed) {
                            str = "click";
                            if ("click" === parsed.event) {
                              tmp3 = closure_2;
                              tmp4 = closure_2();
                            }
                            return;
                          }
                          tmp2 = closure_1(baseURL.nativeEvent.data);
                          return;
                        }
                      }
                      tmp42[0] = tmp28;
                      tmp42[1] = tmp31;
                      const tmp43 = closure_8(ReanimatedRexportDefault.View, tmp42);
                      cResult[28] = tmp28;
                      cResult[29] = tmp31;
                      cResult[30] = tmp43;
                      tmp39 = tmp43;
                    }
                  }
                }
              }
              const obj6 = {};
              const merged = Object.assign(tmp11);
              obj6.ref = tmp8;
              class A {
                constructor() {
                  obj = { opacity: null };
                  obj2 = closure_0(closure_2[9]);
                  obj.opacity = obj2.withTiming(closure_5.get());
                  return obj;
                }
              }
              obj6.bounces = false;
              obj6.injectedJavaScript = combined;
              obj6.javaScriptEnabled = true;
              obj6.mediaPlaybackRequiresUserAction = false;
              obj6.onMessage = tmp24;
              obj6.onShouldStartLoadWithRequest = tmp25;
              obj6.scrollEnabled = false;
              const tmp38 = closure_8(WebViewDefault, obj6);
              cResult[22] = tmp24;
              class U {
                constructor() {
                  obj = { opacity: null };
                  obj2 = closure_0(closure_2[9]);
                  obj.opacity = obj2.withTiming(closure_4.get());
                  return obj;
                }
              }
              cResult[23] = tmp25;
              cResult[24] = tmp8;
              cResult[25] = combined;
              cResult[26] = tmp11;
              cResult[27] = tmp38;
              tmp31 = tmp38;
            }
            class V {
              constructor(arg0) {
                parsed = JSON.parse(baseURL.nativeEvent.data);
                if (null != parsed) {
                  str = "click";
                  if ("click" === parsed.event) {
                    tmp3 = closure_2;
                    tmp4 = closure_2();
                  }
                  return;
                }
                tmp2 = closure_1(baseURL.nativeEvent.data);
                return;
              }
            }
            cResult[14] = onDataReceived;
            cResult[15] = tmp6;
            cResult[16] = V;
            tmp24 = V;
          }
        }
        class M {
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
        const items3 = [tmp7, sharedValue, sharedValue1];
        cResult[9] = sharedValue;
        cResult[10] = tmp7;
        cResult[11] = sharedValue1;
        cResult[12] = M;
        cResult[13] = items3;
        tmp21 = items3;
        tmp20 = M;
        const obj3 = { withTiming: require("timing").withTiming, loaderOpacity: sharedValue };
      }
    : function MediaModalWebViewBase(baseURL) {
        baseURL = baseURL.baseURL;
        str = baseURL.injectedJavaScript;
        if (str === undefined) {
          str = "";
        }
        const onDataReceived = baseURL.onDataReceived;
        const onToggleOverlay = baseURL.onToggleOverlay;
        const playerState = baseURL.playerState;
        ({ style, ref } = baseURL);
        const merged = Object.assign(
          baseURL,
          Object.assign({
            baseURL: 0,
            injectedJavaScript: 0,
            onDataReceived: 0,
            onToggleOverlay: 0,
            playerState: 0,
            style: 0,
            ref: 0,
          }),
        );
        let obj = baseURL(onToggleOverlay[8]);
        const sharedValue = obj.useSharedValue(1);
        const tmp2 = closure_12();
        let tmp3 = onToggleOverlay;
        const sharedValue1 = baseURL(onToggleOverlay[8]).useSharedValue(0);
        const obj2 = baseURL(onToggleOverlay[8]);
        class T {
          constructor() {
            obj = { opacity: null };
            obj2 = closure_0(closure_2[9]);
            obj.opacity = obj2.withTiming(closure_5.get());
            return obj;
          }
        }
        const obj3 = baseURL(onToggleOverlay[8]);
        T.__closure = { withTiming: baseURL(onToggleOverlay[9]).withTiming, webviewOpacity: sharedValue1 };
        T.__workletHash = 16767151708533;
        T.__initData = __initData3;
        const animatedStyle = obj3.useAnimatedStyle(T);
        const obj4 = { withTiming: baseURL(onToggleOverlay[9]).withTiming, webviewOpacity: sharedValue1 };
        const fn = function f() {
          const obj = { opacity: timing.withTiming(sharedValue.get()) };
          return obj;
        };
        const obj5 = baseURL(onToggleOverlay[8]);
        fn.__closure = { withTiming: baseURL(onToggleOverlay[9]).withTiming, loaderOpacity: sharedValue };
        fn.__workletHash = 8432104026386;
        fn.__initData = __initData4;
        const items = [playerState, sharedValue, sharedValue1];
        const animatedStyle1 = obj5.useAnimatedStyle(fn);
        const effect = sharedValue1.useEffect(() => {
          if (!tmp3) {
            const result = sharedValue.set(0);
            const result1 = sharedValue1.set(1);
          }
          tmp3 = playerState !== obj.BUFFERING && playerState !== obj.PLAYING && playerState !== obj.ERRORED;
        }, items);
        const items1 = [onDataReceived, onToggleOverlay];
        const items2 = [baseURL];
        const callback = sharedValue1.useCallback((nativeEvent) => {
          const parsed = JSON.parse(nativeEvent.nativeEvent.data);
          if (null != parsed) {
            if ("click" === parsed.event) {
              onToggleOverlay();
            }
          }
          onDataReceived(nativeEvent.nativeEvent.data);
        }, items1);
        const obj7 = { style, children: null };
        const callback1 = sharedValue1.useCallback((url) => {
          let tmp = "about:blank" !== url.url;
          if (tmp) {
            url = url.url;
            tmp = !url.startsWith(baseURL);
          }
          if (tmp) {
            tmp = null == url.isTopFrame || url.isTopFrame;
            const tmp4 = null == url.isTopFrame || url.isTopFrame;
          }
          let flag = !tmp;
          if (tmp) {
            LinkingDefault.openURL(url.url);
            flag = false;
          }
          return flag;
        }, items2);
        const obj8 = { style: null, children: null };
        const items3 = [animatedStyle, { flex: 1 }];
        obj8.style = items3;
        const obj9 = {};
        const obj6 = { withTiming: baseURL(onToggleOverlay[9]).withTiming, loaderOpacity: sharedValue };
        const tmp14 = onDataReceived;
        const merged1 = Object.assign(merged);
        obj9.ref = ref;
        obj9.allowsInlineMediaPlayback = true;
        obj9.bounces = false;
        obj9.injectedJavaScript = "" + str + "\n" + str;
        obj9.javaScriptEnabled = true;
        obj9.mediaPlaybackRequiresUserAction = false;
        obj9.onMessage = callback;
        obj9.onShouldStartLoadWithRequest = callback1;
        obj9.scrollEnabled = false;
        obj8.children = closure_8(onDataReceived(onToggleOverlay[11]), obj9);
        const items4 = [closure_8(onDataReceived(onToggleOverlay[8]).View, obj8)];
        let tmp13Result = playerState !== obj.PLAYING && playerState !== obj.PAUSED;
        if (tmp13Result) {
          const obj10 = { style: null, children: null };
          const items5 = [animatedStyle1, tmp2.loading];
          obj10.style = items5;
          obj10.children = closure_8(closure_6, { color: "white", size: "large" });
          tmp13Result = closure_8(tmp14(tmp3[8]).View, obj10);
        }
        items4[1] = tmp13Result;
        obj7.children = items4;
        return closure_9(closure_7, obj7);
      },
);
export { PlayerState };
