// discord_app/modules/soundboard/useCustomJoinSound.tsx
import handleConnectionClosedOrResumed from "../user_settings/UserSettingsProtoStore.tsx";
import { CUSTOM_CALL_SOUND_GLOBAL_GUILD_ID as closure_3 } from "SoundboardConstants.tsx";

const require = fn;
let obj = { GLOBAL: 0, [0]: "GLOBAL", GUILD: 1, [1]: "GUILD" };
const result = require("obj132").fileFinishedImporting("modules/soundboard/useCustomJoinSound.tsx");

export const CustomSoundType = obj;
export const useCustomJoinSound = function useCustomJoinSound(arg0) {
  const _require = arg0;
  const items = [closure_2];
  return require("../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => {
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
  let guilds;
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