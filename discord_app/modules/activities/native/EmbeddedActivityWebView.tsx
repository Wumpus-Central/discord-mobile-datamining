// === Module 10676: getSafeArea ===

// Module 10676 (getSafeArea)
import closure_4 from "items3";
import _slicedToArray from "_slicedToArray";
import expandEventProperties from "expandEventProperties";
import { Linking } from "getIFrameSandboxAttributes";
import initialize from "initialize";
import items3 from "items3";
import ME from "ME";
import { jsx } from "set";
import createCacheKey from "createCacheKey";
import set from "set";
import set from "noop";

let c10;
let c9;
let closure_12;
let unpackModuleId;
const require = arg1;
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
    ({ hasFrameId, getOrCreateFrameId, releaseFrameId } = global);
    hasInvalidUrlError = global.hasInvalidUrlError;
    setHasInvalidUrlError = global.setHasInvalidUrlError;
    hadInvalidUrlError = global.hadInvalidUrlError;
    deepLinkQueryParams = global.deepLinkQueryParams;
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
    f85428 = undefined;
    c17 = undefined;
    c18 = undefined;
    useState = undefined;
    c20 = undefined;
    useState = undefined;
    f85432 = undefined;
    queryParams = undefined;
    concat = undefined;
    useRef = undefined;
    useStateFromStores = undefined;
    HermesInternal = undefined;
    closure_28 = undefined;
    useState = undefined;
    useState = undefined;
    c31 = undefined;
    c32 = undefined;
    useCallback = undefined;
    concat = undefined;
    obj2 = applicationId;
    tmp2 = hasFrameId;
    tmp3 = hasInvalidUrlError;
    tmp = guildId();
    context = applicationId.useContext(require("context").WebViewContext);
    tmp5 = hadInvalidUrlError;
    first = hadInvalidUrlError(applicationId.useState(() => callback()), 1)[0];
    f85428 = first;
    first1 = hadInvalidUrlError(applicationId.useState(() => {
      if (null != webViewKey) {
        let v4Result = callback2();
      } else {
        v4Result = outer1_0(hasInvalidUrlError[12]).v4();
        const obj = outer1_0(hasInvalidUrlError[12]);
      }
      return v4Result;
    }), 1)[0];
    c17 = first1;
    tmp8 = hadInvalidUrlError(applicationId.useState(null), 2);
    url = tmp8[0];
    c18 = url;
    useState = tmp8[1];
    items = [];
    items[0] = webViewKey;
    memo = applicationId.useMemo(() => {
      let webViewProxy;
      if (null != webViewKey) {
        webViewProxy = outer1_0(hasInvalidUrlError[13]).getWebViewProxy(tmp);
        const obj = outer1_0(hasInvalidUrlError[13]);
      }
      return webViewProxy;
    }, items);
    c20 = memo;
    tmp10 = hadInvalidUrlError(applicationId.useState(null), 2);
    [str, useState] = tmp10;
    items1 = [, , ];
    items1[0] = first;
    items1[1] = first1;
    items1[2] = webViewKey;
    effect = applicationId.useEffect(() => {
      let tmp = first;
      if (first) {
        tmp = null != webViewKey;
      }
      if (!tmp) {
        const ComponentDispatch = outer1_0(hasInvalidUrlError[14]).ComponentDispatch;
        const obj = { id: null };
        obj[0] = first1;
        ComponentDispatch.dispatch(webViewKey.IFRAME_MOUNT, obj);
      }
    }, items1);
    items2 = [, ];
    items2[0] = webViewKey;
    items2[1] = first1;
    effect1 = applicationId.useEffect(() => () => {
      if (null == closure_11) {
        const ComponentDispatch = outer1_0(outer1_3[14]).ComponentDispatch;
        const obj = { id: null };
        obj[0] = closure_17;
        ComponentDispatch.dispatch(outer1_11.IFRAME_UNMOUNT, obj);
      }
    }, items2);
    rect = require("useStableSafeAreaInsets")();
    f85432 = rect;
    obj3 = require("getConstants");
    obj = {};
    constants = obj3.getConstants();
    merged = Object.assign(queryParams);
    merged1 = Object.assign(deepLinkQueryParams);
    obj.frame_id = first1;
    obj.platform = referrerPolicy.MOBILE;
    obj.mobile_app_version = constants.Version;
    tmp16 = require("getIFrameSandboxAttributes")({ allowPopups });
    queryParams = tmp16;
    uRLSearchParams = new URLSearchParams(obj);
    combined = "" + activityUrl + "?" + uRLSearchParams;
    concat = combined;
    useRef = applicationId.useRef(safeAreasConfig);
    items3 = [, , , ];
    items3[0] = combined;
    items3[1] = tmp16;
    items3[2] = onLoadError;
    items3[3] = referrerPolicy;
    effect2 = applicationId.useEffect(() => {
      function _loadHtml() {
        const self = this;
        const tmp = setHasInvalidUrlError(function*() {
          if (c7 === 2) {
            c7 = 3;
            HermesBuiltin.throwTypeError();
          } else if (tmp5 === 3) {
            if (arg0 === 1) {
              throw arg1;
            } else if (arg0 === 2) {
              let obj = { value: null, done: true };
              obj[0] = arg1;
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
                  throw arg1;
                } else if (arg0 === 2) {
                  c7 = 3;
                  obj = { value: null, done: true };
                  obj[0] = arg1;
                  return obj;
                } else {
                  let _slicedToArray = tmp3;
                  let closure_4 = tmp2;
                  let callback;
                  const rect = callback(outer2_3[15]).getStableSafeAreaInsets();
                  const current = outer1_25.current;
                  let left;
                  if (current != null) {
                    left = current.left;
                  }
                  let left1;
                  if (rect != null) {
                    left1 = rect.left;
                  }
                  callback = left1;
                  if (left1 == null) {
                    callback = 0;
                  }
                  const obj1 = { left: null, right: null, top: null, bottom: null };
                  obj1[0] = outer2_17(left, callback);
                  let right;
                  if (current != null) {
                    right = current.right;
                  }
                  let right1;
                  if (rect != null) {
                    right1 = rect.right;
                  }
                  let c1 = right1;
                  if (right1 == null) {
                    c1 = 0;
                  }
                  obj1[1] = outer2_17(right, c1);
                  let top;
                  if (current != null) {
                    top = current.top;
                  }
                  let top1;
                  if (rect != null) {
                    top1 = rect.top;
                  }
                  let c2 = top1;
                  if (top1 == null) {
                    c2 = 0;
                  }
                  obj1[2] = outer2_17(top, c2);
                  let bottom;
                  if (current != null) {
                    bottom = current.bottom;
                  }
                  let bottom1;
                  if (rect != null) {
                    bottom1 = rect.bottom;
                  }
                  let c3 = bottom1;
                  if (bottom1 == null) {
                    c3 = 0;
                  }
                  obj1[3] = outer2_17(bottom, c3);
                  const obj2 = { iFrameUri: null, iFrameSandboxAttributes: null, referrerPolicy: null, insets: null, messageForDisallowedNavigationError: null };
                  obj2[0] = outer1_24;
                  obj2[1] = outer1_23;
                  obj2[2] = outer1_9;
                  obj2[3] = obj1;
                  let tmp36;
                  const obj7 = callback(outer2_3[15]);
                  const tmp44 = outer2_3;
                  if (!outer2_16) {
                    tmp36 = outer2_10;
                  }
                  obj2[4] = tmp36;
                  c6 = 1;
                  c7 = 1;
                  const obj3 = { value: null, done: false };
                  obj3[0] = outer2_1(outer2_3[18])(obj2);
                  return obj3;
                }
              } else if (arg0 === 1) {
                c7 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c7 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                callback = arg1;
                if (null != callback) {
                  outer1_21(outer1_0);
                } else {
                  outer1_8();
                }
                c7 = 3;
              }
            } catch (tmp37) {
              c7 = tmp;
              throw tmp37;
            }
          }
        });
        const _loadHtml = tmp;
        const apply = tmp.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      }
      !(function loadHtml() {
        const self = this;
        const apply = _loadHtml.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      })();
    }, items3);
    items4 = [];
    items4[0] = applicationId;
    items5 = [];
    items5[0] = applicationId;
    callback = applicationId.useCallback((nativeEvent) => {
      activitySessionId.warn("activity WebView error for appId " + applicationId + ". " + JSON.stringify(nativeEvent.nativeEvent));
    }, items4);
    items6 = [, , , , , , , ];
    items6[0] = applicationId;
    items6[1] = channelId;
    items6[2] = guildId;
    items6[3] = activitySessionId;
    items6[4] = first1;
    items6[5] = releaseFrameId;
    items6[6] = memo;
    items6[7] = onActivityCrash;
    callback1 = applicationId.useCallback((nativeEvent) => {
      activitySessionId.warn("activity WebView render process gone for appId " + applicationId + ". " + JSON.stringify(nativeEvent.nativeEvent));
    }, items5);
    callback2 = applicationId.useCallback(() => {
      activitySessionId.warn("activity WebView content process terminated for appId " + applicationId);
      let obj = outer1_1(hasInvalidUrlError[19]);
      obj = { application_id: applicationId, channel_id: channelId, guild_id: guildId, activity_session_id: activitySessionId };
      obj.track(safeAreasConfig.ACTIVITY_WEB_VIEW_CONTENT_PROCESS_TERMINATED, obj);
      const ComponentDispatch = outer1_0(hasInvalidUrlError[14]).ComponentDispatch;
      obj = { id: first1 };
      ComponentDispatch.dispatch(webViewKey.IFRAME_UNMOUNT, obj);
      releaseFrameId();
      if (null != memo) {
        memo.releaseWebView();
      }
      onActivityCrash();
    }, items6);
    obj5 = require("defaultAreStatesEqual");
    items7 = [];
    items7[0] = onLoadError;
    stateFromStores = obj5.useStateFromStores(items7, () => onLoadError.getUseActivityUrlOverride());
    useStateFromStores = stateFromStores;
    items8 = [, , ];
    items8[0] = combined;
    items8[1] = stateFromStores;
    items8[2] = setHasInvalidUrlError;
    effect3 = applicationId.useEffect(() => {
      try {
        const _URL = URL;
        const uRL = new URL(combined);
        callback3(uRL);
      } catch (tmp9) {
        if (stateFromStores) {
          setHasInvalidUrlError(true);
        } else {
          throw tmp9;
        }
      }
    }, items8);
    items9 = [, ];
    items9[0] = hadInvalidUrlError;
    items9[1] = hasInvalidUrlError;
    effect4 = applicationId.useEffect(() => {
      let tmp = !hadInvalidUrlError;
      if (!hadInvalidUrlError) {
        tmp = hasInvalidUrlError;
      }
      if (tmp) {
        let obj = outer1_1(hasInvalidUrlError[21]);
        obj = { title: null, body: null, confirmText: null };
        const intl = outer1_0(hasInvalidUrlError[22]).intl;
        obj[0] = intl.string(outer1_0(hasInvalidUrlError[22]).t.PtobXW);
        const intl2 = outer1_0(hasInvalidUrlError[22]).intl;
        obj[1] = intl2.string(outer1_0(hasInvalidUrlError[22]).t["55iAUT"]);
        const intl3 = outer1_0(hasInvalidUrlError[22]).intl;
        obj[2] = intl3.string(outer1_0(hasInvalidUrlError[22]).t.BddRzS);
        obj.show(obj);
      }
    }, items9);
    HermesInternal = null;
    if (null == url) {
      tmp30 = f85428;
      closure_28 = f85428;
      flag = false;
      tmp5Result = tmp5(obj2.useState(false), 2);
      [tmp32, useState] = tmp5Result;
      tmp5Result1 = tmp5(obj2.useState([]), 2);
      first2 = tmp5Result1[0];
      useState = first2;
      c31 = tmp5Result1[1];
      items10 = [, ];
      items10[0] = applicationId;
      items10[1] = f85428;
      effect5 = obj2.useEffect(() => {
        if (closure_28) {
          function parseCsp(arg0, str) {
            const match = str.match(arg0);
            if (null !== match) {
              if (match.length >= 2) {
                const parts = match[1].split(" ");
                const found = parts.filter((arg0) => !closure_0.includes(arg0));
                str = match[1];
              }
              return [];
            }
          }
          function _fetchAndParseCSP() {
            const self = this;
            const tmp = setHasInvalidUrlError(function*() {
              if (c4 === 2) {
                c4 = 3;
                HermesBuiltin.throwTypeError();
              } else if (tmp5 === 3) {
                if (arg0 === 1) {
                  throw arg1;
                } else if (arg0 === 2) {
                  let obj = { value: null, done: true };
                  obj[0] = arg1;
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
                      throw arg1;
                    } else if (arg0 === 2) {
                      c4 = 3;
                      obj = { value: null, done: true };
                      obj[0] = arg1;
                      return obj;
                    } else {
                      let items = tmp3;
                      content_security_policy = tmp2;
                      let closure_0;
                      content_security_policy = undefined;
                      items = undefined;
                      const _HermesInternal = HermesInternal;
                      const combined = "https://" + outer1_6 + ".discordsays.com";
                      closure_0 = combined;
                      const HTTP = outer2_0(outer2_3[23]).HTTP;
                      const obj1 = { url: null, rejectWithError: false };
                      const _HermesInternal2 = HermesInternal;
                      obj1[0] = "" + combined + "/.discord/csp";
                      c3 = 1;
                      c4 = 1;
                      const obj2 = { value: null, done: false };
                      obj2[0] = HTTP.get(obj1);
                      return obj2;
                    }
                  } else if (arg0 === 1) {
                    c4 = 3;
                    throw arg1;
                  } else if (arg0 === 2) {
                    c4 = 3;
                    obj = { value: null, done: true };
                    obj[0] = arg1;
                    return obj;
                  } else {
                    content_security_policy = arg1.headers["content-security-policy"];
                    items = ["about:blank", "file://*", closure_0];
                    closure_0 = 3;
                    closure_0 = HermesBuiltin.arraySpread(content_security_policy(/frame-src (.*?);/, content_security_policy), closure_0);
                    closure_0 = HermesBuiltin.arraySpread(content_security_policy(/child-src (.*?);/, content_security_policy), closure_0);
                    outer1_31(items.map((arg0) => "^" + content_security_policy(table[24])(arg0).replace(/\\\*/g, ".*")));
                    outer1_29(true);
                    c4 = 3;
                    return { value: "HermesInternal", done: null };
                  }
                } catch (tmp7) {
                  c4 = tmp;
                  throw tmp7;
                }
              }
            });
            const _fetchAndParseCSP = tmp;
            const apply = tmp.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          }
          let closure_0 = ["'self'"];
          (function fetchAndParseCSP() {
            const self = this;
            const apply = _fetchAndParseCSP.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          })();
        }
      }, items10);
      items11 = [, ];
      items11[0] = null;
      items11[1] = first2;
      tmp37 = null != null;
      callback3 = obj2.useCallback((mainDocumentURL) => {
        mainDocumentURL = mainDocumentURL.mainDocumentURL;
        if (null != combined1) {
          if (null != mainDocumentURL) {
            if (mainDocumentURL !== combined1) {
              onActivityCrash.openURL(mainDocumentURL.url);
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
          let tmp5 = nextResult;
          let regExp = new RegExp(nextResult);
          let tmp6 = regExp;
          if (regExp.test(mainDocumentURL.url)) {
            let tmp7 = iter;
            iter.return();
            let flag = true;
            return true;
          }
        }
        let str = onLoadError.getActivityUrlOverride();
        if (str == null) {
          str = "";
        }
        const toURLSafeResult = outer1_1(hasInvalidUrlError[25]).toURLSafe(str);
        const obj2 = outer1_1(hasInvalidUrlError[25]);
        const tmp8 = outer1_1;
        const tmp9 = hasInvalidUrlError;
        const toURLSafeResult1 = outer1_1(hasInvalidUrlError[25]).toURLSafe(mainDocumentURL.url);
        return null != toURLSafeResult && null != toURLSafeResult1 && toURLSafeResult.origin + toURLSafeResult.pathname === toURLSafeResult1.origin + toURLSafeResult1.pathname;
      }, items11);
      if (tmp37) {
        tmp37 = null != url;
      }
      if (tmp37) {
        tmp37 = null != str;
      }
      c32 = tmp37;
      ref = obj2.useRef(null);
      useCallback = ref;
      callback4 = obj2.useCallback((arg0) => {
        const current = ref.current;
        if (current != null) {
          current.injectJavaScript(outer1_1(hasInvalidUrlError[26])(arg0));
        }
      }, []);
      concat = callback4;
      items12 = [, , ];
      items12[0] = webViewKey;
      origin = undefined;
      if (url != null) {
        origin = url.origin;
      }
      items12[1] = origin;
      items12[2] = callback4;
      items13 = [, , , , , ];
      items13[0] = rect;
      items13[1] = isPipOrGridMode;
      items13[2] = tmp37;
      items13[3] = memo;
      items13[4] = callback4;
      items13[5] = safeAreasConfig;
      callback5 = obj2.useCallback((nativeEvent) => {
        if (null == webViewKey) {
          const _JSON = JSON;
          const parsed = JSON.parse(nativeEvent.nativeEvent.data);
          let tmp2 = typeof parsed === "ay";
          if (typeof parsed !== "window") {
            let origin;
            if (url != null) {
              origin = url.origin;
            }
            tmp2 = null != origin;
          }
          if (tmp2) {
            let origin1;
            if (url != null) {
              origin1 = url.origin;
            }
            outer1_1(hasInvalidUrlError[27]).handleMessage(parsed, origin1, callback4);
            const obj = outer1_1(hasInvalidUrlError[27]);
          }
        }
      }, items12);
      effect6 = obj2.useEffect(() => {
        if (c32) {
          if (null != memo) {
            function _tryInjectJavaScript() {
              const self = this;
              const tmp = setHasInvalidUrlError(function*() {
                if (c9 === 2) {
                  c9 = 3;
                  HermesBuiltin.throwTypeError();
                } else if (tmp7 === 3) {
                  if (arg0 === 1) {
                    throw arg1;
                  } else if (arg0 === 2) {
                    let obj = { value: null, done: true };
                    obj[0] = arg1;
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
                        throw arg1;
                      } else if (arg0 === 2) {
                        c9 = 3;
                        obj = { value: null, done: true };
                        obj[0] = arg1;
                        return obj;
                      } else {
                        let _slicedToArray = tmp3;
                        let closure_4 = tmp5;
                        let obj2;
                        if (null != outer1_20) {
                          if (outer1_10) {
                            let rect = { top: 0, bottom: 0, left: 0, right: 0 };
                          } else {
                            rect = outer1_22;
                          }
                          const rect2 = outer1_12;
                          let left;
                          if (outer1_12 != null) {
                            left = rect2.left;
                          }
                          let left1;
                          if (rect != null) {
                            left1 = rect.left;
                          }
                          obj2 = left1;
                          if (left1 == null) {
                            obj2 = 0;
                          }
                          const obj1 = { left: null, right: null, top: null, bottom: null };
                          obj1[0] = outer2_17(left, obj2);
                          let right;
                          if (rect2 != null) {
                            right = rect2.right;
                          }
                          let right1;
                          if (rect != null) {
                            right1 = rect.right;
                          }
                          let c1 = right1;
                          if (right1 == null) {
                            c1 = 0;
                          }
                          obj1[1] = outer2_17(right, c1);
                          let top;
                          if (rect2 != null) {
                            top = rect2.top;
                          }
                          let top1;
                          if (rect != null) {
                            top1 = rect.top;
                          }
                          let c2 = top1;
                          if (top1 == null) {
                            c2 = 0;
                          }
                          obj1[2] = outer2_17(top, c2);
                          let bottom;
                          if (rect2 != null) {
                            bottom = rect2.bottom;
                          }
                          let bottom1;
                          if (rect != null) {
                            bottom1 = rect.bottom;
                          }
                          let c3 = bottom1;
                          if (bottom1 == null) {
                            c3 = 0;
                          }
                          obj2 = { type: "safeAreaUpdateEvent", data: null };
                          const obj3 = { insets: null };
                          obj1[3] = outer2_17(bottom, c3);
                          obj3[0] = obj1;
                          obj2[1] = obj3;
                          let c7 = 1;
                          c8 = 2;
                          c9 = 1;
                          const obj4 = { value: null, done: false };
                          obj4[0] = obj8.injectJavaScript(outer2_1(outer2_3[26])(obj2));
                          return obj4;
                        }
                        obj8 = outer1_20;
                      }
                    } else {
                      if (1 === tmp8) {
                        c7 = 0;
                        if (null != outer1_33.current) {
                          outer1_34(outer2_1(outer2_3[26])(outer1_0));
                        }
                      } else if (arg0 === 1) {
                        c9 = 3;
                        throw arg1;
                      } else if (arg0 !== 2) {
                        c7 = 0;
                      }
                      c7 = 0;
                      c9 = 3;
                      obj = { value: null, done: true };
                      obj[0] = arg1;
                      return obj;
                    }
                    c9 = 3;
                  } catch (tmp35) {
                    let expandEventProperties = tmp35;
                    if (tmp4 === c7) {
                      c9 = tmp2;
                      throw tmp35;
                    } else {
                      c8 = tmp;
                    }
                  }
                }
              });
              const _tryInjectJavaScript = tmp;
              const apply = tmp.apply;
              if (typeof apply === "unknown") {
                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
              } else {
                applyArgumentsResult = apply(self, arguments);
              }
              return applyArgumentsResult;
            }
            (function tryInjectJavaScript() {
              const self = this;
              const apply = _tryInjectJavaScript.apply;
              if (typeof apply === "unknown") {
                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
              } else {
                applyArgumentsResult = apply(self, arguments);
              }
              return applyArgumentsResult;
            })();
          }
        }
      }, items13);
      if (null != null) {
        if (null != url) {
          if (tmp30) {
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
                bound = require("asyncGeneratorStep");
              } else {
                bound = num;
                if (null != left.offset) {
                  _Math = Math;
                  bound = require("asyncGeneratorStep");
                }
              }
              tmp45 = bound;
            }
          }
          obj1 = { left: null, right: null, top: null, bottom: null };
          obj1[0] = num2;
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
                bound1 = require("asyncGeneratorStep");
              } else {
                bound1 = num5;
                if (null != right.offset) {
                  _Math3 = Math;
                  bound1 = require("asyncGeneratorStep");
                }
              }
              tmp48 = bound1;
            }
          }
          obj1[1] = num6;
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
                bound2 = require("asyncGeneratorStep");
              } else {
                bound2 = num9;
                if (null != top.offset) {
                  _Math5 = Math;
                  bound2 = require("asyncGeneratorStep");
                }
              }
              tmp51 = bound2;
            }
          }
          obj1[2] = num10;
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
                bound3 = require("asyncGeneratorStep");
              } else {
                bound3 = num13;
                if (null != bottom.offset) {
                  _Math7 = Math;
                  bound3 = require("asyncGeneratorStep");
                }
              }
              tmp54 = bound3;
            }
          }
          obj1[3] = num14;
          if (tmp30) {
            tmp2Result = require("_createWebviewHtmlFile");
            injectedJavascriptForIOS = tmp2Result.createInjectedJavascriptForIOS(obj1);
          }
          tmp57Result = null;
          if (null != str) {
            tmp57 = channelId;
            obj2 = { style: null, ref: null, source: null, androidAssetLoaderConfig: null, originWhitelist: null, overScrollMode: "never", scrollEnabled: false, cacheEnabled: true, onError: null, onContentProcessDidTerminate: null, onRenderProcessGone: null, webViewKey: null, temporaryParentNodeTag: null, messagingWithWebViewKeyEnabled: null, onMessage: null, allowFileAccess: null, injectedJavaScript: null, injectedJavaScriptForMainFrameOnly: false, onShouldStartLoadWithRequest: null, mediaPlaybackRequiresUserAction: false, ignoreSilentHardwareSwitch: null, allowsInlineMediaPlayback: true, minimumFontSize: 1, bounces: false, allowsProtectedMedia: true };
            obj2[0] = tmp.webView;
            obj2[1] = ref;
            obj3 = { uri: null };
            obj3[0] = null;
            obj2[2] = obj3;
            if ("" === url.port) {
              host = url.host;
            } else {
              _HermesInternal3 = HermesInternal;
              str6 = ":";
              host = "" + url.hostname + ":" + url.port;
            }
            obj4 = { domain: null, httpAllowed: null, pathHandlers: null };
            obj4[0] = host;
            str7 = "http:";
            obj4[1] = "http:" === url.protocol;
            obj5 = { type: "internal", path: null, directory: null };
            _HermesInternal4 = HermesInternal;
            str8 = "/";
            obj5[1] = "/" + first1 + "/";
            num17 = 0;
            obj5[2] = require("asyncGeneratorStep");
            items14 = [];
            items14[0] = obj5;
            obj4[2] = items14;
            obj2[3] = obj4;
            obj2[4] = ["*"];
            obj2[8] = callback;
            obj2[9] = callback2;
            obj2[10] = callback1;
            obj2[11] = webViewKey;
            obj2[12] = context;
            obj2[13] = null != webViewKey;
            obj2[14] = callback5;
            obj2[15] = tmp30;
            obj2[16] = injectedJavascriptForIOS;
            tmp58 = undefined;
            if (tmp30) {
              tmp58 = callback3;
            }
            obj2[18] = tmp58;
            obj2[20] = ignoreSilentHardwareSwitch;
            tmp57Result = tmp57(require("WebView").WebView, obj2);
          }
          return tmp57Result;
        }
      }
      return null;
    } else {
      tmp26 = f85428;
      if (f85428) {
        _HermesInternal2 = HermesInternal;
        str5 = "file://";
        combined1 = "file://" + str;
      } else {
        _HermesInternal = HermesInternal;
        str2 = "/activity.html";
        str3 = "/";
        str4 = "";
        tmp27 = first1;
        combined1 = "" + url.origin + "/" + first1 + "/activity.html";
      }
      HermesInternal = combined1;
      tmp29 = combined1;
    }
    return;
  }
}
({ ActivityPlatform: c9, DISALLOWED_NAVIGATION_ERROR_CLOSE_ACTIVITY: c10 } = items3);
({ ComponentActions: unpackModuleId, AnalyticEvents: closure_12 } = ME);
let closure_14 = createCacheKey.createStyles({ webView: { backgroundColor: "transparent" } });
let closure_15 = new require("get ActivityIndicator")("EmbeddedActivityWebView");
set = set.isIOS();
const result = set.fileFinishedImporting("modules/activities/native/EmbeddedActivityWebView.tsx");

