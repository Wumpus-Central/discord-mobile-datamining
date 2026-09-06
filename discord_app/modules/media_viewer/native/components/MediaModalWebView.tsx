// discord_app/modules/media_viewer/native/components/MediaModalWebView.tsx
import LinkingDefault from "../../../../lib/native/Linking.tsx";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const PlatformUtils = fn(1115);
let str = "";
if (PlatformUtils.isIOS()) {
  str =
    "\n  window.addEventListener('click', function(event) {\n    window.ReactNativeWebView.postMessage(JSON.stringify({event: 'click'}));\n  });\n";
}
const PlayerState = {
  UNREADY: 0,
  [0]: "UNREADY",
  READY: 1,
  [1]: "READY",
  ERRORED: 2,
  [2]: "ERRORED",
  UNSTARTED: 3,
  [3]: "UNSTARTED",
  ENDED: 4,
  [4]: "ENDED",
  PLAYING: 5,
  [5]: "PLAYING",
  PAUSED: 6,
  [6]: "PAUSED",
  BUFFERING: 7,
  [7]: "BUFFERING",
  VIDEO_CUED: 8,
  [8]: "VIDEO_CUED",
};
const createStyles = fn(4560);
let closure_10 = createStyles.createStyles({
  loading: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
});
const __initData = {
  code: "function MediaModalWebViewTsx1(){const{withTiming,webviewOpacity}=this.__closure;return{opacity:withTiming(webviewOpacity.get())};}",
};
const __initData2 = {
  code: "function MediaModalWebViewTsx2(){const{withTiming,loaderOpacity}=this.__closure;return{opacity:withTiming(loaderOpacity.get())};}",
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/media_viewer/native/components/MediaModalWebView.tsx");

export default noop.memo(
  noop.forwardRef((playerState, ref) => {
    playerState = playerState.playerState;
    const onDataReceived = playerState.onDataReceived;
    const baseURL = playerState.baseURL;
    const panGestureConfig = playerState.panGestureConfig;
    ({ style, injectedJavaScript } = playerState);
    const merged = Object.assign(
      playerState,
      Object.assign({
        style: 0,
        playerState: 0,
        onDataReceived: 0,
        baseURL: 0,
        injectedJavaScript: 0,
        panGestureConfig: 0,
      }),
    );
    let __closure = playerState(baseURL[5]);
    const sharedValue = __closure.useSharedValue(1);
    let obj1 = playerState(baseURL[5]);
    const sharedValue1 = obj1.useSharedValue(0);
    let obj2 = playerState(baseURL[5]);
    const fn = function f() {
      obj = { opacity: timing.withTiming(sharedValue1.get()) };
      return obj;
    };
    __closure = { withTiming: playerState(baseURL[6]).withTiming, webviewOpacity: sharedValue1 };
    fn.__closure = __closure;
    fn.__workletHash = 2179142865986;
    fn.__initData = __initData;
    const animatedStyle = obj2.useAnimatedStyle(fn);
    let obj4 = playerState(baseURL[5]);
    class S {
      constructor() {
        obj = { opacity: null };
        obj2 = closure_0(closure_2[6]);
        obj.opacity = obj2.withTiming(closure_4.get());
        return obj;
      }
    }
    __closure = { withTiming: playerState(baseURL[6]).withTiming, loaderOpacity: sharedValue };
    S.__closure = __closure;
    S.__workletHash = 7752174298017;
    S.__initData = __initData2;
    const items = [playerState, sharedValue, sharedValue1];
    const animatedStyle1 = obj4.useAnimatedStyle(S);
    const effect = panGestureConfig.useEffect(() => {
      if (!tmp3) {
        const result = sharedValue.set(0);
        const result1 = sharedValue1.set(1);
      }
      tmp3 = playerState !== obj.BUFFERING && playerState !== obj.PLAYING && playerState !== obj.ERRORED;
    }, items);
    const items1 = [onDataReceived, panGestureConfig];
    const items2 = [baseURL];
    const callback = panGestureConfig.useCallback((nativeEvent) => {
      const parsed = JSON.parse(nativeEvent.nativeEvent.data);
      if (null != parsed) {
        if ("click" === parsed.event) {
          ({ overlayEnabled, overlayEnabled: overlayEnabled2 } = panGestureConfig);
          const result = overlayEnabled.set(!overlayEnabled2.get());
        }
      }
      onDataReceived(nativeEvent.nativeEvent.data);
    }, items1);
    obj1 = { style, children: null };
    const callback1 = panGestureConfig.useCallback((url) => {
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
    obj2 = { style: null, children: null };
    const items3 = [animatedStyle, { flex: 1 }];
    obj2.style = items3;
    const obj3 = {};
    const tmp12 = sharedValue1;
    const tmp14 = onDataReceived;
    const tmp2 = closure_10();
    let tmp3 = baseURL;
    const merged1 = Object.assign(merged);
    obj3.injectedJavaScript = "" + injectedJavaScript + "\n" + str;
    obj3.bounces = false;
    obj3.ref = ref;
    obj3.scrollEnabled = false;
    obj3.javaScriptEnabled = true;
    obj3.onMessage = callback;
    obj3.allowsInlineMediaPlayback = true;
    obj3.mediaPlaybackRequiresUserAction = false;
    obj3.onShouldStartLoadWithRequest = callback1;
    obj2.children = closure_6(onDataReceived(baseURL[8]), obj3);
    const items4 = [closure_6(onDataReceived(baseURL[5]).View, obj2)];
    let tmp13Result = playerState !== __closure.PLAYING && playerState !== __closure.PAUSED;
    if (tmp13Result) {
      obj4 = { style: null, children: null };
      const items5 = [animatedStyle1, tmp2.loading];
      obj4.style = items5;
      obj4.children = closure_6(sharedValue, { color: "white", size: "large" });
      tmp13Result = closure_6(tmp14(tmp3[5]).View, obj4);
    }
    items4[1] = tmp13Result;
    obj1.children = items4;
    return closure_7(tmp12, obj1);
  }),
);
export { PlayerState };
