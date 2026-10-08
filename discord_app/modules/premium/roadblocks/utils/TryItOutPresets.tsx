// === Module 14721: TryItOutPresets ===

// Module 14721 (TryItOutPresets)
import util from "util" /* 1126 */;
import DisplayNameEffect from "DisplayNameEffect" /* 1408 */;
import DisplayNameFont from "DisplayNameFont" /* 1409 */;
import _mod14724 from "module_14724" /* 14724 */;
import _mod14725 from "module_14725" /* 14725 */;
import _mod14728 from "module_14728" /* 14728 */;
import _mod14729 from "module_14729" /* 14729 */;
import _mod14732 from "module_14732" /* 14732 */;
import _mod14733 from "module_14733" /* 14733 */;
import _mod14736 from "module_14736" /* 14736 */;
import _mod14737 from "module_14737" /* 14737 */;
import _mod14740 from "module_14740" /* 14740 */;
import _mod14741 from "module_14741" /* 14741 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const TryItOutPresets = { ABOVE_THE_CLOUDS: "above_the_clouds", CYBERPUNK: "cyberpunk", STARLIT_DREAM: "starlit_dream", SHADOW_REALM: "shadow_realm", NEON_SPACE: "neon_space" };
const obj2 = {};
const obj3 = {
  preset: TryItOutPresets.ABOVE_THE_CLOUDS,
  themeColorsLegacy: [752280, 9215590],
  themeColors: { dark: [5600251, 6553557], light: [2790911, 10747860] },
  avatarDecorationSkuId: "1144059132517826601",
  displayNameStyles: { fontId: DisplayNameFont.DisplayNameFont.CHICLE, effectId: DisplayNameEffect.DisplayNameEffect.POP, colors: [959694] },
  getName() {
    const intl = util.intl;
    return intl.string(util.t["TFc+iF"]);
  },
  getHeaderSrc() {
    return require("module_14722").default;
  },
  getPreviewThumbnailSrc() {
    return require("module_14723").default;
  },
  getBannerSrc(arg0) {
    if (arg0) {
      let _default = _mod14724.default;
    } else {
      _default = _mod14725.default;
    }
    return _default;
  },
  getBannerAltText() {
    const intl = util.intl;
    return intl.string(util.t["8Q9iXo"]);
  }
};
obj2[TryItOutPresets.ABOVE_THE_CLOUDS] = obj3;
const obj5 = { preset: TryItOutPresets.CYBERPUNK, themeColorsLegacy: [1967991, 742532], themeColors: { dark: [14173883, 4395410], light: [16743094, 5028863] }, avatarDecorationSkuId: null, displayNameStyles: null, getName: null, getHeaderSrc: null, getPreviewThumbnailSrc: null, getBannerSrc: null, getBannerAltText: null };
const obj4 = { fontId: DisplayNameFont.DisplayNameFont.CHICLE, effectId: DisplayNameEffect.DisplayNameEffect.POP, colors: [959694] };
obj5.displayNameStyles = { fontId: DisplayNameFont.DisplayNameFont.PIXELIFY, effectId: DisplayNameEffect.DisplayNameEffect.NEON, colors: [2949343] };
obj5.getName = function getName() {
  const intl = util.intl;
  return intl.string(util.t["4g+5bq"]);
};
obj5.getHeaderSrc = function getHeaderSrc() {
  return require("module_14726").default;
};
obj5.getPreviewThumbnailSrc = function getPreviewThumbnailSrc() {
  return require("module_14727").default;
};
obj5.getBannerSrc = function getBannerSrc(arg0) {
  if (arg0) {
    let _default = _mod14728.default;
  } else {
    _default = _mod14729.default;
  }
  return _default;
};
obj5.getBannerAltText = function getBannerAltText() {
  const intl = util.intl;
  return intl.string(util.t.y6WngK);
};
obj2[TryItOutPresets.CYBERPUNK] = obj5;
const obj7 = { preset: TryItOutPresets.SHADOW_REALM, themeColorsLegacy: [0, 4458504], themeColors: { dark: [3880879, 11353658], light: [8154109, 13058560] }, avatarDecorationSkuId: "1144058522808614923", displayNameStyles: null, getName: null, getHeaderSrc: null, getPreviewThumbnailSrc: null, getBannerSrc: null, getBannerAltText: null };
const obj6 = { fontId: DisplayNameFont.DisplayNameFont.PIXELIFY, effectId: DisplayNameEffect.DisplayNameEffect.NEON, colors: [2949343] };
obj7.displayNameStyles = { fontId: DisplayNameFont.DisplayNameFont.NEO_CASTEL, effectId: DisplayNameEffect.DisplayNameEffect.TOON, colors: [16711680] };
obj7.getName = function getName() {
  const intl = util.intl;
  return intl.string(util.t.ycg1xj);
};
obj7.getHeaderSrc = function getHeaderSrc() {
  return require("module_14730").default;
};
obj7.getPreviewThumbnailSrc = function getPreviewThumbnailSrc() {
  return require("module_14731").default;
};
obj7.getBannerSrc = function getBannerSrc(arg0) {
  if (arg0) {
    let _default = _mod14732.default;
  } else {
    _default = _mod14733.default;
  }
  return _default;
};
obj7.getBannerAltText = function getBannerAltText() {
  const intl = util.intl;
  return intl.string(util.t.bwRnYf);
};
obj2[TryItOutPresets.SHADOW_REALM] = obj7;
const obj9 = { preset: TryItOutPresets.STARLIT_DREAM, themeColorsLegacy: [5123751, 590625], themeColors: { dark: [4334982, 15000275], light: [16178343, 3805885] }, avatarDecorationSkuId: "1144058844004233369", displayNameStyles: null, getName: null, getHeaderSrc: null, getPreviewThumbnailSrc: null, getBannerSrc: null, getBannerAltText: null };
const obj8 = { fontId: DisplayNameFont.DisplayNameFont.NEO_CASTEL, effectId: DisplayNameEffect.DisplayNameEffect.TOON, colors: [16711680] };
obj9.displayNameStyles = { fontId: DisplayNameFont.DisplayNameFont.CHERRY_BOMB, effectId: DisplayNameEffect.DisplayNameEffect.TOON, colors: [3343795] };
obj9.getName = function getName() {
  const intl = util.intl;
  return intl.string(util.t["9WLHvr"]);
};
obj9.getHeaderSrc = function getHeaderSrc() {
  return require("module_14734").default;
};
obj9.getPreviewThumbnailSrc = function getPreviewThumbnailSrc() {
  return require("module_14735").default;
};
obj9.getBannerSrc = function getBannerSrc(arg0) {
  if (arg0) {
    let _default = _mod14736.default;
  } else {
    _default = _mod14737.default;
  }
  return _default;
};
obj9.getBannerAltText = function getBannerAltText() {
  const intl = util.intl;
  return intl.string(util.t.emZXBr);
};
obj2[TryItOutPresets.STARLIT_DREAM] = obj9;
const obj11 = { preset: TryItOutPresets.NEON_SPACE, themeColorsLegacy: [6094952, 1007678], themeColors: { dark: [14033151, 5826546], light: [583042, 15609599] }, avatarDecorationSkuId: null, displayNameStyles: null, getName: null, getHeaderSrc: null, getPreviewThumbnailSrc: null, getBannerSrc: null, getBannerAltText: null };
const obj10 = { fontId: DisplayNameFont.DisplayNameFont.CHERRY_BOMB, effectId: DisplayNameEffect.DisplayNameEffect.TOON, colors: [3343795] };
obj11.displayNameStyles = { fontId: DisplayNameFont.DisplayNameFont.MUSEO_MODERNO, effectId: DisplayNameEffect.DisplayNameEffect.NEON, colors: [28737] };
obj11.getName = function getName() {
  const intl = util.intl;
  return intl.string(util.t.UdNuqi);
};
obj11.getHeaderSrc = function getHeaderSrc() {
  return require("module_14738").default;
};
obj11.getPreviewThumbnailSrc = function getPreviewThumbnailSrc() {
  return require("module_14739").default;
};
obj11.getBannerSrc = function getBannerSrc(arg0) {
  if (arg0) {
    let _default = _mod14740.default;
  } else {
    _default = _mod14741.default;
  }
  return _default;
};
obj11.getBannerAltText = function getBannerAltText() {
  const intl = util.intl;
  return intl.string(util.t.si7znt);
};
obj2[TryItOutPresets.NEON_SPACE] = obj11;
const result = size.fileFinishedImporting("modules/premium/roadblocks/utils/TryItOutPresets.tsx");

export { TryItOutPresets };
export const TRY_IT_OUT_PRESET_CONFIGS = obj2;
export const getTryItOutPresetConfig = function getTryItOutPresetConfig(randomTryItOutPreset) {
  return obj2[randomTryItOutPreset];
};
export const getRandomTryItOutPreset = function getRandomTryItOutPreset(tryItOutLastPreset) {
  closure_0 = tryItOutLastPreset;
  const values = Object.values(obj);
  let found = values;
  if (null != tryItOutLastPreset) {
    found = values.filter((item) => item !== closure_0);
  }
  return found[Math.floor(Math, Math.random(Math) * found.length)];
};