// === Module 15144: VideoQuestCaptions ===

// Module 15144 (VideoQuestCaptions)
import nativeDefault from "native" /* 576 */;
import VideoQuestCaptionsUtils from "VideoQuestCaptionsUtils" /* 15147 */;
import noop from "module_19" /* 19 */;
import n from "module_672" /* 672 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { container: null, captionBox: null, captionText: null };
const rect = { position: "absolute", bottom: nativeDefault.space.PX_32, left: nativeDefault.space.PX_16, right: nativeDefault.space.PX_16, alignItems: "center", justifyContent: "flex-end" };
createStyles.container = rect;
createStyles = { backgroundColor: null, padding: null, borderRadius: null, overflow: "hidden" };
const importDefaultResultResult = n(nativeDefault.unsafe_rawColors.BLACK);
createStyles.backgroundColor = n(nativeDefault.unsafe_rawColors.BLACK).alpha(0.35).hex();
createStyles.padding = nativeDefault.space.PX_8;
createStyles.borderRadius = nativeDefault.radii.sm;
createStyles.captionBox = createStyles;
const alphaResult = n(nativeDefault.unsafe_rawColors.BLACK).alpha(0.35);
createStyles.captionText = { color: nativeDefault.colors.WHITE, textAlign: "center" };
let closure_6 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/VideoQuestModal/captions/VideoQuestCaptions.tsx");

export const VideoQuestCaptions = function VideoQuestCaptions(currentTime) {
  currentTime = currentTime.currentTime;
  let flag = currentTime.visible;
  ({ quest, style } = currentTime);
  if (flag === undefined) {
    flag = true;
  }
  let captions;
  const tmp = closure_6();
  let obj = currentTime(captions[6]);
  const videoQuestCaptions = obj.useVideoQuestCaptions(quest);
  captions = videoQuestCaptions.captions;
  const items = [captions, currentTime, flag];
  const memo = noop.useMemo(() => {
    let findActiveCaptionResult = null;
    if (null != captions) {
      findActiveCaptionResult = null;
      if (flag) {
        findActiveCaptionResult = VideoQuestCaptionsUtils.findActiveCaption(tmp, currentTime);
      }
    }
    return findActiveCaptionResult;
  }, items);
  let tmp6 = null;
  if ("success" === videoQuestCaptions.status) {
    tmp6 = null;
    if (null != memo) {
      obj = { style: null, importantForAccessibility: "no-hide-descendants", accessibilityRole: "none", accessible: false, children: null };
      const items1 = [tmp.container, style];
      obj.style = items1;
      obj = { style: tmp.captionBox, blurTheme: "dark", blurStyle: "default", blurAmount: 0.2, children: null };
      const obj1 = { variant: "heading-sm/medium", style: tmp.captionText, children: memo.text };
      obj.children = jsx(currentTime(tmp3[9]).Text, { variant: "heading-sm/medium", style: tmp.captionText, children: memo.text });
      obj.children = jsx(flag(tmp3[8]), { style: tmp.captionBox, blurTheme: "dark", blurStyle: "default", blurAmount: 0.2, children: null });
      tmp6 = <View style={tmp.captionBox} blurTheme="dark" blurStyle="default" blurAmount={0.2}>{null}</View>;
      const tmp10 = flag(tmp3[8]);
    }
  }
  return tmp6;
};