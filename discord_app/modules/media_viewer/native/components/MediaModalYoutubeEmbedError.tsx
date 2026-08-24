// === Module 12122: ? ===

// Module 12122
import ThemesDefault from "Themes" /* 712 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4668 */;
import importAllResult from "noop" /* 19 */;

const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
let obj = { container: null, text: null };
obj = { backgroundColor: ThemesDefault.colors.VOICE_VIDEO_VIDEO_TILE_BACKGROUND, padding: ThemesDefault.space.PX_32, justifyContent: "center", alignItems: "center", flex: 1 };
obj[0] = obj;
createCacheKey = { marginBottom: ThemesDefault.space.PX_8, marginTop: ThemesDefault.space.PX_16 };
obj[1] = createCacheKey;
let closure_6 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo(function MediaModalYoutubeEmbedError(videoId) {
  videoId = videoId.videoId;
  const tmp = callback3();
  let obj = { style: tmp.container, children: null };
  const items = [callback(videoId(12123).StreamFailed, { resizeMode: "contain" }), , ];
  obj = { style: tmp.text, variant: "text-md/semibold", color: "text-overlay-light", children: null };
  const intl = videoId(1236).intl;
  obj[3] = intl.string(videoId(1236).t.u7vKPs);
  items[1] = callback(videoId(4739).Text, obj);
  obj = { text: null, variant: "primary-overlay", shrink: true, grow: false, onPress: null };
  const intl2 = videoId(1236).intl;
  obj[0] = intl2.string(videoId(1236).t.LLpxJ5);
  obj[4] = function onPress() {
    closure_1_1(closure_1_2[9]).openURL("https://youtube.com/watch?v=" + videoId);
  };
  items[2] = callback(videoId(4750).Button, obj);
  obj[1] = items;
  return callback2(View, obj);
});
const result = require("set").fileFinishedImporting("modules/media_viewer/native/components/MediaModalYoutubeEmbedError.tsx");

export default memoResult;