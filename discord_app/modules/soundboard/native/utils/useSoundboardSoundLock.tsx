// === Module 17073: useSoundboardSoundLock ===

// Module 17073 (useSoundboardSoundLock)
import util from "util" /* 1114 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4218 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4259 */;
import openPremiumUpsellActionSheetDefault from "openPremiumUpsellActionSheet" /* 7850 */;
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 7853 */;
import _modDef10070 from "module_10070" /* 10070 */;
import SoundboardSoundPreviewMenuExperiment2 from "SoundboardSoundPreviewMenuExperiment" /* 17074 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
const DEFAULT_SOUND_GUILD_ID = fn(5014).DEFAULT_SOUND_GUILD_ID;
const size = fn(2);
let result = size.fileFinishedImporting("modules/soundboard/native/utils/useSoundboardSoundLock.tsx");

export const useSoundboardSoundLock = function useSoundboardSoundLock(sound, channel) {
  _require = sound;
  let BARTXV = dependencyMap;
  let obj = require("initialize");
  const items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const result = require("SoundboardUtils").canUseSoundboardSound(stateFromStores, sound, channel);
  const obj2 = require("SoundboardUtils");
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
    obj = { isLocked: tmp4, lockedAccessibilityHint: undefined, onLockedPress: tmp8 };
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