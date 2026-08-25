// === Module 9194: GuildEventRecurrences ===

// Module 9194 (GuildEventRecurrences)
import ThemesDefault from "Themes" /* 712 */;
import useGuildEventRecurrencesDefault from "useGuildEventRecurrences" /* 9195 */;
import closure_3 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4380 */;

const require = arg1;
({ View: c4, ScrollView: c5 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { container: { marginTop: 16 }, scrollView: null };
createCacheKey = { marginTop: 8, marginBottom: 8, borderRadius: ThemesDefault.radii.sm, maxHeight: 140 };
createCacheKey[1] = createCacheKey;
let closure_8 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/guild_scheduled_events/native/components/GuildEventRecurrences.tsx");

export default function GuildEventRecurrences(guildEventId) {
  guildEventId = guildEventId.guildEventId;
  ({ onRecurrencePress: importDefault, activeRecurrenceId: dependencyMap } = guildEventId);
  let ref;
  c4 = undefined;
  ({ guildId, recurrenceRule, hideViewMoreButton } = guildEventId);
  ref = ref.useRef(null);
  const tmp2 = callback2();
  ({ recurrenceStartTimes, canViewMoreRecurrences, updateRecurrenceStartTimes: c4 } = useGuildEventRecurrencesDefault(guildEventId, guildId, recurrenceRule));
  let obj = { style: tmp2.container, children: null };
  obj = { variant: "heading-md/semibold", children: null };
  const intl = guildEventId(1236).intl;
  obj[1] = intl.string(guildEventId(1236).t["D/jjoa"]);
  const items = [callback(guildEventId(4376).Text, obj), , ];
  obj = {
    style: tmp2.scrollView,
    ref,
    children: recurrenceStartTimes.map((getTime) => {
      let obj = closure_1_1(closure_1_2[8]);
      const fromTimestampResult = obj.fromTimestamp(getTime.getTime());
      obj = { recurrenceId: fromTimestampResult, guildEventId, onPress: closure_1, isActive: fromTimestampResult === closure_2 };
      return closure_1_6(closure_1_1(closure_1_2[9]), obj, fromTimestampResult);
    })
  };
  items[1] = callback(closure_5, obj);
  if (canViewMoreRecurrences) {
    canViewMoreRecurrences = !hideViewMoreButton;
  }
  if (canViewMoreRecurrences) {
    obj1 = { text: null, onPress: null, size: "sm" };
    const intl2 = tmp8(1236).intl;
    obj1[0] = intl2.string(tmp8(1236).t["8O7Hpy"]);
    obj1[1] = function onPress(stopPropagation) {
      stopPropagation.stopPropagation();
      _undefined();
      const current = ref.current;
      if (current != null) {
        current.scrollToEnd();
      }
    };
    canViewMoreRecurrences = callback(tmp8(4815).Button, obj1);
  }
  items[2] = canViewMoreRecurrences;
  obj[1] = items;
  return closure_7(c4, obj);
};