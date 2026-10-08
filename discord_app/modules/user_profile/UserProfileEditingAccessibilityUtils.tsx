// === Module 14746: UserProfileEditingAccessibilityUtils ===

// Module 14746 (UserProfileEditingAccessibilityUtils)
import util from "util" /* 1126 */;
import _modDef2955 from "module_2955" /* 2955 */;
import useDisplayNameStylesEffectConfigs from "useDisplayNameStylesEffectConfigs" /* 10249 */;
import getDisplayNameStylesFontNameDefault from "getDisplayNameStylesFontName" /* 14686 */;
import size from "module_2" /* 2 */;

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