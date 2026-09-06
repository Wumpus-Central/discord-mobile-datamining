// === Module 9642: EmbeddedActivityWebView ===

// Module 9642 (EmbeddedActivityWebView)
import LoggerDefault from "Logger" /* 3 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1109 */;
import util from "util" /* 1114 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import v1 from "v1" /* 1256 */;
import URLUtilsDefault from "URLUtils" /* 1365 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 4761 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 4904 */;
import usePreviousDefault from "usePrevious" /* 8272 */;
import WebView from "WebView" /* 8298 */;
import EmbeddedActivitiesNativeManagerDefault from "EmbeddedActivitiesNativeManager" /* 9515 */;
import getPostMessageJavaScriptDefault from "getPostMessageJavaScript" /* 9517 */;
import WebViewPostMessageTransportDefault from "WebViewPostMessageTransport" /* 9550 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import DeveloperActivityShelfStore from "DeveloperActivityShelfStore" /* 8855 */;

require = fn;
function getSafeArea(arg0, arg1) {
  let override = arg0;
  let num = arg1;
  if (null != arg0) {
    if (override.disable) {
      num = 0;
    } else if (null != override.override) {
      const _Math2 = Math;
      override = override.override;
      let bound = Math.max(0, override);
    } else {
      bound = arg1;
      if (null != override.offset) {
        const _Math = Math;
        bound = Math.max(0, arg1 + override.offset);
      }
    }
  }
  return num;
}
class BaseActivityWebView {
  constructor(arg0) {
    ({ hasIframeId, getOrCreateIframeId, releaseIframeId } = global);
    hasInvalidUrlError = global.hasInvalidUrlError;
    setHasInvalidUrlError = global.setHasInvalidUrlError;
    hadInvalidUrlError = global.hadInvalidUrlError;
    deepLinkQueryParams = global.deepLinkQueryParams;
    ({ onIframeMount, onIframeUnmount } = global);
    if (deepLinkQueryParams === undefined) {
      deepLinkQueryParams = {};
    }
    applicationId = global.applicationId;
    ({ queryParams, onActivityCrash } = global);
    onLoadError = global.onLoadError;
    referrerPolicy = global.referrerPolicy;
    isPipOrGridMode = global.isPipOrGridMode;
    webViewKey = global.webViewKey;
    ({ ignoreSilentHardwareSwitch, activityUrl, allowPopups } = global);
    if (ignoreSilentHardwareSwitch === undefined) {
      ignoreSilentHardwareSwitch = true;
    }
    safeAreasConfig = global.safeAreasConfig;
    channelId = global.channelId;
    guildId = global.guildId;
    activitySessionId = global.activitySessionId;
    closure_16 = undefined;
    closure_17 = undefined;
    closure_18 = undefined;
    closure_19 = undefined;
    closure_20 = undefined;
    closure_21 = undefined;
    closure_22 = undefined;
    closure_23 = undefined;
    closure_24 = undefined;
    closure_25 = undefined;
    closure_26 = undefined;
    closure_27 = undefined;
    closure_28 = undefined;
    closure_29 = undefined;
    closure_30 = undefined;
    closure_31 = undefined;
    closure_32 = undefined;
    closure_33 = undefined;
    obj2 = applicationId;
    tmp2 = hasIframeId;
    tmp3 = hasInvalidUrlError;
    tmp = activitySessionId();
    context = applicationId.useContext(hasIframeId(hasInvalidUrlError[12]).WebViewContext);
    tmp5 = hadInvalidUrlError;
    first = hadInvalidUrlError(applicationId.useState(() => require()), 1)[0];
    first1 = hadInvalidUrlError(applicationId.useState(() => {
      if (null != webViewKey) {
        let v4Result = importDefault();
      } else {
        v4Result = v1.v4();
      }
      return v4Result;
    }), 1)[0];
    closure_16 = first1;
    tmp8 = hadInvalidUrlError(applicationId.useState(null), 2);
    url = tmp8[0];
    closure_17 = url;
    closure_18 = tmp8[1];
    items = [];
    items[0] = webViewKey;
    memo = applicationId.useMemo(() => {
      let webViewProxy;
      if (null != webViewKey) {
        webViewProxy = WebView.getWebViewProxy(tmp);
      }
      return webViewProxy;
    }, items);
    closure_19 = memo;
    tmp10 = hadInvalidUrlError(applicationId.useState(null), 2);
    [str, closure_20] = tmp10;
    tmp11 = getOrCreateIframeId;
    obj = { onIframeMount, onIframeUnmount, isNewIframe: null, isIframeRetiring: null };
    tmp13 = !first;
    tmp12 = getOrCreateIframeId(hasInvalidUrlError[15]);
    if (first) {
      tmp13 = null == webViewKey;
    }
    obj.isNewIframe = tmp13;
    obj.isIframeRetiring = null == webViewKey;
    tmp12Result = tmp12(first1, obj);
    rect = tmp11(tmp3[16])();
    closure_21 = rect;
    obj4 = releaseIframeId(tmp3[17]);
    obj1 = {};
    constants = obj4.getConstants();
    merged = Object.assign(queryParams);
    merged1 = Object.assign(deepLinkQueryParams);
    obj1.frame_id = first1;
    obj1.platform = referrerPolicy.MOBILE;
    obj1.mobile_app_version = constants.Version;
    tmp18 = tmp11(tmp3[18])({ allowPopups });
    closure_22 = tmp18;
    uRLSearchParams = new URLSearchParams(obj1);
    combined = "" + activityUrl + "?" + uRLSearchParams;
    closure_23 = combined;
    closure_24 = obj2.useRef(safeAreasConfig);
    items1 = [, , , ];
    items1[0] = combined;
    items1[1] = tmp18;
    items1[2] = onLoadError;
    items1[3] = referrerPolicy;
    effect = obj2.useEffect(() => {
      closure_0 = async function _loadHtml(arg0, value) {
        if (c7 === 2) {
          c7 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp5 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            let obj = { value, done: true };
            return obj;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            c7 = 2;
            if (0 === c6) {
              if (arg0 === 1) {
                c7 = 3;
                throw value;
              } else if (arg0 === 2) {
                c7 = 3;
                obj = { value, done: true };
                return obj;
              } else {
                closure_5 = tmp3;
                closure_4 = tmp2;
                closure_132_0 = undefined;
                rect = require("useStableSafeAreaInsets").getStableSafeAreaInsets();
                const current = ref.current;
                let left;
                if (current != null) {
                  left = current.left;
                }
                let left1;
                if (rect != null) {
                  left1 = rect.left;
                }
                c0 = left1;
                if (left1 == null) {
                  c0 = 0;
                }
                rect = { left: closure_2_18(left, c0), right: null, top: null, bottom: null };
                let right;
                if (current != null) {
                  right = current.right;
                }
                let right1;
                if (rect != null) {
                  right1 = rect.right;
                }
                c1 = right1;
                if (right1 == null) {
                  c1 = 0;
                }
                rect.right = closure_2_18(right, c1);
                let top;
                if (current != null) {
                  top = current.top;
                }
                let top1;
                if (rect != null) {
                  top1 = rect.top;
                }
                c2 = top1;
                if (top1 == null) {
                  c2 = 0;
                }
                rect.top = closure_2_18(top, c2);
                let bottom;
                if (current != null) {
                  bottom = current.bottom;
                }
                let bottom1;
                if (rect != null) {
                  bottom1 = rect.bottom;
                }
                c3 = bottom1;
                if (bottom1 == null) {
                  c3 = 0;
                }
                rect.bottom = closure_2_18(bottom, c3);
                const obj1 = { iFrameUri, iFrameSandboxAttributes, referrerPolicy, insets: rect, messageForDisallowedNavigationError: null };
                let tmp36;
                const obj7 = require("useStableSafeAreaInsets");
                if (!url) {
                  tmp36 = isPipOrGridMode;
                }
                obj1.messageForDisallowedNavigationError = tmp36;
                c6 = 1;
                c7 = 1;
                const obj2 = { value: require("createWebviewHtmlFile")(obj1), done: false };
                return obj2;
              }
            } else if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_132_0 = value;
              if (null != closure_132_0) {
                closure_1_20(closure_132_0);
              } else {
                onLoadError();
              }
              c7 = 3;
            }
          } catch (tmp37) {
            c7 = tmp;
            throw tmp37;
          }
        }
      };
      !(function loadHtml() {
        const self = this;
        const apply = closure_0.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      })();
    }, items1);
    items2 = [];
    items2[0] = applicationId;
    items3 = [];
    items3[0] = applicationId;
    callback = obj2.useCallback((nativeEvent) => {
      logger.warn("activity WebView error for appId " + applicationId + ". " + JSON.stringify(nativeEvent.nativeEvent));
    }, items2);
    items4 = [, , , , , , , ];
    items4[0] = applicationId;
    items4[1] = channelId;
    items4[2] = guildId;
    items4[3] = activitySessionId;
    items4[4] = first1;
    items4[5] = releaseIframeId;
    items4[6] = memo;
    items4[7] = onActivityCrash;
    callback1 = obj2.useCallback((nativeEvent) => {
      logger.warn("activity WebView render process gone for appId " + applicationId + ". " + JSON.stringify(nativeEvent.nativeEvent));
    }, items3);
    callback2 = obj2.useCallback(() => {
      logger.warn("activity WebView content process terminated for appId " + applicationId);
      let obj = { application_id: applicationId, channel_id: channelId, guild_id: guildId, activity_session_id: activitySessionId };
      obj.track(constants2.ACTIVITY_WEB_VIEW_CONTENT_PROCESS_TERMINATED, obj);
      const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
      obj = { id: first1 };
      ComponentDispatch.dispatch(constants.IFRAME_UNMOUNT, obj);
      releaseIframeId();
      if (null != memo) {
        memo.releaseWebView();
      }
      onActivityCrash();
    }, items4);
    tmp2Result = tmp2(tmp3[22]);
    items5 = [];
    items5[0] = onLoadError;
    stateFromStores = tmp2Result.useStateFromStores(items5, () => onLoadError.getUseActivityUrlOverride());
    closure_25 = stateFromStores;
    items6 = [, , ];
    items6[0] = combined;
    items6[1] = stateFromStores;
    items6[2] = setHasInvalidUrlError;
    effect1 = obj2.useEffect(() => {
      try {
        const _URL = URL;
        const uRL = new URL(combined);
        closure_18(uRL);
      } catch (tmp9) {
        if (stateFromStores) {
          setHasInvalidUrlError(true);
        } else {
          throw tmp9;
        }
      }
    }, items6);
    items7 = [, ];
    items7[0] = hadInvalidUrlError;
    items7[1] = hasInvalidUrlError;
    effect2 = obj2.useEffect(() => {
      let tmp = !hadInvalidUrlError;
      if (!hadInvalidUrlError) {
        tmp = hasInvalidUrlError;
      }
      if (tmp) {
        const obj = { title: null, body: null, confirmText: null };
        const intl = util.intl;
        obj.title = intl.string(util.t.PtobXW);
        const intl2 = util.intl;
        obj.body = intl2.string(util.t["55iAUT"]);
        const intl3 = util.intl;
        obj.confirmText = intl3.string(util.t.BddRzS);
        obj.show(obj);
      }
    }, items7);
    closure_26 = null;
    if (null == url) {
      tmp32 = closure_17;
      closure_27 = closure_17;
      flag = false;
      tmp5Result = tmp5(obj2.useState(false), 2);
      [tmp34, closure_28] = tmp5Result;
      tmp5Result1 = tmp5(obj2.useState([]), 2);
      first2 = tmp5Result1[0];
      closure_29 = first2;
      closure_30 = tmp5Result1[1];
      items8 = [, ];
      items8[0] = applicationId;
      items8[1] = closure_17;
      effect3 = obj2.useEffect(() => {
        if (closure_27) {
          function parseCsp(arg0, str) {
            const match = str.match(arg0);
            if (null !== match) {
              if (match.length >= 2) {
                const parts = match[1].split(" ");
                const found = parts.filter((item) => !closure_1_0.includes(item));
                str = match[1];
              }
              return [];
            }
          }
          closure_2 = async function _fetchAndParseCSP(arg0, value) {
            if (c4 === 2) {
              c4 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp5 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                let obj = { value, done: true };
                return obj;
              } else {
                return { value: "HermesInternal", done: null };
              }
            } else {
              try {
                c4 = 2;
                if (0 === c3) {
                  if (arg0 === 1) {
                    c4 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c4 = 3;
                    obj = { value, done: true };
                    return obj;
                  } else {
                    closure_2 = tmp3;
                    closure_1 = tmp2;
                    closure_129_0 = undefined;
                    closure_129_1 = undefined;
                    closure_129_2 = undefined;
                    const _HermesInternal = HermesInternal;
                    combined = "https://" + applicationId + ".discordsays.com";
                    closure_129_0 = combined;
                    const HTTP = require("HTTPUtils").HTTP;
                    const obj1 = { url: null, rejectWithError: false };
                    const _HermesInternal2 = HermesInternal;
                    obj1.url = "" + combined + "/.discord/csp";
                    c3 = 1;
                    c4 = 1;
                    const obj2 = { value: HTTP.get(obj1), done: false };
                    return obj2;
                  }
                } else if (arg0 === 1) {
                  c4 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c4 = 3;
                  obj = { value, done: true };
                  return obj;
                } else {
                  closure_129_1 = value.headers["content-security-policy"];
                  const items = ["about:blank", "file://*", closure_129_0];
                  closure_0 = 3;
                  closure_0 = HermesBuiltin.arraySpread(closure_130_1(/frame-src (.*?);/, closure_129_1), closure_0);
                  closure_0 = HermesBuiltin.arraySpread(closure_130_1(/child-src (.*?);/, closure_129_1), closure_0);
                  closure_129_2 = items;
                  closure_1_30(closure_129_2.map((item) => "^" + closure_1_1(closure_1_3[26])(item).replace(/\\\*/g, ".*")));
                  closure_1_28(true);
                  c4 = 3;
                  return { value: "HermesInternal", done: null };
                }
              } catch (tmp7) {
                c4 = tmp;
                throw tmp7;
              }
            }
          };
          closure_0 = ["'self'"];
          (function fetchAndParseCSP() {
            const self = this;
            const apply = closure_2.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          })();
        }
      }, items8);
      items9 = [, ];
      items9[0] = null;
      items9[1] = first2;
      tmp39 = null != null;
      callback3 = obj2.useCallback((mainDocumentURL) => {
        mainDocumentURL = mainDocumentURL.mainDocumentURL;
        if (null != combined1) {
          if (null != mainDocumentURL) {
            if (mainDocumentURL !== combined1) {
              Linking.openURL(mainDocumentURL.url);
              return false;
            }
          }
        }
        const iter = first2[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let _RegExp = RegExp;
          let tmp3 = new.target;
          let tmp4 = new.target;
          let regExp = new RegExp(nextResult);
          if (regExp.test(mainDocumentURL.url)) {
            iter.return();
            let flag = true;
            return true;
          }
        }
        let str = DeveloperActivityShelfStore.getActivityUrlOverride();
        if (str == null) {
          str = "";
        }
        const toURLSafeResult = URLUtilsDefault.toURLSafe(str);
        const toURLSafeResult1 = URLUtilsDefault.toURLSafe(mainDocumentURL.url);
        return null != toURLSafeResult && null != toURLSafeResult1 && toURLSafeResult.origin + toURLSafeResult.pathname === toURLSafeResult1.origin + toURLSafeResult1.pathname;
      }, items9);
      if (tmp39) {
        tmp39 = null != url;
      }
      if (tmp39) {
        tmp39 = null != str;
      }
      closure_31 = tmp39;
      ref = obj2.useRef(null);
      closure_32 = ref;
      callback4 = obj2.useCallback((arg0) => {
        const current = ref.current;
        if (current != null) {
          current.injectJavaScript(getPostMessageJavaScriptDefault(arg0));
        }
      }, []);
      closure_33 = callback4;
      items10 = [, , , ];
      items10[0] = webViewKey;
      origin = undefined;
      if (url != null) {
        origin = url.origin;
      }
      items10[1] = origin;
      items10[2] = first1;
      items10[3] = callback4;
      items11 = [, , , , , ];
      items11[0] = rect;
      items11[1] = isPipOrGridMode;
      items11[2] = tmp39;
      items11[3] = memo;
      items11[4] = callback4;
      items11[5] = safeAreasConfig;
      callback5 = obj2.useCallback((nativeEvent) => {
        if (null == webViewKey) {
          const _JSON = JSON;
          const parsed = JSON.parse(nativeEvent.nativeEvent.data);
          if (url != null) {
            const origin = url.origin;
          }
          let tmp = typeof parsed === "object";
          if (typeof parsed === "object") {
            tmp = null != origin;
          }
          if (tmp) {
            const obj = { type: TransportTypes.POST_MESSAGE, origin, iframeId: first1 };
            obj.handleMessage(parsed, obj, callback4);
          }
        }
      }, items10);
      effect4 = obj2.useEffect(() => {
        if (closure_31) {
          if (null != memo) {
            closure_0 = async function _tryInjectJavaScript(arg0, value) {
              if (c9 === 2) {
                c9 = 3;
                throw new TypeError("Generator functions may not be called on executing generators");
              } else if (tmp7 === 3) {
                if (arg0 === 1) {
                  throw value;
                } else if (arg0 === 2) {
                  let obj = { value, done: true };
                  return obj;
                } else {
                  return { value: "HermesInternal", done: null };
                }
              } else {
                try {
                  c9 = 2;
                  if (0 === c8) {
                    if (arg0 === 1) {
                      c9 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c9 = 3;
                      obj = { value, done: true };
                      return obj;
                    } else {
                      closure_5 = tmp3;
                      closure_4 = tmp5;
                      closure_132_0 = undefined;
                      if (null != memo) {
                        if (isPipOrGridMode) {
                          rect = { top: 0, bottom: 0, left: 0, right: 0 };
                        } else {
                          rect = closure_1_21;
                        }
                        const rect2 = safeAreasConfig;
                        let left;
                        if (safeAreasConfig != null) {
                          left = rect2.left;
                        }
                        let left1;
                        if (rect != null) {
                          left1 = rect.left;
                        }
                        c0 = left1;
                        if (left1 == null) {
                          c0 = 0;
                        }
                        rect = { left: closure_2_18(left, c0), right: null, top: null, bottom: null };
                        let right;
                        if (rect2 != null) {
                          right = rect2.right;
                        }
                        let right1;
                        if (rect != null) {
                          right1 = rect.right;
                        }
                        c1 = right1;
                        if (right1 == null) {
                          c1 = 0;
                        }
                        rect.right = closure_2_18(right, c1);
                        let top;
                        if (rect2 != null) {
                          top = rect2.top;
                        }
                        let top1;
                        if (rect != null) {
                          top1 = rect.top;
                        }
                        c2 = top1;
                        if (top1 == null) {
                          c2 = 0;
                        }
                        rect.top = closure_2_18(top, c2);
                        let bottom;
                        if (rect2 != null) {
                          bottom = rect2.bottom;
                        }
                        let bottom1;
                        if (rect != null) {
                          bottom1 = rect.bottom;
                        }
                        c3 = bottom1;
                        if (bottom1 == null) {
                          c3 = 0;
                        }
                        const obj1 = { type: "safeAreaUpdateEvent", data: null };
                        const obj2 = { insets: null };
                        rect.bottom = closure_2_18(bottom, c3);
                        obj2.insets = rect;
                        obj1.data = obj2;
                        closure_132_0 = obj1;
                        c7 = 1;
                        c8 = 2;
                        c9 = 1;
                        const obj3 = { value: obj8.injectJavaScript(getPostMessageJavaScriptDefault(obj1)), done: false };
                        return obj3;
                      }
                      obj8 = memo;
                    }
                  } else {
                    if (1 === tmp8) {
                      c7 = 0;
                      if (null != ref.current) {
                        callback4(getPostMessageJavaScriptDefault(closure_132_0));
                      }
                    } else if (arg0 === 1) {
                      c9 = 3;
                      throw value;
                    } else if (arg0 !== 2) {
                      c7 = 0;
                    }
                    c7 = 0;
                    c9 = 3;
                    obj = { value, done: true };
                    return obj;
                  }
                  c9 = 3;
                } catch (tmp35) {
                  closure_6 = tmp35;
                  if (tmp4 === c7) {
                    c9 = tmp2;
                    throw tmp35;
                  } else {
                    c8 = tmp;
                  }
                }
              }
            };
            (function tryInjectJavaScript() {
              const self = this;
              const apply = closure_0.apply;
              if (typeof apply === "unknown") {
                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
              } else {
                applyArgumentsResult = apply(self, arguments);
              }
              return applyArgumentsResult;
            })();
          }
        }
      }, items11);
      if (null != null) {
        if (null != url) {
          if (tmp32) {
          }
          left = undefined;
          if (safeAreasConfig != null) {
            left = safeAreasConfig.left;
          }
          num = undefined;
          if (rect != null) {
            num = rect.left;
          }
          if (num == null) {
            num = 0;
          }
          num2 = num;
          if (null != left) {
            num3 = 0;
            num4 = 0;
            if (left.disable) {
              num2 = 0;
            } else {
              if (null != left.override) {
                _Math2 = Math;
                left = left.override;
                bound = Math.max(0, left);
              } else {
                bound = num;
                if (null != left.offset) {
                  _Math = Math;
                  bound = Math.max(0, num + left.offset);
                }
              }
              tmp47 = bound;
            }
          }
          rect = { left: null, right: null, top: null, bottom: null };
          rect.left = num2;
          right = undefined;
          if (safeAreasConfig != null) {
            right = safeAreasConfig.right;
          }
          num5 = undefined;
          if (rect != null) {
            num5 = rect.right;
          }
          if (num5 == null) {
            num5 = 0;
          }
          num6 = num5;
          if (null != right) {
            num7 = 0;
            num8 = 0;
            if (right.disable) {
              num6 = 0;
            } else {
              if (null != right.override) {
                _Math4 = Math;
                right = right.override;
                bound1 = Math.max(0, right);
              } else {
                bound1 = num5;
                if (null != right.offset) {
                  _Math3 = Math;
                  bound1 = Math.max(0, num5 + right.offset);
                }
              }
              tmp50 = bound1;
            }
          }
          rect.right = num6;
          top = undefined;
          if (safeAreasConfig != null) {
            top = safeAreasConfig.top;
          }
          num9 = undefined;
          if (rect != null) {
            num9 = rect.top;
          }
          if (num9 == null) {
            num9 = 0;
          }
          num10 = num9;
          if (null != top) {
            num11 = 0;
            num12 = 0;
            if (top.disable) {
              num10 = 0;
            } else {
              if (null != top.override) {
                _Math6 = Math;
                top = top.override;
                bound2 = Math.max(0, top);
              } else {
                bound2 = num9;
                if (null != top.offset) {
                  _Math5 = Math;
                  bound2 = Math.max(0, num9 + top.offset);
                }
              }
              tmp53 = bound2;
            }
          }
          rect.top = num10;
          bottom = undefined;
          if (safeAreasConfig != null) {
            bottom = safeAreasConfig.bottom;
          }
          num13 = undefined;
          if (rect != null) {
            num13 = rect.bottom;
          }
          if (num13 == null) {
            num13 = 0;
          }
          num14 = num13;
          if (null != bottom) {
            num15 = 0;
            num16 = 0;
            if (bottom.disable) {
              num14 = 0;
            } else {
              if (null != bottom.override) {
                _Math8 = Math;
                bottom = bottom.override;
                bound3 = Math.max(0, bottom);
              } else {
                bound3 = num13;
                if (null != bottom.offset) {
                  _Math7 = Math;
                  bound3 = Math.max(0, num13 + bottom.offset);
                }
              }
              tmp56 = bound3;
            }
          }
          rect.bottom = num14;
          if (tmp32) {
            tmp2Result1 = tmp2(tmp3[19]);
            injectedJavascriptForIOS = tmp2Result1.createInjectedJavascriptForIOS(rect);
          }
          tmp59Result = null;
          if (null != str) {
            tmp59 = guildId;
            obj2 = { style: null, ref: null, source: null, androidAssetLoaderConfig: null, originWhitelist: null, overScrollMode: "never", scrollEnabled: false, cacheEnabled: true, onError: null, onContentProcessDidTerminate: null, onRenderProcessGone: null, webViewKey: null, temporaryParentNodeTag: null, messagingWithWebViewKeyEnabled: null, onMessage: null, allowFileAccess: null, injectedJavaScript: null, injectedJavaScriptForMainFrameOnly: false, onShouldStartLoadWithRequest: null, mediaPlaybackRequiresUserAction: false, ignoreSilentHardwareSwitch: null, allowsInlineMediaPlayback: true, minimumFontSize: 1, bounces: false, allowsProtectedMedia: true };
            obj2.style = tmp.webView;
            obj2.ref = ref;
            obj3 = { uri: null };
            obj3.uri = null;
            obj2.source = obj3;
            if ("" === url.port) {
              host = url.host;
            } else {
              _HermesInternal3 = HermesInternal;
              str6 = ":";
              host = "" + url.hostname + ":" + url.port;
            }
            obj4 = { domain: null, httpAllowed: null, pathHandlers: null };
            obj4.domain = host;
            str7 = "http:";
            obj4.httpAllowed = "http:" === url.protocol;
            obj5 = { type: "internal", path: null, directory: null };
            _HermesInternal4 = HermesInternal;
            str8 = "/";
            obj5.path = "/" + first1 + "/";
            num17 = 0;
            obj5.directory = str.substring(0, str.lastIndexOf("/"));
            items12 = [];
            items12[0] = obj5;
            obj4.pathHandlers = items12;
            obj2.androidAssetLoaderConfig = obj4;
            obj2.originWhitelist = ["*"];
            obj2.onError = callback;
            obj2.onContentProcessDidTerminate = callback2;
            obj2.onRenderProcessGone = callback1;
            obj2.webViewKey = webViewKey;
            obj2.temporaryParentNodeTag = context;
            obj2.messagingWithWebViewKeyEnabled = null != webViewKey;
            obj2.onMessage = callback5;
            obj2.allowFileAccess = tmp32;
            obj2.injectedJavaScript = injectedJavascriptForIOS;
            tmp60 = undefined;
            if (tmp32) {
              tmp60 = callback3;
            }
            obj2.onShouldStartLoadWithRequest = tmp60;
            obj2.ignoreSilentHardwareSwitch = ignoreSilentHardwareSwitch;
            tmp59Result = tmp59(tmp2(tmp3[14]).WebView, obj2);
          }
          return tmp59Result;
        }
      }
      return null;
    } else {
      tmp28 = closure_17;
      if (closure_17) {
        _HermesInternal2 = HermesInternal;
        str5 = "file://";
        combined1 = "file://" + str;
      } else {
        _HermesInternal = HermesInternal;
        str2 = "/activity.html";
        str3 = "/";
        str4 = "";
        tmp29 = first1;
        combined1 = "" + url.origin + "/" + first1 + "/activity.html";
      }
      closure_26 = combined1;
      tmp31 = combined1;
    }
    return;
  }
}
const Linking = fn(17).Linking;
let Constants = fn(1920);
({ ActivityPlatform: closure_9, DISALLOWED_NAVIGATION_ERROR_CLOSE_ACTIVITY: c10 } = Constants);
Constants = fn(1074);
({ ComponentActions: closure_11, AnalyticEvents: closure_12 } = Constants);
const TransportTypes = fn(4465).TransportTypes;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_15 = createStyles.createStyles({ webView: { backgroundColor: "transparent" } });
let closure_16 = new LoggerDefault("EmbeddedActivityWebView");
const PlatformUtils = fn(1115);
let closure_17 = PlatformUtils.isIOS();
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/native/EmbeddedActivityWebView.tsx");

