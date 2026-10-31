// === Module 13612: CheckpointCharacterTextureUtils ===

// Module 13612 (CheckpointCharacterTextureUtils)
import _mod12 from "module_12" /* 12 */;
import getDevicePixelRatioDefault from "getDevicePixelRatio" /* 1892 */;
import CheckpointCharacterTextureAssets from "CheckpointCharacterTextureAssets" /* 13447 */;
import size from "module_2" /* 2 */;

const CheckpointCharacterTextureType = { SLOT: "slot", TRAIT: "trait", LAYOUT: "layout", ALWAYS: "always" };
const re4 = /^tex_(aura|base_\d+|outfit)_/;
const re5 = /^tex_(headwear|shoes|wearable|face)_(\d+)_/;
const re6 = /^tex_face_([a-z]+)_/i;
let closure_7 = { tex_env_labNight_bg: ["Desktop"], tex_env_labNight_bg_mobileLandscape: ["MobileLandscape"], tex_env_labNight_bg_mobilePortrait: ["MobilePortrait"], tex_env_labNight_fgLeft: ["Desktop"], tex_env_labNight_fgRight: ["Desktop"], tex_env_labNight_mgBottom: ["Desktop"], tex_env_labNight_mgBottomMobile: ["MobilePortrait", "MobileLandscape"], tex_env_labNight_sky: ["Desktop"] };
let closure_8 = { chill: 1, crybaby: 2, bored: 3, lockedin: 4, smitten: 5, confused: 6, anxious: 7, sparkle: 8, rage: 9, sus: 10, spellbound: 11, spooked: 12, freefall: 13, possessed: 14, awkward: 15 };
let closure_9 = { columns: 1, rows: 1 };
let obj2 = { columns: 5, rows: 5 };
let obj3 = { columns: 6, rows: 8 };
let closure_10 = { tex_aura_01_blossom: obj2, tex_aura_02_prism: obj2, tex_aura_03_shock: obj2, tex_aura_04_blaze: obj2, tex_aura_05_fated: obj2, tex_aura_06_luster: obj2, tex_aura_07_bubbly: obj2, tex_aura_08_spooky: obj2, tex_aura_09_cursed: obj2, tex_aura_10_magnetic: obj2, tex_aura_11_radioactive: obj2, tex_aura_12_elemental: obj2, tex_aura_13_shimmer: obj2, tex_aura_14_witchy: obj2, tex_wireframe_spritesheet: { columns: 12, rows: 6 }, tex_wearable_10_sword_spritesheet: { columns: 5, rows: 4 }, tex_wearable_11_deviantTail_smoke_active_spritesheet: obj3, tex_wearable_11_deviantTail_smoke_idle_spritesheet: obj3 };
let result = size.fileFinishedImporting("modules/checkpoint/character/CheckpointCharacterTextureUtils.tsx");

export { CheckpointCharacterTextureType };
export function getCheckpointCharacterTextureRole(name) {
  if (re4.test(name)) {
    const obj2 = { type: obj.SLOT };
    return obj2;
  } else if (null != closure_7[name]) {
    const obj3 = { type: obj.LAYOUT, layouts: tmp2 };
    return obj3;
  } else {
    const match = re5.exec(name);
    if (null != match) {
      const _HermesInternal = HermesInternal;
      const obj4 = { type: obj.TRAIT, path: "" + match[1] + "ID", riveId: null };
      const _Number = Number;
      obj4.riveId = Number(match[2]);
      return obj4;
    } else {
      const match1 = re6.exec(name);
      let tmp6;
      if (null != match1) {
        tmp6 = closure_8[str.toLowerCase(str)];
      }
      if (null != tmp6) {
        const obj5 = { type: obj.TRAIT, path: "faceID", riveId: tmp6 };
        obj = obj5;
      } else {
        obj = { type: null };
        obj.type = obj.ALWAYS;
      }
      return obj;
    }
  }
}
export function getCheckpointCharacterTextureScale(width, height) {
  const bound = Math.max(width, height);
  const result = 0.25 * Math.ceil(bound * getDevicePixelRatioDefault() / 1440 / 0.25);
  return _mod12.clamp(result, 1, 2);
}
export function getCheckpointCharacterTextureUrl(name, textureScale) {
  ({ url, width, widthAt1x } = CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET[name]);
  if (null == widthAt1x) {
    return url;
  } else {
    const result = textureScale * widthAt1x / width;
    if (result >= 1) {
      return url;
    } else {
      let tmp2 = closure_10[name];
      if (tmp2 == null) {
        tmp2 = closure_9;
      }
      ({ columns, rows } = tmp2);
      const _Math = Math;
      const _Math2 = Math;
      const result1 = columns * Math.round(width / columns * result);
      const _HermesInternal = HermesInternal;
      return "" + url + "?width=" + result1 + "&height=" + rows * Math.round(tmp / rows * result);
    }
  }
}