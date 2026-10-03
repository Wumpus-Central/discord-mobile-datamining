// === Module 9286: GuildEventRecurrences ===

// Module 9286 (GuildEventRecurrences)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import nativeDefault from "native" /* 587 */;
import useGuildEventRecurrencesDefault from "useGuildEventRecurrences" /* 9287 */;
import GuildEventRecurrenceDefault from "GuildEventRecurrence" /* 9289 */;
import noop from "module_19" /* 19 */;

const require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, ScrollView: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4890);
let obj2 = { container: { marginTop: 16 }, scrollView: { marginTop: 8, marginBottom: 8, borderRadius: nativeDefault.radii.sm, maxHeight: 140 } };
let closure_8 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { marginTop: 8, marginBottom: 8, borderRadius: nativeDefault.radii.sm, maxHeight: 140 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/GuildEventRecurrences.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((guildEventId) => {
  const cResult = guildEventId(activeRecurrenceId[6]).c(23);
  guildEventId = guildEventId.guildEventId;
  const onRecurrencePress = guildEventId.onRecurrencePress;
  activeRecurrenceId = guildEventId.activeRecurrenceId;
  const hideViewMoreButton = guildEventId.hideViewMoreButton;
  ({ guildId, recurrenceRule } = guildEventId);
  ref = ref.useRef(null);
  const tmp5 = closure_8();
  const obj = guildEventId(activeRecurrenceId[6]);
  ({ recurrenceStartTimes, canViewMoreRecurrences, updateRecurrenceStartTimes } = onRecurrencePress(activeRecurrenceId[7])(guildEventId, guildId, recurrenceRule));
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
    let tmp7 = fn;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { variant: "heading-md/semibold", children: null };
    const intl = tmp(tmp2[9]).intl;
    obj2.children = intl.string(tmp(tmp2[9]).t["D/jjoa"]);
    const tmp10 = closure_6(tmp(tmp2[8]).Text, obj2);
    cResult[2] = tmp10;
    let tmp8 = tmp10;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] === activeRecurrenceId) {
    if (cResult[4] === guildEventId) {
      if (cResult[5] === onRecurrencePress) {
        if (cResult[6] === recurrenceStartTimes) {
          if (cResult[12] === tmp5.scrollView) {
            if (cResult[13] === tmp12) {
              let tmp16 = cResult[14];
            }
            if (cResult[15] === canViewMoreRecurrences) {
              if (cResult[16] === tmp7) {
                if (cResult[17] === hideViewMoreButton) {
                  let tmp20 = cResult[18];
                }
                if (cResult[19] === tmp5.container) {
                  if (cResult[20] === tmp16) {
                    if (cResult[21] === tmp20) {
                      let tmp23 = cResult[22];
                    }
                    return tmp23;
                  }
                }
                const obj3 = { style: tmp5.container, children: null };
                const items = [tmp8, tmp16, tmp20];
                obj3.children = items;
                const tmp26 = closure_7(updateRecurrenceStartTimes, obj3);
                cResult[19] = tmp5.container;
                cResult[20] = tmp16;
                cResult[21] = tmp20;
                cResult[22] = tmp26;
                tmp23 = tmp26;
              }
            }
            let tmp21 = canViewMoreRecurrences;
            if (canViewMoreRecurrences) {
              tmp21 = !hideViewMoreButton;
            }
            if (tmp21) {
              const obj4 = { text: null, onPress: null, size: "sm" };
              const intl2 = tmp(tmp2[9]).intl;
              obj4.text = intl2.string(tmp(tmp2[9]).t["8O7Hpy"]);
              obj4.onPress = tmp7;
              tmp21 = closure_6(tmp(tmp2[12]).Button, obj4);
            }
            cResult[15] = canViewMoreRecurrences;
            cResult[16] = tmp7;
            cResult[17] = hideViewMoreButton;
            cResult[18] = tmp21;
            tmp20 = tmp21;
          }
          const obj5 = { style: tmp11, ref, children: cResult[7] };
          const tmp19 = closure_6(closure_5, obj5);
          cResult[12] = tmp5.scrollView;
          cResult[13] = cResult[7];
          cResult[14] = tmp19;
          tmp16 = tmp19;
        }
      }
    }
  }
  if (cResult[8] === activeRecurrenceId) {
    if (cResult[9] === guildEventId) {
      if (cResult[10] === onRecurrencePress) {
        let tmp13 = cResult[11];
      }
      const mapped = recurrenceStartTimes.map(tmp13);
      cResult[3] = activeRecurrenceId;
      cResult[4] = guildEventId;
      cResult[5] = onRecurrencePress;
      cResult[6] = recurrenceStartTimes;
      cResult[7] = mapped;
    }
  }
  class B {
    constructor(arg0) {
      obj = closure_1(closure_2[10]);
      fromTimestampResult = obj.fromTimestamp(guildEventId.getTime());
      obj1 = { recurrenceId: fromTimestampResult, guildEventId, onPress: onRecurrencePress, isActive: fromTimestampResult === activeRecurrenceId };
      return jsx(closure_1(closure_2[11]), obj1, fromTimestampResult);
    }
  }
  cResult[8] = activeRecurrenceId;
  cResult[9] = guildEventId;
  cResult[10] = onRecurrencePress;
  cResult[11] = B;
  tmp13 = B;
  const tmp6 = onRecurrencePress(activeRecurrenceId[7])(guildEventId, guildId, recurrenceRule);
}) : ((guildEventId) => {
  guildEventId = guildEventId.guildEventId;
  ({ onRecurrencePress: importDefault, activeRecurrenceId: dependencyMap } = guildEventId);
  let ref;
  c4 = undefined;
  ({ guildId, recurrenceRule, hideViewMoreButton } = guildEventId);
  ref = ref.useRef(null);
  const tmp2 = closure_8();
  ({ recurrenceStartTimes, canViewMoreRecurrences, updateRecurrenceStartTimes: c4 } = useGuildEventRecurrencesDefault(guildEventId, guildId, recurrenceRule));
  const obj = { style: tmp2.container, children: null };
  const obj2 = { variant: "heading-md/semibold", children: null };
  const intl = guildEventId(1126).intl;
  obj2.children = intl.string(guildEventId(1126).t["D/jjoa"]);
  const items = [closure_6(guildEventId(4886).Text, obj2), , ];
  const tmp4 = useGuildEventRecurrencesDefault(guildEventId, guildId, recurrenceRule);
  const tmp6 = c4;
  items[1] = closure_6(closure_5, {
    style: tmp2.scrollView,
    ref,
    children: recurrenceStartTimes.map((getTime) => {
      const fromTimestampResult = SnowflakeUtilsDefault.fromTimestamp(getTime.getTime());
      return timestampProducer(GuildEventRecurrenceDefault, { recurrenceId: fromTimestampResult, guildEventId, onPress, isActive: fromTimestampResult === dependencyMap }, fromTimestampResult);
    })
  });
  if (canViewMoreRecurrences) {
    canViewMoreRecurrences = !hideViewMoreButton;
  }
  if (canViewMoreRecurrences) {
    const obj4 = { text: null, onPress: null, size: "sm" };
    const intl2 = tmp8(1126).intl;
    obj4.text = intl2.string(tmp8(1126).t["8O7Hpy"]);
    obj4.onPress = function onPress(stopPropagation) {
      stopPropagation.stopPropagation();
      _undefined();
      const current = ref.current;
      if (current != null) {
        current.scrollToEnd();
      }
    };
    canViewMoreRecurrences = closure_6(tmp8(5594).Button, obj4);
  }
  items[2] = canViewMoreRecurrences;
  obj.children = items;
  return closure_7(tmp6, obj);
});