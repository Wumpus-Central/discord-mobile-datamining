// === Module 14783: MediaModalYoutube ===

// Module 14783 (MediaModalYoutube)
import MediaViewerAnalyticsManager from "MediaViewerAnalyticsManager" /* 8835 */;
import MediaModalWebViewBase from "MediaModalWebViewBase" /* 8871 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AppStateStore from "AppStateStore" /* 1993 */;

require = fn;
const Constants = fn(1072);
({ AppStates: metroRequire, YOUTUBE_EMBED_PAGE_TYPE: closure_7 } = Constants);
const jsx = fn(21).jsx;
let closure_9 = "https:" + window.GLOBAL_ENV.WEBAPP_ENDPOINT;
const size = fn(2);
let result = size.fileFinishedImporting("modules/media_viewer/native/components/renderers/MediaModalYoutube.tsx");

export default noop.memo(function MediaModalYoutube(visible) {
  visible = visible.visible;
  const source = visible.source;
  playerState = undefined;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  noop = undefined;
  ({ style, onError, onLoad, onLoadStart, onToggleOverlay } = visible);
  [playerState, dependencyMap] = noop.useState(visible(8871).PlayerState.UNREADY);
  const tmp5 = _slicedToArray(noop.useState(undefined), 2);
  _slicedToArray = tmp5[1];
  let tmp7 = playerState(6732)(playerState);
  noop = tmp7;
  const tmp8 = playerState(6732)(visible);
  closure_5 = tmp8;
  const ref = noop.useRef(null);
  const effect = noop.useEffect(() => {
    const MediaViewerAnalytics = visible(8835).MediaViewerAnalytics;
    const result = MediaViewerAnalytics.trackMessageEmbedsActionCompleted({ platform: "youtube", action: "attempted" });
  }, []);
  const items = [ref, visible, tmp8, tmp7, playerState];
  const callback = noop.useCallback((arg0) => {
    const parsed = JSON.parse(arg0);
    ({ type, value } = parsed);
    if ("onReady" === type) {
      if ("-1" === value) {
        let READY = MediaModalWebViewBase.PlayerState.ERRORED;
      } else {
        READY = MediaModalWebViewBase.PlayerState.READY;
      }
      dependencyMap(READY);
    } else if ("onError" === type) {
      let str1 = value;
      if (typeof value === "number") {
        str1 = value.toString();
      }
      if ("2" === str1) {
        let str6 = "invalid_parameter";
      } else if ("5" === str1) {
        str6 = "html5_error";
      } else if ("100" === str1) {
        str6 = "video_not_found";
      } else {
        str6 = "embed_not_allowed";
        if ("101" !== str1) {
          str6 = "embed_not_allowed";
          if ("150" !== str1) {
            str6 = "unknown";
          }
        }
      }
      dependencyMap(MediaModalWebViewBase.PlayerState.ERRORED);
      closure_3(str6);
      const MediaViewerAnalytics = MediaViewerAnalyticsManager.MediaViewerAnalytics;
      const obj = { platform: "youtube", action: "errored", error: str6 };
      const result = MediaViewerAnalytics.trackMessageEmbedsActionCompleted(obj);
    } else if ("onStateChange" === type) {
      const obj2 = { "-1": null, 0: null, 1: null, 2: null, 3: null, 5: null };
      obj2[0] = MediaModalWebViewBase.PlayerState.UNSTARTED;
      obj2[0] = MediaModalWebViewBase.PlayerState.ENDED;
      obj2[1] = MediaModalWebViewBase.PlayerState.PLAYING;
      obj2[2] = MediaModalWebViewBase.PlayerState.PAUSED;
      obj2[3] = MediaModalWebViewBase.PlayerState.BUFFERING;
      obj2[5] = MediaModalWebViewBase.PlayerState.VIDEO_CUED;
      let tmp4 = null != tmp35;
      if (tmp4) {
        tmp4 = tmp35 in MediaModalWebViewBase.PlayerState;
      }
      if (tmp4) {
        dependencyMap(tmp35);
      }
    }
  }, []);
  const effect1 = noop.useEffect(() => {
    let tmp2 = null != ref.current;
    if (tmp2) {
      tmp2 = first !== MediaModalWebViewBase.PlayerState.UNREADY;
    }
    if (tmp2) {
      let tmp7 = visible;
      if (visible) {
        tmp7 = closure_4 === MediaModalWebViewBase.PlayerState.UNREADY;
      }
      if (tmp7) {
        tmp7 = first === MediaModalWebViewBase.PlayerState.READY;
      }
      if (tmp7) {
        const current = ref.current;
        current.injectJavaScript("window.player.playVideo();  true;");
      }
      let tmp15 = visible;
      if (visible) {
        tmp15 = !closure_5;
      }
      if (tmp15) {
        const current2 = ref.current;
        current2.injectJavaScript("window.player.playVideo();  true;");
      }
      let tmp18 = !visible;
      if (!visible) {
        tmp18 = closure_5;
      }
      if (tmp18) {
        const current3 = ref.current;
        current3.injectJavaScript("window.player.pauseVideo(); true;");
      }
    }
  }, items);
  closure_129_0 = ref;
  closure_129_1 = playerState;
  closure_129_2 = visible;
  closure_129_3 = noop.useRef(null);
  const items1 = [ref, playerState, visible];
  const effect2 = noop.useEffect(() => {
    function handleAppStateChange() {
      if (state.getState() === ref.ACTIVE) {
        if (null != ref.current) {
          ref.current = null;
          if (ref.current) {
            const current = handleAppStateChange.current;
            if (current != null) {
              current.injectJavaScript("window.player.playVideo();  true;");
            }
          }
        }
      } else if (null == ref.current) {
        tmp.current = playerState === visible(dependencyMap[5]).PlayerState.PLAYING || playerState === visible(dependencyMap[5]).PlayerState.BUFFERING;
        const tmp6 = playerState === visible(dependencyMap[5]).PlayerState.PLAYING || playerState === visible(dependencyMap[5]).PlayerState.BUFFERING;
      }
    }
    if (dependencyMap) {
      state.addChangeListener(handleAppStateChange);
      return () => AppStateStore.removeChangeListener(handleAppStateChange);
    } else {
      ref.current = null;
    }
  }, items1);
  let youtubeVideoIdFromURI = visible(8839).getYoutubeVideoIdFromURI(source.uri);
  if (youtubeVideoIdFromURI == null) {
    youtubeVideoIdFromURI = tmp(8839).getYoutubeClipVideoIdFromURI(source.uri);
    const tmpResult = tmp(8839);
  }
  if (null == youtubeVideoIdFromURI) {
    return null;
  } else {
    if (playerState === tmp(8871).PlayerState.ERRORED) {
      if ("embed_not_allowed" === tmp5[0]) {
        let obj2 = { videoId: youtubeVideoIdFromURI.videoId };
        return jsx(tmp6(14784), { videoId: youtubeVideoIdFromURI.videoId });
      }
    }
    const isAndroidResult = tmp(1375).isAndroid();
    const obj3 = { ref, style, source: null, baseURL: null, playerState: null, onDataReceived: null, onToggleOverlay: null, javaScriptCanOpenWindowsAutomatically: true, domStorageEnabled: null, mixedContentMode: null, nestedScrollEnabled: null, onError: null, onLoad: null, onLoadStart: null, overScrollMode: null };
    let str2 = "";
    let str3 = "";
    const tmpResult2 = tmp(1375);
    if (null != youtubeVideoIdFromURI.start) {
      const _HermesInternal = HermesInternal;
      str3 = "'start': " + youtubeVideoIdFromURI.start + ",";
    }
    let combined = str2;
    if (null != youtubeVideoIdFromURI.clip) {
      const _HermesInternal2 = HermesInternal;
      combined = "'clip': '" + youtubeVideoIdFromURI.clip + "',";
    }
    if (null != youtubeVideoIdFromURI.clipt) {
      const _HermesInternal3 = HermesInternal;
      str2 = "'clipt': '" + youtubeVideoIdFromURI.clipt + "',";
    }
    const obj4 = { html: null, baseUrl: null };
    const _HermesInternal4 = HermesInternal;
    const _HermesInternal5 = HermesInternal;
    obj4.html = "\n<html>\n  <head>\n    <meta name=\"viewport\" content=\"initial-scale=1\">\n    <style>\n      * {\n        margin: 0;\n        padding: 0;\n        background-color: #000;\n      }\n    </style>\n    <script>" + "\nconst tag = document.createElement('script');\ntag.setAttribute('src', \"https://www.youtube.com/iframe_api\");\ndocument.head.appendChild(tag);\n\nfunction onYouTubeIframeAPIReady() {\n  window.player = new YT.Player('player', {\n    height:     '100%',\n    width:      '100%',\n    videoId:    '" + youtubeVideoIdFromURI.videoId + "',\n    playerVars: {\n      'playsinline': 1,\n      'fs': 0,\n      'pageType': " + closure_7 + ",\n      " + str2 + "\n      " + combined + "\n      " + str3 + "\n    },\n    events: {\n      'onReady': (e) => {\n        window.ReactNativeWebView.postMessage(\n          JSON.stringify({type: 'onReady', value: window.player.getPlayerState()})\n        );\n      },\n      'onError': (e) => {\n        window.ReactNativeWebView.postMessage(\n          JSON.stringify({type: 'onError', value: e.data})\n        );\n      },\n      'onStateChange': (e) => {\n        window.ReactNativeWebView.postMessage(\n          JSON.stringify({type: 'onStateChange', value: e.data})\n        );\n      }\n    }\n  });\n}\n" + "</script>\n  </head>\n  <body>\n    <div id=\"player\"></div>\n  </body>\n</html>\n";
    obj4.baseUrl = baseURL;
    obj3.source = obj4;
    obj3.baseURL = baseURL;
    obj3.playerState = playerState;
    obj3.onDataReceived = callback;
    obj3.onToggleOverlay = onToggleOverlay;
    obj3.domStorageEnabled = isAndroidResult || undefined;
    let str19;
    if (isAndroidResult) {
      str19 = "compatibility";
    }
    obj3.mixedContentMode = str19;
    obj3.nestedScrollEnabled = isAndroidResult || undefined;
    obj3.onError = onError;
    obj3.onLoad = onLoad;
    obj3.onLoadStart = onLoadStart;
    let str20;
    if (isAndroidResult) {
      str20 = "never";
    }
    obj3.overScrollMode = str20;
    return jsx(tmp6(8871), { ref, style, source: null, baseURL: null, playerState: null, onDataReceived: null, onToggleOverlay: null, javaScriptCanOpenWindowsAutomatically: true, domStorageEnabled: null, mixedContentMode: null, nestedScrollEnabled: null, onError: null, onLoad: null, onLoadStart: null, overScrollMode: null }, youtubeVideoIdFromURI.videoId);
  }
  let obj = visible(8839);
});