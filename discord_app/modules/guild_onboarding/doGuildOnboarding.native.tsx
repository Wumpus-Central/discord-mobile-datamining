// discord_app/modules/guild_onboarding/doGuildOnboarding.native.tsx
import AvatarUtilsDefault from "../../utils/AvatarUtils.tsx";
import getDevicePixelRatioDefault from "../../utils/getDevicePixelRatio.native.tsx";
import NativeImageManagerModuleDefault from "../../../discord_common/js/packages/rtn-codegen/js/NativeImageManagerModule.tsx";
import asyncRequireImpl from "../../../_runtime/01987_asyncRequireImpl.js";
import ModalActionCreatorsDefault from "../../actions/ModalActionCreators.tsx";
import _mod6593 from "../../../_runtime/metro/06593__.js";
import GuildOnboardingActionCreatorsDefault from "GuildOnboardingActionCreators.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import SelectedGuildStore from "../../stores/SelectedGuildStore.tsx";
import GuildOnboardingStore from "GuildOnboardingStore.tsx";

require = fn;
function getBaseAnimationData() {
  return JSON.parse(JSON.stringify(_mod6593));
}
let closure_14 = async function _doGuildOnboarding(arg0) {
  let guildId = arg0;
  c5 = 0;
  c6 = 0;
  let iter = (async (arg0) => {
    closure_131_1(closure_131_2[8]).hideActionSheet();
    closure_131_1(closure_131_2[8]);
    closure_131_1(closure_131_2[9]).popAll();
    closure_131_1(closure_131_2[9]);
    await closure_131_0(closure_131_2[10]).waitForGuild(guildId2);
    if (2 === tmp5) {
      if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c6 = 3;
        return { value, done: true };
      } else {
        closure_132_1 = value;
        const features2 = closure_132_1.features;
        let hasItem = features2.has(closure_131_9.GUILD_ONBOARDING);
        if (hasItem) {
          const features = closure_132_1.features;
          hasItem = features.has(closure_131_9.COMMUNITY);
        }
        if (hasItem) {
          c5 = 3;
          c6 = 1;
          return { value: closure_131_0(closure_131_2[11]).maybeFetchOnboardingPrompts(guildId2), done: false };
        }
      }
    } else if (3 === tmp5) {
      if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c6 = 3;
        return { value, done: true };
      } else if (closure_131_7.shouldShowOnboarding(guildId2)) {
        closure_2 = closure_131_13;
        closure_1 = guildId2;
        c5 = 4;
        c6 = 1;
        return {
          value: (function fetchLandingAsset() {
            const self = this;
            const apply = closure_1_15.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          })(closure_132_1),
          done: false,
        };
      }
    } else if (4 === tmp5) {
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
        return { value: closure_131_16(closure_132_1.id), done: false };
      }
    } else if (arg0 === 1) {
      c6 = 3;
      throw value;
    } else if (arg0 === 2) {
      c6 = 3;
      return { value, done: true };
    }
    await "IconComponent";
    closure_3 = tmp2;
    guildId2 = guildId.guildId;
    return "Reflect";
  })();
  iter.next();
  return iter;
};
let closure_15 = async function _fetchLandingAsset(arg0) {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "IconComponent", done: "IconComponent" };
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
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_2 = tmp3;
          closure_1 = tmp7;
          closure_129_0 = undefined;
          closure_129_1 = undefined;
          closure_129_2 = undefined;
          closure_129_3 = undefined;
          closure_129_4 = undefined;
          closure_129_5 = undefined;
          closure_129_6 = undefined;
          const obj5 = { id: null, icon: null, canAnimate: false, size: null };
          ({ id: obj11.id, icon: obj11.icon } = closure_0);
          obj5.size = 96 / getDevicePixelRatioDefault();
          c3 = 1;
          const assetSource = Image.resolveAssetSource(AvatarUtilsDefault.getGuildIconSource(obj5));
          closure_129_0 = assetSource;
          c4 = 2;
          c5 = 1;
          const obj6 = { value: NativeImageManagerModuleDefault.getAvatarBase64(assetSource), done: false };
          return obj6;
        }
      } else if (1 === tmp7) {
        c3 = 0;
        c5 = 3;
        const obj7 = { value: closure_130_11(), done: true };
        return obj7;
      } else if (2 === tmp7) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          c5 = 3;
          const obj8 = { value, done: true };
          return obj8;
        } else {
          closure_129_1 = value;
          c4 = 3;
          c5 = 1;
          const obj9 = { value: closure_130_1(closure_130_2[14]).getDominantColors(closure_129_0), done: false };
          return obj9;
        }
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 0;
        c5 = 3;
        const obj20 = { value, done: true };
        return obj20;
      } else {
        closure_129_2 = value;
        closure_129_3 = closure_130_3(closure_129_2[0], 3);
        closure_129_4 = closure_129_3[0];
        closure_129_5 = closure_129_3[1];
        closure_129_6 = closure_129_3[2];
        const _HermesInternal = HermesInternal;
        const tmp31 = closure_130_1(closure_130_2[15]);
        const items = [closure_129_4, closure_129_5, closure_129_6];
        c3 = 0;
        c5 = 3;
        const obj = { value: tmp31(closure_130_11(), "data:image/png;base64," + closure_129_1, items), done: true };
        return obj;
      }
    } catch (tmp15) {
      if (tmp4 === c3) {
        c5 = tmp2;
        throw tmp15;
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
    const obj2 = {
      guildId,
      backShouldLeaveGuild: true,
      onFinish() {},
      landingAnimation: dependencyMap[guildId],
      isFirstOpen: true,
    };
    ModalActionCreatorsDefault.pushLazy(
      asyncRequireImpl(6616, dependencyMap.paths),
      {
        guildId,
        backShouldLeaveGuild: true,
        onFinish() {},
        landingAnimation: dependencyMap[guildId],
        isFirstOpen: true,
      },
      closure_8,
    ).then(() => {
      if (guildId.getGuildId() !== closure_1_0) {
        closure_0(dependencyMap[20]).transitionTo(closure_2_10.CHANNEL(tmp));
        const obj = closure_0(dependencyMap[20]);
      }
    });
    const pushLazyResult = ModalActionCreatorsDefault.pushLazy(
      asyncRequireImpl(6616, dependencyMap.paths),
      {
        guildId,
        backShouldLeaveGuild: true,
        onFinish() {},
        landingAnimation: dependencyMap[guildId],
        isFirstOpen: true,
      },
      closure_8,
    );
  });
}
const Image = fn(17).Image;
let closure_8 = fn(6592).GUILD_ONBOARDING_MODAL_KEY;
const Constants = fn(1085);
({ GuildFeatures: closure_9, Routes: c10 } = Constants);
let closure_12 = {};
let closure_13 = {};
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_onboarding/doGuildOnboarding.native.tsx");

export default function doGuildOnboarding() {
  const self = this;
  const apply = closure_14.apply;
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
  return null != closure_12[arg0];
};
