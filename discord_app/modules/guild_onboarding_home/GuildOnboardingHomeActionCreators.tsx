// discord_app/modules/guild_onboarding_home/GuildOnboardingHomeActionCreators.tsx
import expandEventPropertiesDefault from "../../utils/AnalyticsUtils.tsx";
import dispatcherDefault from "../../Dispatcher.tsx";
import transitionToChannel from "../routing/transitionToChannel.tsx";
import closure_3 from "../../../_runtime/00005_asyncGeneratorStep.js";
import closure_4 from "../impersonate/ImpersonateStore.tsx";
import closure_5 from "../../stores/ChannelStore.tsx";
import closure_6 from "GuildOnboardingHomeSettingsStore.tsx";
import closure_7 from "GuildOnboardingMemberActionStore.tsx";
import ME from "../../Constants.tsx";
import { sendRequest } from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";

require = arg1;
function _fetchGuildHomeSettings() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c5 = 0;
    c6 = 0;
    c4 = 0;
    return (function*(arg0) {
      dependencyMap = tmp3;
      obj1 = { type: "GUILD_HOME_SETTINGS_FETCH_START", guildId: null };
      obj1[1] = callback;
      closure_1_1(closure_1_2[6]).dispatch(obj1);
      c4 = 1;
      const HTTP = callback(closure_1_2[7]).HTTP;
      let obj2 = { url: null, oldFormErrors: true, rejectWithError: true };
      obj2[0] = closure_1_9.GUILD_HOME_SETTINGS(callback);
      yield HTTP.get(obj2);
      c4 = 0;
      obj2 = lib(709);
      const obj4 = { type: "GUILD_HOME_SETTINGS_FETCH_FAIL", guildId: null };
      obj4[1] = callback;
      obj2.dispatch(obj4);
      lib = yield "HermesInternal";
      dependencyMap = callback(11453).settingsFromServer(lib.body);
      const obj8 = callback(11453);
      const obj6 = { type: "GUILD_HOME_SETTINGS_FETCH_SUCCESS", guildId: null, homeSettings: null };
      obj6[1] = callback;
      obj6[2] = dependencyMap;
      lib(709).dispatch(obj6);
      c4 = 0;
      return dependencyMap;
    })();
  });
  closure_10 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _fetchNewMemberActions() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c5 = 0;
    c6 = 0;
    c4 = 0;
    return (function*(arg0) {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c6 = 2;
          let isFullServerPreviewResult = c5;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              dependencyMap = tmp3;
              let lib = isFullServerPreviewResult;
              lib = undefined;
              dependencyMap = undefined;
              isFullServerPreviewResult = fullServerPreview.isFullServerPreview(callback);
              if (!isFullServerPreviewResult) {
                let obj4 = closure_1_1(closure_1_2[6]);
                obj1 = { type: "GUILD_NEW_MEMBER_ACTIONS_FETCH_START", guildId: null };
                obj1[1] = tmp38;
                obj4.dispatch(obj1);
                fullServerPreview = 1;
                const HTTP = callback(closure_1_2[7]).HTTP;
                let obj2 = { url: null, oldFormErrors: true, rejectWithError: true };
                obj2[0] = closure_1_9.GUILD_MEMBER_ACTIONS(tmp38);
                c5 = 2;
                c6 = 1;
                const obj3 = { value: null, done: false };
                obj3[0] = HTTP.get(obj2);
                return obj3;
              }
            }
          } else if (1 === isFullServerPreviewResult) {
            fullServerPreview = 0;
            obj2 = lib(709);
            obj4 = { type: "GUILD_NEW_MEMBER_ACTIONS_FETCH_FAIL", guildId: null };
            obj4[1] = callback;
            isFullServerPreviewResult = obj2.dispatch(obj4);
          } else if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            fullServerPreview = 0;
            c6 = 3;
            const obj5 = { value: null, done: true };
            obj5[0] = arg1;
            return obj5;
          } else {
            lib = arg1;
            dependencyMap = callback(11453).actionsFromServer(lib.body);
            const obj11 = callback(11453);
            const obj6 = { type: "GUILD_NEW_MEMBER_ACTIONS_FETCH_SUCCESS", guildId: null, memberActions: null };
            obj6[1] = callback;
            obj6[2] = dependencyMap;
            lib(709).dispatch(obj6);
            fullServerPreview = 0;
            c6 = 3;
            obj = { value: null, done: true };
            obj[0] = dependencyMap;
            return obj;
          }
          c6 = 3;
        } catch (tmp20) {
          closure_3 = tmp20;
          if (tmp4 === fullServerPreview) {
            c6 = tmp2;
            throw tmp20;
          } else {
            c5 = tmp;
          }
        }
      }
    })();
  });
  closure_11 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _clearNewMemberActions() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c5 = 0;
    c6 = 0;
    c4 = 0;
    return (function*(arg0) {
      dependencyMap = tmp3;
      obj1 = { type: "GUILD_NEW_MEMBER_ACTIONS_DELETE_START", guildId: null };
      obj1[1] = callback;
      closure_1_1(closure_1_2[6]).dispatch(obj1);
      c4 = 1;
      const HTTP = callback(closure_1_2[7]).HTTP;
      const obj2 = { url: null, oldFormErrors: true, rejectWithError: true };
      obj2[0] = closure_1_9.GUILD_MEMBER_ACTIONS(callback);
      yield HTTP.del(obj2);
      if (1 === tmp7) {
        c4 = 0;
        const obj3 = callback2(709);
        const obj4 = { type: "GUILD_NEW_MEMBER_ACTIONS_DELETE_FAIL", guildId: null };
        obj4[1] = callback;
        obj3.dispatch(obj4);
        c6 = 3;
      } else if (arg0 === 1) {
        c6 = 3;
        throw arg1;
      } else if (arg0 !== 2) {
        const obj = callback2(709);
        const obj5 = { type: "GUILD_NEW_MEMBER_ACTIONS_DELETE_SUCCESS", guildId: null };
        obj5[1] = callback;
        obj.dispatch(obj5);
        c4 = 0;
      }
      c4 = 0;
      return arg1;
    })();
  });
  closure_12 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ AnalyticEvents: closure_8, Endpoints: c9 } = ME);
