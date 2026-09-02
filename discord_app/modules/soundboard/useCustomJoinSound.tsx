// === Module 6227: CustomSoundType ===

// Module 6227 (CustomSoundType)
import closure_2 from "handleConnectionClosedOrResumed" /* 1339 */;
import { CUSTOM_CALL_SOUND_GLOBAL_GUILD_ID as closure_3 } from "MAX_LENGTH_SOUND_NAME" /* 4967 */;

const require = arg1;
let obj = { GLOBAL: 0, [0]: "GLOBAL", GUILD: 1, [1]: "GUILD" };
const result = require("set").fileFinishedImporting("modules/soundboard/useCustomJoinSound.tsx");

export const CustomSoundType = obj;
export const useCustomJoinSound = function useCustomJoinSound(arg0) {
  const _require = arg0;
  const items = [closure_2];
  return _require(586).useStateFromStores(items, () => {
    let guilds = closure_1_2.settings.guilds;
    guilds = undefined;
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
    if (guilds[closure_1_3] != null) {
      joinSound = tmp3.joinSound;
    }
    let tmp4 = joinSound;
    if (joinSound == null) {
      tmp4 = joinSound;
    }
    if (null != tmp4) {
      obj = {};
      const merged = Object.assign(tmp4);
      if (null != joinSound) {
        let GLOBAL = closure_1_4.GUILD;
      } else {
        GLOBAL = closure_1_4.GLOBAL;
      }
      obj.type = GLOBAL;
    }
  });
};
export const getCustomJoinSound = function getCustomJoinSound(currentUser) {
  let guilds = settings.settings.guilds;
  guilds = undefined;
  if (guilds != null) {
    guilds = guilds.guilds;
  }
  if (guilds == null) {
    guilds = {};
  }
  let joinSound;
  if (guilds[currentUser] != null) {
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
    obj = {};
    const merged = Object.assign(tmp4);
    if (null != joinSound) {
      let GLOBAL = obj.GUILD;
    } else {
      GLOBAL = obj.GLOBAL;
    }
    obj.type = GLOBAL;
  }
};