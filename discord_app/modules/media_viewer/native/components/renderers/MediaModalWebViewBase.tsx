// === Module 8871: MediaModalWebViewBase ===

// Module 8871 (MediaModalWebViewBase)
import timing from "timing" /* 5254 */;
import LinkingDefault from "Linking" /* 5709 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const PlatformUtils = fn(1375);
let str = "";
if (PlatformUtils.isIOS()) {
  str = "\n  window.addEventListener('click', function(event) {\n    window.ReactNativeWebView.postMessage(JSON.stringify({event: 'click'}));\n  });\n";
}
const PlayerState = { UNREADY: 0, [0]: "UNREADY", READY: 1, [1]: "READY", ERRORED: 2, [2]: "ERRORED", UNSTARTED: 3, [3]: "UNSTARTED", ENDED: 4, [4]: "ENDED", PLAYING: 5, [5]: "PLAYING", PAUSED: 6, [6]: "PAUSED", BUFFERING: 7, [7]: "BUFFERING", VIDEO_CUED: 8, [8]: "VIDEO_CUED" };
const createStyles = fn(5014);
let closure_10 = createStyles.createStyles({ loading: { top: 0, left: 0, right: 0, bottom: 0, position: "absolute", alignItems: "center", justifyContent: "center" } });
const __initData = { code: "function MediaModalWebViewBaseTsx1(){const{withTiming,webviewOpacity}=this.__closure;return{opacity:withTiming(webviewOpacity.get())};}" };
const __initData2 = { code: "function MediaModalWebViewBaseTsx2(){const{withTiming,loaderOpacity}=this.__closure;return{opacity:withTiming(loaderOpacity.get())};}" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/media_viewer/native/components/renderers/MediaModalWebViewBase.tsx");

export default noop.memo(function MediaModalWebViewBase(baseURL) {
  baseURL = baseURL.baseURL;
  str = baseURL.injectedJavaScript;
  if (str === undefined) {
    str = "";
  }
  const onDataReceived = baseURL.onDataReceived;
  const onToggleOverlay = baseURL.onToggleOverlay;
  const playerState = baseURL.playerState;
  ({ style, ref } = baseURL);
  const merged = Object.assign(baseURL, Object.assign({ baseURL: 0, injectedJavaScript: 0, onDataReceived: 0, onToggleOverlay: 0, playerState: 0, style: 0, ref: 0 }));
  let obj = baseURL(onToggleOverlay[5]);
  const sharedValue = obj.useSharedValue(1);
  const tmp2 = closure_10();
  let tmp3 = onToggleOverlay;
  const sharedValue1 = baseURL(onToggleOverlay[5]).useSharedValue(0);
  const obj2 = baseURL(onToggleOverlay[5]);
  class S {
    constructor() {
      obj = { opacity: null };
      obj2 = closure_0(closure_2[6]);
      obj.opacity = obj2.withTiming(closure_5.get());
      return obj;
    }
  }
  const obj3 = baseURL(onToggleOverlay[5]);
  S.__closure = { withTiming: baseURL(onToggleOverlay[6]).withTiming, webviewOpacity: sharedValue1 };
  S.__workletHash = 10763244381367;
  S.__initData = __initData;
  const animatedStyle = obj3.useAnimatedStyle(S);
  const obj4 = { withTiming: baseURL(onToggleOverlay[6]).withTiming, webviewOpacity: sharedValue1 };
  const fn = function f() {
    const obj = { opacity: timing.withTiming(sharedValue.get()) };
    return obj;
  };
  const obj5 = baseURL(onToggleOverlay[5]);
  fn.__closure = { withTiming: baseURL(onToggleOverlay[6]).withTiming, loaderOpacity: sharedValue };
  fn.__workletHash = 335623571284;
  fn.__initData = __initData2;
  const items = [playerState, sharedValue, sharedValue1];
  const animatedStyle1 = obj5.useAnimatedStyle(fn);
  const effect = playerState.useEffect(() => {
    if (!tmp3) {
      const result = sharedValue.set(0);
      const result1 = sharedValue1.set(1);
    }
    tmp3 = playerState !== obj.BUFFERING && playerState !== obj.PLAYING && playerState !== obj.ERRORED;
  }, items);
  const items1 = [onDataReceived, onToggleOverlay];
  const items2 = [baseURL];
  const callback = playerState.useCallback((nativeEvent) => {
    const parsed = JSON.parse(nativeEvent.nativeEvent.data);
    if (null != parsed) {
      if ("click" === parsed.event) {
        onToggleOverlay();
      }
    }
    onDataReceived(nativeEvent.nativeEvent.data);
  }, items1);
  const obj7 = { style, children: null };
  const callback1 = playerState.useCallback((url) => {
    let tmp = "about:blank" !== url.url;
    if (tmp) {
      url = url.url;
      tmp = !url.startsWith(baseURL);
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
  }, items2);
  const obj8 = { style: null, children: null };
  const items3 = [animatedStyle, { flex: 1 }];
  obj8.style = items3;
  const obj9 = {};
  const obj6 = { withTiming: baseURL(onToggleOverlay[6]).withTiming, loaderOpacity: sharedValue };
  const tmp12 = sharedValue1;
  const tmp14 = onDataReceived;
  const merged1 = Object.assign(merged);
  obj9.ref = ref;
  obj9.allowsInlineMediaPlayback = true;
  obj9.bounces = false;
  obj9.injectedJavaScript = "" + str + "\n" + str;
  obj9.javaScriptEnabled = true;
  obj9.mediaPlaybackRequiresUserAction = false;
  obj9.onMessage = callback;
  obj9.onShouldStartLoadWithRequest = callback1;
  obj9.scrollEnabled = false;
  obj8.children = closure_6(onDataReceived(onToggleOverlay[8]), obj9);
  const items4 = [closure_6(onDataReceived(onToggleOverlay[5]).View, obj8), ];
  let tmp13Result = playerState !== obj.PLAYING && playerState !== obj.PAUSED;
  if (tmp13Result) {
    const obj10 = { style: null, children: null };
    const items5 = [animatedStyle1, tmp2.loading];
    obj10.style = items5;
    obj10.children = closure_6(sharedValue, { color: "white", size: "large" });
    tmp13Result = closure_6(tmp14(tmp3[5]).View, obj10);
  }
  items4[1] = tmp13Result;
  obj7.children = items4;
  return closure_7(tmp12, obj7);
});
export { PlayerState };