// === Module 12977: MediaModalYoutubeEmbedError ===

// Module 12977 (MediaModalYoutubeEmbedError)
import nativeDefault from "native" /* 576 */;
import LinkingDefault from "Linking" /* 4255 */;
import noop from "module_19" /* 19 */;

const require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
fn(4560);
let obj = { container: null, text: null };
obj = { backgroundColor: nativeDefault.colors.VOICE_VIDEO_VIDEO_TILE_BACKGROUND, padding: nativeDefault.space.PX_32, justifyContent: "center", alignItems: "center", flex: 1 };
obj.container = obj;
const createStyles = { marginBottom: nativeDefault.space.PX_8, marginTop: nativeDefault.space.PX_16 };
obj.text = createStyles;
let closure_6 = createStyles.createStyles(obj);
const size = fn(2);
const result = size.fileFinishedImporting("modules/media_viewer/native/components/MediaModalYoutubeEmbedError.tsx");

export default noop.memo(function MediaModalYoutubeEmbedError(videoId) {
  videoId = videoId.videoId;
  const tmp = closure_6();
  let obj = { style: tmp.container, children: null };
  const items = [closure_4(videoId(9601).StreamFailed, { resizeMode: "contain" }), , ];
  obj = { style: tmp.text, variant: "text-md/semibold", color: "text-overlay-light", children: null };
  const intl = videoId(1114).intl;
  obj.children = intl.string(videoId(1114).t.u7vKPs);
  items[1] = closure_4(videoId(4556).Text, obj);
  obj = { text: null, variant: "primary-overlay", shrink: true, grow: false, onPress: null };
  const intl2 = videoId(1114).intl;
  obj.text = intl2.string(videoId(1114).t.LLpxJ5);
  obj.onPress = function onPress() {
    LinkingDefault.openURL("https://youtube.com/watch?v=" + videoId);
  };
  items[2] = closure_4(videoId(4975).Button, obj);
  obj.children = items;
  return closure_5(View, obj);
});