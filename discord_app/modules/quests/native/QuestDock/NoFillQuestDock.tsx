// discord_app/modules/quests/native/QuestDock/NoFillQuestDock.tsx
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

const require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5009);
let closure_4 = createStyles.createStyles({
  placeholder: { position: "absolute", left: 0, right: 0, height: fn(17001).QUEST_DOCK_COLLAPSED_HEIGHT, opacity: 0 },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/NoFillQuestDock.tsx");

export default function NoFillQuestDock(noFillDecision) {
  noFillDecision = noFillDecision.noFillDecision;
  let youBarTotalHeight;
  const tmp = closure_4();
  _require = tmp;
  youBarTotalHeight = require("useYouBarTotalHeight").useYouBarTotalHeight();
  if (null == noFillDecision.adContentId) {
    const obj2 = {
      ref: "HermesInternal",
      accessibilityElementsHidden: "no-hide-descendants",
      importantForAccessibility: "none",
      pointerEvents: null,
      style: "minVelocityX",
    };
    let items = [tmp.placeholder];
    const obj3 = { bottom: youBarTotalHeight - 1 };
    items[1] = obj3;
    obj2.style = items;
    let tmp7 = (
      <View
        ref="HermesInternal"
        accessibilityElementsHidden="no-hide-descendants"
        importantForAccessibility="none"
        pointerEvents={null}
        style="minVelocityX"
      />
    );
  } else {
    const obj4 = {
      adContentId: noFillDecision.adContentId,
      adCreativeType: tmp2(tmp3[7]).AdCreativeType.NO_FILL,
      noFillDecision,
      questContent: tmp2(tmp3[8]).QuestContent.QUEST_BAR_MOBILE,
      overrideVisibility: noFillDecision.visible,
      sourceQuestContent: tmp2(tmp3[8]).QuestContent.QUEST_BAR_MOBILE,
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
    tmp7 = jsx(tmp2(tmp3[6]).BillableAdPlacementImpressionTrackerNative, {
      adContentId: noFillDecision.adContentId,
      adCreativeType: tmp2(tmp3[7]).AdCreativeType.NO_FILL,
      noFillDecision,
      questContent: tmp2(tmp3[8]).QuestContent.QUEST_BAR_MOBILE,
      overrideVisibility: noFillDecision.visible,
      sourceQuestContent: tmp2(tmp3[8]).QuestContent.QUEST_BAR_MOBILE,
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
}
