// === Module 11485: BaseEmbeddedAppWebView ===

// Module 11485 (BaseEmbeddedAppWebView)
import LoggerDefault from "Logger" /* 3 */;
import c from "c" /* 576 */;
import util from "util" /* 1128 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1267 */;
import URLUtilsDefault from "URLUtils" /* 1386 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5908 */;
import usePreviousDefault from "usePrevious" /* 6660 */;
import WebView from "WebView" /* 7907 */;
import useEmbeddedAppCSPDefault from "useEmbeddedAppCSP" /* 10774 */;
import isAllowedFrameNavigation from "isAllowedFrameNavigation" /* 11494 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import DeveloperActivityShelfStore from "DeveloperActivityShelfStore" /* 5625 */;

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
const Linking = fn(17).Linking;
const AnalyticEvents = fn(1087).AnalyticEvents;
let closure_10 = fn(2026).DISALLOWED_NAVIGATION_ERROR_CLOSE_ACTIVITY;
const jsx = fn(21).jsx;
const createStyles = fn(4971);
let closure_12 = createStyles.createStyles({ webView: { backgroundColor: "transparent" } });
let closure_13 = new LoggerDefault("BaseEmbeddedAppWebView");
const PlatformUtils = fn(1384);
let closure_14 = PlatformUtils.isIOS();
fn(558);
let tmp2 = new LoggerDefault("BaseEmbeddedAppWebView");
let ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? (function BaseEmbeddedAppWebViewContent(framePolicy) {
  const cResult = framePolicy(applicationId[12]).c(117);
  framePolicy = framePolicy.framePolicy;
  let iframeId = framePolicy.iframeId;
  let shellBridgeSecret = framePolicy.shellBridgeSecret;
  ({ deepLinkQueryParams, applicationId } = framePolicy);
  ({ queryParams, onActivityCrash } = framePolicy);
  const onLoadError = framePolicy.onLoadError;
  const onInvalidUrl = framePolicy.onInvalidUrl;
  ({ allowPopups, referrerPolicy } = framePolicy);
  const isPipOrGridMode = framePolicy.isPipOrGridMode;
  ({ ignoreSilentHardwareSwitch, safeAreasConfig } = framePolicy);
  const channelId = framePolicy.channelId;
  const guildId = framePolicy.guildId;
  const activitySessionId = framePolicy.activitySessionId;
  if (undefined === deepLinkQueryParams) {
    deepLinkQueryParams = {};
  }
  activitySessionId();
  const context = onInvalidUrl.useContext(tmp(tmp2[14]).WebViewContext);
  const tmp6 = closure_17();
  const hasInvalidUrlError = tmp6.hasInvalidUrlError;
  const setHasInvalidUrlError = tmp6.setHasInvalidUrlError;
  const hadInvalidUrlError = tmp6.hadInvalidUrlError;
  let obj = framePolicy(applicationId[12]);
  [tmp9, tmp10] = onLoadError(onInvalidUrl.useState(null), 2);
  if (cResult[0] !== iframeId) {
    const webViewProxy = tmp(tmp2[15]).getWebViewProxy(iframeId);
    cResult[0] = iframeId;
    cResult[1] = webViewProxy;
    let tmp11 = webViewProxy;
    const tmpResult = tmp(tmp2[15]);
  } else {
    tmp11 = cResult[1];
  }
  closure_17 = tmp11;
  let tmp8 = onLoadError(onInvalidUrl.useState(null), 2);
  [tmp14, tmp15] = onLoadError(onInvalidUrl.useState(null), 2);
  closure_18 = tmp15;
  const tmp17 = iframeId(applicationId[16])();
  closure_19 = tmp17;
  const tmp16 = iframeId;
  const tmp7Result = onLoadError(onInvalidUrl.useState(null), 2);
  let num3 = 1;
  if (!setHasInvalidUrlError) {
    num3 = tmpResult5.useEmbeddedAppShimVersion("BaseEmbeddedAppWebView");
  }
  tmpResult5 = framePolicy(applicationId[17]);
  let obj3 = {};
  constants = shellBridgeSecret(applicationId[18]).getConstants();
  const merged = Object.assign(queryParams);
  const merged1 = Object.assign(deepLinkQueryParams);
  obj3.frame_id = iframeId;
  obj3.platform = framePolicy(applicationId[19]).ActivityPlatform.MOBILE;
  obj3.mobile_app_version = constants.Version;
  obj3[framePolicy(applicationId[20]).SHIM_VERSION_PARAM] = "" + num3;
  if (cResult[2] !== allowPopups) {
    let obj4 = { allowPopups };
    const tmp23 = tmp16(tmp2[21])(obj4);
    cResult[2] = allowPopups;
    cResult[3] = tmp23;
    let tmp22 = tmp23;
  } else {
    tmp22 = cResult[3];
  }
  closure_21 = tmp22;
  const uRLSearchParams = new URLSearchParams(obj3);
  const combined = "" + framePolicy.activityUrl + "?" + uRLSearchParams;
  if (cResult[4] !== framePolicy) {
    let result;
    if (null != framePolicy) {
      result = tmp(tmp2[22]).deriveIframeCSPAttributeFromPolicy(framePolicy.policy);
      const tmpResult6 = tmp(tmp2[22]);
    }
    cResult[4] = framePolicy;
    cResult[5] = result;
    let tmp26 = result;
  } else {
    tmp26 = cResult[5];
  }
  closure_23 = tmp26;
  if (cResult[6] === tmp26) {
    if (cResult[7] === iframeId) {
      if (cResult[8] === tmp22) {
        if (cResult[9] === combined) {
          if (cResult[10] === onLoadError) {
            if (cResult[11] === referrerPolicy) {
              if (cResult[12] === tmp15) {
                if (cResult[13] === shellBridgeSecret) {
                  if (cResult[14] === num3) {
                    let tmp28 = cResult[15];
                  }
                  if (cResult[16] === tmp26) {
                    if (cResult[17] === iframeId) {
                      if (cResult[18] === tmp22) {
                        if (cResult[19] === combined) {
                          if (cResult[20] === onLoadError) {
                            if (cResult[21] === referrerPolicy) {
                              if (cResult[22] === shellBridgeSecret) {
                                if (cResult[23] === num3) {
                                  let tmp29 = cResult[24];
                                }
                                const effect = obj2.useEffect(tmp28, tmp29);
                                if (cResult[25] !== applicationId) {
                                  function ve(nativeEvent) {
                                    hasInvalidUrlError.warn("activity WebView error for appId " + applicationId + ". " + JSON.stringify(nativeEvent.nativeEvent));
                                  }
                                  cResult[25] = applicationId;
                                  cResult[26] = ve;
                                }
                                if (cResult[27] !== applicationId) {
                                  function ge(nativeEvent) {
                                    hasInvalidUrlError.warn("activity WebView render process gone for appId " + applicationId + ". " + JSON.stringify(nativeEvent.nativeEvent));
                                  }
                                  cResult[27] = applicationId;
                                  cResult[28] = ge;
                                }
                                if (cResult[29] === activitySessionId) {
                                  if (cResult[30] === applicationId) {
                                    if (cResult[31] === channelId) {
                                      if (cResult[32] === guildId) {
                                        const _Symbol = Symbol;
                                        if (cResult[35] === Symbol.for("react.memo_cache_sentinel")) {
                                          let items = [isPipOrGridMode];
                                          function we() {
                                            return isPipOrGridMode.getUseActivityUrlOverride();
                                          }
                                          cResult[35] = items;
                                          cResult[36] = we;
                                          let tmp35 = we;
                                          class Ae {
                                            constructor() {
                                              try {
                                                tmp = globalThis;
                                                _URL = URL;
                                                tmp2 = closure_22;
                                                tmp3 = new.target;
                                                tmp4 = new.target;
                                                uRL = new URL(closure_22);
                                                tmp6 = closure_16;
                                                tmp7 = uRL;
                                                tmp8 = closure_16(uRL);
                                                return;
                                              } catch (tmp9) {
                                                tmp10 = closure_24;
                                                if (closure_24) {
                                                  tmp11 = setHasInvalidUrlError;
                                                  flag = true;
                                                  tmp12 = setHasInvalidUrlError(true);
                                                } else {
                                                  throw tmp9;
                                                }
                                              }
                                              return;
                                            }
                                          }
                                        } else {
                                          tmp35 = cResult[36];
                                          const tmp34 = cResult[35];
                                        }
                                        const stateFromStores = tmp(tmp2[25]).useStateFromStores(tmp34, tmp35);
                                        if (cResult[37] === combined) {
                                          if (cResult[38] === stateFromStores) {
                                            if (cResult[39] === setHasInvalidUrlError) {
                                              if (cResult[40] === tmp10) {
                                                let tmp38 = cResult[41];
                                              }
                                              if (cResult[42] === combined) {
                                                if (cResult[43] === stateFromStores) {
                                                  if (cResult[44] === setHasInvalidUrlError) {
                                                    let tmp39 = cResult[45];
                                                  }
                                                  const effect1 = obj2.useEffect(tmp38, tmp39);
                                                  if (cResult[46] === hadInvalidUrlError) {
                                                    if (cResult[47] === hasInvalidUrlError) {
                                                      let tmp42 = cResult[49];
                                                      const tmp41 = cResult[48];
                                                    }
                                                    const effect2 = obj2.useEffect(tmp41, tmp42);
                                                    if (cResult[50] === hadInvalidUrlError) {
                                                      if (cResult[51] === hasInvalidUrlError) {
                                                        if (cResult[52] === onInvalidUrl) {
                                                          let tmp44 = cResult[53];
                                                          let tmp45 = cResult[54];
                                                        }
                                                        const effect3 = obj2.useEffect(tmp44, tmp45);
                                                        if (cResult[55] === tmp9) {
                                                          if (cResult[56] === tmp14) {
                                                            let tmp48 = cResult[57];
                                                          }
                                                          class Pe {
                                                            constructor() {
                                                              tmp = !hadInvalidUrlError;
                                                              if (!hadInvalidUrlError) {
                                                                tmp = hasInvalidUrlError;
                                                              }
                                                              if (tmp) {
                                                                tmp2 = closure_1;
                                                                tmp3 = closure_3;
                                                                obj = closure_1(closure_3[26]);
                                                                obj1 = { title: null, body: null, confirmText: null };
                                                                tmp4 = closure_0;
                                                                intl = closure_0(closure_3[27]).intl;
                                                                obj1.title = intl.string(closure_0(closure_3[27]).t.PtobXW);
                                                                intl2 = closure_0(closure_3[27]).intl;
                                                                obj1.body = intl2.string(closure_0(closure_3[27]).t["55iAUT"]);
                                                                intl3 = closure_0(closure_3[27]).intl;
                                                                obj1.confirmText = intl3.string(closure_0(closure_3[27]).t.BddRzS);
                                                                showResult = obj.show(obj1);
                                                              }
                                                              return;
                                                            }
                                                          }
                                                          if (cResult[58] === undefined) {
                                                            if (cResult[59] === tmp9) {
                                                              if (cResult[60] === tmp14) {
                                                                let combined1 = cResult[61];
                                                              }
                                                              let tmp55 = tmp18;
                                                              if (tmp18) {
                                                                tmp55 = null == framePolicy;
                                                              }
                                                              class Pe {
                                                                constructor() {
                                                                  tmp = !hadInvalidUrlError;
                                                                  if (!hadInvalidUrlError) {
                                                                    tmp = hasInvalidUrlError;
                                                                  }
                                                                  if (tmp) {
                                                                    tmp2 = closure_1;
                                                                    tmp3 = closure_3;
                                                                    obj = closure_1(closure_3[26]);
                                                                    obj1 = { title: null, body: null, confirmText: null };
                                                                    tmp4 = closure_0;
                                                                    intl = closure_0(closure_3[27]).intl;
                                                                    obj1.title = intl.string(closure_0(closure_3[27]).t.PtobXW);
                                                                    intl2 = closure_0(closure_3[27]).intl;
                                                                    obj1.body = intl2.string(closure_0(closure_3[27]).t["55iAUT"]);
                                                                    intl3 = closure_0(closure_3[27]).intl;
                                                                    obj1.confirmText = intl3.string(closure_0(closure_3[27]).t.BddRzS);
                                                                    showResult = obj.show(obj1);
                                                                  }
                                                                  return;
                                                                }
                                                              }
                                                              const tmp7Result3 = tmp7(obj2.useState(false), 2);
                                                              closure_27 = tmp7Result3[1];
                                                              const _Symbol2 = Symbol;
                                                              const first = tmp7Result3[0];
                                                              class Ae {
                                                                constructor() {
                                                                  try {
                                                                    tmp = globalThis;
                                                                    _URL = URL;
                                                                    tmp2 = closure_22;
                                                                    tmp3 = new.target;
                                                                    tmp4 = new.target;
                                                                    uRL = new URL(closure_22);
                                                                    tmp6 = closure_16;
                                                                    tmp7 = uRL;
                                                                    tmp8 = closure_16(uRL);
                                                                    return;
                                                                  } catch (tmp9) {
                                                                    tmp10 = closure_24;
                                                                    if (closure_24) {
                                                                      tmp11 = setHasInvalidUrlError;
                                                                      flag = true;
                                                                      tmp12 = setHasInvalidUrlError(true);
                                                                    } else {
                                                                      throw tmp9;
                                                                    }
                                                                  }
                                                                  return;
                                                                }
                                                              }
                                                              if (tmp58 === Symbol.for("react.memo_cache_sentinel")) {
                                                                const items1 = [];
                                                                cResult[62] = items1;
                                                                class Pe {
                                                                  constructor() {
                                                                    tmp = !hadInvalidUrlError;
                                                                    if (!hadInvalidUrlError) {
                                                                      tmp = hasInvalidUrlError;
                                                                    }
                                                                    if (tmp) {
                                                                      tmp2 = closure_1;
                                                                      tmp3 = closure_3;
                                                                      obj = closure_1(closure_3[26]);
                                                                      obj1 = { title: null, body: null, confirmText: null };
                                                                      tmp4 = closure_0;
                                                                      intl = closure_0(closure_3[27]).intl;
                                                                      obj1.title = intl.string(closure_0(closure_3[27]).t.PtobXW);
                                                                      intl2 = closure_0(closure_3[27]).intl;
                                                                      obj1.body = intl2.string(closure_0(closure_3[27]).t["55iAUT"]);
                                                                      intl3 = closure_0(closure_3[27]).intl;
                                                                      obj1.confirmText = intl3.string(closure_0(closure_3[27]).t.BddRzS);
                                                                      showResult = obj.show(obj1);
                                                                    }
                                                                    return;
                                                                  }
                                                                }
                                                              } else {
                                                                const tmp59 = cResult[62];
                                                              }
                                                              const tmp7Result4 = tmp7(obj2.useState(tmp59), 2);
                                                              const first1 = tmp7Result4[0];
                                                              closure_29 = tmp7Result4[1];
                                                              if (cResult[63] === applicationId) {
                                                                if (cResult[64] === tmp55) {
                                                                  let tmp62 = cResult[65];
                                                                  let tmp63 = cResult[66];
                                                                }
                                                                const effect4 = obj2.useEffect(tmp62, tmp63);
                                                                if (cResult[67] === first1) {
                                                                  if (cResult[68] === framePolicy) {
                                                                    closure_30 = tmp67;
                                                                    class Pe {
                                                                      constructor() {
                                                                        tmp = !hadInvalidUrlError;
                                                                        if (!hadInvalidUrlError) {
                                                                          tmp = hasInvalidUrlError;
                                                                        }
                                                                        if (tmp) {
                                                                          tmp2 = closure_1;
                                                                          tmp3 = closure_3;
                                                                          obj = closure_1(closure_3[26]);
                                                                          obj1 = { title: null, body: null, confirmText: null };
                                                                          tmp4 = closure_0;
                                                                          intl = closure_0(closure_3[27]).intl;
                                                                          obj1.title = intl.string(closure_0(closure_3[27]).t.PtobXW);
                                                                          intl2 = closure_0(closure_3[27]).intl;
                                                                          obj1.body = intl2.string(closure_0(closure_3[27]).t["55iAUT"]);
                                                                          intl3 = closure_0(closure_3[27]).intl;
                                                                          obj1.confirmText = intl3.string(closure_0(closure_3[27]).t.BddRzS);
                                                                          showResult = obj.show(obj1);
                                                                        }
                                                                        return;
                                                                      }
                                                                    }
                                                                    closure_31 = tmp68;
                                                                    let origin;
                                                                    if (tmp9 != null) {
                                                                      origin = tmp9.origin;
                                                                    }
                                                                    if (cResult[71] === origin) {
                                                                      if (cResult[72] === tmp17) {
                                                                        if (cResult[73] === isPipOrGridMode) {
                                                                          if (safeAreasConfig != null) {
                                                                            let bottom = safeAreasConfig.bottom;
                                                                          }
                                                                          class Pe {
                                                                            constructor() {
                                                                              tmp = !hadInvalidUrlError;
                                                                              if (!hadInvalidUrlError) {
                                                                                tmp = hasInvalidUrlError;
                                                                              }
                                                                              if (tmp) {
                                                                                tmp2 = closure_1;
                                                                                tmp3 = closure_3;
                                                                                obj = closure_1(closure_3[26]);
                                                                                obj1 = { title: null, body: null, confirmText: null };
                                                                                tmp4 = closure_0;
                                                                                intl = closure_0(closure_3[27]).intl;
                                                                                obj1.title = intl.string(closure_0(closure_3[27]).t.PtobXW);
                                                                                intl2 = closure_0(closure_3[27]).intl;
                                                                                obj1.body = intl2.string(closure_0(closure_3[27]).t["55iAUT"]);
                                                                                intl3 = closure_0(closure_3[27]).intl;
                                                                                obj1.confirmText = intl3.string(closure_0(closure_3[27]).t.BddRzS);
                                                                                showResult = obj.show(obj1);
                                                                              }
                                                                              return;
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                    class Ae {
                                                                      constructor() {
                                                                        try {
                                                                          tmp = globalThis;
                                                                          _URL = URL;
                                                                          tmp2 = closure_22;
                                                                          tmp3 = new.target;
                                                                          tmp4 = new.target;
                                                                          uRL = new URL(closure_22);
                                                                          tmp6 = closure_16;
                                                                          tmp7 = uRL;
                                                                          tmp8 = closure_16(uRL);
                                                                          return;
                                                                        } catch (tmp9) {
                                                                          tmp10 = closure_24;
                                                                          if (closure_24) {
                                                                            tmp11 = setHasInvalidUrlError;
                                                                            flag = true;
                                                                            tmp12 = setHasInvalidUrlError(true);
                                                                          } else {
                                                                            throw tmp9;
                                                                          }
                                                                        }
                                                                        return;
                                                                      }
                                                                    }
                                                                    cResult[71] = origin;
                                                                    cResult[72] = tmp17;
                                                                    cResult[73] = isPipOrGridMode;
                                                                    class Je {
                                                                      constructor() {
                                                                        if (closure_26) {
                                                                          closure_0 = ["'self'"];
                                                                          parseCsp = function parseCsp(arg0, str) {
                                                                            const match = str.match(arg0);
                                                                            if (null !== match) {
                                                                              if (match.length >= 2) {
                                                                                const parts = str.split(" ");
                                                                                const found = parts.filter((item) => !closure_1_0.includes(item));
                                                                              }
                                                                              return [];
                                                                            }
                                                                          };
                                                                          closure_0 = undefined;
                                                                          tmp = onActivityCrash;
                                                                          closure_0 = onActivityCrash(function*() {
                                                                            if (c5 === 2) {
                                                                              c5 = 3;
                                                                              throw new TypeError("Generator functions may not be called on executing generators");
                                                                            } else if (tmp5 === 3) {
                                                                              if (arg0 === 1) {
                                                                                throw value;
                                                                              } else if (arg0 === 2) {
                                                                                const obj2 = { value, done: true };
                                                                                return obj2;
                                                                              } else {
                                                                                return { value: "IconComponent", done: null };
                                                                              }
                                                                            } else {
                                                                              try {
                                                                                c5 = 2;
                                                                                if (0 === c4) {
                                                                                  if (arg0 === 1) {
                                                                                    c5 = 3;
                                                                                    throw value;
                                                                                  } else if (arg0 === 2) {
                                                                                    c5 = 3;
                                                                                    const obj3 = { value, done: true };
                                                                                    return obj3;
                                                                                  } else {
                                                                                    closure_3 = tmp3;
                                                                                    closure_2 = tmp2;
                                                                                    closure_130_0 = undefined;
                                                                                    closure_130_1 = undefined;
                                                                                    closure_130_2 = undefined;
                                                                                    const nonTestModeUrlForApplication = framePolicy(applicationId[29]).getNonTestModeUrlForApplication(closure_2_3);
                                                                                    closure_0 = nonTestModeUrlForApplication;
                                                                                    if (nonTestModeUrlForApplication == null) {
                                                                                      const _HermesInternal = HermesInternal;
                                                                                      closure_0 = "https://" + closure_2_3 + ".discordsays.com";
                                                                                    }
                                                                                    closure_130_0 = closure_0;
                                                                                    const HTTP = framePolicy(applicationId[30]).HTTP;
                                                                                    const obj4 = { url: null, rejectWithError: false };
                                                                                    const _HermesInternal2 = HermesInternal;
                                                                                    obj4.url = "" + closure_0 + "/.discord/csp";
                                                                                    c4 = 1;
                                                                                    c5 = 1;
                                                                                    const obj5 = { value: HTTP.get(obj4), done: false };
                                                                                    return obj5;
                                                                                  }
                                                                                } else if (arg0 === 1) {
                                                                                  c5 = 3;
                                                                                  throw value;
                                                                                } else if (arg0 === 2) {
                                                                                  c5 = 3;
                                                                                  const obj = { value, done: true };
                                                                                  return obj;
                                                                                } else {
                                                                                  closure_130_1 = value.headers["content-security-policy"];
                                                                                  const items = ["about:blank", "file://*", closure_130_0];
                                                                                  parseCsp = 3;
                                                                                  parseCsp = HermesBuiltin.arraySpread(parseCsp(/frame-src (.*?);/, closure_130_1), parseCsp);
                                                                                  parseCsp = HermesBuiltin.arraySpread(parseCsp(/child-src (.*?);/, closure_130_1), parseCsp);
                                                                                  closure_130_2 = items;
                                                                                  closure_2_29(closure_130_2.map((item) => "^" + closure_1_1(closure_1_3[31])(item).replace(/\\\*/g, ".*")));
                                                                                  closure_2_27(true);
                                                                                  c5 = 3;
                                                                                  return { value: "IconComponent", done: null };
                                                                                }
                                                                              } catch (tmp10) {
                                                                                c5 = tmp;
                                                                                throw tmp10;
                                                                              }
                                                                            }
                                                                          });
                                                                          tmp2 = (function fetchAndParseCSP() {
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
                                                                        return;
                                                                      }
                                                                    }
                                                                    cResult[74] = undefined;
                                                                    let left;
                                                                    if (safeAreasConfig != null) {
                                                                      left = safeAreasConfig.left;
                                                                    }
                                                                    cResult[75] = left;
                                                                    let right;
                                                                    if (safeAreasConfig != null) {
                                                                      right = safeAreasConfig.right;
                                                                    }
                                                                    cResult[76] = right;
                                                                    let top;
                                                                    if (safeAreasConfig != null) {
                                                                      top = safeAreasConfig.top;
                                                                    }
                                                                    function qe() {
                                                                      if (closure_30) {
                                                                        if (null != closure_17) {
                                                                          closure_0 = onActivityCrash(function*() {
                                                                            if (c9 === 2) {
                                                                              c9 = 3;
                                                                              throw new TypeError("Generator functions may not be called on executing generators");
                                                                            } else if (tmp6 === 3) {
                                                                              if (arg0 === 1) {
                                                                                throw value;
                                                                              } else if (arg0 === 2) {
                                                                                const obj2 = { value, done: true };
                                                                                return obj2;
                                                                              } else {
                                                                                return { value: "IconComponent", done: null };
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
                                                                                    const obj3 = { value, done: true };
                                                                                    return obj3;
                                                                                  } else {
                                                                                    closure_5 = tmp3;
                                                                                    closure_4 = tmp7;
                                                                                    closure_132_0 = undefined;
                                                                                    if (null != closure_1_17) {
                                                                                      if (null != origin) {
                                                                                        if (c8) {
                                                                                          let rect = { top: 0, bottom: 0, left: 0, right: 0 };
                                                                                        } else {
                                                                                          rect = closure_1_19;
                                                                                        }
                                                                                        const rect2 = c9;
                                                                                        let left;
                                                                                        if (c9 != null) {
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
                                                                                        const rect1 = { left: hadInvalidUrlError(left, c0), right: null, top: null, bottom: null };
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
                                                                                        rect1.right = hadInvalidUrlError(right, c1);
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
                                                                                        rect1.top = hadInvalidUrlError(top, c2);
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
                                                                                        const obj4 = { type: "safeAreaUpdateEvent", data: null };
                                                                                        const obj5 = { insets: null };
                                                                                        rect1.bottom = hadInvalidUrlError(bottom, c3);
                                                                                        obj5.insets = rect1;
                                                                                        obj4.data = obj5;
                                                                                        const tmp33 = iframeId(applicationId[34])(obj4, tmp16);
                                                                                        closure_132_0 = tmp33;
                                                                                        c7 = 1;
                                                                                        c8 = 2;
                                                                                        c9 = 1;
                                                                                        const obj6 = { value: closure_1_17.injectJavaScript(tmp33), done: false };
                                                                                        return obj6;
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                } else {
                                                                                  if (1 === tmp7) {
                                                                                    c7 = 0;
                                                                                    if (null != ref.current) {
                                                                                      const current = ref.current;
                                                                                      current.injectJavaScript(closure_132_0);
                                                                                    }
                                                                                  } else if (arg0 === 1) {
                                                                                    c9 = 3;
                                                                                    throw value;
                                                                                  } else if (arg0 !== 2) {
                                                                                    c7 = 0;
                                                                                  }
                                                                                  c7 = 0;
                                                                                  c9 = 3;
                                                                                  const obj = { value, done: true };
                                                                                  return obj;
                                                                                }
                                                                                c9 = 3;
                                                                              } catch (tmp34) {
                                                                                closure_6 = tmp34;
                                                                                if (tmp4 === c7) {
                                                                                  c9 = tmp2;
                                                                                  throw tmp34;
                                                                                } else {
                                                                                  c8 = tmp;
                                                                                }
                                                                              }
                                                                            }
                                                                          });
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
                                                                    }
                                                                    cResult[77] = top;
                                                                    cResult[78] = null != tmp51 && null != tmp9 && null != tmp14;
                                                                    cResult[79] = tmp11;
                                                                    cResult[80] = qe;
                                                                  }
                                                                }
                                                                class Pe {
                                                                  constructor() {
                                                                    tmp = !hadInvalidUrlError;
                                                                    if (!hadInvalidUrlError) {
                                                                      tmp = hasInvalidUrlError;
                                                                    }
                                                                    if (tmp) {
                                                                      tmp2 = closure_1;
                                                                      tmp3 = closure_3;
                                                                      obj = closure_1(closure_3[26]);
                                                                      obj1 = { title: null, body: null, confirmText: null };
                                                                      tmp4 = closure_0;
                                                                      intl = closure_0(closure_3[27]).intl;
                                                                      obj1.title = intl.string(closure_0(closure_3[27]).t.PtobXW);
                                                                      intl2 = closure_0(closure_3[27]).intl;
                                                                      obj1.body = intl2.string(closure_0(closure_3[27]).t["55iAUT"]);
                                                                      intl3 = closure_0(closure_3[27]).intl;
                                                                      obj1.confirmText = intl3.string(closure_0(closure_3[27]).t.BddRzS);
                                                                      showResult = obj.show(obj1);
                                                                    }
                                                                    return;
                                                                  }
                                                                }
                                                                cResult[67] = first1;
                                                                cResult[68] = framePolicy;
                                                                class Ae {
                                                                  constructor() {
                                                                    try {
                                                                      tmp = globalThis;
                                                                      _URL = URL;
                                                                      tmp2 = closure_22;
                                                                      tmp3 = new.target;
                                                                      tmp4 = new.target;
                                                                      uRL = new URL(closure_22);
                                                                      tmp6 = closure_16;
                                                                      tmp7 = uRL;
                                                                      tmp8 = closure_16(uRL);
                                                                      return;
                                                                    } catch (tmp9) {
                                                                      tmp10 = closure_24;
                                                                      if (closure_24) {
                                                                        tmp11 = setHasInvalidUrlError;
                                                                        flag = true;
                                                                        tmp12 = setHasInvalidUrlError(true);
                                                                      } else {
                                                                        throw tmp9;
                                                                      }
                                                                    }
                                                                    return;
                                                                  }
                                                                }
                                                                cResult[70] = tmp66;
                                                              }
                                                              class Je {
                                                                constructor() {
                                                                  if (closure_26) {
                                                                    closure_0 = ["'self'"];
                                                                    parseCsp = function parseCsp(arg0, str) {
                                                                      const match = str.match(arg0);
                                                                      if (null !== match) {
                                                                        if (match.length >= 2) {
                                                                          const parts = str.split(" ");
                                                                          const found = parts.filter((item) => !closure_1_0.includes(item));
                                                                        }
                                                                        return [];
                                                                      }
                                                                    };
                                                                    closure_0 = undefined;
                                                                    tmp = onActivityCrash;
                                                                    closure_0 = onActivityCrash(function*() {
                                                                      if (c5 === 2) {
                                                                        c5 = 3;
                                                                        throw new TypeError("Generator functions may not be called on executing generators");
                                                                      } else if (tmp5 === 3) {
                                                                        if (arg0 === 1) {
                                                                          throw value;
                                                                        } else if (arg0 === 2) {
                                                                          const obj2 = { value, done: true };
                                                                          return obj2;
                                                                        } else {
                                                                          return { value: "IconComponent", done: null };
                                                                        }
                                                                      } else {
                                                                        try {
                                                                          c5 = 2;
                                                                          if (0 === c4) {
                                                                            if (arg0 === 1) {
                                                                              c5 = 3;
                                                                              throw value;
                                                                            } else if (arg0 === 2) {
                                                                              c5 = 3;
                                                                              const obj3 = { value, done: true };
                                                                              return obj3;
                                                                            } else {
                                                                              closure_3 = tmp3;
                                                                              closure_2 = tmp2;
                                                                              closure_130_0 = undefined;
                                                                              closure_130_1 = undefined;
                                                                              closure_130_2 = undefined;
                                                                              const nonTestModeUrlForApplication = framePolicy(applicationId[29]).getNonTestModeUrlForApplication(closure_2_3);
                                                                              closure_0 = nonTestModeUrlForApplication;
                                                                              if (nonTestModeUrlForApplication == null) {
                                                                                const _HermesInternal = HermesInternal;
                                                                                closure_0 = "https://" + closure_2_3 + ".discordsays.com";
                                                                              }
                                                                              closure_130_0 = closure_0;
                                                                              const HTTP = framePolicy(applicationId[30]).HTTP;
                                                                              const obj4 = { url: null, rejectWithError: false };
                                                                              const _HermesInternal2 = HermesInternal;
                                                                              obj4.url = "" + closure_0 + "/.discord/csp";
                                                                              c4 = 1;
                                                                              c5 = 1;
                                                                              const obj5 = { value: HTTP.get(obj4), done: false };
                                                                              return obj5;
                                                                            }
                                                                          } else if (arg0 === 1) {
                                                                            c5 = 3;
                                                                            throw value;
                                                                          } else if (arg0 === 2) {
                                                                            c5 = 3;
                                                                            const obj = { value, done: true };
                                                                            return obj;
                                                                          } else {
                                                                            closure_130_1 = value.headers["content-security-policy"];
                                                                            const items = ["about:blank", "file://*", closure_130_0];
                                                                            parseCsp = 3;
                                                                            parseCsp = HermesBuiltin.arraySpread(parseCsp(/frame-src (.*?);/, closure_130_1), parseCsp);
                                                                            parseCsp = HermesBuiltin.arraySpread(parseCsp(/child-src (.*?);/, closure_130_1), parseCsp);
                                                                            closure_130_2 = items;
                                                                            closure_2_29(closure_130_2.map((item) => "^" + closure_1_1(closure_1_3[31])(item).replace(/\\\*/g, ".*")));
                                                                            closure_2_27(true);
                                                                            c5 = 3;
                                                                            return { value: "IconComponent", done: null };
                                                                          }
                                                                        } catch (tmp10) {
                                                                          c5 = tmp;
                                                                          throw tmp10;
                                                                        }
                                                                      }
                                                                    });
                                                                    tmp2 = (function fetchAndParseCSP() {
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
                                                                  return;
                                                                }
                                                              }
                                                              const items2 = [applicationId, tmp55];
                                                              cResult[63] = applicationId;
                                                              cResult[64] = tmp55;
                                                              cResult[65] = Je;
                                                              cResult[66] = items2;
                                                              tmp63 = items2;
                                                              tmp62 = Je;
                                                            }
                                                          }
                                                          combined1 = null;
                                                          if (null == tmp9) {
                                                            if (tmp48 != null) {
                                                              const uri = tmp48.uri;
                                                            }
                                                            class Pe {
                                                              constructor() {
                                                                tmp = !hadInvalidUrlError;
                                                                if (!hadInvalidUrlError) {
                                                                  tmp = hasInvalidUrlError;
                                                                }
                                                                if (tmp) {
                                                                  tmp2 = closure_1;
                                                                  tmp3 = closure_3;
                                                                  obj = closure_1(closure_3[26]);
                                                                  obj1 = { title: null, body: null, confirmText: null };
                                                                  tmp4 = closure_0;
                                                                  intl = closure_0(closure_3[27]).intl;
                                                                  obj1.title = intl.string(closure_0(closure_3[27]).t.PtobXW);
                                                                  intl2 = closure_0(closure_3[27]).intl;
                                                                  obj1.body = intl2.string(closure_0(closure_3[27]).t["55iAUT"]);
                                                                  intl3 = closure_0(closure_3[27]).intl;
                                                                  obj1.confirmText = intl3.string(closure_0(closure_3[27]).t.BddRzS);
                                                                  showResult = obj.show(obj1);
                                                                }
                                                                return;
                                                              }
                                                            }
                                                            cResult[59] = tmp9;
                                                            cResult[60] = tmp14;
                                                            class Ae {
                                                              constructor() {
                                                                try {
                                                                  tmp = globalThis;
                                                                  _URL = URL;
                                                                  tmp2 = closure_22;
                                                                  tmp3 = new.target;
                                                                  tmp4 = new.target;
                                                                  uRL = new URL(closure_22);
                                                                  tmp6 = closure_16;
                                                                  tmp7 = uRL;
                                                                  tmp8 = closure_16(uRL);
                                                                  return;
                                                                } catch (tmp9) {
                                                                  tmp10 = closure_24;
                                                                  if (closure_24) {
                                                                    tmp11 = setHasInvalidUrlError;
                                                                    flag = true;
                                                                    tmp12 = setHasInvalidUrlError(true);
                                                                  } else {
                                                                    throw tmp9;
                                                                  }
                                                                }
                                                                return;
                                                              }
                                                            }
                                                          } else if (tmp18) {
                                                            let _HermesInternal = HermesInternal;
                                                            combined1 = "file://" + tmp14;
                                                          } else {
                                                            combined1 = undefined;
                                                            if (tmp48 != null) {
                                                              combined1 = tmp48.uri;
                                                            }
                                                            if (combined1 == null) {
                                                              combined1 = null;
                                                            }
                                                          }
                                                        }
                                                        class Pe {
                                                          constructor() {
                                                            tmp = !hadInvalidUrlError;
                                                            if (!hadInvalidUrlError) {
                                                              tmp = hasInvalidUrlError;
                                                            }
                                                            if (tmp) {
                                                              tmp2 = closure_1;
                                                              tmp3 = closure_3;
                                                              obj = closure_1(closure_3[26]);
                                                              obj1 = { title: null, body: null, confirmText: null };
                                                              tmp4 = closure_0;
                                                              intl = closure_0(closure_3[27]).intl;
                                                              obj1.title = intl.string(closure_0(closure_3[27]).t.PtobXW);
                                                              intl2 = closure_0(closure_3[27]).intl;
                                                              obj1.body = intl2.string(closure_0(closure_3[27]).t["55iAUT"]);
                                                              intl3 = closure_0(closure_3[27]).intl;
                                                              obj1.confirmText = intl3.string(closure_0(closure_3[27]).t.BddRzS);
                                                              showResult = obj.show(obj1);
                                                            }
                                                            return;
                                                          }
                                                        }
                                                        if (!tmp18) {
                                                          let androidWebViewShellConfig = null;
                                                          if (null != tmp9) {
                                                            androidWebViewShellConfig = null;
                                                            if (null != tmp14) {
                                                              let obj6 = { iframeUrl: tmp9, shellFilePath: null };
                                                              class Pe {
                                                                constructor() {
                                                                  tmp = !hadInvalidUrlError;
                                                                  if (!hadInvalidUrlError) {
                                                                    tmp = hasInvalidUrlError;
                                                                  }
                                                                  if (tmp) {
                                                                    tmp2 = closure_1;
                                                                    tmp3 = closure_3;
                                                                    obj = closure_1(closure_3[26]);
                                                                    obj1 = { title: null, body: null, confirmText: null };
                                                                    tmp4 = closure_0;
                                                                    intl = closure_0(closure_3[27]).intl;
                                                                    obj1.title = intl.string(closure_0(closure_3[27]).t.PtobXW);
                                                                    intl2 = closure_0(closure_3[27]).intl;
                                                                    obj1.body = intl2.string(closure_0(closure_3[27]).t["55iAUT"]);
                                                                    intl3 = closure_0(closure_3[27]).intl;
                                                                    obj1.confirmText = intl3.string(closure_0(closure_3[27]).t.BddRzS);
                                                                    showResult = obj.show(obj1);
                                                                  }
                                                                  return;
                                                                }
                                                              }
                                                              androidWebViewShellConfig = tmp(tmp2[28]).getAndroidWebViewShellConfig(obj6);
                                                              const tmpResult8 = tmp(tmp2[28]);
                                                            }
                                                          }
                                                        }
                                                        cResult[55] = tmp9;
                                                        cResult[56] = tmp14;
                                                        class Ae {
                                                          constructor() {
                                                            try {
                                                              tmp = globalThis;
                                                              _URL = URL;
                                                              tmp2 = closure_22;
                                                              tmp3 = new.target;
                                                              tmp4 = new.target;
                                                              uRL = new URL(closure_22);
                                                              tmp6 = closure_16;
                                                              tmp7 = uRL;
                                                              tmp8 = closure_16(uRL);
                                                              return;
                                                            } catch (tmp9) {
                                                              tmp10 = closure_24;
                                                              if (closure_24) {
                                                                tmp11 = setHasInvalidUrlError;
                                                                flag = true;
                                                                tmp12 = setHasInvalidUrlError(true);
                                                              } else {
                                                                throw tmp9;
                                                              }
                                                            }
                                                            return;
                                                          }
                                                        }
                                                        cResult[57] = androidWebViewShellConfig;
                                                        tmp48 = androidWebViewShellConfig;
                                                      }
                                                    }
                                                    class Pe {
                                                      constructor() {
                                                        tmp = !hadInvalidUrlError;
                                                        if (!hadInvalidUrlError) {
                                                          tmp = hasInvalidUrlError;
                                                        }
                                                        if (tmp) {
                                                          tmp2 = closure_1;
                                                          tmp3 = closure_3;
                                                          obj = closure_1(closure_3[26]);
                                                          obj1 = { title: null, body: null, confirmText: null };
                                                          tmp4 = closure_0;
                                                          intl = closure_0(closure_3[27]).intl;
                                                          obj1.title = intl.string(closure_0(closure_3[27]).t.PtobXW);
                                                          intl2 = closure_0(closure_3[27]).intl;
                                                          obj1.body = intl2.string(closure_0(closure_3[27]).t["55iAUT"]);
                                                          intl3 = closure_0(closure_3[27]).intl;
                                                          obj1.confirmText = intl3.string(closure_0(closure_3[27]).t.BddRzS);
                                                          showResult = obj.show(obj1);
                                                        }
                                                        return;
                                                      }
                                                    }
                                                    const items3 = [hasInvalidUrlError, hadInvalidUrlError, onInvalidUrl];
                                                    class Ae {
                                                      constructor() {
                                                        try {
                                                          tmp = globalThis;
                                                          _URL = URL;
                                                          tmp2 = closure_22;
                                                          tmp3 = new.target;
                                                          tmp4 = new.target;
                                                          uRL = new URL(closure_22);
                                                          tmp6 = closure_16;
                                                          tmp7 = uRL;
                                                          tmp8 = closure_16(uRL);
                                                          return;
                                                        } catch (tmp9) {
                                                          tmp10 = closure_24;
                                                          if (closure_24) {
                                                            tmp11 = setHasInvalidUrlError;
                                                            flag = true;
                                                            tmp12 = setHasInvalidUrlError(true);
                                                          } else {
                                                            throw tmp9;
                                                          }
                                                        }
                                                        return;
                                                      }
                                                    }
                                                    cResult[51] = hasInvalidUrlError;
                                                    cResult[52] = onInvalidUrl;
                                                    cResult[53] = tmp46;
                                                    cResult[54] = items3;
                                                    tmp45 = items3;
                                                    tmp44 = tmp46;
                                                  }
                                                  class Pe {
                                                    constructor() {
                                                      tmp = !hadInvalidUrlError;
                                                      if (!hadInvalidUrlError) {
                                                        tmp = hasInvalidUrlError;
                                                      }
                                                      if (tmp) {
                                                        tmp2 = closure_1;
                                                        tmp3 = closure_3;
                                                        obj = closure_1(closure_3[26]);
                                                        obj1 = { title: null, body: null, confirmText: null };
                                                        tmp4 = closure_0;
                                                        intl = closure_0(closure_3[27]).intl;
                                                        obj1.title = intl.string(closure_0(closure_3[27]).t.PtobXW);
                                                        intl2 = closure_0(closure_3[27]).intl;
                                                        obj1.body = intl2.string(closure_0(closure_3[27]).t["55iAUT"]);
                                                        intl3 = closure_0(closure_3[27]).intl;
                                                        obj1.confirmText = intl3.string(closure_0(closure_3[27]).t.BddRzS);
                                                        showResult = obj.show(obj1);
                                                      }
                                                      return;
                                                    }
                                                  }
                                                  const items4 = [hadInvalidUrlError, hasInvalidUrlError];
                                                  cResult[46] = hadInvalidUrlError;
                                                  class Ae {
                                                    constructor() {
                                                      try {
                                                        tmp = globalThis;
                                                        _URL = URL;
                                                        tmp2 = closure_22;
                                                        tmp3 = new.target;
                                                        tmp4 = new.target;
                                                        uRL = new URL(closure_22);
                                                        tmp6 = closure_16;
                                                        tmp7 = uRL;
                                                        tmp8 = closure_16(uRL);
                                                        return;
                                                      } catch (tmp9) {
                                                        tmp10 = closure_24;
                                                        if (closure_24) {
                                                          tmp11 = setHasInvalidUrlError;
                                                          flag = true;
                                                          tmp12 = setHasInvalidUrlError(true);
                                                        } else {
                                                          throw tmp9;
                                                        }
                                                      }
                                                      return;
                                                    }
                                                  }
                                                  cResult[47] = hasInvalidUrlError;
                                                  cResult[48] = Pe;
                                                  cResult[49] = items4;
                                                  tmp42 = items4;
                                                }
                                              }
                                              const items5 = [, stateFromStores, setHasInvalidUrlError];
                                              cResult[42] = combined;
                                              class Ae {
                                                constructor() {
                                                  try {
                                                    tmp = globalThis;
                                                    _URL = URL;
                                                    tmp2 = closure_22;
                                                    tmp3 = new.target;
                                                    tmp4 = new.target;
                                                    uRL = new URL(closure_22);
                                                    tmp6 = closure_16;
                                                    tmp7 = uRL;
                                                    tmp8 = closure_16(uRL);
                                                    return;
                                                  } catch (tmp9) {
                                                    tmp10 = closure_24;
                                                    if (closure_24) {
                                                      tmp11 = setHasInvalidUrlError;
                                                      flag = true;
                                                      tmp12 = setHasInvalidUrlError(true);
                                                    } else {
                                                      throw tmp9;
                                                    }
                                                  }
                                                  return;
                                                }
                                              }
                                              cResult[44] = setHasInvalidUrlError;
                                              cResult[45] = items5;
                                              tmp39 = items5;
                                            }
                                          }
                                        }
                                        class Ae {
                                          constructor() {
                                            try {
                                              tmp = globalThis;
                                              _URL = URL;
                                              tmp2 = closure_22;
                                              tmp3 = new.target;
                                              tmp4 = new.target;
                                              uRL = new URL(closure_22);
                                              tmp6 = closure_16;
                                              tmp7 = uRL;
                                              tmp8 = closure_16(uRL);
                                              return;
                                            } catch (tmp9) {
                                              tmp10 = closure_24;
                                              if (closure_24) {
                                                tmp11 = setHasInvalidUrlError;
                                                flag = true;
                                                tmp12 = setHasInvalidUrlError(true);
                                              } else {
                                                throw tmp9;
                                              }
                                            }
                                            return;
                                          }
                                        }
                                        cResult[37] = combined;
                                        cResult[38] = stateFromStores;
                                        cResult[39] = setHasInvalidUrlError;
                                        cResult[40] = tmp10;
                                        cResult[41] = Ae;
                                        tmp38 = Ae;
                                        const tmpResult7 = tmp(tmp2[25]);
                                      }
                                    }
                                  }
                                }
                                function ye() {
                                  hasInvalidUrlError.warn("activity WebView content process terminated for appId " + applicationId);
                                  AnalyticsUtilsDefault.track(AnalyticEvents.ACTIVITY_WEB_VIEW_CONTENT_PROCESS_TERMINATED, { application_id: applicationId, channel_id: channelId, guild_id: guildId, activity_session_id: activitySessionId });
                                  onActivityCrash();
                                }
                                cResult[29] = activitySessionId;
                                cResult[31] = channelId;
                                cResult[32] = guildId;
                                cResult[33] = onActivityCrash;
                                cResult[34] = ye;
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                  const items6 = [, tmp22, onLoadError, referrerPolicy, iframeId, num3, , tmp26];
                  cResult[16] = tmp26;
                  cResult[17] = iframeId;
                  cResult[19] = combined;
                  cResult[20] = onLoadError;
                  cResult[21] = referrerPolicy;
                  cResult[22] = shellBridgeSecret;
                  cResult[23] = num3;
                  cResult[24] = items6;
                  tmp29 = items6;
                }
              }
            }
          }
        }
      }
    }
  }
  function fe() {
    closure_0 = onActivityCrash(function*() {
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c3 = 2;
          if (0 === shellBridgeSecret) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              iframeId = tmp2;
              closure_0 = tmp5;
              closure_128_0 = undefined;
              const obj4 = { iframeId, iframeUri, iframeSandboxAttributes, referrerPolicy, shimVersion, shellBridgeSecret, iframeCsp };
              shellBridgeSecret = 1;
              c3 = 1;
              const obj5 = { value: iframeId(applicationId[23])(obj4), done: false };
              return obj5;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            closure_128_0 = value;
            if (null != closure_128_0) {
              closure_1_18(closure_128_0);
            } else {
              onLoadError();
            }
            c3 = 3;
          }
        } catch (tmp17) {
          c3 = tmp;
          throw tmp17;
        }
      }
    });
    (function loadHtml() {
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
  cResult[6] = tmp26;
  cResult[7] = iframeId;
  cResult[8] = tmp22;
  cResult[9] = combined;
  cResult[10] = onLoadError;
  cResult[11] = referrerPolicy;
  cResult[12] = tmp15;
  cResult[13] = shellBridgeSecret;
  cResult[14] = num3;
  cResult[15] = fe;
  tmp28 = fe;
}) : (function BaseEmbeddedAppWebViewContent(framePolicy) {
  framePolicy = framePolicy.framePolicy;
  let iframeId = framePolicy.iframeId;
  let shellBridgeSecret = framePolicy.shellBridgeSecret;
  let deepLinkQueryParams = framePolicy.deepLinkQueryParams;
  if (deepLinkQueryParams === undefined) {
    deepLinkQueryParams = {};
  }
  const applicationId = framePolicy.applicationId;
  ({ queryParams, onActivityCrash } = framePolicy);
  const onLoadError = framePolicy.onLoadError;
  const onInvalidUrl = framePolicy.onInvalidUrl;
  const referrerPolicy = framePolicy.referrerPolicy;
  const isPipOrGridMode = framePolicy.isPipOrGridMode;
  ({ ignoreSilentHardwareSwitch, activityUrl, allowPopups } = framePolicy);
  if (ignoreSilentHardwareSwitch === undefined) {
    ignoreSilentHardwareSwitch = true;
  }
  const safeAreasConfig = framePolicy.safeAreasConfig;
  const channelId = framePolicy.channelId;
  const guildId = framePolicy.guildId;
  const activitySessionId = framePolicy.activitySessionId;
  c16 = undefined;
  let memo;
  c18 = undefined;
  closure_21 = undefined;
  let combined;
  c23 = undefined;
  let stateFromStores;
  let combined1;
  closure_26 = undefined;
  c27 = undefined;
  let first;
  closure_29 = undefined;
  closure_30 = undefined;
  let ref;
  let origin;
  const context = onInvalidUrl.useContext(framePolicy(applicationId[14]).WebViewContext);
  const tmp5 = memo();
  const hasInvalidUrlError = tmp5.hasInvalidUrlError;
  const setHasInvalidUrlError = tmp5.setHasInvalidUrlError;
  const hadInvalidUrlError = tmp5.hadInvalidUrlError;
  let tmp = activitySessionId();
  [tmp8, c16] = onLoadError(onInvalidUrl.useState(null), 2);
  let items = [iframeId];
  memo = onInvalidUrl.useMemo(() => WebView.getWebViewProxy(iframeId), items);
  const tmp7 = onLoadError(onInvalidUrl.useState(null), 2);
  [tmp11, c18] = onLoadError(onInvalidUrl.useState(null), 2);
  let rect = iframeId(applicationId[16])();
  let tmp10 = onLoadError(onInvalidUrl.useState(null), 2);
  let tmp12 = iframeId;
  let num = 1;
  if (!setHasInvalidUrlError) {
    num = obj3.useEmbeddedAppShimVersion("BaseEmbeddedAppWebView");
  }
  obj3 = framePolicy(applicationId[17]);
  let obj = {};
  constants = shellBridgeSecret(applicationId[18]).getConstants();
  const merged = Object.assign(queryParams);
  const merged1 = Object.assign(deepLinkQueryParams);
  obj.frame_id = iframeId;
  obj.platform = framePolicy(applicationId[19]).ActivityPlatform.MOBILE;
  obj.mobile_app_version = constants.Version;
  let max = globalThis;
  obj[framePolicy(applicationId[20]).SHIM_VERSION_PARAM] = "" + num;
  const tmp17 = tmp12(applicationId[21])({ allowPopups });
  closure_21 = tmp17;
  const uRLSearchParams = new URLSearchParams(obj);
  combined = "" + activityUrl + "?" + uRLSearchParams;
  let result;
  if (null != framePolicy) {
    result = tmp2(tmp3[22]).deriveIframeCSPAttributeFromPolicy(framePolicy.policy);
    const tmp2Result = tmp2(tmp3[22]);
  }
  c23 = result;
  const items1 = [combined, tmp17, onLoadError, referrerPolicy, iframeId, num, shellBridgeSecret, result];
  const effect = obj2.useEffect(() => {
    closure_0 = async function _loadHtml2() {
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c3 = 2;
          if (0 === shellBridgeSecret) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              iframeId = tmp2;
              closure_0 = tmp5;
              closure_128_0 = undefined;
              const obj4 = { iframeId, iframeUri, iframeSandboxAttributes, referrerPolicy, shimVersion, shellBridgeSecret, iframeCsp };
              shellBridgeSecret = 1;
              c3 = 1;
              const obj5 = { value: iframeId(applicationId[23])(obj4), done: false };
              return obj5;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            closure_128_0 = value;
            if (null != closure_128_0) {
              closure_1_18(closure_128_0);
            } else {
              onLoadError();
            }
            c3 = 3;
          }
        } catch (tmp17) {
          c3 = tmp;
          throw tmp17;
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
  const items2 = [applicationId];
  const items3 = [applicationId];
  const callback = obj2.useCallback((nativeEvent) => {
    hasInvalidUrlError.warn("activity WebView error for appId " + applicationId + ". " + JSON.stringify(nativeEvent.nativeEvent));
  }, items2);
  const items4 = [applicationId, channelId, guildId, activitySessionId, onActivityCrash];
  const callback1 = obj2.useCallback((nativeEvent) => {
    hasInvalidUrlError.warn("activity WebView render process gone for appId " + applicationId + ". " + JSON.stringify(nativeEvent.nativeEvent));
  }, items3);
  const callback2 = obj2.useCallback(() => {
    hasInvalidUrlError.warn("activity WebView content process terminated for appId " + applicationId);
    AnalyticsUtilsDefault.track(AnalyticEvents.ACTIVITY_WEB_VIEW_CONTENT_PROCESS_TERMINATED, { application_id: applicationId, channel_id: channelId, guild_id: guildId, activity_session_id: activitySessionId });
    onActivityCrash();
  }, items4);
  let obj4 = shellBridgeSecret(applicationId[18]);
  const items5 = [isPipOrGridMode];
  stateFromStores = framePolicy(applicationId[25]).useStateFromStores(items5, () => isPipOrGridMode.getUseActivityUrlOverride());
  const items6 = [combined, stateFromStores, setHasInvalidUrlError];
  const effect1 = obj2.useEffect(() => {
    try {
      const _URL = URL;
      const uRL = new URL(combined);
      _undefined(uRL);
    } catch (tmp9) {
      if (stateFromStores) {
        setHasInvalidUrlError(true);
      } else {
        throw tmp9;
      }
    }
  }, items6);
  const items7 = [hadInvalidUrlError, hasInvalidUrlError];
  const effect2 = obj2.useEffect(() => {
    let tmp = !hadInvalidUrlError;
    if (!hadInvalidUrlError) {
      tmp = hasInvalidUrlError;
    }
    if (tmp) {
      const obj2 = { title: null, body: null, confirmText: null };
      const intl = util.intl;
      obj2.title = intl.string(util.t.PtobXW);
      const intl2 = util.intl;
      obj2.body = intl2.string(util.t["55iAUT"]);
      const intl3 = util.intl;
      obj2.confirmText = intl3.string(util.t.BddRzS);
      AlertActionCreatorsDefault.show(obj2);
    }
  }, items7);
  const items8 = [hasInvalidUrlError, hadInvalidUrlError, onInvalidUrl];
  const effect3 = obj2.useEffect(() => {
    let tmp2 = null != onInvalidUrl;
    if (tmp2) {
      tmp2 = !hadInvalidUrlError;
    }
    if (tmp2) {
      tmp2 = hasInvalidUrlError;
    }
    if (tmp2) {
      onInvalidUrl();
    }
  }, items8);
  let androidWebViewShellConfig = null;
  if (!setHasInvalidUrlError) {
    androidWebViewShellConfig = null;
    if (null != tmp8) {
      androidWebViewShellConfig = null;
      if (null != tmp11) {
        let obj5 = { iframeUrl: tmp8, shellFilePath: tmp11 };
        androidWebViewShellConfig = tmp2(tmp3[28]).getAndroidWebViewShellConfig(obj5);
        const tmp2Result5 = tmp2(tmp3[28]);
      }
    }
  }
  combined1 = null;
  if (null == tmp8) {
    let tmp32 = tmp13;
    if (tmp13) {
      tmp32 = null == framePolicy;
    }
    closure_26 = tmp32;
    [tmp34, c27] = tmp6(obj2.useState(false), 2);
    const tmp6Result2 = tmp6(obj2.useState([]), 2);
    first = tmp6Result2[0];
    closure_29 = tmp6Result2[1];
    const items9 = [applicationId, tmp32];
    const effect4 = obj2.useEffect(() => {
      if (closure_26) {
        function parseCsp(arg0, str) {
          const match = str.match(arg0);
          if (null !== match) {
            if (match.length >= 2) {
              const parts = str.split(" ");
              const found = parts.filter((item) => !closure_1_0.includes(item));
            }
            return [];
          }
        }
        closure_2 = async function _fetchAndParseCSP2() {
          if (c5 === 2) {
            c5 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp5 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj2 = { value, done: true };
              return obj2;
            } else {
              return { value: "IconComponent", done: null };
            }
          } else {
            try {
              c5 = 2;
              if (0 === c4) {
                if (arg0 === 1) {
                  c5 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c5 = 3;
                  const obj3 = { value, done: true };
                  return obj3;
                } else {
                  closure_3 = tmp3;
                  closure_2 = tmp2;
                  closure_130_0 = undefined;
                  closure_130_1 = undefined;
                  closure_130_2 = undefined;
                  const nonTestModeUrlForApplication = framePolicy(dependencyMap[29]).getNonTestModeUrlForApplication(closure_3);
                  closure_0 = nonTestModeUrlForApplication;
                  if (nonTestModeUrlForApplication == null) {
                    const _HermesInternal = HermesInternal;
                    closure_0 = "https://" + closure_3 + ".discordsays.com";
                  }
                  closure_130_0 = closure_0;
                  const HTTP = framePolicy(dependencyMap[30]).HTTP;
                  const obj4 = { url: null, rejectWithError: false };
                  const _HermesInternal2 = HermesInternal;
                  obj4.url = "" + closure_0 + "/.discord/csp";
                  c4 = 1;
                  c5 = 1;
                  const obj5 = { value: HTTP.get(obj4), done: false };
                  return obj5;
                }
              } else if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 3;
                const obj = { value, done: true };
                return obj;
              } else {
                closure_130_1 = value.headers["content-security-policy"];
                const items = ["about:blank", "file://*", closure_130_0];
                closure_1 = 3;
                closure_1 = HermesBuiltin.arraySpread(closure_131_1(/frame-src (.*?);/, closure_130_1), closure_1);
                closure_1 = HermesBuiltin.arraySpread(closure_131_1(/child-src (.*?);/, closure_130_1), closure_1);
                closure_130_2 = items;
                closure_1_29(closure_130_2.map((item) => "^" + closure_1_1(closure_1_3[31])(item).replace(/\\\*/g, ".*")));
                closure_1_27(true);
                c5 = 3;
                return { value: "IconComponent", done: null };
              }
            } catch (tmp10) {
              c5 = tmp;
              throw tmp10;
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
    }, items9);
    const items10 = [null, first, framePolicy];
    let tmp39 = null != null;
    const callback3 = obj2.useCallback((mainDocumentURL) => {
      mainDocumentURL = mainDocumentURL.mainDocumentURL;
      if (null != combined1) {
        if (null != mainDocumentURL) {
          if (mainDocumentURL !== combined1) {
            Linking.openURL(mainDocumentURL.url);
            return false;
          }
        }
      }
      if (null != framePolicy) {
        if (obj2.isAllowedFrameNavigation(mainDocumentURL.url, framePolicy.routerOrigin, framePolicy.policy)) {
          return true;
        }
        obj2 = isAllowedFrameNavigation;
      } else {
        const iter = first[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let _RegExp = RegExp;
          let tmp8 = new.target;
          let tmp9 = new.target;
          let regExp = new RegExp(nextResult);
          if (regExp.test(mainDocumentURL.url)) {
            iter.return();
            let flag = true;
            return true;
          }
        }
      }
      let str = DeveloperActivityShelfStore.getActivityUrlOverride();
      if (str == null) {
        str = "";
      }
      const toURLSafeResult = URLUtilsDefault.toURLSafe(str);
      const toURLSafeResult1 = URLUtilsDefault.toURLSafe(mainDocumentURL.url);
      return null != toURLSafeResult && null != toURLSafeResult1 && toURLSafeResult.origin + toURLSafeResult.pathname === toURLSafeResult1.origin + toURLSafeResult1.pathname;
    }, items10);
    if (tmp39) {
      tmp39 = null != tmp8;
    }
    if (tmp39) {
      tmp39 = null != tmp11;
    }
    closure_30 = tmp39;
    ref = obj2.useRef(null);
    origin = undefined;
    if (tmp8 != null) {
      origin = tmp8.origin;
    }
    const items11 = [rect, isPipOrGridMode, tmp39, memo, origin, safeAreasConfig];
    const effect5 = obj2.useEffect(() => {
      if (closure_30) {
        if (null != memo) {
          closure_0 = async function _tryInjectJavaScript2() {
            if (c9 === 2) {
              c9 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp6 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                const obj2 = { value, done: true };
                return obj2;
              } else {
                return { value: "IconComponent", done: null };
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
                    const obj3 = { value, done: true };
                    return obj3;
                  } else {
                    closure_5 = tmp3;
                    closure_4 = tmp7;
                    closure_132_0 = undefined;
                    if (null != memo) {
                      if (null != origin) {
                        if (c8) {
                          rect = { top: 0, bottom: 0, left: 0, right: 0 };
                        } else {
                          rect = closure_1_19;
                        }
                        const rect2 = c9;
                        let left;
                        if (c9 != null) {
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
                        const rect1 = { left: hadInvalidUrlError(left, c0), right: null, top: null, bottom: null };
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
                        rect1.right = hadInvalidUrlError(right, c1);
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
                        rect1.top = hadInvalidUrlError(top, c2);
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
                        const obj4 = { type: "safeAreaUpdateEvent", data: null };
                        const obj5 = { insets: null };
                        rect1.bottom = hadInvalidUrlError(bottom, c3);
                        obj5.insets = rect1;
                        obj4.data = obj5;
                        const tmp33 = iframeId(applicationId[34])(obj4, tmp16);
                        closure_132_0 = tmp33;
                        c7 = 1;
                        c8 = 2;
                        c9 = 1;
                        const obj6 = { value: memo.injectJavaScript(tmp33), done: false };
                        return obj6;
                      }
                    }
                  }
                } else {
                  if (1 === tmp7) {
                    c7 = 0;
                    if (null != ref.current) {
                      const current = ref.current;
                      current.injectJavaScript(closure_132_0);
                    }
                  } else if (arg0 === 1) {
                    c9 = 3;
                    throw value;
                  } else if (arg0 !== 2) {
                    c7 = 0;
                  }
                  c7 = 0;
                  c9 = 3;
                  const obj = { value, done: true };
                  return obj;
                }
                c9 = 3;
              } catch (tmp34) {
                closure_6 = tmp34;
                if (tmp4 === c7) {
                  c9 = tmp2;
                  throw tmp34;
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
      if (null != tmp8) {
        let left;
        if (safeAreasConfig != null) {
          left = safeAreasConfig.left;
        }
        let num2;
        if (rect != null) {
          num2 = rect.left;
        }
        if (num2 == null) {
          num2 = 0;
        }
        let num3 = num2;
        if (null != left) {
          if (left.disable) {
            num3 = 0;
          } else if (null != left.override) {
            const _Math2 = Math;
            left = left.override;
            let bound = Math.max(0, left);
          } else {
            bound = num2;
            if (null != left.offset) {
              const _Math = Math;
              bound = Math.max(0, num2 + left.offset);
            }
          }
        }
        let rect1 = { left: num3, right: null, top: null, bottom: null };
        let right;
        if (safeAreasConfig != null) {
          right = safeAreasConfig.right;
        }
        let num6;
        if (rect != null) {
          num6 = rect.right;
        }
        if (num6 == null) {
          num6 = 0;
        }
        let num7 = num6;
        if (null != right) {
          if (right.disable) {
            num7 = 0;
          } else if (null != right.override) {
            const _Math4 = Math;
            right = right.override;
            let bound1 = Math.max(0, right);
          } else {
            bound1 = num6;
            if (null != right.offset) {
              const _Math3 = Math;
              bound1 = Math.max(0, num6 + right.offset);
            }
          }
        }
        rect1.right = num7;
        let top;
        if (safeAreasConfig != null) {
          top = safeAreasConfig.top;
        }
        let num10;
        if (rect != null) {
          num10 = rect.top;
        }
        if (num10 == null) {
          num10 = 0;
        }
        let num11 = num10;
        if (null != top) {
          if (top.disable) {
            num11 = 0;
          } else if (null != top.override) {
            const _Math6 = Math;
            top = top.override;
            let bound2 = Math.max(0, top);
          } else {
            bound2 = num10;
            if (null != top.offset) {
              const _Math5 = Math;
              bound2 = Math.max(0, num10 + top.offset);
            }
          }
        }
        rect1.top = num11;
        let bottom;
        if (safeAreasConfig != null) {
          bottom = safeAreasConfig.bottom;
        }
        let num14;
        if (rect != null) {
          num14 = rect.bottom;
        }
        if (num14 == null) {
          num14 = 0;
        }
        let num15 = num14;
        if (null != bottom) {
          if (bottom.disable) {
            num15 = 0;
          } else if (null != bottom.override) {
            const _Math8 = max.Math;
            max = _Math8.max;
            bottom = bottom.override;
            let maxResult = max(0, bottom);
          } else {
            maxResult = num14;
            if (null != bottom.offset) {
              const _Math7 = Math;
              maxResult = Math.max(0, num14 + bottom.offset);
            }
          }
        }
        rect1.bottom = num15;
        let obj6 = { insets: rect1, messageForDisallowedNavigationError: null };
        let tmp55;
        if (!tmp13) {
          tmp55 = channelId;
        }
        obj6.messageForDisallowedNavigationError = tmp55;
        const activityFrameInjectedJavaScript = tmp2(tmp3[23]).createActivityFrameInjectedJavaScript(obj6);
        let tmp58Result = null;
        if (null != tmp11) {
          const obj7 = { style: tmp.webView, ref, source: null, androidAssetLoaderConfig: null, mixedContentMode: null, androidInjectedJavaScriptForOrigins: null, originWhitelist: null, overScrollMode: "never", scrollEnabled: false, cacheEnabled: true, onError: null, onContentProcessDidTerminate: null, onRenderProcessGone: null, webViewKey: null, temporaryParentNodeTag: null, messagingWithWebViewKeyEnabled: true, allowFileAccess: null, injectedJavaScript: null, injectedJavaScriptForMainFrameOnly: false, onShouldStartLoadWithRequest: null, mediaPlaybackRequiresUserAction: false, ignoreSilentHardwareSwitch: null, allowsInlineMediaPlayback: true, minimumFontSize: 1, bounces: false, allowsProtectedMedia: true };
          const obj8 = { uri: null };
          obj7.source = obj8;
          let assetLoaderConfig;
          if (androidWebViewShellConfig != null) {
            assetLoaderConfig = androidWebViewShellConfig.assetLoaderConfig;
          }
          obj7.androidAssetLoaderConfig = assetLoaderConfig;
          let allowMixedContent;
          if (androidWebViewShellConfig != null) {
            allowMixedContent = androidWebViewShellConfig.allowMixedContent;
          }
          let str2 = "never";
          if (true === allowMixedContent) {
            str2 = "always";
          }
          obj7.mixedContentMode = str2;
          let tmp61;
          if (null != androidWebViewShellConfig) {
            const obj9 = { script: activityFrameInjectedJavaScript, allowedOriginRules: androidWebViewShellConfig.documentStartOriginRules };
            tmp61 = obj9;
          }
          obj7.androidInjectedJavaScriptForOrigins = tmp61;
          obj7.originWhitelist = ["*"];
          obj7.onError = callback;
          obj7.onContentProcessDidTerminate = callback2;
          obj7.onRenderProcessGone = callback1;
          obj7.webViewKey = iframeId;
          obj7.temporaryParentNodeTag = context;
          obj7.allowFileAccess = tmp13;
          let tmp62;
          if (tmp13) {
            tmp62 = activityFrameInjectedJavaScript;
          }
          obj7.injectedJavaScript = tmp62;
          let tmp63;
          if (tmp13) {
            tmp63 = callback3;
          }
          obj7.onShouldStartLoadWithRequest = tmp63;
          obj7.ignoreSilentHardwareSwitch = ignoreSilentHardwareSwitch;
          tmp58Result = guildId(tmp2(tmp3[15]).WebView, obj7);
        }
        return tmp58Result;
      }
    }
    return null;
  } else if (tmp13) {
    let _HermesInternal = HermesInternal;
    combined1 = "file://" + tmp11;
  } else {
    combined1 = undefined;
    if (androidWebViewShellConfig != null) {
      combined1 = androidWebViewShellConfig.uri;
    }
    if (combined1 == null) {
      combined1 = null;
    }
  }
});
ReactCompilerGating = fn(558);
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? (function useHasInvalidUrlErrorState() {
  const cResult = c.c(3);
  const tmp2 = _slicedToArray(noop.useState(false), 2);
  const first = tmp2[0];
  const tmp4 = usePreviousDefault(first);
  if (cResult[0] === tmp4) {
    if (cResult[1] === first) {
      let tmp5 = cResult[2];
    }
    return tmp5;
  }
  const obj2 = { hasInvalidUrlError: first, setHasInvalidUrlError: tmp2[1], hadInvalidUrlError: tmp4 };
  cResult[0] = tmp4;
  cResult[1] = first;
  cResult[2] = obj2;
  tmp5 = obj2;
}) : (function useHasInvalidUrlErrorState() {
  const tmp = _slicedToArray(noop.useState(false), 2);
  const first = tmp[0];
  return { hasInvalidUrlError: first, setHasInvalidUrlError: tmp[1], hadInvalidUrlError: usePreviousDefault(first) };
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/embedded_apps/native/components/BaseEmbeddedAppWebView.tsx");

export const BaseEmbeddedAppWebView = ReactCompilerGating.isReactCompilerEnabled() ? (function BaseEmbeddedAppWebView(onLoadError) {
  const cResult = c.c(12);
  onLoadError = onLoadError.onLoadError;
  const tmp2 = useEmbeddedAppCSPDefault(onLoadError.activityUrl);
  let status = tmp2;
  if (cResult[0] === tmp2.status) {
    if (cResult[1] === onLoadError) {
      let tmp3 = cResult[2];
      let tmp4 = cResult[3];
    }
    const effect = noop.useEffect(tmp3, tmp4);
    status = tmp2.status;
    if ("loading" !== status) {
      if ("failed" !== status) {
        if ("not-enforced" !== status) {
          if ("developer-served" !== status) {
            if ("ready" === status) {
              ({ policy, routerOrigin } = tmp2);
              if (cResult[6] === policy) {
                if (cResult[7] === routerOrigin) {
                  let tmp7 = cResult[8];
                }
                if (cResult[9] === onLoadError) {
                  if (cResult[10] === tmp7) {
                    let tmp8 = cResult[11];
                  }
                  return tmp8;
                }
                const obj2 = {};
                const merged = Object.assign(onLoadError);
                obj2.framePolicy = tmp7;
                const tmp14 = <closure_16 />;
                cResult[9] = onLoadError;
                cResult[10] = tmp7;
                cResult[11] = tmp14;
                tmp8 = tmp14;
              }
              const obj3 = { policy, routerOrigin };
              cResult[6] = policy;
              cResult[7] = routerOrigin;
              cResult[8] = obj3;
              tmp7 = obj3;
            }
          }
        }
        if (cResult[4] !== onLoadError) {
          const obj4 = {};
          const merged1 = Object.assign(onLoadError);
          obj4.framePolicy = null;
          const tmp22 = <closure_16 />;
          cResult[4] = onLoadError;
          cResult[5] = tmp22;
          let tmp15 = tmp22;
        } else {
          tmp15 = cResult[5];
        }
        return tmp15;
      }
    }
    return null;
  }
  const fn = function n() {
    if ("failed" === status.status) {
      onLoadError();
    }
  };
  const items = [tmp2.status, onLoadError];
  cResult[0] = tmp2.status;
  cResult[1] = onLoadError;
  cResult[2] = fn;
  cResult[3] = items;
  tmp4 = items;
  tmp3 = fn;
}) : (function BaseEmbeddedAppWebView(onLoadError) {
  onLoadError = onLoadError.onLoadError;
  const tmp = useEmbeddedAppCSPDefault(onLoadError.activityUrl);
  const items = [tmp.status, onLoadError];
  const effect = noop.useEffect(() => {
    if ("failed" === status.status) {
      onLoadError();
    }
  }, items);
  const status = tmp.status;
  if ("loading" !== status) {
    if ("failed" !== status) {
      if ("not-enforced" !== status) {
        if ("developer-served" !== status) {
          if ("ready" === status) {
            const obj = {};
            ({ policy, routerOrigin } = tmp);
            const merged = Object.assign(onLoadError);
            const obj2 = { policy, routerOrigin };
            obj.framePolicy = obj2;
            return <closure_16 />;
          }
        }
      }
      const obj3 = {};
      const merged1 = Object.assign(onLoadError);
      obj3.framePolicy = null;
      return <closure_16 />;
    }
  }
  return null;
});