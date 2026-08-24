// === Module 6820: getBaseAnimationData ===

// Module 6820 (getBaseAnimationData)
import _mod6823 from "module_6823" /* 6823 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import { NativeModules } from "get ActivityIndicator" /* 17 */;
import closure_5 from "handleConnectionOpen" /* 4201 */;
import closure_6 from "shouldShowOnboarding" /* 6821 */;
import { GUILD_ONBOARDING_MODAL_KEY as closure_7 } from "GUILD_ONBOARDING_MODAL_KEY" /* 6822 */;
import ME from "ME" /* 676 */;

require = arg1;
function getBaseAnimationData() {
  return JSON.parse(JSON.stringify(_mod6823));
}
function _doGuildOnboarding() {
  let self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c5 = 0;
    c6 = 0;
    const iter = (function*(arg0) {
      if (c6 === 2) {
        c6 = 3;
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
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_3 = tmp2;
              closure_4 = tmp5;
              let guildId;
              guildId = guildId.guildId;
              let lib;
              c5 = 1;
              c6 = 1;
              return { value: "ct", done: true };
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              let obj8 = lib(4346);
              obj8.hideActionSheet();
              lib(5265).popAll();
              const obj10 = lib(5265);
              c5 = 2;
              c6 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = guildId(6815).waitForGuild(closure_0);
              return obj2;
            }
          } else {
            if (2 === tmp5) {
              if (arg0 === 1) {
                c6 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c6 = 3;
                const obj3 = { value: null, done: true };
                obj3[0] = arg1;
                return obj3;
              } else {
                lib = arg1;
                const features2 = lib.features;
                let hasItem = features2.has(closure_1_8.GUILD_ONBOARDING);
                if (hasItem) {
                  const features = lib.features;
                  hasItem = features.has(constants.COMMUNITY);
                }
                if (hasItem) {
                  let obj5 = guildId(6824);
                  c5 = 3;
                  c6 = 1;
                  const obj4 = { value: null, done: false };
                  obj4[0] = obj5.maybeFetchOnboardingPrompts(closure_0);
                  return obj4;
                }
              }
            } else if (3 === tmp5) {
              if (arg0 === 1) {
                c6 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c6 = 3;
                obj5 = { value: null, done: true };
                obj5[0] = arg1;
                return obj5;
              } else if (c6.shouldShowOnboarding(guildId)) {
                dependencyMap = closure_12;
                lib = guildId;
                c5 = 4;
                c6 = 1;
                const obj6 = { value: null, done: false };
                obj6[0] = (function fetchLandingAsset(closure_1) {
                  const self = this;
                  const apply = closure_14.apply;
                  if (typeof apply === "unknown") {
                    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                  } else {
                    applyArgumentsResult = apply(self, arguments);
                  }
                  return applyArgumentsResult;
                })(lib);
                return obj6;
              }
            } else if (4 === tmp5) {
              if (arg0 === 1) {
                c6 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c6 = 3;
                const obj7 = { value: null, done: true };
                obj7[0] = arg1;
                return obj7;
              } else {
                dependencyMap[lib] = arg1;
                c5 = 5;
                c6 = 1;
                obj8 = { value: null, done: false };
                obj8[0] = callback(lib.id);
                return obj8;
              }
            } else if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            }
            c6 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp42) {
          c6 = tmp;
          throw tmp42;
        }
      }
    })();
    iter.next();
    return iter;
  });
  closure_13 = tmp;
  let apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _fetchLandingAsset() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c4 = 0;
    c5 = 0;
    c3 = 0;
    return (function*(arg0) {
      if (c5 === 2) {
        c5 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
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
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              dependencyMap = tmp3;
              let callback = tmp7;
              let guildIconSource;
              callback = undefined;
              dependencyMap = undefined;
              obj1 = { id: null, icon: null, canAnimate: false, size: null };
              ({ id: obj10[0], icon: obj10[1] } = guildIconSource);
              obj1[3] = 96 / closure_1_1(closure_1_2[12])();
              guildIconSource = closure_1_1(closure_1_2[11]).getGuildIconSource(obj1);
              c3 = 1;
              const ImageManager2 = c4.ImageManager;
              c4 = 2;
              c5 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = ImageManager2.getAvatarBase64(guildIconSource);
              return obj2;
            }
          } else if (1 === tmp7) {
            c3 = 0;
            c5 = 3;
            const obj3 = { value: null, done: true };
            obj3[0] = callback2();
            return obj3;
          } else if (2 === tmp7) {
            if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 0;
              c5 = 3;
              const obj4 = { value: null, done: true };
              obj4[0] = arg1;
              return obj4;
            } else {
              callback = arg1;
              const ImageManager = c4.ImageManager;
              c4 = 3;
              c5 = 1;
              const obj5 = { value: null, done: false };
              obj5[0] = ImageManager.getDominantColors(guildIconSource);
              return obj5;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj6 = { value: null, done: true };
            obj6[0] = arg1;
            return obj6;
          } else {
            dependencyMap = arg1;
            const _HermesInternal = HermesInternal;
            const tmp12 = callback(6826);
            c3 = 0;
            c5 = 3;
            obj = { value: null, done: true };
            obj[0] = tmp12(callback2(), "data:image/png;base64," + callback, 5);
            return obj;
          }
        } catch (tmp23) {
          if (tmp4 === c3) {
            c5 = tmp2;
            throw tmp23;
          } else {
            c4 = tmp;
          }
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
function openAndWaitForOnboarding(arg0) {
  const _require = arg0;
  const result = _require(6827).waitForOnboardingCompletion(arg0);
  result.then(() => {
    if (null != closure_1_11[closure_0]) {
      tmp4();
    }
    delete tmp[tmp2];
    closure_1_1(closure_1_2[15]).finishOnboarding(closure_0);
  });
  let obj = _require(6827);
  return new Promise((arg0) => {
    if (null == closure_1_11[callback]) {
      tmp[tmp2] = arg0;
    }
    let obj = closure_1_1(closure_1_2[8]);
    obj = {
      guildId: tmp2,
      backShouldLeaveGuild: true,
      onFinish() {

      },
      landingAnimation: closure_1_12[tmp2],
      isFirstOpen: true
    };
    obj.pushLazy(callback(closure_1_2[17])(closure_1_2[16], closure_1_2.paths), obj, closure_1_7).then(() => {
      if (closure_1_5.getGuildId() !== closure_0) {
        closure_1_0(closure_1_2[18]).transitionTo(closure_1_9.CHANNEL(tmp));
        const obj = closure_1_0(closure_1_2[18]);
      }
    });
  });
}
({ GuildFeatures: closure_8, Routes: c9 } = ME);
let closure_11 = {};
let closure_12 = {};
let result = require("set").fileFinishedImporting("modules/guild_onboarding/doGuildOnboarding.native.tsx");

export default function doGuildOnboarding() {
  const self = this;
  const apply = _doGuildOnboarding.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export { openAndWaitForOnboarding };
export const discardOnboardingPromise = function discardOnboardingPromise(id) {
  delete tmp2[tmp];
};
export const isOnboardingActiveForGuild = function isOnboardingActiveForGuild(arg0) {
  return null != table[arg0];
};