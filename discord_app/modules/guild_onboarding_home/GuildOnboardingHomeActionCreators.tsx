// discord_app/modules/guild_onboarding_home/GuildOnboardingHomeActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import HTTPUtils from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import transitionToChannel from "../routing/transitionToChannel.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import ImpersonateStore from "../impersonate/ImpersonateStore.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import GuildOnboardingHomeSettingsStore from "GuildOnboardingHomeSettingsStore.tsx";
import GuildOnboardingMemberActionStore from "GuildOnboardingMemberActionStore.tsx";

require = fn;
let closure_10 = async function _fetchGuildHomeSettings(guildId) {
  c5 = 0;
  c6 = 0;
  c4 = 0;
  return (async (arg0) => {
    closure_2 = tmp3;
    closure_129_0 = guildId;
    DispatcherDefault.dispatch({ type: "GUILD_HOME_SETTINGS_FETCH_START", guildId });
    const HTTP = HTTPUtils.HTTP;
    let obj2 = { url: closure_2_9.GUILD_HOME_SETTINGS(guildId), oldFormErrors: true, rejectWithError: true };
    await HTTP.get(obj2);
    obj2 = closure_130_1(closure_130_2[6]);
    obj2.dispatch({ type: "GUILD_HOME_SETTINGS_FETCH_FAIL", guildId: closure_129_0 });
    closure_129_1 = await "HermesInternal";
    closure_129_2 = closure_130_0(closure_130_2[8]).settingsFromServer(closure_129_1.body);
    closure_130_0(closure_130_2[8]);
    closure_130_1(closure_130_2[6]).dispatch({
      type: "GUILD_HOME_SETTINGS_FETCH_SUCCESS",
      guildId: closure_129_0,
      homeSettings: closure_129_2,
    });
    return closure_129_2;
  })();
};
let closure_11 = async function _fetchNewMemberActions(arg0, value) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c6 = 2;
      let isFullServerPreviewResult = c5;
      if (0 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_2 = tmp3;
          closure_129_0 = closure_0;
          closure_129_1 = undefined;
          closure_129_2 = undefined;
          isFullServerPreviewResult = fullServerPreview.isFullServerPreview(closure_0);
          if (!isFullServerPreviewResult) {
            let obj4 = DispatcherDefault;
            const obj1 = { type: "GUILD_NEW_MEMBER_ACTIONS_FETCH_START", guildId: tmp37 };
            obj4.dispatch(obj1);
            c4 = 1;
            const HTTP = HTTPUtils.HTTP;
            let obj2 = { url: React7.GUILD_MEMBER_ACTIONS(tmp37), oldFormErrors: true, rejectWithError: true };
            c5 = 2;
            c6 = 1;
            const obj3 = { value: HTTP.get(obj2), done: false };
            return obj3;
          }
        }
      } else if (1 === isFullServerPreviewResult) {
        c4 = 0;
        obj2 = closure_130_1(closure_130_2[6]);
        obj4 = { type: "GUILD_NEW_MEMBER_ACTIONS_FETCH_FAIL", guildId: closure_129_0 };
        isFullServerPreviewResult = obj2.dispatch(obj4);
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 0;
        c6 = 3;
        const obj5 = { value, done: true };
        return obj5;
      } else {
        closure_129_1 = value;
        closure_129_2 = closure_130_0(closure_130_2[8]).actionsFromServer(closure_129_1.body);
        const obj11 = closure_130_0(closure_130_2[8]);
        const obj6 = {
          type: "GUILD_NEW_MEMBER_ACTIONS_FETCH_SUCCESS",
          guildId: closure_129_0,
          memberActions: closure_129_2,
        };
        closure_130_1(closure_130_2[6]).dispatch(obj6);
        c4 = 0;
        c6 = 3;
        obj = { value: closure_129_2, done: true };
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
};
let closure_12 = async function _clearNewMemberActions(guildId) {
  c5 = 0;
  c6 = 0;
  c4 = 0;
  return (async (arg0, value) => {
    closure_2 = tmp3;
    closure_129_0 = guildId;
    DispatcherDefault.dispatch({ type: "GUILD_NEW_MEMBER_ACTIONS_DELETE_START", guildId });
    const HTTP = HTTPUtils.HTTP;
    await HTTP.del({ url: closure_2_9.GUILD_MEMBER_ACTIONS(guildId), oldFormErrors: true, rejectWithError: true });
    if (1 === tmp7) {
      c4 = 0;
      closure_130_1(closure_130_2[6]).dispatch({
        type: "GUILD_NEW_MEMBER_ACTIONS_DELETE_FAIL",
        guildId: closure_129_0,
      });
      c6 = 3;
      closure_130_1(closure_130_2[6]);
    } else if (arg0 === 1) {
      c6 = 3;
      throw value;
    } else if (arg0 !== 2) {
      closure_130_1(closure_130_2[6]).dispatch({
        type: "GUILD_NEW_MEMBER_ACTIONS_DELETE_SUCCESS",
        guildId: closure_129_0,
      });
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
      const obj = {
        guild_id: guildId,
        channel_id: channel.id,
        server_guide_channel_type: "resource",
        channel_action_type: -1,
      };
      obj.track(constants.SERVER_GUIDE_CHANNEL_SELECTED, obj);
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
    const obj = {
      guild_id,
      channel_id: channel.id,
      server_guide_channel_type: "member action",
      channel_action_type: actionForChannel.actionType,
    };
    obj.track(constants.SERVER_GUIDE_CHANNEL_SELECTED, obj);
  }
  transitionToChannel.transitionToChannel(id);
};
export const completeNewMemberAction = function completeNewMemberAction(guildId, channelId) {
  let obj = { type: "COMPLETE_NEW_MEMBER_ACTION", guildId, channelId };
  obj.dispatch(obj);
  if (!ImpersonateStore.isFullServerPreview(guildId)) {
    const channel = ChannelStore.getChannel(channelId);
    const actionForChannel = GuildOnboardingHomeSettingsStore.getActionForChannel(guildId, channelId);
    if (null != channel) {
      if (null != actionForChannel) {
        let tmpResult = tmp(11);
        let completedActions = GuildOnboardingMemberActionStore.getCompletedActions(guildId);
        if (completedActions == null) {
          completedActions = {};
        }
        closure_0 = tmpResult.keys(completedActions);
        let newMemberActions = obj3.getNewMemberActions(guildId);
        if (newMemberActions == null) {
          newMemberActions = [];
        }
        tmpResult = tmp(1242);
        obj = { guild_id: null, channel_id: null, channel_action_type: null, has_completed_all: null };
        ({ guild_id: obj6.guild_id, id: obj6.channel_id } = channel);
        obj.channel_action_type = actionForChannel.actionType;
        obj.has_completed_all = newMemberActions.reduce((acc, channelId) => {
          let hasItem = acc;
          if (acc) {
            hasItem = closure_0.includes(channelId.channelId);
          }
          return hasItem;
        }, true);
        tmpResult.track(constants.SERVER_GUIDE_ACTION_COMPLETED, obj);
      }
    }
    const HTTP = HTTPUtils.HTTP;
    const obj1 = { url: React7.GUILD_MEMBER_ACTION_UPDATE(guildId, channelId), rejectWithError: true };
    HTTP.post(obj1);
    obj3 = GuildOnboardingHomeSettingsStore;
  }
};
