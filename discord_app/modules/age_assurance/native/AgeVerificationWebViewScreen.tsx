// discord_app/modules/age_assurance/native/AgeVerificationWebViewScreen.tsx
import LoggerDefault from "../../debug/Logger.tsx";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import LinkingDefault from "../../../lib/native/Linking.tsx";
import NavigationRouteUtils from "../../main_tabs_v2/helpers/NavigationRouteUtils.native.tsx";
import AgeVerificationUtils from "../AgeVerificationUtils.tsx";
import AgeVerificationURLActionCreators from "../AgeVerificationURLActionCreators.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
let closure_6 = fn(5914).AGE_VERIFICATION_MODAL_KEY;
const AgeVerificationIncodeWebViewConstants = fn(7493);
({
  AgeVerificationIncodeResultStatus: closure_7,
  buildIncodeFallbackSessionInjection: closure_8,
  parseIncodeWebViewMessage: closure_9,
} = AgeVerificationIncodeWebViewConstants);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
let closure_12 = new LoggerDefault("AgeVerificationWebViewScreen");
let c13 = 15000;
const createStyles = fn(5090);
let obj2 = { container: null, loadingOverlay: null, webView: null };
const tmp4 = new LoggerDefault("AgeVerificationWebViewScreen");
obj2.container = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
const rect = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
};
obj2.loadingOverlay = rect;
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
obj2.webView = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
let closure_14 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
const size = fn(2);
let result = size.fileFinishedImporting("modules/age_assurance/native/AgeVerificationWebViewScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function AgeVerificationWebViewScreen(onClose) {
      const cResult = onComplete(ref[10]).c(35);
      ({ webviewUrl, onComplete } = onClose);
      onClose = onClose.onClose;
      const injectedJavaScriptBeforeContentLoaded = onClose.injectedJavaScriptBeforeContentLoaded;
      noop.useRef(null);
      ref = noop.useRef(false);
      noop = noop.useRef(false);
      let obj = onComplete(ref[10]);
      let obj2 = noop;
      [r10028, View] = ref(noop.useState(true), 2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function v() {
          if (!ref2.current) {
            tmp.current = true;
            View(false);
          }
        };
        cResult[0] = fn;
        let first = fn;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        class R {
          constructor() {
            closure_0 = setTimeout(() => {
              if (!ref.current) {
                const obj = { timeoutMs };
                logger.warn("WebView initial load timed out", obj);
              }
              first();
            }, closure_1_13);
            return () => clearTimeout(closure_0);
          }
        }
        const items = [first];
        cResult[1] = R;
        cResult[2] = items;
        let tmp8 = items;
      } else {
        class R {
          constructor() {
            closure_0 = setTimeout(() => {
              if (!ref.current) {
                const obj = { timeoutMs };
                logger.warn("WebView initial load timed out", obj);
              }
              first();
            }, closure_1_13);
            return () => clearTimeout(closure_0);
          }
        }
        tmp8 = cResult[2];
      }
      const effect = obj2.useEffect(R, tmp8);
      if (cResult[3] === onClose) {
        class R {
          constructor() {
            closure_0 = setTimeout(() => {
              if (!ref.current) {
                const obj = { timeoutMs };
                logger.warn("WebView initial load timed out", obj);
              }
              first();
            }, closure_1_13);
            return () => clearTimeout(closure_0);
          }
        }
        if (cResult[6] !== M) {
          class F {
            constructor() {
              tmp = closure_0;
              tmp2 = closure_2;
              obj = closure_0(closure_2[11]);
              isModalOpenResult = obj.isModalOpen(closure_6);
              if (isModalOpenResult) {
                tmpResult = tmp(tmp2[12]);
                isModalOpenResult = tmpResult.isAgeVerified();
              }
              if (isModalOpenResult) {
                tmp4 = closure_7;
                tmp5 = closure_7();
              }
              return;
            }
          }
          cResult[6] = M;
          cResult[7] = F;
        } else {
          class F {
            constructor() {
              tmp = closure_0;
              tmp2 = closure_2;
              obj = closure_0(closure_2[11]);
              isModalOpenResult = obj.isModalOpen(closure_6);
              if (isModalOpenResult) {
                tmpResult = tmp(tmp2[12]);
                isModalOpenResult = tmpResult.isAgeVerified();
              }
              if (isModalOpenResult) {
                tmp4 = closure_7;
                tmp5 = closure_7();
              }
              return;
            }
          }
        }
        const watchAgeVerificationStatusChange = onComplete(tmp2[12]).useWatchAgeVerificationStatusChange(F);
        const _Symbol = Symbol;
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          class U {
            constructor(arg0) {
              current = closure_2.current;
              if (current != null) {
                tmp = onClose;
                tmp2 = closure_8;
                injectJavaScriptResult = current.injectJavaScript(closure_8(onClose));
              }
              return;
            }
          }
          cResult[8] = U;
        } else {
          class U {
            constructor(arg0) {
              current = closure_2.current;
              if (current != null) {
                tmp = onClose;
                tmp2 = closure_8;
                injectJavaScriptResult = current.injectJavaScript(closure_8(onClose));
              }
              return;
            }
          }
        }
        closure_8 = U;
        if (cResult[9] === M) {
          class U {
            constructor(arg0) {
              current = closure_2.current;
              if (current != null) {
                tmp = onClose;
                tmp2 = closure_8;
                injectJavaScriptResult = current.injectJavaScript(closure_8(onClose));
              }
              return;
            }
          }
          if (cResult[12] !== webviewUrl) {
            class U {
              constructor(arg0) {
                current = closure_2.current;
                if (current != null) {
                  tmp = onClose;
                  tmp2 = closure_8;
                  injectJavaScriptResult = current.injectJavaScript(closure_8(onClose));
                }
                return;
              }
            }
            let uRL = new URL(webviewUrl);
            cResult[12] = webviewUrl;
            cResult[13] = uRL;
            const tmp15 = uRL;
          } else {
            class U {
              constructor(arg0) {
                current = closure_2.current;
                if (current != null) {
                  tmp = onClose;
                  tmp2 = closure_8;
                  injectJavaScriptResult = current.injectJavaScript(closure_8(onClose));
                }
                return;
              }
            }
          }
          const origin = tmp15.origin;
          if (cResult[14] !== origin) {
            class U {
              constructor(arg0) {
                current = closure_2.current;
                if (current != null) {
                  tmp = onClose;
                  tmp2 = closure_8;
                  injectJavaScriptResult = current.injectJavaScript(closure_8(onClose));
                }
                return;
              }
            }
            cResult[14] = origin;
            cResult[15] = tmp22;
          } else {
            class U {
              constructor(arg0) {
                current = closure_2.current;
                if (current != null) {
                  tmp = onClose;
                  tmp2 = closure_8;
                  injectJavaScriptResult = current.injectJavaScript(closure_8(onClose));
                }
                return;
              }
            }
          }
          const tmp24 = closure_14();
          if (cResult[16] !== webviewUrl) {
            class U {
              constructor(arg0) {
                current = closure_2.current;
                if (current != null) {
                  tmp = onClose;
                  tmp2 = closure_8;
                  injectJavaScriptResult = current.injectJavaScript(closure_8(onClose));
                }
                return;
              }
            }
            tmp26[0] = webviewUrl;
            cResult[16] = webviewUrl;
            cResult[17] = tmp26;
          } else {
            class U {
              constructor(arg0) {
                current = closure_2.current;
                if (current != null) {
                  tmp = onClose;
                  tmp2 = closure_8;
                  injectJavaScriptResult = current.injectJavaScript(closure_8(onClose));
                }
                return;
              }
            }
          }
          if (cResult[18] !== tmp22) {
            class U {
              constructor(arg0) {
                current = closure_2.current;
                if (current != null) {
                  tmp = onClose;
                  tmp2 = closure_8;
                  injectJavaScriptResult = current.injectJavaScript(closure_8(onClose));
                }
                return;
              }
            }
            if (obj4.isIOS()) {
              class U {
                constructor(arg0) {
                  current = closure_2.current;
                  if (current != null) {
                    tmp = onClose;
                    tmp2 = closure_8;
                    injectJavaScriptResult = current.injectJavaScript(closure_8(onClose));
                  }
                  return;
                }
              }
            }
            cResult[18] = tmp22;
            cResult[19] = undefined;
          } else {
            class U {
              constructor(arg0) {
                current = closure_2.current;
                if (current != null) {
                  tmp = onClose;
                  tmp2 = closure_8;
                  injectJavaScriptResult = current.injectJavaScript(closure_8(onClose));
                }
                return;
              }
            }
          }
          const _Symbol2 = Symbol;
          if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
            class U {
              constructor(arg0) {
                current = closure_2.current;
                if (current != null) {
                  tmp = onClose;
                  tmp2 = closure_8;
                  injectJavaScriptResult = current.injectJavaScript(closure_8(onClose));
                }
                return;
              }
            }
            class H {
              constructor() {
                tmp = closure_6();
                return;
              }
            }
            cResult[20] = tmp31;
            cResult[21] = H;
          } else {
            class U {
              constructor(arg0) {
                current = closure_2.current;
                if (current != null) {
                  tmp = onClose;
                  tmp2 = closure_8;
                  injectJavaScriptResult = current.injectJavaScript(closure_8(onClose));
                }
                return;
              }
            }
            class H {
              constructor() {
                tmp = closure_6();
                return;
              }
            }
          }
          if (cResult[22] === tmp14) {
            class U {
              constructor(arg0) {
                current = closure_2.current;
                if (current != null) {
                  tmp = onClose;
                  tmp2 = closure_8;
                  injectJavaScriptResult = current.injectJavaScript(closure_8(onClose));
                }
                return;
              }
            }
          }
          let obj3 = {
            ref,
            allowsInlineMediaPlayback: true,
            mediaCapturePermissionGrantType: "grant",
            javaScriptEnabled: true,
            source: tmp26,
            onShouldStartLoadWithRequest: tmp27,
            onMessage: tmp14,
            onError: tmp31,
            onLoadEnd: H,
            injectedJavaScriptBeforeContentLoaded,
            style: null,
            containerStyle: null,
          };
          ({ webView: obj5.style, webView: obj5.containerStyle } = tmp24);
          cResult[22] = tmp14;
          cResult[23] = injectedJavaScriptBeforeContentLoaded;
          cResult[24] = tmp24.webView;
          cResult[25] = tmp26;
          cResult[26] = tmp27;
          class M {
            constructor() {
              if (!closure_3.current) {
                flag = true;
                tmp.current = true;
                tmp2 = onComplete;
                tmp3 = onComplete();
                tmp4 = onClose;
                tmp5 = onClose();
              }
              return;
            }
          }
          const tmp35 = closure_10(onClose(tmp2[16]), obj3);
        }
        const fn2 = function q(nativeEvent) {
          try {
            const tmp3 = options(nativeEvent.nativeEvent.data);
            if (null != tmp3) {
              if ("capture_complete" === tmp4.kind) {
                const result = AgeVerificationURLActionCreators.registerIncodeInterview(tmp3.interviewId);
                result
                  .then(() => {
                    const current = ref.current;
                    let isAgeVerifiedResult = !current;
                    if (!current) {
                      isAgeVerifiedResult = onComplete(ref[12]).isAgeVerified();
                      const obj = onComplete(ref[12]);
                    }
                    if (isAgeVerifiedResult) {
                      closure_1_7();
                    }
                  })
                  .catch((error) => {
                    logger.warn("Failed to register Incode interview from WebView", { error });
                    if (!ref.current) {
                      tmp2.current = true;
                      onClose();
                    }
                    const obj = { error };
                  });
                const nextPromise = result.then(() => {
                  const current = ref.current;
                  let isAgeVerifiedResult = !current;
                  if (!current) {
                    isAgeVerifiedResult = onComplete(ref[12]).isAgeVerified();
                    const obj = onComplete(ref[12]);
                  }
                  if (isAgeVerifiedResult) {
                    closure_1_7();
                  }
                });
              } else if ("fallback_request" === tmp4.kind) {
                const obj2 = { previousInterviewId: tmp4.previousInterviewId };
                const incodeSessionBootstrap = AgeVerificationURLActionCreators.requestIncodeSessionBootstrap(obj2);
                incodeSessionBootstrap
                  .then((incode_parameters) => {
                    incode_parameters = incode_parameters.incode_parameters;
                    let session_token;
                    if (incode_parameters != null) {
                      session_token = incode_parameters.session_token;
                    }
                    if (null != session_token) {
                      if (null != incode_parameters.interview_id) {
                        const obj = { sessionToken: null, interviewId: null };
                        ({ session_token: obj.sessionToken, interview_id: obj.interviewId } = incode_parameters);
                        closure_1_8(obj);
                      }
                    }
                    closure_1_8({ error: true });
                  })
                  .catch((error) => {
                    logger.warn("Failed to bootstrap Incode fallback session from WebView", { error });
                    closure_1_8({ error: true });
                  });
                const nextPromise1 = incodeSessionBootstrap.then((incode_parameters) => {
                  incode_parameters = incode_parameters.incode_parameters;
                  let session_token;
                  if (incode_parameters != null) {
                    session_token = incode_parameters.session_token;
                  }
                  if (null != session_token) {
                    if (null != incode_parameters.interview_id) {
                      const obj = { sessionToken: null, interviewId: null };
                      ({ session_token: obj.sessionToken, interview_id: obj.interviewId } = incode_parameters);
                      closure_1_8(obj);
                    }
                  }
                  closure_1_8({ error: true });
                });
              } else if (tmp4.status === React5.COMPLETED) {
                tmp10();
              } else if (!ref.current) {
                tmp8.current = true;
                tmp10 = onClose();
              }
            }
          } catch (tmp20) {
            const obj4 = { error: tmp20 };
            logger.warn("Failed to parse WebView message", obj4);
          }
        };
        cResult[9] = M;
        cResult[10] = onClose;
        cResult[11] = fn2;
        let tmpResult = onComplete(tmp2[12]);
      }
      class M {
        constructor() {
          if (!closure_3.current) {
            flag = true;
            tmp.current = true;
            tmp2 = onComplete;
            tmp3 = onComplete();
            tmp4 = onClose;
            tmp5 = onClose();
          }
          return;
        }
      }
      cResult[3] = onClose;
      cResult[4] = onComplete;
      cResult[5] = M;
      const tmp5 = ref(noop.useState(true), 2);
    }
  : function AgeVerificationWebViewScreen(webviewUrl) {
      webviewUrl = webviewUrl.webviewUrl;
      const onComplete = webviewUrl.onComplete;
      const onClose = webviewUrl.onClose;
      noop = undefined;
      c6 = undefined;
      ref = noop.useRef(null);
      noop = noop.useRef(false);
      const ref2 = noop.useRef(false);
      [tmp3, c6] = ref(noop.useState(true), 2);
      const callback = noop.useCallback(() => {
        if (!ref2.current) {
          tmp.current = true;
          _undefined(false);
        }
      }, []);
      const items = [callback];
      const effect = noop.useEffect(() => {
        const timeout = setTimeout(() => {
          if (!ref.current) {
            const obj = { timeoutMs };
            logger.warn("WebView initial load timed out", obj);
          }
          callback();
        }, timeoutMs);
        return () => clearTimeout(closure_0);
      }, items);
      const items1 = [onComplete, onClose];
      const callback1 = noop.useCallback(() => {
        if (!ref.current) {
          tmp.current = true;
          onComplete();
          onClose();
        }
      }, items1);
      const items2 = [callback1];
      const callback2 = noop.useCallback(() => {
        let isModalOpenResult = NavigationRouteUtils.isModalOpen(closure_6);
        if (isModalOpenResult) {
          isModalOpenResult = AgeVerificationUtils.isAgeVerified();
          const tmpResult = AgeVerificationUtils;
        }
        if (isModalOpenResult) {
          callback1();
        }
      }, items2);
      const tmp2 = ref(noop.useState(true), 2);
      const tmp8 = webviewUrl;
      const tmp9 = onClose;
      const watchAgeVerificationStatusChange = webviewUrl(onClose[12]).useWatchAgeVerificationStatusChange(callback2);
      const callback3 = noop.useCallback((arg0) => {
        const current = ref.current;
        if (current != null) {
          current.injectJavaScript(closure_2_8(arg0));
        }
      }, []);
      const items3 = [callback1, callback3, onClose];
      const items4 = [webviewUrl];
      const callback4 = noop.useCallback((nativeEvent) => {
        try {
          const tmp3 = options(nativeEvent.nativeEvent.data);
          if (null != tmp3) {
            if ("capture_complete" === tmp4.kind) {
              const result = AgeVerificationURLActionCreators.registerIncodeInterview(tmp3.interviewId);
              result
                .then(() => {
                  const current = ref.current;
                  let isAgeVerifiedResult = !current;
                  if (!current) {
                    isAgeVerifiedResult = webviewUrl(onClose[12]).isAgeVerified();
                    const obj = webviewUrl(onClose[12]);
                  }
                  if (isAgeVerifiedResult) {
                    callback1();
                  }
                })
                .catch((error) => {
                  logger.warn("Failed to register Incode interview from WebView", { error });
                  if (!ref.current) {
                    tmp2.current = true;
                    onClose();
                  }
                  const obj = { error };
                });
              const nextPromise = result.then(() => {
                const current = ref.current;
                let isAgeVerifiedResult = !current;
                if (!current) {
                  isAgeVerifiedResult = webviewUrl(onClose[12]).isAgeVerified();
                  const obj = webviewUrl(onClose[12]);
                }
                if (isAgeVerifiedResult) {
                  callback1();
                }
              });
            } else if ("fallback_request" === tmp4.kind) {
              const obj2 = { previousInterviewId: tmp4.previousInterviewId };
              const incodeSessionBootstrap = AgeVerificationURLActionCreators.requestIncodeSessionBootstrap(obj2);
              incodeSessionBootstrap
                .then((incode_parameters) => {
                  incode_parameters = incode_parameters.incode_parameters;
                  let session_token;
                  if (incode_parameters != null) {
                    session_token = incode_parameters.session_token;
                  }
                  if (null != session_token) {
                    if (null != incode_parameters.interview_id) {
                      const obj = { sessionToken: null, interviewId: null };
                      ({ session_token: obj.sessionToken, interview_id: obj.interviewId } = incode_parameters);
                      callback3(obj);
                    }
                  }
                  callback3({ error: true });
                })
                .catch((error) => {
                  logger.warn("Failed to bootstrap Incode fallback session from WebView", { error });
                  callback3({ error: true });
                });
              const nextPromise1 = incodeSessionBootstrap.then((incode_parameters) => {
                incode_parameters = incode_parameters.incode_parameters;
                let session_token;
                if (incode_parameters != null) {
                  session_token = incode_parameters.session_token;
                }
                if (null != session_token) {
                  if (null != incode_parameters.interview_id) {
                    const obj = { sessionToken: null, interviewId: null };
                    ({ session_token: obj.sessionToken, interview_id: obj.interviewId } = incode_parameters);
                    callback3(obj);
                  }
                }
                callback3({ error: true });
              });
            } else if (tmp4.status === React5.COMPLETED) {
              callback1();
            } else if (!ref.current) {
              tmp8.current = true;
              onClose();
            }
          }
        } catch (tmp20) {
          const obj4 = { error: tmp20 };
          logger.warn("Failed to parse WebView message", obj4);
        }
      }, items3);
      const memo = noop.useMemo(() => {
        const uRL = new URL(webviewUrl);
        return uRL.origin;
      }, items4);
      const items5 = [memo];
      const callback5 = noop.useCallback((isTopFrame) => {
        if (null != isTopFrame.isTopFrame) {
          if (!isTopFrame.isTopFrame) {
            return true;
          }
        }
        try {
          const _URL = URL;
          const uRL = new URL(isTopFrame.url);
          let flag2 = uRL.origin === memo;
          if (!flag2) {
            LinkingDefault.openURL(isTopFrame.url);
            flag2 = false;
          }
          return flag2;
        } catch (err) {}
      }, items5);
      const tmp15 = closure_14();
      let obj2 = { style: tmp15.container, children: null };
      const obj5 = {
        ref,
        allowsInlineMediaPlayback: true,
        mediaCapturePermissionGrantType: "grant",
        javaScriptEnabled: true,
        source: { uri: webviewUrl },
        onShouldStartLoadWithRequest: null,
        onMessage: null,
        onError: null,
        onLoadEnd: null,
        injectedJavaScriptBeforeContentLoaded: null,
        style: null,
        containerStyle: null,
      };
      let obj = webviewUrl(onClose[12]);
      const tmp19 = onComplete(onClose[16]);
      let tmp20;
      if (obj4.isIOS()) {
        tmp20 = callback5;
      }
      obj5.onShouldStartLoadWithRequest = tmp20;
      obj5.onMessage = callback4;
      obj5.onError = function onError(code) {
        logger.warn("WebView load error", { code: code.nativeEvent.code });
        callback();
      };
      obj5.onLoadEnd = function onLoadEnd() {
        callback();
      };
      obj5.injectedJavaScriptBeforeContentLoaded = webviewUrl.injectedJavaScriptBeforeContentLoaded;
      ({ webView: obj3.style, webView: obj3.containerStyle } = tmp15);
      const items6 = [memo(tmp19, obj5)];
      if (tmp18Result) {
        const obj8 = { style: tmp15.loadingOverlay, children: tmp18(tmp8(tmp9[17]).ActivityIndicator, {}) };
        tmp18Result = tmp18(tmp17, obj8);
      }
      items6[1] = tmp18Result;
      obj2.children = items6;
      return closure_11(ref2, obj2);
    };
