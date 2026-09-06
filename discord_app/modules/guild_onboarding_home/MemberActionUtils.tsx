// discord_app/modules/guild_onboarding_home/MemberActionUtils.tsx
import useIsNewMemberDefault from "useIsNewMember.tsx";
import GuildMemberStore from "../../stores/GuildMemberStore.tsx";
import GuildOnboardingHomeSettingsStore from "GuildOnboardingHomeSettingsStore.tsx";
import GuildOnboardingMemberActionStore from "GuildOnboardingMemberActionStore.tsx";

const require = fn;
const GuildMemberFlags = fn(4187).GuildMemberFlags;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_onboarding_home/MemberActionUtils.tsx");

export const useMemberActionsForChannel = function useMemberActionsForChannel(guild_id, channel) {
  _require = guild_id;
  importDefault = channel;
  let obj = require("useStateFromStores");
  const items = [GuildOnboardingHomeSettingsStore];
  const items1 = [guild_id];
  const stateFromStores = obj.useStateFromStores(
    items,
    () => GuildOnboardingHomeSettingsStore.getNewMemberActions(closure_0),
    items1,
  );
  const tmp = useIsNewMemberDefault(guild_id);
  const items2 = [GuildOnboardingMemberActionStore];
  const stateFromStores1 = require("useStateFromStores").useStateFromStores(items2, () =>
    GuildOnboardingMemberActionStore.getCompletedActions(closure_0),
  );
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
    obj = { channelAction: tmp4, completed: null };
    let tmp5 = null != tmp4;
    if (tmp5) {
      let tmp6;
      if (stateFromStores1 != null) {
        tmp6 = stateFromStores1[tmp4.channelId];
      }
      tmp5 = true === tmp6;
    }
    obj.completed = tmp5;
    return obj;
  } else {
    return {};
  }
  const obj3 = require("useStateFromStores");
};
export const useNextMemberAction = function useNextMemberAction(guild_id, channelId) {
  _require = guild_id;
  closure_1 = channelId;
  const items = [GuildOnboardingHomeSettingsStore];
  const stateFromStores = require("useStateFromStores").useStateFromStores(items, () =>
    GuildOnboardingHomeSettingsStore.getNewMemberActions(closure_0),
  );
  const obj = require("useStateFromStores");
  const items1 = [GuildOnboardingMemberActionStore];
  dependencyMap = require("useStateFromStores").useStateFromStores(items1, () =>
    GuildOnboardingMemberActionStore.getCompletedActions(closure_0),
  );
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
  _require = guild_id;
  const items = [GuildMemberStore];
  const stateFromStores = require("useStateFromStores").useStateFromStores(items, () =>
    GuildMemberStore.getSelfMember(closure_0),
  );
  const obj = require("useStateFromStores");
  let num;
  if (stateFromStores != null) {
    num = stateFromStores.flags;
  }
  if (num == null) {
    num = 0;
  }
  return require("FlagUtils").hasFlag(num, GuildMemberFlags.COMPLETED_HOME_ACTIONS);
};
