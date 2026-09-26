// === Module 8904: useVadColors ===

// Module 8904 (useVadColors)
import initialize from "initialize" /* 504 */;
import GuildMemberStore from "GuildMemberStore" /* 2108 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/calls/useVadColors.tsx");

export default function useVadColors(arg0) {
  ({ userId: require, guildId: dependencyMap } = arg0);
  const items = [UserStore];
  const stateFromStores = initialize.useStateFromStores(items, () => {
    let user = null;
    if (null != require) {
      user = UserStore.getUser(tmp);
    }
    return user;
  });
  const items1 = [GuildMemberStore];
  const stateFromStores1 = initialize.useStateFromStores(items1, () => {
    let member = null;
    if (null != require) {
      member = null;
      if (null != dependencyMap) {
        member = GuildMemberStore.getMember(tmp3, tmp);
      }
    }
    return member;
  });
  let vadColors;
  if (stateFromStores1 != null) {
    vadColors = stateFromStores1.vadColors;
  }
  if (vadColors == null) {
    let vadColors1;
    if (stateFromStores != null) {
      vadColors1 = stateFromStores.vadColors;
    }
    vadColors = vadColors1;
  }
  if (vadColors == null) {
    vadColors = null;
  }
  return vadColors;
};