// === Module 14784: MediaModalYoutubeEmbedError ===

// Module 14784 (MediaModalYoutubeEmbedError)
import nativeDefault from "native" /* 575 */;
import LinkingDefault from "Linking" /* 5709 */;
import noop from "module_19" /* 19 */;

const require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5014);
let obj = { container: { backgroundColor: nativeDefault.colors.VOICE_VIDEO_VIDEO_TILE_BACKGROUND, padding: nativeDefault.space.PX_32, justifyContent: "center", alignItems: "center", flex: 1 }, text: null };
let obj3 = { backgroundColor: nativeDefault.colors.VOICE_VIDEO_VIDEO_TILE_BACKGROUND, padding: nativeDefault.space.PX_32, justifyContent: "center", alignItems: "center", flex: 1 };
obj.text = { marginBottom: nativeDefault.space.PX_8, textAlign: "center" };
let closure_6 = createStyles.createStyles(obj);
const obj4 = { marginBottom: nativeDefault.space.PX_8, textAlign: "center" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/media_viewer/native/components/renderers/MediaModalYoutubeEmbedError.tsx");

export default noop.memo(function MediaModalYoutubeEmbedError(videoId) {
  videoId = videoId.videoId;
  const tmp = closure_6();
  const obj = { style: tmp.container, children: null };
  const obj2 = { style: tmp.text, variant: "text-md/semibold", color: "text-overlay-light", children: null };
  const intl = videoId(1113).intl;
  obj2.children = intl.string(videoId(1113).t.u7vKPs);
  const items = [closure_4(videoId(5624).Text, obj2), ];
  const obj3 = { text: null, variant: "secondary", size: "md", shrink: true, grow: false, onPress: null };
  const intl2 = videoId(1113).intl;
  obj3.text = intl2.string(videoId(1113).t.LLpxJ5);
  obj3.onPress = function onPress() {
    LinkingDefault.openURL("https://youtube.com/watch?v=" + videoId);
  };
  items[1] = closure_4(videoId(5634).Button, obj3);
  obj.children = items;
  return closure_5(View, obj);
});