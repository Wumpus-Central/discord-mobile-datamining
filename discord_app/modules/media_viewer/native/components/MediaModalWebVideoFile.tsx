// === Module 8476: createWebFileVideoControls ===

// Module 8476 (createWebFileVideoControls)
import _slicedToArray from "_slicedToArray";
import importAllResult from "noop";
import { jsx } from "jsxProd";

const require = arg1;
let c4 = importAllResult;
let closure_6 = "https:" + window.GLOBAL_ENV.WEBAPP_ENDPOINT;
const memoResult = importAllResult.memo((style) => {
  let controls;
  let source;
  const visible = style.visible;
  ({ source, controls } = style);
  const merged = Object.assign(style, Object.create(null));
  let first;
  let callback;
  let importAllResult;
  let jsx;
  let ref;
  let mediaPlayerMutedStore;
  let obj = importAllResult;
  const tmp4 = callback(importAllResult.useState(visible(first[3]).PlayerState.UNREADY), 2);
  first = tmp4[0];
  callback = tmp4[1];
  const tmp7 = controls(first[4])(first);
  importAllResult = tmp7;
  const tmp8 = controls(first[4])(visible);
  jsx = tmp8;
  ref = undefined;
  if (controls != null) {
    let props = controls.props;
    if (props != null) {
      ref = props.ref;
    }
  }
  const effect = obj.useEffect(() => {
    const MediaViewerAnalytics = visible(first[5]).MediaViewerAnalytics;
    const result = MediaViewerAnalytics.trackMessageEmbedsActionCompleted({ platform: "file", action: "attempted" });
  }, []);
  props = undefined;
  if (controls != null) {
    props = controls.props;
  }
  const items = [props];
  callback = obj.useCallback((arg0) => {
    if (null != tmp) {
      if (controls != null) {
        const props = controls.props;
        if (props != null) {
          const onCurrentSecond = props.onCurrentSecond;
          if (onCurrentSecond != null) {
            onCurrentSecond(tmp);
          }
        }
      }
    }
  }, items);
  mediaPlayerMutedStore = visible(first[6]).useMediaPlayerMutedStore((isMuted) => isMuted.isMuted);
  const items1 = [ref, visible, tmp8, tmp7, first, mediaPlayerMutedStore];
  const effect1 = obj.useEffect(() => {
    let current;
    if (ref != null) {
      current = tmp.current;
    }
    let tmp3 = null != current;
    if (tmp3) {
      tmp3 = first !== visible(first[3]).PlayerState.UNREADY;
    }
    if (tmp3) {
      current = tmp.current;
      const _JSON = JSON;
      const _HermesInternal = HermesInternal;
      current.injectJavaScript("window.player.muted = " + JSON.stringify(mediaPlayerMutedStore) + "; true;");
      let tmp11 = visible;
      if (visible) {
        tmp11 = c4 === visible(first[3]).PlayerState.UNREADY;
      }
      if (tmp11) {
        tmp11 = first === visible(first[3]).PlayerState.READY;
      }
      if (tmp11) {
        const current2 = tmp.current;
        current2.injectJavaScript("window.player.play();  true;");
      }
      let tmp19 = tmp10;
      if (visible) {
        tmp19 = !c5;
      }
      if (tmp19) {
        const current3 = tmp.current;
        current3.injectJavaScript("window.player.play();  true;");
      }
      let tmp22 = !tmp10;
      if (!visible) {
        tmp22 = c5;
      }
      if (tmp22) {
        const current4 = tmp.current;
        current4.injectJavaScript("window.player.pause(); true;");
      }
    }
  }, items1);
  const combined = "\n<html>\n  <head>\n    <meta name=\"viewport\" content=\"initial-scale=1\">\n    <style>\n      * {\n        margin: 0;\n        padding: 0;\n        inset: 0;\n        width: 100%;\n        height: 100%;\n        background-color: #000;\n        object-fit: contain;\n      }\n    </style>\n    <script>" + "\nfunction onReady() {\n  const player = window.player = document.createElement('video');\n  player.controls = false;\n  player.autoplay = false;\n  player.playsInline = true;\n  player.disablePictureInPicture = true;\n  const addEvent = (name, func) => {\n    player.addEventListener(name, (e) => {\n      window.ReactNativeWebView.postMessage(\n        JSON.stringify({type: name, value: func ? func() : undefined})\n      );\n    });\n  };\n  addEvent('error', () => player.error);\n  addEvent('canplay');\n  addEvent('ended');\n  addEvent('pause');\n  addEvent('play');\n  addEvent('stalled');\n  addEvent('durationchange', () => player.duration);\n  addEvent('timeupdate', () => player.currentTime);\n  addEvent('progress', () => {\n    const ranges = player.buffered;\n    let total = 0;\n    for (let i = 0; i < ranges.length; i++) {\n      total += (ranges.end(i) - ranges.start(i));\n    }\n    return total;\n  });\n  player.src = " + JSON.stringify(source.uri) + ";\n  document.body.appendChild(player);\n  player.load();\n  window.ReactNativeWebView.postMessage(JSON.stringify({type: 'loaded'}));\n}\nwindow.addEventListener('load', onReady);\n" + "</script>\n  </head>\n  <body>\n  </body>\n</html>\n";
  obj = { ref, style: style.style, source: obj, baseURL: ref, playerState: first, onDataReceived: callback, javaScriptEnabled: true, javaScriptCanOpenWindowsAutomatically: true };
  obj = { html: combined, baseUrl: ref };
  const tmp2 = visible;
  const tmp2Result = visible(first[6]);
  const tmp6 = controls;
  const merged1 = Object.assign(merged);
  return jsx(controls(first[3]), { html: combined, baseUrl: ref }, source.uri);
});
let result = require("jsxProd").fileFinishedImporting("modules/media_viewer/native/components/MediaModalWebVideoFile.tsx");

