// === Module 14502: useUploadAvatar ===

// Module 14502 (useUploadAvatar)
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_5 from "mergeGuildAvatar" /* 1921 */;
import ME from "ME" /* 673 */;
import { PremiumUpsellTypes } from "GuildFeatures" /* 1923 */;

const require = arg1;
require("noop").useCallback;
({ AnalyticsPages: closure_6, UPLOAD_MEDIUM_SIZE: error, Base64GIFPrefix: closure_8, AnalyticsSections: c9, UpsellTypes: c10 } = ME);
let result = require("set").fileFinishedImporting("modules/user_profile/hooks/native/useUploadAvatar.tsx");

export default function useUploadAvatar(guildId) {
  guildId = guildId.guildId;
  let flag = guildId.isTryItOut;
  if (flag === undefined) {
    flag = false;
  }
  const analyticsLocations = guildId.analyticsLocations;
  let stateFromStores;
  useCallback = undefined;
  const items = [closure_5];
  stateFromStores = guildId(analyticsLocations[5]).useStateFromStores(items, () => currentUser.getCurrentUser());
  const items1 = [analyticsLocations];
  const tmp2 = useCallback(() => {
    let obj = flag(analyticsLocations[6]);
    obj = { initialUpsellKey: closure_1_10.ANIMATED_AVATAR, analyticsLocation: obj, analyticsProperties: obj1, analyticsLocations };
    obj = { page: closure_1_6.USER_SETTINGS, section: closure_1_9.SETTINGS_OVERVIEW };
    const result = obj.handleShowUpsellAlert(obj);
  }, items1);
  useCallback = tmp2;
  const items2 = [stateFromStores, guildId, flag, tmp2];
  return useCallback(stateFromStores(function*() {
    if (c3 === 2) {
      c3 = 3;
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
        c3 = 2;
        if (0 === originalMd5) {
          if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let base64 = tmp2;
            closure_0 = tmp2;
            closure_0 = undefined;
            base64 = undefined;
            originalMd5 = undefined;
            c3 = undefined;
            closure_4 = undefined;
            closure_1_1(4445).hideActionSheet();
            const obj13 = closure_1_1(4445);
            obj1 = { size: null };
            obj1[0] = closure_1_7;
            originalMd5 = 1;
            c3 = 1;
            const obj2 = { value: null, done: false };
            obj2[0] = closure_1_1(5091).openImagePicker(obj1);
            return obj2;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c3 = 3;
          let obj3 = { value: null, done: true };
          obj3[0] = arg1;
          return obj3;
        } else {
          closure_0 = arg1;
          base64 = closure_0.base64;
          originalMd5 = closure_0.originalMd5;
          if (null == base64) {
            c3 = 3;
          } else {
            let canUseAnimatedAvatarResult = base64;
            if (!base64) {
              obj = closure_1_1(4139);
              canUseAnimatedAvatarResult = obj.canUseAnimatedAvatar(c3);
            }
            c3 = canUseAnimatedAvatarResult;
            if ((function isGIF(base64) {
              const regExp = new RegExp("^" + closure_8, "i");
              return null != base64.match(regExp);
            })(base64)) {
              if (!c3) {
                closure_1_4();
              }
            }
          }
          obj1 = closure_1_0(14486);
          const obj4 = { imageUri: null, description: null, originalMd5: null };
          obj4[0] = base64;
          obj3 = closure_1_0(8090);
          obj4[1] = obj3.generateAvatarDescription();
          obj4[2] = originalMd5;
          closure_4 = obj1.createPendingImage(obj4);
          if (closure_1_1) {
            let tmp28Result = tmp28(8088);
            tmp28Result.setTryItOutAvatar(closure_1_4);
          } else {
            tmp28Result = tmp28(8085);
            const obj5 = { guildId: null, avatar: null };
            obj5[0] = closure_0;
            obj5[1] = closure_1_4;
            tmp28Result.setPendingChanges(obj5);
            const result = closure_1_0(8087).announcePendingAvatarChange("set");
            const obj7 = closure_1_0(8087);
          }
        }
      } catch (tmp38) {
        c3 = tmp;
        throw tmp38;
      }
    }
  }), items2);
};