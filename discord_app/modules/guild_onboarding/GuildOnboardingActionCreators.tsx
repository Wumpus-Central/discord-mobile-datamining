// discord_app/modules/guild_onboarding/GuildOnboardingActionCreators.tsx
import DISCORD_EPOCHDefault from "../../utils/SnowflakeUtils.tsx";
import expandEventPropertiesDefault from "../../utils/AnalyticsUtils.tsx";
import dispatcherDefault from "../../Dispatcher.tsx";
import updateImpersonating from "../impersonate/ImpersonateActionCreators.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../_runtime/metro/00032__slicedToArray.js";
import initialize from "../impersonate/ImpersonateStore.tsx";
import ensureGuildLoaded from "../../stores/ChannelStore.tsx";
import trackCommunicationDisabled from "../../stores/GuildMemberStore.tsx";
import mergeGuildAvatar from "../../stores/UserStore.tsx";
import handleUpdate from "GuildOnboardingPromptsStore.tsx";
import ME from "../../Constants.tsx";
import { GuildMemberFlags } from "../guild_member/GuildMemberConstants.tsx";
import { ReadStateTypes } from "../read_states/ReadStateConstants.tsx";
import importDefaultResult from "../../../_runtime/00012_apply.js";

require = fn;
function _updateOnboardingResponses(guildId, arg1) {
  const _require = guildId;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let onboardingResponses;
  let obj;
  if (!closure_5.isFullServerPreview(guildId)) {
    obj = closure_9;
    if (flag) {
      let onboardingPromptsForOnboarding = obj.getOnboardingPromptsForOnboarding(guildId);
      obj1 = obj;
    } else {
      onboardingPromptsForOnboarding = obj.getOnboardingPrompts(guildId);
      obj1 = obj;
    }
    onboardingResponses = obj1.getOnboardingResponses(guildId);
    const mapped = onboardingPromptsForOnboarding.map((item, index) => {
      const options = item.options;
      return options.filter((item, index) => closure_1.includes(item.id));
    });
    const flatResult = mapped.flat();
    obj = {};
    let item = onboardingPromptsForOnboarding.forEach((item, index) => {
      obj[item.id] = Date.now();
      const options = item.options;
      item = options.forEach((item, index) => {
        const timestamp = Date.now();
        closure_3[item.id] = timestamp;
        return timestamp;
      });
    });
    const HTTP = _require(obj[10]).HTTP;
    if (flag) {
      obj1 = { url: null, body: null, rejectWithError: true };
      obj1[0] = closure_12.GUILD_ONBOARDING_RESPONSES(guildId);
      const obj2 = { onboarding_responses: null, onboarding_prompts_seen: null, onboarding_responses_seen: null };
      obj2[0] = flatResult.map((item, index) => item.id);
      obj2[1] = obj;
      obj2[2] = obj;
      obj1[1] = obj2;
      const postResult = HTTP.post(obj1);
      let catchPromise = HTTP.post(obj1).then((result) => {
        if (null != result.body) {
          callback(obj[11]);
          obj = { type: "GUILD_ONBOARDING_UPDATE_RESPONSES_SUCCESS", guildId: null, options: null, prompts_seen: null, options_seen: null };
          obj[1] = closure_0;
          obj[2] = result.body.onboarding_responses;
          obj[3] = result.body.onboarding_prompts_seen;
          obj[4] = result.body.onboarding_responses_seen;
          obj.dispatch(obj);
        }
      }).catch((error) => {
        obj = callback(obj[12]);
        return obj.captureException(error);
      });
      const nextPromise = HTTP.post(obj1).then((result) => {
        if (null != result.body) {
          callback(obj[11]);
          obj = { type: "GUILD_ONBOARDING_UPDATE_RESPONSES_SUCCESS", guildId: null, options: null, prompts_seen: null, options_seen: null };
          obj[1] = closure_0;
          obj[2] = result.body.onboarding_responses;
          obj[3] = result.body.onboarding_prompts_seen;
          obj[4] = result.body.onboarding_responses_seen;
          obj.dispatch(obj);
        }
      });
    } else {
      const obj3 = { url: null, body: null, rejectWithError: false };
      obj3[0] = closure_12.GUILD_ONBOARDING_RESPONSES(guildId);
      const obj4 = { onboarding_responses: null, onboarding_prompts_seen: null, onboarding_responses_seen: null };
      obj4[0] = flatResult.map((item, index) => item.id);
      obj4[1] = obj;
      obj4[2] = obj;
      obj3[1] = obj4;
      const putResult = HTTP.put(obj3);
      catchPromise = HTTP.put(obj3).then((result) => {
        if (null != result.body) {
          callback(obj[11]);
          obj = { type: "GUILD_ONBOARDING_UPDATE_RESPONSES_SUCCESS", guildId: null, options: null, prompts_seen: null, options_seen: null };
          obj[1] = closure_0;
          obj[2] = result.body.onboarding_responses;
          obj[3] = result.body.onboarding_prompts_seen;
          obj[4] = result.body.onboarding_responses_seen;
          obj.dispatch(obj);
        }
      }).catch((error) => {
        callback(obj[12]);
        obj = { cause: error };
        error = new Error("Failed to update onboarding responses for guild " + closure_0 + ": " + error.statusCode, obj);
        obj.captureException(error);
      });
      const nextPromise1 = HTTP.put(obj3).then((result) => {
        if (null != result.body) {
          callback(obj[11]);
          obj = { type: "GUILD_ONBOARDING_UPDATE_RESPONSES_SUCCESS", guildId: null, options: null, prompts_seen: null, options_seen: null };
          obj[1] = closure_0;
          obj[2] = result.body.onboarding_responses;
          obj[3] = result.body.onboarding_prompts_seen;
          obj[4] = result.body.onboarding_responses_seen;
          obj.dispatch(obj);
        }
      });
    }
    return catchPromise;
  }
}
({ AnalyticEvents: c10, AnalyticsPages: unpackModuleId, Endpoints: closure_12 } = ME);
let obj = {
  selectOption(closure_0, id, id2, arg3) {
    let dispatch = store2.getOnboardingPrompt(id);
    if (null != dispatch) {
      if (dispatch.singleSelect) {
        let obj = importDefaultResult;
        let withoutResult = obj.without(importDefaultResult.map(dispatch.options, "id"), id2);
      } else {
        withoutResult = [];
      }
      dispatch = dispatcherDefault.dispatch;
      obj = { type: "GUILD_ONBOARDING_SELECT_OPTION", guildId: null, promptId: null, optionId: null, selected: null, removedOptionIds: null };
      obj[1] = closure_0;
      obj[2] = id;
      obj[3] = id2;
      obj[4] = arg3;
      obj[5] = withoutResult;
      dispatch(obj);
    }
  },
  updateOnboardingResponses: importDefaultResult.debounce(_updateOnboardingResponses, 1000),
  updateRolesLocal(closure_0, items2, differenceResult1) {
    const selfMember = store.getSelfMember(closure_0);
    let roles;
    if (selfMember != null) {
      roles = selfMember.roles;
    }
    if (roles == null) {
      roles = [];
    }
    if (closure_5.isViewingRoles(closure_0)) {
      const obj5 = updateImpersonating;
      const obj6 = importDefaultResult;
      const result = obj5.updateImpersonatedRoles(closure_0, obj6.difference(importDefaultResult.union(roles, items2), differenceResult1));
    } else {
      if (tmp2) {
        const obj = { type: "GUILD_MEMBER_UPDATE_LOCAL", guildId: null, roles: null, addedRoleIds: null, removedRoleIds: null };
        obj[1] = closure_0;
        const obj3 = importDefaultResult;
        obj[2] = obj3.difference(importDefaultResult.union(roles, items2), differenceResult1);
        obj[3] = items2;
        obj[4] = differenceResult1;
        obj.dispatch(obj);
      }
      tmp2 = items2.length > 0 || differenceResult1.length > 0;
    }
  },
  completeOnboarding(guildId, prompts) {
    let tmp = null;
    if (prompts.length > 0) {
      tmp = prompts[prompts.length - 1];
    }
    let obj = store2;
    const selectedOptions = store2.getSelectedOptions(guildId);
    obj1 = items1(5285);
    const selectedRoleIds = obj1.getSelectedRoleIds(selectedOptions);
    const selectedChannelIds = items1(5285).getSelectedChannelIds(selectedOptions);
    if (store2.getEnabled(guildId)) {
      let defaultChannelIds = obj.getDefaultChannelIds(guildId);
    } else {
      defaultChannelIds = [];
    }
    let tmp2Result = tmp2(5285);
    const obj3 = items1(5285);
    [arr3, arr4] = callback2(tmp2Result.getChannelCoverageForOnboarding(guildId, prompts, defaultChannelIds), 2);
    const items = [...defaultChannelIds];
    const mapped = items.map((item, index) => channel.getChannel(item));
    const found = mapped.filter(tmp2(1370).isNotNullish);
    tmp2Result = tmp2(6793);
    const tmp6 = callback2(tmp2Result.getChannelCoverageForOnboarding(guildId, prompts, defaultChannelIds), 2);
    if (null == tmp) {
      items1 = [];
    } else {
      const options = tmp.options;
      items1 = options.map((item, index) => item.id);
    }
    const connections = obj.getConnections(guildId);
    const set = new Set(items);
    const providerConnectionState = items1(5285).getProviderConnectionState(connections);
    const tmp2Result1 = items1(5285);
    const applicationConnectionState = items1(5285).getApplicationConnectionState(connections);
    const tmp2Result2 = items1(5285);
    obj = {};
    const obj8 = expandEventPropertiesDefault;
    const merged = Object.assign(items1(5042).collectGuildAnalyticsMetadata(guildId));
    obj.step = prompts.length - 1;
    let num2 = 0;
    if (null != tmp) {
      num2 = selectedOptions.filter((item, index) => items1.includes(item.id)).length;
    }
    obj.options_selected = num2;
    obj.skipped = items1.length > 0;
    obj.back = false;
    obj.in_onboarding = true;
    obj.is_final_step = true;
    obj.roles_granted = selectedRoleIds.size;
    obj.channels_granted = tmp2Result.getFlattenedChannels(guildId, set, found, true).length;
    obj.guild_onboarding_covered_channel_ids = arr3.map((item, index) => item.id);
    obj.guild_onboarding_uncovered_channel_ids = arr4.map((item, index) => item.id);
    ({ connected: obj9.provider_connections_connected, notConnected: obj9.provider_connections_not_connected } = providerConnectionState);
    ({ connected: obj9.application_connections_connected, notConnected: obj9.application_connections_not_connected } = applicationConnectionState);
    obj8.track(constants.GUILD_ONBOARDING_STEP_COMPLETED, obj);
    const tmp2Result3 = items1(5042);
    const tmp2Result4 = items1(5277);
    tmp2Result4.ackGuildFeature(guildId, ReadStateTypes.GUILD_ONBOARDING_QUESTION, DISCORD_EPOCHDefault.fromTimestamp(Date.now()));
    _updateOnboardingResponses(guildId, true);
    if (closure_5.isFullServerPreview(guildId)) {
      const result = tmp2(6792).updateImpersonatedChannels(guildId, items, []);
      const tmp2Result5 = tmp2(6792);
      const result1 = tmp2(6792).updateImpersonatedData(guildId, { optInEnabled: true });
      const tmp2Result6 = tmp2(6792);
      const _Array = Array;
      const result2 = tmp2(6792).updateImpersonatedRoles(guildId, Array.from(selectedRoleIds));
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
        const tmp2Result8 = tmp2(6792);
        obj1[0] = tmp2(1403).setFlag(num3, GuildMemberFlags.COMPLETED_ONBOARDING, true);
        obj[0] = obj1;
        const result3 = tmp2Result8.updateImpersonatedData(guildId, obj);
        const tmp2Result9 = tmp2(1403);
      }
      const tmp2Result7 = tmp2(6792);
    }
    const tmp12Result = DISCORD_EPOCHDefault;
  },
  onboardExistingMember(id, set) {
    set = new Set(set);
    let obj = store2;
    if (store2.getEnabled(id)) {
      let defaultChannelIds = obj.getDefaultChannelIds(id);
    } else {
      defaultChannelIds = [];
    }
    const item = defaultChannelIds.forEach((item, index) => set.add(item));
    if (set.size > 0) {
      const obj2 = set(6794);
      const _Array = Array;
      obj = { page: null };
      obj[0] = constants2.GUILD_ONBOARDING;
      obj2.bulkOptInChannels(id, Array.from(set), true, obj);
    }
  },
  finishOnboarding(closure_0) {
    const obj = { type: "GUILD_ONBOARDING_COMPLETE", guildId: closure_0 };
    obj.dispatch(obj);
  },
  setUserOnboardingStep(guildId, step) {
    const obj = { type: "GUILD_ONBOARDING_SET_STEP", guildId, step };
    obj.dispatch(obj);
  },
  resetOnboarding(arg0) {
    closure_0 = arg0;
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
          return { value: "HermesInternal", done: "HermesInternal" };
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
              const currentUser = closure_1_8.getCurrentUser();
              if (null != currentUser) {
                const member = closure_1_7.getMember(closure_1_0, currentUser.id);
                let flags;
                if (member != null) {
                  flags = member.flags;
                }
                c0 = flags;
                if (flags == null) {
                  c0 = 0;
                }
                obj1 = closure_1_0(6799);
                obj1 = { flags: null };
                obj1[0] = closure_1_0(1403).setFlag(c0, closure_1_13.COMPLETED_ONBOARDING, false);
                dependencyMap = 1;
                c1 = 1;
                const obj2 = { value: null, done: false };
                obj2[0] = obj1.updateGuildSelfMember(closure_1_0, obj1);
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
          return { value: "HermesInternal", done: "HermesInternal" };
        } catch (tmp13) {
          c1 = tmp;
          throw tmp13;
        }
      }
    })();
  }
};
let result = require("obj132").fileFinishedImporting("modules/guild_onboarding/GuildOnboardingActionCreators.tsx");

export default obj;