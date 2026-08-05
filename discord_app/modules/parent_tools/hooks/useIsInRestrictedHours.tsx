// discord_app/modules/parent_tools/hooks/useIsInRestrictedHours.tsx
import mergeGuildAvatar from "mergeGuildAvatar";
import freshTeenActivityWithMap from "freshTeenActivityWithMap";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/parent_tools/hooks/useIsInRestrictedHours.tsx");

export default function useIsInRestrictedHours() {
  const items = [mergeGuildAvatar, freshTeenActivityWithMap];
  return require("../../../../discord_common/js/packages/flux/index.tsx") /* initialize */.useStateFromStores(items, require("../RestrictedHoursManager.tsx") /* scheduleUpcomingWarning */.getCurrentRestrictedHoursState);
};