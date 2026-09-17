// === Module 8448: ? ===

// Module 8448
import _modDef39 from "module_39" /* 39 */;
import codegenNativeCommandsDefault from "codegenNativeCommands" /* 113 */;
import noop_mod from "module_19" /* 19 */;
import get_ActivityIndicator from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;

const require = globalThis.__r;

let noop = noop_mod;
({ useCallback: c3, useEffect: closure_4, useImperativeHandle: hasOwnProperty, useMemo: metroRequire, useRef: closure_7, forwardRef } = noop);
let noop = noop_mod;
({ View: closure_8, NativeModules } = get_ActivityIndicator);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
let fn = this;
if (this) {
  fn = this.__rest;
}
if (!fn) {
  fn = (obj, arr) => {
    obj = {};
    for (const key10007 in arg0) {
      let _Object2 = Object;
      hasOwnProperty = Object.prototype.hasOwnProperty;
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
const forwardRefResult = forwardRef((overScrollMode, arg1) => {
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
  current = closure_7("WebViewMessageHandler".concat(sum)).current;
  const tmp17 = closure_7(null);
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
  const tmp18 = onMessage2((arg0, arg1, arg2) => {
    if (arg2) {
      const RNCWebView = NativeModules.RNCWebView;
      const result = RNCWebView.onShouldStartLoadWithRequestCallback(arg0, arg2);
    } else if (arg0) {
      const url = navigation.loadUrl(ref.current, arg1);
    }
  }, []);
  const webWiewLogic = current(onShouldStartLoadWithRequest2[4]).useWebWiewLogic({ onNavigationStateChange, onLoad, onError, onHttpErrorProp: onHttpError, onLoadEnd, onLoadProgress, onLoadStart, onRenderProcessGoneProp: onRenderProcessGone, onMessageProp: onMessage, startInLoadingState, originWhitelist: defaultOriginWhitelist, onShouldStartLoadWithRequestProp: onShouldStartLoadWithRequest, onShouldStartLoadWithRequestCallback: tmp18 });
  onShouldStartLoadWithRequest2 = webWiewLogic.onShouldStartLoadWithRequest;
  onMessage2 = webWiewLogic.onMessage;
  ({ viewState, setViewState } = webWiewLogic);
  const lastErrorEvent = webWiewLogic.lastErrorEvent;
  const items = [setViewState, tmp17];
  ({ onLoadingStart, onHttpError: onHttpError2, onLoadingError, onLoadingFinish, onLoadingProgress, onRenderProcessGone: onRenderProcessGone2 } = webWiewLogic);
  closure_5(arg1, () => ({
    goForward() {
      return navigation.goForward(ref.current);
    },
    goBack() {
      return navigation.goBack(ref.current);
    },
    reload() {
      setViewState("LOADING");
      navigation.reload(ref.current);
    },
    stopLoading() {
      return navigation.stopLoading(ref.current);
    },
    postMessage(arg0) {
      return navigation.postMessage(ref.current, arg0);
    },
    injectJavaScript(PLAYER_FUNCTIONS) {
      return navigation.injectJavaScript(ref.current, PLAYER_FUNCTIONS);
    },
    requestFocus() {
      return navigation.requestFocus(ref.current);
    },
    clearFormData() {
      return navigation.clearFormData(ref.current);
    },
    clearCache(arg0) {
      return navigation.clearCache(ref.current, arg0);
    },
    clearHistory() {
      return navigation.clearHistory(ref.current);
    }
  }), items);
  const items1 = [onMessage2, onShouldStartLoadWithRequest2];
  const tmp23 = closure_6(() => ({ onShouldStartLoadWithRequest: onShouldStartLoadWithRequest2, onMessage: onMessage2 }), items1);
  closure_5 = tmp23;
  const items2 = [current, tmp23];
  setViewState(() => {
    const result = _modDef39.registerCallableModule(current, closure_5);
  }, items2);
  if ("LOADING" === viewState) {
    if (!renderLoading) {
      renderLoading = tmp19(tmp20[4]).defaultRenderLoading;
    }
    let renderLoadingResult = renderLoading();
  } else if ("ERROR" === viewState) {
    require("module_38")(null != lastErrorEvent, "lastErrorEvent expected to be non-null");
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
  const items3 = [require("module_8451").container, require("module_8451").webView, style];
  const items4 = [require("module_8451").container, containerStyle];
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
    component = require("module_8452");
  }
  const obj2 = {};
  const merged = Object.assign(tmp15);
  let tmp38 = typeof onMessage === "function";
  if (typeof onMessage !== "function") {
    tmp38 = null != messagingWithWebViewKeyEnabled && messagingWithWebViewKeyEnabled;
    const tmp39 = null != messagingWithWebViewKeyEnabled && messagingWithWebViewKeyEnabled;
  }
  obj2.messagingEnabled = tmp38;
  obj2.messagingModuleName = current;
  obj2.onLoadingError = onLoadingError;
  obj2.onLoadingFinish = onLoadingFinish;
  obj2.onLoadingProgress = onLoadingProgress;
  obj2.onLoadingStart = onLoadingStart;
  obj2.onHttpError = onHttpError2;
  obj2.onRenderProcessGone = onRenderProcessGone2;
  obj2.onMessage = onMessage2;
  obj2.onShouldStartLoadWithRequest = onShouldStartLoadWithRequest2;
  obj2.ref = tmp17;
  obj2.source = resolveAssetSource(source);
  obj2.style = items3;
  obj2.overScrollMode = str;
  obj2.javaScriptEnabled = tmp;
  obj2.thirdPartyCookiesEnabled = tmp2;
  obj2.scalesPageToFit = tmp3;
  obj2.allowsFullscreenVideo = tmp4;
  obj2.allowFileAccess = tmp5;
  obj2.saveFormDataDisabled = tmp6;
  obj2.cacheEnabled = tmp7;
  obj2.androidHardwareAccelerationDisabled = tmp8;
  obj2.androidLayerType = str2;
  obj2.setSupportMultipleWindows = tmp11;
  obj2.setBuiltInZoomControls = tmp12;
  obj2.setDisplayZoomControls = tmp13;
  obj2.nestedScrollEnabled = tmp14;
  let props;
  if (null != nativeConfig) {
    props = nativeConfig.props;
  }
  const merged1 = Object.assign(props);
  const obj3 = { style: items4, children: null };
  const items5 = [closure_10(component, obj2, "webViewKey"), renderLoadingResult];
  obj3.children = items5;
  return closure_11(closure_8, obj3);
});

export default Object.assign(forwardRefResult, { isFileUploadSupported: RNCWebView.isFileUploadSupported() });