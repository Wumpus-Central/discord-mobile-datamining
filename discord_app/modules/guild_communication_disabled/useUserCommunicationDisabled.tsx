// discord_app/modules/guild_communication_disabled/useUserCommunicationDisabled.tsx
import isCommunicationDisabled from "CommunicationDisabledUtils.tsx";
import trackCommunicationDisabled from "../../stores/GuildMemberStore.tsx";
import mergeGuildAvatar from "../../stores/UserStore.tsx";
import { initialize } from "../../../discord_common/js/packages/flux/index.tsx";

require = fn;
const result = require("obj132").fileFinishedImporting("modules/guild_communication_disabled/useUserCommunicationDisabled.tsx");

export default function useUserCommunicationDisabled(arg0, arg1) {
  const _require = arg0;
  dependencyMap = arg1;
  const items = [closure_2];
  const items1 = [arg1, arg0];
  const stateFromStores = require("../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => {
    let member = null;
    if (null != closure_1) {
      member = null;
      if (null != id) {
        member = closure_1_2.getMember(tmp2, id);
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
  const obj = initialize;
  items2[1] = require("CommunicationDisabledUtils.tsx").isMemberCommunicationDisabled(stateFromStores);
  return items2;
};
export const useCurrentUserCommunicationDisabled = function useCurrentUserCommunicationDisabled(guild_id) {
  const items = [closure_3];
  const stateFromStores = id(589).useStateFromStores(items, () => currentUser.getCurrentUser());
  id = undefined;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  dependencyMap = guild_id;
  let tmpResult = tmp(589);
  const items1 = [closure_2];
  const items2 = [guild_id, id];
  const stateFromStores1 = tmpResult.useStateFromStores(items1, () => {
    let member = null;
    if (null != closure_1) {
      member = null;
      if (null != id) {
        member = closure_1_2.getMember(tmp2, id);
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
  tmpResult = tmp(4010);
  items3[1] = tmpResult.isMemberCommunicationDisabled(stateFromStores1);
  return items3;
};
export const userCommunicationDisabled = function userCommunicationDisabled(id, guildId) {
  let member = null;
  if (null != guildId) {
    member = null;
    if (null != id) {
      member = member.getMember(guildId, id);
    }
  }
  let prop;
  if (member != null) {
    prop = member.communicationDisabledUntil;
  }
  if (prop == null) {
    prop = null;
  }
  const items = [prop, isCommunicationDisabled.isMemberCommunicationDisabled(member)];
  return items;
};