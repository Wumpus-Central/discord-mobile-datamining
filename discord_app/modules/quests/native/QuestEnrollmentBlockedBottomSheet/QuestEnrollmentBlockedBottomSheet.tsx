// discord_app/modules/quests/native/QuestEnrollmentBlockedBottomSheet/QuestEnrollmentBlockedBottomSheet.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import Sheet_BottomSheet from "../../../../design/components/Sheet/native/BottomSheet.native.tsx";
import useCountdownDefault from "../../../../hooks/useCountdown.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import QuestStore from "../../QuestStore.tsx";

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5091);
let obj2 = {
  heading: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: nativeDefault.space.PX_16,
    paddingTop: nativeDefault.space.PX_16,
    gap: nativeDefault.space.PX_24,
  },
  container: null,
};
let obj3 = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingTop: nativeDefault.space.PX_16,
  gap: nativeDefault.space.PX_24,
};
obj2.container = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingBottom: nativeDefault.space.PX_32,
};
let closure_6 = createStyles.createStyles(obj2);
fn(558);
let obj4 = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingBottom: nativeDefault.space.PX_32,
};
const ReactCompilerGating = fn(558);
let closure_7 = ReactCompilerGating.isReactCompilerEnabled()
  ? function QuestEnrollmentBlockedBottomSheet(questEnrollmentBlockedUntil) {
      const cResult = c.c(21);
      questEnrollmentBlockedUntil = questEnrollmentBlockedUntil.questEnrollmentBlockedUntil;
      const tmp4 = closure_6();
      if (cResult[0] !== questEnrollmentBlockedUntil) {
        let date = questEnrollmentBlockedUntil;
        if (questEnrollmentBlockedUntil == null) {
          const _Date = Date;
          date = new Date();
        }
        cResult[0] = questEnrollmentBlockedUntil;
        cResult[1] = date;
        let tmp5 = date;
      } else {
        tmp5 = cResult[1];
      }
      const tmp11 = useCountdownDefault(tmp5);
      ({ minutes, seconds } = tmp11);
      const StringResult = String(tmp11.hours);
      if (cResult[2] !== StringResult) {
        const padStartResult = StringResult.padStart(2, "0");
        cResult[2] = StringResult;
        cResult[3] = padStartResult;
        let tmp12 = padStartResult;
      } else {
        tmp12 = cResult[3];
      }
      const StringResult1 = String(minutes);
      if (cResult[4] !== StringResult1) {
        const padStartResult1 = StringResult1.padStart(2, "0");
        cResult[4] = StringResult1;
        cResult[5] = padStartResult1;
        let tmp14 = padStartResult1;
      } else {
        tmp14 = cResult[5];
      }
      const StringResult2 = String(seconds);
      if (cResult[6] !== StringResult2) {
        const padStartResult2 = StringResult2.padStart(2, "0");
        cResult[6] = StringResult2;
        cResult[7] = padStartResult2;
        let tmp16 = padStartResult2;
      } else {
        tmp16 = cResult[7];
      }
      const combined = "" + tmp12 + ":" + tmp14 + ":" + tmp16;
      if (null == questEnrollmentBlockedUntil) {
        return null;
      } else {
        const _Symbol = Symbol;
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = { variant: "heading-xl/bold", children: null };
          const intl = util.intl;
          obj2.children = intl.string(util.t["XEHDT/"]);
          const tmp21 = jsx(Text_Text.Text, { variant: "heading-xl/bold", children: null });
          cResult[8] = tmp21;
          let tmp19 = tmp21;
        } else {
          tmp19 = cResult[8];
        }
        if (cResult[9] !== tmp4.heading) {
          const obj3 = { style: tmp4.heading, children: tmp19 };
          const tmp25 = <View style={tmp4.heading}>{tmp19}</View>;
          cResult[9] = tmp4.heading;
          cResult[10] = tmp25;
          let tmp22 = tmp25;
        } else {
          tmp22 = cResult[10];
        }
        if (cResult[11] !== combined) {
          const intl2 = util.intl;
          const obj4 = { countdownString: combined };
          const formatToPlainStringResult = intl2.formatToPlainString(util.t["+5XVH+"], obj4);
          cResult[11] = combined;
          cResult[12] = formatToPlainStringResult;
          let tmp26 = formatToPlainStringResult;
        } else {
          tmp26 = cResult[12];
        }
        if (cResult[13] !== tmp26) {
          const obj5 = { variant: "text-md/normal", children: tmp26 };
          const tmp30 = jsx(Text_Text.Text, { variant: "text-md/normal", children: tmp26 });
          cResult[13] = tmp26;
          cResult[14] = tmp30;
          let tmp28 = tmp30;
        } else {
          tmp28 = cResult[14];
        }
        if (cResult[15] === tmp4.container) {
          if (cResult[16] === tmp28) {
            let tmp31 = cResult[17];
          }
          if (cResult[18] === tmp31) {
            if (cResult[19] === tmp22) {
              let tmp35 = cResult[20];
            }
            return tmp35;
          }
          const obj6 = { header: tmp22, footer: null, startExpanded: true, children: tmp31 };
          const tmp37 = jsx(Sheet_BottomSheet.BottomSheet, {
            header: tmp22,
            footer: null,
            startExpanded: true,
            children: tmp31,
          });
          cResult[18] = tmp31;
          cResult[19] = tmp22;
          cResult[20] = tmp37;
          tmp35 = tmp37;
        }
        const obj7 = { style: tmp4.container, children: tmp28 };
        const tmp34 = <View style={tmp4.container}>{tmp28}</View>;
        cResult[15] = tmp4.container;
        cResult[16] = tmp28;
        cResult[17] = tmp34;
        tmp31 = tmp34;
      }
    }
  : function QuestEnrollmentBlockedBottomSheet(questEnrollmentBlockedUntil) {
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
        const obj = { header: null, footer: null, startExpanded: true, children: null };
        const obj2 = { style: tmp.heading, children: null };
        const obj3 = { variant: "heading-xl/bold", children: null };
        const intl = util.intl;
        obj3.children = intl.string(util.t["XEHDT/"]);
        obj2.children = jsx(Text_Text.Text, { variant: "heading-xl/bold", children: null });
        obj.header = <View style={tmp.heading}>{null}</View>;
        const obj4 = { style: tmp.container, children: null };
        const obj5 = { variant: "text-md/normal", children: null };
        const intl2 = util.intl;
        const obj6 = { countdownString: null };
        const _HermesInternal = HermesInternal;
        obj6.countdownString = "" + padStartResult + ":" + padStartResult1 + ":" + padStartResult2;
        obj5.children = intl2.formatToPlainString(util.t["+5XVH+"], obj6);
        obj4.children = jsx(Text_Text.Text, { variant: "text-md/normal", children: null });
        obj.children = <View style={tmp.container}>{null}</View>;
        tmp12 = jsx(Sheet_BottomSheet.BottomSheet, { header: null, footer: null, startExpanded: true, children: null });
      }
      return tmp12;
    };
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/quests/native/QuestEnrollmentBlockedBottomSheet/QuestEnrollmentBlockedBottomSheet.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function QuestEnrollmentBlockedBottomSheetConnected(questId) {
      let QUEST_ENROLLMENT_BLOCKED_BOTTOM_SHEET = sourceQuestContent;
      const cResult = questId(sourceQuestContent[7]).c(12);
      questId = questId.questId;
      const questEnrollmentBlockedUntil = questId.questEnrollmentBlockedUntil;
      ({ questContentPosition, sourceQuestContent } = questId);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [QuestStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== questId) {
        const fn = function s() {
          return QuestStore.getQuest(questId);
        };
        cResult[1] = questId;
        cResult[2] = fn;
        let tmp5 = fn;
      } else {
        tmp5 = cResult[2];
      }
      const obj = questId(sourceQuestContent[7]);
      const stateFromStores = questId(QUEST_ENROLLMENT_BLOCKED_BOTTOM_SHEET[8]).useStateFromStores(first, tmp5);
      if (null == stateFromStores) {
        return null;
      } else {
        if (cResult[3] === questEnrollmentBlockedUntil) {
          if (cResult[4] === questId) {
            if (cResult[5] === sourceQuestContent) {
              let tmp7 = cResult[6];
            }
            class B {
              constructor() {
                obj = { questId, questEnrollmentBlockedUntil: closure_1, sourceQuestContent };
                return jsx(QuestEnrollmentBlockedBottomSheet, obj);
              }
            }
            const obj2 = {
              overrideVisibility: true,
              questOrQuests: stateFromStores,
              questContent: null,
              questContentPosition: null,
              sourceQuestContent: null,
              children: null,
            };
            QUEST_ENROLLMENT_BLOCKED_BOTTOM_SHEET = tmp(QUEST_ENROLLMENT_BLOCKED_BOTTOM_SHEET[10]).QuestContent
              .QUEST_ENROLLMENT_BLOCKED_BOTTOM_SHEET;
            obj2.questContent = QUEST_ENROLLMENT_BLOCKED_BOTTOM_SHEET;
            obj2.questContentPosition = questContentPosition;
            obj2.sourceQuestContent = sourceQuestContent;
            obj2.children = tmp7;
            const tmp10 = jsx(tmp(QUEST_ENROLLMENT_BLOCKED_BOTTOM_SHEET[9]).QuestContentImpressionTrackerNative, {
              overrideVisibility: true,
              questOrQuests: stateFromStores,
              questContent: null,
              questContentPosition: null,
              sourceQuestContent: null,
              children: null,
            });
            cResult[7] = stateFromStores;
            cResult[8] = questContentPosition;
            cResult[9] = sourceQuestContent;
            cResult[10] = tmp7;
            cResult[11] = tmp10;
          }
        }
        class B {
          constructor() {
            obj = { questId, questEnrollmentBlockedUntil: closure_1, sourceQuestContent };
            return jsx(QuestEnrollmentBlockedBottomSheet, obj);
          }
        }
        cResult[3] = questEnrollmentBlockedUntil;
        cResult[4] = questId;
        cResult[5] = sourceQuestContent;
        cResult[6] = B;
        tmp7 = B;
      }
      const tmpResult = questId(QUEST_ENROLLMENT_BLOCKED_BOTTOM_SHEET[8]);
    }
  : function QuestEnrollmentBlockedBottomSheetConnected(questContentPosition) {
      ({ questId: require, questEnrollmentBlockedUntil: importDefault, sourceQuestContent } = questContentPosition);
      const items = [QuestStore];
      const stateFromStores = require("initialize").useStateFromStores(items, () => QuestStore.getQuest(questId));
      let tmp4 = null;
      if (null != stateFromStores) {
        const obj2 = {
          overrideVisibility: true,
          questOrQuests: stateFromStores,
          questContent: require("QuestTypes").QuestContent.QUEST_ENROLLMENT_BLOCKED_BOTTOM_SHEET,
          questContentPosition: questContentPosition.questContentPosition,
          sourceQuestContent,
          children() {
            return (
              <closure_7
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
              <closure_7
                questId={questId}
                questEnrollmentBlockedUntil={questEnrollmentBlockedUntil}
                sourceQuestContent={sourceQuestContent}
              />
            );
          },
        });
      }
      return tmp4;
    };
