// === Module 6305: NativeModules ===

// Module 6305 (NativeModules)
import noopDefault from "noop" /* 19 */;
import codegenNativeCommandsDefault from "codegenNativeCommands" /* 113 */;
import noop from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;

({ useCallback: c3, useEffect: c4, useImperativeHandle: c5, useMemo: closure_6, useRef: error, forwardRef } = noop);
noopDefault;
({ View: closure_8, NativeModules } = get_ActivityIndicator);
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
let fn = this;
if (this) {
  fn = this.__rest;
}
if (!fn) {
  fn = (obj, arr) => {
    obj = {};
    for (const key10007 in arg0) {
      let tmp6 = key10007;
      let _Object2 = Object;
      let call2 = hasOwnProperty.call;
      if (typeof call2 === "unknown") {
        let hasOwnPropertyResult = hasOwnProperty(key10007);
      } else {
        hasOwnPropertyResult = call2(arg0, key10007);
      }
      if (hasOwnPropertyResult) {
        hasOwnPropertyResult = arg1.indexOf(key10007) < 0;
      }
      if (!hasOwnPropertyResult) {
        continue;
      } else {
        obj[key10007] = arg0[key10007];
        continue;
      }
      continue;
    }
    if (null != obj) {
      const _Object3 = Object;
      if (typeof Object.getOwnPropertySymbols === "function") {
        const _Object4 = Object;
        const ownPropertySymbols = Object.getOwnPropertySymbols(obj);
        let num = 0;
        if (0 < ownPropertySymbols.length) {
          const tmp2 = arr.indexOf(ownPropertySymbols[num]) < 0;
          while (!tmp2) {
            if (tmp2) {
              obj[ownPropertySymbols[num]] = obj[ownPropertySymbols[num]];
            }
            num = num + 1;
          }
          const _Object = Object;
          const call = propertyIsEnumerable.call;
          typeof call === "unknown" ? propertyIsEnumerable(ownPropertySymbols[num]) : call(obj, ownPropertySymbols[num]);
        }
      }
    }
    return obj;
  };
}
let closure_13 = codegenNativeCommandsDefault({ supportedCommands: ["goBack", "goForward", "reload", "stopLoading", "injectJavaScript", "requestFocus", "postMessage", "clearFormData", "clearCache", "clearHistory", "loadUrl"] });
const resolveAssetSource = get_ActivityIndicator.Image.resolveAssetSource;
let c15 = 0;
let RNCWebView = NativeModules.RNCWebView;
const forwardRefResult = forwardRef((overScrollMode) => {
  overScrollMode = overScrollMode.overScrollMode;
  let str = "always";
  if (undefined !== overScrollMode) {
    str = overScrollMode;
  }
  const javaScriptEnabled = overScrollMode.javaScriptEnabled;
  const thirdPartyCookiesEnabled = overScrollMode.thirdPartyCookiesEnabled;
  const scalesPageToFit = overScrollMode.scalesPageToFit;
  const allowsFullscreenVideo = overScrollMode.allowsFullscreenVideo;
  const allowFileAccess = overScrollMode.allowFileAccess;
  const saveFormDataDisabled = overScrollMode.saveFormDataDisabled;
  const cacheEnabled = overScrollMode.cacheEnabled;
  const androidHardwareAccelerationDisabled = overScrollMode.androidHardwareAccelerationDisabled;
  const androidLayerType = overScrollMode.androidLayerType;
  let str2 = "none";
  if (undefined !== androidLayerType) {
    str2 = androidLayerType;
  }
  let defaultOriginWhitelist = overScrollMode.originWhitelist;
  if (undefined === defaultOriginWhitelist) {
    defaultOriginWhitelist = current(onShouldStartLoadWithRequest2[4]).defaultOriginWhitelist;
  }
  const setSupportMultipleWindows = overScrollMode.setSupportMultipleWindows;
  const setBuiltInZoomControls = overScrollMode.setBuiltInZoomControls;
  const setDisplayZoomControls = overScrollMode.setDisplayZoomControls;
  const nestedScrollEnabled = overScrollMode.nestedScrollEnabled;
  ({ messagingWithWebViewKeyEnabled, onMessage, renderLoading, renderError, source, nativeConfig } = overScrollMode);
  ({ startInLoadingState, onNavigationStateChange, onLoadStart, onError, onLoad, onLoadEnd, onLoadProgress, onHttpError, onRenderProcessGone, style, containerStyle, onShouldStartLoadWithRequest } = overScrollMode);
  const sum = c15 + 1;
  c15 = sum;
  current = callback3("WebViewMessageHandler".concat(sum)).current;
  const tmp17 = callback3(null);
  importDefault = tmp17;
  const tmp = undefined === javaScriptEnabled || javaScriptEnabled;
  const tmp11 = undefined === setSupportMultipleWindows || setSupportMultipleWindows;
  const tmp12 = undefined === setBuiltInZoomControls || setBuiltInZoomControls;
  const tmp13 = undefined !== setDisplayZoomControls && setDisplayZoomControls;
  const tmp14 = undefined !== nestedScrollEnabled && nestedScrollEnabled;
  const tmp15 = fn(overScrollMode, ["overScrollMode", "javaScriptEnabled", "thirdPartyCookiesEnabled", "scalesPageToFit", "allowsFullscreenVideo", "allowFileAccess", "saveFormDataDisabled", "cacheEnabled", "androidHardwareAccelerationDisabled", "androidLayerType", "originWhitelist", "setSupportMultipleWindows", "setBuiltInZoomControls", "setDisplayZoomControls", "nestedScrollEnabled", "startInLoadingState", "messagingWithWebViewKeyEnabled", "onNavigationStateChange", "onLoadStart", "onError", "onLoad", "onLoadEnd", "onLoadProgress", "onHttpError", "onRenderProcessGone", "onMessage", "renderLoading", "renderError", "style", "containerStyle", "source", "nativeConfig", "onShouldStartLoadWithRequest"]);
  const tmp2 = undefined === thirdPartyCookiesEnabled || thirdPartyCookiesEnabled;
  const tmp3 = undefined === scalesPageToFit || scalesPageToFit;
  const tmp4 = undefined !== allowsFullscreenVideo && allowsFullscreenVideo;
  const tmp5 = undefined !== allowFileAccess && allowFileAccess;
  const tmp6 = undefined !== saveFormDataDisabled && saveFormDataDisabled;
  const tmp7 = undefined === cacheEnabled || cacheEnabled;
  const tmp8 = undefined !== androidHardwareAccelerationDisabled && androidHardwareAccelerationDisabled;
  let obj = current(onShouldStartLoadWithRequest2[4]);
  const webWiewLogic = obj.useWebWiewLogic({
    onNavigationStateChange,
    onLoad,
    onError,
    onHttpErrorProp: onHttpError,
    onLoadEnd,
    onLoadProgress,
    onLoadStart,
    onRenderProcessGoneProp: onRenderProcessGone,
    onMessageProp: onMessage,
    startInLoadingState,
    originWhitelist: defaultOriginWhitelist,
    onShouldStartLoadWithRequestProp: onShouldStartLoadWithRequest,
    onShouldStartLoadWithRequestCallback: onMessage2((arg0, arg1, arg2) => {
      if (arg2) {
        const RNCWebView = closure_1_9.RNCWebView;
        const result = RNCWebView.onShouldStartLoadWithRequestCallback(arg0, arg2);
      } else if (arg0) {
        const url = closure_1_13.loadUrl(ref.current, arg1);
      }
    }, [])
  });
  onShouldStartLoadWithRequest2 = webWiewLogic.onShouldStartLoadWithRequest;
  onMessage2 = webWiewLogic.onMessage;
  ({ viewState, setViewState } = webWiewLogic);
  const lastErrorEvent = webWiewLogic.lastErrorEvent;
  const items = [setViewState, tmp17];
  ({ onLoadingStart, onHttpError: onHttpError2, onLoadingError, onLoadingFinish, onLoadingProgress, onRenderProcessGone: onRenderProcessGone2 } = webWiewLogic);
  callback(arg1, () => ({
    goForward() {
      return closure_1_13.goForward(closure_1.current);
    },
    goBack() {
      return closure_1_13.goBack(closure_1.current);
    },
    reload() {
      callback("LOADING");
      closure_1_13.reload(closure_1.current);
    },
    stopLoading(current) {
      return closure_1_13.stopLoading(closure_1.current);
    },
    postMessage(arg0) {
      return closure_1_13.postMessage(closure_1.current, arg0);
    },
    injectJavaScript(PLAYER_FUNCTIONS, PLAYER_FUNCTIONS) {
      return closure_1_13.injectJavaScript(closure_1.current, PLAYER_FUNCTIONS);
    },
    requestFocus(current) {
      return closure_1_13.requestFocus(closure_1.current);
    },
    clearFormData(current) {
      return closure_1_13.clearFormData(closure_1.current);
    },
    clearCache(arg0) {
      return closure_1_13.clearCache(closure_1.current, arg0);
    },
    clearHistory(current) {
      return closure_1_13.clearHistory(closure_1.current);
    }
  }), items);
  const items1 = [onMessage2, onShouldStartLoadWithRequest2];
  const tmp23 = callback2(() => ({ onShouldStartLoadWithRequest: onShouldStartLoadWithRequest2, onMessage: onMessage2 }), items1);
  callback = tmp23;
  const items2 = [current, tmp23];
  setViewState(() => {
    const result = ref(onShouldStartLoadWithRequest2[5]).registerCallableModule(current, closure_5);
  }, items2);
  if ("LOADING" === viewState) {
    if (!renderLoading) {
      renderLoading = tmp19(tmp20[4]).defaultRenderLoading;
    }
    let renderLoadingResult = renderLoading();
  } else if ("ERROR" === viewState) {
    importDefault(tmp20[6])(null != lastErrorEvent, "lastErrorEvent expected to be non-null");
    if (!renderError) {
      renderError = tmp19(tmp20[4]).defaultRenderError;
    }
    renderLoadingResult = renderError(lastErrorEvent.domain, lastErrorEvent.code, lastErrorEvent.description);
  } else {
    renderLoadingResult = null;
    if ("IDLE" !== viewState) {
      const _console3 = console;
      const concat = "RNCWebView invalid state encountered: ".concat;
      console.error("RNCWebView invalid state encountered: ".concat(viewState));
      renderLoadingResult = null;
    }
  }
  const items3 = [importDefault(onShouldStartLoadWithRequest2[7]).container, importDefault(onShouldStartLoadWithRequest2[7]).webView, style];
  const items4 = [importDefault(onShouldStartLoadWithRequest2[7]).container, containerStyle];
  let tmp29 = typeof source !== "number";
  if (typeof source !== "number") {
    tmp29 = source;
  }
  if (tmp29) {
    tmp29 = "method" in source;
  }
  if (tmp29) {
    if ("POST" === source.method) {
      if (source.headers) {
        const _console2 = console;
        console.warn("WebView: `source.headers` is not supported when using POST.");
      }
    }
    if (tmp30) {
      const _console = console;
      console.warn("WebView: `source.body` is not supported when using GET.");
    }
    tmp30 = "GET" === source.method && source.body;
  }
  let component;
  if (null != nativeConfig) {
    component = nativeConfig.component;
  }
  if (!component) {
    component = importDefault(tmp20[8]);
  }
  obj = {};
  const merged = Object.assign(tmp15);
  let tmp38 = typeof onMessage === "function";
  if (typeof onMessage !== "function") {
    tmp38 = null != messagingWithWebViewKeyEnabled && messagingWithWebViewKeyEnabled;
    const tmp39 = null != messagingWithWebViewKeyEnabled && messagingWithWebViewKeyEnabled;
  }
  obj.messagingEnabled = tmp38;
  obj.messagingModuleName = current;
  obj.onLoadingError = onLoadingError;
  obj.onLoadingFinish = onLoadingFinish;
  obj.onLoadingProgress = onLoadingProgress;
  obj.onLoadingStart = onLoadingStart;
  obj.onHttpError = onHttpError2;
  obj.onRenderProcessGone = onRenderProcessGone2;
  obj.onMessage = onMessage2;
  obj.onShouldStartLoadWithRequest = onShouldStartLoadWithRequest2;
  obj.ref = tmp17;
  obj.source = resolveAssetSource(source);
  obj.style = items3;
  obj.overScrollMode = str;
  obj.javaScriptEnabled = tmp;
  obj.thirdPartyCookiesEnabled = tmp2;
  obj.scalesPageToFit = tmp3;
  obj.allowsFullscreenVideo = tmp4;
  obj.allowFileAccess = tmp5;
  obj.saveFormDataDisabled = tmp6;
  obj.cacheEnabled = tmp7;
  obj.androidHardwareAccelerationDisabled = tmp8;
  obj.androidLayerType = str2;
  obj.setSupportMultipleWindows = tmp11;
  obj.setBuiltInZoomControls = tmp12;
  obj.setDisplayZoomControls = tmp13;
  obj.nestedScrollEnabled = tmp14;
  let props;
  if (null != nativeConfig) {
    props = nativeConfig.props;
  }
  const merged1 = Object.assign(props);
  obj = { style: items4, children: null };
  const items5 = [closure_10(component, obj, "webViewKey"), renderLoadingResult];
  obj[1] = items5;
  return callback4(closure_8, obj);
});

export default Object.assign(forwardRefResult, { isFileUploadSupported: RNCWebView.isFileUploadSupported() });