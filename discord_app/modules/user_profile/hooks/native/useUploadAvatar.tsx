// === Module 14707: useUploadAvatar ===

// Module 14707 (useUploadAvatar)
import PremiumUpsellUtilsDefault from "PremiumUpsellUtils" /* 9445 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import UserStore from "UserStore" /* 1372 */;

const require = fn;
fn(19).useCallback;
const Constants = fn(1074);
({ AnalyticsPages: metroRequire, UPLOAD_MEDIUM_SIZE: closure_7, Base64GIFPrefix: closure_8, AnalyticsSections: closure_9, UpsellTypes: c10 } = Constants);
const PremiumUpsellTypes = fn(1374).PremiumUpsellTypes;
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/hooks/native/useUploadAvatar.tsx");

export default function useUploadAvatar(guildId) {
  guildId = guildId.guildId;
  let flag = guildId.isTryItOut;
  if (flag === undefined) {
    flag = false;
  }
  const analyticsLocations = guildId.analyticsLocations;
  useCallback = undefined;
  const items = [UserStore];
  const stateFromStores = guildId(analyticsLocations[5]).useStateFromStores(items, () => currentUser.getCurrentUser());
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
        return { value: "HermesInternal", done: null };
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
            let tmp22 = tmp2;
            closure_128_0 = undefined;
            let base64;
            let originalMd5;
            closure_128_3 = undefined;
            closure_128_4 = undefined;
            tmp22(4606).hideActionSheet();
            const obj13 = tmp22(4606);
            const obj6 = { size };
            dependencyMap = 1;
            c3 = 1;
            const obj8 = { value: tmp22(5222).openImagePicker(obj6), done: false };
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
              canUseAnimatedAvatarResult = tmp22(4297).canUseAnimatedAvatar(closure_129_3);
              const obj = tmp22(4297);
            }
            closure_128_3 = canUseAnimatedAvatarResult;
            if ((function isGIF(str) {
              const regExp = new RegExp("^" + closure_1_8, "i");
              return null != str.match(regExp);
            })(base64)) {
              if (!closure_128_3) {
                closure_129_4();
              }
            }
          }
          const obj10 = { imageUri: base64, description: null, originalMd5: null };
          tmp22 = tmp2;
          const obj2 = tmp2(14691);
          obj10.description = tmp2(8289).generateAvatarDescription();
          obj10.originalMd5 = originalMd5;
          closure_128_4 = obj2.createPendingImage(obj10);
          if (closure_129_1) {
            tmp2(8287).setTryItOutAvatar(closure_128_4);
            const tmp28Result = tmp2(8287);
          } else {
            const obj11 = { guildId: closure_129_0, avatar: closure_128_4 };
            tmp2(8284).setPendingChanges(obj11);
            const tmp28Result2 = tmp2(8284);
            const result = tmp2(8286).announcePendingAvatarChange("set");
            const obj7 = tmp2(8286);
          }
          const obj4 = tmp2(8289);
        }
      } catch (tmp38) {
        c3 = tmp;
        throw tmp38;
      }
    }
  }), items2);
};