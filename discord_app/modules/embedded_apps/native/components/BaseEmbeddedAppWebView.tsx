// discord_app/modules/embedded_apps/native/components/BaseEmbeddedAppWebView.tsx
import LoggerDefault from "../../../debug/Logger.tsx";
import util from "../../../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import URLUtilsDefault from "../../../../utils/URLUtils.tsx";
import AlertActionCreatorsDefault from "../../../../actions/AlertActionCreators.tsx";
import WebView from "../../../../../_runtime/07971_WebView.js";
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
function BaseEmbeddedAppWebViewContent(shellBridgeSecret) {
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
  c10 = undefined;
  let stateFromStores;
  closure_18 = undefined;
  let ref;
  let origin;
  const context = safeAreasConfig.useContext(iframeId(onActivityCrash[9]).WebViewContext);
  let tmp = c10();
  [tmp6, tmp7] = onInvalidUrl(safeAreasConfig.useState(false), 2);
  const tmp9 = activityUrl(onActivityCrash[26])(tmp6);
  c10 = tmp6;
  c11 = tmp7;
  closure_12 = tmp9;
  const items = [iframeId];
  const memo = safeAreasConfig.useMemo(() => WebView.getWebViewProxy(iframeId), items);
  let rect = activityUrl(onActivityCrash[11])();
  const tmp5 = onInvalidUrl(safeAreasConfig.useState(false), 2);
  const embeddedAppShimVersion = iframeId(onActivityCrash[12]).useEmbeddedAppShimVersion("BaseEmbeddedAppWebView");
  let obj3 = iframeId(onActivityCrash[12]);
  let obj = {};
  constants = applicationId(onActivityCrash[13]).getConstants();
  const merged = Object.assign(queryParams);
  const merged1 = Object.assign(deepLinkQueryParams);
  obj.frame_id = iframeId;
  obj.platform = iframeId(onActivityCrash[14]).ActivityPlatform.MOBILE;
  obj.mobile_app_version = constants.Version;
  let max = globalThis;
  obj[iframeId(onActivityCrash[15]).SHIM_VERSION_PARAM] = "" + embeddedAppShimVersion;
  let obj4 = applicationId(onActivityCrash[13]);
  const tmp15 = activityUrl(onActivityCrash[16])({ allowPopups });
  const str1 = new URLSearchParams(obj).toString();
  const items1 = [activityUrl, str1];
  const memo1 = safeAreasConfig.useMemo(() => URLUtilsDefault.toURLSafe("" + activityUrl + "?" + str1), items1);
  let result;
  if (null != framePolicy) {
    result = tmp2(tmp3[18]).deriveIframeCSPAttributeFromPolicy(framePolicy.policy);
    const tmp2Result = tmp2(tmp3[18]);
  }
  const tmp19 = activityUrl(onActivityCrash[19])({
    embeddedAppUrl: activityUrl,
    iframeUrl: memo1,
    iframeSandboxAttributes: tmp15,
    iframeCsp: result,
    referrerPolicy,
    shimVersion: embeddedAppShimVersion,
    shellBridgeSecret: shellBridgeSecret.shellBridgeSecret,
  });
  const items2 = [applicationId];
  const items3 = [applicationId];
  const callback = obj2.useCallback((nativeEvent) => {
    _undefined.warn(
      "activity WebView error for appId " + applicationId + ". " + JSON.stringify(nativeEvent.nativeEvent),
    );
  }, items2);
  const items4 = [applicationId, channelId, guildId, activitySessionId, onActivityCrash];
  const callback1 = obj2.useCallback((nativeEvent) => {
    _undefined.warn(
      "activity WebView render process gone for appId " +
        applicationId +
        ". " +
        JSON.stringify(nativeEvent.nativeEvent),
    );
  }, items3);
  const callback2 = obj2.useCallback(() => {
    _undefined.warn("activity WebView content process terminated for appId " + applicationId);
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
  stateFromStores = iframeId(onActivityCrash[21]).useStateFromStores(items5, () =>
    channelId.getUseActivityUrlOverride(),
  );
  const items6 = [memo1, activityUrl, stateFromStores, tmp7];
  const effect = obj2.useEffect(() => {
    if (null == memo1) {
      if (stateFromStores) {
        _undefined(true);
      } else {
        const _TypeError = TypeError;
        const _HermesInternal = HermesInternal;
        const typeError = new TypeError("Invalid embedded app URL: " + activityUrl);
        throw typeError;
      }
    }
  }, items6);
  const items7 = [tmp9, tmp6];
  const effect1 = obj2.useEffect(() => {
    let tmp = !closure_12;
    if (!closure_12) {
      tmp = c10;
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
  const items8 = [tmp6, tmp9, onInvalidUrl];
  const effect2 = obj2.useEffect(() => {
    let tmp2 = null != onInvalidUrl;
    if (tmp2) {
      tmp2 = !closure_12;
    }
    if (tmp2) {
      tmp2 = c10;
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
  const tmp2Result2 = iframeId(onActivityCrash[21]);
  if (tmp19 != null) {
    url = tmp19.url;
  }
  if (url == null) {
    url = null;
  }
  obj5.shellUrl = url;
  obj5.iframeUrl = memo1;
  obj5.framePolicy = framePolicy;
  obj5.frameInsets = rect1;
  const tmp8ResultResult = activityUrl(onActivityCrash[24])(obj5);
  closure_18 = tmp42;
  ref = obj2.useRef(null);
  origin = undefined;
  if (memo1 != null) {
    origin = memo1.origin;
  }
  const items9 = [rect, isPipOrGridMode, null != tmp8ResultResult, memo, origin, safeAreasConfig];
  const effect3 = obj2.useEffect(() => {
    if (closure_18) {
      if (null != memo) {
        closure_0 = async function _tryInjectJavaScript() {
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
                      const rect1 = { left: closure_2_12(left, c0), right: null, top: null, bottom: null };
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
                      rect1.right = closure_2_12(right, c1);
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
                      const obj4 = { type: "safeAreaUpdateEvent", data: null };
                      const obj5 = { insets: null };
                      rect1.bottom = closure_2_12(bottom, c3);
                      obj5.insets = rect1;
                      obj4.data = obj5;
                      const tmp33 = activityUrl(onActivityCrash[25])(obj4, tmp16);
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
  let tmp46 = null;
  if (null != tmp8ResultResult) {
    tmp46 = null;
    if (null != tmp19) {
      let obj6 = { style: tmp.webView, ref, source: null };
      ({ html: obj11.html, url: obj11.baseUrl } = tmp19);
      obj6.source = { html: null, baseUrl: null };
      const merged2 = Object.assign(tmp8ResultResult);
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
      tmp46 = activitySessionId(tmp2(tmp3[10]).WebView, obj6);
      const obj7 = { html: null, baseUrl: null };
    }
  }
  return tmp46;
}
const AnalyticEvents = fn(1072).AnalyticEvents;
const jsx = fn(21).jsx;
const createStyles = fn(5009);
let closure_10 = createStyles.createStyles({ webView: { backgroundColor: "transparent" } });
let closure_11 = new LoggerDefault("BaseEmbeddedAppWebView");
const size = fn(2);
let result = size.fileFinishedImporting("modules/embedded_apps/native/components/BaseEmbeddedAppWebView.tsx");

export function BaseEmbeddedAppWebView(onLoadError) {
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
            return <BaseEmbeddedAppWebViewContent />;
          }
        }
      }
      const obj3 = {};
      const merged1 = Object.assign(onLoadError);
      obj3.framePolicy = null;
      return <BaseEmbeddedAppWebViewContent />;
    }
  }
  return null;
}
