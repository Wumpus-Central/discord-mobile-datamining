// === Module 12778: MediaModalYoutubeEmbedError ===

// Module 12778 (MediaModalYoutubeEmbedError)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import LinkingDefault from "Linking" /* 4565 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let videoId;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, text: obj3 };
obj2 = { backgroundColor: nativeDefault.colors.VOICE_VIDEO_VIDEO_TILE_BACKGROUND, padding: nativeDefault.space.PX_32, justifyContent: "center", alignItems: "center", flex: 1 };
createStyles = createStyles.createStyles;
obj3 = { marginBottom: nativeDefault.space.PX_8, textAlign: "center" };
let closure_6 = createStyles(obj);
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((videoId) => {
  let container;
  let first;
  let items;
  let text;
  let tmp10;
  let tmp12;
  let tmp7;
  let obj = videoId(576);
  const cResult = obj.c(10);
  videoId = videoId.videoId;
  const tmp4 = closure_6();
  ({ container, text } = tmp4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(videoId(1126).t.u7vKPs);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.text) {
    const obj2 = { style: text, variant: "text-md/semibold", color: "text-overlay-light", children: first };
    const tmp9 = closure_4(videoId(4886).Text, obj2);
    cResult[1] = tmp4.text;
    cResult[2] = tmp9;
    tmp7 = tmp9;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = tmp(1126).intl;
    const stringResult1 = intl2.string(videoId(1126).t.LLpxJ5);
    cResult[3] = stringResult1;
    tmp10 = stringResult1;
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
          const obj = LinkingDefault;
          obj.openURL("https://youtube.com/watch?v=" + videoId);
        }
    };
    const tmp14 = closure_4(videoId(5594).Button, obj3);
    cResult[4] = videoId;
    cResult[5] = tmp14;
    tmp12 = tmp14;
  } else {
    tmp12 = cResult[5];
  }
  if (cResult[6] === tmp4.container) {
    if (cResult[7] === tmp7) {
      let tmp15;
      if (cResult[8] === tmp12) {
        tmp15 = cResult[9];
      }
      return tmp15;
    }
  }
  const obj4 = { style: container, children: items };
  items = [tmp7, tmp12];
  const tmp16 = closure_5(View, obj4);
  cResult[6] = tmp4.container;
  cResult[7] = tmp7;
  cResult[8] = tmp12;
  cResult[9] = tmp16;
  tmp15 = tmp16;
}) : ((videoId) => {
  let intl;
  let intl2;
  let items;
  videoId = videoId.videoId;
  const tmp = closure_6();
  let obj = { style: tmp.container, children: items };
  const obj2 = { style: tmp.text, variant: "text-md/semibold", color: "text-overlay-light", children: intl.string(videoId(1126).t.u7vKPs) };
  const Text = videoId(4886).Text;
  intl = videoId(1126).intl;
  items = [closure_4(Text, obj2), ];
  const obj3 = {
    text: intl2.string(videoId(1126).t.LLpxJ5),
    variant: "secondary",
    size: "md",
    shrink: true,
    grow: false,
    onPress() {
      const obj = LinkingDefault;
      obj.openURL("https://youtube.com/watch?v=" + videoId);
    }
  };
  const Button = videoId(5594).Button;
  intl2 = videoId(1126).intl;
  items[1] = closure_4(Button, obj3);
  return closure_5(View, obj);
}));
const result = size.fileFinishedImporting("modules/media_viewer/native/components/MediaModalYoutubeEmbedError.tsx");

export default memoResult;