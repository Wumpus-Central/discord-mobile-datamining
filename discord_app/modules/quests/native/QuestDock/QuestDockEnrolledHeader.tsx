// === Module 15382: QuestDockEnrolledHeader ===

// Module 15382 (QuestDockEnrolledHeader)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Text_Text from "Text/Text" /* 5087 */;
import QuestTypes from "QuestTypes" /* 5982 */;
import hooks_QuestHooks from "hooks/QuestHooks" /* 9149 */;
import useScaledTextLineHeight from "useScaledTextLineHeight" /* 10480 */;
import QuestCopyHooks from "QuestCopyHooks" /* 12930 */;
import QuestDockCreativeContext from "QuestDockCreativeContext" /* 15315 */;
import QuestProgressIndicatorDefault from "QuestProgressIndicator" /* 15325 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const PX_8 = nativeDefault.space.PX_8;
let c7 = "heading-md/semibold";
let c8 = "text-sm/medium";
let closure_9 = fn(15285).QUEST_DOCK_COLLAPSED_HEIGHT - 2 * PX_8;
const createStyles = fn(5091);
let closure_10 = createStyles.createStyles({ wrapper: { alignItems: "center", display: "flex", flexDirection: "row", flexGrow: 1, flexShrink: 1, gap: 8, justifyContent: "center", padding: PX_8 }, progressIndicatorWrapper: { flexGrow: 0, flexShrink: 0 }, copy: { flexGrow: 1, flexShrink: 1, minWidth: 0 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockEnrolledHeader.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function QuestDockEnrolledHeader() {
  const cResult = c.c(22);
  const questDockQuest = QuestDockCreativeContext.useQuestDockQuest();
  const tmp5 = closure_10();
  const questTaskDetails = hooks_QuestHooks.useQuestTaskDetails(questDockQuest);
  const first = _slicedToArray(hooks_QuestHooks.useTaskPlatformScreen(questDockQuest, questTaskDetails), 1)[0];
  const questBarTitle = QuestCopyHooks.useQuestBarTitle(questDockQuest);
  if (cResult[0] === first) {
    if (cResult[1] === questDockQuest) {
      let tmp9 = cResult[2];
    }
    const questBarSubtitle = QuestCopyHooks.useQuestBarSubtitle(tmp9);
    const tmpResult = QuestCopyHooks;
    const scaledTextLineHeight = useScaledTextLineHeight.useScaledTextLineHeight(variant);
    useScaledTextLineHeight;
    if (cResult[3] === questDockQuest) {
      if (cResult[4] === questTaskDetails.percentComplete) {
        let tmp17 = cResult[5];
      }
      if (cResult[6] === tmp5.progressIndicatorWrapper) {
        if (cResult[7] === tmp17) {
          let tmp21 = cResult[8];
        }
        if (cResult[9] !== questBarTitle) {
          const obj6 = { variant, color: "mobile-text-heading-primary", lineClamp: 1, maxFontSizeMultiplier: 2, children: questBarTitle };
          const tmp27 = hasOwnProperty(Text_Text.Text, obj6);
          cResult[9] = questBarTitle;
          cResult[10] = tmp27;
          let tmp25 = tmp27;
        } else {
          tmp25 = cResult[10];
        }
        if (cResult[11] === tmp15 <= tmp16) {
          if (cResult[12] === questBarSubtitle) {
            let tmp29 = cResult[13];
          }
          if (cResult[14] === tmp5.copy) {
            if (cResult[15] === tmp25) {
              if (cResult[16] === tmp29) {
                let tmp32 = cResult[17];
              }
              if (cResult[18] === tmp5.wrapper) {
                if (cResult[19] === tmp21) {
                  if (cResult[20] === tmp32) {
                    let tmp36 = cResult[21];
                  }
                  return tmp36;
                }
              }
              const obj7 = { style: tmp5.wrapper, children: null };
              const items = [tmp21, tmp32];
              obj7.children = items;
              const tmp39 = timestampProducer(View, obj7);
              cResult[18] = tmp5.wrapper;
              cResult[19] = tmp21;
              cResult[20] = tmp32;
              cResult[21] = tmp39;
              tmp36 = tmp39;
            }
          }
          const obj8 = { style: tmp5.copy, children: null };
          const items1 = [tmp25, tmp29];
          obj8.children = items1;
          const tmp35 = timestampProducer(View, obj8);
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
    const obj11 = { quest: questDockQuest, size: "x-sm", progress: questTaskDetails.percentComplete, loading: false, hasConfetti: true };
    const tmp20 = hasOwnProperty(QuestProgressIndicatorDefault, obj11);
    cResult[3] = questDockQuest;
    cResult[4] = questTaskDetails.percentComplete;
    cResult[5] = tmp20;
    tmp17 = tmp20;
    const tmpResult3 = useScaledTextLineHeight;
  }
  const obj12 = { quest: questDockQuest, isExpanded: false, activeScreen: first, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE };
  cResult[0] = first;
  cResult[1] = questDockQuest;
  cResult[2] = obj12;
  tmp9 = obj12;
}) : (function QuestDockEnrolledHeader() {
  const questDockQuest = QuestDockCreativeContext.useQuestDockQuest();
  const tmp4 = closure_10();
  const questTaskDetails = hooks_QuestHooks.useQuestTaskDetails(questDockQuest);
  const obj3 = hooks_QuestHooks;
  const questBarTitle = QuestCopyHooks.useQuestBarTitle(questDockQuest);
  const obj5 = QuestCopyHooks;
  const questBarSubtitle = obj5.useQuestBarSubtitle({ quest: questDockQuest, isExpanded: false, activeScreen: _slicedToArray(obj3.useTaskPlatformScreen(questDockQuest, questTaskDetails), 1)[0], sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE });
  const obj6 = { quest: questDockQuest, isExpanded: false, activeScreen: _slicedToArray(obj3.useTaskPlatformScreen(questDockQuest, questTaskDetails), 1)[0], sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE };
  const scaledTextLineHeight = useScaledTextLineHeight.useScaledTextLineHeight(variant);
  const obj9 = { style: tmp4.wrapper, children: null };
  const obj10 = { style: tmp4.progressIndicatorWrapper, children: null };
  const scaledTextLineHeight1 = useScaledTextLineHeight.useScaledTextLineHeight(variant2);
  obj10.children = hasOwnProperty(QuestProgressIndicatorDefault, { quest: questDockQuest, size: "x-sm", progress: questTaskDetails.percentComplete, loading: false, hasConfetti: true });
  const items = [hasOwnProperty(View, obj10), ];
  const obj12 = { style: tmp4.copy, children: null };
  const items1 = [hasOwnProperty(Text_Text.Text, { variant, color: "mobile-text-heading-primary", lineClamp: 1, maxFontSizeMultiplier: 2, children: questBarTitle }), ];
  let tmp13Result = null;
  if (scaledTextLineHeight + scaledTextLineHeight1 <= closure_9) {
    const obj14 = { variant: variant2, color: "text-muted", lineClamp: 1, children: questBarSubtitle };
    tmp13Result = hasOwnProperty(Text_Text.Text, obj14);
  }
  items1[1] = tmp13Result;
  obj12.children = items1;
  items[1] = timestampProducer(View, obj12);
  obj9.children = items;
  return timestampProducer(View, obj9);
}));