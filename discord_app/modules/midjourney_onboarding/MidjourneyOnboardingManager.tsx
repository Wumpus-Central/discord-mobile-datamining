// === Module 17301: handleChannelCreate ===

// Module 17301 (handleChannelCreate)
import initializeDefault from "initialize" /* 5438 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import { MIDJOURNEY_GUILD_ID } from "MIDJOURNEY_GUILD_ID" /* 13513 */;
import { Routes } from "ME" /* 676 */;

const require = arg1;
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
        return { value: "HermesInternal", done: null };
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
            if (obj6.isEligibleForMidjourneyRedirect(closure_1_0)) {
              v0 = 1;
              dependencyMap = 1;
              obj1 = { value: null, done: false };
              obj1[0] = tmp22(13512).hasRedirectedToGuild(closure_1_4);
              return obj1;
            } else {
              dependencyMap = 3;
            }
            obj6 = closure_1_0(13512);
            tmp22 = closure_1_0;
          }
        } else if (arg0 === 1) {
          dependencyMap = 3;
          throw arg1;
        } else if (arg0 !== 2) {
          v0(6043)(closure_1_5.CHANNEL(null, id.id));
          const tmp9 = v0(6043);
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
const result = require("set").fileFinishedImporting("modules/midjourney_onboarding/MidjourneyOnboardingManager.tsx");

export default midjourneyOnboardingManager;