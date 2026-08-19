// discord_app/modules/media_viewer/native/components/MediaModalYoutubeEmbedError.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef4090 from "../../../../lib/native/Linking.tsx";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";
import importAllResult from "../../../../../_runtime/00019_noop.js";

const require = fn;
({ jsx: c4, jsxs: c5 } = jsxProd);
let obj = { backgroundColor: ThemesDefault.colors.VOICE_VIDEO_VIDEO_TILE_BACKGROUND, padding: ThemesDefault.space.PX_32, justifyContent: "center", alignItems: "center", flex: 1 };
obj[0] = obj;
const createCacheKey = { marginBottom: ThemesDefault.space.PX_8, marginTop: ThemesDefault.space.PX_16 };
obj[1] = createCacheKey;
let closure_6 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo(function MediaModalYoutubeEmbedError(videoId) {
  videoId = videoId.videoId;
  const tmp = callback3();
  const items = [callback(videoId(12071).StreamFailed, { resizeMode: "contain" }), , ];
  let obj = { style: tmp.text, variant: "text-md/semibold", color: "text-overlay-light", children: null };
  const intl = videoId(1236).intl;
  obj[3] = intl.string(videoId(1236).t.u7vKPs);
  items[1] = callback(videoId(4734).Text, obj);
  obj = { text: null, variant: "primary-overlay", shrink: true, grow: false, onPress: null };
  const intl2 = videoId(1236).intl;
  obj[0] = intl2.string(videoId(1236).t.LLpxJ5);
  obj[4] = function onPress() {
    _modDef4090.openURL("https://youtube.com/watch?v=" + videoId);
  };
  items[2] = callback(videoId(4745).Button, obj);
  obj[1] = items;
  return callback2(View, obj);
});
const result = require("obj132").fileFinishedImporting("modules/media_viewer/native/components/MediaModalYoutubeEmbedError.tsx");

export default memoResult;