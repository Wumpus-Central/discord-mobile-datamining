// discord_app/modules/embedded_apps/native/components/BaseEmbeddedAppWebView.tsx
import LoggerDefault from "../../../debug/Logger.tsx";
import c from "../../../../../_runtime/00576_c.js";
import util from "../../../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import URLUtilsDefault from "../../../../utils/URLUtils.tsx";
import AlertActionCreatorsDefault from "../../../../actions/AlertActionCreators.tsx";
import usePreviousDefault from "../../../../hooks/usePrevious.tsx";
import WebView2 from "../../../../../_runtime/07965_WebView.js";
import useEmbeddedAppCSPDefault from "../../csp/useEmbeddedAppCSP.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
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
const createStyles = fn(5005);
let closure_10 = createStyles.createStyles({ webView: { backgroundColor: "transparent" } });
let closure_11 = new LoggerDefault("BaseEmbeddedAppWebView");
fn(558);
let tmp2 = new LoggerDefault("BaseEmbeddedAppWebView");
let ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled()
  ? function BaseEmbeddedAppWebViewContent(applicationId) {
      let WebView = activityUrl;
      let tmp = onInvalidUrl;
      const cResult = activityUrl(onInvalidUrl[9]).c(99);
      ({ framePolicy, iframeId, shellBridgeSecret, deepLinkQueryParams, activityUrl } = applicationId);
      applicationId = applicationId.applicationId;
      ({ queryParams, onActivityCrash } = applicationId);
      onInvalidUrl = applicationId.onInvalidUrl;
      ({ onLoadEnd, allowPopups, referrerPolicy, isPipOrGridMode } = applicationId);
      ({ ignoreSilentHardwareSwitch, safeAreasConfig } = applicationId);
      const channelId = applicationId.channelId;
      const guildId = applicationId.guildId;
      const activitySessionId = applicationId.activitySessionId;
      if (undefined === deepLinkQueryParams) {
        deepLinkQueryParams = {};
      }
      let webView = setHasInvalidUrlError();
      const context = channelId.useContext(WebView(tmp[11]).WebViewContext);
      const tmp5 = closure_14();
      const hasInvalidUrlError = tmp5.hasInvalidUrlError;
      setHasInvalidUrlError = tmp5.setHasInvalidUrlError;
      const hadInvalidUrlError = tmp5.hadInvalidUrlError;
      if (cResult[0] !== iframeId) {
        const webViewProxy = WebView(tmp[12]).getWebViewProxy(iframeId);
        cResult[0] = iframeId;
        cResult[1] = webViewProxy;
        let tmp6 = webViewProxy;
        const WebViewResult = WebView(tmp[12]);
      } else {
        tmp6 = cResult[1];
      }
      closure_12 = tmp6;
      let rect = applicationId(tmp[13])();
      let obj = activityUrl(onInvalidUrl[9]);
      const embeddedAppShimVersion = WebView(tmp[14]).useEmbeddedAppShimVersion("BaseEmbeddedAppWebView");
      const WebViewResult1 = WebView(tmp[14]);
      let obj3 = {};
      constants = onActivityCrash(tmp[15]).getConstants();
      const merged = Object.assign(queryParams);
      const merged1 = Object.assign(deepLinkQueryParams);
      obj3.frame_id = iframeId;
      obj3.platform = WebView(tmp[16]).ActivityPlatform.MOBILE;
      obj3.mobile_app_version = constants.Version;
      obj3[WebView(tmp[17]).SHIM_VERSION_PARAM] = "" + embeddedAppShimVersion;
      if (cResult[2] !== allowPopups) {
        let obj4 = { allowPopups };
        const tmp14 = tmp8(tmp[18])(obj4);
        cResult[2] = allowPopups;
        cResult[3] = tmp14;
        let tmp13 = tmp14;
      } else {
        tmp13 = cResult[3];
      }
      let obj5 = onActivityCrash(tmp[15]);
      const str1 = new URLSearchParams(obj3).toString();
      if (cResult[4] === activityUrl) {
        if (cResult[5] === str1) {
          let tmp16 = cResult[6];
        }
        closure_14 = tmp16;
        if (cResult[7] !== framePolicy) {
          let result;
          if (null != framePolicy) {
            result = WebView(tmp[20]).deriveIframeCSPAttributeFromPolicy(framePolicy.policy);
            const WebViewResult2 = WebView(tmp[20]);
          }
          cResult[7] = framePolicy;
          cResult[8] = result;
          let tmp18 = result;
        } else {
          tmp18 = cResult[8];
        }
        if (cResult[9] === activityUrl) {
          if (cResult[10] === tmp18) {
            if (cResult[11] === tmp13) {
              if (cResult[12] === tmp16) {
                if (cResult[13] === referrerPolicy) {
                  if (cResult[14] === shellBridgeSecret) {
                    if (cResult[15] === embeddedAppShimVersion) {
                      let tmp21 = cResult[16];
                    }
                    const tmp22 = tmp8(tmp[21])(tmp21);
                    if (cResult[17] !== applicationId) {
                      function ae(nativeEvent) {
                        hadInvalidUrlError.warn(
                          "activity WebView error for appId " +
                            applicationId +
                            ". " +
                            JSON.stringify(nativeEvent.nativeEvent),
                        );
                      }
                      cResult[17] = applicationId;
                      cResult[18] = ae;
                      let tmp23 = ae;
                    } else {
                      tmp23 = cResult[18];
                    }
                    if (cResult[19] !== applicationId) {
                      function ne(nativeEvent) {
                        hadInvalidUrlError.warn(
                          "activity WebView render process gone for appId " +
                            applicationId +
                            ". " +
                            JSON.stringify(nativeEvent.nativeEvent),
                        );
                      }
                      cResult[19] = applicationId;
                      cResult[20] = ne;
                      let tmp24 = ne;
                    } else {
                      tmp24 = cResult[20];
                    }
                    if (cResult[21] === activitySessionId) {
                      if (cResult[22] === applicationId) {
                        if (cResult[23] === channelId) {
                          if (cResult[24] === guildId) {
                            if (cResult[25] === onActivityCrash) {
                              let tmp25 = cResult[26];
                            }
                            const _Symbol = Symbol;
                            if (cResult[27] === Symbol.for("react.memo_cache_sentinel")) {
                              const items = [guildId];
                              function ce() {
                                return guildId.getUseActivityUrlOverride();
                              }
                              cResult[27] = items;
                              cResult[28] = ce;
                              let tmp27 = ce;
                              let tmp26 = items;
                            } else {
                              tmp26 = cResult[27];
                              tmp27 = cResult[28];
                            }
                            const stateFromStores = WebView(tmp[23]).useStateFromStores(tmp26, tmp27);
                            if (cResult[29] === activityUrl) {
                              if (cResult[30] === tmp16) {
                                if (cResult[31] === stateFromStores) {
                                  if (cResult[32] === setHasInvalidUrlError) {
                                    let tmp30 = cResult[33];
                                    let tmp31 = cResult[34];
                                  }
                                  const effect = obj2.useEffect(tmp30, tmp31);
                                  if (cResult[35] === hadInvalidUrlError) {
                                    if (cResult[36] === hasInvalidUrlError) {
                                      let tmp33 = cResult[37];
                                      let tmp34 = cResult[38];
                                    }
                                    const effect1 = obj2.useEffect(tmp33, tmp34);
                                    if (cResult[39] === hadInvalidUrlError) {
                                      if (cResult[40] === hasInvalidUrlError) {
                                        if (cResult[41] === onInvalidUrl) {
                                          let tmp36 = cResult[42];
                                          let tmp37 = cResult[43];
                                        }
                                        const effect2 = obj2.useEffect(tmp36, tmp37);
                                        let left;
                                        if (safeAreasConfig != null) {
                                          left = safeAreasConfig.left;
                                        }
                                        let num42;
                                        if (rect != null) {
                                          num42 = rect.left;
                                        }
                                        if (num42 == null) {
                                          num42 = 0;
                                        }
                                        if (cResult[44] === left) {
                                          if (cResult[45] === num42) {
                                            let tmp41 = cResult[46];
                                          }
                                          let right;
                                          if (safeAreasConfig != null) {
                                            right = safeAreasConfig.right;
                                          }
                                          let num49;
                                          if (rect != null) {
                                            num49 = rect.right;
                                          }
                                          if (num49 == null) {
                                            num49 = 0;
                                          }
                                          if (cResult[47] === right) {
                                            if (cResult[48] === num49) {
                                              let tmp45 = cResult[49];
                                            }
                                            let top;
                                            if (safeAreasConfig != null) {
                                              top = safeAreasConfig.top;
                                            }
                                            let num56;
                                            if (rect != null) {
                                              num56 = rect.top;
                                            }
                                            if (num56 == null) {
                                              num56 = 0;
                                            }
                                            if (cResult[50] === top) {
                                              if (cResult[51] === num56) {
                                                let tmp49 = cResult[52];
                                              }
                                              let bottom;
                                              if (safeAreasConfig != null) {
                                                bottom = safeAreasConfig.bottom;
                                              }
                                              let num63;
                                              if (rect != null) {
                                                num63 = rect.bottom;
                                              }
                                              if (num63 == null) {
                                                num63 = 0;
                                              }
                                              if (cResult[53] === bottom) {
                                                if (cResult[54] === num63) {
                                                  let tmp53 = cResult[55];
                                                }
                                                if (cResult[56] === tmp41) {
                                                  if (cResult[57] === tmp45) {
                                                    if (cResult[58] === tmp49) {
                                                      if (cResult[59] === tmp53) {
                                                        let tmp56 = cResult[60];
                                                      }
                                                      let url;
                                                      if (tmp22 != null) {
                                                        url = tmp22.url;
                                                      }
                                                      if (url == null) {
                                                        url = null;
                                                      }
                                                      if (cResult[61] === applicationId) {
                                                        if (cResult[62] === tmp56) {
                                                          if (cResult[63] === framePolicy) {
                                                            if (cResult[64] === tmp16) {
                                                              if (cResult[65] === url) {
                                                                let tmp58 = cResult[66];
                                                              }
                                                              const tmp59 = tmp8(tmp[26])(tmp58);
                                                              closure_16 = tmp60;
                                                              let ref = obj2.useRef(null);
                                                              let origin;
                                                              if (tmp16 != null) {
                                                                origin = tmp16.origin;
                                                              }
                                                              if (cResult[67] === origin) {
                                                                if (cResult[68] === rect) {
                                                                  if (cResult[69] === isPipOrGridMode) {
                                                                    let bottom1;
                                                                    if (safeAreasConfig != null) {
                                                                      bottom1 = safeAreasConfig.bottom;
                                                                    }
                                                                    if (cResult[70] === bottom1) {
                                                                      let left1;
                                                                      if (safeAreasConfig != null) {
                                                                        left1 = safeAreasConfig.left;
                                                                      }
                                                                      if (cResult[71] === left1) {
                                                                        let right1;
                                                                        if (safeAreasConfig != null) {
                                                                          right1 = safeAreasConfig.right;
                                                                        }
                                                                        if (cResult[72] === right1) {
                                                                          let top1;
                                                                          if (safeAreasConfig != null) {
                                                                            top1 = safeAreasConfig.top;
                                                                          }
                                                                          if (cResult[73] === top1) {
                                                                            if (cResult[74] === tmp60) {
                                                                              if (cResult[75] === tmp6) {
                                                                                let tmp67 = cResult[76];
                                                                              }
                                                                              if (cResult[77] === origin) {
                                                                                if (cResult[78] === rect) {
                                                                                  if (cResult[79] === isPipOrGridMode) {
                                                                                    if (
                                                                                      cResult[80] === safeAreasConfig
                                                                                    ) {
                                                                                      if (cResult[81] === tmp60) {
                                                                                        if (cResult[82] === tmp6) {
                                                                                          let tmp72 = cResult[83];
                                                                                        }
                                                                                        const effect3 = obj2.useEffect(
                                                                                          tmp67,
                                                                                          tmp72,
                                                                                        );
                                                                                        let tmp74 = null;
                                                                                        if (null != tmp59) {
                                                                                          tmp74 = null;
                                                                                          if (null != tmp22) {
                                                                                            if (
                                                                                              cResult[84] === tmp22.html
                                                                                            ) {
                                                                                              if (
                                                                                                cResult[85] ===
                                                                                                tmp22.url
                                                                                              ) {
                                                                                                let tmp75 = cResult[86];
                                                                                              }
                                                                                              const _Symbol2 = Symbol;
                                                                                              if (
                                                                                                cResult[87] ===
                                                                                                Symbol.for(
                                                                                                  "react.memo_cache_sentinel",
                                                                                                )
                                                                                              ) {
                                                                                                const items1 = ["*"];
                                                                                                cResult[87] = items1;
                                                                                                let str3 = items1;
                                                                                              } else {
                                                                                                str3 = cResult[87];
                                                                                              }
                                                                                              if (
                                                                                                cResult[88] === iframeId
                                                                                              ) {
                                                                                                if (
                                                                                                  cResult[89] === tmp3
                                                                                                ) {
                                                                                                  if (
                                                                                                    cResult[90] ===
                                                                                                    context
                                                                                                  ) {
                                                                                                    if (
                                                                                                      cResult[91] ===
                                                                                                      tmp25
                                                                                                    ) {
                                                                                                      if (
                                                                                                        cResult[92] ===
                                                                                                        tmp23
                                                                                                      ) {
                                                                                                        if (
                                                                                                          cResult[93] ===
                                                                                                          onLoadEnd
                                                                                                        ) {
                                                                                                          if (
                                                                                                            cResult[94] ===
                                                                                                            tmp24
                                                                                                          ) {
                                                                                                            if (
                                                                                                              cResult[95] ===
                                                                                                              tmp59
                                                                                                            ) {
                                                                                                              if (
                                                                                                                cResult[96] ===
                                                                                                                webView.webView
                                                                                                              ) {
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                              WebView = WebView(
                                                                                                tmp[12],
                                                                                              ).WebView;
                                                                                              let obj6 = {
                                                                                                style: webView.webView,
                                                                                                ref,
                                                                                                source: tmp75,
                                                                                              };
                                                                                              ref =
                                                                                                Object.assign(tmp59);
                                                                                              obj6.originWhitelist =
                                                                                                str3;
                                                                                              str3 = "never";
                                                                                              obj6.overScrollMode =
                                                                                                "never";
                                                                                              obj6.scrollEnabled = false;
                                                                                              obj6.cacheEnabled = true;
                                                                                              obj6.onError = tmp23;
                                                                                              obj6.onLoadEnd =
                                                                                                onLoadEnd;
                                                                                              obj6.onContentProcessDidTerminate =
                                                                                                tmp25;
                                                                                              obj6.onRenderProcessGone =
                                                                                                tmp24;
                                                                                              obj6.webViewKey =
                                                                                                iframeId;
                                                                                              obj6.temporaryParentNodeTag =
                                                                                                context;
                                                                                              obj6.messagingWithWebViewKeyEnabled = true;
                                                                                              obj6.mediaPlaybackRequiresUserAction = false;
                                                                                              obj6.ignoreSilentHardwareSwitch =
                                                                                                tmp3;
                                                                                              class Be {
                                                                                                constructor() {
                                                                                                  if (closure_16) {
                                                                                                    tmp = closure_12;
                                                                                                    tmp2 = null;
                                                                                                    if (
                                                                                                      null != closure_12
                                                                                                    ) {
                                                                                                      tmp3 =
                                                                                                        safeAreasConfig;
                                                                                                      closure_0 =
                                                                                                        safeAreasConfig(
                                                                                                          function* () {
                                                                                                            if (
                                                                                                              c9 === 2
                                                                                                            ) {
                                                                                                              c9 = 3;
                                                                                                              throw new TypeError(
                                                                                                                "Generator functions may not be called on executing generators",
                                                                                                              );
                                                                                                            } else if (
                                                                                                              tmp6 === 3
                                                                                                            ) {
                                                                                                              if (
                                                                                                                arg0 ===
                                                                                                                1
                                                                                                              ) {
                                                                                                                throw value;
                                                                                                              } else if (
                                                                                                                arg0 ===
                                                                                                                2
                                                                                                              ) {
                                                                                                                const obj2 =
                                                                                                                  {
                                                                                                                    value,
                                                                                                                    done: true,
                                                                                                                  };
                                                                                                                return obj2;
                                                                                                              } else {
                                                                                                                return {
                                                                                                                  value:
                                                                                                                    "IconComponent",
                                                                                                                  done: "IconComponent",
                                                                                                                };
                                                                                                              }
                                                                                                            } else {
                                                                                                              try {
                                                                                                                c9 = 2;
                                                                                                                if (
                                                                                                                  0 ===
                                                                                                                  c8
                                                                                                                ) {
                                                                                                                  if (
                                                                                                                    arg0 ===
                                                                                                                    1
                                                                                                                  ) {
                                                                                                                    c9 = 3;
                                                                                                                    throw value;
                                                                                                                  } else if (
                                                                                                                    arg0 ===
                                                                                                                    2
                                                                                                                  ) {
                                                                                                                    c9 = 3;
                                                                                                                    const obj3 =
                                                                                                                      {
                                                                                                                        value,
                                                                                                                        done: true,
                                                                                                                      };
                                                                                                                    return obj3;
                                                                                                                  } else {
                                                                                                                    closure_5 =
                                                                                                                      tmp3;
                                                                                                                    closure_4 =
                                                                                                                      tmp7;
                                                                                                                    closure_132_0 =
                                                                                                                      undefined;
                                                                                                                    if (
                                                                                                                      null !=
                                                                                                                      closure_1_12
                                                                                                                    ) {
                                                                                                                      if (
                                                                                                                        null !=
                                                                                                                        origin
                                                                                                                      ) {
                                                                                                                        if (
                                                                                                                          closure_4
                                                                                                                        ) {
                                                                                                                          rect =
                                                                                                                            {
                                                                                                                              top: 0,
                                                                                                                              bottom: 0,
                                                                                                                              left: 0,
                                                                                                                              right: 0,
                                                                                                                            };
                                                                                                                        } else {
                                                                                                                          rect =
                                                                                                                            closure_1_13;
                                                                                                                        }
                                                                                                                        const rect2 =
                                                                                                                          closure_5;
                                                                                                                        let left;
                                                                                                                        if (
                                                                                                                          closure_5 !=
                                                                                                                          null
                                                                                                                        ) {
                                                                                                                          left =
                                                                                                                            rect2.left;
                                                                                                                        }
                                                                                                                        let left1;
                                                                                                                        if (
                                                                                                                          rect !=
                                                                                                                          null
                                                                                                                        ) {
                                                                                                                          left1 =
                                                                                                                            rect.left;
                                                                                                                        }
                                                                                                                        c0 =
                                                                                                                          left1;
                                                                                                                        if (
                                                                                                                          left1 ==
                                                                                                                          null
                                                                                                                        ) {
                                                                                                                          c0 = 0;
                                                                                                                        }
                                                                                                                        const rect1 =
                                                                                                                          {
                                                                                                                            left: closure_2_12(
                                                                                                                              left,
                                                                                                                              c0,
                                                                                                                            ),
                                                                                                                            right:
                                                                                                                              null,
                                                                                                                            top: null,
                                                                                                                            bottom:
                                                                                                                              null,
                                                                                                                          };
                                                                                                                        let right;
                                                                                                                        if (
                                                                                                                          rect2 !=
                                                                                                                          null
                                                                                                                        ) {
                                                                                                                          right =
                                                                                                                            rect2.right;
                                                                                                                        }
                                                                                                                        let right1;
                                                                                                                        if (
                                                                                                                          rect !=
                                                                                                                          null
                                                                                                                        ) {
                                                                                                                          right1 =
                                                                                                                            rect.right;
                                                                                                                        }
                                                                                                                        c1 =
                                                                                                                          right1;
                                                                                                                        if (
                                                                                                                          right1 ==
                                                                                                                          null
                                                                                                                        ) {
                                                                                                                          c1 = 0;
                                                                                                                        }
                                                                                                                        rect1.right =
                                                                                                                          closure_2_12(
                                                                                                                            right,
                                                                                                                            c1,
                                                                                                                          );
                                                                                                                        let top;
                                                                                                                        if (
                                                                                                                          rect2 !=
                                                                                                                          null
                                                                                                                        ) {
                                                                                                                          top =
                                                                                                                            rect2.top;
                                                                                                                        }
                                                                                                                        let top1;
                                                                                                                        if (
                                                                                                                          rect !=
                                                                                                                          null
                                                                                                                        ) {
                                                                                                                          top1 =
                                                                                                                            rect.top;
                                                                                                                        }
                                                                                                                        c2 =
                                                                                                                          top1;
                                                                                                                        if (
                                                                                                                          top1 ==
                                                                                                                          null
                                                                                                                        ) {
                                                                                                                          c2 = 0;
                                                                                                                        }
                                                                                                                        rect1.top =
                                                                                                                          closure_2_12(
                                                                                                                            top,
                                                                                                                            c2,
                                                                                                                          );
                                                                                                                        let bottom;
                                                                                                                        if (
                                                                                                                          rect2 !=
                                                                                                                          null
                                                                                                                        ) {
                                                                                                                          bottom =
                                                                                                                            rect2.bottom;
                                                                                                                        }
                                                                                                                        let bottom1;
                                                                                                                        if (
                                                                                                                          rect !=
                                                                                                                          null
                                                                                                                        ) {
                                                                                                                          bottom1 =
                                                                                                                            rect.bottom;
                                                                                                                        }
                                                                                                                        c3 =
                                                                                                                          bottom1;
                                                                                                                        if (
                                                                                                                          bottom1 ==
                                                                                                                          null
                                                                                                                        ) {
                                                                                                                          c3 = 0;
                                                                                                                        }
                                                                                                                        const obj4 =
                                                                                                                          {
                                                                                                                            type: "safeAreaUpdateEvent",
                                                                                                                            data: null,
                                                                                                                          };
                                                                                                                        const obj5 =
                                                                                                                          {
                                                                                                                            insets:
                                                                                                                              null,
                                                                                                                          };
                                                                                                                        rect1.bottom =
                                                                                                                          closure_2_12(
                                                                                                                            bottom,
                                                                                                                            c3,
                                                                                                                          );
                                                                                                                        obj5.insets =
                                                                                                                          rect1;
                                                                                                                        obj4.data =
                                                                                                                          obj5;
                                                                                                                        const tmp33 =
                                                                                                                          applicationId(
                                                                                                                            onInvalidUrl[27],
                                                                                                                          )(
                                                                                                                            obj4,
                                                                                                                            tmp16,
                                                                                                                          );
                                                                                                                        closure_132_0 =
                                                                                                                          tmp33;
                                                                                                                        c7 = 1;
                                                                                                                        c8 = 2;
                                                                                                                        c9 = 1;
                                                                                                                        const obj6 =
                                                                                                                          {
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
                                                                                                                  if (
                                                                                                                    1 ===
                                                                                                                    tmp7
                                                                                                                  ) {
                                                                                                                    c7 = 0;
                                                                                                                    if (
                                                                                                                      null !=
                                                                                                                      ref.current
                                                                                                                    ) {
                                                                                                                      const current =
                                                                                                                        ref.current;
                                                                                                                      current.injectJavaScript(
                                                                                                                        closure_132_0,
                                                                                                                      );
                                                                                                                    }
                                                                                                                  } else if (
                                                                                                                    arg0 ===
                                                                                                                    1
                                                                                                                  ) {
                                                                                                                    c9 = 3;
                                                                                                                    throw value;
                                                                                                                  } else if (
                                                                                                                    arg0 !==
                                                                                                                    2
                                                                                                                  ) {
                                                                                                                    c7 = 0;
                                                                                                                  }
                                                                                                                  c7 = 0;
                                                                                                                  c9 = 3;
                                                                                                                  const obj =
                                                                                                                    {
                                                                                                                      value,
                                                                                                                      done: true,
                                                                                                                    };
                                                                                                                  return obj;
                                                                                                                }
                                                                                                                c9 = 3;
                                                                                                              } catch (tmp34) {
                                                                                                                closure_6 =
                                                                                                                  tmp34;
                                                                                                                if (
                                                                                                                  tmp4 ===
                                                                                                                  c7
                                                                                                                ) {
                                                                                                                  c9 =
                                                                                                                    tmp2;
                                                                                                                  throw tmp34;
                                                                                                                } else {
                                                                                                                  c8 =
                                                                                                                    tmp;
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          },
                                                                                                        );
                                                                                                      tmp4 =
                                                                                                        (function tryInjectJavaScript() {
                                                                                                          const self =
                                                                                                            this;
                                                                                                          const apply =
                                                                                                            closure_0.apply;
                                                                                                          if (
                                                                                                            typeof apply ===
                                                                                                            "unknown"
                                                                                                          ) {
                                                                                                            let applyArgumentsResult =
                                                                                                              HermesBuiltin.applyArguments(
                                                                                                                self,
                                                                                                              );
                                                                                                          } else {
                                                                                                            applyArgumentsResult =
                                                                                                              apply(
                                                                                                                self,
                                                                                                                arguments,
                                                                                                              );
                                                                                                          }
                                                                                                          return applyArgumentsResult;
                                                                                                        })();
                                                                                                    }
                                                                                                  }
                                                                                                  return;
                                                                                                }
                                                                                              }
                                                                                              obj6.minimumFontSize = 1;
                                                                                              obj6.bounces = false;
                                                                                              obj6.allowsProtectedMedia = true;
                                                                                              tmp = hasInvalidUrlError(
                                                                                                WebView,
                                                                                                obj6,
                                                                                              );
                                                                                              cResult[88] = iframeId;
                                                                                              cResult[89] = tmp3;
                                                                                              cResult[90] = context;
                                                                                              cResult[91] = tmp25;
                                                                                              cResult[92] = tmp23;
                                                                                              cResult[93] = onLoadEnd;
                                                                                              cResult[94] = tmp24;
                                                                                              cResult[95] = tmp59;
                                                                                              webView = webView.webView;
                                                                                              cResult[96] = webView;
                                                                                              cResult[97] = tmp75;
                                                                                              cResult[98] = tmp;
                                                                                            }
                                                                                            const obj7 = {
                                                                                              html: null,
                                                                                              baseUrl: null,
                                                                                            };
                                                                                            ({
                                                                                              html: obj14.html,
                                                                                              url: obj14.baseUrl,
                                                                                            } = tmp22);
                                                                                            cResult[84] = tmp22.html;
                                                                                            cResult[85] = tmp22.url;
                                                                                            cResult[86] = obj7;
                                                                                            tmp75 = obj7;
                                                                                          }
                                                                                        }
                                                                                        return tmp74;
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                              const items2 = [
                                                                                rect,
                                                                                isPipOrGridMode,
                                                                                tmp60,
                                                                                tmp6,
                                                                                origin,
                                                                                safeAreasConfig,
                                                                              ];
                                                                              cResult[77] = origin;
                                                                              cResult[78] = rect;
                                                                              cResult[79] = isPipOrGridMode;
                                                                              cResult[80] = safeAreasConfig;
                                                                              cResult[81] = tmp60;
                                                                              cResult[82] = tmp6;
                                                                              cResult[83] = items2;
                                                                              tmp72 = items2;
                                                                            }
                                                                          }
                                                                        }
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
                                                              let left2;
                                                              if (safeAreasConfig != null) {
                                                                left2 = safeAreasConfig.left;
                                                              }
                                                              cResult[71] = left2;
                                                              let right2;
                                                              if (safeAreasConfig != null) {
                                                                right2 = safeAreasConfig.right;
                                                              }
                                                              cResult[72] = right2;
                                                              let top2;
                                                              if (safeAreasConfig != null) {
                                                                top2 = safeAreasConfig.top;
                                                              }
                                                              class Be {
                                                                constructor() {
                                                                  if (closure_16) {
                                                                    tmp = closure_12;
                                                                    tmp2 = null;
                                                                    if (null != closure_12) {
                                                                      tmp3 = safeAreasConfig;
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
                                                                              done: "IconComponent",
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
                                                                                    if (closure_4) {
                                                                                      rect = {
                                                                                        top: 0,
                                                                                        bottom: 0,
                                                                                        left: 0,
                                                                                        right: 0,
                                                                                      };
                                                                                    } else {
                                                                                      rect = closure_1_13;
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
                                                                                    const tmp33 = applicationId(
                                                                                      onInvalidUrl[27],
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
                                                              cResult[73] = top2;
                                                              cResult[74] = null != tmp59;
                                                              cResult[75] = tmp6;
                                                              cResult[76] = Be;
                                                              tmp67 = Be;
                                                            }
                                                          }
                                                        }
                                                      }
                                                      const obj8 = {
                                                        applicationId,
                                                        shellUrl: url,
                                                        iframeUrl: tmp16,
                                                        framePolicy,
                                                        frameInsets: tmp56,
                                                      };
                                                      cResult[61] = applicationId;
                                                      cResult[62] = tmp56;
                                                      cResult[63] = framePolicy;
                                                      cResult[64] = tmp16;
                                                      cResult[65] = url;
                                                      cResult[66] = obj8;
                                                      tmp58 = obj8;
                                                    }
                                                  }
                                                }
                                                let rect1 = { left: tmp41, right: tmp45, top: tmp49, bottom: tmp53 };
                                                cResult[56] = tmp41;
                                                cResult[57] = tmp45;
                                                cResult[58] = tmp49;
                                                cResult[59] = tmp53;
                                                cResult[60] = rect1;
                                                tmp56 = rect1;
                                              }
                                              let num64 = num63;
                                              if (null != bottom) {
                                                if (bottom.disable) {
                                                  num64 = 0;
                                                } else if (null != bottom.override) {
                                                  const _Math8 = Math;
                                                  let bound = Math.max(0, bottom.override);
                                                } else {
                                                  bound = num63;
                                                  if (null != bottom.offset) {
                                                    const _Math7 = Math;
                                                    bound = Math.max(0, num63 + bottom.offset);
                                                  }
                                                }
                                              }
                                              cResult[53] = bottom;
                                              cResult[54] = num63;
                                              cResult[55] = num64;
                                              tmp53 = num64;
                                            }
                                            let num57 = num56;
                                            if (null != top) {
                                              if (top.disable) {
                                                num57 = 0;
                                              } else if (null != top.override) {
                                                const _Math6 = Math;
                                                let bound1 = Math.max(0, top.override);
                                              } else {
                                                bound1 = num56;
                                                if (null != top.offset) {
                                                  const _Math5 = Math;
                                                  bound1 = Math.max(0, num56 + top.offset);
                                                }
                                              }
                                            }
                                            cResult[50] = top;
                                            cResult[51] = num56;
                                            cResult[52] = num57;
                                            tmp49 = num57;
                                          }
                                          let num50 = num49;
                                          if (null != right) {
                                            if (right.disable) {
                                              num50 = 0;
                                            } else if (null != right.override) {
                                              const _Math4 = Math;
                                              let bound2 = Math.max(0, right.override);
                                            } else {
                                              bound2 = num49;
                                              if (null != right.offset) {
                                                const _Math3 = Math;
                                                bound2 = Math.max(0, num49 + right.offset);
                                              }
                                            }
                                          }
                                          cResult[47] = right;
                                          cResult[48] = num49;
                                          cResult[49] = num50;
                                          tmp45 = num50;
                                        }
                                        let num43 = num42;
                                        if (null != left) {
                                          if (left.disable) {
                                            num43 = 0;
                                          } else if (null != left.override) {
                                            const _Math2 = Math;
                                            let bound3 = Math.max(0, left.override);
                                          } else {
                                            bound3 = num42;
                                            if (null != left.offset) {
                                              const _Math = Math;
                                              bound3 = Math.max(0, num42 + left.offset);
                                            }
                                          }
                                        }
                                        cResult[44] = left;
                                        cResult[45] = num42;
                                        cResult[46] = num43;
                                        tmp41 = num43;
                                      }
                                    }
                                    function be() {
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
                                    }
                                    const items3 = [hasInvalidUrlError, hadInvalidUrlError, onInvalidUrl];
                                    cResult[39] = hadInvalidUrlError;
                                    cResult[40] = hasInvalidUrlError;
                                    cResult[41] = onInvalidUrl;
                                    cResult[42] = be;
                                    cResult[43] = items3;
                                    tmp37 = items3;
                                    tmp36 = be;
                                  }
                                  function me() {
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
                                  }
                                  const items4 = [hadInvalidUrlError, hasInvalidUrlError];
                                  cResult[35] = hadInvalidUrlError;
                                  cResult[36] = hasInvalidUrlError;
                                  cResult[37] = me;
                                  cResult[38] = items4;
                                  tmp34 = items4;
                                  tmp33 = me;
                                }
                              }
                            }
                            function ue() {
                              if (null == closure_14) {
                                if (stateFromStores) {
                                  setHasInvalidUrlError(true);
                                } else {
                                  const _TypeError = TypeError;
                                  const _HermesInternal = HermesInternal;
                                  const typeError = new TypeError("Invalid embedded app URL: " + activityUrl);
                                  throw typeError;
                                }
                              }
                            }
                            const items5 = [tmp16, activityUrl, stateFromStores, setHasInvalidUrlError];
                            cResult[29] = activityUrl;
                            cResult[30] = tmp16;
                            cResult[31] = stateFromStores;
                            cResult[32] = setHasInvalidUrlError;
                            cResult[33] = ue;
                            cResult[34] = items5;
                            tmp31 = items5;
                            tmp30 = ue;
                            const WebViewResult3 = WebView(tmp[23]);
                          }
                        }
                      }
                    }
                    function le() {
                      hadInvalidUrlError.warn("activity WebView content process terminated for appId " + applicationId);
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
                    cResult[25] = onActivityCrash;
                    cResult[26] = le;
                    tmp25 = le;
                  }
                }
              }
            }
          }
        }
        const obj9 = {
          embeddedAppUrl: activityUrl,
          iframeUrl: tmp16,
          iframeSandboxAttributes: tmp13,
          iframeCsp: tmp18,
          referrerPolicy,
          shimVersion: embeddedAppShimVersion,
          shellBridgeSecret,
        };
        cResult[9] = activityUrl;
        cResult[10] = tmp18;
        cResult[11] = tmp13;
        cResult[12] = tmp16;
        cResult[13] = referrerPolicy;
        cResult[14] = shellBridgeSecret;
        cResult[15] = embeddedAppShimVersion;
        cResult[16] = obj9;
        tmp21 = obj9;
      }
      const str = new URLSearchParams(obj3);
      const toURLSafeResult = applicationId(tmp[19]).toURLSafe("" + activityUrl + "?" + str1);
      cResult[4] = activityUrl;
      cResult[5] = str1;
      cResult[6] = toURLSafeResult;
      tmp16 = toURLSafeResult;
    }
  : function BaseEmbeddedAppWebViewContent(shellBridgeSecret) {
      ({ framePolicy, iframeId } = shellBridgeSecret);
      let deepLinkQueryParams = shellBridgeSecret.deepLinkQueryParams;
      if (deepLinkQueryParams === undefined) {
        deepLinkQueryParams = {};
      }
      const activityUrl = shellBridgeSecret.activityUrl;
      const applicationId = shellBridgeSecret.applicationId;
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
      let rect;
      let stateFromStores;
      closure_18 = undefined;
      let ref;
      let origin;
      const context = safeAreasConfig.useContext(iframeId(onActivityCrash[11]).WebViewContext);
      const tmp5 = rect();
      const hasInvalidUrlError = tmp5.hasInvalidUrlError;
      const setHasInvalidUrlError = tmp5.setHasInvalidUrlError;
      const hadInvalidUrlError = tmp5.hadInvalidUrlError;
      const items = [iframeId];
      const memo = safeAreasConfig.useMemo(() => WebView2.getWebViewProxy(iframeId), items);
      rect = activityUrl(onActivityCrash[13])();
      let tmp = hasInvalidUrlError();
      const embeddedAppShimVersion = iframeId(onActivityCrash[14]).useEmbeddedAppShimVersion("BaseEmbeddedAppWebView");
      let obj3 = iframeId(onActivityCrash[14]);
      let obj = {};
      constants = applicationId(onActivityCrash[15]).getConstants();
      const merged = Object.assign(queryParams);
      const merged1 = Object.assign(deepLinkQueryParams);
      obj.frame_id = iframeId;
      obj.platform = iframeId(onActivityCrash[16]).ActivityPlatform.MOBILE;
      obj.mobile_app_version = constants.Version;
      let max = globalThis;
      obj[iframeId(onActivityCrash[17]).SHIM_VERSION_PARAM] = "" + embeddedAppShimVersion;
      let obj4 = applicationId(onActivityCrash[15]);
      const tmp12 = activityUrl(onActivityCrash[18])({ allowPopups });
      const str1 = new URLSearchParams(obj).toString();
      const items1 = [activityUrl, str1];
      const memo1 = safeAreasConfig.useMemo(() => URLUtilsDefault.toURLSafe("" + activityUrl + "?" + str1), items1);
      let result;
      if (null != framePolicy) {
        result = tmp2(tmp3[20]).deriveIframeCSPAttributeFromPolicy(framePolicy.policy);
        const tmp2Result = tmp2(tmp3[20]);
      }
      const tmp16 = activityUrl(onActivityCrash[21])({
        embeddedAppUrl: activityUrl,
        iframeUrl: memo1,
        iframeSandboxAttributes: tmp12,
        iframeCsp: result,
        referrerPolicy,
        shimVersion: embeddedAppShimVersion,
        shellBridgeSecret: shellBridgeSecret.shellBridgeSecret,
      });
      const items2 = [applicationId];
      const items3 = [applicationId];
      const callback = obj2.useCallback((nativeEvent) => {
        setHasInvalidUrlError.warn(
          "activity WebView error for appId " + applicationId + ". " + JSON.stringify(nativeEvent.nativeEvent),
        );
      }, items2);
      const items4 = [applicationId, channelId, guildId, activitySessionId, onActivityCrash];
      const callback1 = obj2.useCallback((nativeEvent) => {
        setHasInvalidUrlError.warn(
          "activity WebView render process gone for appId " +
            applicationId +
            ". " +
            JSON.stringify(nativeEvent.nativeEvent),
        );
      }, items3);
      const callback2 = obj2.useCallback(() => {
        setHasInvalidUrlError.warn("activity WebView content process terminated for appId " + applicationId);
        AnalyticsUtilsDefault.track(AnalyticEvents.ACTIVITY_WEB_VIEW_CONTENT_PROCESS_TERMINATED, {
          application_id: applicationId,
          channel_id: channelId,
          guild_id: guildId,
          activity_session_id: activitySessionId,
        });
        onActivityCrash();
      }, items4);
      const str = new URLSearchParams(obj);
      const items5 = [channelId];
      stateFromStores = iframeId(onActivityCrash[23]).useStateFromStores(items5, () =>
        channelId.getUseActivityUrlOverride(),
      );
      const items6 = [memo1, activityUrl, stateFromStores, setHasInvalidUrlError];
      const effect = obj2.useEffect(() => {
        if (null == memo1) {
          if (stateFromStores) {
            setHasInvalidUrlError(true);
          } else {
            const _TypeError = TypeError;
            const _HermesInternal = HermesInternal;
            const typeError = new TypeError("Invalid embedded app URL: " + activityUrl);
            throw typeError;
          }
        }
      }, items6);
      const items7 = [hadInvalidUrlError, hasInvalidUrlError];
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
      }, items7);
      const items8 = [hasInvalidUrlError, hadInvalidUrlError, onInvalidUrl];
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
      }, items8);
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
      let obj5 = { applicationId, shellUrl: null, iframeUrl: null, framePolicy: null, frameInsets: null };
      let url;
      const tmp2Result2 = iframeId(onActivityCrash[23]);
      if (tmp16 != null) {
        url = tmp16.url;
      }
      if (url == null) {
        url = null;
      }
      obj5.shellUrl = url;
      obj5.iframeUrl = memo1;
      obj5.framePolicy = framePolicy;
      obj5.frameInsets = rect1;
      const tmp7ResultResult = activityUrl(onActivityCrash[26])(obj5);
      closure_18 = tmp39;
      ref = obj2.useRef(null);
      origin = undefined;
      if (memo1 != null) {
        origin = memo1.origin;
      }
      const items9 = [rect, isPipOrGridMode, null != tmp7ResultResult, memo, origin, safeAreasConfig];
      const effect3 = obj2.useEffect(() => {
        if (closure_18) {
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
                  return { value: "IconComponent", done: "IconComponent" };
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
                          if (closure_5) {
                            rect = { top: 0, bottom: 0, left: 0, right: 0 };
                          } else {
                            rect = closure_1_14;
                          }
                          const rect2 = closure_6;
                          let left;
                          if (closure_6 != null) {
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
                          const tmp33 = activityUrl(onActivityCrash[27])(obj4, tmp16);
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
      }, items9);
      let tmp43 = null;
      if (null != tmp7ResultResult) {
        tmp43 = null;
        if (null != tmp16) {
          let obj6 = { style: tmp.webView, ref, source: null };
          ({ html: obj11.html, url: obj11.baseUrl } = tmp16);
          obj6.source = { html: null, baseUrl: null };
          const merged2 = Object.assign(tmp7ResultResult);
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
          tmp43 = activitySessionId(tmp2(tmp3[12]).WebView, obj6);
          const obj7 = { html: null, baseUrl: null };
        }
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
