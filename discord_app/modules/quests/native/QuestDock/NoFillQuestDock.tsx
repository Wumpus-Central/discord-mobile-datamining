// === Module 15021: NoFillQuestDock ===

// Module 15021 (NoFillQuestDock)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import QuestDockConstants from "QuestDockConstants" /* 14896 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

const View = react_native.View;
const QUEST_DOCK_COLLAPSED_HEIGHT = QuestDockConstants.QUEST_DOCK_COLLAPSED_HEIGHT;
const jsx = Fragment.jsx;
let obj = { placeholder: { position: "absolute", left: 0, right: 0, height: QUEST_DOCK_COLLAPSED_HEIGHT, opacity: 0 } };
let closure_4 = createStyles.createStyles(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let decisionId;
  let placeholder;
  let visible;
  let youBarTotalHeight;
  const obj = require("react");
  const cResult = obj.c(7);
  ({ decisionId, visible } = arg0);
  const tmp4 = closure_4();
  _require = tmp4;
  let obj2 = require("useYouBarTotalHeight");
  youBarTotalHeight = obj2.useYouBarTotalHeight();
  if (cResult[0] === tmp4.placeholder) {
    let tmp6;
    if (cResult[1] === youBarTotalHeight) {
      tmp6 = cResult[2];
    }
    if (cResult[3] === decisionId) {
      if (cResult[4] === tmp6) {
        let tmp7;
        if (cResult[5] === visible) {
          tmp7 = cResult[6];
        }
        return tmp7;
      }
    }
    const BillableAdPlacementImpressionTrackerNative = tmp(tmp2[8]).BillableAdPlacementImpressionTrackerNative;
    const tmp9 = <BillableAdPlacementImpressionTrackerNative adContentId={decisionId} adCreativeType={require("AdCreativeType").AdCreativeType.NO_FILL} questContent={require("QuestTypes").QuestContent.QUEST_BAR_MOBILE} overrideVisibility={visible} sourceQuestContent={require("QuestTypes").QuestContent.QUEST_BAR_MOBILE}>{tmp6}</BillableAdPlacementImpressionTrackerNative>;
    cResult[3] = decisionId;
    cResult[4] = tmp6;
    cResult[5] = visible;
    cResult[6] = tmp9;
    tmp7 = tmp9;
  }
  const fn = function l(ref) {
    const items = [placeholder.placeholder, ];
    const obj2 = { bottom: youBarTotalHeight - 1 };
    items[1] = obj2;
    return <View ref={ref} accessibilityElementsHidden importantForAccessibility="no-hide-descendants" pointerEvents="none" style={items} />;
  };
  cResult[0] = tmp4.placeholder;
  cResult[1] = youBarTotalHeight;
  cResult[2] = fn;
  tmp6 = fn;
}) : ((arg0) => {
  let closure_1;
  let decisionId;
  let placeholder;
  let visible;
  ({ decisionId, visible } = arg0);
  _require = closure_4();
  const obj = require("useYouBarTotalHeight");
  dependencyMap = obj.useYouBarTotalHeight();
  const BillableAdPlacementImpressionTrackerNative = require("QuestContentImpressionTracker").BillableAdPlacementImpressionTrackerNative;
  return <BillableAdPlacementImpressionTrackerNative adContentId={decisionId} adCreativeType={require("AdCreativeType").AdCreativeType.NO_FILL} questContent={require("QuestTypes").QuestContent.QUEST_BAR_MOBILE} overrideVisibility={visible} sourceQuestContent={require("QuestTypes").QuestContent.QUEST_BAR_MOBILE}>{function children(ref) {
    const items = [placeholder.placeholder, ];
    const obj2 = { bottom: closure_1 - 1 };
    items[1] = obj2;
    return <View ref={ref} accessibilityElementsHidden importantForAccessibility="no-hide-descendants" pointerEvents="none" style={items} />;
  }}</BillableAdPlacementImpressionTrackerNative>;
});
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/NoFillQuestDock.tsx");

export default tmp3;