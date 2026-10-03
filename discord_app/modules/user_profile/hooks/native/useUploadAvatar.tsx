// === Module 14432: useUploadAvatar ===

// Module 14432 (useUploadAvatar)
import PremiumUpsellUtilsDefault from "PremiumUpsellUtils" /* 8818 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import UserStore from "UserStore" /* 1377 */;

const require = globalThis.__r;

const require = fn;
function isGIF(str) {
  const regExp = new RegExp("^" + closure_1_8, "i");
  return null != str.match(regExp);
}
fn(19).useCallback;
const Constants = fn(1085);
({ AnalyticsPages: metroRequire, UPLOAD_MEDIUM_SIZE: closure_7, Base64GIFPrefix: closure_8, AnalyticsSections: closure_9, UpsellTypes: c10 } = Constants);
const PremiumUpsellTypes = fn(1379).PremiumUpsellTypes;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/hooks/native/useUploadAvatar.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
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
    class E {
      constructor() {
        obj = closure_1(closure_2[8]);
        obj1 = { initialUpsellKey: UpsellTypes.ANIMATED_AVATAR, analyticsLocation: null, analyticsProperties: null, analyticsLocations };
        obj5 = { page: AnalyticsPages.USER_SETTINGS, section: AnalyticsSections.SETTINGS_OVERVIEW };
        obj1.analyticsLocation = obj5;
        obj6 = { type: PremiumUpsellTypes.ANIMATED_USER_AVATAR_MODAL };
        obj1.analyticsProperties = obj6;
        result = obj.handleShowUpsellAlert(obj1);
        return;
      }
    }
    cResult[2] = analyticsLocations;
    class A {
      constructor() {
        return closure_1_5.getCurrentUser();
      }
    }
    cResult[3] = E;
  } else {
    class E {
      constructor() {
        obj = closure_1(closure_2[8]);
        obj1 = { initialUpsellKey: UpsellTypes.ANIMATED_AVATAR, analyticsLocation: null, analyticsProperties: null, analyticsLocations };
        obj5 = { page: AnalyticsPages.USER_SETTINGS, section: AnalyticsSections.SETTINGS_OVERVIEW };
        obj1.analyticsLocation = obj5;
        obj6 = { type: PremiumUpsellTypes.ANIMATED_USER_AVATAR_MODAL };
        obj1.analyticsProperties = obj6;
        result = obj.handleShowUpsellAlert(obj1);
        return;
      }
    }
  }
  if (cResult[4] === guildId) {
    class E {
      constructor() {
        obj = closure_1(closure_2[8]);
        obj1 = { initialUpsellKey: UpsellTypes.ANIMATED_AVATAR, analyticsLocation: null, analyticsProperties: null, analyticsLocations };
        obj5 = { page: AnalyticsPages.USER_SETTINGS, section: AnalyticsSections.SETTINGS_OVERVIEW };
        obj1.analyticsLocation = obj5;
        obj6 = { type: PremiumUpsellTypes.ANIMATED_USER_AVATAR_MODAL };
        obj1.analyticsProperties = obj6;
        result = obj.handleShowUpsellAlert(obj1);
        return;
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
        return { value: "IconComponent", done: "IconComponent" };
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
            analyticsLocations(4854).hideActionSheet();
            const obj13 = analyticsLocations(4854);
            const obj6 = { size };
            c2 = 1;
            c3 = 1;
            const obj8 = { value: analyticsLocations(7274).openImagePicker(obj6), done: false };
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
              canUseAnimatedAvatarResult = analyticsLocations(4528).canUseAnimatedAvatar(c3);
              const obj = analyticsLocations(4528);
            }
            closure_128_3 = canUseAnimatedAvatarResult;
            if (isGIF(base64)) {
              if (!closure_128_3) {
                E();
              }
            }
          }
          const obj10 = { imageUri: base64, description: null, originalMd5: null };
          const obj2 = guildId(14415);
          obj10.description = guildId(7840).generateAvatarDescription();
          obj10.originalMd5 = originalMd5;
          closure_128_4 = obj2.createPendingImage(obj10);
          if (c2) {
            tmp30(7838).setTryItOutAvatar(closure_128_4);
            const tmp30Result = tmp30(7838);
          } else {
            const obj11 = { guildId, avatar: closure_128_4 };
            tmp30(7835).setPendingChanges(obj11);
            const tmp30Result2 = tmp30(7835);
            const result = guildId(7837).announcePendingAvatarChange("set");
            const obj7 = guildId(7837);
          }
          const obj4 = guildId(7840);
        }
      } catch (tmp40) {
        c3 = tmp;
        throw tmp40;
      }
    }
  });
  const fn = function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  cResult[4] = guildId;
  cResult[5] = undefined !== isTryItOut && isTryItOut;
  cResult[6] = E;
  cResult[7] = stateFromStores;
  cResult[8] = fn;
  const tmpResult = require("useStateFromStores");
}) : ((guildId) => {
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
        return { value: "IconComponent", done: "IconComponent" };
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
            tmp2(4854).hideActionSheet();
            const obj13 = tmp2(4854);
            const obj6 = { size };
            dependencyMap = 1;
            c3 = 1;
            const obj8 = { value: tmp2(7274).openImagePicker(obj6), done: false };
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
              canUseAnimatedAvatarResult = tmp2(4528).canUseAnimatedAvatar(closure_129_3);
              const obj = tmp2(4528);
            }
            closure_128_3 = canUseAnimatedAvatarResult;
            if (isGIF(base64)) {
              if (!closure_128_3) {
                closure_129_4();
              }
            }
          }
          const obj10 = { imageUri: base64, description: null, originalMd5: null };
          const obj2 = v0(14415);
          obj10.description = v0(7840).generateAvatarDescription();
          obj10.originalMd5 = originalMd5;
          closure_128_4 = obj2.createPendingImage(obj10);
          if (closure_129_1) {
            tmp30(7838).setTryItOutAvatar(closure_128_4);
            const tmp30Result = tmp30(7838);
          } else {
            const obj11 = { guildId: closure_129_0, avatar: closure_128_4 };
            tmp30(7835).setPendingChanges(obj11);
            const tmp30Result2 = tmp30(7835);
            const result = v0(7837).announcePendingAvatarChange("set");
            const obj7 = v0(7837);
          }
          const obj4 = v0(7840);
        }
      } catch (tmp40) {
        c3 = tmp;
        throw tmp40;
      }
    }
  }), items2);
});