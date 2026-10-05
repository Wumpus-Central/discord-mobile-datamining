// discord_app/modules/embedded_apps/native/components/BaseEmbeddedAppWebView.tsx
import LoggerDefault from "../../../debug/Logger.tsx";
import c from "../../../../../_runtime/00576_c.js";
import util from "../../../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import URLUtilsDefault from "../../../../utils/URLUtils.tsx";
import AlertActionCreatorsDefault from "../../../../actions/AlertActionCreators.tsx";
import usePreviousDefault from "../../../../hooks/usePrevious.tsx";
import WebView from "../../../../../_runtime/07973_WebView.js";
import getPostMessageJavaScriptDefault from "../utils/getPostMessageJavaScript.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import DeveloperActivityShelfStore from "../../../activities/DeveloperActivityShelfStore.tsx";

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
const AnalyticEvents = fn(1085).AnalyticEvents;
const Constants = fn(2011);
({ ActivityPlatform: c10, DISALLOWED_NAVIGATION_ERROR_CLOSE_ACTIVITY: closure_11 } = Constants);
const jsx = fn(21).jsx;
const createStyles = fn(4890);
let closure_13 = createStyles.createStyles({ webView: { backgroundColor: "transparent" } });
let closure_14 = new LoggerDefault("BaseEmbeddedAppWebView");
const PlatformUtils = fn(1369);
let closure_15 = PlatformUtils.isIOS();
let c16 = "discord-webview-shell";
fn(558);
let tmp3 = new LoggerDefault("BaseEmbeddedAppWebView");
const ReactCompilerGating = fn(558);
let closure_18 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useHasInvalidUrlErrorState() {
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
    }
  : function useHasInvalidUrlErrorState() {
      const tmp = _slicedToArray(noop.useState(false), 2);
      const first = tmp[0];
      return {
        hasInvalidUrlError: first,
        setHasInvalidUrlError: tmp[1],
        hadInvalidUrlError: usePreviousDefault(first),
      };
    };
const size = fn(2);
const result = size.fileFinishedImporting("modules/embedded_apps/native/components/BaseEmbeddedAppWebView.tsx");

