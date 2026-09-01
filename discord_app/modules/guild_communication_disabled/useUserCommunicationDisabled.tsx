// discord_app/modules/guild_communication_disabled/useUserCommunicationDisabled.tsx
import isCommunicationDisabled from "CommunicationDisabledUtils.tsx";
import closure_2 from "../../stores/GuildMemberStore.tsx";
import closure_3 from "../../stores/UserStore.tsx";
import { initialize } from "../../../discord_common/js/packages/flux/index.tsx";

require = arg1;
const result = require("set").fileFinishedImporting("modules/guild_communication_disabled/useUserCommunicationDisabled.tsx");

export default function useUserCommunicationDisabled(arg0, arg1) {
  const _require = arg0;
  dependencyMap = arg1;
  const items = [closure_2];
  const items1 = [arg1, arg0];
  const stateFromStores = require("../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => {
    let member = null;
    if (null != closure_1) {
      member = null;
      if (null != tmp) {
        member = closure_1_2.getMember(tmp2, tmp);
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
  const tmp = _require;
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
      if (null != tmp) {
        member = closure_1_2.getMember(tmp2, tmp);
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
  tmpResult = tmp(4110);
  items3[1] = tmpResult.isMemberCommunicationDisabled(stateFromStores1);
  return items3;
};
export const userCommunicationDisabled = function userCommunicationDisabled(id, guildId) {
  let member = null;
  if (null != guildId) {
    member = null;
    if (null != id) {
      member = closure_2.getMember(guildId, id);
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