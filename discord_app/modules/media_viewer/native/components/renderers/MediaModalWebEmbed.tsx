// discord_app/modules/media_viewer/native/components/renderers/MediaModalWebEmbed.tsx
import URLUtilsDefault from "../../../../../utils/URLUtils.tsx";
import MediaModalWebViewBase from "MediaModalWebViewBase.tsx";
import escapeDefault from "../../../../../../_runtime/14748_escape.js";
import EmbedIFrameConfig from "../../../../chat/EmbedIFrameConfig.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
function WebEmbed(onLoad) {
  onLoad = onLoad.onLoad;
  importDefault = undefined;
  ({ src, style, onError, onLoadStart, onToggleOverlay } = onLoad);
  [obj.playerState, importDefault] = noop.useState(onLoad(8862).PlayerState.UNREADY);
  const items = [onLoad];
  const callback = noop.useCallback(() => {
    closure_1(MediaModalWebViewBase.PlayerState.PLAYING);
    if (onLoad != null) {
      onLoad();
    }
  }, items);
  const callback1 = noop.useCallback(() => {}, []);
  const obj = {
    style,
    source: null,
    baseURL: null,
    playerState: null,
    onDataReceived: null,
    onToggleOverlay: null,
    onError: null,
    onLoad: null,
    onLoadStart: null,
  };
  const obj2 = { html: null, baseUrl: null };
  obj2.html =
    '\n<html>\n  <head>\n    <meta name="viewport" content="initial-scale=1">\n    <style>\n      * {\n        margin: 0;\n        padding: 0;\n        background-color: #000;\n      }\n      iframe {\n        width: 100%;\n        height: 100%;\n        border: 0;\n      }\n    </style>\n  </head>\n  <body>\n    <iframe src="' +
    escapeDefault(src) +
    '" allow="autoplay" sandbox="' +
    onLoad(14751).EMBED_IFRAME_SANDBOX +
    '" scrolling="no"></iframe>\n  </body>\n</html>\n';
  obj2.baseUrl = baseURL;
  obj.source = obj2;
  obj.baseURL = baseURL;
  obj.onDataReceived = callback1;
  obj.onToggleOverlay = onToggleOverlay;
  obj.onError = onError;
  obj.onLoad = callback;
  obj.onLoadStart = onLoadStart;
  return (
    <tmp4
      style={style}
      source={null}
      baseURL={null}
      playerState={null}
      onDataReceived={null}
      onToggleOverlay={null}
      onError={null}
      onLoad={null}
      onLoadStart={null}
    />
  );
}
const jsx = fn(21).jsx;
let closure_6 = "https:" + window.GLOBAL_ENV.WEBAPP_ENDPOINT;
const size = fn(2);
const result = size.fileFinishedImporting("modules/media_viewer/native/components/renderers/MediaModalWebEmbed.tsx");

export default noop.memo(function MediaModalWebEmbed(arg0) {
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
        tmp3 = <WebEmbed src={str.toString()} />;
      }
      tmp2 = tmp3;
    }
  }
  return tmp2;
});
