// === Module 7484: useCustomJoinSound ===

// Module 7484 (useCustomJoinSound)
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1220 */;

const require = globalThis.__r;

const require = fn;
let closure_3 = fn(5099).CUSTOM_CALL_SOUND_GLOBAL_GUILD_ID;
const CustomSoundType = { GLOBAL: 0, [0]: "GLOBAL", GUILD: 1, [1]: "GUILD" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/soundboard/useCustomJoinSound.tsx");

export { CustomSoundType };
export const useCustomJoinSound = function useCustomJoinSound(arg0) {
  _require = arg0;
  const items = [UserSettingsProtoStore];
  return require("initialize").useStateFromStores(items, () => {
    const guilds = UserSettingsProtoStore.settings.guilds;
    let guilds1;
    if (guilds != null) {
      guilds1 = guilds.guilds;
    }
    if (guilds1 == null) {
      guilds1 = {};
    }
    let joinSound1;
    if (guilds1[closure_0] != null) {
      joinSound1 = tmp.joinSound;
    }
    if (guilds1[closure_3] != null) {
      const joinSound = tmp3.joinSound;
    }
    let tmp4 = joinSound1;
    if (joinSound1 == null) {
      tmp4 = joinSound;
    }
    if (null != tmp4) {
      const obj = {};
      const merged = Object.assign(tmp4);
      if (null != joinSound1) {
        let GLOBAL = obj.GUILD;
      } else {
        GLOBAL = obj.GLOBAL;
      }
      obj.type = GLOBAL;
    }
  });
};
export const getCustomJoinSound = function getCustomJoinSound(arg0) {
  const guilds = UserSettingsProtoStore.settings.guilds;
  let guilds1;
  if (guilds != null) {
    guilds1 = guilds.guilds;
  }
  if (guilds1 == null) {
    guilds1 = {};
  }
  let joinSound1;
  if (guilds1[arg0] != null) {
    joinSound1 = tmp.joinSound;
  }
  if (guilds1[closure_3] != null) {
    const joinSound = tmp3.joinSound;
  }
  let tmp4 = joinSound1;
  if (joinSound1 == null) {
    tmp4 = joinSound;
  }
  if (null != tmp4) {
    const obj = {};
    const merged = Object.assign(tmp4);
    if (null != joinSound1) {
      let GLOBAL = obj.GUILD;
    } else {
      GLOBAL = obj.GLOBAL;
    }
    obj.type = GLOBAL;
  }
};