// === Module 15606: TryItOutPresets ===

// Module 15606 (TryItOutPresets)
import util from "util" /* 1128 */;
import DisplayNameEffect from "DisplayNameEffect" /* 1411 */;
import DisplayNameFont from "DisplayNameFont" /* 1412 */;
import _mod15609 from "module_15609" /* 15609 */;
import _mod15610 from "module_15610" /* 15610 */;
import _mod15613 from "module_15613" /* 15613 */;
import _mod15614 from "module_15614" /* 15614 */;
import _mod15617 from "module_15617" /* 15617 */;
import _mod15618 from "module_15618" /* 15618 */;
import _mod15621 from "module_15621" /* 15621 */;
import _mod15622 from "module_15622" /* 15622 */;
import _mod15625 from "module_15625" /* 15625 */;
import _mod15626 from "module_15626" /* 15626 */;
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
    return require("module_15607").default;
  },
  getPreviewThumbnailSrc() {
    return require("module_15608").default;
  },
  getBannerSrc(arg0) {
    if (arg0) {
      let _default = _mod15609.default;
    } else {
      _default = _mod15610.default;
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
  return require("module_15611").default;
};
obj5.getPreviewThumbnailSrc = function getPreviewThumbnailSrc() {
  return require("module_15612").default;
};
obj5.getBannerSrc = function getBannerSrc(arg0) {
  if (arg0) {
    let _default = _mod15613.default;
  } else {
    _default = _mod15614.default;
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
  return require("module_15615").default;
};
obj7.getPreviewThumbnailSrc = function getPreviewThumbnailSrc() {
  return require("module_15616").default;
};
obj7.getBannerSrc = function getBannerSrc(arg0) {
  if (arg0) {
    let _default = _mod15617.default;
  } else {
    _default = _mod15618.default;
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
  return require("module_15619").default;
};
obj9.getPreviewThumbnailSrc = function getPreviewThumbnailSrc() {
  return require("module_15620").default;
};
obj9.getBannerSrc = function getBannerSrc(arg0) {
  if (arg0) {
    let _default = _mod15621.default;
  } else {
    _default = _mod15622.default;
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
  return require("module_15623").default;
};
obj11.getPreviewThumbnailSrc = function getPreviewThumbnailSrc() {
  return require("module_15624").default;
};
obj11.getBannerSrc = function getBannerSrc(arg0) {
  if (arg0) {
    let _default = _mod15625.default;
  } else {
    _default = _mod15626.default;
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