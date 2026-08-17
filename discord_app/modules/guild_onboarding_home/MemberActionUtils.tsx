// discord_app/modules/guild_onboarding_home/MemberActionUtils.tsx
import useIsNewMemberDefault from "useIsNewMember.tsx";
import closure_3 from "../../stores/GuildMemberStore.tsx";
import closure_4 from "GuildOnboardingHomeSettingsStore.tsx";
import closure_5 from "GuildOnboardingMemberActionStore.tsx";
import { GuildMemberFlags } from "../guild_member/GuildMemberConstants.tsx";
import { defaultAreStatesEqual } from "../../../discord_common/js/packages/flux/useStateFromStores.tsx";
import { hasFlag } from "../../../discord_common/js/shared/utils/FlagUtils.tsx";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/guild_onboarding_home/MemberActionUtils.tsx");

export const useMemberActionsForChannel = function useMemberActionsForChannel(guild_id, channel) {
  const _require = guild_id;
  importDefault = channel;
  let obj = _defaultAreStatesEqual;
  const items = [closure_4];
  const items1 = [guild_id];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_4.getNewMemberActions(closure_0), items1);
  const tmp = useIsNewMemberDefault(guild_id);
  const items2 = [closure_5];
  const stateFromStores1 = _defaultAreStatesEqual.useStateFromStores(items2, () => closure_1_5.getCompletedActions(closure_0));
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
  const obj3 = _defaultAreStatesEqual;
};
export const useNextMemberAction = function useNextMemberAction(guild_id, channelId) {
  const _require = guild_id;
  closure_1 = channelId;
  const items = [closure_4];
  const stateFromStores = _defaultAreStatesEqual.useStateFromStores(items, () => closure_1_4.getNewMemberActions(closure_0));
  const obj = _defaultAreStatesEqual;
  const items1 = [closure_5];
  dependencyMap = _defaultAreStatesEqual.useStateFromStores(items1, () => closure_1_5.getCompletedActions(closure_0));
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
  const items = [closure_3];
  const stateFromStores = _defaultAreStatesEqual.useStateFromStores(items, () => closure_1_3.getSelfMember(closure_0));
  const obj = _defaultAreStatesEqual;
  let num;
  if (stateFromStores != null) {
    num = stateFromStores.flags;
  }
  if (num == null) {
    num = 0;
  }
  return _hasFlag.hasFlag(num, GuildMemberFlags.COMPLETED_HOME_ACTIONS);
};