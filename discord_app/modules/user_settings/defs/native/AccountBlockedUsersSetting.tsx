// === Module 14605: AccountBlockedUsersSetting ===

// Module 14605 (AccountBlockedUsersSetting)
import get_initialized from "get initialized" /* 504 */;
import react from "react" /* 576 */;
import Constants from "Constants" /* 1085 */;
import intl2 from "intl" /* 1126 */;
import DenyIcon from "DenyIcon" /* 7588 */;
import SettingsConstants from "SettingsConstants" /* 7634 */;
import RelationshipStore from "RelationshipStore" /* 4519 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11129 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const UserSettingsSections = Constants.UserSettingsSections;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let blockedIDs;
  let tmp4;
  let tmp5;
  let tmp8;
  const obj = react;
  const cResult = obj.c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [RelationshipStore];
    const fn = function o() {
      return "" + blockedIDs.getBlockedIDs().length;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  if (cResult[2] !== stateFromStores) {
    const intl = intl2.intl;
    const obj2 = { numberOfBlockedUsers: stateFromStores };
    const formatResult = intl.format(intl2.t["r91W/h"], obj2);
    cResult[2] = stateFromStores;
    cResult[3] = formatResult;
    tmp8 = formatResult;
  } else {
    tmp8 = cResult[3];
  }
  return tmp8;
}) : (() => {
  let blockedIDs;
  const items = [RelationshipStore];
  const obj = get_initialized;
  const numberOfBlockedUsers = obj.useStateFromStores(items, () => "" + blockedIDs.getBlockedIDs().length);
  const intl = intl2.intl;
  return intl.format(intl2.t["r91W/h"], { numberOfBlockedUsers });
});
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.PFOUKW);
  },
  useDescription: tmp2,
  IconComponent: DenyIcon.DenyIcon,
  parent: MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  screen: {
    route: UserSettingsSections.BLOCKED_USERS_V2,
    getComponent() {
      return require("BlockedUsersListV2").default;
    }
  }
};
const route = SettingBuilders.createRoute(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountBlockedUsersSetting.tsx");

export default route;
export const AccountBlockedUsersSettingV2 = route;