// === Module 11455: useMemberActionsForChannel ===

// Module 11455 (useMemberActionsForChannel)
import trackCommunicationDisabled from "trackCommunicationDisabled";
import handleSettingsLoadSuccess from "handleSettingsLoadSuccess";
import set from "set";
import { GuildMemberFlags } from "GuildMemberFlags";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/guild_onboarding_home/MemberActionUtils.tsx");

export const useMemberActionsForChannel = function useMemberActionsForChannel(guild_id, channel) {
  const _require = guild_id;
  const importDefault = channel;
  let obj = _require(647);
  const items = [handleSettingsLoadSuccess];
  const items1 = [guild_id];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_4.getNewMemberActions(closure_0), items1);
  const tmp = importDefault(5663)(guild_id);
  const items2 = [set];
  const stateFromStores1 = _require(647).useStateFromStores(items2, () => outer1_5.getCompletedActions(closure_0));
  if (tmp) {
    let num;
    if (stateFromStores != null) {
      num = stateFromStores.findIndex((channelId) => channelId.channelId === id.id);
    }
    if (num == null) {
      num = 0;
    }
    let tmp4 = null;
    if (num >= 0) {
      tmp4 = null;
      if (null != stateFromStores) {
        tmp4 = stateFromStores[num];
      }
    }
    obj = { channelAction: null, completed: null };
    obj[0] = tmp4;
    let tmp5 = null != tmp4;
    if (tmp5) {
      let tmp6;
      if (stateFromStores1 != null) {
        tmp6 = stateFromStores1[tmp4.channelId];
      }
      tmp5 = true === tmp6;
    }
    obj[1] = tmp5;
    return obj;
  } else {
    return {};
  }
  const obj3 = _require(647);
};
export const useNextMemberAction = function useNextMemberAction(guild_id, channelId) {
  const _require = guild_id;
  let closure_1 = channelId;
  const items = [handleSettingsLoadSuccess];
  const stateFromStores = _require(647).useStateFromStores(items, () => outer1_4.getNewMemberActions(closure_0));
  const obj = _require(647);
  const items1 = [set];
  const dependencyMap = _require(647).useStateFromStores(items1, () => outer1_5.getCompletedActions(closure_0));
  let found;
  if (stateFromStores != null) {
    found = stateFromStores.find((channelId) => {
      let tmp2;
      if (closure_2 != null) {
        tmp2 = tmp[channelId.channelId];
      }
      let tmp3 = true !== tmp2;
      if (tmp3) {
        tmp3 = channelId.channelId !== closure_1;
      }
      return tmp3;
    });
  }
  return found;
};
export const useAllActionsCompleted = function useAllActionsCompleted(guild_id) {
  const _require = guild_id;
  const items = [trackCommunicationDisabled];
  const stateFromStores = _require(647).useStateFromStores(items, () => outer1_3.getSelfMember(closure_0));
  const obj = _require(647);
  let num;
  if (stateFromStores != null) {
    num = stateFromStores.flags;
  }
  if (num == null) {
    num = 0;
  }
  return _require(1384).hasFlag(num, GuildMemberFlags.COMPLETED_HOME_ACTIONS);
};