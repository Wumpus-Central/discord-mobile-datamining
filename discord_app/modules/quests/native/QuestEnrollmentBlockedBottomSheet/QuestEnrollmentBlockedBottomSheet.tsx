// === Module 14690: QuestEnrollmentBlockedBottomSheet ===

// Module 14690 (QuestEnrollmentBlockedBottomSheet)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Text from "Text" /* 4440 */;
import Background from "Background" /* 5569 */;
import useCountdownDefault from "useCountdown" /* 7112 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_4 from "initializeState" /* 7371 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4444 */;

require = arg1;
function QuestEnrollmentBlockedBottomSheet(questEnrollmentBlockedUntil) {
  questEnrollmentBlockedUntil = questEnrollmentBlockedUntil.questEnrollmentBlockedUntil;
  const tmp = callback();
  let date = questEnrollmentBlockedUntil;
  if (questEnrollmentBlockedUntil == null) {
    const _Date = Date;
    date = new Date();
  }
  const tmp3Result = useCountdownDefault(date);
  ({ minutes, seconds } = tmp3Result);
  const tmp3 = useCountdownDefault;
  const padStartResult = String(tmp3Result.hours).padStart(2, "0");
  const StringResult = String(tmp3Result.hours);
  const padStartResult1 = String(minutes).padStart(2, "0");
  const StringResult1 = String(minutes);
  const padStartResult2 = String(seconds).padStart(2, "0");
  let tmp12 = null;
  if (null != questEnrollmentBlockedUntil) {
    let obj = { header: null, footer: null, startExpanded: true, children: null };
    obj = { style: null, children: null };
    obj[0] = tmp.heading;
    obj1 = { variant: "heading-xl/bold", children: null };
    const intl = getSystemLocale.intl;
    obj1[1] = intl.string(getSystemLocale.t["XEHDT/"]);
    obj[1] = jsx(Text.Text, { variant: "heading-xl/bold", children: null });
    obj[0] = <View style={null}>{null}</View>;
    const obj2 = { style: null, children: null };
    obj2[0] = tmp.container;
    const obj3 = { variant: "text-md/normal", children: null };
    const intl2 = getSystemLocale.intl;
    const obj4 = { countdownString: null };
    const _HermesInternal = HermesInternal;
    obj4[0] = "" + padStartResult + ":" + padStartResult1 + ":" + padStartResult2;
    obj3[1] = intl2.formatToPlainString(getSystemLocale.t["+5XVH+"], obj4);
    obj2[1] = jsx(Text.Text, { variant: "text-md/normal", children: null });
    obj[3] = <View style={null}>{null}</View>;
    tmp12 = jsx(Background.BottomSheet, { style: null, children: null });
  }
  return tmp12;
}
noopAll;
createCacheKey = { heading: null, container: null };
createCacheKey = { display: "flex", justifyContent: "center", alignItems: "center", paddingHorizontal: ThemesDefault.space.PX_16, paddingTop: ThemesDefault.space.PX_16, gap: ThemesDefault.space.PX_24 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { display: "flex", justifyContent: "center", alignItems: "center", paddingHorizontal: ThemesDefault.space.PX_16, paddingBottom: ThemesDefault.space.PX_32 };
let closure_6 = createCacheKey.createStyles(createCacheKey);
let obj1 = { display: "flex", justifyContent: "center", alignItems: "center", paddingHorizontal: ThemesDefault.space.PX_16, paddingBottom: ThemesDefault.space.PX_32 };
const result = require("set").fileFinishedImporting("modules/quests/native/QuestEnrollmentBlockedBottomSheet/QuestEnrollmentBlockedBottomSheet.tsx");

export default function QuestEnrollmentBlockedBottomSheetConnected(questContentPosition) {
  ({ questId: require, questEnrollmentBlockedUntil: importDefault, sourceQuestContent } = questContentPosition);
  let obj = require(sourceQuestContent[6]);
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_4.getQuest(closure_0));
  let tmp4 = null;
  if (null != stateFromStores) {
    obj = { overrideVisibility: true, questOrQuests: null, questContent: null, questContentPosition: null, sourceQuestContent: null, children: null };
    obj[1] = stateFromStores;
    obj[2] = tmp(tmp2[8]).QuestContent.QUEST_ENROLLMENT_BLOCKED_BOTTOM_SHEET;
    obj[3] = questContentPosition.questContentPosition;
    obj[4] = sourceQuestContent;
    obj[5] = function children() {
      return closure_1_5(closure_1_7, { questId: closure_0, questEnrollmentBlockedUntil: closure_1, sourceQuestContent });
    };
    tmp4 = jsx(tmp(tmp2[7]).QuestContentImpressionTrackerNative, { overrideVisibility: true, questOrQuests: null, questContent: null, questContentPosition: null, sourceQuestContent: null, children: null });
  }
  return tmp4;
};