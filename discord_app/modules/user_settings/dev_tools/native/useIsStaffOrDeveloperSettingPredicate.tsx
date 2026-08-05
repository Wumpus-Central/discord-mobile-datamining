// discord_app/modules/user_settings/dev_tools/native/useIsStaffOrDeveloperSettingPredicate.tsx
import init from "init";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/user_settings/dev_tools/native/useIsStaffOrDeveloperSettingPredicate.tsx");

export const useStaffOrDeveloperSettingPredicate = function useStaffOrDeveloperSettingPredicate() {
  const items = [init];
  return require("../../../../../discord_common/js/packages/flux/index.tsx") /* initialize */.useStateFromStores(items, () => isDeveloper.isDeveloper);
};