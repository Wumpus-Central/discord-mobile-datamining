// === Module 7206: GuildOnboardingPromptsActionCreators ===

// Module 7206 (GuildOnboardingPromptsActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 4819 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import GuildMemberStore from "GuildMemberStore" /* 2022 */;
import GuildStore from "GuildStore" /* 1980 */;
import GuildOnboardingPromptsStore from "GuildOnboardingPromptsStore" /* 7207 */;

require = fn;
function fetchOnboardingPrompts(guildId) {
  _require = guildId;
  DispatcherDefault.dispatch({ type: "GUILD_ONBOARDING_PROMPTS_FETCH_START", guildId });
  const HTTP = require("HTTPUtils").HTTP;
  let obj2 = { type: "GUILD_ONBOARDING_PROMPTS_FETCH_START", guildId };
  value = HTTP.get({ url: closure_10.GUILD_ONBOARDING(guildId), rejectWithError: false });
  return value.then((body) => {
    const tmp = closure_8(body.body);
    guildId = tmp;
    const merged = Object.assign(tmp);
    const obj2 = { type: "GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS", guildId };
    return DispatcherDefault.dispatch({ type: "GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS", guildId }).then(() => prompts.prompts);
  }, (arg0) => {
    DispatcherDefault.dispatch({ type: "GUILD_ONBOARDING_PROMPTS_FETCH_FAILURE", guildId });
    return arg0;
  });
}
let closure_14 = async function _maybeFetchOnboardingPrompts(arg0) {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp5 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c5 = 2;
      let num2 = 0;
      if (0 === c4) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_3 = tmp2;
          closure_2 = tmp3;
          closure_130_0 = closure_0;
          closure_130_1 = undefined;
          closure_130_2 = undefined;
          id = id.getId();
          member = member.getMember(closure_0, id);
          let flags;
          if (member != null) {
            flags = member.flags;
          }
          num2 = flags;
          const hasFlagResult = require("FlagUtils").hasFlag(num2, constants2.COMPLETED_ONBOARDING);
          closure_130_1 = hasFlagResult;
          guild = guild.getGuild(closure_0);
          if (null != guild) {
            const features = guild.features;
            if (features.has(constants.GUILD_ONBOARDING)) {
              const onboardingPrompts = GuildOnboardingPromptsStore.getOnboardingPrompts(closure_0);
              if (!shouldFetchPromptsResult) {
                if (onboardingPrompts.length > num2) {
                  if (onboardingPrompts.every((inOnboarding) => !inOnboarding.inOnboarding)) {
                    _trackOnboardingDirectJoin(closure_0);
                    const resolved = Promise.resolve();
                  } else {
                    if (!hasFlagResult) {
                      startOnboarding(closure_0);
                    }
                    const resolved1 = Promise.resolve();
                  }
                  c5 = 3;
                }
              }
              c4 = 1;
              c5 = 1;
              const obj4 = { value: fetchOnboardingPrompts(closure_0), done: false };
              return obj4;
            }
          }
          c5 = 3;
          const obj5 = { value: Promise.resolve(), done: true };
          return obj5;
        }
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c5 = 3;
        const obj = { value, done: true };
        return obj;
      } else {
        closure_130_2 = value;
        let resolve = globalThis;
        const _Array = Array;
        if (!Array.isArray(closure_130_2)) {
          if (!closure_130_1) {
            closure_131_15(closure_130_0);
          }
          c5 = 3;
        }
        closure_131_17(closure_130_0);
        resolve = resolve.Promise.resolve;
        resolve();
        const _Promise = resolve.Promise;
      }
    } catch (tmp41) {
      c5 = tmp;
      throw tmp41;
    }
  }
};
function startOnboarding(guildId) {
  DispatcherDefault.dispatch({ type: "GUILD_ONBOARDING_START", guildId });
}
function _trackOnboardingDirectJoin(guildId) {
  const obj2 = {};
  const obj = AnalyticsUtilsDefault;
  const merged = Object.assign(AppAnalyticsUtils.collectGuildAnalyticsMetadata(guildId));
  obj2.step = step;
  obj2.required = true;
  obj.track(constants.GUILD_ONBOARDING_STEP_VIEWED, obj2);
  const obj5 = {};
  const obj4 = AnalyticsUtilsDefault;
  const merged1 = Object.assign(AppAnalyticsUtils.collectGuildAnalyticsMetadata(guildId));
  obj5.step = step;
  obj5.skipped = false;
  obj5.is_final_step = true;
  obj5.in_onboarding = true;
  obj4.track(constants.GUILD_ONBOARDING_STEP_COMPLETED, obj5);
}
let closure_8 = fn(7208).serverApiResponseToClientState;
const Constants = fn(1074);
({ AnalyticEvents: closure_9, Endpoints: c10, GuildFeatures: closure_11 } = Constants);
const GuildMemberFlags = fn(4265).GuildMemberFlags;
let c16 = -2;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_onboarding/GuildOnboardingPromptsActionCreators.tsx");

export const loadOnboardingPrompts = function loadOnboardingPrompts(guildId) {
  const obj2 = {};
  const obj = AnalyticsUtilsDefault;
  const merged = Object.assign(AppAnalyticsUtils.collectGuildAnalyticsMetadata(guildId));
  obj2.has_new_prompts = false;
  obj2.number_of_prompts = 0;
  obj.track(constants.GUILD_ONBOARDING_LOADED, obj2);
};
export { fetchOnboardingPrompts };
export const maybeFetchOnboardingPrompts = function maybeFetchOnboardingPrompts() {
  const self = this;
  const apply = closure_14.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export { startOnboarding };
export const CONNECTIONS_STEP = -3;