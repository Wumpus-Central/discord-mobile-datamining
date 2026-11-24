// === Module 18069: useSoundboardSoundLock ===

// Module 18069 (useSoundboardSoundLock)
import util from "util" /* 1112 */;
import PremiumUtilsDefault from "PremiumUtils" /* 2173 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5599 */;
import BoostGemIcon from "BoostGemIcon" /* 9224 */;
import openPremiumUpsellActionSheetDefault from "openPremiumUpsellActionSheet" /* 9453 */;
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 9456 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1386 */;

const require = globalThis.__r;

require = fn;
const DEFAULT_SOUND_GUILD_ID = fn(6799).DEFAULT_SOUND_GUILD_ID;
const size = fn(2);
let result = size.fileFinishedImporting("modules/soundboard/native/utils/useSoundboardSoundLock.tsx");

export function useSoundboardSoundLock(sound, channel) {
  _require = sound;
  let BARTXV = dependencyMap;
  items = [UserStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj = require("initialize");
  const result = require("SoundboardUtils").canUseSoundboardSound(stateFromStores, sound, channel);
  let obj2 = require("SoundboardUtils");
  const tmp4 = !result;
  const result1 = PremiumUtilsDefault.canUseSoundboardEverywhere(stateFromStores);
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
    const obj4 = { isLocked: tmp4, lockedAccessibilityHint: undefined, onLockedPress: tmp8 };
    return obj4;
  } else if (tmp6) {
    const intl2 = tmp(1112).intl;
    BARTXV = tmp(1112).t.BARTXV;
    let stringResult = intl2.string(BARTXV);
  } else if (!sound.available) {
    let intl = tmp(1112).intl;
    stringResult = intl.string(tmp(1112).t.MDOXJR);
  }
}