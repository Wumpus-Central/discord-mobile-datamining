// discord_app/modules/media_viewer/native/components/MediaModalYoutubeEmbedError.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";
import importAllResult from "../../../../../_runtime/00019_noop.js";

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
  const items = [callback(videoId(9509).StreamFailed, { resizeMode: "contain" }), , ];
  obj = { style: tmp.text, variant: "text-md/semibold", color: "text-overlay-light", children: null };
  const intl = videoId(1236).intl;
  obj[3] = intl.string(videoId(1236).t.u7vKPs);
  items[1] = callback(videoId(4442).Text, obj);
  obj = { text: null, variant: "primary-overlay", shrink: true, grow: false, onPress: null };
  const intl2 = videoId(1236).intl;
  obj[0] = intl2.string(videoId(1236).t.LLpxJ5);
  obj[4] = function onPress() {
    closure_1_1(closure_1_2[9]).openURL("https://youtube.com/watch?v=" + videoId);
  };
  items[2] = callback(videoId(4893).Button, obj);
  obj[1] = items;
  return callback2(View, obj);
});
const result = require("set").fileFinishedImporting("modules/media_viewer/native/components/MediaModalYoutubeEmbedError.tsx");

export default memoResult;