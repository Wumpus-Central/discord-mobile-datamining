// === Module 12436: GuildOnboardingHomeActionCreators ===

// Module 12436 (GuildOnboardingHomeActionCreators)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import HTTPUtils from "HTTPUtils" /* 1271 */;
import transitionToChannel from "transitionToChannel" /* 4651 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import ImpersonateStore from "ImpersonateStore" /* 2015 */;
import ChannelStore from "ChannelStore" /* 1958 */;
import GuildOnboardingHomeSettingsStore from "GuildOnboardingHomeSettingsStore" /* 4827 */;
import GuildOnboardingMemberActionStore from "GuildOnboardingMemberActionStore" /* 4828 */;

require = fn;
let closure_10 = async function _fetchGuildHomeSettings() {
  c5 = 0;
  c6 = 0;
  c4 = 0;
  return (async (arg0) => {
    closure_2 = tmp3;
    closure_129_0 = guildId;
    DispatcherDefault.dispatch({ type: "GUILD_HOME_SETTINGS_FETCH_START", guildId });
    const HTTP = HTTPUtils.HTTP;
    await HTTP.get({ url: closure_2_9.GUILD_HOME_SETTINGS(guildId), oldFormErrors: true, rejectWithError: true });
    closure_130_1(closure_130_2[6]).dispatch({ type: "GUILD_HOME_SETTINGS_FETCH_FAIL", guildId: closure_129_0 });
    await "HermesInternal";
    closure_129_1 = value;
    closure_129_2 = closure_130_0(closure_130_2[8]).settingsFromServer(closure_129_1.body);
    closure_130_0(closure_130_2[8]);
    closure_130_1(closure_130_2[6]).dispatch({ type: "GUILD_HOME_SETTINGS_FETCH_SUCCESS", guildId: closure_129_0, homeSettings: closure_129_2 });
    return closure_129_2;
  })();
};
let closure_11 = async function _fetchNewMemberActions() {
  c5 = 0;
  c6 = 0;
  c4 = 0;
  return (async (arg0) => {
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c6 = 2;
        isFullServerPreviewResult = c5;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_2 = tmp3;
            closure_129_0 = guildId;
            closure_129_1 = undefined;
            closure_129_2 = undefined;
            isFullServerPreviewResult = fullServerPreview.isFullServerPreview(guildId);
            if (!isFullServerPreviewResult) {
              const obj6 = { type: "GUILD_NEW_MEMBER_ACTIONS_FETCH_START", guildId };
              DispatcherDefault.dispatch(obj6);
              c4 = 1;
              const HTTP = HTTPUtils.HTTP;
              const obj7 = { url: closure_2_9.GUILD_MEMBER_ACTIONS(guildId), oldFormErrors: true, rejectWithError: true };
              c5 = 2;
              c6 = 1;
              const obj8 = { value: HTTP.get(obj7), done: false };
              return obj8;
            }
          }
        } else if (1 === isFullServerPreviewResult) {
          c4 = 0;
          const obj9 = { type: "GUILD_NEW_MEMBER_ACTIONS_FETCH_FAIL", guildId: closure_129_0 };
          isFullServerPreviewResult = closure_130_1(closure_130_2[6]).dispatch(obj9);
          const obj3 = closure_130_1(closure_130_2[6]);
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          const obj10 = { value, done: true };
          return obj10;
        } else {
          closure_129_1 = value;
          closure_129_2 = closure_130_0(closure_130_2[8]).actionsFromServer(closure_129_1.body);
          const obj11 = closure_130_0(closure_130_2[8]);
          const obj13 = { type: "GUILD_NEW_MEMBER_ACTIONS_FETCH_SUCCESS", guildId: closure_129_0, memberActions: closure_129_2 };
          closure_130_1(closure_130_2[6]).dispatch(obj13);
          c4 = 0;
          c6 = 3;
          const obj = { value: closure_129_2, done: true };
          return obj;
        }
        c6 = 3;
      } catch (tmp20) {
        closure_3 = tmp20;
        if (tmp4 === c4) {
          c6 = tmp2;
          throw tmp20;
        } else {
          c5 = tmp;
        }
      }
    }
  })();
};
let closure_12 = async function _clearNewMemberActions() {
  c5 = 0;
  c6 = 0;
  c4 = 0;
  return (async (arg0) => {
    closure_2 = tmp3;
    closure_129_0 = guildId;
    DispatcherDefault.dispatch({ type: "GUILD_NEW_MEMBER_ACTIONS_DELETE_START", guildId });
    const HTTP = HTTPUtils.HTTP;
    await HTTP.del({ url: closure_2_9.GUILD_MEMBER_ACTIONS(guildId), oldFormErrors: true, rejectWithError: true });
    if (1 === tmp7) {
      c4 = 0;
      closure_130_1(closure_130_2[6]).dispatch({ type: "GUILD_NEW_MEMBER_ACTIONS_DELETE_FAIL", guildId: closure_129_0 });
      c6 = 3;
      closure_130_1(closure_130_2[6]);
    } else if (arg0 === 1) {
      c6 = 3;
      throw value;
    } else if (arg0 !== 2) {
      closure_130_1(closure_130_2[6]).dispatch({ type: "GUILD_NEW_MEMBER_ACTIONS_DELETE_SUCCESS", guildId: closure_129_0 });
      c4 = 0;
      closure_130_1(closure_130_2[6]);
    }
    return value;
  })();
};
const Constants = fn(1074);
({ AnalyticEvents: closure_8, Endpoints: closure_9 } = Constants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_onboarding_home/GuildOnboardingHomeActionCreators.tsx");

export const fetchGuildHomeSettings = function fetchGuildHomeSettings() {
  const self = this;
  const apply = closure_10.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchNewMemberActions = function fetchNewMemberActions() {
  const self = this;
  const apply = closure_11.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const clearNewMemberActions = function clearNewMemberActions() {
  const self = this;
  const apply = closure_12.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const selectHomeResourceChannel = function selectHomeResourceChannel(guildId, channelId) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = true;
  }
  if (null != channelId) {
    const channel = ChannelStore.getChannel(channelId);
    let isFullServerPreviewResult = null == guildId;
    const resourceForChannel = GuildOnboardingHomeSettingsStore.getResourceForChannel(guildId, channelId);
    if (!isFullServerPreviewResult) {
      isFullServerPreviewResult = ImpersonateStore.isFullServerPreview(guildId);
    }
    if (!isFullServerPreviewResult) {
      isFullServerPreviewResult = null == channel;
    }
    if (!isFullServerPreviewResult) {
      isFullServerPreviewResult = null == resourceForChannel;
    }
    if (!isFullServerPreviewResult) {
      const obj2 = { guild_id: guildId, channel_id: channel.id, server_guide_channel_type: "resource", channel_action_type: -1 };
      AnalyticsUtilsDefault.track(constants.SERVER_GUIDE_CHANNEL_SELECTED, obj2);
    }
    if (flag) {
      transitionToChannel.transitionToChannel(channelId, { navigationReplace: false });
    }
  }
};
export const selectNewMemberActionChannel = function selectNewMemberActionChannel(guild_id, id) {
  const channel = ChannelStore.getChannel(id);
  const actionForChannel = GuildOnboardingHomeSettingsStore.getActionForChannel(guild_id, id);
  let isFullServerPreviewResult = null == guild_id;
  if (!isFullServerPreviewResult) {
    isFullServerPreviewResult = ImpersonateStore.isFullServerPreview(guild_id);
  }
  if (!isFullServerPreviewResult) {
    isFullServerPreviewResult = null == channel;
  }
  if (!isFullServerPreviewResult) {
    isFullServerPreviewResult = null == actionForChannel;
  }
  if (!isFullServerPreviewResult) {
    const obj2 = { guild_id, channel_id: channel.id, server_guide_channel_type: "member action", channel_action_type: actionForChannel.actionType };
    AnalyticsUtilsDefault.track(constants.SERVER_GUIDE_CHANNEL_SELECTED, obj2);
  }
  transitionToChannel.transitionToChannel(id);
};
export const completeNewMemberAction = function completeNewMemberAction(guildId, channelId) {
  DispatcherDefault.dispatch({ type: "COMPLETE_NEW_MEMBER_ACTION", guildId, channelId });
  if (!ImpersonateStore.isFullServerPreview(guildId)) {
    const channel = ChannelStore.getChannel(channelId);
    const actionForChannel = GuildOnboardingHomeSettingsStore.getActionForChannel(guildId, channelId);
    if (null != channel) {
      if (null != actionForChannel) {
        let completedActions = GuildOnboardingMemberActionStore.getCompletedActions(guildId);
        if (completedActions == null) {
          completedActions = {};
        }
        closure_0 = SnowflakeUtilsDefault.keys(completedActions);
        let newMemberActions = GuildOnboardingHomeSettingsStore.getNewMemberActions(guildId);
        if (newMemberActions == null) {
          newMemberActions = [];
        }
        const tmpResult = SnowflakeUtilsDefault;
        const obj4 = { guild_id: null, channel_id: null, channel_action_type: null, has_completed_all: null };
        ({ guild_id: obj6.guild_id, id: obj6.channel_id } = channel);
        obj4.channel_action_type = actionForChannel.actionType;
        obj4.has_completed_all = newMemberActions.reduce((acc, channelId) => {
          let hasItem = acc;
          if (acc) {
            hasItem = closure_0.includes(channelId.channelId);
          }
          return hasItem;
        }, true);
        AnalyticsUtilsDefault.track(constants.SERVER_GUIDE_ACTION_COMPLETED, obj4);
        const tmpResult2 = AnalyticsUtilsDefault;
      }
    }
    const HTTP = HTTPUtils.HTTP;
    const obj5 = { url: React7.GUILD_MEMBER_ACTION_UPDATE(guildId, channelId), rejectWithError: true };
    HTTP.post(obj5);
  }
  const obj2 = { type: "COMPLETE_NEW_MEMBER_ACTION", guildId, channelId };
};