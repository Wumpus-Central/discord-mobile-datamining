// === Module 6590: doGuildOnboarding ===

// Module 6590 (doGuildOnboarding)
import react_native from "react-native" /* 17 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1402 */;
import react_nativeDefault from "react-native" /* 1885 */;
import react_nativeDefault2 from "react-native" /* 1886 */;
import asyncRequire from "asyncRequire" /* 1987 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5093 */;
import GuildOnboardingConstants from "GuildOnboardingConstants" /* 6592 */;
import _mod6593 from "module_6593" /* 6593 */;
import GuildOnboardingActionCreatorsDefault from "GuildOnboardingActionCreators" /* 6600 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4699 */;
import GuildOnboardingStore from "GuildOnboardingStore" /* 6591 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c4;

let c10;
let c9;
function getBaseAnimationData() {
  return JSON.parse(JSON.stringify(_mod6593));
}
let obj = function _doGuildOnboarding() {
  obj = _asyncToGenerator(async (arg0) => {
    let guildId = arg0;
    let c5 = 0;
    let c6 = 0;
    const iter = (async (arg0) => {
      let obj11;
      let obj6;
      function fetchLandingAsset() {
        return closure_1_15(...arguments);
      }
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
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
              return { value, done: true };
            } else {
              closure_3 = tmp;
              closure_4 = tmp4;
              guildId = undefined;
              guildId = guildId.guildId;
              closure_1 = undefined;
              c5 = 1;
              c6 = 1;
              return { value: "Set", done: true };
            }
          } else if (1 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              return { value, done: true };
            } else {
              const obj9 = closure_131_1(closure_131_2[8]);
              obj9.hideActionSheet();
              const obj10 = closure_131_1(closure_131_2[9]);
              obj10.popAll();
              c5 = 2;
              c6 = 1;
              const obj5 = { value: obj11.waitForGuild(guildId), done: false };
              obj11 = closure_131_0(closure_131_2[10]);
              return obj5;
            }
          } else {
            if (2 === c5) {
              if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 === 2) {
                c6 = 3;
                return { value, done: true };
              } else {
                closure_1 = value;
                const features2 = closure_1.features;
                let hasItem = features2.has(closure_131_9.GUILD_ONBOARDING);
                if (hasItem) {
                  const features = closure_1.features;
                  hasItem = features.has(closure_131_9.COMMUNITY);
                }
                if (hasItem) {
                  c5 = 3;
                  c6 = 1;
                  const obj8 = { value: obj6.maybeFetchOnboardingPrompts(guildId), done: false };
                  obj6 = closure_131_0(closure_131_2[11]);
                  return obj8;
                }
              }
            } else if (3 === c5) {
              if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 === 2) {
                c6 = 3;
                return { value, done: true };
              } else if (closure_131_7.shouldShowOnboarding(guildId)) {
                closure_2 = closure_131_13;
                closure_1 = guildId;
                c5 = 4;
                c6 = 1;
                const obj13 = { value: fetchLandingAsset(closure_1), done: false };
                return obj13;
              }
            } else if (4 === c5) {
              if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 === 2) {
                c6 = 3;
                return { value, done: true };
              } else {
                closure_2[closure_1] = value;
                c5 = 5;
                c6 = 1;
                const obj15 = { value: closure_131_16(closure_1.id), done: false };
                return obj15;
              }
            } else if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              return { value, done: true };
            }
            c6 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp41) {
          c6 = 3;
          throw tmp41;
        }
      }
    })();
    iter.next();
    return iter;
  });
  return obj(...arguments);
};
obj = function _fetchLandingAsset() {
  obj = _asyncToGenerator(async (arg0) => {
    let obj11;
    let obj3;
    let tmp29;
    let closure_0 = arg0;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c3;
      try {
        let closure_1;
        let closure_2;
        let closure_3;
        let closure_4;
        let closure_5;
        let closure_6;
        let assetSource;
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_1 = undefined;
            closure_2 = undefined;
            closure_3 = undefined;
            closure_4 = undefined;
            closure_5 = undefined;
            closure_6 = undefined;
            const obj5 = { id: null, icon: null, canAnimate: false, size: 96 / react_nativeDefault() };
            ({ id: obj10.id, icon: obj10.icon } = closure_0);
            const getGuildIconSource = AvatarUtilsDefault.getGuildIconSource;
            c3 = 1;
            assetSource = Image.resolveAssetSource(getGuildIconSource(obj5));
            c4 = 2;
            c5 = 1;
            const obj6 = { value: obj11.getAvatarBase64(assetSource), done: false };
            obj11 = react_nativeDefault2;
            return obj6;
          }
        } else if (1 === c4) {
          c3 = 0;
          c5 = 3;
          const obj7 = { value: closure_130_11(), done: true };
          return obj7;
        } else if (2 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj8 = { value, done: true };
            return obj8;
          } else {
            closure_1 = value;
            c4 = 3;
            c5 = 1;
            const obj9 = { value: obj3.getDominantColors(assetSource), done: false };
            obj3 = closure_130_1(closure_130_2[14]);
            return obj9;
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          c5 = 3;
          const obj19 = { value, done: true };
          return obj19;
        } else {
          closure_2 = value;
          closure_3 = closure_130_3(closure_2[0], 3);
          closure_4 = closure_3[0];
          closure_5 = closure_3[1];
          closure_6 = closure_3[2];
          const _HermesInternal = HermesInternal;
          const tmp27 = closure_130_1(closure_130_2[15]);
          const items = [closure_4, closure_5, closure_6];
          c3 = 0;
          c5 = 3;
          obj = { value: tmp27(tmp29, "data:image/png;base64," + closure_1, items), done: true };
          tmp29 = closure_130_11();
          return obj;
        }
      } catch (tmp12) {
        if (0 === c3) {
          c5 = 3;
          throw tmp12;
        } else {
          c4 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
function openAndWaitForOnboarding(guildId) {
  _require = guildId;
  obj = require("doGuildOnboardingHelpers");
  const result = obj.waitForOnboardingCompletion(guildId);
  result.then(() => {
    if (null != closure_2_12[closure_0]) {
      closure_2_12[closure_0]();
    }
    delete closure_2_12[closure_0];
    obj = GuildOnboardingActionCreatorsDefault;
    obj.finishOnboarding(closure_0);
  });
  const promise = new Promise((arg0) => {
    if (null == closure_12[guildId]) {
      tmp[guildId] = arg0;
    }
    obj = ModalActionCreatorsDefault;
    const obj2 = {
      guildId,
      backShouldLeaveGuild: true,
      onFinish() {

      },
      landingAnimation: closure_13[guildId],
      isFirstOpen: true
    };
    const pushLazyResult = obj.pushLazy(asyncRequire(6616, dependencyMap.paths), obj2, closure_8);
    pushLazyResult.then(() => {
      if (guildId.getGuildId() !== closure_1_0) {
        obj = closure_0(dependencyMap[20]);
        obj.transitionTo(closure_2_10.CHANNEL(tmp));
      }
    });
  });
  return promise;
}
const Image = react_native.Image;
let closure_8 = GuildOnboardingConstants.GUILD_ONBOARDING_MODAL_KEY;
({ GuildFeatures: c9, Routes: c10 } = Constants);
let closure_12 = {};
let closure_13 = {};
let result = size.fileFinishedImporting("modules/guild_onboarding/doGuildOnboarding.native.tsx");

export default function doGuildOnboarding() {
  return obj(...arguments);
};
export { openAndWaitForOnboarding };
export const discardOnboardingPromise = function discardOnboardingPromise(id) {
  delete closure_12[id];
};
export const isOnboardingActiveForGuild = function isOnboardingActiveForGuild(arg0) {
  return null != closure_12[arg0];
};