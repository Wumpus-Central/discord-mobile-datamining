// discord_app/modules/media_viewer/native/components/MediaModalYoutube.tsx
import _slicedToArray from "_slicedToArray";
import importAllResult from "noop";
import { YOUTUBE_EMBED_PAGE_TYPE } from "ME";
import { jsx } from "jsxProd";

const require = arg1;
let c4 = importAllResult;
let closure_7 = "https:" + window.GLOBAL_ENV.WEBAPP_ENDPOINT;
const memoResult = importAllResult.memo((visible) => {
  visible = visible.visible;
  const source = visible.source;
  const merged = Object.assign(visible, Object.create(null));
  let first;
  let dependencyMap;
  let callback;
  let importAllResult;
  let c5;
  let ref;
  let tmp4 = callback(importAllResult.useState(visible(9016).PlayerState.UNREADY), 2);
  first = tmp4[0];
  dependencyMap = tmp4[1];
  const tmp6 = callback(importAllResult.useState(undefined), 2);
  callback = tmp6[1];
  const tmp8 = first(6701)(first);
  importAllResult = tmp8;
  const tmp9 = first(6701)(visible);
  c5 = tmp9;
  ref = importAllResult.useRef(null);
  const effect = importAllResult.useEffect(() => {
    const MediaViewerAnalytics = visible(8996).MediaViewerAnalytics;
    const result = MediaViewerAnalytics.trackMessageEmbedsActionCompleted({ platform: "youtube", action: "attempted" });
  }, []);
  const items = [ref, visible, tmp9, tmp8, first];
  callback = importAllResult.useCallback((arg0) => {
    let type;
    let value;
    const parsed = JSON.parse(arg0);
    ({ type, value } = parsed);
    if ("onReady" === type) {
      if ("-1" === value) {
        let READY = visible(9016).PlayerState.ERRORED;
      } else {
        READY = visible(9016).PlayerState.READY;
      }
      dependencyMap(READY);
      const tmp17 = dependencyMap;
    } else if ("onError" === type) {
      let str = value;
      if (typeof value === "number") {
        str = value.toString();
      }
      str = "2";
      if ("2" === str) {
        let str6 = "invalid_parameter";
      } else if ("5" === str) {
        str6 = "html5_error";
      } else if ("100" === str) {
        str6 = "video_not_found";
      } else {
        str6 = "embed_not_allowed";
        if ("101" !== str) {
          str6 = "embed_not_allowed";
          if ("150" !== str) {
            str6 = "unknown";
          }
        }
      }
      dependencyMap(visible(9016).PlayerState.ERRORED);
      callback(str6);
      const MediaViewerAnalytics = visible(8996).MediaViewerAnalytics;
      let obj = { platform: "youtube", action: "errored", error: null };
      obj[2] = str6;
      const result = MediaViewerAnalytics.trackMessageEmbedsActionCompleted(obj);
    } else if ("onStateChange" === type) {
      obj = { "-1": null, 0: null, 1: null, 2: null, 3: null, 5: null };
      obj[0] = visible(9016).PlayerState.UNSTARTED;
      obj[0] = visible(9016).PlayerState.ENDED;
      obj[1] = visible(9016).PlayerState.PLAYING;
      obj[2] = visible(9016).PlayerState.PAUSED;
      obj[3] = visible(9016).PlayerState.BUFFERING;
      obj[5] = visible(9016).PlayerState.VIDEO_CUED;
      let tmp4 = null != tmp35;
      if (tmp4) {
        tmp4 = tmp35 in visible(9016).PlayerState;
      }
      if (tmp4) {
        dependencyMap(tmp35);
      }
    }
  }, []);
  const effect1 = importAllResult.useEffect(() => {
    let tmp2 = null != ref.current;
    if (tmp2) {
      tmp2 = first !== visible(9016).PlayerState.UNREADY;
    }
    if (tmp2) {
      let tmp7 = visible;
      if (visible) {
        tmp7 = c4 === visible(9016).PlayerState.UNREADY;
      }
      if (tmp7) {
        tmp7 = first === visible(9016).PlayerState.READY;
      }
      if (tmp7) {
        const current = tmp.current;
        current.injectJavaScript("window.player.playVideo();  true;");
      }
      let tmp15 = tmp6;
      if (visible) {
        tmp15 = !c5;
      }
      if (tmp15) {
        const current2 = tmp.current;
        current2.injectJavaScript("window.player.playVideo();  true;");
      }
      let tmp18 = !tmp6;
      if (!visible) {
        tmp18 = c5;
      }
      if (tmp18) {
        const current3 = tmp.current;
        current3.injectJavaScript("window.player.pauseVideo(); true;");
      }
    }
  }, items);
  let obj = visible(8994);
  let youtubeVideoIdFromURI = obj.getYoutubeVideoIdFromURI(source.uri);
  if (youtubeVideoIdFromURI == null) {
    let tmp2Result = tmp2(8994);
    youtubeVideoIdFromURI = tmp2Result.getYoutubeClipVideoIdFromURI(source.uri);
  }
  if (null == youtubeVideoIdFromURI) {
    return null;
  } else {
    if (first === tmp2(9016).PlayerState.ERRORED) {
      if ("embed_not_allowed" === tmp6[0]) {
        obj = { videoId: null };
        obj[0] = youtubeVideoIdFromURI.videoId;
        return ref(tmp7(12070), obj);
      }
    }
    tmp2Result = tmp2(500);
    let tmp15 = tmp2Result.isAndroid() ? { nestedScrollEnabled: true, overScrollMode: "never", domStorageEnabled: true, mixedContentMode: "compatibility" } : {};
    obj = { ref: null, style: null, source: null, baseURL: null, playerState: null, onDataReceived: null, javaScriptEnabled: true, javaScriptCanOpenWindowsAutomatically: true };
    obj[0] = ref;
    obj[1] = visible.style;
    let str2 = "";
    let str3 = "";
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
    const obj1 = { html: null, baseUrl: null };
    const _HermesInternal4 = HermesInternal;
    const _HermesInternal5 = HermesInternal;
    obj1[0] = "\n<html>\n  <head>\n    <meta name=\"viewport\" content=\"initial-scale=1\">\n    <style>\n      * {\n        margin: 0;\n        padding: 0;\n        background-color: #000;\n      }\n    </style>\n    <script>" + "\nconst tag = document.createElement('script');\ntag.setAttribute('src', \"https://www.youtube.com/iframe_api\");\ndocument.head.appendChild(tag);\n\nfunction onYouTubeIframeAPIReady() {\n  window.player = new YT.Player('player', {\n    height:     '100%',\n    width:      '100%',\n    videoId:    '" + youtubeVideoIdFromURI.videoId + "',\n    playerVars: {\n      'playsinline': 1,\n      'fs': 0,\n      'pageType': " + c5 + ",\n      " + str2 + "\n      " + combined + "\n      " + str3 + "\n    },\n    events: {\n      'onReady': (e) => {\n        window.ReactNativeWebView.postMessage(\n          JSON.stringify({type: 'onReady', value: window.player.getPlayerState()})\n        );\n      },\n      'onError': (e) => {\n        window.ReactNativeWebView.postMessage(\n          JSON.stringify({type: 'onError', value: e.data})\n        );\n      },\n      'onStateChange': (e) => {\n        window.ReactNativeWebView.postMessage(\n          JSON.stringify({type: 'onStateChange', value: e.data})\n        );\n      }\n    }\n  });\n}\n" + "</script>\n  </head>\n  <body>\n    <div id=\"player\"></div>\n  </body>\n</html>\n";
    obj1[1] = closure_7;
    obj[2] = obj1;
    obj[3] = closure_7;
    obj[4] = first;
    obj[5] = callback;
    const merged1 = Object.assign(tmp15);
    const merged2 = Object.assign(merged);
    return ref(tmp7(9016), obj, youtubeVideoIdFromURI.videoId);
  }
});
let result = require("ME").fileFinishedImporting("modules/media_viewer/native/components/MediaModalYoutube.tsx");

export default memoResult;