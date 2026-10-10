// === Module 14841: useUploadAvatar ===

// Module 14841 (useUploadAvatar)
import PremiumUpsellUtilsDefault from "PremiumUpsellUtils" /* 9269 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import UserStore from "UserStore" /* 1390 */;

const require = globalThis.__r;

const require = fn;
function isGIF(str) {
  const regExp = new RegExp("^" + closure_1_8, "i");
  return null != str.match(regExp);
}
fn(19).useCallback;
const Constants = fn(1085);
({ AnalyticsPages: metroRequire, UPLOAD_MEDIUM_SIZE: closure_7, Base64GIFPrefix: closure_8, AnalyticsSections: closure_9, UpsellTypes: c10 } = Constants);
const PremiumUpsellTypes = fn(1392).PremiumUpsellTypes;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/hooks/native/useUploadAvatar.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useUploadAvatar(guildId) {
  const cResult = require("c").c(9);
  guildId = guildId.guildId;
  _require = guildId;
  ({ isTryItOut, analyticsLocations } = guildId);
  dependencyMap = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    class A {
      constructor() {
        return closure_1_5.getCurrentUser();
      }
    }
    cResult[0] = items;
    cResult[1] = A;
    tmp5 = items;
  } else {
    [tmp5, tmp6] = cResult;
  }
  let obj = require("c");
  const stateFromStores = require("useStateFromStores").useStateFromStores(tmp5, A);
  if (cResult[2] !== analyticsLocations) {
    const fn = function _() {
      const obj2 = { initialUpsellKey: constants3.ANIMATED_AVATAR, analyticsLocation: { page: constants.USER_SETTINGS, section: constants2.SETTINGS_OVERVIEW }, analyticsProperties: { type: PremiumUpsellTypes.ANIMATED_USER_AVATAR_MODAL }, analyticsLocations };
      const result = PremiumUpsellUtilsDefault.handleShowUpsellAlert(obj2);
    };
    cResult[2] = analyticsLocations;
    class A {
      constructor() {
        return closure_1_5.getCurrentUser();
      }
    }
    cResult[3] = fn;
    let tmp9 = fn;
  } else {
    tmp9 = cResult[3];
  }
  closure_4 = tmp9;
  if (cResult[4] === guildId) {
    if (cResult[5] === tmp4) {
      if (cResult[6] === tmp9) {
        if (cResult[7] === stateFromStores) {
          let tmp10 = cResult[8];
        }
        return tmp10;
      }
    }
  }
  _require = stateFromStores(function*() {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: "+51" };
      }
    } else {
      try {
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            closure_1 = tmp2;
            const guildId = 0;
            closure_128_0 = undefined;
            let base64;
            let originalMd5;
            closure_128_3 = undefined;
            closure_128_4 = undefined;
            analyticsLocations(5056).hideActionSheet();
            const obj13 = analyticsLocations(5056);
            const obj6 = { size };
            c2 = 1;
            c3 = 1;
            const obj8 = { value: analyticsLocations(7768).openImagePicker(obj6), done: false };
            return obj8;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj9 = { value, done: true };
          return obj9;
        } else {
          closure_128_0 = value;
          base64 = closure_128_0.base64;
          originalMd5 = closure_128_0.originalMd5;
          if (null == base64) {
            c3 = 3;
          } else {
            let canUseAnimatedAvatarResult = c2;
            if (!c2) {
              canUseAnimatedAvatarResult = analyticsLocations(4769).canUseAnimatedAvatar(c3);
              const obj = analyticsLocations(4769);
            }
            closure_128_3 = canUseAnimatedAvatarResult;
            if (isGIF(base64)) {
              if (!closure_128_3) {
                closure_1_4();
              }
            }
          }
          const obj10 = { imageUri: base64, description: null, originalMd5: null };
          const obj2 = guildId(14820);
          obj10.description = guildId(8293).generateAvatarDescription();
          obj10.originalMd5 = originalMd5;
          closure_128_4 = obj2.createPendingImage(obj10);
          if (c2) {
            tmp30(8291).setTryItOutAvatar(closure_128_4);
            const tmp30Result = tmp30(8291);
          } else {
            const obj11 = { guildId, avatar: closure_128_4 };
            tmp30(8288).setPendingChanges(obj11);
            const tmp30Result2 = tmp30(8288);
            const result = guildId(8290).announcePendingAvatarChange("set");
            const obj7 = guildId(8290);
          }
          const obj4 = guildId(8293);
        }
      } catch (tmp40) {
        c3 = tmp;
        throw tmp40;
      }
    }
  });
  function t5() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  cResult[4] = guildId;
  cResult[5] = undefined !== isTryItOut && isTryItOut;
  cResult[6] = tmp9;
  cResult[7] = stateFromStores;
  cResult[8] = t5;
  tmp10 = t5;
  const tmpResult = require("useStateFromStores");
}) : (function useUploadAvatar(guildId) {
  guildId = guildId.guildId;
  let flag = guildId.isTryItOut;
  if (flag === undefined) {
    flag = false;
  }
  const analyticsLocations = guildId.analyticsLocations;
  useCallback = undefined;
  const items = [UserStore];
  const stateFromStores = guildId(analyticsLocations[7]).useStateFromStores(items, () => currentUser.getCurrentUser());
  const items1 = [analyticsLocations];
  const tmp2 = useCallback(() => {
    const obj2 = { initialUpsellKey: constants3.ANIMATED_AVATAR, analyticsLocation: { page: constants.USER_SETTINGS, section: constants2.SETTINGS_OVERVIEW }, analyticsProperties: { type: PremiumUpsellTypes.ANIMATED_USER_AVATAR_MODAL }, analyticsLocations };
    const result = PremiumUpsellUtilsDefault.handleShowUpsellAlert(obj2);
  }, items1);
  useCallback = tmp2;
  const items2 = [stateFromStores, guildId, flag, tmp2];
  return useCallback(stateFromStores(function*() {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: "+51" };
      }
    } else {
      try {
        c3 = 2;
        if (0 === dependencyMap) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            const v0 = 0;
            closure_128_0 = undefined;
            let base64;
            let originalMd5;
            closure_128_3 = undefined;
            closure_128_4 = undefined;
            tmp2(5056).hideActionSheet();
            const obj13 = tmp2(5056);
            const obj6 = { size };
            dependencyMap = 1;
            c3 = 1;
            const obj8 = { value: tmp2(7768).openImagePicker(obj6), done: false };
            return obj8;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj9 = { value, done: true };
          return obj9;
        } else {
          closure_128_0 = value;
          base64 = closure_128_0.base64;
          originalMd5 = closure_128_0.originalMd5;
          if (null == base64) {
            c3 = 3;
          } else {
            let canUseAnimatedAvatarResult = closure_129_1;
            if (!closure_129_1) {
              canUseAnimatedAvatarResult = tmp2(4769).canUseAnimatedAvatar(closure_129_3);
              const obj = tmp2(4769);
            }
            closure_128_3 = canUseAnimatedAvatarResult;
            if (isGIF(base64)) {
              if (!closure_128_3) {
                closure_129_4();
              }
            }
          }
          const obj10 = { imageUri: base64, description: null, originalMd5: null };
          const obj2 = v0(14820);
          obj10.description = v0(8293).generateAvatarDescription();
          obj10.originalMd5 = originalMd5;
          closure_128_4 = obj2.createPendingImage(obj10);
          if (closure_129_1) {
            tmp30(8291).setTryItOutAvatar(closure_128_4);
            const tmp30Result = tmp30(8291);
          } else {
            const obj11 = { guildId: closure_129_0, avatar: closure_128_4 };
            tmp30(8288).setPendingChanges(obj11);
            const tmp30Result2 = tmp30(8288);
            const result = v0(8290).announcePendingAvatarChange("set");
            const obj7 = v0(8290);
          }
          const obj4 = v0(8293);
        }
      } catch (tmp40) {
        c3 = tmp;
        throw tmp40;
      }
    }
  }), items2);
});