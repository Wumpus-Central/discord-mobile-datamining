// discord_app/modules/soundboard/native/utils/useSoundboardSoundLock.tsx
import util from "../../../../intl/index.native.tsx";
import PremiumUtilsDefault from "../../../../utils/PremiumUtils.tsx";
import ToastActionCreatorsDefault from "../../../toast/native/ToastActionCreators.tsx";
import openPremiumUpsellActionSheetDefault from "../../../premium/roadblocks/native/utils/openPremiumUpsellActionSheet.tsx";
import EntitlementFeatureNames from "../../../../../discord_common/js/shared/shared-constants/EntitlementFeatureNames.tsx";
import _modDef10070 from "../../../../../_runtime/metro/10070__.js";
import SoundboardSoundPreviewMenuExperiment2 from "../../experiments/SoundboardSoundPreviewMenuExperiment.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import UserStore from "../../../../stores/UserStore.tsx";

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
