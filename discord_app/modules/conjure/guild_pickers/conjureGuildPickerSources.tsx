// discord_app/modules/conjure/guild_pickers/conjureGuildPickerSources.tsx
import GlobalUtils from "../../../utils/GlobalUtils.tsx";
import UserUtils from "../../../utils/UserUtils.tsx";
import GuildUtilsDefault from "../../../utils/GuildUtils.tsx";
import GuildActionCreatorsDefault from "../../../actions/GuildActionCreators.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import GuildMemberStore from "../../../stores/GuildMemberStore.tsx";
import GuildRoleStore from "../../../stores/GuildRoleStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";

const require = globalThis.__r;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/guild_pickers/conjureGuildPickerSources.tsx");

export function useConjureGuildRoles(arg0) {
  _require = arg0;
  const items = [GuildRoleStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStoresArray(
    items,
    () => {
      if (null != closure_0) {
        let sortedRoles = GuildRoleStore.getSortedRoles(tmp);
      } else {
        sortedRoles = [];
      }
      return sortedRoles;
    },
    items1,
  );
}
export function useConjureGuildMemberUsers(arg0) {
  _require = arg0;
  const items = [GuildMemberStore, UserStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStoresArray(
    items,
    () => {
      if (null != closure_0) {
        const memberIds = GuildMemberStore.getMemberIds(tmp);
        const mapped = memberIds.map((item) => user.getUser(item));
        let found = mapped.filter(GlobalUtils.isNotNullish);
      } else {
        found = [];
      }
      return found;
    },
    items1,
  );
}
export function conjureMemberUsername(id, stateFromStores1) {
  let identifiable = "always";
  if (stateFromStores1) {
    identifiable = "never";
  }
  return UserUtils.getUserTag(id, { identifiable });
}
export function useConjureMemberRequests(conjureSettingsGuildId) {
  closure_0 = conjureSettingsGuildId;
  let items = result;
  if (result === undefined) {
    items = [];
  }
  const items1 = [conjureSettingsGuildId];
  const effect = noop.useEffect(() => {
    if (null != closure_0) {
      const members = GuildUtilsDefault.requestMembers(tmp, "", 25);
    }
  }, items1);
  const joined = items.join(",");
  const items2 = [conjureSettingsGuildId, joined];
  const effect1 = noop.useEffect(() => {
    if (null != closure_0) {
      if ("" !== joined) {
        const parts = joined.split(",");
        const found = parts.filter((item) => !member.isMember(conjureSettingsGuildId, item));
        if (found.length > 0) {
          const membersById = GuildActionCreatorsDefault.requestMembersById(tmp, found);
        }
      }
    }
  }, items2);
  const items3 = [conjureSettingsGuildId];
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
