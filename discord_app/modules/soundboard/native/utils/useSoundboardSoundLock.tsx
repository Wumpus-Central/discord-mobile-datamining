// === Module 17216: useSoundboardSoundLock ===

// Module 17216 (useSoundboardSoundLock)
import util from "util" /* 1126 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4528 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4568 */;
import _modDef4825 from "module_4825" /* 4825 */;
import openPremiumUpsellActionSheetDefault from "openPremiumUpsellActionSheet" /* 7480 */;
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 7483 */;
import SoundboardSoundPreviewMenuExperiment2 from "SoundboardSoundPreviewMenuExperiment" /* 17217 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1377 */;

const require = globalThis.__r;

require = fn;
const DEFAULT_SOUND_GUILD_ID = fn(5682).DEFAULT_SOUND_GUILD_ID;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/soundboard/native/utils/useSoundboardSoundLock.tsx");

export const useSoundboardSoundLock = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId, guild_id) => {
  _require = guildId;
  const cResult = require("c").c(19);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function u() {
      return currentUser.getCurrentUser();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  let obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(tmp4, tmp5);
  if (cResult[2] === guild_id) {
    if (cResult[3] === stateFromStores) {
      if (cResult[4] === guildId) {
        let tmp8 = cResult[5];
      }
      if (cResult[6] === guild_id) {
        if (cResult[7] === stateFromStores) {
          if (cResult[8] === guildId.guildId) {
            let tmp11 = cResult[9];
          }
          importDefault = tmp11;
          if (cResult[10] === tmp11) {
            if (cResult[11] === guildId.available) {
              let tmp15 = cResult[12];
            }
            if (tmp8) {
              if (cResult[15] === tmp10) {
                if (cResult[16] === undefined) {
                  if (cResult[17] === tmp15) {
                    let tmp21 = cResult[18];
                  }
                  return tmp21;
                }
              }
              let obj2 = { isLocked: tmp10, lockedAccessibilityHint: null, onLockedPress: null };
              class E {
                constructor(arg0) {
                  if (closure_1) {
                    tmp11 = closure_0;
                    tmp12 = closure_2;
                    SoundboardSoundPreviewMenuExperiment = closure_0(closure_2[8]).SoundboardSoundPreviewMenuExperiment;
                    tmp13 = closure_1;
                    tmp14 = closure_2;
                    tmp16 = closure_0;
                    tmp17 = closure_2;
                    tmp15 = closure_1(closure_2[9]);
                    SOUNDBOARD_EVERYWHERE = closure_0(closure_2[10]).EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE;
                    tmp18 = undefined;
                    if (SoundboardSoundPreviewMenuExperiment.getConfig({ location: "PremiumUpsellActionSheet" }).returnOnUpsellDismiss) {
                      tmp18 = guildId;
                    }
                    tmp19 = SOUNDBOARD_EVERYWHERE;
                    tmp20 = tmp18;
                    tmp15Result = tmp15(SOUNDBOARD_EVERYWHERE, undefined, undefined, tmp18);
                  } else {
                    tmp = closure_0;
                    if (!closure_0.available) {
                      tmp2 = closure_1;
                      tmp3 = closure_2;
                      obj = closure_1(closure_2[11]);
                      obj1 = { key: "DISABLED_SOUND_PRESSED", icon: null, content: null, toastDurationMs: 3000 };
                      tmp4 = closure_1;
                      tmp5 = closure_2;
                      obj1.icon = closure_1(closure_2[12]);
                      tmp6 = closure_0;
                      tmp7 = closure_2;
                      intl = closure_0(closure_2[13]).intl;
                      tmp8 = closure_0;
                      tmp9 = closure_2;
                      obj1.content = intl.string(closure_0(closure_2[13]).t.MDOXJR);
                      openResult = obj.open(obj1);
                    }
                  }
                  return;
                }
              }
              obj2.onLockedPress = tmp15;
              cResult[15] = tmp10;
              cResult[16] = undefined;
              cResult[17] = tmp15;
              cResult[18] = obj2;
              tmp21 = obj2;
            } else {
              if (!tmp11) {
                if (!guildId.available) {
                  const _Symbol = Symbol;
                  if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
                    let intl = tmp(1126).intl;
                    const stringResult = intl.string(tmp(1126).t.MDOXJR);
                    class E {
                      constructor(arg0) {
                        if (closure_1) {
                          tmp11 = closure_0;
                          tmp12 = closure_2;
                          SoundboardSoundPreviewMenuExperiment = closure_0(closure_2[8]).SoundboardSoundPreviewMenuExperiment;
                          tmp13 = closure_1;
                          tmp14 = closure_2;
                          tmp16 = closure_0;
                          tmp17 = closure_2;
                          tmp15 = closure_1(closure_2[9]);
                          SOUNDBOARD_EVERYWHERE = closure_0(closure_2[10]).EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE;
                          tmp18 = undefined;
                          if (SoundboardSoundPreviewMenuExperiment.getConfig({ location: "PremiumUpsellActionSheet" }).returnOnUpsellDismiss) {
                            tmp18 = guildId;
                          }
                          tmp19 = SOUNDBOARD_EVERYWHERE;
                          tmp20 = tmp18;
                          tmp15Result = tmp15(SOUNDBOARD_EVERYWHERE, undefined, undefined, tmp18);
                        } else {
                          tmp = closure_0;
                          if (!closure_0.available) {
                            tmp2 = closure_1;
                            tmp3 = closure_2;
                            obj = closure_1(closure_2[11]);
                            obj1 = { key: "DISABLED_SOUND_PRESSED", icon: null, content: null, toastDurationMs: 3000 };
                            tmp4 = closure_1;
                            tmp5 = closure_2;
                            obj1.icon = closure_1(closure_2[12]);
                            tmp6 = closure_0;
                            tmp7 = closure_2;
                            intl = closure_0(closure_2[13]).intl;
                            tmp8 = closure_0;
                            tmp9 = closure_2;
                            obj1.content = intl.string(closure_0(closure_2[13]).t.MDOXJR);
                            openResult = obj.open(obj1);
                          }
                        }
                        return;
                      }
                    }
                    cResult[14] = stringResult;
                  }
                  class E {
                    constructor(arg0) {
                      if (closure_1) {
                        tmp11 = closure_0;
                        tmp12 = closure_2;
                        SoundboardSoundPreviewMenuExperiment = closure_0(closure_2[8]).SoundboardSoundPreviewMenuExperiment;
                        tmp13 = closure_1;
                        tmp14 = closure_2;
                        tmp16 = closure_0;
                        tmp17 = closure_2;
                        tmp15 = closure_1(closure_2[9]);
                        SOUNDBOARD_EVERYWHERE = closure_0(closure_2[10]).EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE;
                        tmp18 = undefined;
                        if (SoundboardSoundPreviewMenuExperiment.getConfig({ location: "PremiumUpsellActionSheet" }).returnOnUpsellDismiss) {
                          tmp18 = guildId;
                        }
                        tmp19 = SOUNDBOARD_EVERYWHERE;
                        tmp20 = tmp18;
                        tmp15Result = tmp15(SOUNDBOARD_EVERYWHERE, undefined, undefined, tmp18);
                      } else {
                        tmp = closure_0;
                        if (!closure_0.available) {
                          tmp2 = closure_1;
                          tmp3 = closure_2;
                          obj = closure_1(closure_2[11]);
                          obj1 = { key: "DISABLED_SOUND_PRESSED", icon: null, content: null, toastDurationMs: 3000 };
                          tmp4 = closure_1;
                          tmp5 = closure_2;
                          obj1.icon = closure_1(closure_2[12]);
                          tmp6 = closure_0;
                          tmp7 = closure_2;
                          intl = closure_0(closure_2[13]).intl;
                          tmp8 = closure_0;
                          tmp9 = closure_2;
                          obj1.content = intl.string(closure_0(closure_2[13]).t.MDOXJR);
                          openResult = obj.open(obj1);
                        }
                      }
                      return;
                    }
                  }
                }
              }
              const _Symbol2 = Symbol;
              class E {
                constructor(arg0) {
                  if (closure_1) {
                    tmp11 = closure_0;
                    tmp12 = closure_2;
                    SoundboardSoundPreviewMenuExperiment = closure_0(closure_2[8]).SoundboardSoundPreviewMenuExperiment;
                    tmp13 = closure_1;
                    tmp14 = closure_2;
                    tmp16 = closure_0;
                    tmp17 = closure_2;
                    tmp15 = closure_1(closure_2[9]);
                    SOUNDBOARD_EVERYWHERE = closure_0(closure_2[10]).EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE;
                    tmp18 = undefined;
                    if (SoundboardSoundPreviewMenuExperiment.getConfig({ location: "PremiumUpsellActionSheet" }).returnOnUpsellDismiss) {
                      tmp18 = guildId;
                    }
                    tmp19 = SOUNDBOARD_EVERYWHERE;
                    tmp20 = tmp18;
                    tmp15Result = tmp15(SOUNDBOARD_EVERYWHERE, undefined, undefined, tmp18);
                  } else {
                    tmp = closure_0;
                    if (!closure_0.available) {
                      tmp2 = closure_1;
                      tmp3 = closure_2;
                      obj = closure_1(closure_2[11]);
                      obj1 = { key: "DISABLED_SOUND_PRESSED", icon: null, content: null, toastDurationMs: 3000 };
                      tmp4 = closure_1;
                      tmp5 = closure_2;
                      obj1.icon = closure_1(closure_2[12]);
                      tmp6 = closure_0;
                      tmp7 = closure_2;
                      intl = closure_0(closure_2[13]).intl;
                      tmp8 = closure_0;
                      tmp9 = closure_2;
                      obj1.content = intl.string(closure_0(closure_2[13]).t.MDOXJR);
                      openResult = obj.open(obj1);
                    }
                  }
                  return;
                }
              }
            }
          }
          class E {
            constructor(arg0) {
              if (closure_1) {
                tmp11 = closure_0;
                tmp12 = closure_2;
                SoundboardSoundPreviewMenuExperiment = closure_0(closure_2[8]).SoundboardSoundPreviewMenuExperiment;
                tmp13 = closure_1;
                tmp14 = closure_2;
                tmp16 = closure_0;
                tmp17 = closure_2;
                tmp15 = closure_1(closure_2[9]);
                SOUNDBOARD_EVERYWHERE = closure_0(closure_2[10]).EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE;
                tmp18 = undefined;
                if (SoundboardSoundPreviewMenuExperiment.getConfig({ location: "PremiumUpsellActionSheet" }).returnOnUpsellDismiss) {
                  tmp18 = guildId;
                }
                tmp19 = SOUNDBOARD_EVERYWHERE;
                tmp20 = tmp18;
                tmp15Result = tmp15(SOUNDBOARD_EVERYWHERE, undefined, undefined, tmp18);
              } else {
                tmp = closure_0;
                if (!closure_0.available) {
                  tmp2 = closure_1;
                  tmp3 = closure_2;
                  obj = closure_1(closure_2[11]);
                  obj1 = { key: "DISABLED_SOUND_PRESSED", icon: null, content: null, toastDurationMs: 3000 };
                  tmp4 = closure_1;
                  tmp5 = closure_2;
                  obj1.icon = closure_1(closure_2[12]);
                  tmp6 = closure_0;
                  tmp7 = closure_2;
                  intl = closure_0(closure_2[13]).intl;
                  tmp8 = closure_0;
                  tmp9 = closure_2;
                  obj1.content = intl.string(closure_0(closure_2[13]).t.MDOXJR);
                  openResult = obj.open(obj1);
                }
              }
              return;
            }
          }
          cResult[10] = tmp11;
          cResult[11] = guildId.available;
          cResult[12] = E;
          tmp15 = E;
        }
      }
      const result = PremiumUtilsDefault.canUseSoundboardEverywhere(stateFromStores);
      let tmp13 = !result;
      if (!result) {
        tmp13 = guildId.guildId !== guild_id.guild_id;
      }
      if (tmp13) {
        tmp13 = guildId.guildId !== DEFAULT_SOUND_GUILD_ID;
      }
      cResult[6] = guild_id;
      cResult[7] = stateFromStores;
      cResult[8] = guildId.guildId;
      cResult[9] = tmp13;
      tmp11 = tmp13;
    }
  }
  const tmpResult = require("initialize");
  const result1 = require("SoundboardUtils").canUseSoundboardSound(stateFromStores, guildId, guild_id);
  cResult[2] = guild_id;
  cResult[3] = stateFromStores;
  cResult[4] = guildId;
  cResult[5] = result1;
  tmp8 = result1;
  const tmpResult2 = require("SoundboardUtils");
}) : ((guildId, guild_id) => {
  _require = guildId;
  let BARTXV = dependencyMap;
  const items = [UserStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj = require("initialize");
  const result = require("SoundboardUtils").canUseSoundboardSound(stateFromStores, guildId, guild_id);
  let obj2 = require("SoundboardUtils");
  const tmp4 = !result;
  const result1 = PremiumUtilsDefault.canUseSoundboardEverywhere(stateFromStores);
  let tmp6 = !result1;
  if (!result1) {
    tmp6 = guildId.guildId !== guild_id.guild_id;
  }
  if (tmp6) {
    tmp6 = guildId.guildId !== DEFAULT_SOUND_GUILD_ID;
  }
  importDefault = tmp6;
  const items1 = [tmp6, guildId.available];
  if (result) {
    const obj4 = { isLocked: tmp4, lockedAccessibilityHint: undefined, onLockedPress: tmp8 };
    return obj4;
  } else if (tmp6) {
    const intl2 = tmp(1126).intl;
    BARTXV = tmp(1126).t.BARTXV;
    let stringResult = intl2.string(BARTXV);
  } else if (!guildId.available) {
    let intl = tmp(1126).intl;
    stringResult = intl.string(tmp(1126).t.MDOXJR);
  }
});