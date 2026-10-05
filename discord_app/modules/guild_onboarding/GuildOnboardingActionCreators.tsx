// discord_app/modules/guild_onboarding/GuildOnboardingActionCreators.tsx
import SnowflakeUtilsDefault from "../../utils/SnowflakeUtils.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import SentryUtilsDefault from "../../utils/SentryUtils.native.tsx";
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import GuildMemberConstants from "../guild_member/GuildMemberConstants.tsx";
import ReadStateConstants from "../read_states/ReadStateConstants.tsx";
import ImpersonateActionCreators from "../impersonate/ImpersonateActionCreators.tsx";
import OptInChannelsActionCreators from "../opt_in_channels/OptInChannelsActionCreators.tsx";
import _asyncToGenerator from "../../../_runtime/metro/00005__asyncToGenerator.js";
import _slicedToArray from "../../../_runtime/metro/00032__slicedToArray.js";
import ImpersonateStore from "../impersonate/ImpersonateStore.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import GuildMemberStore from "../../stores/GuildMemberStore.tsx";
import UserStore from "../../stores/UserStore.tsx";
import GuildOnboardingPromptsStore from "GuildOnboardingPromptsStore.tsx";
import Constants from "../../Constants.tsx";
import module_12_mod from "../../../_runtime/metro/00012__.js";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, c1, c2, error;

