// === Module 15053: AccountBlockedUsersSetting ===

// Module 15053 (AccountBlockedUsersSetting)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import RelationshipStore from "RelationshipStore" /* 4760 */;

require = fn;
const ReactCompilerGating = fn(558);
const SettingBuilders = fn(10663);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useAccountBlockedUsersSettingDescription() {
  const cResult = c.c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [RelationshipStore];
    const fn = function s() {
      return "" + blockedIDs.getBlockedIDs().length;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const stateFromStores = initialize.useStateFromStores(tmp4, tmp5);
  if (cResult[2] !== stateFromStores) {
    const intl = util.intl;
    const obj2 = { numberOfBlockedUsers: stateFromStores };
    const formatResult = intl.format(util.t["r91W/h"], obj2);
    cResult[2] = stateFromStores;
    cResult[3] = formatResult;
    let tmp8 = formatResult;
  } else {
    tmp8 = cResult[3];
  }
  return tmp8;
}) : (function useAccountBlockedUsersSettingDescription() {
  const items = [RelationshipStore];
  const numberOfBlockedUsers = initialize.useStateFromStores(items, () => "" + blockedIDs.getBlockedIDs().length);
  const intl = util.intl;
  return intl.format(util.t["r91W/h"], { numberOfBlockedUsers });
});
const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.PFOUKW);
  },
  useDescription: ReactCompilerGating.isReactCompilerEnabled() ? (function useAccountBlockedUsersSettingDescription() {
    const cResult = c.c(4);
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const items = [RelationshipStore];
      const fn = function s() {
        return "" + blockedIDs.getBlockedIDs().length;
      };
      cResult[0] = items;
      cResult[1] = fn;
      tmp4 = items;
      tmp5 = fn;
    } else {
      [tmp4, tmp5] = cResult;
    }
    const stateFromStores = initialize.useStateFromStores(tmp4, tmp5);
    if (cResult[2] !== stateFromStores) {
      const intl = util.intl;
      const obj2 = { numberOfBlockedUsers: stateFromStores };
      const formatResult = intl.format(util.t["r91W/h"], obj2);
      cResult[2] = stateFromStores;
      cResult[3] = formatResult;
      let tmp8 = formatResult;
    } else {
      tmp8 = cResult[3];
    }
    return tmp8;
  }) : (function useAccountBlockedUsersSettingDescription() {
    const items = [RelationshipStore];
    const numberOfBlockedUsers = initialize.useStateFromStores(items, () => "" + blockedIDs.getBlockedIDs().length);
    const intl = util.intl;
    return intl.format(util.t["r91W/h"], { numberOfBlockedUsers });
  }),
  IconComponent: fn(9371).DenyIcon,
  parent: fn(7992).MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  screen: {
    route: fn(1085).UserSettingsSections.BLOCKED_USERS_V2,
    getComponent() {
      return require("BlockedUsersListV2").default;
    }
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountBlockedUsersSetting.tsx");

export default route;
export const AccountBlockedUsersSettingV2 = route;