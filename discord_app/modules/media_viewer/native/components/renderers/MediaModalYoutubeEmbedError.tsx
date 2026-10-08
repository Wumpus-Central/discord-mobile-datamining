// discord_app/modules/media_viewer/native/components/renderers/MediaModalYoutubeEmbedError.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import LinkingDefault from "../../../../../lib/native/Linking.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

const require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5090);
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
obj.text = { marginBottom: nativeDefault.space.PX_8, textAlign: "center" };
let closure_6 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
let obj4 = { marginBottom: nativeDefault.space.PX_8, textAlign: "center" };
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/media_viewer/native/components/renderers/MediaModalYoutubeEmbedError.tsx",
);

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function MediaModalYoutubeEmbedError(videoId) {
        const cResult = videoId(576).c(10);
        videoId = videoId.videoId;
        const tmp4 = closure_6();
        ({ container, text } = tmp4);
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = tmp(1126).intl;
          const stringResult = intl.string(tmp(1126).t.u7vKPs);
          cResult[0] = stringResult;
          let first = stringResult;
        } else {
          first = cResult[0];
        }
        if (cResult[1] !== tmp4.text) {
          const obj2 = { style: text, variant: "text-md/semibold", color: "text-overlay-light", children: first };
          const tmp9 = closure_4(tmp(5086).Text, obj2);
          cResult[1] = tmp4.text;
          cResult[2] = tmp9;
          let tmp7 = tmp9;
        } else {
          tmp7 = cResult[2];
        }
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const intl2 = tmp(1126).intl;
          const stringResult1 = intl2.string(tmp(1126).t.LLpxJ5);
          cResult[3] = stringResult1;
          let tmp10 = stringResult1;
        } else {
          tmp10 = cResult[3];
        }
        if (cResult[4] !== videoId) {
          const obj3 = {
            text: tmp10,
            variant: "secondary",
            size: "md",
            shrink: true,
            grow: false,
            onPress() {
              LinkingDefault.openURL("https://youtube.com/watch?v=" + videoId);
            },
          };
          const tmp14 = closure_4(tmp(5375).Button, obj3);
          cResult[4] = videoId;
          cResult[5] = tmp14;
          let tmp12 = tmp14;
        } else {
          tmp12 = cResult[5];
        }
        if (cResult[6] === tmp4.container) {
          if (cResult[7] === tmp7) {
            if (cResult[8] === tmp12) {
              let tmp15 = cResult[9];
            }
            return tmp15;
          }
        }
        const obj4 = { style: container, children: null };
        const items = [tmp7, tmp12];
        obj4.children = items;
        const tmp16 = closure_5(View, obj4);
        cResult[6] = tmp4.container;
        cResult[7] = tmp7;
        cResult[8] = tmp12;
        cResult[9] = tmp16;
        tmp15 = tmp16;
        const obj = videoId(576);
      }
    : function MediaModalYoutubeEmbedError(videoId) {
        videoId = videoId.videoId;
        const tmp = closure_6();
        const obj = { style: tmp.container, children: null };
        const obj2 = { style: tmp.text, variant: "text-md/semibold", color: "text-overlay-light", children: null };
        const intl = videoId(1126).intl;
        obj2.children = intl.string(videoId(1126).t.u7vKPs);
        const items = [closure_4(videoId(5086).Text, obj2)];
        const obj3 = { text: null, variant: "secondary", size: "md", shrink: true, grow: false, onPress: null };
        const intl2 = videoId(1126).intl;
        obj3.text = intl2.string(videoId(1126).t.LLpxJ5);
        obj3.onPress = function onPress() {
          LinkingDefault.openURL("https://youtube.com/watch?v=" + videoId);
        };
        items[1] = closure_4(videoId(5375).Button, obj3);
        obj.children = items;
        return closure_5(View, obj);
      },
);