let c10;
let closure_12;
let module_12;
let unpackModuleId;
function _updateOnboardingResponses(guildId, arg1) {
  let closure_1;
  let obj5;
  let obj6;
  _require = guildId;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let onboardingResponses;
  let obj3;
  let obj4;
  if (!ImpersonateStore.isFullServerPreview(guildId)) {
    let onboardingPromptsForOnboarding;
    let obj2;
    let catchPromise;
    if (flag) {
      onboardingPromptsForOnboarding = GuildOnboardingPromptsStore.getOnboardingPromptsForOnboarding(guildId);
      obj2 = GuildOnboardingPromptsStore;
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
        id = id.id;
        const timestamp = Date.now();
        obj4[id] = timestamp;
        return timestamp;
      });
    });
    const HTTP = require("HTTPUtils").HTTP;
    if (flag) {
      const request = { url: closure_12.GUILD_ONBOARDING_RESPONSES(guildId), body: obj5, rejectWithError: true };
      const post = HTTP.post;
      obj5 = {
        onboarding_responses: flatResult.map((id) => id.id),
        onboarding_prompts_seen: obj3,
        onboarding_responses_seen: obj4,
      };
      const postResult = post(request);
      const nextPromise = postResult.then((body) => {
        if (null != body.body) {
          const obj2 = {
            type: "GUILD_ONBOARDING_UPDATE_RESPONSES_SUCCESS",
            guildId,
            options: body.body.onboarding_responses,
            prompts_seen: body.body.onboarding_prompts_seen,
            options_seen: body.body.onboarding_responses_seen,
          };
          const obj = DispatcherDefault;
          obj.dispatch(obj2);
        }
      });
      catchPromise = nextPromise.catch((error) => {
        const obj = closure_1(obj3[12]);
        return obj.captureException(error);
      });
    } else {
      const request1 = { url: closure_12.GUILD_ONBOARDING_RESPONSES(guildId), body: obj6, rejectWithError: false };
      const put = HTTP.put;
      obj6 = {
        onboarding_responses: flatResult.map((id) => id.id),
        onboarding_prompts_seen: obj3,
        onboarding_responses_seen: obj4,
      };
      const putResult = put(request1);
      const nextPromise1 = putResult.then((body) => {
        if (null != body.body) {
          const obj2 = {
            type: "GUILD_ONBOARDING_UPDATE_RESPONSES_SUCCESS",
            guildId,
            options: body.body.onboarding_responses,
            prompts_seen: body.body.onboarding_prompts_seen,
            options_seen: body.body.onboarding_responses_seen,
          };
          const obj = DispatcherDefault;
          obj.dispatch(obj2);
        }
      });
      catchPromise = nextPromise1.catch((error) => {
        const captureException = SentryUtilsDefault.captureException;
        const obj = { cause: error };
        SentryUtilsDefault;
        error = new Error("Failed to update onboarding responses for guild " + guildId + ": " + error.statusCode, obj);
        captureException(error);
      });
    }
    return catchPromise;
  }
}
({ AnalyticEvents: c10, AnalyticsPages: unpackModuleId, Endpoints: closure_12 } = Constants);
const GuildMemberFlags = GuildMemberConstants.GuildMemberFlags;
const ReadStateTypes = ReadStateConstants.ReadStateTypes;
let obj = {
  selectOption(guildId, id, id2, selected) {
    const onboardingPrompt = GuildOnboardingPromptsStore.getOnboardingPrompt(id);
    if (null != onboardingPrompt) {
      let withoutResult;
      if (onboardingPrompt.singleSelect) {
        const without = module_12.without;
        module_12;
        const arr2 = module_12;
        withoutResult = without(arr2.map(onboardingPrompt.options, "id"), id2);
      } else {
        withoutResult = [];
      }
      const obj2 = {
        type: "GUILD_ONBOARDING_SELECT_OPTION",
        guildId,
        promptId: id,
        optionId: id2,
        selected,
        removedOptionIds: withoutResult,
      };
      const obj = DispatcherDefault;
      obj.dispatch(obj2);
    }
  },
  updateOnboardingResponses: module_12.debounce(_updateOnboardingResponses, 1000),
  updateRolesLocal(guildId, addedRoleIds, removedRoleIds) {
    let difference;
    let obj2;
    const selfMember = GuildMemberStore.getSelfMember(guildId);
    let roles;
    if (selfMember != null) {
      roles = selfMember.roles;
    }
    if (roles == null) {
      roles = [];
    }
    if (ImpersonateStore.isViewingRoles(guildId)) {
      const updateImpersonatedRoles = ImpersonateActionCreators.updateImpersonatedRoles;
      ImpersonateActionCreators;
      const difference2 = module_12.difference;
      module_12;
      const obj3 = module_12;
      const result = updateImpersonatedRoles(guildId, difference2(obj3.union(roles, addedRoleIds), removedRoleIds));
    } else {
      const tmp2 = addedRoleIds.length > 0 || removedRoleIds.length > 0;
      if (tmp2) {
        const obj = {
          type: "GUILD_MEMBER_UPDATE_LOCAL",
          guildId,
          roles: difference(obj2.union(roles, addedRoleIds), removedRoleIds),
          addedRoleIds,
          removedRoleIds,
        };
        const dispatch = DispatcherDefault.dispatch;
        DispatcherDefault;
        difference = module_12.difference;
        module_12;
        obj2 = module_12;
        dispatch(obj);
      }
    }
  },
  completeOnboarding(guildId, prompts) {
    let arr3;
    let arr4;
    let channel;
    let defaultChannelIds;
    let items1;
    let num2;
    let obj6;
    let tmp2Result20;
    let tmp = null;
    if (prompts.length > 0) {
      tmp = prompts[prompts.length - 1];
    }
    const selectedOptions = GuildOnboardingPromptsStore.getSelectedOptions(guildId);
    const obj2 = items1(6601);
    const selectedRoleIds = obj2.getSelectedRoleIds(selectedOptions);
    const obj3 = items1(6601);
    const selectedChannelIds = obj3.getSelectedChannelIds(selectedOptions);
    if (GuildOnboardingPromptsStore.getEnabled(guildId)) {
      defaultChannelIds = GuildOnboardingPromptsStore.getDefaultChannelIds(guildId);
    } else {
      defaultChannelIds = [];
    }
    const tmp2Result = items1(6601);
    [arr3, arr4] = tmp2Result.getChannelCoverageForOnboarding(guildId, prompts, defaultChannelIds);
    const items = [...defaultChannelIds];
    _slicedToArray(tmp2Result.getChannelCoverageForOnboarding(guildId, prompts, defaultChannelIds), 2);
    const mapped = items.map((item) => channel.getChannel(item));
    const found = mapped.filter(tmp2(1375).isNotNullish);
    const getFlattenedChannels = items1(6604).getFlattenedChannels;
    items1(6604);
    set = new Set(items);
    const length = getFlattenedChannels(guildId, set, found, true).length;
    if (null == tmp) {
      items1 = [];
    } else {
      const options = tmp.options;
      items1 = options.map((id) => id.id);
    }
    const connections = GuildOnboardingPromptsStore.getConnections(guildId);
    const tmp2Result12 = items1(6601);
    const providerConnectionState = tmp2Result12.getProviderConnectionState(connections);
    const tmp2Result13 = items1(6601);
    const applicationConnectionState = tmp2Result13.getApplicationConnectionState(connections);
    const obj4 = {
      step: prompts.length - 1,
      options_selected: num2,
      skipped: items1.length > 0,
      back: false,
      in_onboarding: true,
      is_final_step: true,
      roles_granted: selectedRoleIds.size,
      channels_granted: length,
      guild_onboarding_covered_channel_ids: arr3.map((id) => id.id),
      guild_onboarding_uncovered_channel_ids: arr4.map((id) => id.id),
    };
    const track = AnalyticsUtilsDefault.track;
    const GUILD_ONBOARDING_STEP_COMPLETED = constants.GUILD_ONBOARDING_STEP_COMPLETED;
    AnalyticsUtilsDefault;
    const tmp2Result14 = items1(5070);
    const merged = Object.assign(tmp2Result14.collectGuildAnalyticsMetadata(guildId));
    num2 = 0;
    if (null != tmp) {
      num2 = selectedOptions.filter((id) => items1.includes(id.id)).length;
    }
    ({ connected: obj7.provider_connections_connected, notConnected: obj7.provider_connections_not_connected } =
      providerConnectionState);
    ({ connected: obj7.application_connections_connected, notConnected: obj7.application_connections_not_connected } =
      applicationConnectionState);
    track(GUILD_ONBOARDING_STEP_COMPLETED, obj4);
    const ackGuildFeature = items1(6605).ackGuildFeature;
    const GUILD_ONBOARDING_QUESTION = ReadStateTypes.GUILD_ONBOARDING_QUESTION;
    items1(6605);
    const tmp13Result = SnowflakeUtilsDefault;
    ackGuildFeature(guildId, GUILD_ONBOARDING_QUESTION, tmp13Result.fromTimestamp(Date.now()));
    _updateOnboardingResponses(guildId, true);
    if (ImpersonateStore.isFullServerPreview(guildId)) {
      const tmp2Result16 = items1(5942);
      const result = tmp2Result16.updateImpersonatedChannels(guildId, items, []);
      const tmp2Result17 = items1(5942);
      const result1 = tmp2Result17.updateImpersonatedData(guildId, { optInEnabled: true });
      const _Array = Array;
      const tmp2Result18 = items1(5942);
      const result2 = tmp2Result18.updateImpersonatedRoles(guildId, Array.from(selectedRoleIds));
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
        const obj5 = { memberOptions: obj6 };
        obj6 = { flags: tmp2Result20.setFlag(num3, GuildMemberFlags.COMPLETED_ONBOARDING, true) };
        const updateImpersonatedData = items1(5942).updateImpersonatedData;
        items1(5942);
        tmp2Result20 = items1(1390);
        const result3 = updateImpersonatedData(guildId, obj5);
      }
    }
  },
  onboardExistingMember(id, set) {
    let defaultChannelIds;
    set = new Set(set);
    if (GuildOnboardingPromptsStore.getEnabled(id)) {
      defaultChannelIds = GuildOnboardingPromptsStore.getDefaultChannelIds(id);
    } else {
      defaultChannelIds = [];
    }
    const item = defaultChannelIds.forEach((item) => set.add(item));
    if (set.size > 0) {
      const _Array = Array;
      const obj2 = OptInChannelsActionCreators;
      const obj3 = { page: unpackModuleId.GUILD_ONBOARDING };
      obj2.bulkOptInChannels(id, Array.from(set), true, obj3);
    }
  },
  finishOnboarding(guildId) {
    const obj = DispatcherDefault;
    const obj2 = { type: "GUILD_ONBOARDING_COMPLETE", guildId };
    obj.dispatch(obj2);
  },
  setUserOnboardingStep(guildId, step) {
    const obj = DispatcherDefault;
    const obj2 = { type: "GUILD_ONBOARDING_SET_STEP", guildId, step };
    obj.dispatch(obj2);
  },
  resetOnboarding(arg0) {
    let closure_0 = arg0;
    return (async () => {
      let currentUser;
      let member;
      let obj3;
      if (c1 === 2) {
        c1 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c1 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c1 = 3;
              throw value;
            } else if (arg0 === 2) {
              c1 = 3;
              const obj4 = { value, done: true };
              return obj4;
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
                const obj5 = { flags: obj3.setFlag(v0, constants.COMPLETED_ONBOARDING, false) };
                const updateGuildSelfMember = v0(c2[24]).updateGuildSelfMember;
                const tmp11 = v0(c2[24]);
                obj3 = v0(c2[22]);
                c2 = 1;
                c1 = 1;
                const obj6 = { value: updateGuildSelfMember(closure_0, obj5), done: false };
                return obj6;
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
          return { value: "IconComponent", done: null };
        } catch (tmp13) {
          c1 = 3;
          throw tmp13;
        }
      }
    })();
  },
};
module_12 = module_12_mod;
let result = size.fileFinishedImporting("modules/guild_onboarding/GuildOnboardingActionCreators.tsx");

export default obj;
