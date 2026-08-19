// === Module 17025: handleChannelCreate ===

// Module 17025 (handleChannelCreate)
import initializeDefault from "initialize" /* 5038 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import { MIDJOURNEY_GUILD_ID } from "MIDJOURNEY_GUILD_ID" /* 13320 */;
import { Routes } from "ME" /* 676 */;

const require = fn;
initializeDefault;
class MidjourneyOnboardingManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    applyArgumentsResult.actions = { CHANNEL_CREATE: applyArgumentsResult.handleChannelCreate };
    return applyArgumentsResult;
  }
}
MidjourneyOnboardingManager.prototype["handleChannelCreate"] = function handleChannelCreate(channel) {
  channel = channel.channel;
  return callback(function*() {
    if (dependencyMap === 2) {
      dependencyMap = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp4 === 3) {
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
        dependencyMap = 2;
        if (0 === v0) {
          if (arg0 === 1) {
            dependencyMap = 3;
            throw arg1;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            const id = tmp2;
            if (obj6.isEligibleForMidjourneyRedirect(channel)) {
              v0 = 1;
              dependencyMap = 1;
              obj1 = { value: null, done: false };
              obj1[0] = channel(13319).hasRedirectedToGuild(closure_1_4);
              return obj1;
            } else {
              dependencyMap = 3;
            }
            obj6 = channel(13319);
          }
        } else if (arg0 === 1) {
          dependencyMap = 3;
          throw arg1;
        } else if (arg0 !== 2) {
          v0(7211)(closure_1_5.CHANNEL(null, id.id));
          const tmp9 = v0(7211);
        }
        dependencyMap = 3;
        obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } catch (tmp16) {
        dependencyMap = tmp;
        throw tmp16;
      }
    }
  })();
};
const midjourneyOnboardingManager = new MidjourneyOnboardingManager();
const result = require("obj132").fileFinishedImporting("modules/midjourney_onboarding/MidjourneyOnboardingManager.tsx");

export default midjourneyOnboardingManager;