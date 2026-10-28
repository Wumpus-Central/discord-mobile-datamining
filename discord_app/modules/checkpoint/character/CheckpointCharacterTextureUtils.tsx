// discord_app/modules/checkpoint/character/CheckpointCharacterTextureUtils.tsx
import size from "../../../../_runtime/metro/00002__.js";

const CheckpointCharacterTextureType = { SLOT: "slot", TRAIT: "trait", LAYOUT: "layout", ALWAYS: "always" };
const re1 = /^tex_(aura|base_\d+|outfit)_/;
const re2 = /^tex_(headwear|shoes|wearable|face)_(\d+)_/;
const re3 = /^tex_face_([a-z]+)_/i;
let closure_4 = {
  tex_env_labNight_bg: ["Desktop"],
  tex_env_labNight_bg_mobileLandscape: ["MobileLandscape"],
  tex_env_labNight_bg_mobilePortrait: ["MobilePortrait"],
  tex_env_labNight_fgLeft: ["Desktop"],
  tex_env_labNight_fgRight: ["Desktop"],
  tex_env_labNight_mgBottom: ["Desktop"],
  tex_env_labNight_mgBottomMobile: ["MobilePortrait", "MobileLandscape"],
  tex_env_labNight_sky: ["Desktop"],
};
let closure_5 = {
  chill: 1,
  crybaby: 2,
  bored: 3,
  lockedin: 4,
  smitten: 5,
  confused: 6,
  anxious: 7,
  sparkle: 8,
  rage: 9,
  sus: 10,
  spellbound: 11,
  spooked: 12,
  freefall: 13,
  possessed: 14,
  awkward: 15,
};
const result = size.fileFinishedImporting("modules/checkpoint/character/CheckpointCharacterTextureUtils.tsx");

export { CheckpointCharacterTextureType };
export const getCheckpointCharacterTextureRole = function getCheckpointCharacterTextureRole(name) {
  if (re1.test(name)) {
    const obj2 = { type: obj.SLOT };
    return obj2;
  } else if (null != closure_4[name]) {
    const obj3 = { type: obj.LAYOUT, layouts: tmp2 };
    return obj3;
  } else {
    const match = re2.exec(name);
    if (null != match) {
      const _HermesInternal = HermesInternal;
      const obj4 = { type: obj.TRAIT, path: "" + match[1] + "ID", riveId: null };
      const _Number = Number;
      obj4.riveId = Number(match[2]);
      return obj4;
    } else {
      const match1 = re3.exec(name);
      let tmp6;
      if (null != match1) {
        tmp6 = closure_5[str.toLowerCase(str)];
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
};
