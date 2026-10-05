// === Module 14436: useUploadAvatar ===

// Module 14436 (useUploadAvatar)
import react from "react" /* 19 */;
import PremiumConstants from "PremiumConstants" /* 1379 */;
import PremiumUpsellUtilsDefault from "PremiumUpsellUtils" /* 8818 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import UserStore from "UserStore" /* 1377 */;
import Constants from "Constants" /* 1085 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c3, dependencyMap, guildId;

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
let metroRequire;
function isGIF(arg0) {
  const match = arg0.match;
  const regExp = new RegExp("^" + metroImportAll, "i");
  return null != match(regExp);
}
let useCallback = react.useCallback;
({ AnalyticsPages: metroRequire, UPLOAD_MEDIUM_SIZE: metroImportDefault, Base64GIFPrefix: metroImportAll, AnalyticsSections: c9, UpsellTypes: c10 } = Constants);
const PremiumUpsellTypes = PremiumConstants.PremiumUpsellTypes;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  let analyticsLocations;
  let closure_2;
  let currentUser;
  let isTryItOut;
  let tmp5;
  let tmp6;
  const tmp = guildId;
  let obj = guildId(576);
  const cResult = obj.c(9);
  guildId = guildId.guildId;
  ({ isTryItOut, analyticsLocations } = guildId);
  dependencyMap = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    class A {
      constructor() {
        return currentUser.getCurrentUser();
      }
    }
    cResult[0] = items;
    cResult[1] = A;
    tmp5 = items;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = tmp(573);
  const stateFromStores = tmpResult.useStateFromStores(tmp5, A);
  if (cResult[2] !== analyticsLocations) {
    class E {
      constructor() {
        let obj3;
        let obj4;
        const obj2 = { initialUpsellKey: constants2.ANIMATED_AVATAR, analyticsLocation: obj3, analyticsProperties: obj4, analyticsLocations };
        obj3 = { page: metroRequire.USER_SETTINGS, section: constants.SETTINGS_OVERVIEW };
        obj4 = { type: PremiumUpsellTypes.ANIMATED_USER_AVATAR_MODAL };
        const obj = PremiumUpsellUtilsDefault;
        const result = obj.handleShowUpsellAlert(obj2);
      }
    }
    cResult[2] = analyticsLocations;
    class A {
      constructor() {
        return currentUser.getCurrentUser();
      }
    }
    cResult[3] = E;
  } else {
    class E {
      constructor() {
        let obj3;
        let obj4;
        const obj2 = { initialUpsellKey: constants2.ANIMATED_AVATAR, analyticsLocation: obj3, analyticsProperties: obj4, analyticsLocations };
        obj3 = { page: metroRequire.USER_SETTINGS, section: constants.SETTINGS_OVERVIEW };
        obj4 = { type: PremiumUpsellTypes.ANIMATED_USER_AVATAR_MODAL };
        const obj = PremiumUpsellUtilsDefault;
        const result = obj.handleShowUpsellAlert(obj2);
      }
    }
  }
  E = tmp9;
  if (cResult[4] === guildId) {
    class E {
      constructor() {
        let obj3;
        let obj4;
        const obj2 = { initialUpsellKey: constants2.ANIMATED_AVATAR, analyticsLocation: obj3, analyticsProperties: obj4, analyticsLocations };
        obj3 = { page: metroRequire.USER_SETTINGS, section: constants.SETTINGS_OVERVIEW };
        obj4 = { type: PremiumUpsellTypes.ANIMATED_USER_AVATAR_MODAL };
        const obj = PremiumUpsellUtilsDefault;
        const result = obj.handleShowUpsellAlert(obj2);
      }
    }
  }
  let closure_0 = stateFromStores(function*() {
    let obj13;
    let obj3;
    if (c3 === 2) {
      c3 = 3;
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
      try {
        let base64;
        let originalMd5;
        let avatar;
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_1 = tmp;
            guildId = undefined;
            base64 = undefined;
            originalMd5 = undefined;
            avatar = undefined;
            const obj12 = analyticsLocations(closure_2_2[9]);
            obj12.hideActionSheet();
            const obj5 = { size };
            c2 = 1;
            c3 = 1;
            const obj7 = { value: obj13.openImagePicker(obj5), done: false };
            obj13 = analyticsLocations(closure_2_2[10]);
            return obj7;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj8 = { value, done: true };
          return obj8;
        } else {
          guildId = value;
          base64 = guildId.base64;
          originalMd5 = guildId.originalMd5;
          if (null != base64) {
            let canUseAnimatedAvatarResult = c2;
            if (!canUseAnimatedAvatarResult) {
              const obj = analyticsLocations(closure_2_2[11]);
              canUseAnimatedAvatarResult = obj.canUseAnimatedAvatar(c3);
            }
            c3 = canUseAnimatedAvatarResult;
            if (isGIF(base64)) {
              const tmp14 = c3;
              if (!tmp14) {
                avatar();
              }
            }
            const obj9 = { imageUri: base64, description: obj3.generateAvatarDescription(), originalMd5 };
            const createPendingImage = guildId(closure_2_2[12]).createPendingImage;
            const tmp22 = guildId(closure_2_2[12]);
            obj3 = guildId(closure_2_2[13]);
            avatar = createPendingImage(obj9);
            if (c2) {
              const tmp30Result = guildId(closure_2_2[14]);
              tmp30Result.setTryItOutAvatar(avatar);
            } else {
              const obj10 = { guildId, avatar };
              const tmp30Result2 = guildId(closure_2_2[15]);
              tmp30Result2.setPendingChanges(obj10);
              const obj6 = guildId(closure_2_2[16]);
              const result = obj6.announcePendingAvatarChange("set");
            }
          }
          c3 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp40) {
        c3 = 3;
        throw tmp40;
      }
    }
  });
  const fn = function() {
    return closure_0(...arguments);
  };
  cResult[4] = guildId;
  cResult[5] = undefined !== isTryItOut && isTryItOut;
  cResult[6] = tmp9;
  cResult[7] = stateFromStores;
  cResult[8] = fn;
}) : ((guildId) => {
  let closure_4;
  let currentUser;
  guildId = guildId.guildId;
  let flag = guildId.isTryItOut;
  if (flag === undefined) {
    flag = false;
  }
  let analyticsLocations = guildId.analyticsLocations;
  useCallback = undefined;
  let obj = guildId(analyticsLocations[7]);
  const items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const items1 = [analyticsLocations];
  const tmp2 = useCallback(() => {
    let obj3;
    let obj4;
    const obj2 = { initialUpsellKey: constants2.ANIMATED_AVATAR, analyticsLocation: obj3, analyticsProperties: obj4, analyticsLocations };
    obj3 = { page: metroRequire.USER_SETTINGS, section: constants.SETTINGS_OVERVIEW };
    obj4 = { type: PremiumUpsellTypes.ANIMATED_USER_AVATAR_MODAL };
    const obj = PremiumUpsellUtilsDefault;
    const result = obj.handleShowUpsellAlert(obj2);
  }, items1);
  useCallback = tmp2;
  const items2 = [stateFromStores, guildId, flag, tmp2];
  return useCallback(stateFromStores(function*() {
    let c2;
    let closure_1;
    let obj3;
    if (c3 === 2) {
      c3 = 3;
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
      try {
        let v0;
        let base64;
        let originalMd5;
        let avatar;
        c3 = 2;
        if (0 === analyticsLocations) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            v0 = undefined;
            base64 = undefined;
            originalMd5 = undefined;
            avatar = undefined;
            const obj12 = tmp(analyticsLocations[9]);
            obj12.hideActionSheet();
            const obj5 = { size };
            const obj13 = tmp(analyticsLocations[10]);
            analyticsLocations = 1;
            c3 = 1;
            const obj7 = { value: obj13.openImagePicker(obj5), done: false };
            return obj7;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj8 = { value, done: true };
          return obj8;
        } else {
          v0 = value;
          base64 = v0.base64;
          originalMd5 = v0.originalMd5;
          if (null != base64) {
            let canUseAnimatedAvatarResult = closure_129_1;
            if (!canUseAnimatedAvatarResult) {
              const obj = tmp(analyticsLocations[11]);
              canUseAnimatedAvatarResult = obj.canUseAnimatedAvatar(closure_129_3);
            }
            c3 = canUseAnimatedAvatarResult;
            if (isGIF(base64)) {
              const tmp14 = c3;
              if (!tmp14) {
                closure_129_4();
              }
            }
            const obj9 = { imageUri: base64, description: obj3.generateAvatarDescription(), originalMd5 };
            const createPendingImage = v0(analyticsLocations[12]).createPendingImage;
            const tmp22 = v0(analyticsLocations[12]);
            obj3 = v0(analyticsLocations[13]);
            avatar = createPendingImage(obj9);
            if (closure_129_1) {
              const tmp30Result = v0(analyticsLocations[14]);
              tmp30Result.setTryItOutAvatar(avatar);
            } else {
              const obj10 = { guildId: closure_129_0, avatar };
              const tmp30Result2 = v0(analyticsLocations[15]);
              tmp30Result2.setPendingChanges(obj10);
              const obj6 = v0(analyticsLocations[16]);
              const result = obj6.announcePendingAvatarChange("set");
            }
          }
          c3 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp40) {
        c3 = 3;
        throw tmp40;
      }
    }
  }), items2);
});
let result = size.fileFinishedImporting("modules/user_profile/hooks/native/useUploadAvatar.tsx");

export default tmp3;