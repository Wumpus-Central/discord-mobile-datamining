// _runtime/metro/07974__.js
import _modDef39 from "00039__.js";
import codegenNativeCommandsDefault from "../00113_codegenNativeCommands.js";
import react_mod from "../00019_react.js";
import react_native from "../00017_react-native.js";
import Fragment from "../react/00021_Fragment.js";

const require = globalThis.__r;
let closure_5, importDefault, overScrollMode;

let NativeModules;
let c10;
let c3;
let closure_4;
let forwardRef;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let unpackModuleId;
let react = react_mod;
({
  useCallback: c3,
  useEffect: closure_4,
  useImperativeHandle: hasOwnProperty,
  useMemo: metroRequire,
  useRef: metroImportDefault,
  forwardRef,
} = react);
react = react_mod;
({ View: metroImportAll, NativeModules } = react_native);
const Image = react_native.Image;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let closure_12 =
  (this && this.__rest) ||
  ((obj, arr) => {
    obj = {};
    for (const key10007 in obj) {
      let _Object2 = Object;
      hasOwnProperty = Object.prototype.hasOwnProperty;
      let callResult = hasOwnProperty.call(obj, key10007) && arr.indexOf(key10007) < 0;
      if (!callResult) {
        continue;
      } else {
        obj[key10007] = obj[key10007];
        continue;
      }
      continue;
    }
    if (null != obj) {
      const _Object3 = Object;
      if (typeof Object.getOwnPropertySymbols === "function") {
        let num;
        const _Object4 = Object;
        const ownPropertySymbols = Object.getOwnPropertySymbols(obj);
        for (let num = 0; num < ownPropertySymbols.length; num = num + 1) {
          let callResult1 = arr.indexOf(ownPropertySymbols[num]) < 0;
          if (callResult1) {
            let _Object = Object;
            callResult1 = propertyIsEnumerable.call(obj, ownPropertySymbols[num]);
          }
          if (callResult1) {
            obj[ownPropertySymbols[num]] = obj[ownPropertySymbols[num]];
          }
        }
      }
    }
    return obj;
  });
