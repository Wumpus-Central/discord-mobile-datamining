// discord_app/modules/quests/native/VideoQuestModal/captions/VideoQuestCaptions.tsx
import c from "../../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import VisualEffectViewDefault from "../../../../visual_effect_view/native/VisualEffectView.tsx";
import useVideoQuestCaptions from "../hooks/useVideoQuestCaptions.tsx";
import VideoQuestCaptionsUtils from "VideoQuestCaptionsUtils.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";
import n from "../../../../../../_runtime/metro/00683__.js";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5090);
let obj2 = { container: null, captionBox: null, captionText: null };
const rect = {
  position: "absolute",
  bottom: nativeDefault.space.PX_32,
  left: nativeDefault.space.PX_16,
  right: nativeDefault.space.PX_16,
  alignItems: "center",
  justifyContent: "flex-end",
};
obj2.container = rect;
let obj3 = { backgroundColor: null, padding: null, borderRadius: null, overflow: "hidden" };
const importDefaultResultResult = n(nativeDefault.unsafe_rawColors.BLACK);
obj3.backgroundColor = n(nativeDefault.unsafe_rawColors.BLACK).alpha(0.35).hex();
obj3.padding = nativeDefault.space.PX_8;
obj3.borderRadius = nativeDefault.radii.sm;
obj2.captionBox = obj3;
const alphaResult = n(nativeDefault.unsafe_rawColors.BLACK).alpha(0.35);
obj2.captionText = { color: nativeDefault.colors.WHITE, textAlign: "center" };
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = { color: nativeDefault.colors.WHITE, textAlign: "center" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/VideoQuestModal/captions/VideoQuestCaptions.tsx");

export const VideoQuestCaptions = ReactCompilerGating.isReactCompilerEnabled()
  ? function VideoQuestCaptions(quest) {
      const cResult = c.c(15);
      ({ currentTime, style, visible } = quest);
      let tmp4 = undefined === visible;
      if (!tmp4) {
        tmp4 = visible;
      }
      const tmp5 = closure_6();
      const videoQuestCaptions = useVideoQuestCaptions.useVideoQuestCaptions(quest.quest);
      const captions = videoQuestCaptions.captions;
      let tmp7 = null;
      if (null != captions) {
        tmp7 = null;
        if (tmp4) {
          if (cResult[0] === captions) {
          }
          const findActiveCaptionResult = VideoQuestCaptionsUtils.findActiveCaption(captions, currentTime);
          cResult[0] = captions;
          cResult[1] = currentTime;
          cResult[2] = findActiveCaptionResult;
          const tmpResult2 = VideoQuestCaptionsUtils;
        }
      }
      let tmp11 = null;
      if ("success" === videoQuestCaptions.status) {
        tmp11 = null;
        if (null != tmp7) {
          if (cResult[3] === style) {
            if (cResult[4] === tmp5.container) {
              let tmp12 = cResult[5];
            }
            if (cResult[6] === tmp7.text) {
              if (cResult[7] === tmp5.captionText) {
                let tmp13 = cResult[8];
              }
              if (cResult[9] === tmp5.captionBox) {
                if (cResult[10] === tmp13) {
                  let tmp16 = cResult[11];
                }
                if (cResult[12] === tmp12) {
                }
                const obj2 = {
                  style: tmp12,
                  importantForAccessibility: "no-hide-descendants",
                  accessibilityRole: "none",
                  accessible: false,
                  children: tmp16,
                };
                const tmp23 = (
                  <View
                    style={tmp12}
                    importantForAccessibility="no-hide-descendants"
                    accessibilityRole="none"
                    accessible={false}
                  >
                    {tmp16}
                  </View>
                );
                cResult[12] = tmp12;
                cResult[13] = tmp16;
                cResult[14] = tmp23;
              }
              const obj3 = {
                style: tmp5.captionBox,
                blurTheme: "dark",
                blurStyle: "default",
                blurAmount: 0.2,
                children: tmp13,
              };
              const tmp19 = jsx(VisualEffectViewDefault, {
                style: tmp5.captionBox,
                blurTheme: "dark",
                blurStyle: "default",
                blurAmount: 0.2,
                children: tmp13,
              });
              cResult[9] = tmp5.captionBox;
              cResult[10] = tmp13;
              cResult[11] = tmp19;
              tmp16 = tmp19;
            }
            const obj4 = { variant: "heading-sm/medium", style: tmp5.captionText, children: tmp7.text };
            const tmp15 = jsx(Text_Text.Text, {
              variant: "heading-sm/medium",
              style: tmp5.captionText,
              children: tmp7.text,
            });
            cResult[6] = tmp7.text;
            cResult[7] = tmp5.captionText;
            cResult[8] = tmp15;
            tmp13 = tmp15;
          }
          const items = [tmp5.container, style];
          cResult[3] = style;
          cResult[4] = tmp5.container;
          cResult[5] = items;
          tmp12 = items;
        }
      }
      return tmp11;
    }
  : function VideoQuestCaptions(currentTime) {
      currentTime = currentTime.currentTime;
      let flag = currentTime.visible;
      ({ quest, style } = currentTime);
      if (flag === undefined) {
        flag = true;
      }
      let captions;
      const tmp = closure_6();
      const videoQuestCaptions = currentTime(captions[8]).useVideoQuestCaptions(quest);
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
          const obj2 = {
            style: null,
            importantForAccessibility: "no-hide-descendants",
            accessibilityRole: "none",
            accessible: false,
            children: null,
          };
          const items1 = [tmp.container, style];
          obj2.style = items1;
          const obj3 = {
            style: tmp.captionBox,
            blurTheme: "dark",
            blurStyle: "default",
            blurAmount: 0.2,
            children: null,
          };
          const obj4 = { variant: "heading-sm/medium", style: tmp.captionText, children: memo.text };
          obj3.children = jsx(currentTime(tmp3[10]).Text, {
            variant: "heading-sm/medium",
            style: tmp.captionText,
            children: memo.text,
          });
          obj2.children = jsx(flag(tmp3[11]), {
            style: tmp.captionBox,
            blurTheme: "dark",
            blurStyle: "default",
            blurAmount: 0.2,
            children: null,
          });
          tmp6 = (
            <View
              style={null}
              importantForAccessibility="no-hide-descendants"
              accessibilityRole="none"
              accessible={false}
            >
              {null}
            </View>
          );
          const tmp10 = flag(tmp3[11]);
        }
      }
      return tmp6;
    };
