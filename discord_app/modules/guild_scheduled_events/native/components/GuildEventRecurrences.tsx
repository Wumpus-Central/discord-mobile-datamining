// === Module 9928: GuildEventRecurrences ===

// Module 9928 (GuildEventRecurrences)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import nativeDefault from "native" /* 576 */;
import useGuildEventRecurrencesDefault from "useGuildEventRecurrences" /* 9929 */;
import GuildEventRecurrenceDefault from "GuildEventRecurrence" /* 9931 */;
import noop from "module_19" /* 19 */;

const require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, ScrollView: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4639);
let obj2 = { container: { marginTop: 16 }, scrollView: { marginTop: 8, marginBottom: 8, borderRadius: nativeDefault.radii.sm, maxHeight: 140 } };
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/GuildEventRecurrences.tsx");

export default function GuildEventRecurrences(guildEventId) {
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
  const intl = guildEventId(1115).intl;
  obj2.children = intl.string(guildEventId(1115).t["D/jjoa"]);
  const items = [closure_6(guildEventId(4635).Text, obj2), , ];
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
    const intl2 = tmp8(1115).intl;
    obj4.text = intl2.string(tmp8(1115).t["8O7Hpy"]);
    obj4.onPress = function onPress(stopPropagation) {
      stopPropagation.stopPropagation();
      _undefined();
      const current = ref.current;
      if (current != null) {
        current.scrollToEnd();
      }
    };
    canViewMoreRecurrences = closure_6(tmp8(5059).Button, obj4);
  }
  items[2] = canViewMoreRecurrences;
  obj.children = items;
  return closure_7(tmp6, obj);
};