// === Module 1977: utils ===

// Module 1977 (utils)
import Constants from "Constants" /* 1096 */;
import intl6 from "intl" /* 1126 */;
import NameplateRecord from "NameplateRecord" /* 1978 */;
import nameplates_constants from "nameplates/constants" /* 1981 */;
import _modDef1983 from "module_1983" /* 1983 */;
import size_mod from "module_2" /* 2 */;

const isNameplateRecord = NameplateRecord.isNameplateRecord;
const ThemeTypes = Constants.ThemeTypes;
let size = size_mod;
const result = size.fileFinishedImporting("modules/collectibles/nameplates/utils.tsx");

export const getNameplateData = function getNameplateData(nameplate) {
  let INVALID_NAMEPLATE_PALETTE;
  let tmp = null;
  if (null != nameplate) {
    const obj = { skuId: null, src: null, imgAlt: null, palette: INVALID_NAMEPLATE_PALETTE };
    ({ skuId: obj.skuId, asset: obj.src, label: obj.imgAlt } = nameplate);
    INVALID_NAMEPLATE_PALETTE = nameplates_constants.NAMEPLATE_PALETTES[nameplate.palette];
    if (INVALID_NAMEPLATE_PALETTE == null) {
      INVALID_NAMEPLATE_PALETTE = nameplates_constants.INVALID_NAMEPLATE_PALETTE;
    }
    tmp = obj;
  }
  return tmp;
};
export const getNameplateDataFromProductRecord = function getNameplateDataFromProductRecord(product) {
  let INVALID_NAMEPLATE_PALETTE;
  let palette;
  if (0 === product.items.length) {
    return null;
  } else {
    const first = product.items[0];
    let tmp4 = null;
    if (isNameplateRecord(first)) {
      let tmp = null;
      if (null != first) {
        const obj = { skuId: null, src: null, imgAlt: null, palette: INVALID_NAMEPLATE_PALETTE };
        ({ skuId: obj.skuId, asset: obj.src, label: obj.imgAlt, palette } = first);
        INVALID_NAMEPLATE_PALETTE = nameplates_constants.NAMEPLATE_PALETTES[palette];
        if (INVALID_NAMEPLATE_PALETTE == null) {
          INVALID_NAMEPLATE_PALETTE = nameplates_constants.INVALID_NAMEPLATE_PALETTE;
        }
        tmp = obj;
      }
      tmp4 = tmp;
    }
    return tmp4;
  }
};
export const getBackgroundGradientColors = function getBackgroundGradientColors(palette, arg1) {
  let tmp3 = palette.name !== nameplates_constants.INVALID_PALETTE_KEY;
  if (tmp3) {
    let tmp4 = palette.name !== nameplates_constants.CUSTOM_PALETTE_KEY;
    if (!tmp4) {
      const obj = /^#([0-9a-fA-F]{6})$/;
      let isMatch = obj.test(palette.darkBackground);
      if (isMatch) {
        const obj2 = /^#([0-9a-fA-F]{6})$/;
        isMatch = obj2.test(palette.lightBackground);
      }
      tmp4 = isMatch;
    }
    tmp3 = tmp4;
  }
  if (tmp3) {
    const tmp8 = arg1 === ThemeTypes.LIGHT ? palette.lightBackground : palette.darkBackground;
    const rect = { left: "" + tmp8 + "00", right: "" + tmp8 + "4D" };
    const _HermesInternal = HermesInternal;
    const _HermesInternal2 = HermesInternal;
    return rect;
  }
};
export const isValidPalette = function isValidPalette(name) {
  let tmp3 = name.name !== nameplates_constants.INVALID_PALETTE_KEY;
  if (tmp3) {
    let tmp4 = name.name !== nameplates_constants.CUSTOM_PALETTE_KEY;
    if (!tmp4) {
      const obj = /^#([0-9a-fA-F]{6})$/;
      let isMatch = obj.test(name.darkBackground);
      if (isMatch) {
        const obj2 = /^#([0-9a-fA-F]{6})$/;
        isMatch = obj2.test(name.lightBackground);
      }
      tmp4 = isMatch;
    }
    tmp3 = tmp4;
  }
  return tmp3;
};
export const getNameplatePalette = function getNameplatePalette(arg0) {
  let INVALID_NAMEPLATE_PALETTE = nameplates_constants.NAMEPLATE_PALETTES[arg0];
  if (INVALID_NAMEPLATE_PALETTE == null) {
    INVALID_NAMEPLATE_PALETTE = nameplates_constants.INVALID_NAMEPLATE_PALETTE;
  }
  return INVALID_NAMEPLATE_PALETTE;
};
export const parseFirstFrame = function parseFirstFrame(arg0) {
  const decoder = _modDef1983;
  size = decoder.decode(arg0);
  const obj = _modDef1983;
  const first = obj.toRGBA8(size)[0];
  const element = <canvas />;
  ({ width: obj2.width, height: obj2.height } = size);
  const context = element.getContext("2d");
  const uint8ClampedArray = new Uint8ClampedArray(first);
  const imageData = new globalThis.ImageData(uint8ClampedArray, size.width, size.height);
  context.putImageData(imageData, 0, 0);
  return element.toDataURL("image/png");
};
export const getNameplateSampleUsers = function getNameplateSampleUsers() {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let obj2;
  let obj3;
  let obj4;
  let obj5;
  let obj6;
  const obj = { mallow: obj2, phibi: obj3, locke: obj4, cherry: obj5, boom: obj6 };
  obj2 = { name: intl.string(intl6.t.SbKDHi), avatarSrc: "https://cdn.discordapp.com/assets/content/6dcafe1231097505560fd098f0e6698990f0082369d34c35d8c3ee9615709f84.png" };
  intl = intl6.intl;
  obj3 = { name: intl2.string(intl6.t["LMSo+F"]), avatarSrc: "https://cdn.discordapp.com/assets/content/17ae2ee3b8476755370ca9fa4d776d0bb811e50962409a7ae2dedd1b96c95eab.png" };
  intl2 = intl6.intl;
  obj4 = { name: intl3.string(intl6.t.g5Dumi), avatarSrc: "https://cdn.discordapp.com/assets/content/a82a9daadc5c7842f183c0f61966b07d3aeeea478b7c8a4b8af48334eb1ce15f.png" };
  intl3 = intl6.intl;
  obj5 = { name: intl4.string(intl6.t.p5Z3Ol), avatarSrc: "https://cdn.discordapp.com/assets/content/afc2e8306ce540dccac7da1ca0871684d0bf67e77967ff0f679be84a0a6e51b7.png" };
  intl4 = intl6.intl;
  obj6 = { name: intl5.string(intl6.t.ncslie), avatarSrc: "https://cdn.discordapp.com/assets/content/e264a2b0b8d963edd255c223abf1c0554f00a2f3a38640e509a38bc03d73b606.png" };
  intl5 = intl6.intl;
  return obj;
};