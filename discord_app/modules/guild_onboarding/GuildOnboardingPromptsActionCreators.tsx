// discord_app/modules/guild_onboarding/GuildOnboardingPromptsActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import AppAnalyticsUtils from "../app_analytics/AppAnalyticsUtils.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import GuildMemberStore from "../../stores/GuildMemberStore.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import GuildOnboardingPromptsStore from "GuildOnboardingPromptsStore.tsx";

require = fn;
function fetchOnboardingPrompts(guildId) {
  _require = guildId;
  let obj = { type: "GUILD_ONBOARDING_PROMPTS_FETCH_START", guildId };
  obj.dispatch(obj);
  const HTTP = require("HTTPUtils").HTTP;
  obj = { url: closure_10.GUILD_ONBOARDING(guildId), rejectWithError: false };
  value = HTTP.get(obj);
  return value.then(
    (body) => {
      const tmp = closure_8(body.body);
      guildId = tmp;
      const obj = { type: "GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS", guildId };
      const merged = Object.assign(tmp);
      return obj.dispatch(obj).then(() => prompts.prompts);
    },
    (arg0) => {
      const obj = { type: "GUILD_ONBOARDING_PROMPTS_FETCH_FAILURE", guildId };
      obj.dispatch(obj);
      return arg0;
    },
  );
}
let closure_14 = async function _maybeFetchOnboardingPrompts(arg0, value) {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp5 === 3) {
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
      c5 = 2;
      let num2 = 0;
      if (0 === c4) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          obj = { value, done: true };
          return obj;
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
          guild = guild.getGuild(tmp48);
          if (null != guild) {
            const features = guild.features;
            if (features.has(constants.GUILD_ONBOARDING)) {
              const onboardingPrompts = GuildOnboardingPromptsStore.getOnboardingPrompts(tmp48);
              if (!shouldFetchPromptsResult) {
                if (onboardingPrompts.length > num2) {
                  if (onboardingPrompts.every((inOnboarding) => !inOnboarding.inOnboarding)) {
                    _trackOnboardingDirectJoin(tmp48);
                    const resolved = Promise.resolve();
                  } else {
                    if (!hasFlagResult) {
                      startOnboarding(tmp48);
                    }
                    const resolved1 = Promise.resolve();
                  }
                  c5 = 3;
                }
              }
              c4 = 1;
              c5 = 1;
              const obj1 = { value: fetchOnboardingPrompts(tmp48), done: false };
              return obj1;
            }
          }
          c5 = 3;
          const obj2 = { value: Promise.resolve(), done: true };
          return obj2;
        }
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c5 = 3;
        obj = { value, done: true };
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
  const obj = { type: "GUILD_ONBOARDING_START", guildId };
  obj.dispatch(obj);
}
function _trackOnboardingDirectJoin(guildId) {
  let obj = {};
  const merged = Object.assign(AppAnalyticsUtils.collectGuildAnalyticsMetadata(guildId));
  obj.step = step;
  obj.required = true;
  obj.track(constants.GUILD_ONBOARDING_STEP_VIEWED, obj);
  obj = {};
  const obj4 = AnalyticsUtilsDefault;
  const merged1 = Object.assign(AppAnalyticsUtils.collectGuildAnalyticsMetadata(guildId));
  obj.step = step;
  obj.skipped = false;
  obj.is_final_step = true;
  obj.in_onboarding = true;
  obj4.track(constants.GUILD_ONBOARDING_STEP_COMPLETED, obj);
}
let closure_8 = fn(7101).serverApiResponseToClientState;
const Constants = fn(1074);
({ AnalyticEvents: closure_9, Endpoints: c10, GuildFeatures: closure_11 } = Constants);
const GuildMemberFlags = fn(4187).GuildMemberFlags;
let c16 = -2;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_onboarding/GuildOnboardingPromptsActionCreators.tsx");

export const loadOnboardingPrompts = function loadOnboardingPrompts(guildId) {
  const obj = {};
  const merged = Object.assign(AppAnalyticsUtils.collectGuildAnalyticsMetadata(guildId));
  obj.has_new_prompts = false;
  obj.number_of_prompts = 0;
  obj.track(constants.GUILD_ONBOARDING_LOADED, obj);
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
