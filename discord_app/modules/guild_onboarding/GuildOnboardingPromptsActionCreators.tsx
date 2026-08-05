// discord_app/modules/guild_onboarding/GuildOnboardingPromptsActionCreators.tsx
import serverPromptToClientPrompt from "serverPromptToClientPrompt";
import fetchFingerprint from "fetchFingerprint";
import trackCommunicationDisabled from "trackCommunicationDisabled";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import handleUpdate from "handleUpdate";
import { serverApiResponseToClientState as closure_8 } from "serverPromptToClientPrompt";
import ME from "ME";
import { GuildMemberFlags } from "GuildMemberFlags";
import { sendRequest } from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import { dispatcher } from "../../Dispatcher.tsx";
import { expandEventProperties } from "../../utils/AnalyticsUtils.tsx";
import { collectGuildAnalyticsMetadata } from "../app_analytics/AppAnalyticsUtils.tsx";

let c10;
let c9;
let unpackModuleId;
const require = arg1;
function fetchOnboardingPrompts(guildId) {
  const _require = guildId;
  let obj = dispatcher;
  obj = { type: "GUILD_ONBOARDING_PROMPTS_FETCH_START", guildId };
  obj.dispatch(obj);
  const HTTP = _sendRequest.HTTP;
  obj = { url: closure_10.GUILD_ONBOARDING(guildId), rejectWithError: false };
  const value = HTTP.get(obj);
  return value.then((body) => {
    let c0;
    const tmp = outer1_8(body.body);
    c0 = tmp;
    let obj = outer1_1(outer1_2[10]);
    obj = { type: "GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS", guildId: c0 };
    const merged = Object.assign(tmp);
    return obj.dispatch(obj).then(() => _undefined.prompts);
  }, (arg0) => {
    let obj = outer1_1(outer1_2[10]);
    obj = { type: "GUILD_ONBOARDING_PROMPTS_FETCH_FAILURE", guildId: closure_0 };
    obj.dispatch(obj);
    return arg0;
  });
}
function _maybeFetchOnboardingPrompts() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c4 = 0;
    let c5 = 0;
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
          return { value: "HermesInternal", done: null };
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
              let serverPromptToClientPrompt = tmp2;
              let closure_2 = tmp3;
              num2 = undefined;
              closure_2 = undefined;
              id = id.getId();
              member = member.getMember(callback, id);
              let flags;
              if (member != null) {
                flags = member.flags;
              }
              num2 = flags;
              const hasFlagResult = callback(outer1_2[12]).hasFlag(num2, outer1_12.COMPLETED_ONBOARDING);
              num2 = hasFlagResult;
              const guild = outer1_6.getGuild(tmp49);
              if (null != guild) {
                const features = guild.features;
                if (features.has(outer1_11.GUILD_ONBOARDING)) {
                  const onboardingPrompts = outer1_7.getOnboardingPrompts(tmp49);
                  if (!shouldFetchPromptsResult) {
                    if (onboardingPrompts.length > num2) {
                      if (onboardingPrompts.every((inOnboarding) => !inOnboarding.inOnboarding)) {
                        outer1_17(tmp49);
                        const resolved = Promise.resolve();
                      } else {
                        if (!hasFlagResult) {
                          outer1_15(tmp49);
                        }
                        const resolved1 = Promise.resolve();
                      }
                      member = 3;
                    }
                  }
                  id = 1;
                  member = 1;
                  const obj1 = { value: null, done: false };
                  obj1[0] = outer1_13(tmp49);
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
  const _maybeFetchOnboardingPrompts = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function startOnboarding(guildId) {
  let obj = dispatcher;
  obj = { type: "GUILD_ONBOARDING_START", guildId };
  obj.dispatch(obj);
}
function _trackOnboardingDirectJoin(guildId) {
  let obj = expandEventProperties;
  obj = {};
  const merged = Object.assign(collectGuildAnalyticsMetadata /* collectGuildAnalyticsMetadata */.collectGuildAnalyticsMetadata(guildId));
  obj.step = c16;
  obj.required = true;
  obj.track(constants.GUILD_ONBOARDING_STEP_VIEWED, obj);
  const obj3 = collectGuildAnalyticsMetadata /* collectGuildAnalyticsMetadata */;
  obj = {};
  const obj4 = expandEventProperties;
  const merged1 = Object.assign(collectGuildAnalyticsMetadata /* collectGuildAnalyticsMetadata */.collectGuildAnalyticsMetadata(guildId));
  obj.step = c16;
  obj.skipped = false;
  obj.is_final_step = true;
  obj.in_onboarding = true;
  obj4.track(constants.GUILD_ONBOARDING_STEP_COMPLETED, obj);
}
({ AnalyticEvents: c9, Endpoints: c10, GuildFeatures: unpackModuleId } = ME);
let c16 = -2;
const result = require("trackCommunicationDisabled").fileFinishedImporting("modules/guild_onboarding/GuildOnboardingPromptsActionCreators.tsx");

export const loadOnboardingPrompts = function loadOnboardingPrompts(guildId) {
  let obj = expandEventProperties;
  obj = {};
  const merged = Object.assign(collectGuildAnalyticsMetadata /* collectGuildAnalyticsMetadata */.collectGuildAnalyticsMetadata(guildId));
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