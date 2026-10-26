// === Module 14228: MediaModalWebEmbed ===

// Module 14228 (MediaModalWebEmbed)
import c from "c" /* 576 */;
import URLUtilsDefault from "URLUtils" /* 1386 */;
import MediaModalWebViewBase from "MediaModalWebViewBase" /* 8788 */;
import escapeDefault from "escape" /* 14229 */;
import EmbedIFrameConfig from "EmbedIFrameConfig" /* 14232 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const MediaModalWebViewBaseDefault = MediaModalWebViewBase;

require = fn;
let closure_3 = ["visible", "source", "provider"];
const jsx = fn(21).jsx;
let closure_8 = "https:" + window.GLOBAL_ENV.WEBAPP_ENDPOINT;
let ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? (function WebEmbed(arg0) {
  const cResult = onLoad(576).c(15);
  ({ src, style, onError, onLoad } = arg0);
  ({ onLoadStart, onToggleOverlay } = arg0);
  const obj = onLoad(576);
  [tmp5, importDefault] = noop.useState(onLoad(8788).PlayerState.UNREADY);
  if (cResult[0] !== onLoad) {
    const fn = function t() {
      importDefault(MediaModalWebViewBase.PlayerState.PLAYING);
      if (onLoad != null) {
        onLoad();
      }
    };
    cResult[0] = onLoad;
    cResult[1] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    class M {
      constructor() {
        return;
      }
    }
    cResult[2] = M;
  } else {
    class M {
      constructor() {
        return;
      }
    }
  }
  if (cResult[3] !== src) {
    class M {
      constructor() {
        return;
      }
    }
    const tmp9 = escapeDefault(src);
    const _HermesInternal = HermesInternal;
    const combined = "\n<html>\n  <head>\n    <meta name=\"viewport\" content=\"initial-scale=1\">\n    <style>\n      * {\n        margin: 0;\n        padding: 0;\n        background-color: #000;\n      }\n      iframe {\n        width: 100%;\n        height: 100%;\n        border: 0;\n      }\n    </style>\n  </head>\n  <body>\n    <iframe src=\"" + tmp9 + "\" allow=\"autoplay\" sandbox=\"" + onLoad(14232).EMBED_IFRAME_SANDBOX + "\" scrolling=\"no\"></iframe>\n  </body>\n</html>\n";
    cResult[3] = src;
    cResult[4] = combined;
  } else {
    class M {
      constructor() {
        return;
      }
    }
  }
  if (cResult[5] !== tmp8) {
    class M {
      constructor() {
        return;
      }
    }
    tmp13[0] = tmp8;
    tmp13[1] = baseURL;
    cResult[5] = tmp8;
    cResult[6] = tmp13;
  } else {
    class M {
      constructor() {
        return;
      }
    }
  }
  if (cResult[7] === tmp6) {
    class M {
      constructor() {
        return;
      }
    }
  }
  const obj2 = { style, source: tmp13, baseURL, playerState: tmp5, onDataReceived: M, onToggleOverlay, onError, onLoad: tmp6, onLoadStart };
  const tmp4 = _slicedToArray(noop.useState(onLoad(8788).PlayerState.UNREADY), 2);
  cResult[7] = tmp6;
  cResult[8] = onError;
  cResult[9] = onLoadStart;
  cResult[10] = onToggleOverlay;
  cResult[11] = tmp5;
  cResult[12] = style;
  cResult[13] = tmp13;
  cResult[14] = jsx(MediaModalWebViewBaseDefault, { style, source: tmp13, baseURL, playerState: tmp5, onDataReceived: M, onToggleOverlay, onError, onLoad: tmp6, onLoadStart });
  const tmp15 = jsx(MediaModalWebViewBaseDefault, { style, source: tmp13, baseURL, playerState: tmp5, onDataReceived: M, onToggleOverlay, onError, onLoad: tmp6, onLoadStart });
}) : (function WebEmbed(onLoad) {
  onLoad = onLoad.onLoad;
  importDefault = undefined;
  ({ src, style, onError, onLoadStart, onToggleOverlay } = onLoad);
  [obj.playerState, importDefault] = noop.useState(onLoad(8788).PlayerState.UNREADY);
  const items = [onLoad];
  const callback = noop.useCallback(() => {
    closure_1(MediaModalWebViewBase.PlayerState.PLAYING);
    if (onLoad != null) {
      onLoad();
    }
  }, items);
  const callback1 = noop.useCallback(() => {

  }, []);
  const obj = { style, source: null, baseURL: null, playerState: null, onDataReceived: null, onToggleOverlay: null, onError: null, onLoad: null, onLoadStart: null };
  const obj2 = { html: null, baseUrl: null };
  obj2.html = "\n<html>\n  <head>\n    <meta name=\"viewport\" content=\"initial-scale=1\">\n    <style>\n      * {\n        margin: 0;\n        padding: 0;\n        background-color: #000;\n      }\n      iframe {\n        width: 100%;\n        height: 100%;\n        border: 0;\n      }\n    </style>\n  </head>\n  <body>\n    <iframe src=\"" + escapeDefault(src) + "\" allow=\"autoplay\" sandbox=\"" + onLoad(14232).EMBED_IFRAME_SANDBOX + "\" scrolling=\"no\"></iframe>\n  </body>\n</html>\n";
  obj2.baseUrl = baseURL;
  obj.source = obj2;
  obj.baseURL = baseURL;
  obj.onDataReceived = callback1;
  obj.onToggleOverlay = onToggleOverlay;
  obj.onError = onError;
  obj.onLoad = callback;
  obj.onLoadStart = onLoadStart;
  return <tmp4 style={style} source={null} baseURL={null} playerState={null} onDataReceived={null} onToggleOverlay={null} onError={null} onLoad={null} onLoadStart={null} />;
});
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/media_viewer/native/components/renderers/MediaModalWebEmbed.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function MediaModalWebEmbed(arg0) {
  const cResult = c.c(15);
  if (cResult[0] !== arg0) {
    ({ visible, source, provider } = arg0);
    const tmp10 = _objectWithoutProperties(arg0, closure_3);
    cResult[0] = arg0;
    cResult[1] = tmp10;
    cResult[2] = provider;
    cResult[3] = source;
    cResult[4] = visible;
    let tmp7 = visible;
    let tmp6 = source;
    let tmp5 = provider;
    let tmp4 = tmp10;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    tmp6 = cResult[3];
    tmp7 = cResult[4];
  }
  if (cResult[5] === tmp5) {
    if (cResult[6] === tmp6.uri) {
      if (cResult[7] === tmp7) {
        let tmp11 = cResult[8];
        let tmp12 = cResult[9];
        let tmp13 = cResult[10];
      }
      const _Symbol = Symbol;
      if (tmp13 !== Symbol.for("react.early_return_sentinel")) {
        return tmp13;
      } else {
        if (cResult[11] === tmp11) {
          if (cResult[12] === tmp4) {
          }
        }
        const obj3 = { src: tmp12 };
        const merged = Object.assign(tmp4);
        const tmp24 = <tmp11 src={tmp12} />;
        cResult[11] = tmp11;
        cResult[12] = tmp4;
        cResult[13] = tmp12;
        cResult[14] = tmp24;
      }
    }
  }
  const forResult = Symbol.for("react.early_return_sentinel");
  const obj2 = URLUtilsDefault;
  const str = obj2.toURLSafe(EmbedIFrameConfig.formatProviderSrc(tmp6.uri, tmp5, { autoMute: false }));
  let tmp15 = null;
  let str1;
  let tmp17;
  if (null != str) {
    tmp15 = null;
    if ("https:" === str.protocol) {
      tmp15 = null;
      if (tmp7) {
        tmp17 = closure_9;
        str1 = str.toString();
        tmp15 = forResult;
      }
    }
  }
  cResult[5] = tmp5;
  cResult[6] = tmp6.uri;
  cResult[7] = tmp7;
  cResult[8] = tmp17;
  cResult[9] = str1;
  cResult[10] = tmp15;
  tmp13 = tmp15;
  tmp12 = str1;
  tmp11 = tmp17;
  const tmpResult = EmbedIFrameConfig;
}) : (function MediaModalWebEmbed(arg0) {
  ({ visible, source, provider } = arg0);
  const merged = Object.assign(arg0, Object.assign({ visible: 0, source: 0, provider: 0 }));
  const obj = URLUtilsDefault;
  const str = obj.toURLSafe(EmbedIFrameConfig.formatProviderSrc(source.uri, provider, { autoMute: false }));
  let tmp2 = null;
  if (null != str) {
    tmp2 = null;
    if ("https:" === str.protocol) {
      let tmp3 = null;
      if (visible) {
        const obj3 = { src: str.toString() };
        const merged1 = Object.assign(merged);
        tmp3 = <closure_9 src={str.toString()} />;
      }
      tmp2 = tmp3;
    }
  }
  return tmp2;
}));