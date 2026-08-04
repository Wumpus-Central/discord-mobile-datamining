// discord_app/modules/quests/native/QuestEnrollmentBlockedBottomSheet/QuestEnrollmentBlockedBottomSheet.tsx
import "noop";
import { View } from "get ActivityIndicator";
import initializeState from "initializeState";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
function QuestEnrollmentBlockedBottomSheet(questEnrollmentBlockedUntil) {
  let minutes;
  let seconds;
  questEnrollmentBlockedUntil = questEnrollmentBlockedUntil.questEnrollmentBlockedUntil;
  const tmp = createCacheKey();
  let date = questEnrollmentBlockedUntil;
  if (questEnrollmentBlockedUntil == null) {
    const _Date = Date;
    date = new Date();
  }
  const tmp3Result = importDefault(6237)(date);
  ({ minutes, seconds } = tmp3Result);
  const tmp3 = importDefault(6237);
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
    const obj1 = { variant: "heading-xl/bold", children: null };
    const intl = require(1236) /* getSystemLocale */.intl;
    obj1[1] = intl.string(require(1236) /* getSystemLocale */.t["XEHDT/"]);
    obj[1] = jsx(require(4189) /* Text */.Text, { variant: "heading-xl/bold", children: null });
    obj[0] = <View style={null}>{null}</View>;
    const obj2 = { style: null, children: null };
    obj2[0] = tmp.container;
    const obj3 = { variant: "text-md/normal", children: null };
    const intl2 = require(1236) /* getSystemLocale */.intl;
    const obj4 = { countdownString: null };
    const _HermesInternal = HermesInternal;
    obj4[0] = "" + padStartResult + ":" + padStartResult1 + ":" + padStartResult2;
    obj3[1] = intl2.formatToPlainString(require(1236) /* getSystemLocale */.t["+5XVH+"], obj4);
    obj2[1] = jsx(require(4189) /* Text */.Text, { variant: "text-md/normal", children: null });
    obj[3] = <View style={null}>{null}</View>;
    tmp12 = jsx(require(5247) /* Background */.BottomSheet, { style: null, children: null });
  }
  return tmp12;
}
createCacheKey = { heading: null, container: null };
createCacheKey = { display: "flex", justifyContent: "center", alignItems: "center", paddingHorizontal: require("Themes").space.PX_16, paddingTop: require("Themes").space.PX_16, gap: require("Themes").space.PX_24 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { display: "flex", justifyContent: "center", alignItems: "center", paddingHorizontal: require("Themes").space.PX_16, paddingBottom: require("Themes").space.PX_32 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { display: "flex", justifyContent: "center", alignItems: "center", paddingHorizontal: require("Themes").space.PX_16, paddingBottom: require("Themes").space.PX_32 };
const result = require("initializeState").fileFinishedImporting("modules/quests/native/QuestEnrollmentBlockedBottomSheet/QuestEnrollmentBlockedBottomSheet.tsx");

export default function QuestEnrollmentBlockedBottomSheetConnected(questContentPosition) {
  let importDefault;
  let require;
  let sourceQuestContent;
  ({ questId: require, questEnrollmentBlockedUntil: importDefault, sourceQuestContent } = questContentPosition);
  let obj = require(sourceQuestContent[6]);
  const items = [initializeState];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_4.getQuest(closure_0));
  let tmp4 = null;
  if (null != stateFromStores) {
    obj = { overrideVisibility: true, questOrQuests: null, questContent: null, questContentPosition: null, sourceQuestContent: null, children: null };
    obj[1] = stateFromStores;
    obj[2] = tmp(tmp2[8]).QuestContent.QUEST_ENROLLMENT_BLOCKED_BOTTOM_SHEET;
    obj[3] = questContentPosition.questContentPosition;
    obj[4] = sourceQuestContent;
    obj[5] = function children() {
      return outer1_5(outer1_7, { questId: closure_0, questEnrollmentBlockedUntil: closure_1, sourceQuestContent });
    };
    tmp4 = jsx(tmp(tmp2[7]).QuestContentImpressionTrackerNative, { overrideVisibility: true, questOrQuests: null, questContent: null, questContentPosition: null, sourceQuestContent: null, children: null });
  }
  return tmp4;
};