// === Module 9286: GuildEventRecurrences ===

// Module 9286 (GuildEventRecurrences)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import nativeDefault from "native" /* 587 */;
import useGuildEventRecurrencesDefault from "useGuildEventRecurrences" /* 9287 */;
import GuildEventRecurrenceDefault from "GuildEventRecurrence" /* 9289 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let guildEventId;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
({ View: closure_4, ScrollView: hasOwnProperty } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let obj = { container: { marginTop: 16 }, scrollView: obj2 };
obj2 = { marginTop: 8, marginBottom: 8, borderRadius: nativeDefault.radii.sm, maxHeight: 140 };
let closure_8 = createStyles.createStyles(obj);
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildEventId) => {
  let activeRecurrenceId;
  let canViewMoreRecurrences;
  let guildId;
  let intl;
  let intl2;
  let items;
  let recurrenceRule;
  let recurrenceStartTimes;
  let ref;
  let tmp12;
  let tmp7;
  let tmp8;
  let updateRecurrenceStartTimes;
  let obj = guildEventId(activeRecurrenceId[6]);
  const cResult = obj.c(23);
  guildEventId = guildEventId.guildEventId;
  const onRecurrencePress = guildEventId.onRecurrencePress;
  activeRecurrenceId = guildEventId.activeRecurrenceId;
  const hideViewMoreButton = guildEventId.hideViewMoreButton;
  ({ guildId, recurrenceRule } = guildEventId);
  ref = ref.useRef(null);
  const tmp5 = closure_8();
  ({ recurrenceStartTimes, canViewMoreRecurrences, updateRecurrenceStartTimes } = onRecurrencePress(activeRecurrenceId[7])(guildEventId, guildId, recurrenceRule));
  onRecurrencePress(activeRecurrenceId[7])(guildEventId, guildId, recurrenceRule);
  if (cResult[0] !== updateRecurrenceStartTimes) {
    const fn = function s(stopPropagation) {
      stopPropagation.stopPropagation();
      updateRecurrenceStartTimes();
      const current = ref.current;
      if (current != null) {
        current.scrollToEnd();
      }
    };
    cResult[0] = updateRecurrenceStartTimes;
    cResult[1] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[1];
  }
  const container = tmp5.container;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = { variant: "heading-md/semibold", children: intl.string(guildEventId(tmp2[9]).t["D/jjoa"]) };
    const Text = tmp(tmp2[8]).Text;
    intl = tmp(tmp2[9]).intl;
    const tmp10 = closure_6(Text, obj2);
    cResult[2] = tmp10;
    tmp8 = tmp10;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] === activeRecurrenceId) {
    if (cResult[4] === guildEventId) {
      if (cResult[5] === onRecurrencePress) {
        if (cResult[6] === recurrenceStartTimes) {
          tmp12 = cResult[7];
        }
        if (cResult[12] === tmp5.scrollView) {
          let tmp15;
          if (cResult[13] === tmp12) {
            tmp15 = cResult[14];
          }
          if (cResult[15] === canViewMoreRecurrences) {
            if (cResult[16] === tmp7) {
              let tmp19;
              if (cResult[17] === hideViewMoreButton) {
                tmp19 = cResult[18];
              }
              if (cResult[19] === tmp5.container) {
                if (cResult[20] === tmp15) {
                  let tmp22;
                  if (cResult[21] === tmp19) {
                    tmp22 = cResult[22];
                  }
                  return tmp22;
                }
              }
              const obj3 = { style: container, children: items };
              items = [tmp8, tmp15, tmp19];
              const tmp25 = closure_7(updateRecurrenceStartTimes, obj3);
              cResult[19] = tmp5.container;
              cResult[20] = tmp15;
              cResult[21] = tmp19;
              cResult[22] = tmp25;
              tmp22 = tmp25;
            }
          }
          let tmp20 = canViewMoreRecurrences && !hideViewMoreButton;
          if (tmp20) {
            const obj4 = { text: intl2.string(guildEventId(activeRecurrenceId[9]).t["8O7Hpy"]), onPress: tmp7, size: "sm" };
            const Button = tmp(tmp2[12]).Button;
            intl2 = tmp(tmp2[9]).intl;
            tmp20 = closure_6(Button, obj4);
          }
          cResult[15] = canViewMoreRecurrences;
          cResult[16] = tmp7;
          cResult[17] = hideViewMoreButton;
          cResult[18] = tmp20;
          tmp19 = tmp20;
        }
        const obj5 = { style: tmp11, ref, children: tmp12 };
        const tmp18 = closure_6(closure_5, obj5);
        cResult[12] = tmp5.scrollView;
        cResult[13] = tmp12;
        cResult[14] = tmp18;
        tmp15 = tmp18;
      }
    }
  }
  if (cResult[8] === activeRecurrenceId) {
    if (cResult[9] === guildEventId) {
      let tmp13;
      if (cResult[10] === onRecurrencePress) {
        tmp13 = cResult[11];
      }
      const mapped = recurrenceStartTimes.map(tmp13);
      cResult[3] = activeRecurrenceId;
      cResult[4] = guildEventId;
      cResult[5] = onRecurrencePress;
      cResult[6] = recurrenceStartTimes;
      cResult[7] = mapped;
      tmp12 = mapped;
    }
  }
  class B {
    constructor(getTime) {
      const obj = SnowflakeUtilsDefault;
      const fromTimestampResult = obj.fromTimestamp(getTime.getTime());
      const obj2 = { recurrenceId: fromTimestampResult, guildEventId, onPress: onRecurrencePress, isActive: fromTimestampResult === activeRecurrenceId };
      return metroRequire(GuildEventRecurrenceDefault, obj2, fromTimestampResult);
    }
  }
  cResult[8] = activeRecurrenceId;
  cResult[9] = guildEventId;
  cResult[10] = onRecurrencePress;
  cResult[11] = B;
  tmp13 = B;
}) : ((guildEventId) => {
  let _undefined;
  let c4;
  let canViewMoreRecurrences;
  let guildId;
  let hideViewMoreButton;
  let intl;
  let intl2;
  let items;
  let onPress;
  let recurrenceRule;
  let recurrenceStartTimes;
  guildEventId = guildEventId.guildEventId;
  ({ onRecurrencePress: importDefault, activeRecurrenceId: dependencyMap } = guildEventId);
  let ref;
  c4 = undefined;
  ({ guildId, recurrenceRule, hideViewMoreButton } = guildEventId);
  ref = ref.useRef(null);
  const tmp2 = closure_8();
  ({ recurrenceStartTimes, canViewMoreRecurrences, updateRecurrenceStartTimes: c4 } = useGuildEventRecurrencesDefault(guildEventId, guildId, recurrenceRule));
  let obj = { style: tmp2.container, children: items };
  let obj2 = { variant: "heading-md/semibold", children: intl.string(guildEventId(1126).t["D/jjoa"]) };
  useGuildEventRecurrencesDefault(guildEventId, guildId, recurrenceRule);
  const Text = guildEventId(4886).Text;
  intl = guildEventId(1126).intl;
  items = [closure_6(Text, obj2), , ];
  const obj3 = {
    style: tmp2.scrollView,
    ref,
    children: recurrenceStartTimes.map((getTime) => {
      const obj = SnowflakeUtilsDefault;
      const fromTimestampResult = obj.fromTimestamp(getTime.getTime());
      const obj2 = { recurrenceId: fromTimestampResult, guildEventId, onPress: importDefault, isActive: fromTimestampResult === dependencyMap };
      return metroRequire(GuildEventRecurrenceDefault, obj2, fromTimestampResult);
    })
  };
  items[1] = closure_6(closure_5, obj3);
  const tmp6 = c4;
  if (canViewMoreRecurrences) {
    canViewMoreRecurrences = !hideViewMoreButton;
  }
  if (canViewMoreRecurrences) {
    const obj4 = {
      text: intl2.string(guildEventId(1126).t["8O7Hpy"]),
      onPress(stopPropagation) {
          stopPropagation.stopPropagation();
          _undefined();
          const current = ref.current;
          if (current != null) {
            current.scrollToEnd();
          }
        },
      size: "sm"
    };
    const Button = tmp8(5594).Button;
    intl2 = tmp8(1126).intl;
    canViewMoreRecurrences = closure_6(Button, obj4);
  }
  items[2] = canViewMoreRecurrences;
  return closure_7(tmp6, obj);
});
const result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/GuildEventRecurrences.tsx");

export default tmp4;