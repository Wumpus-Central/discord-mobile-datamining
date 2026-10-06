// discord_app/modules/premium/roadblocks/utils/TryItOutPresets.tsx
import intl2 from "../../../../intl/index.native.tsx";
import DisplayNameEffect from "../../../../../discord_common/js/shared/shared-constants/DisplayNameEffect.tsx";
import DisplayNameFont from "../../../../../discord_common/js/shared/shared-constants/DisplayNameFont.tsx";
import _mod15716 from "../../../../../discord_assets/assets/user_profile/try_it_out/above_the_clouds_banner.png.js";
import _mod15717 from "../../../../../discord_assets/assets/premium/upsells/profiles/banners/above_the_clouds_banner.gif.js";
import _mod15720 from "../../../../../discord_assets/assets/user_profile/try_it_out/cyberpunk_banner.png.js";
import _mod15721 from "../../../../../discord_assets/assets/premium/upsells/profiles/banners/cyberpunk_indi_banner.gif.js";
import _mod15724 from "../../../../../discord_assets/assets/user_profile/try_it_out/shadow_realm_banner.png.js";
import _mod15725 from "../../../../../discord_assets/assets/premium/upsells/profiles/banners/fantasy_land_banner.gif.js";
import _mod15728 from "../../../../../discord_assets/assets/user_profile/try_it_out/starlit_dream_banner.png.js";
import _mod15729 from "../../../../../discord_assets/assets/premium/upsells/profiles/banners/future_galaxy_banner.gif.js";
import _mod15732 from "../../../../../discord_assets/assets/user_profile/try_it_out/neon_space_banner.png.js";
import _mod15733 from "../../../../../discord_assets/assets/premium/upsells/profiles/banners/neon_space_banner.gif.js";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;

