// === Module 15361: HighlightNotificationsSetting ===

// Module 15361 (HighlightNotificationsSetting)
import get_initialized from "get initialized" /* 504 */;
import react from "react" /* 576 */;
import Constants from "Constants" /* 1085 */;
import intl2 from "intl" /* 1126 */;
import SettingsConstants from "SettingsConstants" /* 7645 */;
import GuildStore from "GuildStore" /* 2074 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11142 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const UserSettingsSections = Constants.UserSettingsSections;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let guildCount;
  let tmp4;
  let tmp5;
  const obj = react;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    const fn = function s() {
      return guildCount.getGuildCount() > 0;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  return tmpResult.useStateFromStores(tmp4, tmp5);
}) : (() => {
  let guildCount;
  const items = [GuildStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => guildCount.getGuildCount() > 0);
});
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.o8Bypv);
  },
  parent: MobileUserSettings.NOTIFICATIONS,
  useDescription() {
    const intl = intl2.intl;
    return intl.string(intl2.t["Vw/Xn8"]);
  },
  usePredicate: tmp2,
  screen: {
    route: UserSettingsSections.HIGHLIGHT_NOTIFICATIONS,
    getComponent() {
      return require("UserSettingsHighlightNotifications").default;
    }
  }
};
const route = SettingBuilders.createRoute(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/HighlightNotificationsSetting.tsx");

export default route;
export const useHighlightNotifications = tmp2;