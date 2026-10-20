// === Module 11373: BaseEmbeddedAppWebView ===

// Module 11373 (BaseEmbeddedAppWebView)
import LoggerDefault from "Logger" /* 3 */;
import c from "c" /* 576 */;
import util from "util" /* 1128 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1267 */;
import URLUtilsDefault from "URLUtils" /* 1386 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5866 */;
import usePreviousDefault from "usePrevious" /* 6611 */;
import WebView from "WebView" /* 7855 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import DeveloperActivityShelfStore from "DeveloperActivityShelfStore" /* 5586 */;

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
const createStyles = fn(4945);
let closure_12 = createStyles.createStyles({ webView: { backgroundColor: "transparent" } });
let closure_13 = new LoggerDefault("BaseEmbeddedAppWebView");
const PlatformUtils = fn(1384);
let closure_14 = PlatformUtils.isIOS();
fn(558);
let tmp2 = new LoggerDefault("BaseEmbeddedAppWebView");
const ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? (function useHasInvalidUrlErrorState() {
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
const result = size.fileFinishedImporting("modules/embedded_apps/native/components/BaseEmbeddedAppWebView.tsx");

export const BaseEmbeddedAppWebView = ReactCompilerGating.isReactCompilerEnabled() ? (function BaseEmbeddedAppWebView(iframeId) {
  const cResult = iframeId(onActivityCrash[12]).c(111);
  iframeId = iframeId.iframeId;
  let shellBridgeSecret = iframeId.shellBridgeSecret;
  ({ deepLinkQueryParams, applicationId } = iframeId);
  ({ queryParams, onActivityCrash } = iframeId);
  const onLoadError = iframeId.onLoadError;
  const onInvalidUrl = iframeId.onInvalidUrl;
  ({ allowPopups, referrerPolicy } = iframeId);
  const isPipOrGridMode = iframeId.isPipOrGridMode;
  ({ ignoreSilentHardwareSwitch, safeAreasConfig } = iframeId);
  const channelId = iframeId.channelId;
  const guildId = iframeId.guildId;
  const activitySessionId = iframeId.activitySessionId;
  if (undefined === deepLinkQueryParams) {
    deepLinkQueryParams = {};
  }
  hasInvalidUrlError();
  const context = referrerPolicy.useContext(tmp(onActivityCrash[13]).WebViewContext);
  let tmp6 = closure_16();
  hasInvalidUrlError = tmp6.hasInvalidUrlError;
  const setHasInvalidUrlError = tmp6.setHasInvalidUrlError;
  const hadInvalidUrlError = tmp6.hadInvalidUrlError;
  let obj = iframeId(onActivityCrash[12]);
  [tmp9, tmp10] = onInvalidUrl(referrerPolicy.useState(null), 2);
  getSafeArea = tmp10;
  if (cResult[0] !== iframeId) {
    const webViewProxy = tmp(onActivityCrash[14]).getWebViewProxy(iframeId);
    cResult[0] = iframeId;
    cResult[1] = webViewProxy;
    let tmp11 = webViewProxy;
    const tmpResult = tmp(onActivityCrash[14]);
  } else {
    tmp11 = cResult[1];
  }
  closure_16 = tmp11;
  const tmp8 = onInvalidUrl(referrerPolicy.useState(null), 2);
  [tmp14, tmp15] = onInvalidUrl(referrerPolicy.useState(null), 2);
  closure_17 = tmp15;
  const tmp17 = shellBridgeSecret(onActivityCrash[15])();
  closure_18 = tmp17;
  const tmp16 = shellBridgeSecret;
  const tmp7Result = onInvalidUrl(referrerPolicy.useState(null), 2);
  const embeddedAppShimVersion = iframeId(onActivityCrash[16]).useEmbeddedAppShimVersion("BaseEmbeddedAppWebView");
  const tmpResult3 = iframeId(onActivityCrash[16]);
  let obj3 = {};
  constants = applicationId(onActivityCrash[17]).getConstants();
  const merged = Object.assign(queryParams);
  const merged1 = Object.assign(deepLinkQueryParams);
  obj3.frame_id = iframeId;
  obj3.platform = iframeId(onActivityCrash[18]).ActivityPlatform.MOBILE;
  obj3.mobile_app_version = constants.Version;
  obj3[iframeId(onActivityCrash[19]).SHIM_VERSION_PARAM] = "" + embeddedAppShimVersion;
  if (cResult[2] !== allowPopups) {
    let obj4 = { allowPopups };
    const tmp23 = tmp16(onActivityCrash[20])(obj4);
    cResult[2] = allowPopups;
    cResult[3] = tmp23;
    let tmp22 = tmp23;
  } else {
    tmp22 = cResult[3];
  }
  closure_20 = tmp22;
  const uRLSearchParams = new URLSearchParams(obj3);
  const combined = "" + iframeId.activityUrl + "?" + uRLSearchParams;
  if (cResult[4] === iframeId) {
    if (cResult[5] === tmp22) {
      if (cResult[6] === combined) {
        if (cResult[7] === onLoadError) {
          if (cResult[8] === referrerPolicy) {
            if (cResult[9] === tmp15) {
              if (cResult[10] === shellBridgeSecret) {
                if (cResult[11] === embeddedAppShimVersion) {
                  let tmp26 = cResult[12];
                }
                if (cResult[13] === iframeId) {
                  if (cResult[14] === tmp22) {
                    if (cResult[15] === combined) {
                      if (cResult[16] === onLoadError) {
                        if (cResult[17] === referrerPolicy) {
                          if (cResult[18] === shellBridgeSecret) {
                            if (cResult[19] === embeddedAppShimVersion) {
                              let tmp27 = cResult[20];
                            }
                            const effect = referrerPolicy.useEffect(tmp26, tmp27);
                            if (cResult[21] !== applicationId) {
                              function ce(nativeEvent) {
                                setHasInvalidUrlError.warn("activity WebView error for appId " + applicationId + ". " + JSON.stringify(nativeEvent.nativeEvent));
                              }
                              cResult[21] = applicationId;
                              cResult[22] = ce;
                            }
                            if (cResult[23] !== applicationId) {
                              function fe(nativeEvent) {
                                setHasInvalidUrlError.warn("activity WebView render process gone for appId " + applicationId + ". " + JSON.stringify(nativeEvent.nativeEvent));
                              }
                              cResult[23] = applicationId;
                              cResult[24] = fe;
                            }
                            if (cResult[25] === activitySessionId) {
                              if (cResult[26] === applicationId) {
                                if (cResult[27] === channelId) {
                                  if (cResult[28] === guildId) {
                                    const _Symbol = Symbol;
                                    if (cResult[31] === Symbol.for("react.memo_cache_sentinel")) {
                                      let items = [safeAreasConfig];
                                      class Se {
                                        constructor() {
                                          return safeAreasConfig.getUseActivityUrlOverride();
                                        }
                                      }
                                      cResult[31] = items;
                                      cResult[32] = Se;
                                      let tmp33 = Se;
                                      let tmp32 = items;
                                    } else {
                                      tmp32 = cResult[31];
                                      tmp33 = cResult[32];
                                    }
                                    const stateFromStores = tmp(onActivityCrash[23]).useStateFromStores(tmp32, tmp33);
                                    if (cResult[33] === combined) {
                                      if (cResult[34] === stateFromStores) {
                                        if (cResult[35] === setHasInvalidUrlError) {
                                          if (cResult[36] === tmp10) {
                                            let tmp36 = cResult[37];
                                          }
                                          if (cResult[38] === combined) {
                                            if (cResult[39] === stateFromStores) {
                                              if (cResult[40] === setHasInvalidUrlError) {
                                                let tmp37 = cResult[41];
                                              }
                                              const effect1 = referrerPolicy.useEffect(tmp36, tmp37);
                                              if (cResult[42] === hadInvalidUrlError) {
                                                if (cResult[43] === hasInvalidUrlError) {
                                                  let tmp39 = cResult[44];
                                                  let tmp40 = cResult[45];
                                                }
                                                const effect2 = referrerPolicy.useEffect(tmp39, tmp40);
                                                if (cResult[46] === hadInvalidUrlError) {
                                                  if (cResult[47] === hasInvalidUrlError) {
                                                    if (cResult[48] === onInvalidUrl) {
                                                      let tmp43 = cResult[49];
                                                      let tmp44 = cResult[50];
                                                    }
                                                    const effect3 = referrerPolicy.useEffect(tmp43, tmp44);
                                                    if (cResult[51] === tmp9) {
                                                      if (cResult[52] === tmp14) {
                                                        let tmp46 = cResult[53];
                                                      }
                                                      class Ae {
                                                        constructor() {
                                                          tmp2 = null != onInvalidUrl;
                                                          tmp = onInvalidUrl;
                                                          if (tmp2) {
                                                            tmp3 = hadInvalidUrlError;
                                                            tmp2 = !hadInvalidUrlError;
                                                          }
                                                          if (tmp2) {
                                                            tmp2 = hasInvalidUrlError;
                                                          }
                                                          if (tmp2) {
                                                            tmpResult = tmp();
                                                          }
                                                          return;
                                                        }
                                                      }
                                                      if (cResult[54] === undefined) {
                                                        if (cResult[55] === tmp9) {
                                                          if (cResult[56] === tmp14) {
                                                            let combined1 = cResult[57];
                                                          }
                                                          class Ae {
                                                            constructor() {
                                                              tmp2 = null != onInvalidUrl;
                                                              tmp = onInvalidUrl;
                                                              if (tmp2) {
                                                                tmp3 = hadInvalidUrlError;
                                                                tmp2 = !hadInvalidUrlError;
                                                              }
                                                              if (tmp2) {
                                                                tmp2 = hasInvalidUrlError;
                                                              }
                                                              if (tmp2) {
                                                                tmpResult = tmp();
                                                              }
                                                              return;
                                                            }
                                                          }
                                                          const _Symbol2 = Symbol;
                                                          const first = tmp7(referrerPolicy.useState(false), 2)[0];
                                                          if (cResult[58] === Symbol.for("react.memo_cache_sentinel")) {
                                                            const items1 = [];
                                                            cResult[58] = items1;
                                                            class Ae {
                                                              constructor() {
                                                                tmp2 = null != onInvalidUrl;
                                                                tmp = onInvalidUrl;
                                                                if (tmp2) {
                                                                  tmp3 = hadInvalidUrlError;
                                                                  tmp2 = !hadInvalidUrlError;
                                                                }
                                                                if (tmp2) {
                                                                  tmp2 = hasInvalidUrlError;
                                                                }
                                                                if (tmp2) {
                                                                  tmpResult = tmp();
                                                                }
                                                                return;
                                                              }
                                                            }
                                                          } else {
                                                            const tmp54 = cResult[58];
                                                          }
                                                          const tmp7Result4 = tmp7(referrerPolicy.useState(tmp54), 2);
                                                          const first1 = tmp7Result4[0];
                                                          closure_26 = tmp7Result4[1];
                                                          if (cResult[59] !== applicationId) {
                                                            class Le {
                                                              constructor() {
                                                                if (hadInvalidUrlError) {
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
                                                                  tmp = onLoadError;
                                                                  closure_0 = onLoadError(function*() {
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
                                                                            const nonTestModeUrlForApplication = iframeId(onActivityCrash[27]).getNonTestModeUrlForApplication(applicationId);
                                                                            closure_0 = nonTestModeUrlForApplication;
                                                                            if (nonTestModeUrlForApplication == null) {
                                                                              const _HermesInternal = HermesInternal;
                                                                              closure_0 = "https://" + applicationId + ".discordsays.com";
                                                                            }
                                                                            closure_130_0 = closure_0;
                                                                            const HTTP = iframeId(onActivityCrash[28]).HTTP;
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
                                                                          closure_2_26(closure_130_2.map((item) => "^" + closure_1_1(closure_1_3[29])(item).replace(/\\\*/g, ".*")));
                                                                          closure_2_24(true);
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
                                                            const items2 = [applicationId, ];
                                                            class Ae {
                                                              constructor() {
                                                                tmp2 = null != onInvalidUrl;
                                                                tmp = onInvalidUrl;
                                                                if (tmp2) {
                                                                  tmp3 = hadInvalidUrlError;
                                                                  tmp2 = !hadInvalidUrlError;
                                                                }
                                                                if (tmp2) {
                                                                  tmp2 = hasInvalidUrlError;
                                                                }
                                                                if (tmp2) {
                                                                  tmpResult = tmp();
                                                                }
                                                                return;
                                                              }
                                                            }
                                                            items2[1] = hadInvalidUrlError;
                                                            cResult[59] = applicationId;
                                                            cResult[60] = Le;
                                                            cResult[61] = items2;
                                                            let tmp58 = items2;
                                                          } else {
                                                            class Le {
                                                              constructor() {
                                                                if (hadInvalidUrlError) {
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
                                                                  tmp = onLoadError;
                                                                  closure_0 = onLoadError(function*() {
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
                                                                            const nonTestModeUrlForApplication = iframeId(onActivityCrash[27]).getNonTestModeUrlForApplication(applicationId);
                                                                            closure_0 = nonTestModeUrlForApplication;
                                                                            if (nonTestModeUrlForApplication == null) {
                                                                              const _HermesInternal = HermesInternal;
                                                                              closure_0 = "https://" + applicationId + ".discordsays.com";
                                                                            }
                                                                            closure_130_0 = closure_0;
                                                                            const HTTP = iframeId(onActivityCrash[28]).HTTP;
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
                                                                          closure_2_26(closure_130_2.map((item) => "^" + closure_1_1(closure_1_3[29])(item).replace(/\\\*/g, ".*")));
                                                                          closure_2_24(true);
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
                                                            tmp58 = cResult[61];
                                                          }
                                                          const effect4 = referrerPolicy.useEffect(Le, tmp58);
                                                          if (cResult[62] === first1) {
                                                            class Le {
                                                              constructor() {
                                                                if (hadInvalidUrlError) {
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
                                                                  tmp = onLoadError;
                                                                  closure_0 = onLoadError(function*() {
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
                                                                            const nonTestModeUrlForApplication = iframeId(onActivityCrash[27]).getNonTestModeUrlForApplication(applicationId);
                                                                            closure_0 = nonTestModeUrlForApplication;
                                                                            if (nonTestModeUrlForApplication == null) {
                                                                              const _HermesInternal = HermesInternal;
                                                                              closure_0 = "https://" + applicationId + ".discordsays.com";
                                                                            }
                                                                            closure_130_0 = closure_0;
                                                                            const HTTP = iframeId(onActivityCrash[28]).HTTP;
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
                                                                          closure_2_26(closure_130_2.map((item) => "^" + closure_1_1(closure_1_3[29])(item).replace(/\\\*/g, ".*")));
                                                                          closure_2_24(true);
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
                                                            closure_27 = tmp61;
                                                            class Ae {
                                                              constructor() {
                                                                tmp2 = null != onInvalidUrl;
                                                                tmp = onInvalidUrl;
                                                                if (tmp2) {
                                                                  tmp3 = hadInvalidUrlError;
                                                                  tmp2 = !hadInvalidUrlError;
                                                                }
                                                                if (tmp2) {
                                                                  tmp2 = hasInvalidUrlError;
                                                                }
                                                                if (tmp2) {
                                                                  tmpResult = tmp();
                                                                }
                                                                return;
                                                              }
                                                            }
                                                            closure_28 = tmp62;
                                                            if (tmp9 != null) {
                                                              class Le {
                                                                constructor() {
                                                                  if (hadInvalidUrlError) {
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
                                                                    tmp = onLoadError;
                                                                    closure_0 = onLoadError(function*() {
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
                                                                              const nonTestModeUrlForApplication = iframeId(onActivityCrash[27]).getNonTestModeUrlForApplication(applicationId);
                                                                              closure_0 = nonTestModeUrlForApplication;
                                                                              if (nonTestModeUrlForApplication == null) {
                                                                                const _HermesInternal = HermesInternal;
                                                                                closure_0 = "https://" + applicationId + ".discordsays.com";
                                                                              }
                                                                              closure_130_0 = closure_0;
                                                                              const HTTP = iframeId(onActivityCrash[28]).HTTP;
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
                                                                            closure_2_26(closure_130_2.map((item) => "^" + closure_1_1(closure_1_3[29])(item).replace(/\\\*/g, ".*")));
                                                                            closure_2_24(true);
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
                                                            }
                                                            c29 = tmp63;
                                                            if (cResult[65] === undefined) {
                                                              class Le {
                                                                constructor() {
                                                                  if (hadInvalidUrlError) {
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
                                                                    tmp = onLoadError;
                                                                    closure_0 = onLoadError(function*() {
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
                                                                              const nonTestModeUrlForApplication = iframeId(onActivityCrash[27]).getNonTestModeUrlForApplication(applicationId);
                                                                              closure_0 = nonTestModeUrlForApplication;
                                                                              if (nonTestModeUrlForApplication == null) {
                                                                                const _HermesInternal = HermesInternal;
                                                                                closure_0 = "https://" + applicationId + ".discordsays.com";
                                                                              }
                                                                              closure_130_0 = closure_0;
                                                                              const HTTP = iframeId(onActivityCrash[28]).HTTP;
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
                                                                            closure_2_26(closure_130_2.map((item) => "^" + closure_1_1(closure_1_3[29])(item).replace(/\\\*/g, ".*")));
                                                                            closure_2_24(true);
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
                                                            }
                                                            cResult[65] = undefined;
                                                            cResult[66] = tmp17;
                                                            cResult[67] = isPipOrGridMode;
                                                            if (safeAreasConfig != null) {
                                                              class Le {
                                                                constructor() {
                                                                  if (hadInvalidUrlError) {
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
                                                                    tmp = onLoadError;
                                                                    closure_0 = onLoadError(function*() {
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
                                                                              const nonTestModeUrlForApplication = iframeId(onActivityCrash[27]).getNonTestModeUrlForApplication(applicationId);
                                                                              closure_0 = nonTestModeUrlForApplication;
                                                                              if (nonTestModeUrlForApplication == null) {
                                                                                const _HermesInternal = HermesInternal;
                                                                                closure_0 = "https://" + applicationId + ".discordsays.com";
                                                                              }
                                                                              closure_130_0 = closure_0;
                                                                              const HTTP = iframeId(onActivityCrash[28]).HTTP;
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
                                                                            closure_2_26(closure_130_2.map((item) => "^" + closure_1_1(closure_1_3[29])(item).replace(/\\\*/g, ".*")));
                                                                            closure_2_24(true);
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
                                                            }
                                                            cResult[68] = undefined;
                                                            if (safeAreasConfig != null) {
                                                              class Le {
                                                                constructor() {
                                                                  if (hadInvalidUrlError) {
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
                                                                    tmp = onLoadError;
                                                                    closure_0 = onLoadError(function*() {
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
                                                                              const nonTestModeUrlForApplication = iframeId(onActivityCrash[27]).getNonTestModeUrlForApplication(applicationId);
                                                                              closure_0 = nonTestModeUrlForApplication;
                                                                              if (nonTestModeUrlForApplication == null) {
                                                                                const _HermesInternal = HermesInternal;
                                                                                closure_0 = "https://" + applicationId + ".discordsays.com";
                                                                              }
                                                                              closure_130_0 = closure_0;
                                                                              const HTTP = iframeId(onActivityCrash[28]).HTTP;
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
                                                                            closure_2_26(closure_130_2.map((item) => "^" + closure_1_1(closure_1_3[29])(item).replace(/\\\*/g, ".*")));
                                                                            closure_2_24(true);
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
                                                            }
                                                            cResult[69] = undefined;
                                                            if (safeAreasConfig != null) {
                                                              class Le {
                                                                constructor() {
                                                                  if (hadInvalidUrlError) {
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
                                                                    tmp = onLoadError;
                                                                    closure_0 = onLoadError(function*() {
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
                                                                              const nonTestModeUrlForApplication = iframeId(onActivityCrash[27]).getNonTestModeUrlForApplication(applicationId);
                                                                              closure_0 = nonTestModeUrlForApplication;
                                                                              if (nonTestModeUrlForApplication == null) {
                                                                                const _HermesInternal = HermesInternal;
                                                                                closure_0 = "https://" + applicationId + ".discordsays.com";
                                                                              }
                                                                              closure_130_0 = closure_0;
                                                                              const HTTP = iframeId(onActivityCrash[28]).HTTP;
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
                                                                            closure_2_26(closure_130_2.map((item) => "^" + closure_1_1(closure_1_3[29])(item).replace(/\\\*/g, ".*")));
                                                                            closure_2_24(true);
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
                                                            }
                                                            cResult[70] = undefined;
                                                            if (safeAreasConfig != null) {
                                                              class Le {
                                                                constructor() {
                                                                  if (hadInvalidUrlError) {
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
                                                                    tmp = onLoadError;
                                                                    closure_0 = onLoadError(function*() {
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
                                                                              const nonTestModeUrlForApplication = iframeId(onActivityCrash[27]).getNonTestModeUrlForApplication(applicationId);
                                                                              closure_0 = nonTestModeUrlForApplication;
                                                                              if (nonTestModeUrlForApplication == null) {
                                                                                const _HermesInternal = HermesInternal;
                                                                                closure_0 = "https://" + applicationId + ".discordsays.com";
                                                                              }
                                                                              closure_130_0 = closure_0;
                                                                              const HTTP = iframeId(onActivityCrash[28]).HTTP;
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
                                                                            closure_2_26(closure_130_2.map((item) => "^" + closure_1_1(closure_1_3[29])(item).replace(/\\\*/g, ".*")));
                                                                            closure_2_24(true);
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
                                                            }
                                                            class Ne {
                                                              constructor() {
                                                                if (closure_27) {
                                                                  tmp = closure_16;
                                                                  tmp2 = null;
                                                                  if (null != closure_16) {
                                                                    tmp3 = onLoadError;
                                                                    closure_0 = onLoadError(function*() {
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
                                                                              if (null != closure_1_16) {
                                                                                if (null != closure_1_29) {
                                                                                  if (c7) {
                                                                                    let rect = { top: 0, bottom: 0, left: 0, right: 0 };
                                                                                  } else {
                                                                                    rect = closure_1_18;
                                                                                  }
                                                                                  const rect2 = c8;
                                                                                  let left;
                                                                                  if (c8 != null) {
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
                                                                                  const rect1 = { left: tmp10(left, c0), right: null, top: null, bottom: null };
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
                                                                                  rect1.right = tmp10(right, c1);
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
                                                                                  rect1.top = tmp10(top, c2);
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
                                                                                  rect1.bottom = tmp10(bottom, c3);
                                                                                  obj5.insets = rect1;
                                                                                  obj4.data = obj5;
                                                                                  const tmp33 = shellBridgeSecret(onActivityCrash[31])(obj4, tmp16);
                                                                                  closure_132_0 = tmp33;
                                                                                  c7 = 1;
                                                                                  c8 = 2;
                                                                                  c9 = 1;
                                                                                  const obj6 = { value: closure_1_16.injectJavaScript(tmp33), done: false };
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
                                                                    tmp4 = (function tryInjectJavaScript() {
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
                                                                return;
                                                              }
                                                            }
                                                            cResult[71] = undefined;
                                                            cResult[72] = null != tmp49 && null != tmp9 && null != tmp14;
                                                            cResult[73] = tmp11;
                                                            cResult[74] = Ne;
                                                          }
                                                          function $e(mainDocumentURL) {
                                                            mainDocumentURL = mainDocumentURL.mainDocumentURL;
                                                            if (null != combined1) {
                                                              if (null != mainDocumentURL) {
                                                                if (mainDocumentURL !== combined1) {
                                                                  Linking.openURL(mainDocumentURL.url);
                                                                  return false;
                                                                }
                                                              }
                                                            }
                                                            const iter = first1[Symbol.iterator]();
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
                                                          }
                                                          cResult[62] = first1;
                                                          cResult[63] = tmp49;
                                                          cResult[64] = $e;
                                                          const tmp7Result3 = tmp7(referrerPolicy.useState(false), 2);
                                                        }
                                                      }
                                                      combined1 = null;
                                                      if (null == tmp9) {
                                                        class Le {
                                                          constructor() {
                                                            if (hadInvalidUrlError) {
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
                                                              tmp = onLoadError;
                                                              closure_0 = onLoadError(function*() {
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
                                                                        const nonTestModeUrlForApplication = iframeId(onActivityCrash[27]).getNonTestModeUrlForApplication(applicationId);
                                                                        closure_0 = nonTestModeUrlForApplication;
                                                                        if (nonTestModeUrlForApplication == null) {
                                                                          const _HermesInternal = HermesInternal;
                                                                          closure_0 = "https://" + applicationId + ".discordsays.com";
                                                                        }
                                                                        closure_130_0 = closure_0;
                                                                        const HTTP = iframeId(onActivityCrash[28]).HTTP;
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
                                                                      closure_2_26(closure_130_2.map((item) => "^" + closure_1_1(closure_1_3[29])(item).replace(/\\\*/g, ".*")));
                                                                      closure_2_24(true);
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
                                                        if (tmp46 != null) {
                                                          class Le {
                                                            constructor() {
                                                              if (hadInvalidUrlError) {
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
                                                                tmp = onLoadError;
                                                                closure_0 = onLoadError(function*() {
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
                                                                          const nonTestModeUrlForApplication = iframeId(onActivityCrash[27]).getNonTestModeUrlForApplication(applicationId);
                                                                          closure_0 = nonTestModeUrlForApplication;
                                                                          if (nonTestModeUrlForApplication == null) {
                                                                            const _HermesInternal = HermesInternal;
                                                                            closure_0 = "https://" + applicationId + ".discordsays.com";
                                                                          }
                                                                          closure_130_0 = closure_0;
                                                                          const HTTP = iframeId(onActivityCrash[28]).HTTP;
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
                                                                        closure_2_26(closure_130_2.map((item) => "^" + closure_1_1(closure_1_3[29])(item).replace(/\\\*/g, ".*")));
                                                                        closure_2_24(true);
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
                                                        }
                                                        class Ae {
                                                          constructor() {
                                                            tmp2 = null != onInvalidUrl;
                                                            tmp = onInvalidUrl;
                                                            if (tmp2) {
                                                              tmp3 = hadInvalidUrlError;
                                                              tmp2 = !hadInvalidUrlError;
                                                            }
                                                            if (tmp2) {
                                                              tmp2 = hasInvalidUrlError;
                                                            }
                                                            if (tmp2) {
                                                              tmpResult = tmp();
                                                            }
                                                            return;
                                                          }
                                                        }
                                                        cResult[55] = tmp9;
                                                        cResult[56] = tmp14;
                                                        cResult[57] = null;
                                                      } else {
                                                        class Le {
                                                          constructor() {
                                                            if (hadInvalidUrlError) {
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
                                                              tmp = onLoadError;
                                                              closure_0 = onLoadError(function*() {
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
                                                                        const nonTestModeUrlForApplication = iframeId(onActivityCrash[27]).getNonTestModeUrlForApplication(applicationId);
                                                                        closure_0 = nonTestModeUrlForApplication;
                                                                        if (nonTestModeUrlForApplication == null) {
                                                                          const _HermesInternal = HermesInternal;
                                                                          closure_0 = "https://" + applicationId + ".discordsays.com";
                                                                        }
                                                                        closure_130_0 = closure_0;
                                                                        const HTTP = iframeId(onActivityCrash[28]).HTTP;
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
                                                                      closure_2_26(closure_130_2.map((item) => "^" + closure_1_1(closure_1_3[29])(item).replace(/\\\*/g, ".*")));
                                                                      closure_2_24(true);
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
                                                        if (hadInvalidUrlError) {
                                                          class Le {
                                                            constructor() {
                                                              if (hadInvalidUrlError) {
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
                                                                tmp = onLoadError;
                                                                closure_0 = onLoadError(function*() {
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
                                                                          const nonTestModeUrlForApplication = iframeId(onActivityCrash[27]).getNonTestModeUrlForApplication(applicationId);
                                                                          closure_0 = nonTestModeUrlForApplication;
                                                                          if (nonTestModeUrlForApplication == null) {
                                                                            const _HermesInternal = HermesInternal;
                                                                            closure_0 = "https://" + applicationId + ".discordsays.com";
                                                                          }
                                                                          closure_130_0 = closure_0;
                                                                          const HTTP = iframeId(onActivityCrash[28]).HTTP;
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
                                                                        closure_2_26(closure_130_2.map((item) => "^" + closure_1_1(closure_1_3[29])(item).replace(/\\\*/g, ".*")));
                                                                        closure_2_24(true);
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
                                                          combined1 = "file://" + tmp14;
                                                        } else {
                                                          class Le {
                                                            constructor() {
                                                              if (hadInvalidUrlError) {
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
                                                                tmp = onLoadError;
                                                                closure_0 = onLoadError(function*() {
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
                                                                          const nonTestModeUrlForApplication = iframeId(onActivityCrash[27]).getNonTestModeUrlForApplication(applicationId);
                                                                          closure_0 = nonTestModeUrlForApplication;
                                                                          if (nonTestModeUrlForApplication == null) {
                                                                            const _HermesInternal = HermesInternal;
                                                                            closure_0 = "https://" + applicationId + ".discordsays.com";
                                                                          }
                                                                          closure_130_0 = closure_0;
                                                                          const HTTP = iframeId(onActivityCrash[28]).HTTP;
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
                                                                        closure_2_26(closure_130_2.map((item) => "^" + closure_1_1(closure_1_3[29])(item).replace(/\\\*/g, ".*")));
                                                                        closure_2_24(true);
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
                                                          if (tmp46 != null) {
                                                            class Le {
                                                              constructor() {
                                                                if (hadInvalidUrlError) {
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
                                                                  tmp = onLoadError;
                                                                  closure_0 = onLoadError(function*() {
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
                                                                            const nonTestModeUrlForApplication = iframeId(onActivityCrash[27]).getNonTestModeUrlForApplication(applicationId);
                                                                            closure_0 = nonTestModeUrlForApplication;
                                                                            if (nonTestModeUrlForApplication == null) {
                                                                              const _HermesInternal = HermesInternal;
                                                                              closure_0 = "https://" + applicationId + ".discordsays.com";
                                                                            }
                                                                            closure_130_0 = closure_0;
                                                                            const HTTP = iframeId(onActivityCrash[28]).HTTP;
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
                                                                          closure_2_26(closure_130_2.map((item) => "^" + closure_1_1(closure_1_3[29])(item).replace(/\\\*/g, ".*")));
                                                                          closure_2_24(true);
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
                                                          }
                                                          if (combined1 == null) {
                                                            class Le {
                                                              constructor() {
                                                                if (hadInvalidUrlError) {
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
                                                                  tmp = onLoadError;
                                                                  closure_0 = onLoadError(function*() {
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
                                                                            const nonTestModeUrlForApplication = iframeId(onActivityCrash[27]).getNonTestModeUrlForApplication(applicationId);
                                                                            closure_0 = nonTestModeUrlForApplication;
                                                                            if (nonTestModeUrlForApplication == null) {
                                                                              const _HermesInternal = HermesInternal;
                                                                              closure_0 = "https://" + applicationId + ".discordsays.com";
                                                                            }
                                                                            closure_130_0 = closure_0;
                                                                            const HTTP = iframeId(onActivityCrash[28]).HTTP;
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
                                                                          closure_2_26(closure_130_2.map((item) => "^" + closure_1_1(closure_1_3[29])(item).replace(/\\\*/g, ".*")));
                                                                          closure_2_24(true);
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
                                                          }
                                                        }
                                                        class Ae {
                                                          constructor() {
                                                            tmp2 = null != onInvalidUrl;
                                                            tmp = onInvalidUrl;
                                                            if (tmp2) {
                                                              tmp3 = hadInvalidUrlError;
                                                              tmp2 = !hadInvalidUrlError;
                                                            }
                                                            if (tmp2) {
                                                              tmp2 = hasInvalidUrlError;
                                                            }
                                                            if (tmp2) {
                                                              tmpResult = tmp();
                                                            }
                                                            return;
                                                          }
                                                        }
                                                      }
                                                    }
                                                    class Ae {
                                                      constructor() {
                                                        tmp2 = null != onInvalidUrl;
                                                        tmp = onInvalidUrl;
                                                        if (tmp2) {
                                                          tmp3 = hadInvalidUrlError;
                                                          tmp2 = !hadInvalidUrlError;
                                                        }
                                                        if (tmp2) {
                                                          tmp2 = hasInvalidUrlError;
                                                        }
                                                        if (tmp2) {
                                                          tmpResult = tmp();
                                                        }
                                                        return;
                                                      }
                                                    }
                                                    let androidWebViewShellConfig = null;
                                                    if (!hadInvalidUrlError) {
                                                      class Le {
                                                        constructor() {
                                                          if (hadInvalidUrlError) {
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
                                                            tmp = onLoadError;
                                                            closure_0 = onLoadError(function*() {
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
                                                                      const nonTestModeUrlForApplication = iframeId(onActivityCrash[27]).getNonTestModeUrlForApplication(applicationId);
                                                                      closure_0 = nonTestModeUrlForApplication;
                                                                      if (nonTestModeUrlForApplication == null) {
                                                                        const _HermesInternal = HermesInternal;
                                                                        closure_0 = "https://" + applicationId + ".discordsays.com";
                                                                      }
                                                                      closure_130_0 = closure_0;
                                                                      const HTTP = iframeId(onActivityCrash[28]).HTTP;
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
                                                                    closure_2_26(closure_130_2.map((item) => "^" + closure_1_1(closure_1_3[29])(item).replace(/\\\*/g, ".*")));
                                                                    closure_2_24(true);
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
                                                      if (null != tmp9) {
                                                        class Le {
                                                          constructor() {
                                                            if (hadInvalidUrlError) {
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
                                                              tmp = onLoadError;
                                                              closure_0 = onLoadError(function*() {
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
                                                                        const nonTestModeUrlForApplication = iframeId(onActivityCrash[27]).getNonTestModeUrlForApplication(applicationId);
                                                                        closure_0 = nonTestModeUrlForApplication;
                                                                        if (nonTestModeUrlForApplication == null) {
                                                                          const _HermesInternal = HermesInternal;
                                                                          closure_0 = "https://" + applicationId + ".discordsays.com";
                                                                        }
                                                                        closure_130_0 = closure_0;
                                                                        const HTTP = iframeId(onActivityCrash[28]).HTTP;
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
                                                                      closure_2_26(closure_130_2.map((item) => "^" + closure_1_1(closure_1_3[29])(item).replace(/\\\*/g, ".*")));
                                                                      closure_2_24(true);
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
                                                        if (null != tmp14) {
                                                          class Le {
                                                            constructor() {
                                                              if (hadInvalidUrlError) {
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
                                                                tmp = onLoadError;
                                                                closure_0 = onLoadError(function*() {
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
                                                                          const nonTestModeUrlForApplication = iframeId(onActivityCrash[27]).getNonTestModeUrlForApplication(applicationId);
                                                                          closure_0 = nonTestModeUrlForApplication;
                                                                          if (nonTestModeUrlForApplication == null) {
                                                                            const _HermesInternal = HermesInternal;
                                                                            closure_0 = "https://" + applicationId + ".discordsays.com";
                                                                          }
                                                                          closure_130_0 = closure_0;
                                                                          const HTTP = iframeId(onActivityCrash[28]).HTTP;
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
                                                                        closure_2_26(closure_130_2.map((item) => "^" + closure_1_1(closure_1_3[29])(item).replace(/\\\*/g, ".*")));
                                                                        closure_2_24(true);
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
                                                          let obj6 = { iframeUrl: tmp9, shellFilePath: null };
                                                          class Ae {
                                                            constructor() {
                                                              tmp2 = null != onInvalidUrl;
                                                              tmp = onInvalidUrl;
                                                              if (tmp2) {
                                                                tmp3 = hadInvalidUrlError;
                                                                tmp2 = !hadInvalidUrlError;
                                                              }
                                                              if (tmp2) {
                                                                tmp2 = hasInvalidUrlError;
                                                              }
                                                              if (tmp2) {
                                                                tmpResult = tmp();
                                                              }
                                                              return;
                                                            }
                                                          }
                                                          androidWebViewShellConfig = obj9.getAndroidWebViewShellConfig(obj6);
                                                        }
                                                      }
                                                    }
                                                    cResult[51] = tmp9;
                                                    cResult[52] = tmp14;
                                                    cResult[53] = androidWebViewShellConfig;
                                                    tmp46 = androidWebViewShellConfig;
                                                  }
                                                }
                                                class Ae {
                                                  constructor() {
                                                    tmp2 = null != onInvalidUrl;
                                                    tmp = onInvalidUrl;
                                                    if (tmp2) {
                                                      tmp3 = hadInvalidUrlError;
                                                      tmp2 = !hadInvalidUrlError;
                                                    }
                                                    if (tmp2) {
                                                      tmp2 = hasInvalidUrlError;
                                                    }
                                                    if (tmp2) {
                                                      tmpResult = tmp();
                                                    }
                                                    return;
                                                  }
                                                }
                                                const items3 = [hasInvalidUrlError, hadInvalidUrlError, onInvalidUrl];
                                                cResult[46] = hadInvalidUrlError;
                                                cResult[47] = hasInvalidUrlError;
                                                cResult[48] = onInvalidUrl;
                                                cResult[49] = Ae;
                                                cResult[50] = items3;
                                                tmp44 = items3;
                                                tmp43 = Ae;
                                              }
                                              class Se {
                                                constructor() {
                                                  return safeAreasConfig.getUseActivityUrlOverride();
                                                }
                                              }
                                              const items4 = [hadInvalidUrlError, hasInvalidUrlError];
                                              cResult[42] = hadInvalidUrlError;
                                              cResult[43] = hasInvalidUrlError;
                                              cResult[44] = tmp41;
                                              cResult[45] = items4;
                                              tmp40 = items4;
                                              tmp39 = tmp41;
                                            }
                                          }
                                          const items5 = [, , ];
                                          class Se {
                                            constructor() {
                                              return safeAreasConfig.getUseActivityUrlOverride();
                                            }
                                          }
                                          items5[1] = stateFromStores;
                                          items5[2] = setHasInvalidUrlError;
                                          cResult[38] = combined;
                                          cResult[39] = stateFromStores;
                                          cResult[40] = setHasInvalidUrlError;
                                          cResult[41] = items5;
                                          tmp37 = items5;
                                        }
                                      }
                                    }
                                    function be() {
                                      try {
                                        const _URL = URL;
                                        const uRL = new URL(combined);
                                        stateFromStores(uRL);
                                      } catch (tmp9) {
                                        if (stateFromStores) {
                                          setHasInvalidUrlError(true);
                                        } else {
                                          throw tmp9;
                                        }
                                      }
                                    }
                                    cResult[33] = combined;
                                    cResult[34] = stateFromStores;
                                    cResult[35] = setHasInvalidUrlError;
                                    cResult[36] = tmp10;
                                    cResult[37] = be;
                                    tmp36 = be;
                                    const tmpResult4 = tmp(onActivityCrash[23]);
                                  }
                                }
                              }
                            }
                            function ve() {
                              setHasInvalidUrlError.warn("activity WebView content process terminated for appId " + applicationId);
                              AnalyticsUtilsDefault.track(AnalyticEvents.ACTIVITY_WEB_VIEW_CONTENT_PROCESS_TERMINATED, { application_id: applicationId, channel_id: channelId, guild_id: guildId, activity_session_id: activitySessionId });
                              onActivityCrash();
                            }
                            cResult[25] = activitySessionId;
                            cResult[26] = applicationId;
                            cResult[27] = channelId;
                            cResult[28] = guildId;
                            cResult[29] = onActivityCrash;
                            cResult[30] = ve;
                          }
                        }
                      }
                    }
                  }
                }
                const items6 = [, tmp22, onLoadError, referrerPolicy, iframeId, embeddedAppShimVersion, shellBridgeSecret];
                cResult[13] = iframeId;
                cResult[14] = tmp22;
                cResult[15] = combined;
                cResult[16] = onLoadError;
                cResult[17] = referrerPolicy;
                cResult[18] = shellBridgeSecret;
                cResult[19] = embeddedAppShimVersion;
                cResult[20] = items6;
                tmp27 = items6;
              }
            }
          }
        }
      }
    }
  }
  function oe() {
    closure_0 = onLoadError(function*() {
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
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              shellBridgeSecret = tmp2;
              iframeId = tmp5;
              closure_128_0 = undefined;
              const obj4 = { iframeId, iframeUri, iframeSandboxAttributes, referrerPolicy, shimVersion, shellBridgeSecret };
              c2 = 1;
              c3 = 1;
              const obj5 = { value: shellBridgeSecret(onActivityCrash[21])(obj4), done: false };
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
              closure_1_17(closure_128_0);
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
  cResult[4] = iframeId;
  cResult[5] = tmp22;
  cResult[6] = combined;
  cResult[7] = onLoadError;
  cResult[8] = referrerPolicy;
  cResult[9] = tmp15;
  cResult[10] = shellBridgeSecret;
  cResult[11] = embeddedAppShimVersion;
  cResult[12] = oe;
  tmp26 = oe;
  let obj5 = applicationId(onActivityCrash[17]);
}) : (function BaseEmbeddedAppWebView(iframeId) {
  iframeId = iframeId.iframeId;
  let shellBridgeSecret = iframeId.shellBridgeSecret;
  let deepLinkQueryParams = iframeId.deepLinkQueryParams;
  if (deepLinkQueryParams === undefined) {
    deepLinkQueryParams = {};
  }
  const applicationId = iframeId.applicationId;
  ({ queryParams, onActivityCrash } = iframeId);
  const onLoadError = iframeId.onLoadError;
  const onInvalidUrl = iframeId.onInvalidUrl;
  const referrerPolicy = iframeId.referrerPolicy;
  const isPipOrGridMode = iframeId.isPipOrGridMode;
  ({ ignoreSilentHardwareSwitch, activityUrl, allowPopups } = iframeId);
  if (ignoreSilentHardwareSwitch === undefined) {
    ignoreSilentHardwareSwitch = true;
  }
  const safeAreasConfig = iframeId.safeAreasConfig;
  const channelId = iframeId.channelId;
  const guildId = iframeId.guildId;
  const activitySessionId = iframeId.activitySessionId;
  c15 = undefined;
  let memo;
  c17 = undefined;
  let combined1;
  closure_24 = undefined;
  c25 = undefined;
  let first;
  closure_27 = undefined;
  closure_28 = undefined;
  let ref;
  let origin;
  const context = referrerPolicy.useContext(iframeId(onActivityCrash[13]).WebViewContext);
  let tmp5 = memo();
  const hasInvalidUrlError = tmp5.hasInvalidUrlError;
  const setHasInvalidUrlError = tmp5.setHasInvalidUrlError;
  const hadInvalidUrlError = tmp5.hadInvalidUrlError;
  let tmp = hasInvalidUrlError();
  [tmp8, c15] = onInvalidUrl(referrerPolicy.useState(null), 2);
  let items = [iframeId];
  memo = referrerPolicy.useMemo(() => WebView.getWebViewProxy(iframeId), items);
  let tmp7 = onInvalidUrl(referrerPolicy.useState(null), 2);
  [tmp11, c17] = onInvalidUrl(referrerPolicy.useState(null), 2);
  let rect = shellBridgeSecret(onActivityCrash[15])();
  const tmp10 = onInvalidUrl(referrerPolicy.useState(null), 2);
  const embeddedAppShimVersion = iframeId(onActivityCrash[16]).useEmbeddedAppShimVersion("BaseEmbeddedAppWebView");
  let obj3 = iframeId(onActivityCrash[16]);
  let obj = {};
  constants = applicationId(onActivityCrash[17]).getConstants();
  const merged = Object.assign(queryParams);
  const merged1 = Object.assign(deepLinkQueryParams);
  obj.frame_id = iframeId;
  obj.platform = iframeId(onActivityCrash[18]).ActivityPlatform.MOBILE;
  obj.mobile_app_version = constants.Version;
  let max = globalThis;
  obj[iframeId(onActivityCrash[19]).SHIM_VERSION_PARAM] = "" + embeddedAppShimVersion;
  const tmp16 = shellBridgeSecret(onActivityCrash[20])({ allowPopups });
  closure_20 = tmp16;
  const uRLSearchParams = new URLSearchParams(obj);
  const combined = "" + activityUrl + "?" + uRLSearchParams;
  const items1 = [combined, tmp16, onLoadError, referrerPolicy, iframeId, embeddedAppShimVersion, shellBridgeSecret];
  const effect = referrerPolicy.useEffect(() => {
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
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              shellBridgeSecret = tmp2;
              iframeId = tmp5;
              closure_128_0 = undefined;
              const obj4 = { iframeId, iframeUri, iframeSandboxAttributes, referrerPolicy, shimVersion, shellBridgeSecret };
              c2 = 1;
              c3 = 1;
              const obj5 = { value: shellBridgeSecret(onActivityCrash[21])(obj4), done: false };
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
              closure_1_17(closure_128_0);
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
  const callback = referrerPolicy.useCallback((nativeEvent) => {
    setHasInvalidUrlError.warn("activity WebView error for appId " + applicationId + ". " + JSON.stringify(nativeEvent.nativeEvent));
  }, items2);
  const items4 = [applicationId, channelId, guildId, activitySessionId, onActivityCrash];
  const callback1 = referrerPolicy.useCallback((nativeEvent) => {
    setHasInvalidUrlError.warn("activity WebView render process gone for appId " + applicationId + ". " + JSON.stringify(nativeEvent.nativeEvent));
  }, items3);
  const callback2 = referrerPolicy.useCallback(() => {
    setHasInvalidUrlError.warn("activity WebView content process terminated for appId " + applicationId);
    AnalyticsUtilsDefault.track(AnalyticEvents.ACTIVITY_WEB_VIEW_CONTENT_PROCESS_TERMINATED, { application_id: applicationId, channel_id: channelId, guild_id: guildId, activity_session_id: activitySessionId });
    onActivityCrash();
  }, items4);
  let obj4 = applicationId(onActivityCrash[17]);
  const items5 = [safeAreasConfig];
  const stateFromStores = iframeId(onActivityCrash[23]).useStateFromStores(items5, () => safeAreasConfig.getUseActivityUrlOverride());
  const items6 = [combined, stateFromStores, setHasInvalidUrlError];
  const effect1 = referrerPolicy.useEffect(() => {
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
  const effect2 = referrerPolicy.useEffect(() => {
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
  const effect3 = referrerPolicy.useEffect(() => {
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
  if (!hadInvalidUrlError) {
    androidWebViewShellConfig = null;
    if (null != tmp8) {
      androidWebViewShellConfig = null;
      if (null != tmp11) {
        let obj5 = { iframeUrl: tmp8, shellFilePath: tmp11 };
        androidWebViewShellConfig = tmp2(tmp3[26]).getAndroidWebViewShellConfig(obj5);
        const tmp2Result = tmp2(tmp3[26]);
      }
    }
  }
  combined1 = null;
  if (null == tmp8) {
    closure_24 = tmp27;
    [tmp32, c25] = tmp6(obj2.useState(false), 2);
    const tmp6Result2 = tmp6(obj2.useState([]), 2);
    first = tmp6Result2[0];
    closure_27 = tmp6Result2[1];
    const items9 = [applicationId, tmp27];
    const effect4 = obj2.useEffect(() => {
      if (closure_24) {
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
                  const nonTestModeUrlForApplication = iframeId(dependencyMap[27]).getNonTestModeUrlForApplication(closure_2);
                  closure_0 = nonTestModeUrlForApplication;
                  if (nonTestModeUrlForApplication == null) {
                    const _HermesInternal = HermesInternal;
                    closure_0 = "https://" + closure_2 + ".discordsays.com";
                  }
                  closure_130_0 = closure_0;
                  const HTTP = iframeId(dependencyMap[28]).HTTP;
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
                closure_1_27(closure_130_2.map((item) => "^" + closure_1_1(closure_1_3[29])(item).replace(/\\\*/g, ".*")));
                closure_1_25(true);
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
    const items10 = [null, first];
    let tmp37 = null != null;
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
      const iter = first[Symbol.iterator]();
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
    }, items10);
    if (tmp37) {
      tmp37 = null != tmp8;
    }
    if (tmp37) {
      tmp37 = null != tmp11;
    }
    closure_28 = tmp37;
    ref = obj2.useRef(null);
    origin = undefined;
    if (tmp8 != null) {
      origin = tmp8.origin;
    }
    const items11 = [rect, isPipOrGridMode, tmp37, memo, origin, safeAreasConfig];
    const effect5 = obj2.useEffect(() => {
      if (closure_28) {
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
                        if (c7) {
                          rect = { top: 0, bottom: 0, left: 0, right: 0 };
                        } else {
                          rect = closure_1_18;
                        }
                        const rect2 = c8;
                        let left;
                        if (c8 != null) {
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
                        const rect1 = { left: _undefined(left, c0), right: null, top: null, bottom: null };
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
                        rect1.right = _undefined(right, c1);
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
                        rect1.top = _undefined(top, c2);
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
                        rect1.bottom = _undefined(bottom, c3);
                        obj5.insets = rect1;
                        obj4.data = obj5;
                        const tmp33 = shellBridgeSecret(onActivityCrash[31])(obj4, tmp16);
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
        let num;
        if (rect != null) {
          num = rect.left;
        }
        if (num == null) {
          num = 0;
        }
        let num2 = num;
        if (null != left) {
          if (left.disable) {
            num2 = 0;
          } else if (null != left.override) {
            const _Math2 = Math;
            left = left.override;
            let bound = Math.max(0, left);
          } else {
            bound = num;
            if (null != left.offset) {
              const _Math = Math;
              bound = Math.max(0, num + left.offset);
            }
          }
        }
        let rect1 = { left: num2, right: null, top: null, bottom: null };
        let right;
        if (safeAreasConfig != null) {
          right = safeAreasConfig.right;
        }
        let num5;
        if (rect != null) {
          num5 = rect.right;
        }
        if (num5 == null) {
          num5 = 0;
        }
        let num6 = num5;
        if (null != right) {
          if (right.disable) {
            num6 = 0;
          } else if (null != right.override) {
            const _Math4 = Math;
            right = right.override;
            let bound1 = Math.max(0, right);
          } else {
            bound1 = num5;
            if (null != right.offset) {
              const _Math3 = Math;
              bound1 = Math.max(0, num5 + right.offset);
            }
          }
        }
        rect1.right = num6;
        let top;
        if (safeAreasConfig != null) {
          top = safeAreasConfig.top;
        }
        let num9;
        if (rect != null) {
          num9 = rect.top;
        }
        if (num9 == null) {
          num9 = 0;
        }
        let num10 = num9;
        if (null != top) {
          if (top.disable) {
            num10 = 0;
          } else if (null != top.override) {
            const _Math6 = Math;
            top = top.override;
            let bound2 = Math.max(0, top);
          } else {
            bound2 = num9;
            if (null != top.offset) {
              const _Math5 = Math;
              bound2 = Math.max(0, num9 + top.offset);
            }
          }
        }
        rect1.top = num10;
        let bottom;
        if (safeAreasConfig != null) {
          bottom = safeAreasConfig.bottom;
        }
        let num13;
        if (rect != null) {
          num13 = rect.bottom;
        }
        if (num13 == null) {
          num13 = 0;
        }
        let num14 = num13;
        if (null != bottom) {
          if (bottom.disable) {
            num14 = 0;
          } else if (null != bottom.override) {
            const _Math8 = max.Math;
            max = _Math8.max;
            bottom = bottom.override;
            let maxResult = max(0, bottom);
          } else {
            maxResult = num13;
            if (null != bottom.offset) {
              const _Math7 = Math;
              maxResult = Math.max(0, num13 + bottom.offset);
            }
          }
        }
        rect1.bottom = num14;
        const obj7 = { insets: rect1, messageForDisallowedNavigationError: null };
        let tmp53;
        if (!tmp27) {
          tmp53 = guildId;
        }
        obj7.messageForDisallowedNavigationError = tmp53;
        const activityFrameInjectedJavaScript = tmp2(tmp3[21]).createActivityFrameInjectedJavaScript(obj7);
        let tmp56Result = null;
        if (null != tmp11) {
          const obj8 = { style: tmp.webView, ref, source: null, androidAssetLoaderConfig: null, mixedContentMode: null, androidInjectedJavaScriptForOrigins: null, originWhitelist: null, overScrollMode: "never", scrollEnabled: false, cacheEnabled: true, onError: null, onContentProcessDidTerminate: null, onRenderProcessGone: null, webViewKey: null, temporaryParentNodeTag: null, messagingWithWebViewKeyEnabled: true, allowFileAccess: null, injectedJavaScript: null, injectedJavaScriptForMainFrameOnly: false, onShouldStartLoadWithRequest: null, mediaPlaybackRequiresUserAction: false, ignoreSilentHardwareSwitch: null, allowsInlineMediaPlayback: true, minimumFontSize: 1, bounces: false, allowsProtectedMedia: true };
          const obj9 = { uri: null };
          obj8.source = obj9;
          let assetLoaderConfig;
          if (androidWebViewShellConfig != null) {
            assetLoaderConfig = androidWebViewShellConfig.assetLoaderConfig;
          }
          obj8.androidAssetLoaderConfig = assetLoaderConfig;
          let allowMixedContent;
          if (androidWebViewShellConfig != null) {
            allowMixedContent = androidWebViewShellConfig.allowMixedContent;
          }
          let str2 = "never";
          if (true === allowMixedContent) {
            str2 = "always";
          }
          obj8.mixedContentMode = str2;
          let tmp59;
          if (null != androidWebViewShellConfig) {
            const obj10 = { script: activityFrameInjectedJavaScript, allowedOriginRules: androidWebViewShellConfig.documentStartOriginRules };
            tmp59 = obj10;
          }
          obj8.androidInjectedJavaScriptForOrigins = tmp59;
          obj8.originWhitelist = ["*"];
          obj8.onError = callback;
          obj8.onContentProcessDidTerminate = callback2;
          obj8.onRenderProcessGone = callback1;
          obj8.webViewKey = iframeId;
          obj8.temporaryParentNodeTag = context;
          obj8.allowFileAccess = tmp27;
          let tmp60;
          if (tmp27) {
            tmp60 = activityFrameInjectedJavaScript;
          }
          obj8.injectedJavaScript = tmp60;
          let tmp61;
          if (tmp27) {
            tmp61 = callback3;
          }
          obj8.onShouldStartLoadWithRequest = tmp61;
          obj8.ignoreSilentHardwareSwitch = ignoreSilentHardwareSwitch;
          tmp56Result = activitySessionId(tmp2(tmp3[14]).WebView, obj8);
        }
        return tmp56Result;
      }
    }
    return null;
  } else if (tmp27) {
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