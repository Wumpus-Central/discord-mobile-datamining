// discord_app/modules/guild_onboarding/GuildOnboardingActionCreators.tsx
import SnowflakeUtilsDefault from "../../utils/SnowflakeUtils.tsx";
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

require = fn;
function _updateOnboardingResponses(guildId, arg1) {
  _require = guildId;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let onboardingResponses;
  let obj3;
  let obj4;
  if (!ImpersonateStore.isFullServerPreview(guildId)) {
    if (flag) {
      let onboardingPromptsForOnboarding = GuildOnboardingPromptsStore.getOnboardingPromptsForOnboarding(guildId);
      let obj2 = GuildOnboardingPromptsStore;
    } else {
      onboardingPromptsForOnboarding = GuildOnboardingPromptsStore.getOnboardingPrompts(guildId);
      obj2 = GuildOnboardingPromptsStore;
    }
    onboardingResponses = obj2.getOnboardingResponses(guildId);
    const mapped = onboardingPromptsForOnboarding.map((options) => {
      options = options.options;
      return options.filter((id) => closure_1_1.includes(id.id));
    });
    const flatResult = mapped.flat();
    obj3 = {};
    obj4 = {};
    let item = onboardingPromptsForOnboarding.forEach((id) => {
      obj3[id.id] = Date.now();
      const options = id.options;
      const item = options.forEach((id) => {
        const timestamp = Date.now();
        obj4[id.id] = timestamp;
        return timestamp;
      });
    });
    const HTTP = require("HTTPUtils").HTTP;
    if (flag) {
      const request = { url: closure_12.GUILD_ONBOARDING_RESPONSES(guildId), body: null, rejectWithError: true };
      const obj5 = {
        onboarding_responses: flatResult.map((id) => id.id),
        onboarding_prompts_seen: obj3,
        onboarding_responses_seen: obj4,
      };
      request.body = obj5;
      const postResult = HTTP.post(request);
      let catchPromise = HTTP.post(request)
        .then((body) => {
          if (null != body.body) {
            const obj2 = {
              type: "GUILD_ONBOARDING_UPDATE_RESPONSES_SUCCESS",
              guildId,
              options: body.body.onboarding_responses,
              prompts_seen: body.body.onboarding_prompts_seen,
              options_seen: body.body.onboarding_responses_seen,
            };
            DispatcherDefault.dispatch(obj2);
          }
        })
        .catch((error) => closure_1(obj3[12]).captureException(error));
      const nextPromise = HTTP.post(request).then((body) => {
        if (null != body.body) {
          const obj2 = {
            type: "GUILD_ONBOARDING_UPDATE_RESPONSES_SUCCESS",
            guildId,
            options: body.body.onboarding_responses,
            prompts_seen: body.body.onboarding_prompts_seen,
            options_seen: body.body.onboarding_responses_seen,
          };
          DispatcherDefault.dispatch(obj2);
        }
      });
    } else {
      const request1 = { url: closure_12.GUILD_ONBOARDING_RESPONSES(guildId), body: null, rejectWithError: false };
      const obj6 = {
        onboarding_responses: flatResult.map((id) => id.id),
        onboarding_prompts_seen: obj3,
        onboarding_responses_seen: obj4,
      };
      request1.body = obj6;
      const putResult = HTTP.put(request1);
      catchPromise = HTTP.put(request1)
        .then((body) => {
          if (null != body.body) {
            const obj2 = {
              type: "GUILD_ONBOARDING_UPDATE_RESPONSES_SUCCESS",
              guildId,
              options: body.body.onboarding_responses,
              prompts_seen: body.body.onboarding_prompts_seen,
              options_seen: body.body.onboarding_responses_seen,
            };
            DispatcherDefault.dispatch(obj2);
          }
        })
        .catch((error) => {
          error = new Error("Failed to update onboarding responses for guild " + closure_0 + ": " + error.statusCode, {
            cause: error,
          });
          SentryUtilsDefault.captureException(error);
        });
      const nextPromise1 = HTTP.put(request1).then((body) => {
        if (null != body.body) {
          const obj2 = {
            type: "GUILD_ONBOARDING_UPDATE_RESPONSES_SUCCESS",
            guildId,
            options: body.body.onboarding_responses,
            prompts_seen: body.body.onboarding_prompts_seen,
            options_seen: body.body.onboarding_responses_seen,
          };
          DispatcherDefault.dispatch(obj2);
        }
      });
    }
    return catchPromise;
  }
}
const Constants = fn(1074);
({ AnalyticEvents: c10, AnalyticsPages: closure_11, Endpoints: closure_12 } = Constants);
const GuildMemberFlags = fn(4382).GuildMemberFlags;
const ReadStateTypes = fn(4938).ReadStateTypes;
let obj = {
  selectOption(guildId, id, id2, selected) {
    let dispatch = GuildOnboardingPromptsStore.getOnboardingPrompt(id);
    if (null != dispatch) {
      if (dispatch.singleSelect) {
        const obj = apply;
        let withoutResult = obj.without(apply.map(dispatch.options, "id"), id2);
      } else {
        withoutResult = [];
      }
      dispatch = DispatcherDefault.dispatch;
      const obj2 = {
        type: "GUILD_ONBOARDING_SELECT_OPTION",
        guildId,
        promptId: id,
        optionId: id2,
        selected,
        removedOptionIds: withoutResult,
      };
      dispatch(obj2);
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
      const obj2 = {
        type: "GUILD_MEMBER_UPDATE_LOCAL",
        guildId,
        roles: null,
        addedRoleIds: null,
        removedRoleIds: null,
      };
      const obj = DispatcherDefault;
      const obj3 = apply;
      obj2.roles = obj3.difference(apply.union(roles, items2), differenceResult1);
      obj2.addedRoleIds = items2;
      obj2.removedRoleIds = differenceResult1;
      obj.dispatch(obj2);
    }
    tmp2 = items2.length > 0 || differenceResult1.length > 0;
  }
};
obj.completeOnboarding = function completeOnboarding(guildId, prompts) {
  let tmp = null;
  if (prompts.length > 0) {
    tmp = prompts[prompts.length - 1];
  }
  const selectedOptions = GuildOnboardingPromptsStore.getSelectedOptions(guildId);
  const selectedRoleIds = items1(7346).getSelectedRoleIds(selectedOptions);
  const obj2 = items1(7346);
  const selectedChannelIds = items1(7346).getSelectedChannelIds(selectedOptions);
  if (GuildOnboardingPromptsStore.getEnabled(guildId)) {
    let defaultChannelIds = GuildOnboardingPromptsStore.getDefaultChannelIds(guildId);
  } else {
    defaultChannelIds = [];
  }
  const obj3 = items1(7346);
  const tmp2Result = items1(7346);
  [arr3, arr4] = items1(7346).getChannelCoverageForOnboarding(guildId, prompts, defaultChannelIds);
  const items = [...defaultChannelIds];
  const mapped = items.map((item) => channel.getChannel(item));
  const found = mapped.filter(tmp2(1370).isNotNullish);
  const tmp6 = _slicedToArray(items1(7346).getChannelCoverageForOnboarding(guildId, prompts, defaultChannelIds), 2);
  const tmp2Result11 = items1(7349);
  if (null == tmp) {
    items1 = [];
  } else {
    const options = tmp.options;
    items1 = options.map((id) => id.id);
  }
  const connections = GuildOnboardingPromptsStore.getConnections(guildId);
  const set = new Set(items);
  const providerConnectionState = items1(7346).getProviderConnectionState(connections);
  const tmp2Result12 = items1(7346);
  const applicationConnectionState = items1(7346).getApplicationConnectionState(connections);
  const tmp2Result13 = items1(7346);
  const obj4 = {};
  const obj8 = AnalyticsUtilsDefault;
  const merged = Object.assign(items1(4936).collectGuildAnalyticsMetadata(guildId));
  obj4.step = prompts.length - 1;
  let num2 = 0;
  if (null != tmp) {
    num2 = selectedOptions.filter((id) => items1.includes(id.id)).length;
  }
  obj4.options_selected = num2;
  obj4.skipped = items1.length > 0;
  obj4.back = false;
  obj4.in_onboarding = true;
  obj4.is_final_step = true;
  obj4.roles_granted = selectedRoleIds.size;
  obj4.channels_granted = tmp2Result11.getFlattenedChannels(guildId, set, found, true).length;
  obj4.guild_onboarding_covered_channel_ids = arr3.map((id) => id.id);
  obj4.guild_onboarding_uncovered_channel_ids = arr4.map((id) => id.id);
  ({ connected: obj9.provider_connections_connected, notConnected: obj9.provider_connections_not_connected } =
    providerConnectionState);
  ({ connected: obj9.application_connections_connected, notConnected: obj9.application_connections_not_connected } =
    applicationConnectionState);
  obj8.track(constants.GUILD_ONBOARDING_STEP_COMPLETED, obj4);
  const tmp2Result14 = items1(4936);
  const tmp2Result15 = items1(7350);
  tmp2Result15.ackGuildFeature(
    guildId,
    ReadStateTypes.GUILD_ONBOARDING_QUESTION,
    SnowflakeUtilsDefault.fromTimestamp(Date.now()),
  );
  _updateOnboardingResponses(guildId, true);
  if (ImpersonateStore.isFullServerPreview(guildId)) {
    const result = tmp2(5764).updateImpersonatedChannels(guildId, items, []);
    const tmp2Result16 = tmp2(5764);
    const result1 = tmp2(5764).updateImpersonatedData(guildId, { optInEnabled: true });
    const tmp2Result17 = tmp2(5764);
    const _Array = Array;
    const result2 = tmp2(5764).updateImpersonatedRoles(guildId, Array.from(selectedRoleIds));
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
      const obj5 = { memberOptions: null };
      const obj6 = { flags: null };
      const tmp2Result19 = tmp2(5764);
      obj6.flags = tmp2(1385).setFlag(num3, GuildMemberFlags.COMPLETED_ONBOARDING, true);
      obj5.memberOptions = obj6;
      const result3 = tmp2Result19.updateImpersonatedData(guildId, obj5);
      const tmp2Result20 = tmp2(1385);
    }
    const tmp2Result18 = tmp2(5764);
  }
  const tmp12Result = SnowflakeUtilsDefault;
};
obj.onboardExistingMember = function onboardExistingMember(id, set) {
  set = new Set(set);
  if (GuildOnboardingPromptsStore.getEnabled(id)) {
    let defaultChannelIds = GuildOnboardingPromptsStore.getDefaultChannelIds(id);
  } else {
    defaultChannelIds = [];
  }
  const item = defaultChannelIds.forEach((item) => set.add(item));
  if (set.size > 0) {
    const obj2 = OptInChannelsActionCreators;
    const _Array = Array;
    const obj3 = { page: constants2.GUILD_ONBOARDING };
    obj2.bulkOptInChannels(id, Array.from(set), true, obj3);
  }
};
obj.finishOnboarding = function finishOnboarding(guildId) {
  DispatcherDefault.dispatch({ type: "GUILD_ONBOARDING_COMPLETE", guildId });
};
obj.setUserOnboardingStep = function setUserOnboardingStep(guildId, step) {
  DispatcherDefault.dispatch({ type: "GUILD_ONBOARDING_SET_STEP", guildId, step });
};
obj.resetOnboarding = function resetOnboarding(arg0) {
  closure_0 = arg0;
  return (async () => {
    if (c1 === 2) {
      c1 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
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
            const obj5 = { value, done: true };
            return obj5;
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
              const obj6 = { flags: null };
              const obj2 = v0(7360);
              obj6.flags = v0(1385).setFlag(v0, constants.COMPLETED_ONBOARDING, false);
              dependencyMap = 1;
              c1 = 1;
              const obj7 = { value: obj2.updateGuildSelfMember(closure_0, obj6), done: false };
              return obj7;
            }
          }
        } else if (arg0 === 1) {
          c1 = 3;
          throw value;
        } else if (arg0 === 2) {
          c1 = 3;
          const obj = { value, done: true };
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
