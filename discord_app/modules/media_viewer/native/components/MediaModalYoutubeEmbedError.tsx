// discord_app/modules/media_viewer/native/components/MediaModalYoutubeEmbedError.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import LinkingDefault from "../../../../lib/native/Linking.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4639);
let obj = {
  container: {
    backgroundColor: nativeDefault.colors.VOICE_VIDEO_VIDEO_TILE_BACKGROUND,
    padding: nativeDefault.space.PX_32,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  text: null,
};
let obj3 = {
  backgroundColor: nativeDefault.colors.VOICE_VIDEO_VIDEO_TILE_BACKGROUND,
  padding: nativeDefault.space.PX_32,
  justifyContent: "center",
  alignItems: "center",
  flex: 1,
};
obj.text = { marginBottom: nativeDefault.space.PX_8, marginTop: nativeDefault.space.PX_16 };
let closure_6 = createStyles.createStyles(obj);
const obj4 = { marginBottom: nativeDefault.space.PX_8, marginTop: nativeDefault.space.PX_16 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/media_viewer/native/components/MediaModalYoutubeEmbedError.tsx");

export default noop.memo(function MediaModalYoutubeEmbedError(videoId) {
  videoId = videoId.videoId;
  const tmp = closure_6();
  const obj = { style: tmp.container, children: null };
  const items = [closure_4(videoId(9733).StreamFailed, { resizeMode: "contain" }), ,];
  const obj2 = { style: tmp.text, variant: "text-md/semibold", color: "text-overlay-light", children: null };
  const intl = videoId(1115).intl;
  obj2.children = intl.string(videoId(1115).t.u7vKPs);
  items[1] = closure_4(videoId(4635).Text, obj2);
  const obj3 = { text: null, variant: "primary-overlay", shrink: true, grow: false, onPress: null };
  const intl2 = videoId(1115).intl;
  obj3.text = intl2.string(videoId(1115).t.LLpxJ5);
  obj3.onPress = function onPress() {
    LinkingDefault.openURL("https://youtube.com/watch?v=" + videoId);
  };
  items[2] = closure_4(videoId(5059).Button, obj3);
  obj.children = items;
  return closure_5(View, obj);
});
