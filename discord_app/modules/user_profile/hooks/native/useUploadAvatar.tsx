// discord_app/modules/user_profile/hooks/native/useUploadAvatar.tsx
import PremiumUpsellUtilsDefault from "../../../../utils/native/PremiumUpsellUtils.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import UserStore from "../../../../stores/UserStore.tsx";

const require = fn;
fn(19).useCallback;
const Constants = fn(1074);
({
  AnalyticsPages: metroRequire,
  UPLOAD_MEDIUM_SIZE: closure_7,
  Base64GIFPrefix: closure_8,
  AnalyticsSections: closure_9,
  UpsellTypes: c10,
} = Constants);
const PremiumUpsellTypes = fn(1373).PremiumUpsellTypes;
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
    let obj = {
      initialUpsellKey: constants3.ANIMATED_AVATAR,
      analyticsLocation: null,
      analyticsProperties: null,
      analyticsLocations,
    };
    obj = { page: constants.USER_SETTINGS, section: constants2.SETTINGS_OVERVIEW };
    obj.analyticsLocation = obj;
    obj.analyticsProperties = { type: PremiumUpsellTypes.ANIMATED_USER_AVATAR_MODAL };
    const result = obj.handleShowUpsellAlert(obj);
  }, items1);
  useCallback = tmp2;
  const items2 = [stateFromStores, guildId, flag, tmp2];
  return useCallback(
    stateFromStores(function* (arg0, value) {
      if (c3 === 2) {
        c3 = 3;
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
          c3 = 2;
          if (0 === dependencyMap) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              let tmp22 = tmp2;
              closure_128_0 = undefined;
              let base64;
              let originalMd5;
              closure_128_3 = undefined;
              closure_128_4 = undefined;
              tmp22(4527).hideActionSheet();
              const obj13 = tmp22(4527);
              let obj1 = { size };
              dependencyMap = 1;
              c3 = 1;
              const obj2 = { value: tmp22(5138).openImagePicker(obj1), done: false };
              return obj2;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            let obj3 = { value, done: true };
            return obj3;
          } else {
            closure_128_0 = value;
            base64 = closure_128_0.base64;
            originalMd5 = closure_128_0.originalMd5;
            if (null == base64) {
              c3 = 3;
            } else {
              let canUseAnimatedAvatarResult = closure_129_1;
              if (!closure_129_1) {
                obj = tmp22(4218);
                canUseAnimatedAvatarResult = obj.canUseAnimatedAvatar(closure_129_3);
              }
              closure_128_3 = canUseAnimatedAvatarResult;
              if (
                (function isGIF(str) {
                  const regExp = new RegExp("^" + closure_1_8, "i");
                  return null != str.match(regExp);
                })(base64)
              ) {
                if (!closure_128_3) {
                  closure_129_4();
                }
              }
            }
            obj1 = tmp2(14593);
            const obj4 = { imageUri: base64, description: null, originalMd5: null };
            tmp22 = tmp2;
            obj3 = tmp2(8169);
            obj4.description = obj3.generateAvatarDescription();
            obj4.originalMd5 = originalMd5;
            closure_128_4 = obj1.createPendingImage(obj4);
            if (closure_129_1) {
              let tmp28Result = tmp28(8167);
              tmp28Result.setTryItOutAvatar(closure_128_4);
            } else {
              tmp28Result = tmp28(8164);
              const obj5 = { guildId: closure_129_0, avatar: closure_128_4 };
              tmp28Result.setPendingChanges(obj5);
              const result = tmp2(8166).announcePendingAvatarChange("set");
              const obj7 = tmp2(8166);
            }
          }
        } catch (tmp38) {
          c3 = tmp;
          throw tmp38;
        }
      }
    }),
    items2,
  );
}
