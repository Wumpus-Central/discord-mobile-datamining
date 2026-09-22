// === Module 13274: MediaModalYoutube ===

// Module 13274 (MediaModalYoutube)
import MediaViewerAnalyticsManager from "MediaViewerAnalyticsManager" /* 8536 */;
import MediaModalWebView from "MediaModalWebView" /* 8572 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const YOUTUBE_EMBED_PAGE_TYPE = fn(1074).YOUTUBE_EMBED_PAGE_TYPE;
const jsx = fn(21).jsx;
let closure_7 = "https:" + window.GLOBAL_ENV.WEBAPP_ENDPOINT;
const size = fn(2);
let result = size.fileFinishedImporting("modules/media_viewer/native/components/MediaModalYoutube.tsx");

export default noop.memo((visible) => {
  visible = visible.visible;
  const source = visible.source;
  const merged = Object.assign(visible, Object.assign({ visible: 0, style: 0, source: 0 }));
  playerState = undefined;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  noop = undefined;
  [playerState, dependencyMap] = noop.useState(visible(8572).PlayerState.UNREADY);
  const tmp6 = _slicedToArray(noop.useState(undefined), 2);
  _slicedToArray = tmp6[1];
  const tmp8 = playerState(8547)(playerState);
  noop = tmp8;
  const tmp9 = playerState(8547)(visible);
  closure_5 = tmp9;
  const ref = noop.useRef(null);
  const effect = noop.useEffect(() => {
    const MediaViewerAnalytics = visible(8536).MediaViewerAnalytics;
    const result = MediaViewerAnalytics.trackMessageEmbedsActionCompleted({ platform: "youtube", action: "attempted" });
  }, []);
  const items = [ref, visible, tmp9, tmp8, playerState];
  const callback = noop.useCallback((arg0) => {
    const parsed = JSON.parse(arg0);
    ({ type, value } = parsed);
    if ("onReady" === type) {
      if ("-1" === value) {
        let READY = MediaModalWebView.PlayerState.ERRORED;
      } else {
        READY = MediaModalWebView.PlayerState.READY;
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
      dependencyMap(MediaModalWebView.PlayerState.ERRORED);
      closure_3(str6);
      const MediaViewerAnalytics = MediaViewerAnalyticsManager.MediaViewerAnalytics;
      const obj = { platform: "youtube", action: "errored", error: str6 };
      const result = MediaViewerAnalytics.trackMessageEmbedsActionCompleted(obj);
    } else if ("onStateChange" === type) {
      const obj2 = { "-1": null, 0: null, 1: null, 2: null, 3: null, 5: null };
      obj2[0] = MediaModalWebView.PlayerState.UNSTARTED;
      obj2[0] = MediaModalWebView.PlayerState.ENDED;
      obj2[1] = MediaModalWebView.PlayerState.PLAYING;
      obj2[2] = MediaModalWebView.PlayerState.PAUSED;
      obj2[3] = MediaModalWebView.PlayerState.BUFFERING;
      obj2[5] = MediaModalWebView.PlayerState.VIDEO_CUED;
      let tmp4 = null != tmp35;
      if (tmp4) {
        tmp4 = tmp35 in MediaModalWebView.PlayerState;
      }
      if (tmp4) {
        dependencyMap(tmp35);
      }
    }
  }, []);
  const effect1 = noop.useEffect(() => {
    let tmp2 = null != ref.current;
    if (tmp2) {
      tmp2 = first !== MediaModalWebView.PlayerState.UNREADY;
    }
    if (tmp2) {
      let tmp7 = visible;
      if (visible) {
        tmp7 = closure_4 === MediaModalWebView.PlayerState.UNREADY;
      }
      if (tmp7) {
        tmp7 = first === MediaModalWebView.PlayerState.READY;
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
  let youtubeVideoIdFromURI = visible(8540).getYoutubeVideoIdFromURI(source.uri);
  if (youtubeVideoIdFromURI == null) {
    youtubeVideoIdFromURI = tmp2(8540).getYoutubeClipVideoIdFromURI(source.uri);
    const tmp2Result = tmp2(8540);
  }
  if (null == youtubeVideoIdFromURI) {
    return null;
  } else {
    if (playerState === tmp2(8572).PlayerState.ERRORED) {
      if ("embed_not_allowed" === tmp6[0]) {
        let obj2 = { videoId: youtubeVideoIdFromURI.videoId };
        return ref(tmp7(13275), obj2);
      }
    }
    let tmp15 = tmp2(1364).isAndroid() ? { nestedScrollEnabled: true, overScrollMode: "never", domStorageEnabled: true, mixedContentMode: "compatibility" } : {};
    const obj3 = { ref, style: visible.style, source: null, baseURL: null, playerState: null, onDataReceived: null, javaScriptEnabled: true, javaScriptCanOpenWindowsAutomatically: true };
    let str2 = "";
    let str3 = "";
    const tmp16 = ref;
    const tmp2Result2 = tmp2(1364);
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
    obj4.html = "\n<html>\n  <head>\n    <meta name=\"viewport\" content=\"initial-scale=1\">\n    <style>\n      * {\n        margin: 0;\n        padding: 0;\n        background-color: #000;\n      }\n    </style>\n    <script>" + "\nconst tag = document.createElement('script');\ntag.setAttribute('src', \"https://www.youtube.com/iframe_api\");\ndocument.head.appendChild(tag);\n\nfunction onYouTubeIframeAPIReady() {\n  window.player = new YT.Player('player', {\n    height:     '100%',\n    width:      '100%',\n    videoId:    '" + youtubeVideoIdFromURI.videoId + "',\n    playerVars: {\n      'playsinline': 1,\n      'fs': 0,\n      'pageType': " + closure_5 + ",\n      " + str2 + "\n      " + combined + "\n      " + str3 + "\n    },\n    events: {\n      'onReady': (e) => {\n        window.ReactNativeWebView.postMessage(\n          JSON.stringify({type: 'onReady', value: window.player.getPlayerState()})\n        );\n      },\n      'onError': (e) => {\n        window.ReactNativeWebView.postMessage(\n          JSON.stringify({type: 'onError', value: e.data})\n        );\n      },\n      'onStateChange': (e) => {\n        window.ReactNativeWebView.postMessage(\n          JSON.stringify({type: 'onStateChange', value: e.data})\n        );\n      }\n    }\n  });\n}\n" + "</script>\n  </head>\n  <body>\n    <div id=\"player\"></div>\n  </body>\n</html>\n";
    obj4.baseUrl = baseURL;
    obj3.source = obj4;
    obj3.baseURL = baseURL;
    obj3.playerState = playerState;
    obj3.onDataReceived = callback;
    const merged1 = Object.assign(tmp15);
    const merged2 = Object.assign(merged);
    return tmp16(tmp7(8572), obj3, youtubeVideoIdFromURI.videoId);
  }
  let obj = visible(8540);
});