// discord_app/modules/guild_onboarding/GuildOnboardingPromptsActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import GuildMemberConstants from "../guild_member/GuildMemberConstants.tsx";
import AppAnalyticsUtils from "../app_analytics/AppAnalyticsUtils.tsx";
import GuildOnboardingPromptsConstants from "GuildOnboardingPromptsConstants.tsx";
import _asyncToGenerator from "../../../_runtime/metro/00005__asyncToGenerator.js";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import GuildMemberStore from "../../stores/GuildMemberStore.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import GuildOnboardingPromptsStore from "GuildOnboardingPromptsStore.tsx";
import Constants from "../../Constants.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, c4, c5, guild, id, member;

let c10;
let c9;
let unpackModuleId;
function fetchOnboardingPrompts(guildId) {
  _require = guildId;
  obj = DispatcherDefault;
  let obj2 = { type: "GUILD_ONBOARDING_PROMPTS_FETCH_START", guildId };
  let dispatchResult = obj.dispatch(obj2);
  const HTTP = require("HTTPUtils").HTTP;
  const obj3 = { url: closure_10.GUILD_ONBOARDING(guildId), rejectWithError: false };
  const value = HTTP.get(obj3);
  return value.then(
    (body) => {
      const tmp = closure_8(body.body);
      guildId = tmp;
      const dispatch = DispatcherDefault.dispatch;
      obj = { type: "GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS", guildId };
      DispatcherDefault;
      const merged = Object.assign(tmp);
      const dispatchResult = dispatch(obj);
      return dispatchResult.then(() => prompts.prompts);
    },
    (arg0) => {
      obj = DispatcherDefault;
      const obj2 = { type: "GUILD_ONBOARDING_PROMPTS_FETCH_FAILURE", guildId };
      obj.dispatch(obj2);
      return arg0;
    },
  );
}
let obj = function _maybeFetchOnboardingPrompts() {
  let constants2;
  obj = _asyncToGenerator(async (arg0) => {
    let closure_2;
    let closure_0 = arg0;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
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
        let c1;
        let tmp2;
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_3 = tmp;
            c1 = undefined;
            tmp2 = undefined;
            id = id.getId();
            const hasFlag = require("FlagUtils").hasFlag;
            const tmp50 = require("FlagUtils");
            member = member.getMember(closure_0, id);
            let flags;
            if (member != null) {
              flags = member.flags;
            }
            c1 = flags;
            if (flags == null) {
              c1 = 0;
            }
            const hasFlagResult = hasFlag(c1, constants2.COMPLETED_ONBOARDING);
            c1 = hasFlagResult;
            guild = guild.getGuild(closure_0);
            if (null != guild) {
              const features = guild.features;
              if (features.has(constants.GUILD_ONBOARDING)) {
                const shouldFetchPromptsResult = GuildOnboardingPromptsStore.shouldFetchPrompts(closure_0);
                const onboardingPrompts = GuildOnboardingPromptsStore.getOnboardingPrompts(closure_0);
                if (!shouldFetchPromptsResult) {
                  if (onboardingPrompts.length > 0) {
                    let resolved;
                    if (onboardingPrompts.every((inOnboarding) => !inOnboarding.inOnboarding)) {
                      _trackOnboardingDirectJoin(closure_0);
                      resolved = Promise.resolve();
                    } else {
                      if (!hasFlagResult) {
                        startOnboarding(closure_0);
                      }
                      resolved = Promise.resolve();
                    }
                    c5 = 3;
                    const obj4 = { value: resolved, done: true };
                    return obj4;
                  }
                }
                c4 = 1;
                c5 = 1;
                const obj5 = { value: fetchOnboardingPrompts(closure_0), done: false };
                return obj5;
              }
            }
            c5 = 3;
            const obj6 = { value: Promise.resolve(), done: true };
            return obj6;
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj7 = { value, done: true };
          return obj7;
        } else {
          tmp2 = value;
          const _Array = Array;
          if (Array.isArray(tmp2)) {
            let resolved1;
            if (tmp2.every((inOnboarding) => !inOnboarding.inOnboarding)) {
              closure_131_17(closure_0);
              resolved1 = Promise.resolve();
            }
            c5 = 3;
            obj = { value: resolved1, done: true };
            return obj;
          }
          const tmp9 = c1;
          if (!tmp9) {
            closure_131_15(closure_0);
          }
          resolved1 = tmp2;
        }
      } catch (tmp38) {
        c5 = 3;
        throw tmp38;
      }
    }
  });
  return obj(...arguments);
};
function startOnboarding(guildId) {
  obj = DispatcherDefault;
  const obj2 = { type: "GUILD_ONBOARDING_START", guildId };
  obj.dispatch(obj2);
}
function _trackOnboardingDirectJoin(guildId) {
  obj = { step, required: true };
  const track = AnalyticsUtilsDefault.track;
  const GUILD_ONBOARDING_STEP_VIEWED = constants.GUILD_ONBOARDING_STEP_VIEWED;
  AnalyticsUtilsDefault;
  const obj2 = AppAnalyticsUtils;
  const merged = Object.assign(obj2.collectGuildAnalyticsMetadata(guildId));
  track(GUILD_ONBOARDING_STEP_VIEWED, obj);
  const obj3 = { step, skipped: false, is_final_step: true, in_onboarding: true };
  const track2 = AnalyticsUtilsDefault.track;
  const GUILD_ONBOARDING_STEP_COMPLETED = constants.GUILD_ONBOARDING_STEP_COMPLETED;
  AnalyticsUtilsDefault;
  const obj4 = AppAnalyticsUtils;
  const merged1 = Object.assign(obj4.collectGuildAnalyticsMetadata(guildId));
  track2(GUILD_ONBOARDING_STEP_COMPLETED, obj3);
}
let closure_8 = GuildOnboardingPromptsConstants.serverApiResponseToClientState;
({ AnalyticEvents: c9, Endpoints: c10, GuildFeatures: unpackModuleId } = Constants);
const GuildMemberFlags = GuildMemberConstants.GuildMemberFlags;
let c16 = -2;
const result = size.fileFinishedImporting("modules/guild_onboarding/GuildOnboardingPromptsActionCreators.tsx");

export const loadOnboardingPrompts = function loadOnboardingPrompts(guildId) {
  obj = { has_new_prompts: false, number_of_prompts: 0 };
  const track = AnalyticsUtilsDefault.track;
  const GUILD_ONBOARDING_LOADED = constants.GUILD_ONBOARDING_LOADED;
  AnalyticsUtilsDefault;
  const obj2 = AppAnalyticsUtils;
  const merged = Object.assign(obj2.collectGuildAnalyticsMetadata(guildId));
  track(GUILD_ONBOARDING_LOADED, obj);
};
export { fetchOnboardingPrompts };
export const maybeFetchOnboardingPrompts = function maybeFetchOnboardingPrompts() {
  return obj(...arguments);
};
export { startOnboarding };
export const CONNECTIONS_STEP = -3;
