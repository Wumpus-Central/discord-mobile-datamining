// === Module 13215: conjureGuildPickerSources ===

// Module 13215 (conjureGuildPickerSources)
import GlobalUtils from "GlobalUtils" /* 1255 */;
import UserUtils from "UserUtils" /* 5372 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 6917 */;
import GuildUtilsDefault from "GuildUtils" /* 7075 */;
import noop from "module_19" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 5218 */;
import GuildRoleStore from "GuildRoleStore" /* 5212 */;
import UserStore from "UserStore" /* 1388 */;

const require = globalThis.__r;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/guild_pickers/conjureGuildPickerSources.tsx");

export function useConjureGuildRoles(arg0) {
  _require = arg0;
  items = [GuildRoleStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStoresArray(items, () => {
    if (null != closure_0) {
      let sortedRoles = GuildRoleStore.getSortedRoles(tmp);
    } else {
      sortedRoles = [];
    }
    return sortedRoles;
  }, items1);
}
export function useConjureGuildMemberUsers(arg0) {
  _require = arg0;
  items = [GuildMemberStore, UserStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStoresArray(items, () => {
    if (null != closure_0) {
      const memberIds = GuildMemberStore.getMemberIds(tmp);
      const mapped = memberIds.map((item) => user.getUser(item));
      let found = mapped.filter(GlobalUtils.isNotNullish);
    } else {
      found = [];
    }
    return found;
  }, items1);
}
export function conjureMemberUsername(id, stateFromStores1) {
  let identifiable = "always";
  if (stateFromStores1) {
    identifiable = "never";
  }
  return UserUtils.getUserTag(id, { identifiable });
}
export function useConjureMemberRequests(guildId) {
  closure_0 = guildId;
  items = result;
  if (result === undefined) {
    items = [];
  }
  const items1 = [guildId];
  const effect = noop.useEffect(() => {
    if (null != closure_0) {
      const members = GuildUtilsDefault.requestMembers(tmp, "", 25);
    }
  }, items1);
  const joined = items.join(",");
  const items2 = [guildId, joined];
  const effect1 = noop.useEffect(() => {
    if (null != closure_0) {
      if ("" !== joined) {
        const parts = joined.split(",");
        const found = parts.filter((item) => !member.isMember(guildId, item));
        if (found.length > 0) {
          const membersById = GuildActionCreatorsDefault.requestMembersById(tmp, found);
        }
      }
    }
  }, items2);
  const items3 = [guildId];
  return noop.useCallback((str) => {
    const trimmed = str.trim();
    let tmp3 = null != closure_0;
    if (tmp3) {
      tmp3 = "" !== trimmed;
    }
    if (tmp3) {
      const members = GuildUtilsDefault.requestMembers(closure_0, trimmed, 25);
    }
  }, items3);
}