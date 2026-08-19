// discord_app/modules/guild_onboarding_home/MemberActionUtils.tsx
import useIsNewMemberDefault from "useIsNewMember.tsx";
import trackCommunicationDisabled from "../../stores/GuildMemberStore.tsx";
import handleSettingsLoadSuccess from "GuildOnboardingHomeSettingsStore.tsx";
import set from "GuildOnboardingMemberActionStore.tsx";
import { GuildMemberFlags } from "../guild_member/GuildMemberConstants.tsx";
import { defaultAreStatesEqual } from "../../../discord_common/js/packages/flux/useStateFromStores.tsx";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/guild_onboarding_home/MemberActionUtils.tsx");

export const useMemberActionsForChannel = function useMemberActionsForChannel(guild_id, channel) {
  const _require = guild_id;
  importDefault = channel;
  let obj = defaultAreStatesEqual;
  const items = [closure_4];
  const items1 = [guild_id];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_4.getNewMemberActions(closure_0), items1);
  const tmp = useIsNewMemberDefault(guild_id);
  const items2 = [closure_5];
  const stateFromStores1 = require("../../../discord_common/js/packages/flux/useStateFromStores.tsx").useStateFromStores(items2, () => closure_1_5.getCompletedActions(closure_0));
  if (tmp) {
    let num;
    if (stateFromStores != null) {
      num = stateFromStores.findIndex((item, index) => item.channelId === id.id);
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
  const obj3 = defaultAreStatesEqual;
};
export const useNextMemberAction = function useNextMemberAction(guild_id, channelId) {
  const _require = guild_id;
  closure_1 = channelId;
  const items = [closure_4];
  const stateFromStores = require("../../../discord_common/js/packages/flux/useStateFromStores.tsx").useStateFromStores(items, () => closure_1_4.getNewMemberActions(closure_0));
  const obj = defaultAreStatesEqual;
  const items1 = [closure_5];
  dependencyMap = require("../../../discord_common/js/packages/flux/useStateFromStores.tsx").useStateFromStores(items1, () => closure_1_5.getCompletedActions(closure_0));
  let found;
  if (stateFromStores != null) {
    found = stateFromStores.find((item, index) => {
      let tmp2;
      if (closure_2 != null) {
        tmp2 = tmp[item.channelId];
      }
      let tmp3 = true !== tmp2;
      if (tmp3) {
        tmp3 = item.channelId !== closure_1;
      }
      return tmp3;
    });
  }
  return found;
};
export const useAllActionsCompleted = function useAllActionsCompleted(guild_id) {
  const _require = guild_id;
  const items = [closure_3];
  const stateFromStores = require("../../../discord_common/js/packages/flux/useStateFromStores.tsx").useStateFromStores(items, () => closure_1_3.getSelfMember(closure_0));
  const obj = defaultAreStatesEqual;
  let num;
  if (stateFromStores != null) {
    num = stateFromStores.flags;
  }
  if (num == null) {
    num = 0;
  }
  return require("../../../discord_common/js/shared/utils/FlagUtils.tsx").hasFlag(num, GuildMemberFlags.COMPLETED_HOME_ACTIONS);
};