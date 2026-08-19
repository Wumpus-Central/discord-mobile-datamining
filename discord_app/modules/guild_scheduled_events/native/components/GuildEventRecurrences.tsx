// discord_app/modules/guild_scheduled_events/native/components/GuildEventRecurrences.tsx
import DISCORD_EPOCHDefault from "../../../../utils/SnowflakeUtils.tsx";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useGuildEventRecurrencesDefault from "../../useGuildEventRecurrences.tsx";
import GuildEventRecurrenceDefault from "GuildEventRecurrence.tsx";
import noop from "../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

const require = fn;
({ View: c4, ScrollView: c5 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: error } = jsxProd);
const createCacheKey = { marginTop: 8, marginBottom: 8, borderRadius: ThemesDefault.radii.sm, maxHeight: 140 };
createCacheKey[1] = createCacheKey;
let closure_8 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/guild_scheduled_events/native/components/GuildEventRecurrences.tsx");

export default function GuildEventRecurrences(guildEventId) {
  guildEventId = guildEventId.guildEventId;
  ({ onRecurrencePress: importDefault, activeRecurrenceId: dependencyMap } = guildEventId);
  let ref;
  c4 = undefined;
  ({ guildId, recurrenceRule, hideViewMoreButton } = guildEventId);
  ref = ref.useRef(null);
  const tmp2 = callback2();
  ({ recurrenceStartTimes, canViewMoreRecurrences, updateRecurrenceStartTimes: c4 } = useGuildEventRecurrencesDefault(guildEventId, guildId, recurrenceRule));
  let obj = { variant: "heading-md/semibold", children: null };
  const intl = guildEventId(1236).intl;
  obj[1] = intl.string(guildEventId(1236).t["D/jjoa"]);
  const items = [callback(guildEventId(4734).Text, obj), , ];
  obj = {
    style: tmp2.scrollView,
    ref,
    children: recurrenceStartTimes.map((item, index) => {
      let obj = DISCORD_EPOCHDefault;
      const fromTimestampResult = obj.fromTimestamp(item.getTime());
      obj = { recurrenceId: fromTimestampResult, guildEventId, onPress: closure_1, isActive: fromTimestampResult === closure_2 };
      return closure_1_6(GuildEventRecurrenceDefault, obj, fromTimestampResult);
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
    canViewMoreRecurrences = callback(tmp8(4745).Button, obj1);
  }
  items[2] = canViewMoreRecurrences;
  obj[1] = items;
  return callback(c4, obj);
};