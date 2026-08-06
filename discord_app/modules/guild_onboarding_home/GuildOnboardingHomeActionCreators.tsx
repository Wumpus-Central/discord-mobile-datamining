// discord_app/modules/guild_onboarding_home/GuildOnboardingHomeActionCreators.tsx
import closure_3 from "ME";
import initialize from "initialize";
import ensureGuildLoaded from "ensureGuildLoaded";
import handleSettingsLoadSuccess from "handleSettingsLoadSuccess";
import set from "set";
import ME from "ME";
import { sendRequest } from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import { dispatcher } from "../../Dispatcher.tsx";
import { expandEventProperties } from "../../utils/AnalyticsUtils.tsx";
import { transitionToChannel } from "../routing/transitionToChannel.tsx";

let c9;
let metroImportAll;
const require = arg1;
function _fetchGuildHomeSettings() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (function*(arg0) {
      let dependencyMap = tmp3;
      const obj1 = { type: "GUILD_HOME_SETTINGS_FETCH_START", guildId: null };
      obj1[1] = callback;
      outer1_1(outer1_2[6]).dispatch(obj1);
      let c4 = 1;
      const HTTP = callback(outer1_2[7]).HTTP;
      let obj2 = { url: null, oldFormErrors: true, rejectWithError: true };
      obj2[0] = outer1_9.GUILD_HOME_SETTINGS(callback);
      yield HTTP.get(obj2);
      c4 = 0;
      obj2 = lib(709);
      const obj4 = { type: "GUILD_HOME_SETTINGS_FETCH_FAIL", guildId: null };
      obj4[1] = callback;
      obj2.dispatch(obj4);
      lib = yield "T";
      dependencyMap = callback(11576).settingsFromServer(lib.body);
      const obj8 = callback(11576);
      const obj6 = { type: "GUILD_HOME_SETTINGS_FETCH_SUCCESS", guildId: null, homeSettings: null };
      obj6[1] = callback;
      obj6[2] = dependencyMap;
      lib(709).dispatch(obj6);
      c4 = 0;
      return dependencyMap;
    })();
  });
  const _fetchGuildHomeSettings = tmp;
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
    let closure_0 = arg0;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
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
          return { value: "T", done: null };
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
              let dependencyMap = tmp3;
              let lib = isFullServerPreviewResult;
              lib = undefined;
              dependencyMap = undefined;
              isFullServerPreviewResult = fullServerPreview.isFullServerPreview(callback);
              if (!isFullServerPreviewResult) {
                let obj4 = outer1_1(outer1_2[6]);
                const obj1 = { type: "GUILD_NEW_MEMBER_ACTIONS_FETCH_START", guildId: null };
                obj1[1] = tmp38;
                obj4.dispatch(obj1);
                fullServerPreview = 1;
                const HTTP = callback(outer1_2[7]).HTTP;
                let obj2 = { url: null, oldFormErrors: true, rejectWithError: true };
                obj2[0] = outer1_9.GUILD_MEMBER_ACTIONS(tmp38);
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
            dependencyMap = callback(11576).actionsFromServer(lib.body);
            const obj11 = callback(11576);
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
          let closure_3 = tmp20;
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
  const _fetchNewMemberActions = tmp;
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
    let closure_0 = arg0;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (function*(arg0) {
      const dependencyMap = tmp3;
      const obj1 = { type: "GUILD_NEW_MEMBER_ACTIONS_DELETE_START", guildId: null };
      obj1[1] = callback;
      outer1_1(outer1_2[6]).dispatch(obj1);
      let c4 = 1;
      const HTTP = callback(outer1_2[7]).HTTP;
      const obj2 = { url: null, oldFormErrors: true, rejectWithError: true };
      obj2[0] = outer1_9.GUILD_MEMBER_ACTIONS(callback);
      yield HTTP.del(obj2);
      if (1 === tmp7) {
        c4 = 0;
        const obj3 = callback2(709);
        const obj4 = { type: "GUILD_NEW_MEMBER_ACTIONS_DELETE_FAIL", guildId: null };
        obj4[1] = callback;
        obj3.dispatch(obj4);
        let c6 = 3;
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
  const _clearNewMemberActions = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ AnalyticEvents: metroImportAll, Endpoints: c9 } = ME);
const result = require("ensureGuildLoaded").fileFinishedImporting("modules/guild_onboarding_home/GuildOnboardingHomeActionCreators.tsx");

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
      isFullServerPreviewResult = initialize.isFullServerPreview(closure_0);
    }
    if (!isFullServerPreviewResult) {
      isFullServerPreviewResult = null == channel;
    }
    if (!isFullServerPreviewResult) {
      isFullServerPreviewResult = null == resourceForChannel;
    }
    if (!isFullServerPreviewResult) {
      let obj = expandEventProperties;
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
    isFullServerPreviewResult = initialize.isFullServerPreview(guild_id);
  }
  if (!isFullServerPreviewResult) {
    isFullServerPreviewResult = null == channel;
  }
  if (!isFullServerPreviewResult) {
    isFullServerPreviewResult = null == actionForChannel;
  }
  if (!isFullServerPreviewResult) {
    let obj = expandEventProperties;
    obj = { guild_id: null, channel_id: null, server_guide_channel_type: "member action", channel_action_type: null };
    obj[0] = guild_id;
    obj[1] = channel.id;
    obj[3] = actionForChannel.actionType;
    obj.track(constants.SERVER_GUIDE_CHANNEL_SELECTED, obj);
  }
  transitionToChannel.transitionToChannel(id);
};
export const completeNewMemberAction = function completeNewMemberAction(c0, c1) {
  let obj = dispatcher;
  obj = { type: "COMPLETE_NEW_MEMBER_ACTION", guildId: c0, channelId: c1 };
  obj.dispatch(obj);
  if (!initialize.isFullServerPreview(c0)) {
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
    const obj1 = { url: null, rejectWithError: true };
    obj1[0] = closure_9.GUILD_MEMBER_ACTION_UPDATE(c0, c1);
    HTTP.post(obj1);
    obj3 = store2;
  }
};