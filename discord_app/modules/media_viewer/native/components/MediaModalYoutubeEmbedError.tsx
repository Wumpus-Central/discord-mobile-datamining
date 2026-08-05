// discord_app/modules/media_viewer/native/components/MediaModalYoutubeEmbedError.tsx
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import importAllResult from "noop";

let c4;
let c5;
const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
let obj = { container: null, text: null };
obj = { backgroundColor: require("Themes").colors.VOICE_VIDEO_VIDEO_TILE_BACKGROUND, padding: require("Themes").space.PX_32, justifyContent: "center", alignItems: "center", flex: 1 };
obj[0] = obj;
createCacheKey = { marginBottom: require("Themes").space.PX_8, marginTop: require("Themes").space.PX_16 };
obj[1] = createCacheKey;
let closure_6 = createCacheKey.createStyles(obj);
const memoResult = require("noop").memo(function MediaModalYoutubeEmbedError(videoId) {
  videoId = videoId.videoId;
  const tmp = callback3();
  let obj = { style: tmp.container, children: null };
  const items = [callback(videoId(10599).StreamFailed, { resizeMode: "contain" }), , ];
  obj = { style: tmp.text, variant: "text-md/semibold", color: "text-overlay-light", children: null };
  const intl = videoId(1236).intl;
  obj[3] = intl.string(videoId(1236).t.u7vKPs);
  items[1] = callback(videoId(4281).Text, obj);
  obj = { text: null, variant: "primary-overlay", shrink: true, grow: false, onPress: null };
  const intl2 = videoId(1236).intl;
  obj[0] = intl2.string(videoId(1236).t.LLpxJ5);
  obj[4] = function onPress() {
    outer1_1(outer1_2[9]).openURL("https://youtube.com/watch?v=" + videoId);
  };
  items[2] = callback(videoId(4695).Button, obj);
  obj[1] = items;
  return callback2(View, obj);
});
const result = require("jsxProd").fileFinishedImporting("modules/media_viewer/native/components/MediaModalYoutubeEmbedError.tsx");

export default memoResult;