// discord_app/modules/quests/native/QuestDock/NoFillQuestDock.tsx
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

const require = fn;
let View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5092);
let closure_4 = createStyles.createStyles({
  placeholder: { position: "absolute", left: 0, right: 0, height: fn(15347).QUEST_DOCK_COLLAPSED_HEIGHT, opacity: 0 },
});
const ReactCompilerGating = fn(558);
let obj2 = {
  placeholder: { position: "absolute", left: 0, right: 0, height: fn(15347).QUEST_DOCK_COLLAPSED_HEIGHT, opacity: 0 },
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/NoFillQuestDock.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function NoFillQuestDock(arg0) {
      const cResult = require("c").c(12);
      ({ noFillDecision, visible } = arg0);
      const tmp4 = closure_4();
      _require = tmp4;
      let obj = require("c");
      youBarTotalHeight = require("useYouBarTotalHeight").useYouBarTotalHeight();
      if (cResult[0] === tmp4.placeholder) {
        if (cResult[1] === youBarTotalHeight) {
          let tmp6 = cResult[2];
        }
        View = tmp6;
        if (null == noFillDecision.adContentId) {
          if (cResult[3] !== tmp6) {
            const tmp6Result = tmp6();
            cResult[3] = tmp6;
            cResult[4] = tmp6Result;
            let tmp12 = tmp6Result;
          } else {
            tmp12 = cResult[4];
          }
          return tmp12;
        } else {
          const adContentId = noFillDecision.adContentId;
          if (cResult[5] !== tmp6) {
            class E {
              constructor(arg0) {
                return closure_2(arg0);
              }
            }
            cResult[5] = tmp6;
            cResult[6] = E;
          } else {
            class E {
              constructor(arg0) {
                return closure_2(arg0);
              }
            }
          }
          if (cResult[7] === noFillDecision) {
            class E {
              constructor(arg0) {
                return closure_2(arg0);
              }
            }
          }
          const obj3 = {
            adContentId,
            adCreativeType: tmp(tmp2[9]).AdCreativeType.NO_FILL,
            noFillDecision,
            questContent: tmp(tmp2[10]).QuestContent.QUEST_BAR_MOBILE,
            overrideVisibility: visible,
            sourceQuestContent: tmp(tmp2[10]).QuestContent.QUEST_BAR_MOBILE,
            children: E,
          };
          const tmp11 = jsx(tmp(tmp2[8]).BillableAdPlacementImpressionTrackerNative, {
            adContentId,
            adCreativeType: tmp(tmp2[9]).AdCreativeType.NO_FILL,
            noFillDecision,
            questContent: tmp(tmp2[10]).QuestContent.QUEST_BAR_MOBILE,
            overrideVisibility: visible,
            sourceQuestContent: tmp(tmp2[10]).QuestContent.QUEST_BAR_MOBILE,
            children: E,
          });
          cResult[7] = noFillDecision;
          cResult[8] = adContentId;
          cResult[9] = E;
          cResult[10] = visible;
          cResult[11] = tmp11;
        }
      }
      function renderPlaceholder(ref) {
        const obj = {
          ref,
          accessibilityElementsHidden: true,
          importantForAccessibility: "no-hide-descendants",
          pointerEvents: "none",
          style: null,
        };
        const items = [placeholder.placeholder, { bottom: youBarTotalHeight - 1 }];
        obj.style = items;
        return (
          <View
            ref={ref}
            accessibilityElementsHidden
            importantForAccessibility="no-hide-descendants"
            pointerEvents="none"
            style={null}
          />
        );
      }
      cResult[0] = tmp4.placeholder;
      cResult[1] = youBarTotalHeight;
      cResult[2] = renderPlaceholder;
      tmp6 = renderPlaceholder;
      const obj2 = require("useYouBarTotalHeight");
    }
  : function NoFillQuestDock(noFillDecision) {
      noFillDecision = noFillDecision.noFillDecision;
      let youBarTotalHeight;
      const tmp = closure_4();
      _require = tmp;
      youBarTotalHeight = require("useYouBarTotalHeight").useYouBarTotalHeight();
      if (null == noFillDecision.adContentId) {
        const obj2 = {
          ref: "IconComponent",
          accessibilityElementsHidden: "no-hide-descendants",
          importantForAccessibility: "none",
          pointerEvents: null,
          style: "RNGestureHandlerButton",
        };
        let items = [tmp.placeholder];
        const obj3 = { bottom: youBarTotalHeight - 1 };
        items[1] = obj3;
        obj2.style = items;
        let tmp7 = (
          <View
            ref="IconComponent"
            accessibilityElementsHidden="no-hide-descendants"
            importantForAccessibility="none"
            pointerEvents={null}
            style="RNGestureHandlerButton"
          />
        );
      } else {
        const obj4 = {
          adContentId: noFillDecision.adContentId,
          adCreativeType: tmp2(tmp3[9]).AdCreativeType.NO_FILL,
          noFillDecision,
          questContent: tmp2(tmp3[10]).QuestContent.QUEST_BAR_MOBILE,
          overrideVisibility: noFillDecision.visible,
          sourceQuestContent: tmp2(tmp3[10]).QuestContent.QUEST_BAR_MOBILE,
          children(ref) {
            const obj = {
              ref,
              accessibilityElementsHidden: true,
              importantForAccessibility: "no-hide-descendants",
              pointerEvents: "none",
              style: null,
            };
            const items = [placeholder.placeholder, { bottom: youBarTotalHeight - 1 }];
            obj.style = items;
            return (
              <View
                ref={ref}
                accessibilityElementsHidden
                importantForAccessibility="no-hide-descendants"
                pointerEvents="none"
                style={null}
              />
            );
          },
        };
        tmp7 = jsx(tmp2(tmp3[8]).BillableAdPlacementImpressionTrackerNative, {
          adContentId: noFillDecision.adContentId,
          adCreativeType: tmp2(tmp3[9]).AdCreativeType.NO_FILL,
          noFillDecision,
          questContent: tmp2(tmp3[10]).QuestContent.QUEST_BAR_MOBILE,
          overrideVisibility: noFillDecision.visible,
          sourceQuestContent: tmp2(tmp3[10]).QuestContent.QUEST_BAR_MOBILE,
          children(ref) {
            const obj = {
              ref,
              accessibilityElementsHidden: true,
              importantForAccessibility: "no-hide-descendants",
              pointerEvents: "none",
              style: null,
            };
            const items = [placeholder.placeholder, { bottom: youBarTotalHeight - 1 }];
            obj.style = items;
            return (
              <View
                ref={ref}
                accessibilityElementsHidden
                importantForAccessibility="no-hide-descendants"
                pointerEvents="none"
                style={null}
              />
            );
          },
        });
      }
      return tmp7;
    };
