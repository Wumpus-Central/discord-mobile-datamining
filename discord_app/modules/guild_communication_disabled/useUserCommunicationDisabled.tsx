// === Module 7882: useUserCommunicationDisabled ===

// Module 7882 (useUserCommunicationDisabled)
import trackCommunicationDisabled from "trackCommunicationDisabled";
import mergeGuildAvatar from "mergeGuildAvatar";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/guild_communication_disabled/useUserCommunicationDisabled.tsx");

export default function useUserCommunicationDisabled(arg0, arg1) {
  const _require = arg0;
  const dependencyMap = arg1;
  const items = [trackCommunicationDisabled];
  const items1 = [arg1, arg0];
  const stateFromStores = _require(589).useStateFromStores(items, () => {
    let member = null;
    if (null != closure_1) {
      member = null;
      if (null != tmp) {
        member = outer1_2.getMember(tmp2, tmp);
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
  const obj = _require(589);
  const tmp = _require;
  items2[1] = _require(3872).isMemberCommunicationDisabled(stateFromStores);
  return items2;
};
export const useCurrentUserCommunicationDisabled = function useCurrentUserCommunicationDisabled(guild_id) {
  const items = [mergeGuildAvatar];
  const stateFromStores = id(589).useStateFromStores(items, () => currentUser.getCurrentUser());
  id = undefined;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  const dependencyMap = guild_id;
  let tmpResult = tmp(589);
  const items1 = [trackCommunicationDisabled];
  const items2 = [guild_id, id];
  const stateFromStores1 = tmpResult.useStateFromStores(items1, () => {
    let member = null;
    if (null != closure_1) {
      member = null;
      if (null != tmp) {
        member = outer1_2.getMember(tmp2, tmp);
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
  tmpResult = tmp(3872);
  items3[1] = tmpResult.isMemberCommunicationDisabled(stateFromStores1);
  return items3;
};
export const userCommunicationDisabled = function userCommunicationDisabled(id, guildId) {
  let member = null;
  if (null != guildId) {
    member = null;
    if (null != id) {
      member = trackCommunicationDisabled.getMember(guildId, id);
    }
  }
  let prop;
  if (member != null) {
    prop = member.communicationDisabledUntil;
  }
  if (prop == null) {
    prop = null;
  }
  const items = [prop, require(3872) /* isCommunicationDisabled */.isMemberCommunicationDisabled(member)];
  return items;
};