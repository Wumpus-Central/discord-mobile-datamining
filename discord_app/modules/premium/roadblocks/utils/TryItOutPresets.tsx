// === Module 17141: TryItOutPresets ===

// Module 17141 (TryItOutPresets)
import util from "util" /* 1113 */;
import DisplayNameFont from "DisplayNameFont" /* 1398 */;
import DisplayNameEffect from "DisplayNameEffect" /* 1399 */;
import _mod17144 from "module_17144" /* 17144 */;
import _mod17145 from "module_17145" /* 17145 */;
import _mod17148 from "module_17148" /* 17148 */;
import _mod17149 from "module_17149" /* 17149 */;
import _mod17152 from "module_17152" /* 17152 */;
import _mod17153 from "module_17153" /* 17153 */;
import _mod17156 from "module_17156" /* 17156 */;
import _mod17157 from "module_17157" /* 17157 */;
import _mod17160 from "module_17160" /* 17160 */;
import _mod17161 from "module_17161" /* 17161 */;
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
    return require("module_17142").default;
  },
  getPreviewThumbnailSrc() {
    return require("module_17143").default;
  },
  getBannerSrc(arg0) {
    if (arg0) {
      let _default = _mod17144.default;
    } else {
      _default = _mod17145.default;
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
  return require("module_17146").default;
};
obj5.getPreviewThumbnailSrc = function getPreviewThumbnailSrc() {
  return require("module_17147").default;
};
obj5.getBannerSrc = function getBannerSrc(arg0) {
  if (arg0) {
    let _default = _mod17148.default;
  } else {
    _default = _mod17149.default;
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
  return require("module_17150").default;
};
obj7.getPreviewThumbnailSrc = function getPreviewThumbnailSrc() {
  return require("module_17151").default;
};
obj7.getBannerSrc = function getBannerSrc(arg0) {
  if (arg0) {
    let _default = _mod17152.default;
  } else {
    _default = _mod17153.default;
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
  return require("module_17154").default;
};
obj9.getPreviewThumbnailSrc = function getPreviewThumbnailSrc() {
  return require("module_17155").default;
};
obj9.getBannerSrc = function getBannerSrc(arg0) {
  if (arg0) {
    let _default = _mod17156.default;
  } else {
    _default = _mod17157.default;
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
  return require("module_17158").default;
};
obj11.getPreviewThumbnailSrc = function getPreviewThumbnailSrc() {
  return require("module_17159").default;
};
obj11.getBannerSrc = function getBannerSrc(arg0) {
  if (arg0) {
    let _default = _mod17160.default;
  } else {
    _default = _mod17161.default;
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
export function getTryItOutPresetConfig(randomTryItOutPreset) {
  return obj2[randomTryItOutPreset];
}
export function getRandomTryItOutPreset(tryItOutLastPreset) {
  closure_0 = tryItOutLastPreset;
  const values = Object.values(obj);
  let found = values;
  if (null != tryItOutLastPreset) {
    found = values.filter((item) => item !== closure_0);
  }
  return found[Math.floor(Math, Math.random(Math) * found.length)];
}