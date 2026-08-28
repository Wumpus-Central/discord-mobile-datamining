// === Module 16585: useSoundboardSoundLock ===

// Module 16585 (useSoundboardSoundLock)
import getPremiumPlanItemDefault from "getPremiumPlanItem" /* 4108 */;
import closure_3 from "noop" /* 19 */;
import closure_4 from "mergeGuildAvatar" /* 1923 */;
import { DEFAULT_SOUND_GUILD_ID } from "MAX_LENGTH_SOUND_NAME" /* 4932 */;

const require = arg1;
let result = require("set").fileFinishedImporting("modules/soundboard/native/utils/useSoundboardSoundLock.tsx");

export const useSoundboardSoundLock = function useSoundboardSoundLock(sound, channel) {
  const _require = sound;
  let BARTXV = dependencyMap;
  let obj = _require(589);
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const result = _require(6153).canUseSoundboardSound(stateFromStores, sound, channel);
  const obj2 = _require(6153);
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
    const intl2 = tmp(1236).intl;
    BARTXV = tmp(1236).t.BARTXV;
    let stringResult = intl2.string(BARTXV);
  } else if (!sound.available) {
    let intl = tmp(1236).intl;
    stringResult = intl.string(tmp(1236).t.MDOXJR);
  }
};