export default function EmbeddedActivityWebView(channelId) {
  channelId = channelId.channelId;
  const currentEmbeddedActivity = channelId.currentEmbeddedActivity;
  const applicationId = channelId.applicationId;
  const merged = Object.assign(channelId, Object.create(null));
  let first;
  let c4;
  let obj = React;
  const tmp2 = callback(React.useState(false), 2);
  first = tmp2[0];
  const tmp4 = currentEmbeddedActivity(first[28])(first);
  c4 = tmp4;
  obj = {};
  if (null != currentEmbeddedActivity) {
    if (null != currentEmbeddedActivity.customId) {
      obj.custom_id = currentEmbeddedActivity.customId;
    }
    if (null != currentEmbeddedActivity.referrerId) {
      obj.referrer_id = currentEmbeddedActivity.referrerId;
    }
  }
  const items = [first, tmp4, channelId, applicationId, currentEmbeddedActivity];
  const effect = obj.useEffect(() => {
    let tmp = !c4;
    if (!c4) {
      tmp = first;
    }
    if (tmp) {
      if (null != channelId) {
        let obj = currentEmbeddedActivity(first[29]);
        const participant = obj.selectParticipant(tmp2, null);
      }
      let _location;
      if (currentEmbeddedActivity != null) {
        _location = currentEmbeddedActivity.location;
      }
      obj = { location: null, applicationId: null, showFeedback: false };
      obj[0] = _location;
      obj[1] = applicationId;
      currentEmbeddedActivity(first[30]).leaveActivity(obj);
      const obj2 = currentEmbeddedActivity(first[30]);
    }
  }, items);
  obj = {
    hasFrameId() {
      return currentEmbeddedActivity(first[30]).hasFrameId();
    },
    getOrCreateFrameId() {
      return currentEmbeddedActivity(first[30]).getOrCreateFrameId();
    },
    releaseFrameId() {
      return currentEmbeddedActivity(first[30]).releaseFrameId();
    },
    hasInvalidUrlError: first,
    setHasInvalidUrlError: tmp2[1],
    hadInvalidUrlError: tmp4,
    deepLinkQueryParams: obj,
    applicationId,
    channelId
  };
  const merged1 = Object.assign(merged);
  return <BaseActivityWebView hasFrameId={function hasFrameId() {
    return currentEmbeddedActivity(first[30]).hasFrameId();
  }} getOrCreateFrameId={function getOrCreateFrameId() {
    return currentEmbeddedActivity(first[30]).getOrCreateFrameId();
  }} releaseFrameId={function releaseFrameId() {
    return currentEmbeddedActivity(first[30]).releaseFrameId();
  }} hasInvalidUrlError={first} setHasInvalidUrlError={tmp2[1]} hadInvalidUrlError={tmp4} deepLinkQueryParams={obj} applicationId={applicationId} channelId={channelId} />;
};
export { BaseActivityWebView };
export const useHasInvalidUrlErrorState = function useHasInvalidUrlErrorState() {
  const tmp = callback(React.useState(false), 2);
  const first = tmp[0];
  return { hasInvalidUrlError: first, setHasInvalidUrlError: tmp[1], hadInvalidUrlError: importDefault(8129)(first) };
};