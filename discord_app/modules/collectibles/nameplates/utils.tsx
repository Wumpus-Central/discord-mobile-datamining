// discord_app/modules/collectibles/nameplates/utils.tsx
import { isNameplateRecord } from "fromServer";
import { ThemeTypes } from "sum";
import { decodeImage } from "../../../../_runtime/01904_decodeImage.js";
import { getSystemLocale } from "../../../intl/index.native.tsx";
import { NAMEPLATE_PALETTES } from "constants.tsx";

const result = require("NAMEPLATE_PALETTES").fileFinishedImporting("modules/collectibles/nameplates/utils.tsx");

export const getNameplateData = function getNameplateData(nameplate) {
  let tmp = null;
  if (null != nameplate) {
    const obj = { skuId: null, src: null, imgAlt: null, palette: null };
    ({ skuId: obj[0], asset: obj[1], label: obj[2] } = nameplate);
    let INVALID_NAMEPLATE_PALETTE = NAMEPLATE_PALETTES /* NAMEPLATE_PALETTES */.NAMEPLATE_PALETTES[nameplate.palette];
    if (INVALID_NAMEPLATE_PALETTE == null) {
      INVALID_NAMEPLATE_PALETTE = tmp2(1902).INVALID_NAMEPLATE_PALETTE;
    }
    obj[3] = INVALID_NAMEPLATE_PALETTE;
    tmp = obj;
    tmp2 = require;
  }
  return tmp;
};
export const getNameplateDataFromProductRecord = function getNameplateDataFromProductRecord(product) {
  let palette;
  if (0 === product.items.length) {
    return null;
  } else {
    const first = product.items[0];
    let tmp4 = null;
    if (isNameplateRecord(first)) {
      let tmp = null;
      if (null != first) {
        const obj = { skuId: null, src: null, imgAlt: null, palette: null };
        ({ skuId: obj[0], asset: obj[1], label: obj[2], palette } = first);
        let INVALID_NAMEPLATE_PALETTE = NAMEPLATE_PALETTES /* NAMEPLATE_PALETTES */.NAMEPLATE_PALETTES[palette];
        if (INVALID_NAMEPLATE_PALETTE == null) {
          INVALID_NAMEPLATE_PALETTE = tmp2(1902).INVALID_NAMEPLATE_PALETTE;
        }
        obj[3] = INVALID_NAMEPLATE_PALETTE;
        tmp = obj;
        tmp2 = require;
      }
      tmp4 = tmp;
    }
    return tmp4;
  }
};
export const getBackgroundGradientColors = function getBackgroundGradientColors(palette, arg1) {
  let tmp3 = palette.name !== NAMEPLATE_PALETTES /* NAMEPLATE_PALETTES */.INVALID_PALETTE_KEY;
  if (tmp3) {
    let tmp4 = palette.name !== tmp(1902).CUSTOM_PALETTE_KEY;
    if (!tmp4) {
      let obj = /^#([0-9a-fA-F]{6})$/;
      let isMatch = obj.test(palette.darkBackground);
      if (isMatch) {
        isMatch = /^#([0-9a-fA-F]{6})$/.test(palette.lightBackground);
        const obj2 = /^#([0-9a-fA-F]{6})$/;
      }
      tmp4 = isMatch;
    }
    tmp3 = tmp4;
  }
  if (tmp3) {
    const tmp8 = arg1 === ThemeTypes.LIGHT ? palette.lightBackground : palette.darkBackground;
    obj = { left: null, right: null };
    const _HermesInternal = HermesInternal;
    obj[0] = "" + tmp8 + "00";
    const _HermesInternal2 = HermesInternal;
    obj[1] = "" + tmp8 + "4D";
    return obj;
  }
  tmp = require;
};
export const isValidPalette = function isValidPalette(name) {
  let tmp3 = name.name !== NAMEPLATE_PALETTES /* NAMEPLATE_PALETTES */.INVALID_PALETTE_KEY;
  if (tmp3) {
    let tmp4 = name.name !== NAMEPLATE_PALETTES /* NAMEPLATE_PALETTES */.CUSTOM_PALETTE_KEY;
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
  let INVALID_NAMEPLATE_PALETTE = NAMEPLATE_PALETTES /* NAMEPLATE_PALETTES */.NAMEPLATE_PALETTES[arg0];
  if (INVALID_NAMEPLATE_PALETTE == null) {
    INVALID_NAMEPLATE_PALETTE = NAMEPLATE_PALETTES /* NAMEPLATE_PALETTES */.INVALID_NAMEPLATE_PALETTE;
  }
  return INVALID_NAMEPLATE_PALETTE;
};
export const parseFirstFrame = function parseFirstFrame(arg0) {
  const size = decodeImage.decode(arg0);
  const obj = decodeImage;
  const element = <canvas />;
  ({ width: obj3.width, height: obj3.height } = size);
  const context = element.getContext("2d");
  const uint8ClampedArray = new Uint8ClampedArray(decodeImage.toRGBA8(size)[0]);
  const imageData = new globalThis.ImageData(uint8ClampedArray, size.width, size.height);
  context.putImageData(imageData, 0, 0);
  return element.toDataURL("image/png");
};
export const getNameplateSampleUsers = function getNameplateSampleUsers() {
  let obj = { mallow: null, phibi: null, locke: null, cherry: null, boom: null };
  obj = { name: null, avatarSrc: "https://cdn.discordapp.com/assets/content/6dcafe1231097505560fd098f0e6698990f0082369d34c35d8c3ee9615709f84.png" };
  const intl = getSystemLocale /* getSystemLocale */.intl;
  obj[0] = intl.string(getSystemLocale /* getSystemLocale */.t.SbKDHi);
  obj[0] = obj;
  obj = { name: null, avatarSrc: "https://cdn.discordapp.com/assets/content/17ae2ee3b8476755370ca9fa4d776d0bb811e50962409a7ae2dedd1b96c95eab.png" };
  const intl2 = getSystemLocale /* getSystemLocale */.intl;
  obj[0] = intl2.string(getSystemLocale /* getSystemLocale */.t["LMSo+F"]);
  obj[1] = obj;
  const obj1 = { name: null, avatarSrc: "https://cdn.discordapp.com/assets/content/a82a9daadc5c7842f183c0f61966b07d3aeeea478b7c8a4b8af48334eb1ce15f.png" };
  const intl3 = getSystemLocale /* getSystemLocale */.intl;
  obj1[0] = intl3.string(getSystemLocale /* getSystemLocale */.t.g5Dumi);
  obj[2] = obj1;
  const obj2 = { name: null, avatarSrc: "https://cdn.discordapp.com/assets/content/afc2e8306ce540dccac7da1ca0871684d0bf67e77967ff0f679be84a0a6e51b7.png" };
  const intl4 = getSystemLocale /* getSystemLocale */.intl;
  obj2[0] = intl4.string(getSystemLocale /* getSystemLocale */.t.p5Z3Ol);
  obj[3] = obj2;
  const obj3 = { name: null, avatarSrc: "https://cdn.discordapp.com/assets/content/e264a2b0b8d963edd255c223abf1c0554f00a2f3a38640e509a38bc03d73b606.png" };
  const intl5 = getSystemLocale /* getSystemLocale */.intl;
  obj3[0] = intl5.string(getSystemLocale /* getSystemLocale */.t.ncslie);
  obj[4] = obj3;
  return obj;
};