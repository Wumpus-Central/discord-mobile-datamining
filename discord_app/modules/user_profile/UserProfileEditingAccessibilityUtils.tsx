// discord_app/modules/user_profile/UserProfileEditingAccessibilityUtils.tsx
import util from "../../intl/index.native.tsx";
import _modDef2955 from "../display_name_styles/intl/DisplayNameStyles.messages.js";
import ProfilePendingImageTypes from "../profile_customization/ProfilePendingImageTypes.tsx";
import useDisplayNameStylesEffectConfigs from "../display_name_styles/hooks/useDisplayNameStylesEffectConfigs.tsx";
import getDisplayNameStylesFontNameDefault from "../display_name_styles/getDisplayNameStylesFontName.tsx";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/user_profile/UserProfileEditingAccessibilityUtils.tsx");

export const getDisplayNameStyleAccessibleValue = function getDisplayNameStyleAccessibleValue(stateFromStores) {
  if (null == stateFromStores) {
    const intl2 = util.intl;
    return intl2.string(util.t["3Xph0/"]);
  } else {
    const intl3 = util.intl;
    const intl4 = util.intl;
    let OpWJ3f = useDisplayNameStylesEffectConfigs.DISPLAY_NAME_STYLES_EFFECT_NAMES[stateFromStores.effectId];
    if (OpWJ3f == null) {
      OpWJ3f = _modDef2955.OpWJ3f;
    }
    const colors = stateFromStores.colors;
    const stringResult = intl3.string(getDisplayNameStylesFontNameDefault(stateFromStores.fontId));
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
