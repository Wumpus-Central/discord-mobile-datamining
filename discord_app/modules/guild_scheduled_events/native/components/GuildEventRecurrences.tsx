// discord_app/modules/guild_scheduled_events/native/components/GuildEventRecurrences.tsx
import noop from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { useGuildEventRecurrences } from "../../useGuildEventRecurrences.tsx";

let c4;
let c5;
let closure_6;
let error;
const require = arg1;
({ View: c4, ScrollView: c5 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { container: { marginTop: 16 }, scrollView: null };
createCacheKey = { marginTop: 8, marginBottom: 8, borderRadius: require("Themes").radii.sm, maxHeight: 140 };
createCacheKey[1] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("jsxProd").fileFinishedImporting("modules/guild_scheduled_events/native/components/GuildEventRecurrences.tsx");

export default function GuildEventRecurrences(guildEventId) {
  let c4;
  let canViewMoreRecurrences;
  let dependencyMap;
  let guildId;
  let hideViewMoreButton;
  let importDefault;
  let recurrenceRule;
  let recurrenceStartTimes;
  guildEventId = guildEventId.guildEventId;
  ({ onRecurrencePress: importDefault, activeRecurrenceId: dependencyMap } = guildEventId);
  let ref;
  c4 = undefined;
  ({ guildId, recurrenceRule, hideViewMoreButton } = guildEventId);
  ref = ref.useRef(null);
  const tmp2 = createCacheKey();
  ({ recurrenceStartTimes, canViewMoreRecurrences, updateRecurrenceStartTimes: c4 } = useGuildEventRecurrences(guildEventId, guildId, recurrenceRule));
  let obj = { style: tmp2.container, children: null };
  obj = { variant: "heading-md/semibold", children: null };
  const intl = guildEventId(1236).intl;
  obj[1] = intl.string(guildEventId(1236).t["D/jjoa"]);
  const items = [callback(guildEventId(4340).Text, obj), , ];
  obj = {
    style: tmp2.scrollView,
    ref,
    children: recurrenceStartTimes.map((getTime) => {
      let obj = outer1_1(outer1_2[8]);
      const fromTimestampResult = obj.fromTimestamp(getTime.getTime());
      obj = { recurrenceId: fromTimestampResult, guildEventId, onPress: closure_1, isActive: fromTimestampResult === closure_2 };
      return outer1_6(outer1_1(outer1_2[9]), obj, fromTimestampResult);
    })
  };
  items[1] = callback(closure_5, obj);
  if (canViewMoreRecurrences) {
    canViewMoreRecurrences = !hideViewMoreButton;
  }
  if (canViewMoreRecurrences) {
    const obj1 = { text: null, onPress: null, size: "sm" };
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
    canViewMoreRecurrences = callback(tmp8(4754).Button, obj1);
  }
  items[2] = canViewMoreRecurrences;
  obj[1] = items;
  return closure_7(c4, obj);
};