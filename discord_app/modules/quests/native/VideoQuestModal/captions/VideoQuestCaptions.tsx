// === Module 14948: VideoQuestCaptions ===

// Module 14948 (VideoQuestCaptions)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Text_Text from "Text/Text" /* 4886 */;
import VisualEffectViewDefault from "VisualEffectView" /* 5773 */;
import useVideoQuestCaptions from "useVideoQuestCaptions" /* 14949 */;
import VideoQuestCaptionsUtils from "VideoQuestCaptionsUtils" /* 14951 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 4890 */;
import module_683 from "module_683" /* 683 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let alphaResult;
let obj2;
let obj3;
let rect;
const View = react_native.View;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { container: rect, captionBox: obj2, captionText: obj3 };
rect = { position: "absolute", bottom: nativeDefault.space.PX_32, left: nativeDefault.space.PX_16, right: nativeDefault.space.PX_16, alignItems: "center", justifyContent: "flex-end" };
createStyles = createStyles.createStyles;
obj2 = { backgroundColor: alphaResult.hex(), padding: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
const importDefaultResultResult = module_683(nativeDefault.unsafe_rawColors.BLACK);
alphaResult = importDefaultResultResult.alpha(0.35);
obj3 = { color: nativeDefault.colors.WHITE, textAlign: "center" };
let closure_6 = createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((quest) => {
  let currentTime;
  let style;
  let visible;
  const obj = react2;
  const cResult = obj.c(15);
  ({ currentTime, style, visible } = quest);
  let tmp4 = undefined === visible;
  quest = quest.quest;
  if (!tmp4) {
    tmp4 = visible;
  }
  const tmp5 = closure_6();
  const tmpResult = useVideoQuestCaptions;
  const videoQuestCaptions = tmpResult.useVideoQuestCaptions(quest);
  const captions = videoQuestCaptions.captions;
  let tmp7 = null;
  const status = videoQuestCaptions.status;
  if (null != captions) {
    tmp7 = null;
    if (tmp4) {
      if (cResult[0] === captions) {
        let tmp8;
        if (cResult[1] === currentTime) {
          tmp8 = cResult[2];
        }
        tmp7 = tmp8;
      }
      const tmpResult2 = VideoQuestCaptionsUtils;
      const findActiveCaptionResult = tmpResult2.findActiveCaption(captions, currentTime);
      cResult[0] = captions;
      cResult[1] = currentTime;
      cResult[2] = findActiveCaptionResult;
      tmp8 = findActiveCaptionResult;
    }
  }
  let tmp10 = null;
  if ("success" === status) {
    tmp10 = null;
    if (null != tmp7) {
      if (cResult[3] === style) {
        let tmp11;
        if (cResult[4] === tmp5.container) {
          tmp11 = cResult[5];
        }
        if (cResult[6] === tmp7.text) {
          let tmp12;
          if (cResult[7] === tmp5.captionText) {
            tmp12 = cResult[8];
          }
          if (cResult[9] === tmp5.captionBox) {
            let tmp15;
            if (cResult[10] === tmp12) {
              tmp15 = cResult[11];
            }
            if (cResult[12] === tmp11) {
              let tmp19;
              if (cResult[13] === tmp15) {
                tmp19 = cResult[14];
              }
              tmp10 = tmp19;
            }
            const tmp22 = <View style={tmp11} importantForAccessibility="no-hide-descendants" accessibilityRole="none" accessible={false}>{tmp15}</View>;
            cResult[12] = tmp11;
            cResult[13] = tmp15;
            cResult[14] = tmp22;
            tmp19 = tmp22;
          }
          const tmp18 = jsx(VisualEffectViewDefault, { style: tmp5.captionBox, blurTheme: "dark", blurStyle: "default", blurAmount: 0.2, children: tmp12 });
          cResult[9] = tmp5.captionBox;
          cResult[10] = tmp12;
          cResult[11] = tmp18;
          tmp15 = tmp18;
        }
        const tmp14 = jsx(Text_Text.Text, { variant: "heading-sm/medium", style: tmp5.captionText, children: tmp7.text });
        cResult[6] = tmp7.text;
        cResult[7] = tmp5.captionText;
        cResult[8] = tmp14;
        tmp12 = tmp14;
      }
      const items = [tmp5.container, style];
      cResult[3] = style;
      cResult[4] = tmp5.container;
      cResult[5] = items;
      tmp11 = items;
    }
  }
  return tmp10;
}) : ((currentTime) => {
  let quest;
  let style;
  currentTime = currentTime.currentTime;
  let flag = currentTime.visible;
  ({ quest, style } = currentTime);
  if (flag === undefined) {
    flag = true;
  }
  let captions;
  const tmp = closure_6();
  let obj = currentTime(captions[8]);
  const videoQuestCaptions = obj.useVideoQuestCaptions(quest);
  captions = videoQuestCaptions.captions;
  const items = [captions, currentTime, flag];
  const status = videoQuestCaptions.status;
  const memo = react.useMemo(() => {
    let findActiveCaptionResult = null;
    if (null != captions) {
      findActiveCaptionResult = null;
      if (flag) {
        const obj = VideoQuestCaptionsUtils;
        findActiveCaptionResult = obj.findActiveCaption(tmp, currentTime);
      }
    }
    return findActiveCaptionResult;
  }, items);
  let tmp6 = null;
  if ("success" === status) {
    tmp6 = null;
    if (null != memo) {
      const items1 = [tmp.container, style];
      flag(captions[11]);
      tmp6 = <View style={items1} importantForAccessibility="no-hide-descendants" accessibilityRole="none" accessible={false}>{null}</View>;
    }
  }
  return tmp6;
});
const result = size.fileFinishedImporting("modules/quests/native/VideoQuestModal/captions/VideoQuestCaptions.tsx");

export const VideoQuestCaptions = tmp4;