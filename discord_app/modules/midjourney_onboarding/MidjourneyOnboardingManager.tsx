// === Module 18015: MidjourneyOnboardingManager ===

// Module 18015 (MidjourneyOnboardingManager)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7228 */;

const require = fn;
const MIDJOURNEY_GUILD_ID = fn(13967).MIDJOURNEY_GUILD_ID;
const Routes = fn(1074).Routes;
class MidjourneyOnboardingManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    applyArgumentsResult.actions = { CHANNEL_CREATE: applyArgumentsResult.handleChannelCreate };
    return applyArgumentsResult;
  }
}
MidjourneyOnboardingManager.prototype["handleChannelCreate"] = function handleChannelCreate(channel) {
  channel = channel.channel;
  return (async () => {
    if (dependencyMap === 2) {
      dependencyMap = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
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
        dependencyMap = 2;
        if (0 === v1) {
          if (arg0 === 1) {
            dependencyMap = 3;
            throw value;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            if (obj6.isEligibleForMidjourneyRedirect(channel)) {
              v1 = 1;
              dependencyMap = 1;
              const obj4 = { value: tmp2(13966).hasRedirectedToGuild(MIDJOURNEY_GUILD_ID), done: false };
              return obj4;
            } else {
              dependencyMap = 3;
            }
            obj6 = tmp2(13966);
          }
        } else if (arg0 === 1) {
          dependencyMap = 3;
          throw value;
        } else if (arg0 !== 2) {
          v1(7357)(Routes.CHANNEL(null, closure_128_0.id));
          const tmp9 = v1(7357);
        }
        dependencyMap = 3;
        const obj = { value, done: true };
        return obj;
      } catch (tmp16) {
        dependencyMap = tmp;
        throw tmp16;
      }
    }
  })();
};
const midjourneyOnboardingManager = new MidjourneyOnboardingManager();
const size = fn(2);
const result = size.fileFinishedImporting("modules/midjourney_onboarding/MidjourneyOnboardingManager.tsx");

export default midjourneyOnboardingManager;