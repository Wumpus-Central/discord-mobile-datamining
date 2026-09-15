// discord_app/modules/media_viewer/native/components/MediaModalWebView.tsx
import LinkingDefault from "../../../../lib/native/Linking.tsx";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const PlatformUtils = fn(1364);
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
const createStyles = fn(4639);
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
    let obj = playerState(baseURL[5]);
    const sharedValue = obj.useSharedValue(1);
    const tmp2 = closure_10();
    let tmp3 = baseURL;
    const sharedValue1 = playerState(baseURL[5]).useSharedValue(0);
    const obj2 = playerState(baseURL[5]);
    const fn = function f() {
      const obj = { opacity: timing.withTiming(sharedValue1.get()) };
      return obj;
    };
    const obj3 = playerState(baseURL[5]);
    fn.__closure = { withTiming: playerState(baseURL[6]).withTiming, webviewOpacity: sharedValue1 };
    fn.__workletHash = 2179142865986;
    fn.__initData = __initData;
    const animatedStyle = obj3.useAnimatedStyle(fn);
    const obj4 = { withTiming: playerState(baseURL[6]).withTiming, webviewOpacity: sharedValue1 };
    class S {
      constructor() {
        obj = { opacity: null };
        obj2 = closure_0(closure_2[6]);
        obj.opacity = obj2.withTiming(closure_4.get());
        return obj;
      }
    }
    const obj5 = playerState(baseURL[5]);
    S.__closure = { withTiming: playerState(baseURL[6]).withTiming, loaderOpacity: sharedValue };
    S.__workletHash = 7752174298017;
    S.__initData = __initData2;
    const items = [playerState, sharedValue, sharedValue1];
    const animatedStyle1 = obj5.useAnimatedStyle(S);
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
    const obj7 = { style, children: null };
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
    const obj8 = { style: null, children: null };
    const items3 = [animatedStyle, { flex: 1 }];
    obj8.style = items3;
    const obj9 = {};
    const obj6 = { withTiming: playerState(baseURL[6]).withTiming, loaderOpacity: sharedValue };
    const tmp12 = sharedValue1;
    const tmp14 = onDataReceived;
    const merged1 = Object.assign(merged);
    obj9.injectedJavaScript = "" + injectedJavaScript + "\n" + str;
    obj9.bounces = false;
    obj9.ref = ref;
    obj9.scrollEnabled = false;
    obj9.javaScriptEnabled = true;
    obj9.onMessage = callback;
    obj9.allowsInlineMediaPlayback = true;
    obj9.mediaPlaybackRequiresUserAction = false;
    obj9.onShouldStartLoadWithRequest = callback1;
    obj8.children = closure_6(onDataReceived(baseURL[8]), obj9);
    const items4 = [closure_6(onDataReceived(baseURL[5]).View, obj8)];
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
  }),
);
export { PlayerState };
