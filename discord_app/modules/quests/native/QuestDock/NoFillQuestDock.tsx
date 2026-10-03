// discord_app/modules/quests/native/QuestDock/NoFillQuestDock.tsx
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

const require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4890);
let closure_4 = createStyles.createStyles({
  placeholder: { position: "absolute", left: 0, right: 0, height: fn(14892).QUEST_DOCK_COLLAPSED_HEIGHT, opacity: 0 },
});
const ReactCompilerGating = fn(558);
let obj2 = {
  placeholder: { position: "absolute", left: 0, right: 0, height: fn(14892).QUEST_DOCK_COLLAPSED_HEIGHT, opacity: 0 },
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/NoFillQuestDock.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = require("c").c(7);
      ({ decisionId, visible } = arg0);
      const tmp4 = closure_4();
      _require = tmp4;
      let obj = require("c");
      youBarTotalHeight = require("useYouBarTotalHeight").useYouBarTotalHeight();
      if (cResult[0] === tmp4.placeholder) {
        if (cResult[1] === youBarTotalHeight) {
          let tmp6 = cResult[2];
        }
        if (cResult[3] === decisionId) {
          if (cResult[4] === tmp6) {
            if (cResult[5] === visible) {
              let tmp7 = cResult[6];
            }
            return tmp7;
          }
        }
        const obj3 = {
          adContentId: decisionId,
          adCreativeType: tmp(tmp2[9]).AdCreativeType.NO_FILL,
          questContent: tmp(tmp2[10]).QuestContent.QUEST_BAR_MOBILE,
          overrideVisibility: visible,
          sourceQuestContent: tmp(tmp2[10]).QuestContent.QUEST_BAR_MOBILE,
          children: tmp6,
        };
        const tmp9 = jsx(tmp(tmp2[8]).BillableAdPlacementImpressionTrackerNative, {
          adContentId: decisionId,
          adCreativeType: tmp(tmp2[9]).AdCreativeType.NO_FILL,
          questContent: tmp(tmp2[10]).QuestContent.QUEST_BAR_MOBILE,
          overrideVisibility: visible,
          sourceQuestContent: tmp(tmp2[10]).QuestContent.QUEST_BAR_MOBILE,
          children: tmp6,
        });
        cResult[3] = decisionId;
        cResult[4] = tmp6;
        cResult[5] = visible;
        cResult[6] = tmp9;
        tmp7 = tmp9;
      }
      const fn = function l(ref) {
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
      };
      cResult[0] = tmp4.placeholder;
      cResult[1] = youBarTotalHeight;
      cResult[2] = fn;
      tmp6 = fn;
      const obj2 = require("useYouBarTotalHeight");
    }
  : (arg0) => {
      ({ decisionId, visible } = arg0);
      _require = closure_4();
      dependencyMap = require("useYouBarTotalHeight").useYouBarTotalHeight();
      let obj = require("useYouBarTotalHeight");
      return jsx(require("QuestContentImpressionTracker").BillableAdPlacementImpressionTrackerNative, {
        adContentId: decisionId,
        adCreativeType: require("AdCreativeType").AdCreativeType.NO_FILL,
        questContent: require("QuestTypes").QuestContent.QUEST_BAR_MOBILE,
        overrideVisibility: visible,
        sourceQuestContent: require("QuestTypes").QuestContent.QUEST_BAR_MOBILE,
        children(ref) {
          const obj = {
            ref,
            accessibilityElementsHidden: true,
            importantForAccessibility: "no-hide-descendants",
            pointerEvents: "none",
            style: null,
          };
          const items = [placeholder.placeholder, { bottom: closure_1 - 1 }];
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
    };
