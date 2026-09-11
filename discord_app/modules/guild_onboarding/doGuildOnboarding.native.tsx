// discord_app/modules/guild_onboarding/doGuildOnboarding.native.tsx
import AvatarUtilsDefault from "../../utils/AvatarUtils.tsx";
import getDevicePixelRatioDefault from "../../utils/getDevicePixelRatio.native.tsx";
import asyncRequireImpl from "../../../_runtime/01896_asyncRequireImpl.js";
import ModalActionCreatorsDefault from "../../actions/ModalActionCreators.tsx";
import _mod7171 from "../../../_runtime/metro/07171__.js";
import GuildOnboardingActionCreatorsDefault from "GuildOnboardingActionCreators.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import SelectedGuildStore from "../../stores/SelectedGuildStore.tsx";
import GuildOnboardingStore from "GuildOnboardingStore.tsx";

require = fn;
function getBaseAnimationData() {
  return JSON.parse(JSON.stringify(_mod7171));
}
let closure_13 = async function _doGuildOnboarding(arg0) {
  let guildId = arg0;
  c5 = 0;
  c6 = 0;
  let iter = (async (arg0) => {
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
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
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_3 = tmp2;
            closure_4 = tmp5;
            let guildId2;
            guildId2 = guildId.guildId;
            closure_132_1 = undefined;
            c5 = 1;
            c6 = 1;
            return { value: "PX_16", done: null };
          }
        } else if (1 === tmp5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj1 = { value, done: true };
            return obj1;
          } else {
            let obj8 = closure_131_1(closure_131_2[7]);
            obj8.hideActionSheet();
            closure_131_1(closure_131_2[8]).popAll();
            const obj10 = closure_131_1(closure_131_2[8]);
            c5 = 2;
            c6 = 1;
            const obj2 = { value: closure_131_0(closure_131_2[9]).waitForGuild(guildId2), done: false };
            return obj2;
          }
        } else {
          if (2 === tmp5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_132_1 = value;
              const features2 = closure_132_1.features;
              let hasItem = features2.has(closure_131_8.GUILD_ONBOARDING);
              if (hasItem) {
                const features = closure_132_1.features;
                hasItem = features.has(closure_131_8.COMMUNITY);
              }
              if (hasItem) {
                let obj5 = closure_131_0(closure_131_2[10]);
                c5 = 3;
                c6 = 1;
                const obj4 = { value: obj5.maybeFetchOnboardingPrompts(guildId2), done: false };
                return obj4;
              }
            }
          } else if (3 === tmp5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              obj5 = { value, done: true };
              return obj5;
            } else if (closure_131_6.shouldShowOnboarding(guildId2)) {
              closure_2 = closure_131_12;
              closure_1 = guildId2;
              c5 = 4;
              c6 = 1;
              const obj6 = {
                value: (function fetchLandingAsset() {
                  const self = this;
                  const apply = closure_1_14.apply;
                  if (typeof apply === "unknown") {
                    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                  } else {
                    applyArgumentsResult = apply(self, arguments);
                  }
                  return applyArgumentsResult;
                })(closure_132_1),
                done: false,
              };
              return obj6;
            }
          } else if (4 === tmp5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj7 = { value, done: true };
              return obj7;
            } else {
              closure_2[closure_1] = value;
              c5 = 5;
              c6 = 1;
              obj8 = { value: closure_131_15(closure_132_1.id), done: false };
              return obj8;
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            obj = { value, done: true };
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
};
let closure_14 = async function _fetchLandingAsset(arg0) {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
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
      if (0 === c4) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_2 = tmp3;
          closure_1 = tmp7;
          closure_129_0 = undefined;
          closure_129_1 = undefined;
          closure_129_2 = undefined;
          const obj1 = { id: null, icon: null, canAnimate: false, size: null };
          ({ id: obj10.id, icon: obj10.icon } = closure_0);
          obj1.size = 96 / getDevicePixelRatioDefault();
          const guildIconSource = AvatarUtilsDefault.getGuildIconSource(obj1);
          closure_129_0 = guildIconSource;
          c3 = 1;
          const ImageManager2 = ImageManager.ImageManager;
          c4 = 2;
          c5 = 1;
          const obj2 = { value: ImageManager2.getAvatarBase64(guildIconSource), done: false };
          return obj2;
        }
      } else if (1 === tmp7) {
        c3 = 0;
        c5 = 3;
        const obj3 = { value: closure_130_10(), done: true };
        return obj3;
      } else if (2 === tmp7) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          c5 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_129_1 = value;
          ImageManager = closure_130_4.ImageManager;
          c4 = 3;
          c5 = 1;
          const obj5 = { value: ImageManager.getDominantColors(closure_129_0), done: false };
          return obj5;
        }
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 0;
        c5 = 3;
        const obj6 = { value, done: true };
        return obj6;
      } else {
        closure_129_2 = value;
        const _HermesInternal = HermesInternal;
        const tmp12 = closure_130_1(closure_130_2[13]);
        c3 = 0;
        c5 = 3;
        obj = {
          value: tmp12(closure_130_10(), "data:image/png;base64," + closure_129_1, closure_129_2[0]),
          done: true,
        };
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
};
function openAndWaitForOnboarding(guildId) {
  _require = guildId;
  closure_129_0 = guildId;
  const result = require("doGuildOnboardingHelpers").waitForOnboardingCompletion(guildId);
  result.then(() => {
    if (null != dependencyMap[closure_0]) {
      tmp4();
    }
    delete tmp[tmp2];
    GuildOnboardingActionCreatorsDefault.finishOnboarding(closure_0);
  });
  let obj = require("doGuildOnboardingHelpers");
  return new Promise((arg0) => {
    if (null == dependencyMap[guildId]) {
      tmp[guildId] = arg0;
    }
    let obj = {
      guildId,
      backShouldLeaveGuild: true,
      onFinish() {},
      landingAnimation: closure_12[guildId],
      isFirstOpen: true,
    };
    obj.pushLazy(asyncRequireImpl(7194, dependencyMap.paths), obj, closure_7).then(() => {
      if (guildId.getGuildId() !== closure_1_0) {
        closure_0(dependencyMap[18]).transitionTo(closure_2_9.CHANNEL(tmp));
        const obj = closure_0(dependencyMap[18]);
      }
    });
    const pushLazyResult = obj.pushLazy(asyncRequireImpl(7194, dependencyMap.paths), obj, closure_7);
  });
}
const NativeModules = fn(17).NativeModules;
let closure_7 = fn(7170).GUILD_ONBOARDING_MODAL_KEY;
const Constants = fn(1074);
({ GuildFeatures: closure_8, Routes: closure_9 } = Constants);
let closure_11 = {};
let closure_12 = {};
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_onboarding/doGuildOnboarding.native.tsx");

export default function doGuildOnboarding() {
  const self = this;
  const apply = closure_13.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
export { openAndWaitForOnboarding };
export const discardOnboardingPromise = function discardOnboardingPromise(id) {
  delete tmp2[tmp];
};
export const isOnboardingActiveForGuild = function isOnboardingActiveForGuild(arg0) {
  return null != closure_11[arg0];
};
