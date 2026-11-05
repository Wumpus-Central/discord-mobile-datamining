// === Module 9017: MediaModalWebViewBase ===

// Module 9017 (MediaModalWebViewBase)
import LinkingDefault from "Linking" /* 5846 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_6, jsxs: metroImportDefault } = jsxProd);
const PlatformUtils = fn(1377);
let str = "";
if (PlatformUtils.isIOS()) {
  str = "\n  window.addEventListener('click', function(event) {\n    window.ReactNativeWebView.postMessage(JSON.stringify({event: 'click'}));\n  });\n";
}
const PlayerState = { UNREADY: 0, [0]: "UNREADY", READY: 1, [1]: "READY", ERRORED: 2, [2]: "ERRORED", UNSTARTED: 3, [3]: "UNSTARTED", ENDED: 4, [4]: "ENDED", PLAYING: 5, [5]: "PLAYING", PAUSED: 6, [6]: "PAUSED", BUFFERING: 7, [7]: "BUFFERING", VIDEO_CUED: 8, [8]: "VIDEO_CUED" };
const createStyles = fn(5143);
let closure_10 = createStyles.createStyles({ loading: { top: 0, left: 0, right: 0, bottom: 0, position: "absolute", alignItems: "center", justifyContent: "center" } });
let closure_11 = { code: "(function MediaModalWebViewBaseTsx1(){let[withTiming,webviewOpacity]=this.__closure;return{opacity:withTiming(webviewOpacity.get())};})" };
let closure_12 = { code: "(function MediaModalWebViewBaseTsx2(){let[withTiming,loaderOpacity]=this.__closure;return{opacity:withTiming(loaderOpacity.get())};})" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/media_viewer/native/components/renderers/MediaModalWebViewBase.tsx");

export default noop.memo(function MediaModalWebViewBase(baseURL) {
  baseURL = baseURL.baseURL;
  _require = baseURL;
  str = baseURL.injectedJavaScript;
  if (str === undefined) {
    str = "";
  }
  const onDataReceived = baseURL.onDataReceived;
  const onToggleOverlay = baseURL.onToggleOverlay;
  const playerState = baseURL.playerState;
  ({ style, ref } = baseURL);
  const merged = Object.assign(baseURL, Object.assign({ baseURL: 0, injectedJavaScript: 0, onDataReceived: 0, onToggleOverlay: 0, playerState: 0, style: 0, ref: 0 }));
  let obj = require("module_1652");
  const sharedValue = obj.useSharedValue(1);
  const tmp2 = closure_10();
  const sharedValue1 = require("module_1652").useSharedValue(0);
  const obj2 = require("module_1652");
  items = [closure_11, require("timing/timing").withTiming, sharedValue1];
  _require = undefined;
  importDefault = undefined;
  [tmp7, tmp8, tmp9] = items;
  class MediaModalWebViewBaseTsx1 {
    constructor() {
      obj = { opacity: closure_0(closure_1.get()) };
      return obj;
    }
  }
  const items1 = [tmp8, tmp9];
  MediaModalWebViewBaseTsx1.__closure = items1;
  MediaModalWebViewBaseTsx1.__workletHash = 11815479817806;
  MediaModalWebViewBaseTsx1.__initData = tmp7;
  const animatedStyle = require("module_1652").useAnimatedStyle(MediaModalWebViewBaseTsx1);
  const obj3 = require("module_1652");
  const items2 = [closure_12, require("timing/timing").withTiming, sharedValue];
  _require = undefined;
  importDefault = undefined;
  [tmp11, tmp12, tmp13] = items2;
  class MediaModalWebViewBaseTsx2 {
    constructor() {
      obj = { opacity: closure_0(closure_1.get()) };
      return obj;
    }
  }
  const items3 = [tmp12, tmp13];
  MediaModalWebViewBaseTsx2.__closure = items3;
  MediaModalWebViewBaseTsx2.__workletHash = 5577890850125;
  MediaModalWebViewBaseTsx2.__initData = tmp11;
  const items4 = [playerState, sharedValue, sharedValue1];
  const animatedStyle1 = require("module_1652").useAnimatedStyle(MediaModalWebViewBaseTsx2);
  const effect = playerState.useEffect(() => {
    if (!tmp3) {
      const result = sharedValue.set(0);
      const result1 = sharedValue1.set(1);
    }
    tmp3 = playerState !== obj.BUFFERING && playerState !== obj.PLAYING && playerState !== obj.ERRORED;
  }, items4);
  const items5 = [onDataReceived, onToggleOverlay];
  const items6 = [baseURL];
  const callback = playerState.useCallback((nativeEvent) => {
    const parsed = JSON.parse(nativeEvent.nativeEvent.data);
    if (null != parsed) {
      if ("click" === parsed.event) {
        onToggleOverlay();
      }
    }
    _undefined2(nativeEvent.nativeEvent.data);
  }, items5);
  const obj4 = { style, children: null };
  const callback1 = playerState.useCallback((url) => {
    let tmp = "about:blank" !== url.url;
    if (tmp) {
      url = url.url;
      tmp = !url.startsWith(c0);
    }
    if (tmp) {
      tmp = null == url.isTopFrame || url.isTopFrame;
      const tmp4 = null == url.isTopFrame || url.isTopFrame;
    }
    let flag = !tmp;
    if (tmp) {
      LinkingDefault.openURL(url.url);
      flag = false;
    }
    return flag;
  }, items6);
  const obj5 = { style: null, children: null };
  const items7 = [animatedStyle, { flex: 1 }];
  obj5.style = items7;
  const obj6 = {};
  const tmp19 = sharedValue1;
  const tmp21 = importDefault;
  const tmp3Result = require("module_1652");
  const merged1 = Object.assign(merged);
  obj6.ref = ref;
  obj6.allowsInlineMediaPlayback = true;
  obj6.bounces = false;
  obj6.injectedJavaScript = "" + str + "\n" + str;
  obj6.javaScriptEnabled = true;
  obj6.mediaPlaybackRequiresUserAction = false;
  obj6.onMessage = callback;
  obj6.onShouldStartLoadWithRequest = callback1;
  obj6.scrollEnabled = false;
  obj5.children = closure_6(require("WebView"), obj6);
  const items8 = [closure_6(require("module_1652").View, obj5), ];
  let tmp20Result = playerState !== obj.PLAYING && playerState !== obj.PAUSED;
  if (tmp20Result) {
    const obj7 = { style: null, children: null };
    const items9 = [animatedStyle1, tmp2.loading];
    obj7.style = items9;
    obj7.children = closure_6(sharedValue, { color: "white", size: "large" });
    tmp20Result = closure_6(tmp21(tmp4[5]).View, obj7);
  }
  items8[1] = tmp20Result;
  obj4.children = items8;
  return closure_7(tmp19, obj4);
});
export { PlayerState };