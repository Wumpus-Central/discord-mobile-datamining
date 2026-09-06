// === Module 1886: utils ===

// Module 1886 (utils)
import Constants from "Constants" /* 1085 */;
import util from "util" /* 1114 */;
import NameplateRecord from "NameplateRecord" /* 1887 */;
import constants from "constants" /* 1890 */;
import decodeImageDefault from "decodeImage" /* 1892 */;
import size from "module_2" /* 2 */;

const isNameplateRecord = NameplateRecord.isNameplateRecord;
const ThemeTypes = Constants.ThemeTypes;
const result = size.fileFinishedImporting("modules/collectibles/nameplates/utils.tsx");

export const getNameplateData = function getNameplateData(nameplate) {
  let tmp = null;
  if (null != nameplate) {
    const obj = { skuId: null, src: null, imgAlt: null, palette: null };
    ({ skuId: obj.skuId, asset: obj.src, label: obj.imgAlt } = nameplate);
    let INVALID_NAMEPLATE_PALETTE = constants.NAMEPLATE_PALETTES[nameplate.palette];
    if (INVALID_NAMEPLATE_PALETTE == null) {
      INVALID_NAMEPLATE_PALETTE = tmp2(1890).INVALID_NAMEPLATE_PALETTE;
    }
    obj.palette = INVALID_NAMEPLATE_PALETTE;
    tmp = obj;
    tmp2 = require;
  }
  return tmp;
};
export const getNameplateDataFromProductRecord = function getNameplateDataFromProductRecord(product) {
  if (0 === product.items.length) {
    return null;
  } else {
    const first = product.items[0];
    let tmp4 = null;
    if (isNameplateRecord(first)) {
      let tmp = null;
      if (null != first) {
        const obj = { skuId: null, src: null, imgAlt: null, palette: null };
        ({ skuId: obj.skuId, asset: obj.src, label: obj.imgAlt, palette } = first);
        let INVALID_NAMEPLATE_PALETTE = constants.NAMEPLATE_PALETTES[palette];
        if (INVALID_NAMEPLATE_PALETTE == null) {
          INVALID_NAMEPLATE_PALETTE = tmp2(1890).INVALID_NAMEPLATE_PALETTE;
        }
        obj.palette = INVALID_NAMEPLATE_PALETTE;
        tmp = obj;
        tmp2 = require;
      }
      tmp4 = tmp;
    }
    return tmp4;
  }
};
export const getBackgroundGradientColors = function getBackgroundGradientColors(palette, arg1) {
  let tmp3 = palette.name !== constants.INVALID_PALETTE_KEY;
  if (tmp3) {
    let tmp4 = palette.name !== constants.CUSTOM_PALETTE_KEY;
    if (!tmp4) {
      let isMatch = /^#([0-9a-fA-F]{6})$/.test(palette.darkBackground);
      if (isMatch) {
        isMatch = /^#([0-9a-fA-F]{6})$/.test(palette.lightBackground);
        const obj2 = /^#([0-9a-fA-F]{6})$/;
      }
      tmp4 = isMatch;
      const obj = /^#([0-9a-fA-F]{6})$/;
    }
    tmp3 = tmp4;
  }
  if (tmp3) {
    const tmp8 = arg1 === ThemeTypes.LIGHT ? palette.lightBackground : palette.darkBackground;
    const rect = { left: null, right: null };
    const _HermesInternal = HermesInternal;
    rect.left = "" + tmp8 + "00";
    const _HermesInternal2 = HermesInternal;
    rect.right = "" + tmp8 + "4D";
    return rect;
  }
};
export const isValidPalette = function isValidPalette(name) {
  let tmp3 = name.name !== constants.INVALID_PALETTE_KEY;
  if (tmp3) {
    let tmp4 = name.name !== constants.CUSTOM_PALETTE_KEY;
    if (!tmp4) {
      let isMatch = /^#([0-9a-fA-F]{6})$/.test(name.darkBackground);
      if (isMatch) {
        isMatch = /^#([0-9a-fA-F]{6})$/.test(name.lightBackground);
        const obj2 = /^#([0-9a-fA-F]{6})$/;
      }
      tmp4 = isMatch;
      const obj = /^#([0-9a-fA-F]{6})$/;
    }
    tmp3 = tmp4;
  }
  return tmp3;
};
export const getNameplatePalette = function getNameplatePalette(arg0) {
  let INVALID_NAMEPLATE_PALETTE = constants.NAMEPLATE_PALETTES[arg0];
  if (INVALID_NAMEPLATE_PALETTE == null) {
    INVALID_NAMEPLATE_PALETTE = constants.INVALID_NAMEPLATE_PALETTE;
  }
  return INVALID_NAMEPLATE_PALETTE;
};
export const parseFirstFrame = function parseFirstFrame(arg0) {
  const decoder = decodeImageDefault;
  const size = decoder.decode(arg0);
  const element = <canvas />;
  ({ width: obj2.width, height: obj2.height } = size);
  const context = element.getContext("2d");
  const uint8ClampedArray = new Uint8ClampedArray(decodeImageDefault.toRGBA8(size)[0]);
  const imageData = new globalThis.ImageData(uint8ClampedArray, size.width, size.height);
  context.putImageData(imageData, 0, 0);
  return element.toDataURL("image/png");
};
export const getNameplateSampleUsers = function getNameplateSampleUsers() {
  let obj = { mallow: null, phibi: null, locke: null, cherry: null, boom: null };
  obj = { name: null, avatarSrc: "https://cdn.discordapp.com/assets/content/6dcafe1231097505560fd098f0e6698990f0082369d34c35d8c3ee9615709f84.png" };
  const intl = util.intl;
  obj.name = intl.string(util.t.SbKDHi);
  obj.mallow = obj;
  obj = { name: null, avatarSrc: "https://cdn.discordapp.com/assets/content/17ae2ee3b8476755370ca9fa4d776d0bb811e50962409a7ae2dedd1b96c95eab.png" };
  const intl2 = util.intl;
  obj.name = intl2.string(util.t["LMSo+F"]);
  obj.phibi = obj;
  const obj1 = { name: null, avatarSrc: "https://cdn.discordapp.com/assets/content/a82a9daadc5c7842f183c0f61966b07d3aeeea478b7c8a4b8af48334eb1ce15f.png" };
  const intl3 = util.intl;
  obj1.name = intl3.string(util.t.g5Dumi);
  obj.locke = obj1;
  const obj2 = { name: null, avatarSrc: "https://cdn.discordapp.com/assets/content/afc2e8306ce540dccac7da1ca0871684d0bf67e77967ff0f679be84a0a6e51b7.png" };
  const intl4 = util.intl;
  obj2.name = intl4.string(util.t.p5Z3Ol);
  obj.cherry = obj2;
  const obj3 = { name: null, avatarSrc: "https://cdn.discordapp.com/assets/content/e264a2b0b8d963edd255c223abf1c0554f00a2f3a38640e509a38bc03d73b606.png" };
  const intl5 = util.intl;
  obj3.name = intl5.string(util.t.ncslie);
  obj.boom = obj3;
  return obj;
};