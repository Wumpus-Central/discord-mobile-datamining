// === Module 17222: useSoundboardSoundLock ===

// Module 17222 (useSoundboardSoundLock)
import util from "util" /* 1115 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4297 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4338 */;
import openPremiumUpsellActionSheetDefault from "openPremiumUpsellActionSheet" /* 7955 */;
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 7958 */;
import _modDef10201 from "module_10201" /* 10201 */;
import SoundboardSoundPreviewMenuExperiment2 from "SoundboardSoundPreviewMenuExperiment" /* 17223 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1372 */;

const require = globalThis.__r;

require = fn;
const DEFAULT_SOUND_GUILD_ID = fn(5098).DEFAULT_SOUND_GUILD_ID;
const size = fn(2);
let result = size.fileFinishedImporting("modules/soundboard/native/utils/useSoundboardSoundLock.tsx");

export const useSoundboardSoundLock = function useSoundboardSoundLock(sound, channel) {
  _require = sound;
  let BARTXV = dependencyMap;
  const items = [UserStore];
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
    const intl2 = tmp(1115).intl;
    BARTXV = tmp(1115).t.BARTXV;
    let stringResult = intl2.string(BARTXV);
  } else if (!sound.available) {
    let intl = tmp(1115).intl;
    stringResult = intl.string(tmp(1115).t.MDOXJR);
  }
};