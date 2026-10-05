// discord_app/modules/quests/native/QuestDock/QuestDockEnrolledHeader.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import QuestTypes from "../../QuestTypes.tsx";
import useScaledTextLineHeight from "../../../screen/native/useScaledTextLineHeight.android.tsx";
import hooks_QuestHooks from "../../hooks/QuestHooks.tsx";
import QuestCopyHooks from "../../hooks/QuestCopyHooks.tsx";
import QuestDockConstants from "QuestDockConstants.tsx";
import QuestDockCreativeContext from "QuestDockCreativeContext.tsx";
import QuestProgressIndicatorDefault from "../QuestProgressIndicator.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let hasOwnProperty;
let metroRequire;
const View = react_native.View;
const QUEST_DOCK_COLLAPSED_HEIGHT = QuestDockConstants.QUEST_DOCK_COLLAPSED_HEIGHT;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
const PX_8 = nativeDefault.space.PX_8;
let c7 = "heading-md/semibold";
let c8 = "text-sm/medium";
let closure_9 = QUEST_DOCK_COLLAPSED_HEIGHT - 2 * PX_8;
let obj = {
  wrapper: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    flexGrow: 1,
    flexShrink: 1,
    gap: 8,
    justifyContent: "center",
    padding: PX_8,
  },
  progressIndicatorWrapper: { flexGrow: 0, flexShrink: 0 },
  copy: { flexGrow: 1, flexShrink: 1, minWidth: 0 },
};
let closure_10 = createStyles.createStyles(obj);
const memoResult = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? () => {
        let items;
        let items1;
        const obj = react2;
        const cResult = obj.c(22);
        const obj2 = QuestDockCreativeContext;
        const questDockQuest = obj2.useQuestDockQuest();
        const tmp5 = closure_10();
        const obj3 = hooks_QuestHooks;
        const questTaskDetails = obj3.useQuestTaskDetails(questDockQuest);
        const obj4 = hooks_QuestHooks;
        const first = _slicedToArray(obj4.useTaskPlatformScreen(questDockQuest, questTaskDetails), 1)[0];
        const obj5 = QuestCopyHooks;
        const questBarTitle = obj5.useQuestBarTitle(questDockQuest);
        if (cResult[0] === first) {
          let tmp9;
          if (cResult[1] === questDockQuest) {
            tmp9 = cResult[2];
          }
          const tmpResult = QuestCopyHooks;
          const questBarSubtitle = tmpResult.useQuestBarSubtitle(tmp9);
          const tmpResult3 = useScaledTextLineHeight;
          const scaledTextLineHeight = tmpResult3.useScaledTextLineHeight(variant);
          useScaledTextLineHeight;
          if (cResult[3] === questDockQuest) {
            let tmp17;
            if (cResult[4] === questTaskDetails.percentComplete) {
              tmp17 = cResult[5];
            }
            if (cResult[6] === tmp5.progressIndicatorWrapper) {
              let tmp21;
              let tmp25;
              if (cResult[7] === tmp17) {
                tmp21 = cResult[8];
              }
              if (cResult[9] !== questBarTitle) {
                const obj6 = {
                  variant,
                  color: "mobile-text-heading-primary",
                  lineClamp: 1,
                  maxFontSizeMultiplier: 2,
                  children: questBarTitle,
                };
                const tmp27 = hasOwnProperty(Text_Text.Text, obj6);
                cResult[9] = questBarTitle;
                cResult[10] = tmp27;
                tmp25 = tmp27;
              } else {
                tmp25 = cResult[10];
              }
              if (cResult[11] === tmp15 <= tmp16) {
                let tmp29;
                if (cResult[12] === questBarSubtitle) {
                  tmp29 = cResult[13];
                }
                if (cResult[14] === tmp5.copy) {
                  if (cResult[15] === tmp25) {
                    let tmp32;
                    if (cResult[16] === tmp29) {
                      tmp32 = cResult[17];
                    }
                    if (cResult[18] === tmp5.wrapper) {
                      if (cResult[19] === tmp21) {
                        let tmp36;
                        if (cResult[20] === tmp32) {
                          tmp36 = cResult[21];
                        }
                        return tmp36;
                      }
                    }
                    const obj7 = { style: tmp5.wrapper, children: items };
                    items = [tmp21, tmp32];
                    const tmp39 = metroRequire(View, obj7);
                    cResult[18] = tmp5.wrapper;
                    cResult[19] = tmp21;
                    cResult[20] = tmp32;
                    cResult[21] = tmp39;
                    tmp36 = tmp39;
                  }
                }
                const obj8 = { style: tmp5.copy, children: items1 };
                items1 = [tmp25, tmp29];
                const tmp35 = metroRequire(View, obj8);
                cResult[14] = tmp5.copy;
                cResult[15] = tmp25;
                cResult[16] = tmp29;
                cResult[17] = tmp35;
                tmp32 = tmp35;
              }
              let tmp30 = null;
              if (tmp15 <= tmp16) {
                const obj9 = { variant: variant2, color: "text-muted", lineClamp: 1, children: questBarSubtitle };
                tmp30 = hasOwnProperty(Text_Text.Text, obj9);
              }
              cResult[11] = tmp15 <= tmp16;
              cResult[12] = questBarSubtitle;
              cResult[13] = tmp30;
              tmp29 = tmp30;
            }
            const obj10 = { style: tmp5.progressIndicatorWrapper, children: tmp17 };
            const tmp24 = hasOwnProperty(View, obj10);
            cResult[6] = tmp5.progressIndicatorWrapper;
            cResult[7] = tmp17;
            cResult[8] = tmp24;
            tmp21 = tmp24;
          }
          const obj11 = {
            quest: questDockQuest,
            size: "x-sm",
            progress: questTaskDetails.percentComplete,
            loading: false,
            hasConfetti: true,
          };
          const tmp20 = hasOwnProperty(QuestProgressIndicatorDefault, obj11);
          cResult[3] = questDockQuest;
          cResult[4] = questTaskDetails.percentComplete;
          cResult[5] = tmp20;
          tmp17 = tmp20;
        }
        const obj12 = {
          quest: questDockQuest,
          isExpanded: false,
          activeScreen: first,
          sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE,
        };
        cResult[0] = first;
        cResult[1] = questDockQuest;
        cResult[2] = obj12;
        tmp9 = obj12;
      }
    : () => {
        let items;
        let items1;
        let obj11;
        const obj = QuestDockCreativeContext;
        const questDockQuest = obj.useQuestDockQuest();
        const tmp4 = closure_10();
        const obj2 = hooks_QuestHooks;
        const questTaskDetails = obj2.useQuestTaskDetails(questDockQuest);
        const obj3 = hooks_QuestHooks;
        const first = _slicedToArray(obj3.useTaskPlatformScreen(questDockQuest, questTaskDetails), 1)[0];
        const obj4 = QuestCopyHooks;
        const questBarTitle = obj4.useQuestBarTitle(questDockQuest);
        const obj5 = QuestCopyHooks;
        const obj6 = {
          quest: questDockQuest,
          isExpanded: false,
          activeScreen: first,
          sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE,
        };
        const questBarSubtitle = obj5.useQuestBarSubtitle(obj6);
        const obj7 = useScaledTextLineHeight;
        const scaledTextLineHeight = obj7.useScaledTextLineHeight(variant);
        const obj9 = { style: tmp4.wrapper, children: items };
        const obj10 = {
          style: tmp4.progressIndicatorWrapper,
          children: hasOwnProperty(QuestProgressIndicatorDefault, obj11),
        };
        const obj8 = useScaledTextLineHeight;
        const scaledTextLineHeight1 = obj8.useScaledTextLineHeight(variant2);
        obj11 = {
          quest: questDockQuest,
          size: "x-sm",
          progress: questTaskDetails.percentComplete,
          loading: false,
          hasConfetti: true,
        };
        items = [hasOwnProperty(View, obj10)];
        const obj12 = { style: tmp4.copy, children: items1 };
        items1 = [,];
        const obj13 = {
          variant,
          color: "mobile-text-heading-primary",
          lineClamp: 1,
          maxFontSizeMultiplier: 2,
          children: questBarTitle,
        };
        items1[0] = hasOwnProperty(Text_Text.Text, obj13);
        let tmp14Result = null;
        if (scaledTextLineHeight + scaledTextLineHeight1 <= closure_9) {
          const obj14 = { variant: variant2, color: "text-muted", lineClamp: 1, children: questBarSubtitle };
          tmp14Result = hasOwnProperty(Text_Text.Text, obj14);
        }
        items1[1] = tmp14Result;
        items[1] = metroRequire(View, obj12);
        return metroRequire(View, obj9);
      },
);
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockEnrolledHeader.tsx");

export default memoResult;
