// === Module 7374: useCustomJoinSound ===

// Module 7374 (useCustomJoinSound)
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1221 */;

const require = fn;
let closure_3 = fn(5014).CUSTOM_CALL_SOUND_GLOBAL_GUILD_ID;
const CustomSoundType = { GLOBAL: 0, [0]: "GLOBAL", GUILD: 1, [1]: "GUILD" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/soundboard/useCustomJoinSound.tsx");

export { CustomSoundType };
export const useCustomJoinSound = function useCustomJoinSound(arg0) {
  _require = arg0;
  const items = [UserSettingsProtoStore];
  return require("initialize").useStateFromStores(items, () => {
    let guilds;
    if (guilds != null) {
      guilds = guilds.guilds;
    }
    if (guilds == null) {
      guilds = {};
    }
    let joinSound;
    if (guilds[closure_0] != null) {
      joinSound = tmp.joinSound;
    }
    if (guilds[closure_3] != null) {
      joinSound = tmp3.joinSound;
    }
    let tmp4 = joinSound;
    if (joinSound == null) {
      tmp4 = joinSound;
    }
    if (null != tmp4) {
      const obj = {};
      const merged = Object.assign(tmp4);
      if (null != joinSound) {
        let GLOBAL = obj.GUILD;
      } else {
        GLOBAL = obj.GLOBAL;
      }
      obj.type = GLOBAL;
    }
  });
};
export const getCustomJoinSound = function getCustomJoinSound(arg0) {
  let guilds;
  if (guilds != null) {
    guilds = guilds.guilds;
  }
  if (guilds == null) {
    guilds = {};
  }
  let joinSound;
  if (guilds[arg0] != null) {
    joinSound = tmp.joinSound;
  }
  if (guilds[closure_3] != null) {
    joinSound = tmp3.joinSound;
  }
  let tmp4 = joinSound;
  if (joinSound == null) {
    tmp4 = joinSound;
  }
  if (null != tmp4) {
    const obj = {};
    const merged = Object.assign(tmp4);
    if (null != joinSound) {
      let GLOBAL = obj.GUILD;
    } else {
      GLOBAL = obj.GLOBAL;
    }
    obj.type = GLOBAL;
  }
};