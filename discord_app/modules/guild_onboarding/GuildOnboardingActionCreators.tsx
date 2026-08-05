// discord_app/modules/guild_onboarding/GuildOnboardingActionCreators.tsx
import mergeGuildAvatar from "mergeGuildAvatar";
import _slicedToArray from "_slicedToArray";
import initialize from "initialize";
import ensureGuildLoaded from "ensureGuildLoaded";
import trackCommunicationDisabled from "trackCommunicationDisabled";
import closure_8 from "mergeGuildAvatar";
import handleUpdate from "handleUpdate";
import ME from "ME";
import { GuildMemberFlags } from "GuildMemberFlags";
import { ReadStateTypes } from "ReadStateTypes";
import importDefaultResult from "module_1208";

let c10;
let closure_12;
let unpackModuleId;
const require = arg1;
function _updateOnboardingResponses(guildId, arg1) {
  const _require = guildId;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let onboardingResponses;
  let obj;
  obj = undefined;
  if (!initialize.isFullServerPreview(guildId)) {
    obj = handleUpdate;
    if (flag) {
      let onboardingPromptsForOnboarding = obj.getOnboardingPromptsForOnboarding(guildId);
      let obj1 = obj;
    } else {
      onboardingPromptsForOnboarding = obj.getOnboardingPrompts(guildId);
      obj1 = obj;
    }
    onboardingResponses = obj1.getOnboardingResponses(guildId);
    const mapped = onboardingPromptsForOnboarding.map((options) => {
      options = options.options;
      return options.filter((id) => closure_1.includes(id.id));
    });
    const flatResult = mapped.flat();
    obj = {};
    obj = {};
    let item = onboardingPromptsForOnboarding.forEach((id) => {
      obj[id.id] = Date.now();
      const options = id.options;
      const item = options.forEach((id) => {
        const timestamp = Date.now();
        mergeGuildAvatar[id.id] = timestamp;
        return timestamp;
      });
    });
    const HTTP = _require(obj[10]).HTTP;
    if (flag) {
      obj1 = { url: null, body: null, rejectWithError: true };
      obj1[0] = closure_12.GUILD_ONBOARDING_RESPONSES(guildId);
      const obj2 = { onboarding_responses: null, onboarding_prompts_seen: null, onboarding_responses_seen: null };
      obj2[0] = flatResult.map((id) => id.id);
      obj2[1] = obj;
      obj2[2] = obj;
      obj1[1] = obj2;
      const postResult = HTTP.post(obj1);
      let catchPromise = HTTP.post(obj1).then((body) => {
        if (null != body.body) {
          obj = callback(obj[11]);
          obj = { type: "GUILD_ONBOARDING_UPDATE_RESPONSES_SUCCESS", guildId: null, options: null, prompts_seen: null, options_seen: null };
          obj[1] = closure_0;
          obj[2] = body.body.onboarding_responses;
          obj[3] = body.body.onboarding_prompts_seen;
          obj[4] = body.body.onboarding_responses_seen;
          obj.dispatch(obj);
        }
      }).catch((arg0) => {
        obj = callback(obj[12]);
        return obj.captureException(arg0);
      });
      const nextPromise = HTTP.post(obj1).then((body) => {
        if (null != body.body) {
          obj = callback(obj[11]);
          obj = { type: "GUILD_ONBOARDING_UPDATE_RESPONSES_SUCCESS", guildId: null, options: null, prompts_seen: null, options_seen: null };
          obj[1] = closure_0;
          obj[2] = body.body.onboarding_responses;
          obj[3] = body.body.onboarding_prompts_seen;
          obj[4] = body.body.onboarding_responses_seen;
          obj.dispatch(obj);
        }
      });
    } else {
      const obj3 = { url: null, body: null, rejectWithError: false };
      obj3[0] = closure_12.GUILD_ONBOARDING_RESPONSES(guildId);
      const obj4 = { onboarding_responses: null, onboarding_prompts_seen: null, onboarding_responses_seen: null };
      obj4[0] = flatResult.map((id) => id.id);
      obj4[1] = obj;
      obj4[2] = obj;
      obj3[1] = obj4;
      const putResult = HTTP.put(obj3);
      catchPromise = HTTP.put(obj3).then((body) => {
        if (null != body.body) {
          obj = callback(obj[11]);
          obj = { type: "GUILD_ONBOARDING_UPDATE_RESPONSES_SUCCESS", guildId: null, options: null, prompts_seen: null, options_seen: null };
          obj[1] = closure_0;
          obj[2] = body.body.onboarding_responses;
          obj[3] = body.body.onboarding_prompts_seen;
          obj[4] = body.body.onboarding_responses_seen;
          obj.dispatch(obj);
        }
      }).catch((cause) => {
        obj = callback(obj[12]);
        obj = { cause };
        const error = new Error("Failed to update onboarding responses for guild " + closure_0 + ": " + cause.statusCode, obj);
        obj.captureException(error);
      });
      const nextPromise1 = HTTP.put(obj3).then((body) => {
        if (null != body.body) {
          obj = callback(obj[11]);
          obj = { type: "GUILD_ONBOARDING_UPDATE_RESPONSES_SUCCESS", guildId: null, options: null, prompts_seen: null, options_seen: null };
          obj[1] = closure_0;
          obj[2] = body.body.onboarding_responses;
          obj[3] = body.body.onboarding_prompts_seen;
          obj[4] = body.body.onboarding_responses_seen;
          obj.dispatch(obj);
        }
      });
    }
    return catchPromise;
  }
}
({ AnalyticEvents: c10, AnalyticsPages: unpackModuleId, Endpoints: closure_12 } = ME);
let obj = {
  selectOption(guildId, id, id2, arg3) {
    let dispatch = store2.getOnboardingPrompt(id);
    if (null != dispatch) {
      if (dispatch.singleSelect) {
        let obj = importDefault(12);
        let withoutResult = obj.without(importDefault(12).map(dispatch.options, "id"), id2);
        const arr2 = importDefault(12);
      } else {
        withoutResult = [];
      }
      dispatch = importDefault(709).dispatch;
      obj = { type: "GUILD_ONBOARDING_SELECT_OPTION", guildId: null, promptId: null, optionId: null, selected: null, removedOptionIds: null };
      obj[1] = guildId;
      obj[2] = id;
      obj[3] = id2;
      obj[4] = arg3;
      obj[5] = withoutResult;
      dispatch(obj);
      const tmp7 = importDefault(709);
    }
  },
  updateOnboardingResponses: null,
  updateRolesLocal: null,
  completeOnboarding: null,
  onboardExistingMember: null,
  finishOnboarding: null,
  setUserOnboardingStep: null,
  resetOnboarding: null
};
obj[1] = require("module_1208").debounce(_updateOnboardingResponses, 1000);
obj[2] = function updateRolesLocal(guildId, items2, differenceResult1) {
  const selfMember = store.getSelfMember(guildId);
  let roles;
  if (selfMember != null) {
    roles = selfMember.roles;
  }
  if (roles == null) {
    roles = [];
  }
  if (initialize.isViewingRoles(guildId)) {
    const obj5 = require(5216) /* updateImpersonating */;
    const obj6 = importDefault(12);
    const result = obj5.updateImpersonatedRoles(guildId, obj6.difference(importDefault(12).union(roles, items2), differenceResult1));
    const obj7 = importDefault(12);
  } else {
    if (tmp2) {
      let obj = importDefault(709);
      obj = { type: "GUILD_MEMBER_UPDATE_LOCAL", guildId: null, roles: null, addedRoleIds: null, removedRoleIds: null };
      obj[1] = guildId;
      const obj3 = importDefault(12);
      obj[2] = obj3.difference(importDefault(12).union(roles, items2), differenceResult1);
      obj[3] = items2;
      obj[4] = differenceResult1;
      obj.dispatch(obj);
      const obj4 = importDefault(12);
    }
    tmp2 = items2.length > 0 || differenceResult1.length > 0;
  }
};
obj[3] = function completeOnboarding(guildId, prompts) {
  let arr3;
  let arr4;
  let tmp = null;
  if (prompts.length > 0) {
    tmp = prompts[prompts.length - 1];
  }
  let obj = store2;
  const selectedOptions = store2.getSelectedOptions(guildId);
  let obj1 = items1(5217);
  const selectedRoleIds = obj1.getSelectedRoleIds(selectedOptions);
  const selectedChannelIds = items1(5217).getSelectedChannelIds(selectedOptions);
  if (store2.getEnabled(guildId)) {
    let defaultChannelIds = obj.getDefaultChannelIds(guildId);
  } else {
    defaultChannelIds = [];
  }
  let tmp2Result = tmp2(5217);
  const obj3 = items1(5217);
  [arr3, arr4] = callback2(tmp2Result.getChannelCoverageForOnboarding(guildId, prompts, defaultChannelIds), 2);
  const items = [...defaultChannelIds];
  const mapped = items.map((arg0) => channel.getChannel(arg0));
  const found = mapped.filter(tmp2(1351).isNotNullish);
  tmp2Result = tmp2(5220);
  const tmp6 = callback2(tmp2Result.getChannelCoverageForOnboarding(guildId, prompts, defaultChannelIds), 2);
  if (null == tmp) {
    items1 = [];
  } else {
    const options = tmp.options;
    items1 = options.map((id) => id.id);
  }
  const connections = obj.getConnections(guildId);
  const set = new Set(items);
  const providerConnectionState = items1(5217).getProviderConnectionState(connections);
  const tmp2Result1 = items1(5217);
  const applicationConnectionState = items1(5217).getApplicationConnectionState(connections);
  const tmp12 = importDefault;
  const tmp2Result2 = items1(5217);
  obj = {};
  const obj8 = importDefault(698);
  const merged = Object.assign(items1(4479).collectGuildAnalyticsMetadata(guildId));
  obj.step = prompts.length - 1;
  let num2 = 0;
  if (null != tmp) {
    num2 = selectedOptions.filter((id) => items1.includes(id.id)).length;
  }
  obj.options_selected = num2;
  obj.skipped = items1.length > 0;
  obj.back = false;
  obj.in_onboarding = true;
  obj.is_final_step = true;
  obj.roles_granted = selectedRoleIds.size;
  obj.channels_granted = tmp2Result.getFlattenedChannels(guildId, set, found, true).length;
  obj.guild_onboarding_covered_channel_ids = arr3.map((id) => id.id);
  obj.guild_onboarding_uncovered_channel_ids = arr4.map((id) => id.id);
  ({ connected: obj9.provider_connections_connected, notConnected: obj9.provider_connections_not_connected } = providerConnectionState);
  ({ connected: obj9.application_connections_connected, notConnected: obj9.application_connections_not_connected } = applicationConnectionState);
  obj8.track(constants.GUILD_ONBOARDING_STEP_COMPLETED, obj);
  const tmp2Result3 = items1(4479);
  const tmp2Result4 = items1(5221);
  tmp2Result4.ackGuildFeature(guildId, ReadStateTypes.GUILD_ONBOARDING_QUESTION, tmp12(11).fromTimestamp(Date.now()));
  _updateOnboardingResponses(guildId, true);
  if (initialize.isFullServerPreview(guildId)) {
    const result = tmp2(5216).updateImpersonatedChannels(guildId, items, []);
    const tmp2Result5 = tmp2(5216);
    const result1 = tmp2(5216).updateImpersonatedData(guildId, { optInEnabled: true });
    const tmp2Result6 = tmp2(5216);
    const _Array = Array;
    const result2 = tmp2(5216).updateImpersonatedRoles(guildId, Array.from(selectedRoleIds));
    currentUser = currentUser.getCurrentUser();
    if (null != currentUser) {
      const member = store.getMember(guildId, currentUser.id);
      let num3;
      if (member != null) {
        num3 = member.flags;
      }
      if (num3 == null) {
        num3 = 0;
      }
      obj = { memberOptions: null };
      obj1 = { flags: null };
      const tmp2Result8 = tmp2(5216);
      obj1[0] = tmp2(1384).setFlag(num3, GuildMemberFlags.COMPLETED_ONBOARDING, true);
      obj[0] = obj1;
      const result3 = tmp2Result8.updateImpersonatedData(guildId, obj);
      const tmp2Result9 = tmp2(1384);
    }
    const tmp2Result7 = tmp2(5216);
  }
};
obj[4] = function onboardExistingMember(id, set) {
  set = new Set(set);
  let obj = store2;
  if (store2.getEnabled(id)) {
    let defaultChannelIds = obj.getDefaultChannelIds(id);
  } else {
    defaultChannelIds = [];
  }
  const item = defaultChannelIds.forEach((arg0) => set.add(arg0));
  if (set.size > 0) {
    const obj2 = set(5224);
    const _Array = Array;
    obj = { page: null };
    obj[0] = constants2.GUILD_ONBOARDING;
    obj2.bulkOptInChannels(id, Array.from(set), true, obj);
  }
};
obj[5] = function finishOnboarding(guildId) {
  let obj = importDefault(709);
  obj = { type: "GUILD_ONBOARDING_COMPLETE", guildId };
  obj.dispatch(obj);
};
obj[6] = function setUserOnboardingStep(guildId, step) {
  let obj = importDefault(709);
  obj = { type: "GUILD_ONBOARDING_SET_STEP", guildId, step };
  obj.dispatch(obj);
};
obj[7] = function resetOnboarding(arg0) {
  let closure_0 = arg0;
  return callback(function*() {
    if (c1 === 2) {
      c1 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c1 = 2;
        if (0 === dependencyMap) {
          if (arg0 === 1) {
            c1 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c1 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            const currentUser = outer1_8.getCurrentUser();
            if (null != currentUser) {
              const member = outer1_7.getMember(outer1_0, currentUser.id);
              let flags;
              if (member != null) {
                flags = member.flags;
              }
              let c0 = flags;
              if (flags == null) {
                c0 = 0;
              }
              let obj1 = outer1_0(5231);
              obj1 = { flags: null };
              obj1[0] = outer1_0(1384).setFlag(c0, outer1_13.COMPLETED_ONBOARDING, false);
              dependencyMap = 1;
              c1 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = obj1.updateGuildSelfMember(outer1_0, obj1);
              return obj2;
            }
          }
        } else if (arg0 === 1) {
          c1 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c1 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        }
        c1 = 3;
        return { value: "HermesInternal", done: null };
      } catch (tmp13) {
        c1 = tmp;
        throw tmp13;
      }
    }
  })();
};
let result = require("initialize").fileFinishedImporting("modules/guild_onboarding/GuildOnboardingActionCreators.tsx");

export default obj;