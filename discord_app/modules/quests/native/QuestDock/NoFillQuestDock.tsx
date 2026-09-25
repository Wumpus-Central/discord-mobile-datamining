// === Module 14722: NoFillQuestDock ===

// Module 14722 (NoFillQuestDock)
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4829);
let closure_4 = createStyles.createStyles({ placeholder: { position: "absolute", left: 0, right: 0, height: fn(14599).QUEST_DOCK_COLLAPSED_HEIGHT, opacity: 0 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/NoFillQuestDock.tsx");

export default function NoFillQuestDock(arg0) {
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
      const obj = { ref, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", pointerEvents: "none", style: null };
      const items = [placeholder.placeholder, { bottom: closure_1 - 1 }];
      obj.style = items;
      return <View ref={ref} accessibilityElementsHidden importantForAccessibility="no-hide-descendants" pointerEvents="none" style={null} />;
    }
  });
};