export const BaseEmbeddedAppWebView = ReactCompilerGating.isReactCompilerEnabled()
  ? (iframeId) => {
      const cResult = iframeId(onLoadError[12]).c(106);
      iframeId = iframeId.iframeId;
      ({ deepLinkQueryParams, applicationId } = iframeId);
      ({ queryParams, onActivityCrash } = iframeId);
      onLoadError = iframeId.onLoadError;
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
      hadInvalidUrlError();
      const context = isPipOrGridMode.useContext(tmp(tmp2[13]).WebViewContext);
      let tmp6 = closure_18();
      const hasInvalidUrlError = tmp6.hasInvalidUrlError;
      const setHasInvalidUrlError = tmp6.setHasInvalidUrlError;
      hadInvalidUrlError = tmp6.hadInvalidUrlError;
      let obj = iframeId(onLoadError[12]);
      [tmp9, tmp10] = referrerPolicy(isPipOrGridMode.useState(null), 2);
      if (cResult[0] !== iframeId) {
        const webViewProxy = tmp(tmp2[14]).getWebViewProxy(iframeId);
        cResult[0] = iframeId;
        cResult[1] = webViewProxy;
        let tmp11 = webViewProxy;
        const tmpResult = tmp(tmp2[14]);
      } else {
        tmp11 = cResult[1];
      }
      closure_15 = tmp11;
      const tmp8 = referrerPolicy(isPipOrGridMode.useState(null), 2);
      [tmp14, tmp15] = referrerPolicy(isPipOrGridMode.useState(null), 2);
      c16 = tmp15;
      const tmp17 = applicationId(onLoadError[15])();
      closure_17 = tmp17;
      const tmp7Result = referrerPolicy(isPipOrGridMode.useState(null), 2);
      let obj3 = {};
      constants = onActivityCrash(onLoadError[16]).getConstants();
      const merged = Object.assign(queryParams);
      const merged1 = Object.assign(deepLinkQueryParams);
      obj3.frame_id = iframeId;
      obj3.platform = activitySessionId.MOBILE;
      obj3.mobile_app_version = constants.Version;
      if (cResult[2] !== allowPopups) {
        let obj5 = { allowPopups };
        const tmp22 = applicationId(tmp2[17])(obj5);
        cResult[2] = allowPopups;
        cResult[3] = tmp22;
        let tmp21 = tmp22;
      } else {
        tmp21 = cResult[3];
      }
      closure_18 = tmp21;
      const uRLSearchParams = new URLSearchParams(obj3);
      const combined = "" + iframeId.activityUrl + "?" + uRLSearchParams;
      closure_20 = obj2.useRef(safeAreasConfig);
      if (cResult[4] === iframeId) {
        if (cResult[5] === tmp21) {
          if (cResult[6] === combined) {
            if (cResult[7] === onLoadError) {
              if (cResult[8] === referrerPolicy) {
                if (cResult[9] === tmp15) {
                  let tmp25 = cResult[10];
                }
                if (cResult[11] === iframeId) {
                  if (cResult[12] === tmp21) {
                    if (cResult[13] === combined) {
                      if (cResult[14] === onLoadError) {
                        if (cResult[15] === referrerPolicy) {
                          let tmp26 = cResult[16];
                        }
                        const effect = obj2.useEffect(tmp25, tmp26);
                        if (cResult[17] !== applicationId) {
                          function ce(nativeEvent) {
                            tmp10.warn(
                              "activity WebView error for appId " +
                                applicationId +
                                ". " +
                                JSON.stringify(nativeEvent.nativeEvent),
                            );
                          }
                          cResult[17] = applicationId;
                          cResult[18] = ce;
                        }
                        if (cResult[19] !== applicationId) {
                          function pe(nativeEvent) {
                            tmp10.warn(
                              "activity WebView render process gone for appId " +
                                applicationId +
                                ". " +
                                JSON.stringify(nativeEvent.nativeEvent),
                            );
                          }
                          cResult[19] = applicationId;
                          cResult[20] = pe;
                        }
                        if (cResult[21] === activitySessionId) {
                          if (cResult[22] === applicationId) {
                            if (cResult[23] === channelId) {
                              if (cResult[24] === guildId) {
                                const _Symbol = Symbol;
                                if (cResult[27] === Symbol.for("react.memo_cache_sentinel")) {
                                  let items = [channelId];
                                  class Se {
                                    constructor() {
                                      return channelId.getUseActivityUrlOverride();
                                    }
                                  }
                                  cResult[27] = items;
                                  cResult[28] = Se;
                                  let tmp32 = Se;
                                  let tmp31 = items;
                                } else {
                                  tmp31 = cResult[27];
                                  tmp32 = cResult[28];
                                }
                                const stateFromStores = tmp(tmp2[20]).useStateFromStores(tmp31, tmp32);
                                if (cResult[29] === combined) {
                                  if (cResult[30] === stateFromStores) {
                                    if (cResult[31] === setHasInvalidUrlError) {
                                      if (cResult[32] === tmp10) {
                                        let tmp35 = cResult[33];
                                      }
                                      if (cResult[34] === combined) {
                                        if (cResult[35] === stateFromStores) {
                                          if (cResult[36] === setHasInvalidUrlError) {
                                            let tmp36 = cResult[37];
                                          }
                                          const effect1 = obj2.useEffect(tmp35, tmp36);
                                          if (cResult[38] === hadInvalidUrlError) {
                                            if (cResult[39] === hasInvalidUrlError) {
                                              let tmp38 = cResult[40];
                                              const tmp39 = cResult[41];
                                            }
                                            const effect2 = obj2.useEffect(tmp38, tmp39);
                                            if (cResult[42] === hadInvalidUrlError) {
                                              if (cResult[43] === hasInvalidUrlError) {
                                                if (cResult[44] === onInvalidUrl) {
                                                  let tmp41 = cResult[45];
                                                  let tmp42 = cResult[46];
                                                }
                                                const effect3 = obj2.useEffect(tmp41, tmp42);
                                                if (cResult[47] === iframeId) {
                                                  if (cResult[48] === tmp9) {
                                                    if (cResult[49] === tmp14) {
                                                      let combined1 = cResult[50];
                                                    }
                                                    class Ie {
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
                                                    const first = referrerPolicy(obj2.useState(false), 2)[0];
                                                    if (cResult[51] === Symbol.for("react.memo_cache_sentinel")) {
                                                      const items1 = [];
                                                      cResult[51] = items1;
                                                      class Ie {
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
                                                      const tmp52 = cResult[51];
                                                    }
                                                    const tmp7Result4 = referrerPolicy(obj2.useState(tmp52), 2);
                                                    const first1 = tmp7Result4[0];
                                                    closure_25 = tmp7Result4[1];
                                                    if (cResult[52] !== applicationId) {
                                                      class Te {
                                                        constructor() {
                                                          if (closure_15) {
                                                            closure_0 = ["'self'"];
                                                            parseCsp = function parseCsp(arg0, str) {
                                                              const match = str.match(arg0);
                                                              if (null !== match) {
                                                                if (match.length >= 2) {
                                                                  const parts = str.split(" ");
                                                                  const found = parts.filter(
                                                                    (item) => !closure_1_0.includes(item),
                                                                  );
                                                                }
                                                                return [];
                                                              }
                                                            };
                                                            closure_0 = undefined;
                                                            tmp = onInvalidUrl;
                                                            closure_0 = onInvalidUrl(function* () {
                                                              if (c5 === 2) {
                                                                c5 = 3;
                                                                throw new TypeError(
                                                                  "Generator functions may not be called on executing generators",
                                                                );
                                                              } else if (tmp5 === 3) {
                                                                if (arg0 === 1) {
                                                                  throw value;
                                                                } else if (arg0 === 2) {
                                                                  const obj3 = { value, done: true };
                                                                  return obj3;
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
                                                                      const obj4 = { value, done: true };
                                                                      return obj4;
                                                                    } else {
                                                                      closure_3 = tmp2;
                                                                      closure_2 = tmp3;
                                                                      closure_130_0 = undefined;
                                                                      closure_130_1 = undefined;
                                                                      closure_130_2 = undefined;
                                                                      if (null != parseCsp) {
                                                                        const nonTestModeUrlForApplication = iframeId(
                                                                          onLoadError[23],
                                                                        ).getNonTestModeUrlForApplication(parseCsp);
                                                                        closure_0 = nonTestModeUrlForApplication;
                                                                        if (nonTestModeUrlForApplication == null) {
                                                                          const _HermesInternal = HermesInternal;
                                                                          closure_0 =
                                                                            "https://" + parseCsp + ".discordsays.com";
                                                                        }
                                                                        closure_130_0 = closure_0;
                                                                        const HTTP = iframeId(onLoadError[24]).HTTP;
                                                                        const obj5 = {
                                                                          url: null,
                                                                          rejectWithError: false,
                                                                        };
                                                                        const _HermesInternal2 = HermesInternal;
                                                                        obj5.url = "" + closure_0 + "/.discord/csp";
                                                                        c4 = 1;
                                                                        c5 = 1;
                                                                        const obj6 = {
                                                                          value: HTTP.get(obj5),
                                                                          done: false,
                                                                        };
                                                                        return obj6;
                                                                      } else {
                                                                        c5 = 3;
                                                                      }
                                                                    }
                                                                  } else if (arg0 === 1) {
                                                                    c5 = 3;
                                                                    throw value;
                                                                  } else if (arg0 !== 2) {
                                                                    closure_130_1 =
                                                                      value.headers["content-security-policy"];
                                                                    const items = [
                                                                      "about:blank",
                                                                      "file://*",
                                                                      closure_130_0,
                                                                    ];
                                                                    parseCsp = 3;
                                                                    parseCsp = HermesBuiltin.arraySpread(
                                                                      parseCsp(/frame-src (.*?);/, closure_130_1),
                                                                      parseCsp,
                                                                    );
                                                                    parseCsp = HermesBuiltin.arraySpread(
                                                                      parseCsp(/child-src (.*?);/, closure_130_1),
                                                                      parseCsp,
                                                                    );
                                                                    closure_130_2 = items;
                                                                    closure_2_25(
                                                                      closure_130_2.map(
                                                                        (item) =>
                                                                          "^" +
                                                                          closure_1_1(closure_1_3[25])(item).replace(
                                                                            /\\\*/g,
                                                                            ".*",
                                                                          ),
                                                                      ),
                                                                    );
                                                                    closure_2_23(true);
                                                                  }
                                                                  c5 = 3;
                                                                  const obj = { value, done: true };
                                                                  return obj;
                                                                } catch (tmp13) {
                                                                  c5 = tmp;
                                                                  throw tmp13;
                                                                }
                                                              }
                                                            });
                                                            tmp2 = (function fetchAndParseCSP() {
                                                              const self = this;
                                                              const apply = closure_0.apply;
                                                              if (typeof apply === "unknown") {
                                                                let applyArgumentsResult =
                                                                  HermesBuiltin.applyArguments(self);
                                                              } else {
                                                                applyArgumentsResult = apply(self, arguments);
                                                              }
                                                              return applyArgumentsResult;
                                                            })();
                                                          }
                                                          return;
                                                        }
                                                      }
                                                      const items2 = [applicationId];
                                                      class Ie {
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
                                                      items2[1] = closure_15;
                                                      cResult[52] = applicationId;
                                                      cResult[53] = Te;
                                                      cResult[54] = items2;
                                                      let tmp56 = items2;
                                                    } else {
                                                      class Te {
                                                        constructor() {
                                                          if (closure_15) {
                                                            closure_0 = ["'self'"];
                                                            parseCsp = function parseCsp(arg0, str) {
                                                              const match = str.match(arg0);
                                                              if (null !== match) {
                                                                if (match.length >= 2) {
                                                                  const parts = str.split(" ");
                                                                  const found = parts.filter(
                                                                    (item) => !closure_1_0.includes(item),
                                                                  );
                                                                }
                                                                return [];
                                                              }
                                                            };
                                                            closure_0 = undefined;
                                                            tmp = onInvalidUrl;
                                                            closure_0 = onInvalidUrl(function* () {
                                                              if (c5 === 2) {
                                                                c5 = 3;
                                                                throw new TypeError(
                                                                  "Generator functions may not be called on executing generators",
                                                                );
                                                              } else if (tmp5 === 3) {
                                                                if (arg0 === 1) {
                                                                  throw value;
                                                                } else if (arg0 === 2) {
                                                                  const obj3 = { value, done: true };
                                                                  return obj3;
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
                                                                      const obj4 = { value, done: true };
                                                                      return obj4;
                                                                    } else {
                                                                      closure_3 = tmp2;
                                                                      closure_2 = tmp3;
                                                                      closure_130_0 = undefined;
                                                                      closure_130_1 = undefined;
                                                                      closure_130_2 = undefined;
                                                                      if (null != parseCsp) {
                                                                        const nonTestModeUrlForApplication = iframeId(
                                                                          onLoadError[23],
                                                                        ).getNonTestModeUrlForApplication(parseCsp);
                                                                        closure_0 = nonTestModeUrlForApplication;
                                                                        if (nonTestModeUrlForApplication == null) {
                                                                          const _HermesInternal = HermesInternal;
                                                                          closure_0 =
                                                                            "https://" + parseCsp + ".discordsays.com";
                                                                        }
                                                                        closure_130_0 = closure_0;
                                                                        const HTTP = iframeId(onLoadError[24]).HTTP;
                                                                        const obj5 = {
                                                                          url: null,
                                                                          rejectWithError: false,
                                                                        };
                                                                        const _HermesInternal2 = HermesInternal;
                                                                        obj5.url = "" + closure_0 + "/.discord/csp";
                                                                        c4 = 1;
                                                                        c5 = 1;
                                                                        const obj6 = {
                                                                          value: HTTP.get(obj5),
                                                                          done: false,
                                                                        };
                                                                        return obj6;
                                                                      } else {
                                                                        c5 = 3;
                                                                      }
                                                                    }
                                                                  } else if (arg0 === 1) {
                                                                    c5 = 3;
                                                                    throw value;
                                                                  } else if (arg0 !== 2) {
                                                                    closure_130_1 =
                                                                      value.headers["content-security-policy"];
                                                                    const items = [
                                                                      "about:blank",
                                                                      "file://*",
                                                                      closure_130_0,
                                                                    ];
                                                                    parseCsp = 3;
                                                                    parseCsp = HermesBuiltin.arraySpread(
                                                                      parseCsp(/frame-src (.*?);/, closure_130_1),
                                                                      parseCsp,
                                                                    );
                                                                    parseCsp = HermesBuiltin.arraySpread(
                                                                      parseCsp(/child-src (.*?);/, closure_130_1),
                                                                      parseCsp,
                                                                    );
                                                                    closure_130_2 = items;
                                                                    closure_2_25(
                                                                      closure_130_2.map(
                                                                        (item) =>
                                                                          "^" +
                                                                          closure_1_1(closure_1_3[25])(item).replace(
                                                                            /\\\*/g,
                                                                            ".*",
                                                                          ),
                                                                      ),
                                                                    );
                                                                    closure_2_23(true);
                                                                  }
                                                                  c5 = 3;
                                                                  const obj = { value, done: true };
                                                                  return obj;
                                                                } catch (tmp13) {
                                                                  c5 = tmp;
                                                                  throw tmp13;
                                                                }
                                                              }
                                                            });
                                                            tmp2 = (function fetchAndParseCSP() {
                                                              const self = this;
                                                              const apply = closure_0.apply;
                                                              if (typeof apply === "unknown") {
                                                                let applyArgumentsResult =
                                                                  HermesBuiltin.applyArguments(self);
                                                              } else {
                                                                applyArgumentsResult = apply(self, arguments);
                                                              }
                                                              return applyArgumentsResult;
                                                            })();
                                                          }
                                                          return;
                                                        }
                                                      }
                                                      tmp56 = cResult[54];
                                                    }
                                                    const effect4 = obj2.useEffect(Te, tmp56);
                                                    if (cResult[55] === first1) {
                                                      class Te {
                                                        constructor() {
                                                          if (closure_15) {
                                                            closure_0 = ["'self'"];
                                                            parseCsp = function parseCsp(arg0, str) {
                                                              const match = str.match(arg0);
                                                              if (null !== match) {
                                                                if (match.length >= 2) {
                                                                  const parts = str.split(" ");
                                                                  const found = parts.filter(
                                                                    (item) => !closure_1_0.includes(item),
                                                                  );
                                                                }
                                                                return [];
                                                              }
                                                            };
                                                            closure_0 = undefined;
                                                            tmp = onInvalidUrl;
                                                            closure_0 = onInvalidUrl(function* () {
                                                              if (c5 === 2) {
                                                                c5 = 3;
                                                                throw new TypeError(
                                                                  "Generator functions may not be called on executing generators",
                                                                );
                                                              } else if (tmp5 === 3) {
                                                                if (arg0 === 1) {
                                                                  throw value;
                                                                } else if (arg0 === 2) {
                                                                  const obj3 = { value, done: true };
                                                                  return obj3;
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
                                                                      const obj4 = { value, done: true };
                                                                      return obj4;
                                                                    } else {
                                                                      closure_3 = tmp2;
                                                                      closure_2 = tmp3;
                                                                      closure_130_0 = undefined;
                                                                      closure_130_1 = undefined;
                                                                      closure_130_2 = undefined;
                                                                      if (null != parseCsp) {
                                                                        const nonTestModeUrlForApplication = iframeId(
                                                                          onLoadError[23],
                                                                        ).getNonTestModeUrlForApplication(parseCsp);
                                                                        closure_0 = nonTestModeUrlForApplication;
                                                                        if (nonTestModeUrlForApplication == null) {
                                                                          const _HermesInternal = HermesInternal;
                                                                          closure_0 =
                                                                            "https://" + parseCsp + ".discordsays.com";
                                                                        }
                                                                        closure_130_0 = closure_0;
                                                                        const HTTP = iframeId(onLoadError[24]).HTTP;
                                                                        const obj5 = {
                                                                          url: null,
                                                                          rejectWithError: false,
                                                                        };
                                                                        const _HermesInternal2 = HermesInternal;
                                                                        obj5.url = "" + closure_0 + "/.discord/csp";
                                                                        c4 = 1;
                                                                        c5 = 1;
                                                                        const obj6 = {
                                                                          value: HTTP.get(obj5),
                                                                          done: false,
                                                                        };
                                                                        return obj6;
                                                                      } else {
                                                                        c5 = 3;
                                                                      }
                                                                    }
                                                                  } else if (arg0 === 1) {
                                                                    c5 = 3;
                                                                    throw value;
                                                                  } else if (arg0 !== 2) {
                                                                    closure_130_1 =
                                                                      value.headers["content-security-policy"];
                                                                    const items = [
                                                                      "about:blank",
                                                                      "file://*",
                                                                      closure_130_0,
                                                                    ];
                                                                    parseCsp = 3;
                                                                    parseCsp = HermesBuiltin.arraySpread(
                                                                      parseCsp(/frame-src (.*?);/, closure_130_1),
                                                                      parseCsp,
                                                                    );
                                                                    parseCsp = HermesBuiltin.arraySpread(
                                                                      parseCsp(/child-src (.*?);/, closure_130_1),
                                                                      parseCsp,
                                                                    );
                                                                    closure_130_2 = items;
                                                                    closure_2_25(
                                                                      closure_130_2.map(
                                                                        (item) =>
                                                                          "^" +
                                                                          closure_1_1(closure_1_3[25])(item).replace(
                                                                            /\\\*/g,
                                                                            ".*",
                                                                          ),
                                                                      ),
                                                                    );
                                                                    closure_2_23(true);
                                                                  }
                                                                  c5 = 3;
                                                                  const obj = { value, done: true };
                                                                  return obj;
                                                                } catch (tmp13) {
                                                                  c5 = tmp;
                                                                  throw tmp13;
                                                                }
                                                              }
                                                            });
                                                            tmp2 = (function fetchAndParseCSP() {
                                                              const self = this;
                                                              const apply = closure_0.apply;
                                                              if (typeof apply === "unknown") {
                                                                let applyArgumentsResult =
                                                                  HermesBuiltin.applyArguments(self);
                                                              } else {
                                                                applyArgumentsResult = apply(self, arguments);
                                                              }
                                                              return applyArgumentsResult;
                                                            })();
                                                          }
                                                          return;
                                                        }
                                                      }
                                                      closure_26 = tmp59;
                                                      class Ie {
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
                                                      const _Symbol3 = Symbol;
                                                      if (cResult[58] === Symbol.for("react.memo_cache_sentinel")) {
                                                        class Fe {
                                                          constructor(arg0) {
                                                            current = closure_27.current;
                                                            if (current != null) {
                                                              tmp = iframeId;
                                                              tmp2 = closure_1;
                                                              tmp3 = closure_3;
                                                              injectJavaScriptResult = current.injectJavaScript(
                                                                closure_1(closure_3[27])(iframeId),
                                                              );
                                                            }
                                                            return;
                                                          }
                                                        }
                                                        cResult[58] = Fe;
                                                        class Ie {
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
                                                        class Fe {
                                                          constructor(arg0) {
                                                            current = closure_27.current;
                                                            if (current != null) {
                                                              tmp = iframeId;
                                                              tmp2 = closure_1;
                                                              tmp3 = closure_3;
                                                              injectJavaScriptResult = current.injectJavaScript(
                                                                closure_1(closure_3[27])(iframeId),
                                                              );
                                                            }
                                                            return;
                                                          }
                                                        }
                                                      }
                                                      closure_28 = tmp61;
                                                      if (cResult[59] === tmp17) {
                                                        class Fe {
                                                          constructor(arg0) {
                                                            current = closure_27.current;
                                                            if (current != null) {
                                                              tmp = iframeId;
                                                              tmp2 = closure_1;
                                                              tmp3 = closure_3;
                                                              injectJavaScriptResult = current.injectJavaScript(
                                                                closure_1(closure_3[27])(iframeId),
                                                              );
                                                            }
                                                            return;
                                                          }
                                                        }
                                                      }
                                                      cResult[59] = tmp17;
                                                      cResult[60] = isPipOrGridMode;
                                                      class Le {
                                                        constructor(arg0) {
                                                          mainDocumentURL = iframeId.mainDocumentURL;
                                                          if (null != closure_21) {
                                                            if (null != mainDocumentURL) {
                                                              if (mainDocumentURL !== closure_21) {
                                                                tmp13 = Linking;
                                                                openURLResult = Linking.openURL(iframeId.url);
                                                                flag2 = false;
                                                                return false;
                                                              }
                                                            }
                                                          }
                                                          tmp = closure_24;
                                                          iter = closure_24[Symbol.iterator]();
                                                          nextResult = iter.next();
                                                          while (iter !== undefined) {
                                                            _RegExp = RegExp;
                                                            tmp3 = new.target;
                                                            tmp4 = new.target;
                                                            tmp5 = nextResult;
                                                            regExp = new RegExp(nextResult);
                                                            tmp6 = regExp;
                                                            if (regExp.test(iframeId.url)) {
                                                              tmp7 = iter;
                                                              iter.return();
                                                              flag = true;
                                                              return true;
                                                            }
                                                          }
                                                          tmp8 = closure_1;
                                                          tmp9 = closure_3;
                                                          obj2 = closure_1(closure_3[26]);
                                                          str = closure_8.getActivityUrlOverride();
                                                          if (str == null) {
                                                            str = "";
                                                          }
                                                          toURLSafeResult = obj2.toURLSafe(str);
                                                          tmp8Result = tmp8(tmp9[26]);
                                                          toURLSafeResult1 = tmp8Result.toURLSafe(iframeId.url);
                                                          tmp12 =
                                                            null != toURLSafeResult &&
                                                            null != toURLSafeResult1 &&
                                                            toURLSafeResult.origin + toURLSafeResult.pathname ===
                                                              toURLSafeResult1.origin + toURLSafeResult1.pathname;
                                                          return tmp12;
                                                        }
                                                      }
                                                      cResult[61] = undefined;
                                                      if (safeAreasConfig != null) {
                                                        class Fe {
                                                          constructor(arg0) {
                                                            current = closure_27.current;
                                                            if (current != null) {
                                                              tmp = iframeId;
                                                              tmp2 = closure_1;
                                                              tmp3 = closure_3;
                                                              injectJavaScriptResult = current.injectJavaScript(
                                                                closure_1(closure_3[27])(iframeId),
                                                              );
                                                            }
                                                            return;
                                                          }
                                                        }
                                                      }
                                                      cResult[62] = undefined;
                                                      if (safeAreasConfig != null) {
                                                        class Fe {
                                                          constructor(arg0) {
                                                            current = closure_27.current;
                                                            if (current != null) {
                                                              tmp = iframeId;
                                                              tmp2 = closure_1;
                                                              tmp3 = closure_3;
                                                              injectJavaScriptResult = current.injectJavaScript(
                                                                closure_1(closure_3[27])(iframeId),
                                                              );
                                                            }
                                                            return;
                                                          }
                                                        }
                                                      }
                                                      cResult[63] = undefined;
                                                      if (safeAreasConfig != null) {
                                                        class Fe {
                                                          constructor(arg0) {
                                                            current = closure_27.current;
                                                            if (current != null) {
                                                              tmp = iframeId;
                                                              tmp2 = closure_1;
                                                              tmp3 = closure_3;
                                                              injectJavaScriptResult = current.injectJavaScript(
                                                                closure_1(closure_3[27])(iframeId),
                                                              );
                                                            }
                                                            return;
                                                          }
                                                        }
                                                      }
                                                      class De {
                                                        constructor() {
                                                          if (closure_26) {
                                                            tmp = closure_15;
                                                            tmp2 = null;
                                                            if (null != closure_15) {
                                                              tmp3 = onInvalidUrl;
                                                              closure_0 = onInvalidUrl(function* () {
                                                                if (c9 === 2) {
                                                                  c9 = 3;
                                                                  throw new TypeError(
                                                                    "Generator functions may not be called on executing generators",
                                                                  );
                                                                } else if (tmp7 === 3) {
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
                                                                        closure_4 = tmp5;
                                                                        closure_132_0 = undefined;
                                                                        if (null != closure_1_15) {
                                                                          if (closure_6) {
                                                                            let rect = {
                                                                              top: 0,
                                                                              bottom: 0,
                                                                              left: 0,
                                                                              right: 0,
                                                                            };
                                                                          } else {
                                                                            rect = closure_1_17;
                                                                          }
                                                                          const rect2 = c7;
                                                                          let left;
                                                                          if (c7 != null) {
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
                                                                          const rect1 = {
                                                                            left: closure_2_17(left, c0),
                                                                            right: null,
                                                                            top: null,
                                                                            bottom: null,
                                                                          };
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
                                                                          rect1.right = closure_2_17(right, c1);
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
                                                                          rect1.top = closure_2_17(top, c2);
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
                                                                          const obj4 = {
                                                                            type: "safeAreaUpdateEvent",
                                                                            data: null,
                                                                          };
                                                                          const obj5 = { insets: null };
                                                                          rect1.bottom = closure_2_17(bottom, c3);
                                                                          obj5.insets = rect1;
                                                                          obj4.data = obj5;
                                                                          closure_132_0 = obj4;
                                                                          c7 = 1;
                                                                          c8 = 2;
                                                                          c9 = 1;
                                                                          const obj6 = {
                                                                            value: closure_1_15.injectJavaScript(
                                                                              applicationId(8971)(obj4),
                                                                            ),
                                                                            done: false,
                                                                          };
                                                                          return obj6;
                                                                        }
                                                                      }
                                                                    } else {
                                                                      if (1 === tmp8) {
                                                                        c7 = 0;
                                                                        if (null != ref.current) {
                                                                          closure_1_28(
                                                                            applicationId(8971)(closure_132_0),
                                                                          );
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
                                                              });
                                                              tmp4 = (function tryInjectJavaScript() {
                                                                const self = this;
                                                                const apply = closure_0.apply;
                                                                if (typeof apply === "unknown") {
                                                                  let applyArgumentsResult =
                                                                    HermesBuiltin.applyArguments(self);
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
                                                      cResult[64] = undefined;
                                                      cResult[65] = null != tmp44 && null != tmp9 && null != tmp14;
                                                      cResult[66] = tmp11;
                                                      cResult[67] = De;
                                                    }
                                                    class Le {
                                                      constructor(arg0) {
                                                        mainDocumentURL = iframeId.mainDocumentURL;
                                                        if (null != closure_21) {
                                                          if (null != mainDocumentURL) {
                                                            if (mainDocumentURL !== closure_21) {
                                                              tmp13 = Linking;
                                                              openURLResult = Linking.openURL(iframeId.url);
                                                              flag2 = false;
                                                              return false;
                                                            }
                                                          }
                                                        }
                                                        tmp = closure_24;
                                                        iter = closure_24[Symbol.iterator]();
                                                        nextResult = iter.next();
                                                        while (iter !== undefined) {
                                                          _RegExp = RegExp;
                                                          tmp3 = new.target;
                                                          tmp4 = new.target;
                                                          tmp5 = nextResult;
                                                          regExp = new RegExp(nextResult);
                                                          tmp6 = regExp;
                                                          if (regExp.test(iframeId.url)) {
                                                            tmp7 = iter;
                                                            iter.return();
                                                            flag = true;
                                                            return true;
                                                          }
                                                        }
                                                        tmp8 = closure_1;
                                                        tmp9 = closure_3;
                                                        obj2 = closure_1(closure_3[26]);
                                                        str = closure_8.getActivityUrlOverride();
                                                        if (str == null) {
                                                          str = "";
                                                        }
                                                        toURLSafeResult = obj2.toURLSafe(str);
                                                        tmp8Result = tmp8(tmp9[26]);
                                                        toURLSafeResult1 = tmp8Result.toURLSafe(iframeId.url);
                                                        tmp12 =
                                                          null != toURLSafeResult &&
                                                          null != toURLSafeResult1 &&
                                                          toURLSafeResult.origin + toURLSafeResult.pathname ===
                                                            toURLSafeResult1.origin + toURLSafeResult1.pathname;
                                                        return tmp12;
                                                      }
                                                    }
                                                    cResult[55] = first1;
                                                    cResult[56] = tmp44;
                                                    cResult[57] = Le;
                                                    const tmp7Result3 = referrerPolicy(obj2.useState(false), 2);
                                                  }
                                                }
                                                class Ie {
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
                                                if (null == tmp9) {
                                                  class Fe {
                                                    constructor(arg0) {
                                                      current = closure_27.current;
                                                      if (current != null) {
                                                        tmp = iframeId;
                                                        tmp2 = closure_1;
                                                        tmp3 = closure_3;
                                                        injectJavaScriptResult = current.injectJavaScript(
                                                          closure_1(closure_3[27])(iframeId),
                                                        );
                                                      }
                                                      return;
                                                    }
                                                  }
                                                  cResult[47] = iframeId;
                                                  class Ie {
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
                                                  cResult[49] = tmp14;
                                                  cResult[50] = null;
                                                } else {
                                                  class Fe {
                                                    constructor(arg0) {
                                                      current = closure_27.current;
                                                      if (current != null) {
                                                        tmp = iframeId;
                                                        tmp2 = closure_1;
                                                        tmp3 = closure_3;
                                                        injectJavaScriptResult = current.injectJavaScript(
                                                          closure_1(closure_3[27])(iframeId),
                                                        );
                                                      }
                                                      return;
                                                    }
                                                  }
                                                  if (closure_15) {
                                                    class Fe {
                                                      constructor(arg0) {
                                                        current = closure_27.current;
                                                        if (current != null) {
                                                          tmp = iframeId;
                                                          tmp2 = closure_1;
                                                          tmp3 = closure_3;
                                                          injectJavaScriptResult = current.injectJavaScript(
                                                            closure_1(closure_3[27])(iframeId),
                                                          );
                                                        }
                                                        return;
                                                      }
                                                    }
                                                    combined1 = "file://" + tmp14;
                                                  } else {
                                                    class Fe {
                                                      constructor(arg0) {
                                                        current = closure_27.current;
                                                        if (current != null) {
                                                          tmp = iframeId;
                                                          tmp2 = closure_1;
                                                          tmp3 = closure_3;
                                                          injectJavaScriptResult = current.injectJavaScript(
                                                            closure_1(closure_3[27])(iframeId),
                                                          );
                                                        }
                                                        return;
                                                      }
                                                    }
                                                    class Ie {
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
                                                    combined1 =
                                                      "" +
                                                      tmp46 +
                                                      "/" +
                                                      c16 +
                                                      "/" +
                                                      tmp(tmp2[18]).webViewShellFileName(iframeId);
                                                    const tmpResult4 = tmp(tmp2[18]);
                                                  }
                                                  class Ie {
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
                                            }
                                            class Ie {
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
                                            cResult[42] = hadInvalidUrlError;
                                            cResult[43] = hasInvalidUrlError;
                                            cResult[44] = onInvalidUrl;
                                            cResult[46] = items3;
                                            tmp42 = items3;
                                            tmp41 = Ie;
                                          }
                                          class Ee {
                                            constructor() {
                                              tmp = !hadInvalidUrlError;
                                              if (!hadInvalidUrlError) {
                                                tmp = hasInvalidUrlError;
                                              }
                                              if (tmp) {
                                                tmp2 = closure_1;
                                                tmp3 = closure_3;
                                                obj = closure_1(closure_3[21]);
                                                obj1 = { title: null, body: null, confirmText: null };
                                                tmp4 = closure_0;
                                                intl = closure_0(closure_3[22]).intl;
                                                obj1.title = intl.string(closure_0(closure_3[22]).t.PtobXW);
                                                intl2 = closure_0(closure_3[22]).intl;
                                                obj1.body = intl2.string(closure_0(closure_3[22]).t["55iAUT"]);
                                                intl3 = closure_0(closure_3[22]).intl;
                                                obj1.confirmText = intl3.string(closure_0(closure_3[22]).t.BddRzS);
                                                showResult = obj.show(obj1);
                                              }
                                              return;
                                            }
                                          }
                                          const items4 = [hadInvalidUrlError, hasInvalidUrlError];
                                          cResult[38] = hadInvalidUrlError;
                                          cResult[39] = hasInvalidUrlError;
                                          cResult[40] = Ee;
                                          cResult[41] = items4;
                                          tmp38 = Ee;
                                        }
                                      }
                                      const items5 = [, ,];
                                      class Se {
                                        constructor() {
                                          return channelId.getUseActivityUrlOverride();
                                        }
                                      }
                                      items5[1] = stateFromStores;
                                      items5[2] = setHasInvalidUrlError;
                                      cResult[34] = combined;
                                      cResult[35] = stateFromStores;
                                      cResult[36] = setHasInvalidUrlError;
                                      cResult[37] = items5;
                                      tmp36 = items5;
                                    }
                                  }
                                }
                                function ye() {
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
                                cResult[29] = combined;
                                cResult[30] = stateFromStores;
                                cResult[32] = tmp10;
                                cResult[33] = ye;
                                tmp35 = ye;
                                const tmpResult3 = tmp(tmp2[20]);
                              }
                            }
                          }
                        }
                        function me() {
                          tmp10.warn("activity WebView content process terminated for appId " + applicationId);
                          AnalyticsUtilsDefault.track(AnalyticEvents.ACTIVITY_WEB_VIEW_CONTENT_PROCESS_TERMINATED, {
                            application_id: applicationId,
                            channel_id: channelId,
                            guild_id: guildId,
                            activity_session_id: activitySessionId,
                          });
                          onActivityCrash();
                        }
                        cResult[21] = activitySessionId;
                        cResult[22] = applicationId;
                        cResult[23] = channelId;
                        cResult[24] = guildId;
                        cResult[26] = me;
                      }
                    }
                  }
                }
                const items6 = [, tmp21, onLoadError, referrerPolicy, iframeId];
                cResult[11] = iframeId;
                cResult[12] = tmp21;
                cResult[13] = combined;
                cResult[15] = referrerPolicy;
                cResult[16] = items6;
                tmp26 = items6;
              }
            }
          }
        }
      }
      function le() {
        closure_0 = onInvalidUrl(function* () {
          if (c7 === 2) {
            c7 = 3;
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
              c7 = 2;
              if (0 === c6) {
                if (arg0 === 1) {
                  c7 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c7 = 3;
                  const obj3 = { value, done: true };
                  return obj3;
                } else {
                  referrerPolicy = tmp3;
                  closure_4 = tmp2;
                  closure_132_0 = undefined;
                  const rect = iframeId(onLoadError[15]).getStableSafeAreaInsets();
                  const current = ref.current;
                  let left;
                  if (current != null) {
                    left = current.left;
                  }
                  let left1;
                  if (rect != null) {
                    left1 = rect.left;
                  }
                  iframeId = left1;
                  if (left1 == null) {
                    iframeId = 0;
                  }
                  const rect1 = { left: closure_2_17(left, iframeId), right: null, top: null, bottom: null };
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
                  rect1.right = closure_2_17(right, c1);
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
                  rect1.top = closure_2_17(top, c2);
                  let bottom;
                  if (current != null) {
                    bottom = current.bottom;
                  }
                  let bottom1;
                  if (rect != null) {
                    bottom1 = rect.bottom;
                  }
                  let v0 = bottom1;
                  if (bottom1 == null) {
                    v0 = 0;
                  }
                  rect1.bottom = closure_2_17(bottom, v0);
                  const obj4 = {
                    iframeId,
                    iframeUri,
                    iframeSandboxAttributes,
                    referrerPolicy,
                    insets: rect1,
                    messageForDisallowedNavigationError: null,
                  };
                  let tmp37;
                  const obj7 = iframeId(onLoadError[15]);
                  if (!closure_2_15) {
                    tmp37 = hasInvalidUrlError;
                  }
                  obj4.messageForDisallowedNavigationError = tmp37;
                  c6 = 1;
                  c7 = 1;
                  const obj5 = { value: applicationId(onLoadError[18])(obj4), done: false };
                  return obj5;
                }
              } else if (arg0 === 1) {
                c7 = 3;
                throw value;
              } else if (arg0 === 2) {
                c7 = 3;
                const obj = { value, done: true };
                return obj;
              } else {
                closure_132_0 = value;
                if (null != closure_132_0) {
                  closure_1_16(closure_132_0);
                } else {
                  v0();
                }
                c7 = 3;
              }
            } catch (tmp38) {
              c7 = tmp;
              throw tmp38;
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
      cResult[5] = tmp21;
      cResult[6] = combined;
      cResult[7] = onLoadError;
      cResult[8] = referrerPolicy;
      cResult[9] = tmp15;
      cResult[10] = le;
      tmp25 = le;
      let obj4 = onActivityCrash(onLoadError[16]);
    }
  : (iframeId) => {
      iframeId = iframeId.iframeId;
      let deepLinkQueryParams = iframeId.deepLinkQueryParams;
      if (deepLinkQueryParams === undefined) {
        deepLinkQueryParams = {};
      }
      const applicationId = iframeId.applicationId;
      ({ queryParams, onActivityCrash } = iframeId);
      const onLoadError = iframeId.onLoadError;
      const onInvalidUrl = iframeId.onInvalidUrl;
      let referrerPolicy = iframeId.referrerPolicy;
      const isPipOrGridMode = iframeId.isPipOrGridMode;
      ({ ignoreSilentHardwareSwitch, activityUrl, allowPopups } = iframeId);
      if (ignoreSilentHardwareSwitch === undefined) {
        ignoreSilentHardwareSwitch = true;
      }
      const safeAreasConfig = iframeId.safeAreasConfig;
      const channelId = iframeId.channelId;
      const guildId = iframeId.guildId;
      const activitySessionId = iframeId.activitySessionId;
      c14 = undefined;
      c16 = undefined;
      closure_18 = undefined;
      closure_23 = undefined;
      c24 = undefined;
      let first;
      closure_26 = undefined;
      closure_27 = undefined;
      let ref;
      let callback4;
      const context = isPipOrGridMode.useContext(iframeId(onLoadError[13]).WebViewContext);
      let tmp5 = closure_18();
      const hasInvalidUrlError = tmp5.hasInvalidUrlError;
      const setHasInvalidUrlError = tmp5.setHasInvalidUrlError;
      const hadInvalidUrlError = tmp5.hadInvalidUrlError;
      let tmp = hadInvalidUrlError();
      [url, c14] = referrerPolicy(isPipOrGridMode.useState(null), 2);
      let items = [iframeId];
      const memo = isPipOrGridMode.useMemo(() => WebView.getWebViewProxy(iframeId), items);
      let tmp7 = referrerPolicy(isPipOrGridMode.useState(null), 2);
      [str, c16] = referrerPolicy(isPipOrGridMode.useState(null), 2);
      let rect = applicationId(onLoadError[15])();
      const tmp9 = referrerPolicy(isPipOrGridMode.useState(null), 2);
      let obj = {};
      constants = onActivityCrash(onLoadError[16]).getConstants();
      const merged = Object.assign(queryParams);
      const merged1 = Object.assign(deepLinkQueryParams);
      obj.frame_id = iframeId;
      obj.platform = activitySessionId.MOBILE;
      obj.mobile_app_version = constants.Version;
      const tmp13 = applicationId(onLoadError[17])({ allowPopups });
      closure_18 = tmp13;
      const uRLSearchParams = new URLSearchParams(obj);
      const combined = "" + activityUrl + "?" + uRLSearchParams;
      closure_20 = isPipOrGridMode.useRef(safeAreasConfig);
      const items1 = [combined, tmp13, onLoadError, referrerPolicy, iframeId];
      const effect = isPipOrGridMode.useEffect(() => {
        closure_0 = async function _loadHtml2() {
          if (c7 === 2) {
            c7 = 3;
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
              c7 = 2;
              if (0 === c6) {
                if (arg0 === 1) {
                  c7 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c7 = 3;
                  const obj3 = { value, done: true };
                  return obj3;
                } else {
                  referrerPolicy = tmp3;
                  closure_4 = tmp2;
                  closure_132_0 = undefined;
                  rect = iframeId(dependencyMap[15]).getStableSafeAreaInsets();
                  const current = ref.current;
                  let left;
                  if (current != null) {
                    left = current.left;
                  }
                  let left1;
                  if (rect != null) {
                    left1 = rect.left;
                  }
                  iframeId = left1;
                  if (left1 == null) {
                    iframeId = 0;
                  }
                  const rect1 = { left: closure_2_17(left, iframeId), right: null, top: null, bottom: null };
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
                  rect1.right = closure_2_17(right, c1);
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
                  rect1.top = closure_2_17(top, c2);
                  let bottom;
                  if (current != null) {
                    bottom = current.bottom;
                  }
                  let bottom1;
                  if (rect != null) {
                    bottom1 = rect.bottom;
                  }
                  let v0 = bottom1;
                  if (bottom1 == null) {
                    v0 = 0;
                  }
                  rect1.bottom = closure_2_17(bottom, v0);
                  const obj4 = {
                    iframeId,
                    iframeUri,
                    iframeSandboxAttributes,
                    referrerPolicy,
                    insets: rect1,
                    messageForDisallowedNavigationError: null,
                  };
                  let tmp37;
                  const obj7 = iframeId(dependencyMap[15]);
                  if (!memo) {
                    tmp37 = hasInvalidUrlError;
                  }
                  obj4.messageForDisallowedNavigationError = tmp37;
                  c6 = 1;
                  c7 = 1;
                  const obj5 = { value: applicationId(dependencyMap[18])(obj4), done: false };
                  return obj5;
                }
              } else if (arg0 === 1) {
                c7 = 3;
                throw value;
              } else if (arg0 === 2) {
                c7 = 3;
                const obj = { value, done: true };
                return obj;
              } else {
                closure_132_0 = value;
                if (null != closure_132_0) {
                  closure_1_16(closure_132_0);
                } else {
                  v0();
                }
                c7 = 3;
              }
            } catch (tmp38) {
              c7 = tmp;
              throw tmp38;
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
      const callback = isPipOrGridMode.useCallback((nativeEvent) => {
        _undefined.warn(
          "activity WebView error for appId " + applicationId + ". " + JSON.stringify(nativeEvent.nativeEvent),
        );
      }, items2);
      const items4 = [applicationId, channelId, guildId, activitySessionId, onActivityCrash];
      const callback1 = isPipOrGridMode.useCallback((nativeEvent) => {
        _undefined.warn(
          "activity WebView render process gone for appId " +
            applicationId +
            ". " +
            JSON.stringify(nativeEvent.nativeEvent),
        );
      }, items3);
      const callback2 = isPipOrGridMode.useCallback(() => {
        _undefined.warn("activity WebView content process terminated for appId " + applicationId);
        AnalyticsUtilsDefault.track(AnalyticEvents.ACTIVITY_WEB_VIEW_CONTENT_PROCESS_TERMINATED, {
          application_id: applicationId,
          channel_id: channelId,
          guild_id: guildId,
          activity_session_id: activitySessionId,
        });
        onActivityCrash();
      }, items4);
      let obj3 = onActivityCrash(onLoadError[16]);
      const items5 = [channelId];
      const stateFromStores = iframeId(onLoadError[20]).useStateFromStores(items5, () =>
        channelId.getUseActivityUrlOverride(),
      );
      const items6 = [combined, stateFromStores, setHasInvalidUrlError];
      const effect1 = isPipOrGridMode.useEffect(() => {
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
      const effect2 = isPipOrGridMode.useEffect(() => {
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
      const effect3 = isPipOrGridMode.useEffect(() => {
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
      let combined1 = null;
      if (null == url) {
        closure_23 = memo;
        [tmp31, c24] = tmp6(obj2.useState(false), 2);
        const tmp6Result2 = tmp6(obj2.useState([]), 2);
        first = tmp6Result2[0];
        closure_26 = tmp6Result2[1];
        const items9 = [applicationId, memo];
        const effect4 = obj2.useEffect(() => {
          if (closure_23) {
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
                  const obj3 = { value, done: true };
                  return obj3;
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
                      const obj4 = { value, done: true };
                      return obj4;
                    } else {
                      closure_3 = tmp2;
                      closure_2 = tmp3;
                      closure_130_0 = undefined;
                      closure_130_1 = undefined;
                      closure_130_2 = undefined;
                      if (null != closure_1) {
                        const nonTestModeUrlForApplication = iframeId(
                          dependencyMap[23],
                        ).getNonTestModeUrlForApplication(tmp33);
                        closure_0 = nonTestModeUrlForApplication;
                        if (nonTestModeUrlForApplication == null) {
                          const _HermesInternal = HermesInternal;
                          closure_0 = "https://" + tmp33 + ".discordsays.com";
                        }
                        closure_130_0 = closure_0;
                        const HTTP = iframeId(dependencyMap[24]).HTTP;
                        const obj5 = { url: null, rejectWithError: false };
                        const _HermesInternal2 = HermesInternal;
                        obj5.url = "" + closure_0 + "/.discord/csp";
                        c4 = 1;
                        c5 = 1;
                        const obj6 = { value: HTTP.get(obj5), done: false };
                        return obj6;
                      } else {
                        c5 = 3;
                      }
                    }
                  } else if (arg0 === 1) {
                    c5 = 3;
                    throw value;
                  } else if (arg0 !== 2) {
                    closure_130_1 = value.headers["content-security-policy"];
                    const items = ["about:blank", "file://*", closure_130_0];
                    closure_1 = 3;
                    closure_1 = HermesBuiltin.arraySpread(closure_131_1(/frame-src (.*?);/, closure_130_1), closure_1);
                    closure_1 = HermesBuiltin.arraySpread(closure_131_1(/child-src (.*?);/, closure_130_1), closure_1);
                    closure_130_2 = items;
                    closure_1_26(
                      closure_130_2.map((item) => "^" + closure_1_1(closure_1_3[25])(item).replace(/\\\*/g, ".*")),
                    );
                    closure_1_24(true);
                  }
                  c5 = 3;
                  const obj = { value, done: true };
                  return obj;
                } catch (tmp13) {
                  c5 = tmp;
                  throw tmp13;
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
        let tmp36 = null != null;
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
          return (
            null != toURLSafeResult &&
            null != toURLSafeResult1 &&
            toURLSafeResult.origin + toURLSafeResult.pathname === toURLSafeResult1.origin + toURLSafeResult1.pathname
          );
        }, items10);
        if (tmp36) {
          tmp36 = null != url;
        }
        if (tmp36) {
          tmp36 = null != str;
        }
        closure_27 = tmp36;
        ref = obj2.useRef(null);
        callback4 = obj2.useCallback((arg0) => {
          const current = ref.current;
          if (current != null) {
            current.injectJavaScript(getPostMessageJavaScriptDefault(arg0));
          }
        }, []);
        const items11 = [rect, isPipOrGridMode, tmp36, memo, callback4, safeAreasConfig];
        const effect5 = obj2.useEffect(() => {
          if (closure_27) {
            if (null != memo) {
              closure_0 = async function _tryInjectJavaScript2() {
                if (c9 === 2) {
                  c9 = 3;
                  throw new TypeError("Generator functions may not be called on executing generators");
                } else if (tmp7 === 3) {
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
                        closure_4 = tmp5;
                        closure_132_0 = undefined;
                        if (null != memo) {
                          if (closure_6) {
                            rect = { top: 0, bottom: 0, left: 0, right: 0 };
                          } else {
                            rect = closure_1_17;
                          }
                          const rect2 = c7;
                          let left;
                          if (c7 != null) {
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
                          const rect1 = { left: closure_2_17(left, c0), right: null, top: null, bottom: null };
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
                          rect1.right = closure_2_17(right, c1);
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
                          rect1.top = closure_2_17(top, c2);
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
                          rect1.bottom = closure_2_17(bottom, c3);
                          obj5.insets = rect1;
                          obj4.data = obj5;
                          closure_132_0 = obj4;
                          c7 = 1;
                          c8 = 2;
                          c9 = 1;
                          const obj6 = { value: memo.injectJavaScript(applicationId(8971)(obj4)), done: false };
                          return obj6;
                        }
                      }
                    } else {
                      if (1 === tmp8) {
                        c7 = 0;
                        if (null != ref.current) {
                          callback4(applicationId(8971)(closure_132_0));
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
                const _Math8 = Math;
                bottom = bottom.override;
                let bound3 = Math.max(0, bottom);
              } else {
                bound3 = num13;
                if (null != bottom.offset) {
                  const _Math7 = Math;
                  bound3 = Math.max(0, num13 + bottom.offset);
                }
              }
            }
            rect1.bottom = num14;
            if (tmp29) {
              const injectedJavascriptForIOS = tmp2(tmp3[18]).createInjectedJavascriptForIOS(rect1);
              const tmp2Result = tmp2(tmp3[18]);
            }
            let tmp54Result = null;
            if (null != str) {
              let obj4 = {
                style: tmp.webView,
                ref,
                source: null,
                androidAssetLoaderConfig: null,
                originWhitelist: null,
                overScrollMode: "never",
                scrollEnabled: false,
                cacheEnabled: true,
                onError: null,
                onContentProcessDidTerminate: null,
                onRenderProcessGone: null,
                webViewKey: null,
                temporaryParentNodeTag: null,
                messagingWithWebViewKeyEnabled: true,
                allowFileAccess: null,
                injectedJavaScript: null,
                injectedJavaScriptForMainFrameOnly: false,
                onShouldStartLoadWithRequest: null,
                mediaPlaybackRequiresUserAction: false,
                ignoreSilentHardwareSwitch: null,
                allowsInlineMediaPlayback: true,
                minimumFontSize: 1,
                bounces: false,
                allowsProtectedMedia: true,
              };
              let obj6 = { uri: null };
              obj4.source = obj6;
              if ("" === url.port) {
                let host = url.host;
              } else {
                const _HermesInternal3 = HermesInternal;
                host = "" + url.hostname + ":" + url.port;
              }
              let obj7 = { domain: host, httpAllowed: "http:" === url.protocol, pathHandlers: null };
              const obj8 = { type: "internal", path: null, directory: null };
              const _HermesInternal4 = HermesInternal;
              obj8.path = "/" + c16 + "/";
              obj8.directory = str.substring(0, str.lastIndexOf("/"));
              const items12 = [obj8];
              obj7.pathHandlers = items12;
              obj4.androidAssetLoaderConfig = obj7;
              obj4.originWhitelist = ["*"];
              obj4.onError = callback;
              obj4.onContentProcessDidTerminate = callback2;
              obj4.onRenderProcessGone = callback1;
              obj4.webViewKey = iframeId;
              obj4.temporaryParentNodeTag = context;
              obj4.allowFileAccess = tmp29;
              obj4.injectedJavaScript = injectedJavascriptForIOS;
              let tmp56;
              if (tmp29) {
                tmp56 = callback3;
              }
              obj4.onShouldStartLoadWithRequest = tmp56;
              obj4.ignoreSilentHardwareSwitch = ignoreSilentHardwareSwitch;
              tmp54Result = setHasInvalidUrlError(tmp2(tmp3[14]).WebView, obj4);
            }
            return tmp54Result;
          }
        }
        return null;
      } else if (memo) {
        let _HermesInternal2 = HermesInternal;
        combined1 = "file://" + str;
      } else {
        const origin = url.origin;
        let _HermesInternal = HermesInternal;
        combined1 = "" + origin + "/" + c16 + "/" + tmp2(tmp3[18]).webViewShellFileName(iframeId);
        const tmp2Result2 = tmp2(tmp3[18]);
      }
    };