const result = require("set").fileFinishedImporting("modules/guild_onboarding_home/GuildOnboardingHomeActionCreators.tsx");

export const fetchGuildHomeSettings = function fetchGuildHomeSettings(guildId) {
  const self = this;
  const apply = _fetchGuildHomeSettings.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchNewMemberActions = function fetchNewMemberActions(guildId) {
  const self = this;
  const apply = _fetchNewMemberActions.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const clearNewMemberActions = function clearNewMemberActions() {
  const self = this;
  const apply = _clearNewMemberActions.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const selectHomeResourceChannel = function selectHomeResourceChannel(closure_0, channelId) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = true;
  }
  if (null != channelId) {
    const channel = store.getChannel(channelId);
    let isFullServerPreviewResult = null == closure_0;
    const resourceForChannel = store2.getResourceForChannel(closure_0, channelId);
    if (!isFullServerPreviewResult) {
      isFullServerPreviewResult = closure_4.isFullServerPreview(closure_0);
    }
    if (!isFullServerPreviewResult) {
      isFullServerPreviewResult = null == channel;
    }
    if (!isFullServerPreviewResult) {
      isFullServerPreviewResult = null == resourceForChannel;
    }
    if (!isFullServerPreviewResult) {
      let obj = expandEventPropertiesDefault;
      obj = { guild_id: null, channel_id: null, server_guide_channel_type: "resource", channel_action_type: -1 };
      obj[0] = closure_0;
      obj[1] = channel.id;
      obj.track(constants.SERVER_GUIDE_CHANNEL_SELECTED, obj);
    }
    if (flag) {
      transitionToChannel.transitionToChannel(channelId, { navigationReplace: false });
      const obj3 = transitionToChannel;
    }
  }
};
export const selectNewMemberActionChannel = function selectNewMemberActionChannel(guild_id, id) {
  const channel = store.getChannel(id);
  const actionForChannel = store2.getActionForChannel(guild_id, id);
  let isFullServerPreviewResult = null == guild_id;
  if (!isFullServerPreviewResult) {
    isFullServerPreviewResult = closure_4.isFullServerPreview(guild_id);
  }
  if (!isFullServerPreviewResult) {
    isFullServerPreviewResult = null == channel;
  }
  if (!isFullServerPreviewResult) {
    isFullServerPreviewResult = null == actionForChannel;
  }
  if (!isFullServerPreviewResult) {
    let obj = expandEventPropertiesDefault;
    obj = { guild_id: null, channel_id: null, server_guide_channel_type: "member action", channel_action_type: null };
    obj[0] = guild_id;
    obj[1] = channel.id;
    obj[3] = actionForChannel.actionType;
    obj.track(constants.SERVER_GUIDE_CHANNEL_SELECTED, obj);
  }
  transitionToChannel.transitionToChannel(id);
};
export const completeNewMemberAction = function completeNewMemberAction(c0, c1) {
  let obj = dispatcherDefault;
  obj = { type: "COMPLETE_NEW_MEMBER_ACTION", guildId: c0, channelId: c1 };
  obj.dispatch(obj);
  if (!closure_4.isFullServerPreview(c0)) {
    const channel = store.getChannel(c1);
    const actionForChannel = store2.getActionForChannel(c0, c1);
    if (null != channel) {
      if (null != actionForChannel) {
        let tmpResult = tmp(11);
        completedActions = completedActions.getCompletedActions(c0);
        if (completedActions == null) {
          completedActions = {};
        }
        const _require = tmpResult.keys(completedActions);
        let newMemberActions = obj3.getNewMemberActions(c0);
        if (newMemberActions == null) {
          newMemberActions = [];
        }
        tmpResult = tmp(698);
        obj = { guild_id: null, channel_id: null, channel_action_type: null, has_completed_all: null };
        ({ guild_id: obj6[0], id: obj6[1] } = channel);
        obj[2] = actionForChannel.actionType;
        obj[3] = newMemberActions.reduce((arg0, channelId) => {
          let hasItem = arg0;
          if (arg0) {
            hasItem = closure_0.includes(channelId.channelId);
          }
          return hasItem;
        }, true);
        tmpResult.track(constants.SERVER_GUIDE_ACTION_COMPLETED, obj);
      }
    }
    const HTTP = _sendRequest.HTTP;
    obj1 = { url: null, rejectWithError: true };
    obj1[0] = closure_9.GUILD_MEMBER_ACTION_UPDATE(c0, c1);
    HTTP.post(obj1);
    obj3 = store2;
  }
};