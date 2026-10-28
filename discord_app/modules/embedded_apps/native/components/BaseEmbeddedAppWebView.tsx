// discord_app/modules/embedded_apps/native/components/BaseEmbeddedAppWebView.tsx
import LoggerDefault from "../../../debug/Logger.tsx";
import c from "../../../../../_runtime/00576_c.js";
import util from "../../../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import AlertActionCreatorsDefault from "../../../../actions/AlertActionCreators.tsx";
import usePreviousDefault from "../../../../hooks/usePrevious.tsx";
import WebView from "../../../../../_runtime/07942_WebView.js";
import useEmbeddedAppCSPDefault from "../../csp/useEmbeddedAppCSP.tsx";
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
const AnalyticEvents = fn(1084).AnalyticEvents;
const jsx = fn(21).jsx;
const createStyles = fn(5004);
let closure_10 = createStyles.createStyles({ webView: { backgroundColor: "transparent" } });
let closure_11 = new LoggerDefault("BaseEmbeddedAppWebView");
fn(558);
let tmp2 = new LoggerDefault("BaseEmbeddedAppWebView");
let ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled()
  ? function BaseEmbeddedAppWebViewContent(onInvalidUrl) {
      const cResult = applicationId(isPipOrGridMode[9]).c(99);
      ({ framePolicy, iframeId, shellBridgeSecret, deepLinkQueryParams, activityUrl, applicationId } = onInvalidUrl);
      ({ queryParams, onActivityCrash } = onInvalidUrl);
      onInvalidUrl = onInvalidUrl.onInvalidUrl;
      ({ onLoadEnd, allowPopups, referrerPolicy, isPipOrGridMode } = onInvalidUrl);
      ({ ignoreSilentHardwareSwitch, safeAreasConfig } = onInvalidUrl);
      const channelId = onInvalidUrl.channelId;
      const guildId = onInvalidUrl.guildId;
      const activitySessionId = onInvalidUrl.activitySessionId;
      if (undefined === deepLinkQueryParams) {
        deepLinkQueryParams = {};
      }
      hadInvalidUrlError();
      const context = guildId.useContext(tmp(tmp2[11]).WebViewContext);
      const tmp6 = combined();
      const hasInvalidUrlError = tmp6.hasInvalidUrlError;
      const setHasInvalidUrlError = tmp6.setHasInvalidUrlError;
      hadInvalidUrlError = tmp6.hadInvalidUrlError;
      let obj = applicationId(isPipOrGridMode[9]);
      [tmp8, tmp9] = channelId(guildId.useState(null), 2);
      if (cResult[0] !== iframeId) {
        const webViewProxy = tmp(tmp2[12]).getWebViewProxy(iframeId);
        cResult[0] = iframeId;
        cResult[1] = webViewProxy;
        let tmp10 = webViewProxy;
        const tmpResult = tmp(tmp2[12]);
      } else {
        tmp10 = cResult[1];
      }
      closure_12 = tmp10;
      let rect = onActivityCrash(tmp2[13])();
      const tmp7 = channelId(guildId.useState(null), 2);
      const embeddedAppShimVersion = applicationId(isPipOrGridMode[14]).useEmbeddedAppShimVersion(
        "BaseEmbeddedAppWebView",
      );
      const tmpResult4 = applicationId(isPipOrGridMode[14]);
      let obj3 = {};
      constants = onInvalidUrl(isPipOrGridMode[15]).getConstants();
      const merged = Object.assign(queryParams);
      const merged1 = Object.assign(deepLinkQueryParams);
      obj3.frame_id = iframeId;
      obj3.platform = applicationId(isPipOrGridMode[16]).ActivityPlatform.MOBILE;
      obj3.mobile_app_version = constants.Version;
      obj3[applicationId(isPipOrGridMode[17]).SHIM_VERSION_PARAM] = "" + embeddedAppShimVersion;
      if (cResult[2] !== allowPopups) {
        let obj4 = { allowPopups };
        const tmp18 = tmp12(tmp2[18])(obj4);
        cResult[2] = allowPopups;
        cResult[3] = tmp18;
        let tmp17 = tmp18;
      } else {
        tmp17 = cResult[3];
      }
      const uRLSearchParams = new URLSearchParams(obj3);
      combined = "" + activityUrl + "?" + uRLSearchParams;
      if (cResult[4] !== framePolicy) {
        let result;
        if (null != framePolicy) {
          result = tmp(tmp2[19]).deriveIframeCSPAttributeFromPolicy(framePolicy.policy);
          const tmpResult5 = tmp(tmp2[19]);
        }
        cResult[4] = framePolicy;
        cResult[5] = result;
        let tmp21 = result;
      } else {
        tmp21 = cResult[5];
      }
      if (cResult[6] === activityUrl) {
        if (cResult[7] === tmp21) {
          if (cResult[8] === tmp17) {
            if (cResult[9] === combined) {
              if (cResult[10] === referrerPolicy) {
                if (cResult[11] === shellBridgeSecret) {
                  if (cResult[12] === embeddedAppShimVersion) {
                    let tmp23 = cResult[13];
                  }
                  const tmp24 = tmp12(tmp2[20])(tmp23);
                  if (cResult[14] !== applicationId) {
                    function oe(nativeEvent) {
                      tmp9.warn(
                        "activity WebView error for appId " +
                          applicationId +
                          ". " +
                          JSON.stringify(nativeEvent.nativeEvent),
                      );
                    }
                    cResult[14] = applicationId;
                    cResult[15] = oe;
                  }
                  if (cResult[16] !== applicationId) {
                    function se(nativeEvent) {
                      tmp9.warn(
                        "activity WebView render process gone for appId " +
                          applicationId +
                          ". " +
                          JSON.stringify(nativeEvent.nativeEvent),
                      );
                    }
                    cResult[16] = applicationId;
                    cResult[17] = se;
                  }
                  if (cResult[18] === activitySessionId) {
                    if (cResult[19] === applicationId) {
                      if (cResult[20] === channelId) {
                        if (cResult[21] === guildId) {
                          const _Symbol = Symbol;
                          if (cResult[24] === Symbol.for("react.memo_cache_sentinel")) {
                            const items = [activitySessionId];
                            function pe() {
                              return activitySessionId.getUseActivityUrlOverride();
                            }
                            cResult[24] = items;
                            cResult[25] = pe;
                            let tmp29 = pe;
                            let tmp28 = items;
                          } else {
                            tmp28 = cResult[24];
                            tmp29 = cResult[25];
                          }
                          const stateFromStores = tmp(tmp2[22]).useStateFromStores(tmp28, tmp29);
                          if (cResult[26] === combined) {
                            if (cResult[27] === stateFromStores) {
                              if (cResult[28] === setHasInvalidUrlError) {
                                if (cResult[29] === tmp9) {
                                  let tmp32 = cResult[30];
                                }
                                if (cResult[31] === combined) {
                                  if (cResult[32] === stateFromStores) {
                                    if (cResult[33] === setHasInvalidUrlError) {
                                      let tmp33 = cResult[34];
                                    }
                                    const effect = obj2.useEffect(tmp32, tmp33);
                                    if (cResult[35] === hadInvalidUrlError) {
                                      if (cResult[36] === hasInvalidUrlError) {
                                        let tmp35 = cResult[37];
                                        let tmp36 = cResult[38];
                                      }
                                      const effect1 = obj2.useEffect(tmp35, tmp36);
                                      if (cResult[39] === hadInvalidUrlError) {
                                        if (cResult[40] === hasInvalidUrlError) {
                                          if (cResult[41] === onInvalidUrl) {
                                            let tmp39 = cResult[42];
                                            let tmp40 = cResult[43];
                                          }
                                          const effect2 = obj2.useEffect(tmp39, tmp40);
                                          class Se {
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
                                          let num36;
                                          if (rect != null) {
                                            num36 = rect.left;
                                          }
                                          if (num36 == null) {
                                            num36 = 0;
                                          }
                                          if (cResult[44] === undefined) {
                                            if (cResult[45] === num36) {
                                              let tmp43 = cResult[46];
                                            }
                                            let right;
                                            if (safeAreasConfig != null) {
                                              right = safeAreasConfig.right;
                                            }
                                            class Se {
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
                                            if (rect != null) {
                                              let num43 = rect.right;
                                            }
                                            if (num43 == null) {
                                              num43 = 0;
                                            }
                                            if (cResult[47] === right) {
                                              if (cResult[48] === num43) {
                                                let tmp47 = cResult[49];
                                              }
                                              let top;
                                              if (safeAreasConfig != null) {
                                                top = safeAreasConfig.top;
                                              }
                                              class Se {
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
                                              if (rect != null) {
                                                let num50 = rect.top;
                                              }
                                              if (num50 == null) {
                                                num50 = 0;
                                              }
                                              if (cResult[50] === top) {
                                                if (cResult[51] === num50) {
                                                  let tmp51 = cResult[52];
                                                }
                                                let bottom1;
                                                if (safeAreasConfig != null) {
                                                  bottom1 = safeAreasConfig.bottom;
                                                }
                                                class Se {
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
                                                if (rect != null) {
                                                  let num57 = rect.bottom;
                                                }
                                                if (num57 == null) {
                                                  num57 = 0;
                                                }
                                                if (cResult[53] === bottom1) {
                                                  if (cResult[54] === num57) {
                                                    let tmp55 = cResult[55];
                                                  }
                                                  if (cResult[56] === tmp43) {
                                                    if (cResult[57] === tmp47) {
                                                      if (cResult[58] === tmp51) {
                                                        if (cResult[59] === tmp55) {
                                                          let tmp58 = cResult[60];
                                                        }
                                                        if (cResult[61] === applicationId) {
                                                          if (cResult[62] === tmp58) {
                                                            if (cResult[63] === framePolicy) {
                                                              if (cResult[64] === tmp8) {
                                                                if (cResult[65] === tmp24.url) {
                                                                  let tmp59 = cResult[66];
                                                                }
                                                                const tmp60 = tmp12(tmp2[25])(tmp59);
                                                                class Se {
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
                                                                const ref = obj2.useRef(null);
                                                                let origin;
                                                                if (tmp8 != null) {
                                                                  origin = tmp8.origin;
                                                                }
                                                                if (cResult[67] === origin) {
                                                                  if (cResult[68] === rect) {
                                                                    if (cResult[69] === isPipOrGridMode) {
                                                                      if (safeAreasConfig != null) {
                                                                        let bottom = safeAreasConfig.bottom;
                                                                      }
                                                                      class Se {
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
                                                                cResult[67] = origin;
                                                                cResult[68] = rect;
                                                                cResult[69] = isPipOrGridMode;
                                                                let bottom2;
                                                                if (safeAreasConfig != null) {
                                                                  bottom2 = safeAreasConfig.bottom;
                                                                }
                                                                cResult[70] = bottom2;
                                                                let left;
                                                                if (safeAreasConfig != null) {
                                                                  left = safeAreasConfig.left;
                                                                }
                                                                cResult[71] = left;
                                                                let right1;
                                                                if (safeAreasConfig != null) {
                                                                  right1 = safeAreasConfig.right;
                                                                }
                                                                cResult[72] = right1;
                                                                let top1;
                                                                if (safeAreasConfig != null) {
                                                                  top1 = safeAreasConfig.top;
                                                                }
                                                                function xe() {
                                                                  if (closure_16) {
                                                                    if (null != closure_12) {
                                                                      closure_0 = safeAreasConfig(function* () {
                                                                        if (c9 === 2) {
                                                                          c9 = 3;
                                                                          throw new TypeError(
                                                                            "Generator functions may not be called on executing generators",
                                                                          );
                                                                        } else if (tmp6 === 3) {
                                                                          if (arg0 === 1) {
                                                                            throw value;
                                                                          } else if (arg0 === 2) {
                                                                            const obj2 = { value, done: true };
                                                                            return obj2;
                                                                          } else {
                                                                            return {
                                                                              value: "IconComponent",
                                                                              done: null,
                                                                            };
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
                                                                                if (null != closure_1_12) {
                                                                                  if (null != origin) {
                                                                                    if (c3) {
                                                                                      rect = {
                                                                                        top: 0,
                                                                                        bottom: 0,
                                                                                        left: 0,
                                                                                        right: 0,
                                                                                      };
                                                                                    } else {
                                                                                      rect = closure_1_13;
                                                                                    }
                                                                                    const rect2 = closure_4;
                                                                                    let left;
                                                                                    if (closure_4 != null) {
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
                                                                                      left: closure_2_12(left, c0),
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
                                                                                    rect1.right = closure_2_12(
                                                                                      right,
                                                                                      c1,
                                                                                    );
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
                                                                                    rect1.top = closure_2_12(top, c2);
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
                                                                                    rect1.bottom = closure_2_12(
                                                                                      bottom,
                                                                                      c3,
                                                                                    );
                                                                                    obj5.insets = rect1;
                                                                                    obj4.data = obj5;
                                                                                    const tmp33 = onActivityCrash(
                                                                                      isPipOrGridMode[26],
                                                                                    )(obj4, tmp16);
                                                                                    closure_132_0 = tmp33;
                                                                                    c7 = 1;
                                                                                    c8 = 2;
                                                                                    c9 = 1;
                                                                                    const obj6 = {
                                                                                      value:
                                                                                        closure_1_12.injectJavaScript(
                                                                                          tmp33,
                                                                                        ),
                                                                                      done: false,
                                                                                    };
                                                                                    return obj6;
                                                                                  }
                                                                                }
                                                                              }
                                                                            } else {
                                                                              if (1 === tmp7) {
                                                                                c7 = 0;
                                                                                if (null != ref.current) {
                                                                                  const current = ref.current;
                                                                                  current.injectJavaScript(
                                                                                    closure_132_0,
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
                                                                          let applyArgumentsResult =
                                                                            HermesBuiltin.applyArguments(self);
                                                                        } else {
                                                                          applyArgumentsResult = apply(self, arguments);
                                                                        }
                                                                        return applyArgumentsResult;
                                                                      })();
                                                                    }
                                                                  }
                                                                }
                                                                cResult[73] = top1;
                                                                cResult[74] = null != tmp12(tmp2[25])(tmp59);
                                                                cResult[75] = tmp10;
                                                                cResult[76] = xe;
                                                                const tmp61 = null != tmp12(tmp2[25])(tmp59);
                                                              }
                                                            }
                                                          }
                                                        }
                                                        let obj6 = {
                                                          applicationId: null,
                                                          shellUrl: null,
                                                          iframeUrl: null,
                                                          framePolicy: null,
                                                          frameInsets: null,
                                                        };
                                                        class Se {
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
                                                        obj6.shellUrl = tmp24.url;
                                                        obj6.iframeUrl = tmp8;
                                                        obj6.framePolicy = framePolicy;
                                                        obj6.frameInsets = tmp58;
                                                        cResult[61] = applicationId;
                                                        cResult[62] = tmp58;
                                                        cResult[63] = framePolicy;
                                                        cResult[64] = tmp8;
                                                        cResult[65] = tmp24.url;
                                                        cResult[66] = obj6;
                                                        tmp59 = obj6;
                                                      }
                                                    }
                                                  }
                                                  let rect1 = { left: null, right: null, top: null, bottom: null };
                                                  class Se {
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
                                                  rect1.right = tmp47;
                                                  rect1.top = tmp51;
                                                  rect1.bottom = tmp55;
                                                  cResult[56] = tmp43;
                                                  cResult[57] = tmp47;
                                                  cResult[58] = tmp51;
                                                  cResult[59] = tmp55;
                                                  cResult[60] = rect1;
                                                  tmp58 = rect1;
                                                }
                                                let num58 = num57;
                                                if (null != bottom1) {
                                                  if (bottom1.disable) {
                                                    num58 = 0;
                                                  } else if (null != bottom1.override) {
                                                    const _Math8 = Math;
                                                    let bound = Math.max(0, bottom1.override);
                                                  } else {
                                                    bound = num57;
                                                    if (null != bottom1.offset) {
                                                      const _Math7 = Math;
                                                      bound = Math.max(0, num57 + bottom1.offset);
                                                    }
                                                  }
                                                }
                                                cResult[53] = bottom1;
                                                cResult[54] = num57;
                                                cResult[55] = num58;
                                                tmp55 = num58;
                                              }
                                              let num51 = num50;
                                              if (null != top) {
                                                if (top.disable) {
                                                  num51 = 0;
                                                } else if (null != top.override) {
                                                  const _Math6 = Math;
                                                  let bound1 = Math.max(0, top.override);
                                                } else {
                                                  bound1 = num50;
                                                  if (null != top.offset) {
                                                    const _Math5 = Math;
                                                    bound1 = Math.max(0, num50 + top.offset);
                                                  }
                                                }
                                              }
                                              cResult[50] = top;
                                              cResult[51] = num50;
                                              cResult[52] = num51;
                                              tmp51 = num51;
                                            }
                                            let num44 = num43;
                                            if (null != right) {
                                              if (right.disable) {
                                                num44 = 0;
                                              } else if (null != right.override) {
                                                const _Math4 = Math;
                                                let bound2 = Math.max(0, right.override);
                                              } else {
                                                bound2 = num43;
                                                if (null != right.offset) {
                                                  const _Math3 = Math;
                                                  bound2 = Math.max(0, num43 + right.offset);
                                                }
                                              }
                                            }
                                            cResult[47] = right;
                                            cResult[48] = num43;
                                            cResult[49] = num44;
                                            tmp47 = num44;
                                          }
                                          let num37 = num36;
                                          if (null != undefined) {
                                            if (tmp42.disable) {
                                              num37 = 0;
                                            } else if (null != tmp42.override) {
                                              const _Math2 = Math;
                                              let bound3 = Math.max(0, tmp42.override);
                                            } else {
                                              bound3 = num36;
                                              if (null != tmp42.offset) {
                                                const _Math = Math;
                                                bound3 = Math.max(0, num36 + tmp42.offset);
                                              }
                                            }
                                          }
                                          cResult[44] = undefined;
                                          cResult[45] = num36;
                                          cResult[46] = num37;
                                          tmp43 = num37;
                                        }
                                      }
                                      class Se {
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
                                      const items1 = [hasInvalidUrlError, hadInvalidUrlError, onInvalidUrl];
                                      cResult[39] = hadInvalidUrlError;
                                      cResult[40] = hasInvalidUrlError;
                                      cResult[41] = onInvalidUrl;
                                      cResult[42] = Se;
                                      cResult[43] = items1;
                                      tmp40 = items1;
                                      tmp39 = Se;
                                    }
                                    const items2 = [hadInvalidUrlError, hasInvalidUrlError];
                                    cResult[35] = hadInvalidUrlError;
                                    cResult[36] = hasInvalidUrlError;
                                    cResult[37] = tmp37;
                                    cResult[38] = items2;
                                    tmp36 = items2;
                                    tmp35 = tmp37;
                                  }
                                }
                                const items3 = [, stateFromStores, setHasInvalidUrlError];
                                cResult[31] = combined;
                                cResult[32] = stateFromStores;
                                cResult[33] = setHasInvalidUrlError;
                                cResult[34] = items3;
                                tmp33 = items3;
                              }
                            }
                          }
                          function me() {
                            try {
                              const _URL = URL;
                              const uRL = new URL(combined);
                              tmp9(uRL);
                            } catch (tmp9) {
                              if (stateFromStores) {
                                setHasInvalidUrlError(true);
                              } else {
                                throw tmp9;
                              }
                            }
                          }
                          cResult[26] = combined;
                          cResult[27] = stateFromStores;
                          cResult[28] = setHasInvalidUrlError;
                          cResult[29] = tmp9;
                          cResult[30] = me;
                          tmp32 = me;
                          const tmpResult6 = tmp(tmp2[22]);
                        }
                      }
                    }
                  }
                  function ce() {
                    tmp9.warn("activity WebView content process terminated for appId " + applicationId);
                    AnalyticsUtilsDefault.track(AnalyticEvents.ACTIVITY_WEB_VIEW_CONTENT_PROCESS_TERMINATED, {
                      application_id: applicationId,
                      channel_id: channelId,
                      guild_id: guildId,
                      activity_session_id: activitySessionId,
                    });
                    onActivityCrash();
                  }
                  cResult[18] = activitySessionId;
                  cResult[19] = applicationId;
                  cResult[20] = channelId;
                  cResult[21] = guildId;
                  cResult[22] = onActivityCrash;
                  cResult[23] = ce;
                }
              }
            }
          }
        }
      }
      const obj7 = {
        embeddedAppUrl: activityUrl,
        iframeUri: combined,
        iframeSandboxAttributes: tmp17,
        iframeCsp: tmp21,
        referrerPolicy,
        shimVersion: embeddedAppShimVersion,
        shellBridgeSecret,
      };
      cResult[6] = activityUrl;
      cResult[7] = tmp21;
      cResult[8] = tmp17;
      cResult[9] = combined;
      cResult[10] = referrerPolicy;
      cResult[11] = shellBridgeSecret;
      cResult[12] = embeddedAppShimVersion;
      cResult[13] = obj7;
      tmp23 = obj7;
    }
  : function BaseEmbeddedAppWebViewContent(shellBridgeSecret) {
      ({ framePolicy, iframeId } = shellBridgeSecret);
      let deepLinkQueryParams = shellBridgeSecret.deepLinkQueryParams;
      if (deepLinkQueryParams === undefined) {
        deepLinkQueryParams = {};
      }
      ({ activityUrl, applicationId } = shellBridgeSecret);
      ({ queryParams, onActivityCrash } = shellBridgeSecret);
      const onInvalidUrl = shellBridgeSecret.onInvalidUrl;
      const isPipOrGridMode = shellBridgeSecret.isPipOrGridMode;
      ({ ignoreSilentHardwareSwitch, onLoadEnd, allowPopups, referrerPolicy } = shellBridgeSecret);
      if (ignoreSilentHardwareSwitch === undefined) {
        ignoreSilentHardwareSwitch = true;
      }
      const safeAreasConfig = shellBridgeSecret.safeAreasConfig;
      const channelId = shellBridgeSecret.channelId;
      const guildId = shellBridgeSecret.guildId;
      const activitySessionId = shellBridgeSecret.activitySessionId;
      c12 = undefined;
      let rect;
      let stateFromStores;
      closure_17 = undefined;
      let ref;
      let origin;
      const context = channelId.useContext(iframeId(onInvalidUrl[11]).WebViewContext);
      const tmp5 = rect();
      const hasInvalidUrlError = tmp5.hasInvalidUrlError;
      const setHasInvalidUrlError = tmp5.setHasInvalidUrlError;
      const hadInvalidUrlError = tmp5.hadInvalidUrlError;
      let tmp = setHasInvalidUrlError();
      [tmp7, c12] = safeAreasConfig(channelId.useState(null), 2);
      const items = [iframeId];
      const memo = channelId.useMemo(() => WebView.getWebViewProxy(iframeId), items);
      rect = applicationId(onInvalidUrl[13])();
      const tmp6 = safeAreasConfig(channelId.useState(null), 2);
      const embeddedAppShimVersion = iframeId(onInvalidUrl[14]).useEmbeddedAppShimVersion("BaseEmbeddedAppWebView");
      let obj3 = iframeId(onInvalidUrl[14]);
      let obj = {};
      constants = onActivityCrash(onInvalidUrl[15]).getConstants();
      const merged = Object.assign(queryParams);
      const merged1 = Object.assign(deepLinkQueryParams);
      obj.frame_id = iframeId;
      obj.platform = iframeId(onInvalidUrl[16]).ActivityPlatform.MOBILE;
      obj.mobile_app_version = constants.Version;
      let max = globalThis;
      obj[iframeId(onInvalidUrl[17]).SHIM_VERSION_PARAM] = "" + embeddedAppShimVersion;
      let obj4 = onActivityCrash(onInvalidUrl[15]);
      const uRLSearchParams = new URLSearchParams(obj);
      const combined = "" + activityUrl + "?" + uRLSearchParams;
      let result;
      if (null != framePolicy) {
        result = tmp2(tmp3[19]).deriveIframeCSPAttributeFromPolicy(framePolicy.policy);
        const tmp2Result = tmp2(tmp3[19]);
      }
      const tmp18 = applicationId(onInvalidUrl[20])({
        embeddedAppUrl: activityUrl,
        iframeUri: combined,
        iframeSandboxAttributes: applicationId(onInvalidUrl[18])({ allowPopups }),
        iframeCsp: result,
        referrerPolicy,
        shimVersion: embeddedAppShimVersion,
        shellBridgeSecret: shellBridgeSecret.shellBridgeSecret,
      });
      const items1 = [applicationId];
      const items2 = [applicationId];
      const callback = obj2.useCallback((nativeEvent) => {
        hadInvalidUrlError.warn(
          "activity WebView error for appId " + applicationId + ". " + JSON.stringify(nativeEvent.nativeEvent),
        );
      }, items1);
      const items3 = [applicationId, channelId, guildId, activitySessionId, onActivityCrash];
      const callback1 = obj2.useCallback((nativeEvent) => {
        hadInvalidUrlError.warn(
          "activity WebView render process gone for appId " +
            applicationId +
            ". " +
            JSON.stringify(nativeEvent.nativeEvent),
        );
      }, items2);
      const callback2 = obj2.useCallback(() => {
        hadInvalidUrlError.warn("activity WebView content process terminated for appId " + applicationId);
        AnalyticsUtilsDefault.track(AnalyticEvents.ACTIVITY_WEB_VIEW_CONTENT_PROCESS_TERMINATED, {
          application_id: applicationId,
          channel_id: channelId,
          guild_id: guildId,
          activity_session_id: activitySessionId,
        });
        onActivityCrash();
      }, items3);
      const tmp14 = applicationId(onInvalidUrl[18])({ allowPopups });
      const items4 = [guildId];
      stateFromStores = iframeId(onInvalidUrl[22]).useStateFromStores(items4, () =>
        guildId.getUseActivityUrlOverride(),
      );
      const items5 = [combined, stateFromStores, setHasInvalidUrlError];
      const effect = obj2.useEffect(() => {
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
      }, items5);
      const items6 = [hadInvalidUrlError, hasInvalidUrlError];
      const effect1 = obj2.useEffect(() => {
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
      }, items6);
      const items7 = [hasInvalidUrlError, hadInvalidUrlError, onInvalidUrl];
      const effect2 = obj2.useEffect(() => {
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
      }, items7);
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
      const tmp38 = applicationId(onInvalidUrl[25])({
        applicationId,
        shellUrl: tmp18.url,
        iframeUrl: tmp7,
        framePolicy,
        frameInsets: rect1,
      });
      closure_17 = tmp39;
      ref = obj2.useRef(null);
      origin = undefined;
      if (tmp7 != null) {
        origin = tmp7.origin;
      }
      const items8 = [rect, isPipOrGridMode, null != tmp38, memo, origin, safeAreasConfig];
      const effect3 = obj2.useEffect(() => {
        if (closure_17) {
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
                          if (closure_4) {
                            rect = { top: 0, bottom: 0, left: 0, right: 0 };
                          } else {
                            rect = closure_1_14;
                          }
                          const rect2 = closure_5;
                          let left;
                          if (closure_5 != null) {
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
                          const tmp33 = applicationId(onInvalidUrl[26])(obj4, tmp16);
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
      }, items8);
      let tmp43 = null;
      if (null != tmp38) {
        let obj6 = { style: tmp.webView, ref, source: null };
        ({ html: obj11.html, url: obj11.baseUrl } = tmp18);
        obj6.source = { html: null, baseUrl: null };
        const merged2 = Object.assign(tmp38);
        obj6.originWhitelist = ["*"];
        obj6.overScrollMode = "never";
        obj6.scrollEnabled = false;
        obj6.cacheEnabled = true;
        obj6.onError = callback;
        obj6.onLoadEnd = onLoadEnd;
        obj6.onContentProcessDidTerminate = callback2;
        obj6.onRenderProcessGone = callback1;
        obj6.webViewKey = iframeId;
        obj6.temporaryParentNodeTag = context;
        obj6.messagingWithWebViewKeyEnabled = true;
        obj6.mediaPlaybackRequiresUserAction = false;
        obj6.ignoreSilentHardwareSwitch = ignoreSilentHardwareSwitch;
        obj6.allowsInlineMediaPlayback = true;
        obj6.minimumFontSize = 1;
        obj6.bounces = false;
        obj6.allowsProtectedMedia = true;
        tmp43 = hasInvalidUrlError(tmp2(tmp3[12]).WebView, obj6);
        const obj7 = { html: null, baseUrl: null };
      }
      return tmp43;
    };
ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled()
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
let result = size.fileFinishedImporting("modules/embedded_apps/native/components/BaseEmbeddedAppWebView.tsx");

export const BaseEmbeddedAppWebView = ReactCompilerGating.isReactCompilerEnabled()
  ? function BaseEmbeddedAppWebView(onLoadError) {
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
                    const tmp14 = <closure_13 />;
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
              const tmp22 = <closure_13 />;
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
    }
  : function BaseEmbeddedAppWebView(onLoadError) {
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
                return <closure_13 />;
              }
            }
          }
          const obj3 = {};
          const merged1 = Object.assign(onLoadError);
          obj3.framePolicy = null;
          return <closure_13 />;
        }
      }
      return null;
    };
