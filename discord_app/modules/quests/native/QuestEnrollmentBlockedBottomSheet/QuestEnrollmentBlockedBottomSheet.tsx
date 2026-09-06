// discord_app/modules/quests/native/QuestEnrollmentBlockedBottomSheet/QuestEnrollmentBlockedBottomSheet.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import Sheet_BottomSheet from "../../../../design/components/Sheet/native/BottomSheet.native.tsx";
import useCountdownDefault from "../../../../hooks/useCountdown.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import QuestStore from "../../QuestStore.tsx";

require = fn;
function QuestEnrollmentBlockedBottomSheet(questEnrollmentBlockedUntil) {
  questEnrollmentBlockedUntil = questEnrollmentBlockedUntil.questEnrollmentBlockedUntil;
  const tmp = closure_6();
  let date = questEnrollmentBlockedUntil;
  if (questEnrollmentBlockedUntil == null) {
    const _Date = Date;
    date = new Date();
  }
  const tmp3Result = useCountdownDefault(date);
  ({ minutes, seconds } = tmp3Result);
  const padStartResult = String(tmp3Result.hours).padStart(2, "0");
  const StringResult = String(tmp3Result.hours);
  const padStartResult1 = String(minutes).padStart(2, "0");
  const StringResult1 = String(minutes);
  const padStartResult2 = String(seconds).padStart(2, "0");
  let tmp12 = null;
  if (null != questEnrollmentBlockedUntil) {
    let obj = { header: null, footer: null, startExpanded: true, children: null };
    obj = { style: tmp.heading, children: null };
    const obj1 = { variant: "heading-xl/bold", children: null };
    const intl = util.intl;
    obj1.children = intl.string(util.t["XEHDT/"]);
    obj.children = jsx(Text_Text.Text, { variant: "heading-xl/bold", children: null });
    obj.header = <View style={tmp.heading}>{null}</View>;
    const obj2 = { style: tmp.container, children: null };
    const obj3 = { variant: "text-md/normal", children: null };
    const intl2 = util.intl;
    const obj4 = { countdownString: null };
    const _HermesInternal = HermesInternal;
    obj4.countdownString = "" + padStartResult + ":" + padStartResult1 + ":" + padStartResult2;
    obj3.children = intl2.formatToPlainString(util.t["+5XVH+"], obj4);
    obj2.children = jsx(Text_Text.Text, { variant: "text-md/normal", children: null });
    obj.children = <View style={tmp.container}>{null}</View>;
    tmp12 = jsx(Sheet_BottomSheet.BottomSheet, { style: tmp.heading, children: null });
  }
  return tmp12;
}
const View = fn(17).View;
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { heading: null, container: null };
createStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingTop: nativeDefault.space.PX_16,
  gap: nativeDefault.space.PX_24,
};
createStyles.heading = createStyles;
createStyles.container = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingBottom: nativeDefault.space.PX_32,
};
let closure_6 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/quests/native/QuestEnrollmentBlockedBottomSheet/QuestEnrollmentBlockedBottomSheet.tsx",
);

export default function QuestEnrollmentBlockedBottomSheetConnected(questContentPosition) {
  ({ questId: require, questEnrollmentBlockedUntil: importDefault, sourceQuestContent } = questContentPosition);
  let obj = require("initialize");
  const items = [QuestStore];
  const stateFromStores = obj.useStateFromStores(items, () => QuestStore.getQuest(questId));
  let tmp4 = null;
  if (null != stateFromStores) {
    obj = {
      overrideVisibility: true,
      questOrQuests: stateFromStores,
      questContent: require("QuestTypes").QuestContent.QUEST_ENROLLMENT_BLOCKED_BOTTOM_SHEET,
      questContentPosition: questContentPosition.questContentPosition,
      sourceQuestContent,
      children() {
        return (
          <QuestEnrollmentBlockedBottomSheet
            questId={questId}
            questEnrollmentBlockedUntil={questEnrollmentBlockedUntil}
            sourceQuestContent={sourceQuestContent}
          />
        );
      },
    };
    tmp4 = jsx(require("QuestContentImpressionTracker").QuestContentImpressionTrackerNative, {
      overrideVisibility: true,
      questOrQuests: stateFromStores,
      questContent: require("QuestTypes").QuestContent.QUEST_ENROLLMENT_BLOCKED_BOTTOM_SHEET,
      questContentPosition: questContentPosition.questContentPosition,
      sourceQuestContent,
      children() {
        return (
          <QuestEnrollmentBlockedBottomSheet
            questId={questId}
            questEnrollmentBlockedUntil={questEnrollmentBlockedUntil}
            sourceQuestContent={sourceQuestContent}
          />
        );
      },
    });
  }
  return tmp4;
}
