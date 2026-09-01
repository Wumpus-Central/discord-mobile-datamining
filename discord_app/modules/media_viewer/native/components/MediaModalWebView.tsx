// discord_app/modules/media_viewer/native/components/MediaModalWebView.tsx
import importAllResult from "../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import set from "../../../../utils/PlatformUtils.tsx";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
let c3 = importAllResult;
({ ActivityIndicator: c4, View: c5 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: error } = jsxProd);
let str = "";
if (set.isIOS()) {
  str =
    "\n  window.addEventListener('click', function(event) {\n    window.ReactNativeWebView.postMessage(JSON.stringify({event: 'click'}));\n  });\n";
}
let obj = {
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
let closure_10 = createCacheKey.createStyles({
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
let closure_11 = {
  code: "function MediaModalWebViewTsx1(){const{withTiming,webviewOpacity}=this.__closure;return{opacity:withTiming(webviewOpacity.get())};}",
};
let closure_12 = {
  code: "function MediaModalWebViewTsx2(){const{withTiming,loaderOpacity}=this.__closure;return{opacity:withTiming(loaderOpacity.get())};}",
};
let result = set.fileFinishedImporting("modules/media_viewer/native/components/MediaModalWebView.tsx");

export default importAllResult.memo(
  importAllResult.forwardRef((playerState, ref) => {
    playerState = playerState.playerState;
    const onDataReceived = playerState.onDataReceived;
    const baseURL = playerState.baseURL;
    const panGestureConfig = playerState.panGestureConfig;
    ({ style, injectedJavaScript } = playerState);
    const merged = Object.assign(playerState, Object.create(null));
    let sharedValue;
    let sharedValue1;
    obj = playerState(baseURL[5]);
    sharedValue = obj.useSharedValue(1);
    obj1 = playerState(baseURL[5]);
    sharedValue1 = obj1.useSharedValue(0);
    let obj2 = playerState(baseURL[5]);
    const fn = function f() {
      obj = { opacity: playerState(baseURL[6]).withTiming(sharedValue1.get()) };
      return obj;
    };
    obj = { withTiming: playerState(baseURL[6]).withTiming, webviewOpacity: sharedValue1 };
    fn.__closure = obj;
    fn.__workletHash = 2179142865986;
    fn.__initData = closure_11;
    const animatedStyle = obj2.useAnimatedStyle(fn);
    let obj4 = playerState(baseURL[5]);
    class S {
      constructor() {
        obj = { opacity: null };
        obj2 = playerState(baseURL[6]);
        obj[0] = obj2.withTiming(closure_4.get());
        return obj;
      }
    }
    obj = { withTiming: playerState(baseURL[6]).withTiming, loaderOpacity: sharedValue };
    S.__closure = obj;
    S.__workletHash = 7752174298017;
    S.__initData = closure_12;
    const items = [playerState, sharedValue, sharedValue1];
    const animatedStyle1 = obj4.useAnimatedStyle(S);
    const effect = panGestureConfig.useEffect(() => {
      if (!tmp3) {
        const result = sharedValue.set(0);
        const result1 = sharedValue1.set(1);
      }
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
        onDataReceived(baseURL[7]).openURL(url.url);
        flag = false;
        obj = onDataReceived(baseURL[7]);
      }
      return flag;
    }, items2);
    obj2 = { style: items3, children: null };
    items3 = [animatedStyle, { flex: 1 }];
    const obj3 = {};
    const tmp11 = closure_7;
    const tmp12 = sharedValue1;
    const tmp14 = onDataReceived;
    const tmp2 = callback2();
    const tmp3 = baseURL;
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
    obj2[1] = callback(onDataReceived(baseURL[8]), obj3);
    const items4 = [callback(onDataReceived(baseURL[5]).View, obj2)];
    let tmp13Result = playerState !== obj.PLAYING && playerState !== obj.PAUSED;
    if (tmp13Result) {
      obj4 = { style: null, children: null };
      const items5 = [animatedStyle1, tmp2.loading];
      obj4[0] = items5;
      obj4[1] = tmp13(sharedValue, { color: "white", size: "large" });
      tmp13Result = tmp13(tmp14(tmp3[5]).View, obj4);
    }
    items4[1] = tmp13Result;
    obj1[1] = items4;
    return tmp11(tmp12, obj1);
  }),
);
export const PlayerState = obj;