let closure_13 = codegenNativeCommandsDefault({
  supportedCommands: [
    "goBack",
    "goForward",
    "reload",
    "stopLoading",
    "injectJavaScript",
    "requestFocus",
    "postMessage",
    "clearFormData",
    "clearCache",
    "clearHistory",
    "loadUrl",
  ],
});
const resolveAssetSource = Image.resolveAssetSource;
let c15 = 0;
let RNCWebView = NativeModules.RNCWebView;
const forwardRefResult = forwardRef((overScrollMode, arg1) => {
  let containerStyle;
  let current;
  let items5;
  let messagingWithWebViewKeyEnabled;
  let nativeConfig;
  let onError;
  let onHttpError;
  let onHttpError2;
  let onLoad;
  let onLoadEnd;
  let onLoadProgress;
  let onLoadStart;
  let onLoadingError;
  let onLoadingFinish;
  let onLoadingProgress;
  let onLoadingStart;
  let onMessage;
  let onMessage2;
  let onNavigationStateChange;
  let onRenderProcessGone;
  let onRenderProcessGone2;
  let onShouldStartLoadWithRequest;
  let onShouldStartLoadWithRequest2;
  let ref;
  let renderError;
  let renderLoading;
  let renderLoadingResult;
  let setViewState;
  let source;
  let startInLoadingState;
  let style;
  let tmp38;
  let viewState;
  overScrollMode = overScrollMode.overScrollMode;
  let str = "always";
  if (undefined !== overScrollMode) {
    str = overScrollMode;
  }
  const javaScriptEnabled = overScrollMode.javaScriptEnabled;
  let tmp = undefined === javaScriptEnabled || javaScriptEnabled;
  const thirdPartyCookiesEnabled = overScrollMode.thirdPartyCookiesEnabled;
  const scalesPageToFit = overScrollMode.scalesPageToFit;
  const allowsFullscreenVideo = overScrollMode.allowsFullscreenVideo;
  const allowFileAccess = overScrollMode.allowFileAccess;
  const saveFormDataDisabled = overScrollMode.saveFormDataDisabled;
  const cacheEnabled = overScrollMode.cacheEnabled;
  const androidHardwareAccelerationDisabled = overScrollMode.androidHardwareAccelerationDisabled;
  const androidLayerType = overScrollMode.androidLayerType;
  let str2 = "none";
  const tmp2 = undefined === thirdPartyCookiesEnabled || thirdPartyCookiesEnabled;
  const tmp3 = undefined === scalesPageToFit || scalesPageToFit;
  const tmp4 = undefined !== allowsFullscreenVideo && allowsFullscreenVideo;
  const tmp5 = undefined !== allowFileAccess && allowFileAccess;
  const tmp6 = undefined !== saveFormDataDisabled && saveFormDataDisabled;
  const tmp7 = undefined === cacheEnabled || cacheEnabled;
  const tmp8 = undefined !== androidHardwareAccelerationDisabled && androidHardwareAccelerationDisabled;
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
  const tmp11 = undefined === setSupportMultipleWindows || setSupportMultipleWindows;
  const tmp12 = undefined === setBuiltInZoomControls || setBuiltInZoomControls;
  const tmp13 = undefined !== setDisplayZoomControls && setDisplayZoomControls;
  const tmp14 = undefined !== nestedScrollEnabled && nestedScrollEnabled;
  ({ messagingWithWebViewKeyEnabled, onMessage, renderLoading, renderError, source, nativeConfig } = overScrollMode);
  ({
    startInLoadingState,
    onNavigationStateChange,
    onLoadStart,
    onError,
    onLoad,
    onLoadEnd,
    onLoadProgress,
    onHttpError,
    onRenderProcessGone,
    style,
    containerStyle,
    onShouldStartLoadWithRequest,
  } = overScrollMode);
  const sum = c15 + 1;
  c15 = sum;
  const tmp15 = closure_12(overScrollMode, [
    "overScrollMode",
    "javaScriptEnabled",
    "thirdPartyCookiesEnabled",
    "scalesPageToFit",
    "allowsFullscreenVideo",
    "allowFileAccess",
    "saveFormDataDisabled",
    "cacheEnabled",
    "androidHardwareAccelerationDisabled",
    "androidLayerType",
    "originWhitelist",
    "setSupportMultipleWindows",
    "setBuiltInZoomControls",
    "setDisplayZoomControls",
    "nestedScrollEnabled",
    "startInLoadingState",
    "messagingWithWebViewKeyEnabled",
    "onNavigationStateChange",
    "onLoadStart",
    "onError",
    "onLoad",
    "onLoadEnd",
    "onLoadProgress",
    "onHttpError",
    "onRenderProcessGone",
    "onMessage",
    "renderLoading",
    "renderError",
    "style",
    "containerStyle",
    "source",
    "nativeConfig",
    "onShouldStartLoadWithRequest",
  ]);
  current = closure_7("WebViewMessageHandler".concat(sum)).current;
  const tmp17 = closure_7(null);
  importDefault = tmp17;
  const tmp18 = onMessage2((arg0, arg1, arg2) => {
    const tmp = arg2;
    if (tmp) {
      const RNCWebView = NativeModules.RNCWebView;
      const result = RNCWebView.onShouldStartLoadWithRequestCallback(arg0, arg2);
    } else if (arg0) {
      const url = navigation.loadUrl(ref.current, arg1);
    }
  }, []);
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
    onShouldStartLoadWithRequestCallback: tmp18,
  });
  onShouldStartLoadWithRequest2 = webWiewLogic.onShouldStartLoadWithRequest;
  onMessage2 = webWiewLogic.onMessage;
  ({ viewState, setViewState } = webWiewLogic);
  const lastErrorEvent = webWiewLogic.lastErrorEvent;
  const items = [setViewState, tmp17];
  ({
    onLoadingStart,
    onHttpError: onHttpError2,
    onLoadingError,
    onLoadingFinish,
    onLoadingProgress,
    onRenderProcessGone: onRenderProcessGone2,
  } = webWiewLogic);
  closure_5(
    arg1,
    () => ({
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
      },
    }),
    items,
  );
  const items1 = [onMessage2, onShouldStartLoadWithRequest2];
  const tmp23 = closure_6(
    () => ({ onShouldStartLoadWithRequest: onShouldStartLoadWithRequest2, onMessage: onMessage2 }),
    items1,
  );
  closure_5 = tmp23;
  const items2 = [current, tmp23];
  setViewState(() => {
    const obj = _modDef39;
    const result = obj.registerCallableModule(current, closure_5);
  }, items2);
  if ("LOADING" === viewState) {
    if (!renderLoading) {
      renderLoading = tmp19(tmp20[4]).defaultRenderLoading;
    }
    renderLoadingResult = renderLoading();
  } else if ("ERROR" === viewState) {
    require("00038__.js")(null != lastErrorEvent, "lastErrorEvent expected to be non-null");
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
  const items3 = [require("react-native").container, require("react-native").webView, style];
  const items4 = [require("react-native").container, containerStyle];
  let tmp29 = typeof source !== "number";
  const tmp28 = importDefault;
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
    const tmp30 = "GET" === source.method && source.body;
    if (tmp30) {
      const _console = console;
      console.warn("WebView: `source.body` is not supported when using GET.");
    }
  }
  let component;
  if (null != nativeConfig) {
    component = nativeConfig.component;
  }
  if (!component) {
    component = tmp28(tmp20[8]);
  }
  const obj2 = {
    messagingEnabled: tmp38,
    messagingModuleName: current,
    onLoadingError,
    onLoadingFinish,
    onLoadingProgress,
    onLoadingStart,
    onHttpError: onHttpError2,
    onRenderProcessGone: onRenderProcessGone2,
    onMessage: onMessage2,
    onShouldStartLoadWithRequest: onShouldStartLoadWithRequest2,
    ref: tmp17,
    source: resolveAssetSource(source),
    style: items3,
    overScrollMode: str,
    javaScriptEnabled: tmp,
    thirdPartyCookiesEnabled: tmp2,
    scalesPageToFit: tmp3,
    allowsFullscreenVideo: tmp4,
    allowFileAccess: tmp5,
    saveFormDataDisabled: tmp6,
    cacheEnabled: tmp7,
    androidHardwareAccelerationDisabled: tmp8,
    androidLayerType: str2,
    setSupportMultipleWindows: tmp11,
    setBuiltInZoomControls: tmp12,
    setDisplayZoomControls: tmp13,
    nestedScrollEnabled: tmp14,
  };
  const merged = Object.assign(tmp15);
  tmp38 = typeof onMessage === "function";
  if (!tmp38) {
    tmp38 = null != messagingWithWebViewKeyEnabled && messagingWithWebViewKeyEnabled;
  }
  let props;
  if (null != nativeConfig) {
    props = nativeConfig.props;
  }
  const merged1 = Object.assign(props);
  const obj3 = { style: items4, children: items5 };
  items5 = [closure_10(component, obj2, "webViewKey"), renderLoadingResult];
  return closure_11(closure_8, obj3);
});
let obj = { isFileUploadSupported: RNCWebView.isFileUploadSupported() };

export default Object.assign(forwardRefResult, obj);