function getName() {
  const intl = intl2.intl;
  return intl.string(intl2.t["TFc+iF"]);
}
function getHeaderSrc() {
  return require("../../../../../discord_assets/assets/premium/upsells/profiles/headers/above_the_clouds_header.png.js")
    .default;
}
function getPreviewThumbnailSrc() {
  return require("../../../../../discord_assets/assets/user_profile/try_it_out/preset-above-the-clouds.png.js").default;
}
function getBannerSrc(arg0) {
  let _default;
  const tmp3 = arg0;
  if (tmp3) {
    _default = _mod15716.default;
  } else {
    _default = _mod15717.default;
  }
  return _default;
}
function getBannerAltText() {
  const intl = intl2.intl;
  return intl.string(intl2.t["8Q9iXo"]);
}
const TryItOutPresets = {
  ABOVE_THE_CLOUDS: "above_the_clouds",
  CYBERPUNK: "cyberpunk",
  STARLIT_DREAM: "starlit_dream",
  SHADOW_REALM: "shadow_realm",
  NEON_SPACE: "neon_space",
};
const obj2 = {};
obj2[TryItOutPresets.ABOVE_THE_CLOUDS] = {
  preset: TryItOutPresets.ABOVE_THE_CLOUDS,
  themeColorsLegacy: [752280, 9215590],
  themeColors: { dark: [5600251, 6553557], light: [2790911, 10747860] },
  avatarDecorationSkuId: "1144059132517826601",
  displayNameStyles: {
    fontId: DisplayNameFont.DisplayNameFont.CHICLE,
    effectId: DisplayNameEffect.DisplayNameEffect.POP,
    colors: [959694],
  },
  getName,
  getHeaderSrc,
  getPreviewThumbnailSrc,
  getBannerSrc,
  getBannerAltText,
};
const obj3 = {
  preset: TryItOutPresets.ABOVE_THE_CLOUDS,
  themeColorsLegacy: [752280, 9215590],
  themeColors: { dark: [5600251, 6553557], light: [2790911, 10747860] },
  avatarDecorationSkuId: "1144059132517826601",
  displayNameStyles: {
    fontId: DisplayNameFont.DisplayNameFont.CHICLE,
    effectId: DisplayNameEffect.DisplayNameEffect.POP,
    colors: [959694],
  },
  getName,
  getHeaderSrc,
  getPreviewThumbnailSrc,
  getBannerSrc,
  getBannerAltText,
};
const obj5 = {
  preset: TryItOutPresets.CYBERPUNK,
  themeColorsLegacy: [1967991, 742532],
  themeColors: { dark: [14173883, 4395410], light: [16743094, 5028863] },
  avatarDecorationSkuId: null,
  displayNameStyles: {
    fontId: DisplayNameFont.DisplayNameFont.PIXELIFY,
    effectId: DisplayNameEffect.DisplayNameEffect.NEON,
    colors: [2949343],
  },
  getName() {
    const intl = intl2.intl;
    return intl.string(intl2.t["4g+5bq"]);
  },
  getHeaderSrc() {
    return require("../../../../../discord_assets/assets/premium/upsells/profiles/headers/cyberpunk_indi_header.png.js")
      .default;
  },
  getPreviewThumbnailSrc() {
    return require("../../../../../discord_assets/assets/user_profile/try_it_out/preset-cyberpunk.png.js").default;
  },
  getBannerSrc(arg0) {
    let _default;
    const tmp3 = arg0;
    if (tmp3) {
      _default = _mod15720.default;
    } else {
      _default = _mod15721.default;
    }
    return _default;
  },
  getBannerAltText() {
    const intl = intl2.intl;
    return intl.string(intl2.t.y6WngK);
  },
};
({
  fontId: DisplayNameFont.DisplayNameFont.CHICLE,
  effectId: DisplayNameEffect.DisplayNameEffect.POP,
  colors: [959694],
});
obj2[TryItOutPresets.CYBERPUNK] = obj5;
const obj7 = {
  preset: TryItOutPresets.SHADOW_REALM,
  themeColorsLegacy: [0, 4458504],
  themeColors: { dark: [3880879, 11353658], light: [8154109, 13058560] },
  avatarDecorationSkuId: "1144058522808614923",
  displayNameStyles: {
    fontId: DisplayNameFont.DisplayNameFont.NEO_CASTEL,
    effectId: DisplayNameEffect.DisplayNameEffect.TOON,
    colors: [16711680],
  },
  getName() {
    const intl = intl2.intl;
    return intl.string(intl2.t.ycg1xj);
  },
  getHeaderSrc() {
    return require("../../../../../discord_assets/assets/premium/upsells/profiles/headers/fantasy_land_header.png.js")
      .default;
  },
  getPreviewThumbnailSrc() {
    return require("../../../../../discord_assets/assets/user_profile/try_it_out/preset-shadow-realm.png.js").default;
  },
  getBannerSrc(arg0) {
    let _default;
    const tmp3 = arg0;
    if (tmp3) {
      _default = _mod15724.default;
    } else {
      _default = _mod15725.default;
    }
    return _default;
  },
  getBannerAltText() {
    const intl = intl2.intl;
    return intl.string(intl2.t.bwRnYf);
  },
};
({
  fontId: DisplayNameFont.DisplayNameFont.PIXELIFY,
  effectId: DisplayNameEffect.DisplayNameEffect.NEON,
  colors: [2949343],
});
obj2[TryItOutPresets.SHADOW_REALM] = obj7;
const obj9 = {
  preset: TryItOutPresets.STARLIT_DREAM,
  themeColorsLegacy: [5123751, 590625],
  themeColors: { dark: [4334982, 15000275], light: [16178343, 3805885] },
  avatarDecorationSkuId: "1144058844004233369",
  displayNameStyles: {
    fontId: DisplayNameFont.DisplayNameFont.CHERRY_BOMB,
    effectId: DisplayNameEffect.DisplayNameEffect.TOON,
    colors: [3343795],
  },
  getName() {
    const intl = intl2.intl;
    return intl.string(intl2.t["9WLHvr"]);
  },
  getHeaderSrc() {
    return require("../../../../../discord_assets/assets/premium/upsells/profiles/headers/future_galaxy_header.png.js")
      .default;
  },
  getPreviewThumbnailSrc() {
    return require("../../../../../discord_assets/assets/user_profile/try_it_out/preset-starlit-dream.png.js").default;
  },
  getBannerSrc(arg0) {
    let _default;
    const tmp3 = arg0;
    if (tmp3) {
      _default = _mod15728.default;
    } else {
      _default = _mod15729.default;
    }
    return _default;
  },
  getBannerAltText() {
    const intl = intl2.intl;
    return intl.string(intl2.t.emZXBr);
  },
};
({
  fontId: DisplayNameFont.DisplayNameFont.NEO_CASTEL,
  effectId: DisplayNameEffect.DisplayNameEffect.TOON,
  colors: [16711680],
});
obj2[TryItOutPresets.STARLIT_DREAM] = obj9;
const obj11 = {
  preset: TryItOutPresets.NEON_SPACE,
  themeColorsLegacy: [6094952, 1007678],
  themeColors: { dark: [14033151, 5826546], light: [583042, 15609599] },
  avatarDecorationSkuId: null,
  displayNameStyles: {
    fontId: DisplayNameFont.DisplayNameFont.MUSEO_MODERNO,
    effectId: DisplayNameEffect.DisplayNameEffect.NEON,
    colors: [28737],
  },
  getName() {
    const intl = intl2.intl;
    return intl.string(intl2.t.UdNuqi);
  },
  getHeaderSrc() {
    return require("../../../../../discord_assets/assets/premium/upsells/profiles/headers/neon_space_header.png.js")
      .default;
  },
  getPreviewThumbnailSrc() {
    return require("../../../../../discord_assets/assets/user_profile/try_it_out/preset-neon-space.png.js").default;
  },
  getBannerSrc(arg0) {
    let _default;
    const tmp3 = arg0;
    if (tmp3) {
      _default = _mod15732.default;
    } else {
      _default = _mod15733.default;
    }
    return _default;
  },
  getBannerAltText() {
    const intl = intl2.intl;
    return intl.string(intl2.t.si7znt);
  },
};
({
  fontId: DisplayNameFont.DisplayNameFont.CHERRY_BOMB,
  effectId: DisplayNameEffect.DisplayNameEffect.TOON,
  colors: [3343795],
});
obj2[TryItOutPresets.NEON_SPACE] = obj11;
({
  fontId: DisplayNameFont.DisplayNameFont.MUSEO_MODERNO,
  effectId: DisplayNameEffect.DisplayNameEffect.NEON,
  colors: [28737],
});
const result = size.fileFinishedImporting("modules/premium/roadblocks/utils/TryItOutPresets.tsx");

export { TryItOutPresets };
export const TRY_IT_OUT_PRESET_CONFIGS = obj2;
export const getTryItOutPresetConfig = function getTryItOutPresetConfig(randomTryItOutPreset) {
  return obj2[randomTryItOutPreset];
};
export const getRandomTryItOutPreset = function getRandomTryItOutPreset(tryItOutLastPreset) {
  let closure_0 = tryItOutLastPreset;
  const values = Object.values(obj);
  let found = values;
  if (null != tryItOutLastPreset) {
    found = values.filter((item) => item !== closure_0);
  }
  return found[Math.floor(Math, Math.random(Math) * found.length)];
};
