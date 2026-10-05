// discord_app/modules/guild_onboarding_home/GuildOnboardingHomeActionCreators.tsx
import SnowflakeUtilsDefault from "../../utils/SnowflakeUtils.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import HTTPUtils from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import transitionToChannel from "../routing/transitionToChannel.tsx";
import _asyncToGenerator from "../../../_runtime/metro/00005__asyncToGenerator.js";
import ImpersonateStore from "../impersonate/ImpersonateStore.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import GuildOnboardingHomeSettingsStore from "GuildOnboardingHomeSettingsStore.tsx";
import GuildOnboardingMemberActionStore from "GuildOnboardingMemberActionStore.tsx";
import Constants from "../../Constants.tsx";
import size from "../../../_runtime/metro/00002__.js";

let body, closure_1;

let c9;
let metroImportAll;
let obj = function _fetchGuildHomeSettings() {
  obj = _asyncToGenerator(async (guildId) => {
    let closure_2;
    let closure_3;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (async (arg0) => {
      const obj5 = { type: "GUILD_HOME_SETTINGS_FETCH_START", guildId };
      const obj11 = DispatcherDefault;
      obj11.dispatch(obj5);
      const HTTP = HTTPUtils.HTTP;
      const get = HTTP.get;
      const obj6 = { url: closure_2_9.GUILD_HOME_SETTINGS(guildId), oldFormErrors: true, rejectWithError: true };
      await get(obj6);
      const obj10 = { type: "GUILD_HOME_SETTINGS_FETCH_FAIL", guildId };
      const obj3 = closure_130_1(closure_130_2[6]);
      obj3.dispatch(obj10);
      await "IconComponent";
      body = value;
      const obj8 = closure_130_0(closure_130_2[8]);
      const tmp = obj8.settingsFromServer(body.body);
      const obj13 = { type: "GUILD_HOME_SETTINGS_FETCH_SUCCESS", guildId, homeSettings: tmp };
      const obj9 = closure_130_1(closure_130_2[6]);
      obj9.dispatch(obj13);
      return tmp;
    })();
  });
  return obj(...arguments);
};
obj = function _fetchNewMemberActions() {
  let fullServerPreview;
  obj = _asyncToGenerator(async (guildId) => {
    let closure_2;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (async (arg0) => {
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let tmp;
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              return { value, done: true };
            } else {
              body = undefined;
              tmp = undefined;
              if (!fullServerPreview.isFullServerPreview(guildId)) {
                const obj6 = { type: "GUILD_NEW_MEMBER_ACTIONS_FETCH_START", guildId };
                const obj5 = DispatcherDefault;
                obj5.dispatch(obj6);
                c4 = 1;
                const HTTP = HTTPUtils.HTTP;
                const get = HTTP.get;
                c5 = 2;
                c6 = 1;
                const obj7 = {
                  url: closure_2_9.GUILD_MEMBER_ACTIONS(guildId),
                  oldFormErrors: true,
                  rejectWithError: true,
                };
                const obj8 = { value: get(obj7), done: false };
                return obj8;
              }
            }
          } else if (1 === c5) {
            c4 = 0;
            const obj9 = { type: "GUILD_NEW_MEMBER_ACTIONS_FETCH_FAIL", guildId };
            const obj3 = closure_130_1(closure_130_2[6]);
            obj3.dispatch(obj9);
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            return { value, done: true };
          } else {
            body = value;
            const obj11 = closure_130_0(closure_130_2[8]);
            tmp = obj11.actionsFromServer(body.body);
            const obj13 = { type: "GUILD_NEW_MEMBER_ACTIONS_FETCH_SUCCESS", guildId, memberActions: tmp };
            const obj12 = closure_130_1(closure_130_2[6]);
            obj12.dispatch(obj13);
            c4 = 0;
            c6 = 3;
            return { value: tmp, done: true };
          }
          c6 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp18) {
          closure_3 = tmp18;
          if (0 === c4) {
            c6 = 3;
            throw tmp18;
          } else {
            c5 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _clearNewMemberActions() {
  obj = _asyncToGenerator(async (guildId) => {
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (async (arg0) => {
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              return { value, done: true };
            } else {
              closure_2 = tmp;
              closure_1 = tmp4;
              const obj5 = { type: "GUILD_NEW_MEMBER_ACTIONS_DELETE_START", guildId };
              const obj9 = DispatcherDefault;
              obj9.dispatch(obj5);
              c4 = 1;
              const HTTP = HTTPUtils.HTTP;
              const del = HTTP.del;
              c5 = 2;
              c6 = 1;
              const obj6 = {
                url: closure_2_9.GUILD_MEMBER_ACTIONS(guildId),
                oldFormErrors: true,
                rejectWithError: true,
              };
              const obj7 = { value: del(obj6), done: false };
              return obj7;
            }
          } else {
            if (1 === c5) {
              c4 = 0;
              const obj8 = { type: "GUILD_NEW_MEMBER_ACTIONS_DELETE_FAIL", guildId };
              const obj4 = closure_130_1(closure_130_2[6]);
              obj4.dispatch(obj8);
            } else if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 0;
              c6 = 3;
              return { value, done: true };
            } else {
              const obj11 = { type: "GUILD_NEW_MEMBER_ACTIONS_DELETE_SUCCESS", guildId };
              obj = closure_130_1(closure_130_2[6]);
              obj.dispatch(obj11);
              c4 = 0;
            }
            c6 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp18) {
          closure_3 = tmp18;
          if (0 === c4) {
            c6 = 3;
            throw tmp18;
          } else {
            c5 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
({ AnalyticEvents: metroImportAll, Endpoints: c9 } = Constants);
const result = size.fileFinishedImporting("modules/guild_onboarding_home/GuildOnboardingHomeActionCreators.tsx");

export const fetchGuildHomeSettings = function fetchGuildHomeSettings() {
  return obj(...arguments);
};
export const fetchNewMemberActions = function fetchNewMemberActions() {
  return obj(...arguments);
};
export const clearNewMemberActions = function clearNewMemberActions() {
  return obj(...arguments);
};
export const selectHomeResourceChannel = function selectHomeResourceChannel(guildId, channelId, arg2) {
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
      const obj2 = {
        guild_id: guildId,
        channel_id: channel.id,
        server_guide_channel_type: "resource",
        channel_action_type: -1,
      };
      obj = AnalyticsUtilsDefault;
      obj.track(metroImportAll.SERVER_GUIDE_CHANNEL_SELECTED, obj2);
    }
    if (flag) {
      const obj3 = transitionToChannel;
      obj3.transitionToChannel(channelId, { navigationReplace: false });
    }
  }
};
export const selectNewMemberActionChannel = function selectNewMemberActionChannel(guild_id, id) {
  const channel = ChannelStore.getChannel(id);
  const actionForChannel = GuildOnboardingHomeSettingsStore.getActionForChannel(guild_id, id);
  const isFullServerPreviewResult =
    null == guild_id || ImpersonateStore.isFullServerPreview(guild_id) || null == channel || null == actionForChannel;
  if (!isFullServerPreviewResult) {
    const obj2 = {
      guild_id,
      channel_id: channel.id,
      server_guide_channel_type: "member action",
      channel_action_type: actionForChannel.actionType,
    };
    obj = AnalyticsUtilsDefault;
    obj.track(metroImportAll.SERVER_GUIDE_CHANNEL_SELECTED, obj2);
  }
  const obj3 = transitionToChannel;
  obj3.transitionToChannel(id);
};
export const completeNewMemberAction = function completeNewMemberAction(c0, c1) {
  obj = DispatcherDefault;
  const obj2 = { type: "COMPLETE_NEW_MEMBER_ACTION", guildId: _require, channelId: importDefault };
  obj.dispatch(obj2);
  if (!ImpersonateStore.isFullServerPreview(_require)) {
    const channel = ChannelStore.getChannel(importDefault);
    const actionForChannel = GuildOnboardingHomeSettingsStore.getActionForChannel(_require, importDefault);
    if (null != channel) {
      if (null != actionForChannel) {
        const keys = SnowflakeUtilsDefault.keys;
        SnowflakeUtilsDefault;
        let completedActions = GuildOnboardingMemberActionStore.getCompletedActions(_require);
        if (completedActions == null) {
          completedActions = {};
        }
        let closure_0 = keys(completedActions);
        let newMemberActions = GuildOnboardingHomeSettingsStore.getNewMemberActions(_require);
        if (newMemberActions == null) {
          newMemberActions = [];
        }
        ({ guild_id: obj5.guild_id, id: obj5.channel_id } = channel);
        const obj4 = {
          guild_id: null,
          channel_id: null,
          channel_action_type: actionForChannel.actionType,
          has_completed_all: newMemberActions.reduce((acc, channelId) => {
            const hasItem = acc && closure_0.includes(channelId.channelId);
            return hasItem;
          }, true),
        };
        const track = AnalyticsUtilsDefault.track;
        const SERVER_GUIDE_ACTION_COMPLETED = metroImportAll.SERVER_GUIDE_ACTION_COMPLETED;
        AnalyticsUtilsDefault;
        track(SERVER_GUIDE_ACTION_COMPLETED, obj4);
      }
    }
    const HTTP = HTTPUtils.HTTP;
    const post = HTTP.post;
    const obj6 = { url: React4.GUILD_MEMBER_ACTION_UPDATE(_require, importDefault), rejectWithError: true };
    post(obj6);
  }
};
