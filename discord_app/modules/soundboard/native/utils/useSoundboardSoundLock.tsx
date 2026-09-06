// discord_app/modules/soundboard/native/utils/useSoundboardSoundLock.tsx
import getPremiumPlanItemDefault from "../../../../utils/PremiumUtils.tsx";
import closure_3 from "../../../../../_runtime/00019_noop.js";
import closure_4 from "../../../../stores/UserStore.tsx";
import { DEFAULT_SOUND_GUILD_ID } from "../../SoundboardConstants.tsx";
import { initialize } from "../../../../../discord_common/js/packages/flux/index.tsx";
import { hasPermissionToPlaySound } from "../../SoundboardUtils.tsx";

const require = arg1;
let result = require("set").fileFinishedImporting("modules/soundboard/native/utils/useSoundboardSoundLock.tsx");

export const useSoundboardSoundLock = function useSoundboardSoundLock(sound, channel) {
  const _require = sound;
  let BARTXV = dependencyMap;
  let obj = initialize;
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const result = require("../../SoundboardUtils.tsx").canUseSoundboardSound(stateFromStores, sound, channel);
  const obj2 = hasPermissionToPlaySound;
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
