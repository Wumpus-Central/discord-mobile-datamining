// discord_app/modules/guild_onboarding/GuildOnboardingPromptsActionCreators.tsx
import expandEventPropertiesDefault from "../../utils/AnalyticsUtils.tsx";
import dispatcherDefault from "../../Dispatcher.tsx";
import collectGuildAnalyticsMetadata from "../app_analytics/AppAnalyticsUtils.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import fetchFingerprint from "../../stores/AuthenticationStore.tsx";
import trackCommunicationDisabled from "../../stores/GuildMemberStore.tsx";
import createGuildRecordFromRust from "../../stores/GuildStore.tsx";
import handleUpdate from "GuildOnboardingPromptsStore.tsx";
import { serverApiResponseToClientState as closure_8 } from "GuildOnboardingPromptsConstants.tsx";
import ME from "../../Constants.tsx";
import { GuildMemberFlags } from "../guild_member/GuildMemberConstants.tsx";

require = fn;
function fetchOnboardingPrompts(guildId) {
  const _require = guildId;
  let obj = { type: "GUILD_ONBOARDING_PROMPTS_FETCH_START", guildId };
  obj.dispatch(obj);
  const HTTP = require("../../../discord_common/js/packages/http-utils/HTTPUtils.tsx").HTTP;
  obj = { url: closure_10.GUILD_ONBOARDING(guildId), rejectWithError: false };
  const value = HTTP.get(obj);
  return value.then((result) => {
    const tmp = closure_1_8(result.body);
    closure_0 = tmp;
    const obj = { type: "GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS", guildId: closure_0 };
    const merged = Object.assign(tmp);
    return obj.dispatch(obj).then((result) => prompts.prompts);
  }, (arg0) => {
    const obj = { type: "GUILD_ONBOARDING_PROMPTS_FETCH_FAILURE", guildId: closure_0 };
    obj.dispatch(obj);
    return arg0;
  });
}
function _maybeFetchOnboardingPrompts() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c4 = 0;
    c5 = 0;
    return (function*(arg0) {
      if (member === 2) {
        member = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp5 === 3) {
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
          member = 2;
          let num2 = 0;
          if (0 === id) {
            if (arg0 === 1) {
              member = 3;
              throw arg1;
            } else if (arg0 === 2) {
              member = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_3 = tmp2;
              closure_2 = tmp3;
              num2 = undefined;
              closure_2 = undefined;
              id = id.getId();
              member = member.getMember(callback, id);
              let flags;
              if (member != null) {
                flags = member.flags;
              }
              num2 = flags;
              const hasFlagResult = callback(closure_1_2[12]).hasFlag(num2, closure_1_12.COMPLETED_ONBOARDING);
              num2 = hasFlagResult;
              const guild = closure_1_6.getGuild(callback);
              if (null != guild) {
                const features = guild.features;
                if (features.has(closure_1_11.GUILD_ONBOARDING)) {
                  const onboardingPrompts = closure_1_7.getOnboardingPrompts(callback);
                  if (!shouldFetchPromptsResult) {
                    if (onboardingPrompts.length > num2) {
                      if (onboardingPrompts.every((item, index) => !item.inOnboarding)) {
                        closure_1_17(callback);
                        const resolved = Promise.resolve();
                      } else {
                        if (!hasFlagResult) {
                          closure_1_15(callback);
                        }
                        const resolved1 = Promise.resolve();
                      }
                      member = 3;
                    }
                  }
                  id = 1;
                  member = 1;
                  obj1 = { value: null, done: false };
                  obj1[0] = closure_1_13(callback);
                  return obj1;
                }
              }
              member = 3;
              const obj2 = { value: null, done: true };
              obj2[0] = Promise.resolve();
              return obj2;
            }
          } else if (arg0 === 1) {
            member = 3;
            throw arg1;
          } else if (arg0 === 2) {
            member = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            closure_2 = arg1;
            let resolve = globalThis;
            const _Array = Array;
            if (!Array.isArray(closure_2)) {
              if (!num2) {
                callback2(callback);
              }
              member = 3;
            }
            callback3(callback);
            resolve = resolve.Promise.resolve;
            resolve();
            const _Promise = resolve.Promise;
          }
        } catch (tmp41) {
          member = tmp;
          throw tmp41;
        }
      }
    })();
  });
  closure_14 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function startOnboarding(guildId) {
  const obj = { type: "GUILD_ONBOARDING_START", guildId };
  obj.dispatch(obj);
}
function _trackOnboardingDirectJoin(guildId) {
  let obj = {};
  const merged = Object.assign(collectGuildAnalyticsMetadata.collectGuildAnalyticsMetadata(guildId));
  obj.step = c16;
  obj.required = true;
  obj.track(constants.GUILD_ONBOARDING_STEP_VIEWED, obj);
  obj = {};
  const obj4 = expandEventPropertiesDefault;
  const merged1 = Object.assign(collectGuildAnalyticsMetadata.collectGuildAnalyticsMetadata(guildId));
  obj.step = c16;
  obj.skipped = false;
  obj.is_final_step = true;
  obj.in_onboarding = true;
  obj4.track(constants.GUILD_ONBOARDING_STEP_COMPLETED, obj);
}
({ AnalyticEvents: c9, Endpoints: c10, GuildFeatures: unpackModuleId } = ME);
let c16 = -2;
const result = require("obj132").fileFinishedImporting("modules/guild_onboarding/GuildOnboardingPromptsActionCreators.tsx");

export const loadOnboardingPrompts = function loadOnboardingPrompts(guildId) {
  const obj = {};
  const merged = Object.assign(collectGuildAnalyticsMetadata.collectGuildAnalyticsMetadata(guildId));
  obj.has_new_prompts = false;
  obj.number_of_prompts = 0;
  obj.track(constants.GUILD_ONBOARDING_LOADED, obj);
};
export { fetchOnboardingPrompts };
export const maybeFetchOnboardingPrompts = function maybeFetchOnboardingPrompts(closure_0) {
  const self = this;
  const apply = _maybeFetchOnboardingPrompts.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export { startOnboarding };
export const CONNECTIONS_STEP = -3;