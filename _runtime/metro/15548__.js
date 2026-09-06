// _runtime/metro/15548__.js
import _mod19 from "00019__.js";
import _mod32 from "00032__.js";
import PLAY_MODE from "../15547_PLAY_MODE.js";
import _mod15550 from "15550__.js";
import PLAYER_FUNCTIONS3 from "../15551_PLAYER_FUNCTIONS.js";
import deepComparePlayList from "../15553_deepComparePlayList.js";
import 08279__ from "08279__.js";
import _getRequireWildcardCache from "../15549__getRequireWildcardCache.js";
import get_ActivityIndicator from "00017__.js";

module_8279(_mod15550);
let _slicedToArray = module_8279(_mod32);
const noop = _getRequireWildcardCache(_mod19);
const self = this;
let c7 = "/Users/ananthukanive/side-proj/react-native-youtube-iframe/src/YoutubeIframe.js";
const StyleSheet = get_ActivityIndicator.StyleSheet;
const styles = StyleSheet.create({ webView: { backgroundColor: "transparent" } });

export default noop.forwardRef(function YoutubeIframe(videoId, ref) {
  videoId = videoId.videoId;
  const playList = videoId.playList;
  let play = videoId.play;
  let tmp = undefined !== play;
  ({ height, width } = videoId);
  if (tmp) {
    tmp = play;
  }
  play = tmp;
  const mute = videoId.mute;
  _slicedToArray = tmp2;
  const volume = videoId.volume;
  let num = 100;
  if (undefined !== volume) {
    num = volume;
  }
  const useLocalHTML = videoId.useLocalHTML;
  const baseUrlOverride = videoId.baseUrlOverride;
  const playbackRate = videoId.playbackRate;
  let num2 = 1;
  let num3 = 1;
  ({ webViewStyle, webViewProps } = videoId);
  if (undefined !== playbackRate) {
    num3 = playbackRate;
  }
  const contentScale = videoId.contentScale;
  if (undefined !== contentScale) {
    num2 = contentScale;
  }
  let fn = videoId.onError;
  if (undefined === fn) {
    fn = (arg0) => {

    };
  }
  let fn2 = videoId.onReady;
  if (undefined === fn2) {
    fn2 = (arg0) => {

    };
  }
  const playListStartIndex = videoId.playListStartIndex;
  let num4 = 0;
  if (undefined !== playListStartIndex) {
    num4 = playListStartIndex;
  }
  ({ initialPlayerParams, allowWebViewZoom } = videoId);
  closure_12 = tmp3;
  const forceAndroidAutoplay = videoId.forceAndroidAutoplay;
  let fn3 = videoId.onChangeState;
  if (undefined === fn3) {
    fn3 = (arg0) => {

    };
  }
  let fn4 = videoId.onFullScreenChange;
  if (undefined === fn4) {
    fn4 = (arg0) => {

    };
  }
  let fn5 = videoId.onPlaybackQualityChange;
  if (undefined === fn5) {
    fn5 = (arg0) => {

    };
  }
  let fn6 = videoId.onPlaybackRateChange;
  if (undefined === fn6) {
    fn6 = (arg0) => {

    };
  }
  let obj = num;
  const defaultResult = _slicedToArray.default(num.useState(false), 2);
  const first = defaultResult[0];
  closure_18 = defaultResult[1];
  ref = num.useRef(videoId);
  num.useRef(playList);
  if (!initialPlayerParams) {
    initialPlayerParams = {};
  }
  ref = num.useRef(initialPlayerParams);
  const ref1 = obj.useRef(null);
  const eventEmitter = new videoId(playList[6]).EventEmitter();
  obj.useRef(eventEmitter);
  const imperativeHandle = obj.useImperativeHandle(ref, () => ({
    getVideoUrl() {
      let current = ref1.current;
      current.injectJavaScript(videoId(playList[7]).PLAYER_FUNCTIONS.getVideoUrlScript);
      return new Promise((arg0) => {
        const current = ref.current;
        current.once("getVideoUrl", arg0);
      });
    },
    getDuration() {
      let current = ref1.current;
      current.injectJavaScript(videoId(playList[7]).PLAYER_FUNCTIONS.durationScript);
      return new Promise((arg0) => {
        const current = ref.current;
        current.once("getDuration", arg0);
      });
    },
    getCurrentTime() {
      let current = ref1.current;
      current.injectJavaScript(videoId(playList[7]).PLAYER_FUNCTIONS.currentTimeScript);
      return new Promise((arg0) => {
        const current = ref.current;
        current.once("getCurrentTime", arg0);
      });
    },
    isMuted() {
      let current = ref1.current;
      current.injectJavaScript(videoId(playList[7]).PLAYER_FUNCTIONS.isMutedScript);
      return new Promise((arg0) => {
        const current = ref.current;
        current.once("isMuted", arg0);
      });
    },
    getVolume() {
      let current = ref1.current;
      current.injectJavaScript(videoId(playList[7]).PLAYER_FUNCTIONS.getVolumeScript);
      return new Promise((arg0) => {
        const current = ref.current;
        current.once("getVolume", arg0);
      });
    },
    getPlaybackRate() {
      let current = ref1.current;
      current.injectJavaScript(videoId(playList[7]).PLAYER_FUNCTIONS.getPlaybackRateScript);
      return new Promise((arg0) => {
        const current = ref.current;
        current.once("getPlaybackRate", arg0);
      });
    },
    getAvailablePlaybackRates() {
      let current = ref1.current;
      current.injectJavaScript(videoId(playList[7]).PLAYER_FUNCTIONS.getAvailablePlaybackRatesScript);
      return new Promise((arg0) => {
        const current = ref.current;
        current.once("getAvailablePlaybackRates", arg0);
      });
    },
    seekTo(arg0, arg1) {
      const current = ref1.current;
      const PLAYER_FUNCTIONS = videoId(playList[7]).PLAYER_FUNCTIONS;
      current.injectJavaScript(PLAYER_FUNCTIONS.seekToScript(arg0, arg1));
    }
  }), []);
  let items = [tmp, undefined !== mute && mute, num, num3, first];
  const effect = obj.useEffect(() => {
    if (first) {
      const items = [PLAYER_FUNCTIONS3.playMode[play], PLAYER_FUNCTIONS3.soundMode[closure_3], , ];
      const PLAYER_FUNCTIONS = PLAYER_FUNCTIONS3.PLAYER_FUNCTIONS;
      items[2] = PLAYER_FUNCTIONS.setVolume(num);
      const PLAYER_FUNCTIONS2 = PLAYER_FUNCTIONS3.PLAYER_FUNCTIONS;
      items[3] = PLAYER_FUNCTIONS2.setPlaybackRate(num3);
      const item = items.forEach(ref1.current.injectJavaScript);
    }
  }, items);
  const items1 = [videoId, tmp, first];
  const effect1 = obj.useEffect(() => {
    let tmp = first;
    if (first) {
      tmp = ref.current !== videoId;
    }
    if (tmp) {
      ref.current = videoId;
      const current = ref1.current;
      const PLAYER_FUNCTIONS = PLAYER_FUNCTIONS3.PLAYER_FUNCTIONS;
      current.injectJavaScript(PLAYER_FUNCTIONS.loadVideoById(videoId, play));
    }
  }, items1);
  const items2 = [playList, tmp, num4, first];
  const effect2 = obj.useEffect(() => {
    let tmp = first;
    if (first) {
      tmp = playList;
    }
    if (tmp) {
      tmp = !deepComparePlayList.deepComparePlayList(ref2.current, playList);
    }
    if (tmp) {
      ref2.current = playList;
      const current = ref1.current;
      const PLAYER_FUNCTIONS = PLAYER_FUNCTIONS3.PLAYER_FUNCTIONS;
      current.injectJavaScript(PLAYER_FUNCTIONS.loadPlaylist(playList, num4, play));
    }
  }, items2);
  const items3 = [fn2, fn, fn3, fn4, fn6, fn5];
  const items4 = [baseUrlOverride];
  const callback = obj.useCallback((nativeEvent) => {
    try {
      const _JSON = JSON;
      const parsed = JSON.parse(nativeEvent.nativeEvent.data);
      const eventType = parsed.eventType;
      if ("fullScreenChange" === eventType) {
        fn4(parsed.data);
      } else if ("playerStateChange" === eventType) {
        fn3(PLAY_MODE.PLAYER_STATES[tmp4.data]);
      } else if ("playerReady" === eventType) {
        fn2();
        closure_18(true);
      } else if ("playerQualityChange" === eventType) {
        fn5(tmp4.data);
      } else if ("playerError" === eventType) {
        fn(PLAY_MODE.PLAYER_ERROR[tmp4.data]);
      } else if ("playbackRateChange" === eventType) {
        fn6(tmp4.data);
      } else {
        const current = ref3.current;
        current.emit(tmp4.eventType, tmp4.data);
      }
    } catch (tmp30) {
      const _console = console;
      console.warn("[rn-youtube-iframe]", tmp30);
    }
  }, items3);
  const items5 = [useLocalHTML, num2, baseUrlOverride, undefined !== allowWebViewZoom && allowWebViewZoom];
  const callback1 = obj.useCallback((mainDocumentURL) => {
    try {
      let url = mainDocumentURL.mainDocumentURL;
      if (!url) {
        url = mainDocumentURL.url;
      }
      let startsWithResult = "ios" === get_ActivityIndicator.Platform.OS;
      if (startsWithResult) {
        startsWithResult = "about:blank" === obj;
      }
      if (!startsWithResult) {
        let DEFAULT_BASE_URL = baseUrlOverride;
        if (!baseUrlOverride) {
          DEFAULT_BASE_URL = PLAY_MODE.DEFAULT_BASE_URL;
        }
        startsWithResult = obj.startsWith(DEFAULT_BASE_URL);
      }
      return startsWithResult;
    } catch (err) {
      return true;
    }
  }, items4);
  obj = { style: { height, width }, __self: baseUrlOverride, __source: { fileName: num3, lineNumber: 251, columnNumber: 5 } };
  const memo = obj.useMemo(() => {
    if (useLocalHTML) {
      let obj = { html: MAIN_SCRIPTResult.htmlString };
      if (baseUrlOverride) {
        obj.baseUrl = baseUrlOverride;
      }
      return obj;
    } else {
      let DEFAULT_BASE_URL = baseUrlOverride;
      if (!baseUrlOverride) {
        DEFAULT_BASE_URL = PLAY_MODE.DEFAULT_BASE_URL;
      }
      obj = { uri: `${DEFAULT_BASE_URL}?data=${tmp3.urlEncodedJSON}` };
      return obj;
    }
    MAIN_SCRIPTResult = PLAYER_FUNCTIONS3.MAIN_SCRIPT(ref.current, ref2.current, ref.current, closure_12, num2);
  }, items5);
  obj = { bounces: false, originWhitelist: ["*"], allowsInlineMediaPlayback: true, style: null, mediaPlaybackRequiresUserAction: false, onShouldStartLoadWithRequest: callback1, allowsFullscreenVideo: !ref.current.preventFullScreen, userAgent: null };
  const items6 = [num2.webView, webViewStyle];
  obj.style = items6;
  let str = "";
  if (tmp4) {
    const Platform = useLocalHTML.Platform;
    const obj1 = { android: videoId(playList[9]).CUSTOM_USER_AGENT, ios: "" };
    str = Platform.select(obj1);
  }
  obj.userAgent = str;
  return <useLocalHTML.View bounces={false} originWhitelist={["*"]} allowsInlineMediaPlayback style={null} mediaPlaybackRequiresUserAction={false} onShouldStartLoadWithRequest={callback1} allowsFullscreenVideo={!ref.current.preventFullScreen} userAgent={null}>{obj.default.createElement(videoId(playList[10]).WebView, play.default(obj, webViewProps, { source: memo, ref: ref1, onMessage: callback, __self: baseUrlOverride, __source: { fileName: num3, lineNumber: 252, columnNumber: 7 } }))}</useLocalHTML.View>;
});