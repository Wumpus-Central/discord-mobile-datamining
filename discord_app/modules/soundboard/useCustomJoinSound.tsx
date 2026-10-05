// === Module 6877: useCustomJoinSound ===

// Module 6877 (useCustomJoinSound)
import SoundboardConstants from "SoundboardConstants" /* 5682 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1231 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let closure_3 = SoundboardConstants.CUSTOM_CALL_SOUND_GLOBAL_GUILD_ID;
const CustomSoundType = { GLOBAL: 0, [0]: "GLOBAL", GUILD: 1, [1]: "GUILD" };
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let first;
  let tmp6;
  _require = arg0;
  const tmp = _require;
  let obj = require("react");
  const cResult = obj.c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserSettingsProtoStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function u() {
      let GLOBAL;
      let joinSound;
      const guilds = UserSettingsProtoStore.settings.guilds;
      let obj;
      if (guilds != null) {
        obj = guilds.guilds;
      }
      if (obj == null) {
        obj = {};
      }
      let joinSound1;
      if (obj[closure_0] != null) {
        joinSound1 = tmp.joinSound;
      }
      if (obj[closure_3] != null) {
        joinSound = tmp3.joinSound;
      }
      let tmp4 = joinSound1;
      if (joinSound1 == null) {
        tmp4 = joinSound;
      }
      let tmp5;
      if (null != tmp4) {
        const obj2 = { type: GLOBAL };
        const merged = Object.assign(tmp4);
        if (null != joinSound1) {
          GLOBAL = obj.GUILD;
        } else {
          GLOBAL = obj.GLOBAL;
        }
        tmp5 = obj2;
      }
      return tmp5;
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStores(first, tmp6);
}) : ((arg0) => {
  let closure_0;
  _require = arg0;
  let obj = require("get initialized");
  const items = [UserSettingsProtoStore];
  return obj.useStateFromStores(items, () => {
    let GLOBAL;
    let joinSound;
    const guilds = UserSettingsProtoStore.settings.guilds;
    let obj;
    if (guilds != null) {
      obj = guilds.guilds;
    }
    if (obj == null) {
      obj = {};
    }
    let joinSound1;
    if (obj[closure_0] != null) {
      joinSound1 = tmp.joinSound;
    }
    if (obj[closure_3] != null) {
      joinSound = tmp3.joinSound;
    }
    let tmp4 = joinSound1;
    if (joinSound1 == null) {
      tmp4 = joinSound;
    }
    let tmp5;
    if (null != tmp4) {
      const obj2 = { type: GLOBAL };
      const merged = Object.assign(tmp4);
      if (null != joinSound1) {
        GLOBAL = obj.GUILD;
      } else {
        GLOBAL = obj.GLOBAL;
      }
      tmp5 = obj2;
    }
    return tmp5;
  });
});
const result = size.fileFinishedImporting("modules/soundboard/useCustomJoinSound.tsx");

export { CustomSoundType };
export const useCustomJoinSound = tmp2;
export const getCustomJoinSound = function getCustomJoinSound(arg0) {
  let GLOBAL;
  let joinSound;
  const guilds = UserSettingsProtoStore.settings.guilds;
  let obj;
  if (guilds != null) {
    obj = guilds.guilds;
  }
  if (obj == null) {
    obj = {};
  }
  let joinSound1;
  if (obj[arg0] != null) {
    joinSound1 = tmp.joinSound;
  }
  if (obj[closure_3] != null) {
    joinSound = tmp3.joinSound;
  }
  let tmp4 = joinSound1;
  if (joinSound1 == null) {
    tmp4 = joinSound;
  }
  let tmp5;
  if (null != tmp4) {
    const obj2 = { type: GLOBAL };
    const merged = Object.assign(tmp4);
    if (null != joinSound1) {
      GLOBAL = obj.GUILD;
    } else {
      GLOBAL = obj.GLOBAL;
    }
    tmp5 = obj2;
  }
  return tmp5;
};