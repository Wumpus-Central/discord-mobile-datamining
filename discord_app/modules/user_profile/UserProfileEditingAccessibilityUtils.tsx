// === Module 14912: UserProfileEditingAccessibilityUtils ===

// Module 14912 (UserProfileEditingAccessibilityUtils)
import util from "util" /* 1126 */;
import _modDef2958 from "module_2958" /* 2958 */;
import ProfilePendingImageTypes from "ProfilePendingImageTypes" /* 6678 */;
import useDisplayNameStylesEffectConfigs from "useDisplayNameStylesEffectConfigs" /* 10265 */;
import getDisplayNameStylesFontNameDefault from "getDisplayNameStylesFontName" /* 14848 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_profile/UserProfileEditingAccessibilityUtils.tsx");

export const getDisplayNameStyleAccessibleValue = function getDisplayNameStyleAccessibleValue(displayNameStyles) {
  if (null == displayNameStyles) {
    const intl2 = util.intl;
    return intl2.string(util.t["3Xph0/"]);
  } else {
    const intl3 = util.intl;
    const intl4 = util.intl;
    let OpWJ3f = useDisplayNameStylesEffectConfigs.DISPLAY_NAME_STYLES_EFFECT_NAMES[displayNameStyles.effectId];
    if (OpWJ3f == null) {
      OpWJ3f = _modDef2958.OpWJ3f;
    }
    const colors = displayNameStyles.colors;
    const stringResult = intl3.string(getDisplayNameStylesFontNameDefault(displayNameStyles.fontId));
    const mapped = colors.map((item) => "#" + item.toString(16).padStart(6, "0"));
    const joined = mapped.join(", ");
    const intl = util.intl;
    const obj = { fontName: stringResult, effectName: intl4.string(OpWJ3f), colors: joined };
    return intl.formatToPlainString(util.t.Igwax6, obj);
  }
};
export const getBannerAccessibleValue = function getBannerAccessibleValue(bannerChange, currentProfileBanner) {
  if (null !== bannerChange) {
    if (undefined === bannerChange) {
      return description;
    }
    if (undefined === bannerChange) {
      const intl = util.intl;
      description = intl.string(util.t.keN7ib);
    } else {
      description = bannerChange.description;
    }
  }
  const intl2 = util.intl;
  description = intl2.string(util.t["3Xph0/"]);
};
export const getAvatarAccessibleValue = function getAvatarAccessibleValue(avatarChange, avatar) {
  if (null !== avatarChange) {
    if (undefined === avatarChange) {
      return description;
    }
    if (undefined === avatarChange) {
      const intl2 = util.intl;
      description = intl2.string(util.t["16GpW/"]);
    } else {
      if (avatarChange.assetOrigin === ProfilePendingImageTypes.AssetOriginTypes.ARCHIVED_ASSET) {
        description = avatarChange.originalAsset.description;
      } else {
        description = avatarChange.description;
      }
      if (description == null) {
        const intl = util.intl;
        description = intl.string(util.t.cqdtrR);
      }
    }
  }
  const intl3 = util.intl;
  description = intl3.string(util.t["3Xph0/"]);
};