export default function EmbeddedActivityWebView(channelId) {
  channelId = channelId.channelId;
  const currentEmbeddedActivity = channelId.currentEmbeddedActivity;
  const applicationId = channelId.applicationId;
  const merged = Object.assign(channelId, Object.assign({ channelId: 0, currentEmbeddedActivity: 0, applicationId: 0 }));
  const tmp2 = _slicedToArray(noop.useState(false), 2);
  const hasInvalidUrlError = tmp2[0];
  const tmp4 = currentEmbeddedActivity(hasInvalidUrlError[30])(hasInvalidUrlError);
  closure_4 = tmp4;
  let obj = {};
  if (null != currentEmbeddedActivity) {
    if (null != currentEmbeddedActivity.customId) {
      obj.custom_id = currentEmbeddedActivity.customId;
    }
    if (null != currentEmbeddedActivity.referrerId) {
      obj.referrer_id = currentEmbeddedActivity.referrerId;
    }
  }
  const items = [hasInvalidUrlError, tmp4, channelId, applicationId, currentEmbeddedActivity];
  const effect = obj.useEffect(() => {
    let tmp = !closure_4;
    if (!closure_4) {
      tmp = first;
    }
    if (tmp) {
      if (null != channelId) {
        let obj = ChannelRTCActionCreatorsDefault;
        const participant = obj.selectParticipant(tmp2, null);
      }
      let _location;
      if (currentEmbeddedActivity != null) {
        _location = currentEmbeddedActivity.location;
      }
      obj = { location: _location, applicationId, showFeedback: false };
      EmbeddedActivitiesNativeManagerDefault.leaveActivity(obj);
    }
  }, items);
  obj = {
    hasIframeId() {
      return currentEmbeddedActivity(first[32]).hasIframeId();
    },
    getOrCreateIframeId() {
      return currentEmbeddedActivity(first[32]).getOrCreateIframeId();
    },
    releaseIframeId() {
      return currentEmbeddedActivity(first[32]).releaseIframeId();
    },
    hasInvalidUrlError,
    setHasInvalidUrlError: tmp2[1],
    hadInvalidUrlError: tmp4,
    deepLinkQueryParams: obj,
    applicationId,
    channelId
  };
  const merged1 = Object.assign(merged);
  return <BaseActivityWebView hasIframeId={function hasIframeId() {
    return currentEmbeddedActivity(first[32]).hasIframeId();
  }} getOrCreateIframeId={function getOrCreateIframeId() {
    return currentEmbeddedActivity(first[32]).getOrCreateIframeId();
  }} releaseIframeId={function releaseIframeId() {
    return currentEmbeddedActivity(first[32]).releaseIframeId();
  }} hasInvalidUrlError={hasInvalidUrlError} setHasInvalidUrlError={tmp2[1]} hadInvalidUrlError={tmp4} deepLinkQueryParams={obj} applicationId={applicationId} channelId={channelId} />;
};
export { BaseActivityWebView };
export const useHasInvalidUrlErrorState = function useHasInvalidUrlErrorState() {
  const tmp = _slicedToArray(noop.useState(false), 2);
  const first = tmp[0];
  return { hasInvalidUrlError: first, setHasInvalidUrlError: tmp[1], hadInvalidUrlError: usePreviousDefault(first) };
};