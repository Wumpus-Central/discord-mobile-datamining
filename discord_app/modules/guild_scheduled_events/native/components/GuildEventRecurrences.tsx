// === Module 9796: GuildEventRecurrences ===

// Module 9796 (GuildEventRecurrences)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import nativeDefault from "native" /* 576 */;
import useGuildEventRecurrencesDefault from "useGuildEventRecurrences" /* 9797 */;
import GuildEventRecurrenceDefault from "GuildEventRecurrence" /* 9799 */;
import noop from "module_19" /* 19 */;

const require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, ScrollView: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
fn(4560);
let createStyles = { container: { marginTop: 16 }, scrollView: null };
createStyles = { marginTop: 8, marginBottom: 8, borderRadius: nativeDefault.radii.sm, maxHeight: 140 };
createStyles.scrollView = createStyles;
let closure_8 = createStyles.createStyles(createStyles);
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
  let obj = { style: tmp2.container, children: null };
  obj = { variant: "heading-md/semibold", children: null };
  const intl = guildEventId(1114).intl;
  obj.children = intl.string(guildEventId(1114).t["D/jjoa"]);
  const items = [closure_6(guildEventId(4556).Text, obj), , ];
  obj = {
    style: tmp2.scrollView,
    ref,
    children: recurrenceStartTimes.map((getTime) => {
      let obj = SnowflakeUtilsDefault;
      const fromTimestampResult = obj.fromTimestamp(getTime.getTime());
      obj = { recurrenceId: fromTimestampResult, guildEventId, onPress, isActive: fromTimestampResult === dependencyMap };
      return timestampProducer(GuildEventRecurrenceDefault, obj, fromTimestampResult);
    })
  };
  items[1] = closure_6(closure_5, obj);
  if (canViewMoreRecurrences) {
    canViewMoreRecurrences = !hideViewMoreButton;
  }
  if (canViewMoreRecurrences) {
    const obj1 = { text: null, onPress: null, size: "sm" };
    const intl2 = tmp8(1114).intl;
    obj1.text = intl2.string(tmp8(1114).t["8O7Hpy"]);
    obj1.onPress = function onPress(stopPropagation) {
      stopPropagation.stopPropagation();
      _undefined();
      const current = ref.current;
      if (current != null) {
        current.scrollToEnd();
      }
    };
    canViewMoreRecurrences = closure_6(tmp8(4975).Button, obj1);
  }
  items[2] = canViewMoreRecurrences;
  obj.children = items;
  return closure_7(c4, obj);
};