// discord_app/modules/quests/native/QuestEnrollmentBlockedBottomSheet/QuestEnrollmentBlockedBottomSheet.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import intl3 from "../../../../intl/index.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import Sheet_BottomSheet from "../../../../design/components/Sheet/native/BottomSheet.native.tsx";
import useCountdownDefault from "../../../../hooks/useCountdown.tsx";
import react from "../../../../../_runtime/00019_react.js";
import QuestStore from "../../QuestStore.tsx";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let BottomSheet;

let obj2;
let obj3;
const View = react_native.View;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { heading: obj2, container: obj3 };
obj2 = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingTop: nativeDefault.space.PX_16,
  gap: nativeDefault.space.PX_24,
};
createStyles = createStyles.createStyles;
obj3 = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingBottom: nativeDefault.space.PX_32,
};
let closure_6 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (questId) => {
      let first;
      let questContentPosition;
      let sourceQuestContent;
      let tmp6;
      const obj = questId(sourceQuestContent[7]);
      const cResult = obj.c(12);
      questId = questId.questId;
      const questEnrollmentBlockedUntil = questId.questEnrollmentBlockedUntil;
      ({ questContentPosition, sourceQuestContent } = questId);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [QuestStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== questId) {
        const fn = function s() {
          return QuestStore.getQuest(questId);
        };
        cResult[1] = questId;
        cResult[2] = fn;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const tmpResult = questId(sourceQuestContent[8]);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
      if (null != stateFromStores) {
        if (cResult[3] === questEnrollmentBlockedUntil) {
          if (cResult[4] === questId) {
            let tmp8;
            if (cResult[5] === sourceQuestContent) {
              tmp8 = cResult[6];
            }
            class C {
              constructor() {
                return (
                  <closure_7
                    questId={questId}
                    questEnrollmentBlockedUntil={questEnrollmentBlockedUntil}
                    sourceQuestContent={sourceQuestContent}
                  />
                );
              }
            }
            const QuestContentImpressionTrackerNative = tmp(sourceQuestContent[9]).QuestContentImpressionTrackerNative;
            const tmp11 = (
              <QuestContentImpressionTrackerNative
                overrideVisibility
                questOrQuests={stateFromStores}
                questContent={questId(sourceQuestContent[10]).QuestContent.QUEST_ENROLLMENT_BLOCKED_BOTTOM_SHEET}
                questContentPosition={questContentPosition}
                sourceQuestContent={sourceQuestContent}
              >
                {tmp8}
              </QuestContentImpressionTrackerNative>
            );
            cResult[7] = stateFromStores;
            cResult[8] = questContentPosition;
            cResult[9] = sourceQuestContent;
            cResult[10] = tmp8;
            cResult[11] = tmp11;
          }
        }
        class C {
          constructor() {
            return (
              <closure_7
                questId={questId}
                questEnrollmentBlockedUntil={questEnrollmentBlockedUntil}
                sourceQuestContent={sourceQuestContent}
              />
            );
          }
        }
        cResult[3] = questEnrollmentBlockedUntil;
        cResult[4] = questId;
        cResult[5] = sourceQuestContent;
        cResult[6] = C;
        tmp8 = C;
      }
      return null;
    }
  : (questContentPosition) => {
      let questEnrollmentBlockedUntil;
      let questId;
      let sourceQuestContent;
      ({ questId: require, questEnrollmentBlockedUntil: importDefault, sourceQuestContent } = questContentPosition);
      questContentPosition = questContentPosition.questContentPosition;
      const items = [QuestStore];
      const obj = require("get initialized");
      const stateFromStores = obj.useStateFromStores(items, () => QuestStore.getQuest(require));
      let tmp4 = null;
      if (null != stateFromStores) {
        const QuestContentImpressionTrackerNative =
          require("QuestContentImpressionTracker").QuestContentImpressionTrackerNative;
        tmp4 = (
          <QuestContentImpressionTrackerNative
            overrideVisibility
            questOrQuests={stateFromStores}
            questContent={require("QuestTypes").QuestContent.QUEST_ENROLLMENT_BLOCKED_BOTTOM_SHEET}
            questContentPosition={questContentPosition}
            sourceQuestContent={sourceQuestContent}
          >
            {function children() {
              return (
                <closure_7
                  questId={require}
                  questEnrollmentBlockedUntil={importDefault}
                  sourceQuestContent={sourceQuestContent}
                />
              );
            }}
          </QuestContentImpressionTrackerNative>
        );
      }
      return tmp4;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_7 = ReactCompilerGating.isReactCompilerEnabled()
  ? function (questEnrollmentBlockedUntil) {
      let minutes;
      let seconds;
      let tmp10;
      let tmp12;
      let tmp14;
      let tmp5;
      const obj = react2;
      const cResult = obj.c(21);
      questEnrollmentBlockedUntil = questEnrollmentBlockedUntil.questEnrollmentBlockedUntil;
      const tmp4 = closure_6();
      if (cResult[0] !== questEnrollmentBlockedUntil) {
        let date = questEnrollmentBlockedUntil;
        if (questEnrollmentBlockedUntil == null) {
          const _Date = Date;
          const self = this;
          const self2 = this;
          date = new Date();
        }
        cResult[0] = questEnrollmentBlockedUntil;
        cResult[1] = date;
        tmp5 = date;
      } else {
        tmp5 = cResult[1];
      }
      const tmp9 = useCountdownDefault(tmp5);
      ({ minutes, seconds } = tmp9);
      const StringResult = String(tmp9.hours);
      if (cResult[2] !== StringResult) {
        const padStartResult = StringResult.padStart(2, "0");
        cResult[2] = StringResult;
        cResult[3] = padStartResult;
        tmp10 = padStartResult;
      } else {
        tmp10 = cResult[3];
      }
      const StringResult1 = String(minutes);
      if (cResult[4] !== StringResult1) {
        const padStartResult1 = StringResult1.padStart(2, "0");
        cResult[4] = StringResult1;
        cResult[5] = padStartResult1;
        tmp12 = padStartResult1;
      } else {
        tmp12 = cResult[5];
      }
      const StringResult2 = String(seconds);
      if (cResult[6] !== StringResult2) {
        const padStartResult2 = StringResult2.padStart(2, "0");
        cResult[6] = StringResult2;
        cResult[7] = padStartResult2;
        tmp14 = padStartResult2;
      } else {
        tmp14 = cResult[7];
      }
      const combined = "" + tmp10 + ":" + tmp12 + ":" + tmp14;
      if (null == questEnrollmentBlockedUntil) {
        return null;
      } else {
        let tmp17;
        let tmp20;
        let tmp24;
        let tmp26;
        const _Symbol = Symbol;
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          const Text = Text_Text.Text;
          const intl = intl3.intl;
          const tmp19 = <Text variant="heading-xl/bold">{intl.string(intl3.t["XEHDT/"])}</Text>;
          cResult[8] = tmp19;
          tmp17 = tmp19;
        } else {
          tmp17 = cResult[8];
        }
        if (cResult[9] !== tmp4.heading) {
          const tmp23 = <View style={tmp4.heading}>{tmp17}</View>;
          cResult[9] = tmp4.heading;
          cResult[10] = tmp23;
          tmp20 = tmp23;
        } else {
          tmp20 = cResult[10];
        }
        const container = tmp4.container;
        if (cResult[11] !== combined) {
          const intl2 = intl3.intl;
          const obj4 = { countdownString: combined };
          const formatToPlainStringResult = intl2.formatToPlainString(intl3.t["+5XVH+"], obj4);
          cResult[11] = combined;
          cResult[12] = formatToPlainStringResult;
          tmp24 = formatToPlainStringResult;
        } else {
          tmp24 = cResult[12];
        }
        if (cResult[13] !== tmp24) {
          const tmp28 = jsx(Text_Text.Text, { variant: "text-md/normal", children: tmp24 });
          cResult[13] = tmp24;
          cResult[14] = tmp28;
          tmp26 = tmp28;
        } else {
          tmp26 = cResult[14];
        }
        if (cResult[15] === tmp4.container) {
          let tmp29;
          if (cResult[16] === tmp26) {
            tmp29 = cResult[17];
          }
          if (cResult[18] === tmp29) {
            let tmp33;
            if (cResult[19] === tmp20) {
              tmp33 = cResult[20];
            }
            return tmp33;
          }
          const tmp35 = jsx(Sheet_BottomSheet.BottomSheet, {
            header: tmp20,
            footer: null,
            startExpanded: true,
            children: tmp29,
          });
          cResult[18] = tmp29;
          cResult[19] = tmp20;
          cResult[20] = tmp35;
          tmp33 = tmp35;
        }
        const tmp32 = <View style={container}>{tmp26}</View>;
        cResult[15] = tmp4.container;
        cResult[16] = tmp26;
        cResult[17] = tmp32;
        tmp29 = tmp32;
      }
    }
  : function (questEnrollmentBlockedUntil) {
      let formatToPlainString;
      let intl;
      let minutes;
      let obj6;
      let prop;
      let seconds;
      questEnrollmentBlockedUntil = questEnrollmentBlockedUntil.questEnrollmentBlockedUntil;
      const tmp = closure_6();
      let date = questEnrollmentBlockedUntil;
      const tmp3 = useCountdownDefault;
      if (questEnrollmentBlockedUntil == null) {
        const _Date = Date;
        const self = this;
        const self2 = this;
        date = new Date();
      }
      const tmp3Result = tmp3(date);
      ({ minutes, seconds } = tmp3Result);
      const StringResult = String(tmp3Result.hours);
      const padStartResult = StringResult.padStart(2, "0");
      const StringResult1 = String(minutes);
      const padStartResult1 = StringResult1.padStart(2, "0");
      const StringResult2 = String(seconds);
      let tmp10 = null;
      const padStartResult2 = StringResult2.padStart(2, "0");
      if (null != questEnrollmentBlockedUntil) {
        BottomSheet = Sheet_BottomSheet.BottomSheet;
        ({ variant: "heading-xl/bold", children: intl.string(intl3.t["XEHDT/"]) });
        const Text = Text_Text.Text;
        intl = intl3.intl;
        ({ variant: "text-md/normal", children: formatToPlainString(prop, obj6) });
        const Text2 = Text_Text.Text;
        const intl2 = intl3.intl;
        formatToPlainString = intl2.formatToPlainString;
        const _HermesInternal = HermesInternal;
        obj6 = { countdownString: "" + padStartResult + ":" + padStartResult1 + ":" + padStartResult2 };
        prop = intl3.t["+5XVH+"];
        tmp10 = (
          <BottomSheet header={null} footer={null} startExpanded>
            {null}
          </BottomSheet>
        );
      }
      return tmp10;
    };
const result = size.fileFinishedImporting(
  "modules/quests/native/QuestEnrollmentBlockedBottomSheet/QuestEnrollmentBlockedBottomSheet.tsx",
);

export default tmp4;
