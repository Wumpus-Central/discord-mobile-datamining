// === Module 17073: useSoundboardSoundLock ===

// Module 17073 (useSoundboardSoundLock)
import getPremiumPlanItemDefault from "getPremiumPlanItem" /* 4218 */;
import closure_3 from "noop" /* 19 */;
import closure_4 from "mergeGuildAvatar" /* 1371 */;
import { DEFAULT_SOUND_GUILD_ID } from "MAX_LENGTH_SOUND_NAME" /* 5014 */;

const require = arg1;
let result = require("set").fileFinishedImporting("modules/soundboard/native/utils/useSoundboardSoundLock.tsx");

export const useSoundboardSoundLock = function useSoundboardSoundLock(sound, channel) {
  const _require = sound;
  let BARTXV = dependencyMap;
  let obj = _require(504);
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const result = _require(7344).canUseSoundboardSound(stateFromStores, sound, channel);
  const obj2 = _require(7344);
  const tmp4 = !result;
  const result1 = getPremiumPlanItemDefault.canUseSoundboardEverywhere(stateFromStores);
  let tmp6 = !result1;
  if (!result1) {
    tmp6 = sound.guildId !== channel.guild_id;
  }
  if (tmp6) {
    tmp6 = sound.guildId !== DEFAULT_SOUND_GUILD_ID;
  }
  importDefault = tmp6;
  const items1 = [tmp6, sound.available];
  if (result) {
    obj = { isLocked: null, lockedAccessibilityHint: null, onLockedPress: null };
    obj[0] = tmp4;
    obj[1] = undefined;
    obj[2] = tmp8;
    return obj;
  } else if (tmp6) {
    const intl2 = tmp(1114).intl;
    BARTXV = tmp(1114).t.BARTXV;
    let stringResult = intl2.string(BARTXV);
  } else if (!sound.available) {
    let intl = tmp(1114).intl;
    stringResult = intl.string(tmp(1114).t.MDOXJR);
  }
};