// discord_app/modules/guild_onboarding/GuildOnboardingActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import SentryUtilsDefault from "../../utils/SentryUtils.native.tsx";
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import ImpersonateActionCreators from "../impersonate/ImpersonateActionCreators.tsx";
import OptInChannelsActionCreators from "../opt_in_channels/OptInChannelsActionCreators.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import ImpersonateStore from "../impersonate/ImpersonateStore.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import GuildMemberStore from "../../stores/GuildMemberStore.tsx";
import UserStore from "../../stores/UserStore.tsx";
import GuildOnboardingPromptsStore from "GuildOnboardingPromptsStore.tsx";
import apply from "../../../_runtime/metro/00012__.js";

const SnowflakeUtilsDefault = tmp12(11);
require = fn;
function _updateOnboardingResponses(guildId, arg1) {
  _require = guildId;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let onboardingResponses;
  let obj;
  if (!ImpersonateStore.isFullServerPreview(guildId)) {
    obj = GuildOnboardingPromptsStore;
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
      return options.filter((id) => closure_1_1.includes(id.id));
    });
    const flatResult = mapped.flat();
    obj = {};
    obj = {};
    let item = onboardingPromptsForOnboarding.forEach((id) => {
      obj[id.id] = Date.now();
      const options = id.options;
      const item = options.forEach((id) => {
        const timestamp = Date.now();
        obj[id.id] = timestamp;
        return timestamp;
      });
    });
    const HTTP = require("HTTPUtils").HTTP;
    if (flag) {
      const request = { url: closure_12.GUILD_ONBOARDING_RESPONSES(guildId), body: null, rejectWithError: true };
      obj1 = {
        onboarding_responses: flatResult.map((id) => id.id),
        onboarding_prompts_seen: obj,
        onboarding_responses_seen: obj,
      };
      request.body = obj1;
      const postResult = HTTP.post(request);
      let catchPromise = HTTP.post(request)
        .then((body) => {
          if (null != body.body) {
            obj = {
              type: "GUILD_ONBOARDING_UPDATE_RESPONSES_SUCCESS",
              guildId,
              options: body.body.onboarding_responses,
              prompts_seen: body.body.onboarding_prompts_seen,
              options_seen: body.body.onboarding_responses_seen,
            };
            obj.dispatch(obj);
          }
        })
        .catch((error) => {
          obj = closure_1(obj[12]);
          return obj.captureException(error);
        });
      const nextPromise = HTTP.post(request).then((body) => {
        if (null != body.body) {
          obj = {
            type: "GUILD_ONBOARDING_UPDATE_RESPONSES_SUCCESS",
            guildId,
            options: body.body.onboarding_responses,
            prompts_seen: body.body.onboarding_prompts_seen,
            options_seen: body.body.onboarding_responses_seen,
          };
          obj.dispatch(obj);
        }
      });
    } else {
      const request1 = { url: closure_12.GUILD_ONBOARDING_RESPONSES(guildId), body: null, rejectWithError: false };
      const obj2 = {
        onboarding_responses: flatResult.map((id) => id.id),
        onboarding_prompts_seen: obj,
        onboarding_responses_seen: obj,
      };
      request1.body = obj2;
      const putResult = HTTP.put(request1);
      catchPromise = HTTP.put(request1)
        .then((body) => {
          if (null != body.body) {
            obj = {
              type: "GUILD_ONBOARDING_UPDATE_RESPONSES_SUCCESS",
              guildId,
              options: body.body.onboarding_responses,
              prompts_seen: body.body.onboarding_prompts_seen,
              options_seen: body.body.onboarding_responses_seen,
            };
            obj.dispatch(obj);
          }
        })
        .catch((error) => {
          obj = { cause: error };
          error = new Error(
            "Failed to update onboarding responses for guild " + closure_0 + ": " + error.statusCode,
            obj,
          );
          obj.captureException(error);
        });
      const nextPromise1 = HTTP.put(request1).then((body) => {
        if (null != body.body) {
          obj = {
            type: "GUILD_ONBOARDING_UPDATE_RESPONSES_SUCCESS",
            guildId,
            options: body.body.onboarding_responses,
            prompts_seen: body.body.onboarding_prompts_seen,
            options_seen: body.body.onboarding_responses_seen,
          };
          obj.dispatch(obj);
        }
      });
    }
    return catchPromise;
  }
}
const Constants = fn(1074);
({ AnalyticEvents: c10, AnalyticsPages: closure_11, Endpoints: closure_12 } = Constants);
const GuildMemberFlags = fn(4187).GuildMemberFlags;
const ReadStateTypes = fn(4742).ReadStateTypes;
let obj = {
  selectOption(guildId, id, id2, selected) {
    let dispatch = GuildOnboardingPromptsStore.getOnboardingPrompt(id);
    if (null != dispatch) {
      if (dispatch.singleSelect) {
        let obj = apply;
        let withoutResult = obj.without(apply.map(dispatch.options, "id"), id2);
      } else {
        withoutResult = [];
      }
      dispatch = DispatcherDefault.dispatch;
      obj = {
        type: "GUILD_ONBOARDING_SELECT_OPTION",
        guildId,
        promptId: id,
        optionId: id2,
        selected,
        removedOptionIds: withoutResult,
      };
      dispatch(obj);
    }
  },
  updateOnboardingResponses: null,
  updateRolesLocal: null,
  completeOnboarding: null,
  onboardExistingMember: null,
  finishOnboarding: null,
  setUserOnboardingStep: null,
  resetOnboarding: null,
};
obj.updateOnboardingResponses = apply.debounce(_updateOnboardingResponses, 1000);
obj.updateRolesLocal = function updateRolesLocal(guildId, items2, differenceResult1) {
  const selfMember = GuildMemberStore.getSelfMember(guildId);
  let roles;
  if (selfMember != null) {
    roles = selfMember.roles;
  }
  if (roles == null) {
    roles = [];
  }
  if (ImpersonateStore.isViewingRoles(guildId)) {
    const obj5 = ImpersonateActionCreators;
    const obj6 = apply;
    const result = obj5.updateImpersonatedRoles(
      guildId,
      obj6.difference(apply.union(roles, items2), differenceResult1),
    );
  } else {
    if (tmp2) {
      const obj = { type: "GUILD_MEMBER_UPDATE_LOCAL", guildId, roles: null, addedRoleIds: null, removedRoleIds: null };
      const obj3 = apply;
      obj.roles = obj3.difference(apply.union(roles, items2), differenceResult1);
      obj.addedRoleIds = items2;
      obj.removedRoleIds = differenceResult1;
      obj.dispatch(obj);
    }
    tmp2 = items2.length > 0 || differenceResult1.length > 0;
  }
};
obj.completeOnboarding = function completeOnboarding(guildId, prompts) {
  let tmp = null;
  if (prompts.length > 0) {
    tmp = prompts[prompts.length - 1];
  }
  let obj = GuildOnboardingPromptsStore;
  const selectedOptions = GuildOnboardingPromptsStore.getSelectedOptions(guildId);
  let obj1 = items1(7106);
  const selectedRoleIds = obj1.getSelectedRoleIds(selectedOptions);
  const selectedChannelIds = items1(7106).getSelectedChannelIds(selectedOptions);
  if (GuildOnboardingPromptsStore.getEnabled(guildId)) {
    let defaultChannelIds = obj.getDefaultChannelIds(guildId);
  } else {
    defaultChannelIds = [];
  }
  let tmp2Result = tmp2(7106);
  const obj3 = items1(7106);
  [arr3, arr4] = _slicedToArray(tmp2Result.getChannelCoverageForOnboarding(guildId, prompts, defaultChannelIds), 2);
  const items = [...defaultChannelIds];
  const mapped = items.map((item) => channel.getChannel(item));
  const found = mapped.filter(tmp2(1369).isNotNullish);
  tmp2Result = tmp2(7109);
  const tmp6 = _slicedToArray(tmp2Result.getChannelCoverageForOnboarding(guildId, prompts, defaultChannelIds), 2);
  if (null == tmp) {
    items1 = [];
  } else {
    const options = tmp.options;
    items1 = options.map((id) => id.id);
  }
  const connections = obj.getConnections(guildId);
  const set = new Set(items);
  const providerConnectionState = items1(7106).getProviderConnectionState(connections);
  const tmp2Result1 = items1(7106);
  const applicationConnectionState = items1(7106).getApplicationConnectionState(connections);
  const tmp2Result2 = items1(7106);
  obj = {};
  const obj8 = AnalyticsUtilsDefault;
  const merged = Object.assign(items1(4740).collectGuildAnalyticsMetadata(guildId));
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
  ({ connected: obj9.provider_connections_connected, notConnected: obj9.provider_connections_not_connected } =
    providerConnectionState);
  ({ connected: obj9.application_connections_connected, notConnected: obj9.application_connections_not_connected } =
    applicationConnectionState);
  obj8.track(constants.GUILD_ONBOARDING_STEP_COMPLETED, obj);
  const tmp2Result3 = items1(4740);
  const tmp2Result4 = items1(7110);
  tmp2Result4.ackGuildFeature(
    guildId,
    ReadStateTypes.GUILD_ONBOARDING_QUESTION,
    SnowflakeUtilsDefault.fromTimestamp(Date.now()),
  );
  _updateOnboardingResponses(guildId, true);
  if (ImpersonateStore.isFullServerPreview(guildId)) {
    const result = tmp2(5552).updateImpersonatedChannels(guildId, items, []);
    const tmp2Result5 = tmp2(5552);
    const result1 = tmp2(5552).updateImpersonatedData(guildId, { optInEnabled: true });
    const tmp2Result6 = tmp2(5552);
    const _Array = Array;
    const result2 = tmp2(5552).updateImpersonatedRoles(guildId, Array.from(selectedRoleIds));
    const currentUser = UserStore.getCurrentUser();
    if (null != currentUser) {
      const member = GuildMemberStore.getMember(guildId, currentUser.id);
      let num3;
      if (member != null) {
        num3 = member.flags;
      }
      if (num3 == null) {
        num3 = 0;
      }
      obj = { memberOptions: null };
      obj1 = { flags: null };
      const tmp2Result8 = tmp2(5552);
      obj1.flags = tmp2(1384).setFlag(num3, GuildMemberFlags.COMPLETED_ONBOARDING, true);
      obj.memberOptions = obj1;
      const result3 = tmp2Result8.updateImpersonatedData(guildId, obj);
      const tmp2Result9 = tmp2(1384);
    }
    const tmp2Result7 = tmp2(5552);
  }
};
obj.onboardExistingMember = function onboardExistingMember(id, set) {
  set = new Set(set);
  let obj = GuildOnboardingPromptsStore;
  if (GuildOnboardingPromptsStore.getEnabled(id)) {
    let defaultChannelIds = obj.getDefaultChannelIds(id);
  } else {
    defaultChannelIds = [];
  }
  const item = defaultChannelIds.forEach((item) => set.add(item));
  if (set.size > 0) {
    const obj2 = OptInChannelsActionCreators;
    const _Array = Array;
    obj = { page: constants2.GUILD_ONBOARDING };
    obj2.bulkOptInChannels(id, Array.from(set), true, obj);
  }
};
obj.finishOnboarding = function finishOnboarding(guildId) {
  const obj = { type: "GUILD_ONBOARDING_COMPLETE", guildId };
  obj.dispatch(obj);
};
obj.setUserOnboardingStep = function setUserOnboardingStep(guildId, step) {
  const obj = { type: "GUILD_ONBOARDING_SET_STEP", guildId, step };
  obj.dispatch(obj);
};
obj.resetOnboarding = function resetOnboarding(arg0) {
  closure_0 = arg0;
  return (async (arg0, value) => {
    if (c1 === 2) {
      c1 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
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
        c1 = 2;
        if (0 === dependencyMap) {
          if (arg0 === 1) {
            c1 = 3;
            throw value;
          } else if (arg0 === 2) {
            c1 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            currentUser = currentUser.getCurrentUser();
            if (null != currentUser) {
              member = member.getMember(closure_0, currentUser.id);
              let flags;
              if (member != null) {
                flags = member.flags;
              }
              let v0 = flags;
              if (flags == null) {
                v0 = 0;
              }
              let obj1 = v0(7120);
              obj1 = { flags: v0(1384).setFlag(v0, constants.COMPLETED_ONBOARDING, false) };
              dependencyMap = 1;
              c1 = 1;
              const obj2 = { value: obj1.updateGuildSelfMember(closure_0, obj1), done: false };
              return obj2;
            }
          }
        } else if (arg0 === 1) {
          c1 = 3;
          throw value;
        } else if (arg0 === 2) {
          c1 = 3;
          obj = { value, done: true };
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
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_onboarding/GuildOnboardingActionCreators.tsx");

export default obj;
