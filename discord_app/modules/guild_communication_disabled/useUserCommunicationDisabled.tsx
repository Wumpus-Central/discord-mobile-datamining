// === Module 7977: useUserCommunicationDisabled ===

// Module 7977 (useUserCommunicationDisabled)
import CommunicationDisabledUtils from "CommunicationDisabledUtils" /* 4188 */;
import GuildMemberStore from "GuildMemberStore" /* 2021 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_communication_disabled/useUserCommunicationDisabled.tsx");

export default function useUserCommunicationDisabled(arg0, arg1) {
  _require = arg0;
  dependencyMap = arg1;
  const items = [GuildMemberStore];
  const items1 = [arg1, arg0];
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
    let member = null;
    if (null != closure_1) {
      member = null;
      if (null != tmp) {
        member = GuildMemberStore.getMember(tmp2, tmp);
      }
    }
    return member;
  }, items1);
  let prop;
  if (stateFromStores != null) {
    prop = stateFromStores.communicationDisabledUntil;
  }
  if (prop == null) {
    prop = null;
  }
  const items2 = [prop, ];
  const obj = require("initialize");
  items2[1] = require("CommunicationDisabledUtils").isMemberCommunicationDisabled(stateFromStores);
  return items2;
};
export const useCurrentUserCommunicationDisabled = function useCurrentUserCommunicationDisabled(guild_id) {
  const items = [UserStore];
  const stateFromStores = id(504).useStateFromStores(items, () => currentUser.getCurrentUser());
  id = undefined;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  dependencyMap = guild_id;
  let tmpResult = tmp(504);
  const items1 = [GuildMemberStore];
  const items2 = [guild_id, id];
  const stateFromStores1 = tmpResult.useStateFromStores(items1, () => {
    let member = null;
    if (null != closure_1) {
      member = null;
      if (null != tmp) {
        member = GuildMemberStore.getMember(tmp2, tmp);
      }
    }
    return member;
  }, items2);
  let prop;
  if (stateFromStores1 != null) {
    prop = stateFromStores1.communicationDisabledUntil;
  }
  if (prop == null) {
    prop = null;
  }
  const items3 = [prop, ];
  tmpResult = tmp(4188);
  items3[1] = tmpResult.isMemberCommunicationDisabled(stateFromStores1);
  return items3;
};
export const userCommunicationDisabled = function userCommunicationDisabled(id, guildId) {
  let member = null;
  if (null != guildId) {
    member = null;
    if (null != id) {
      member = GuildMemberStore.getMember(guildId, id);
    }
  }
  let prop;
  if (member != null) {
    prop = member.communicationDisabledUntil;
  }
  if (prop == null) {
    prop = null;
  }
  const items = [prop, CommunicationDisabledUtils.isMemberCommunicationDisabled(member)];
  return items;
};