export default memoResult;
export const createWebFileVideoControls = function createWebFileVideoControls() {
  const ref = importAllResult.createRef();
  let c5 = 0;
  let c6 = 0;
  obj = {
    seek(arg0) {
      const current = ref.current;
      if (current != null) {
        const _JSON = JSON;
        const _HermesInternal = HermesInternal;
        current.injectJavaScript("window.player.currentTime = " + JSON.stringify(arg0) + "; true;");
      }
    },
    pause(arg0) {
      const current = ref.current;
      if (current != null) {
        let str = "play";
        if (arg0) {
          str = "pause";
        }
        const _HermesInternal = HermesInternal;
        current.injectJavaScript("window.player." + str + "(); true;");
      }
    },
    useSubscribe(arg0, arg1, arg2) {
      let closure_0 = arg0;
      let closure_1 = arg1;
      let closure_2 = arg2;
      const layoutEffect = React.useLayoutEffect(() => {
        if (closure_0 != null) {
          tmp(closure_4, closure_5);
        }
      }, []);
    },
    props: obj
  };
  obj = {
    ref,
    onPlayerStateChange(arg0) {
      if (closure_1 != null) {
        tmp(arg0 === outer1_0(outer1_2[3]).PlayerState.PAUSED || arg0 === outer1_0(outer1_2[3]).PlayerState.ENDED);
        const tmp3 = outer1_0;
        const tmp4 = outer1_2;
        const tmp5 = arg0 === outer1_0(outer1_2[3]).PlayerState.PAUSED || arg0 === outer1_0(outer1_2[3]).PlayerState.ENDED;
      }
    },
    onCurrentSecond(arg0) {
      let closure_4 = arg0;
      if (closure_0 != null) {
        tmp(closure_4, c5);
      }
    },
    onDuration(arg0) {
      let closure_5 = arg0;
      if (closure_0 != null) {
        tmp(c4, closure_5);
      }
      if (closure_5 > 0) {
        if (closure_2 != null) {
          tmp8(tmp7);
        }
      }
    },
    onDownloadProgress(arg0) {
      let closure_6 = arg0;
      if (c5 > 0) {
        if (closure_2 != null) {
          tmp4(tmp3);
        }
      }
    }
  };
  return obj;
};