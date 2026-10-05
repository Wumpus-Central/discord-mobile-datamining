// discord_app/modules/soundboard/native/utils/useSoundboardSoundLock.tsx
import intl3 from "../../../../intl/index.native.tsx";
import PremiumUtilsDefault from "../../../../utils/PremiumUtils.tsx";
import ToastActionCreatorsDefault from "../../../toast/native/ToastActionCreators.tsx";
import AssetRegistryDefault from "../../../../../_runtime/04825_AssetRegistry.js";
import SoundboardConstants from "../../SoundboardConstants.tsx";
import openPremiumUpsellActionSheetDefault from "../../../premium/roadblocks/native/utils/openPremiumUpsellActionSheet.tsx";
import EntitlementFeatureNames from "../../../../../discord_common/js/shared/shared-constants/EntitlementFeatureNames.tsx";
import SoundboardSoundPreviewMenuExperiment2 from "../../experiments/SoundboardSoundPreviewMenuExperiment.tsx";
import react from "../../../../../_runtime/00019_react.js";
import UserStore from "../../../../stores/UserStore.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, importDefault;

const DEFAULT_SOUND_GUILD_ID = SoundboardConstants.DEFAULT_SOUND_GUILD_ID;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guildId, guild_id) => {
      let closure_1;
      let currentUser;
      let tmp17;
      let tmp4;
      let tmp5;
      _require = guildId;
      let obj = require("react");
      const cResult = obj.c(19);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserStore];
        const fn = function u() {
          return currentUser.getCurrentUser();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp5 = fn;
        tmp4 = items;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const tmpResult = require("get initialized");
      const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
      if (cResult[2] === guild_id) {
        if (cResult[3] === stateFromStores) {
          let tmp8;
          if (cResult[4] === guildId) {
            tmp8 = cResult[5];
          }
          if (cResult[6] === guild_id) {
            if (cResult[7] === stateFromStores) {
              let tmp11;
              if (cResult[8] === guildId.guildId) {
                tmp11 = cResult[9];
              }
              importDefault = tmp11;
              if (cResult[10] === tmp11) {
                let tmp15;
                if (cResult[11] === guildId.available) {
                  tmp15 = cResult[12];
                }
                let tmp16;
                if (!tmp8) {
                  if (tmp11) {
                    const _Symbol2 = Symbol;
                    if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
                      const intl2 = tmp(1126).intl;
                      const stringResult = intl2.string(require("intl").t.BARTXV);
                      class E {
                        constructor(onDismiss) {
                          let intl;
                          if (closure_1) {
                            const SoundboardSoundPreviewMenuExperiment =
                              SoundboardSoundPreviewMenuExperiment2.SoundboardSoundPreviewMenuExperiment;
                            const returnOnUpsellDismiss = SoundboardSoundPreviewMenuExperiment.getConfig({
                              location: "PremiumUpsellActionSheet",
                            }).returnOnUpsellDismiss;
                            const tmp17 = openPremiumUpsellActionSheetDefault;
                            const SOUNDBOARD_EVERYWHERE =
                              EntitlementFeatureNames.EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE;
                            let tmp20;
                            if (returnOnUpsellDismiss) {
                              tmp20 = onDismiss;
                            }
                            tmp17(SOUNDBOARD_EVERYWHERE, undefined, undefined, tmp20);
                          } else if (!guildId.available) {
                            const obj = {
                              key: "DISABLED_SOUND_PRESSED",
                              icon: AssetRegistryDefault,
                              content: intl.string(intl3.t.MDOXJR),
                              toastDurationMs: 3000,
                            };
                            const open = ToastActionCreatorsDefault.open;
                            ToastActionCreatorsDefault;
                            intl = intl3.intl;
                            open(obj);
                          }
                        }
                      }
                      cResult[13] = stringResult;
                      let tmp20 = stringResult;
                    } else {
                      tmp20 = cResult[13];
                    }
                    class E {
                      constructor(onDismiss) {
                        let intl;
                        if (closure_1) {
                          const SoundboardSoundPreviewMenuExperiment =
                            SoundboardSoundPreviewMenuExperiment2.SoundboardSoundPreviewMenuExperiment;
                          const returnOnUpsellDismiss = SoundboardSoundPreviewMenuExperiment.getConfig({
                            location: "PremiumUpsellActionSheet",
                          }).returnOnUpsellDismiss;
                          const tmp17 = openPremiumUpsellActionSheetDefault;
                          const SOUNDBOARD_EVERYWHERE =
                            EntitlementFeatureNames.EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE;
                          let tmp20;
                          if (returnOnUpsellDismiss) {
                            tmp20 = onDismiss;
                          }
                          tmp17(SOUNDBOARD_EVERYWHERE, undefined, undefined, tmp20);
                        } else if (!guildId.available) {
                          const obj = {
                            key: "DISABLED_SOUND_PRESSED",
                            icon: AssetRegistryDefault,
                            content: intl.string(intl3.t.MDOXJR),
                            toastDurationMs: 3000,
                          };
                          const open = ToastActionCreatorsDefault.open;
                          ToastActionCreatorsDefault;
                          intl = intl3.intl;
                          open(obj);
                        }
                      }
                    }
                  } else if (!guildId.available) {
                    const _Symbol = Symbol;
                    if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
                      let intl = tmp(1126).intl;
                      const stringResult1 = intl.string(require("intl").t.MDOXJR);
                      class E {
                        constructor(onDismiss) {
                          let intl;
                          if (closure_1) {
                            const SoundboardSoundPreviewMenuExperiment =
                              SoundboardSoundPreviewMenuExperiment2.SoundboardSoundPreviewMenuExperiment;
                            const returnOnUpsellDismiss = SoundboardSoundPreviewMenuExperiment.getConfig({
                              location: "PremiumUpsellActionSheet",
                            }).returnOnUpsellDismiss;
                            const tmp17 = openPremiumUpsellActionSheetDefault;
                            const SOUNDBOARD_EVERYWHERE =
                              EntitlementFeatureNames.EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE;
                            let tmp20;
                            if (returnOnUpsellDismiss) {
                              tmp20 = onDismiss;
                            }
                            tmp17(SOUNDBOARD_EVERYWHERE, undefined, undefined, tmp20);
                          } else if (!guildId.available) {
                            const obj = {
                              key: "DISABLED_SOUND_PRESSED",
                              icon: AssetRegistryDefault,
                              content: intl.string(intl3.t.MDOXJR),
                              toastDurationMs: 3000,
                            };
                            const open = ToastActionCreatorsDefault.open;
                            ToastActionCreatorsDefault;
                            intl = intl3.intl;
                            open(obj);
                          }
                        }
                      }
                      cResult[14] = stringResult1;
                    }
                    class E {
                      constructor(onDismiss) {
                        let intl;
                        if (closure_1) {
                          const SoundboardSoundPreviewMenuExperiment =
                            SoundboardSoundPreviewMenuExperiment2.SoundboardSoundPreviewMenuExperiment;
                          const returnOnUpsellDismiss = SoundboardSoundPreviewMenuExperiment.getConfig({
                            location: "PremiumUpsellActionSheet",
                          }).returnOnUpsellDismiss;
                          const tmp17 = openPremiumUpsellActionSheetDefault;
                          const SOUNDBOARD_EVERYWHERE =
                            EntitlementFeatureNames.EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE;
                          let tmp20;
                          if (returnOnUpsellDismiss) {
                            tmp20 = onDismiss;
                          }
                          tmp17(SOUNDBOARD_EVERYWHERE, undefined, undefined, tmp20);
                        } else if (!guildId.available) {
                          const obj = {
                            key: "DISABLED_SOUND_PRESSED",
                            icon: AssetRegistryDefault,
                            content: intl.string(intl3.t.MDOXJR),
                            toastDurationMs: 3000,
                          };
                          const open = ToastActionCreatorsDefault.open;
                          ToastActionCreatorsDefault;
                          intl = intl3.intl;
                          open(obj);
                        }
                      }
                    }
                  }
                  tmp16 = tmp17;
                }
                class E {
                  constructor(onDismiss) {
                    let intl;
                    if (closure_1) {
                      const SoundboardSoundPreviewMenuExperiment =
                        SoundboardSoundPreviewMenuExperiment2.SoundboardSoundPreviewMenuExperiment;
                      const returnOnUpsellDismiss = SoundboardSoundPreviewMenuExperiment.getConfig({
                        location: "PremiumUpsellActionSheet",
                      }).returnOnUpsellDismiss;
                      const tmp17 = openPremiumUpsellActionSheetDefault;
                      const SOUNDBOARD_EVERYWHERE =
                        EntitlementFeatureNames.EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE;
                      let tmp20;
                      if (returnOnUpsellDismiss) {
                        tmp20 = onDismiss;
                      }
                      tmp17(SOUNDBOARD_EVERYWHERE, undefined, undefined, tmp20);
                    } else if (!guildId.available) {
                      const obj = {
                        key: "DISABLED_SOUND_PRESSED",
                        icon: AssetRegistryDefault,
                        content: intl.string(intl3.t.MDOXJR),
                        toastDurationMs: 3000,
                      };
                      const open = ToastActionCreatorsDefault.open;
                      ToastActionCreatorsDefault;
                      intl = intl3.intl;
                      open(obj);
                    }
                  }
                }
                const obj2 = { isLocked: !tmp8, lockedAccessibilityHint: tmp16, onLockedPress: tmp15 };
                cResult[15] = !tmp8;
                cResult[16] = tmp16;
                cResult[17] = tmp15;
                cResult[18] = obj2;
              }
              class E {
                constructor(onDismiss) {
                  let intl;
                  if (closure_1) {
                    const SoundboardSoundPreviewMenuExperiment =
                      SoundboardSoundPreviewMenuExperiment2.SoundboardSoundPreviewMenuExperiment;
                    const returnOnUpsellDismiss = SoundboardSoundPreviewMenuExperiment.getConfig({
                      location: "PremiumUpsellActionSheet",
                    }).returnOnUpsellDismiss;
                    const tmp17 = openPremiumUpsellActionSheetDefault;
                    const SOUNDBOARD_EVERYWHERE = EntitlementFeatureNames.EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE;
                    let tmp20;
                    if (returnOnUpsellDismiss) {
                      tmp20 = onDismiss;
                    }
                    tmp17(SOUNDBOARD_EVERYWHERE, undefined, undefined, tmp20);
                  } else if (!guildId.available) {
                    const obj = {
                      key: "DISABLED_SOUND_PRESSED",
                      icon: AssetRegistryDefault,
                      content: intl.string(intl3.t.MDOXJR),
                      toastDurationMs: 3000,
                    };
                    const open = ToastActionCreatorsDefault.open;
                    ToastActionCreatorsDefault;
                    intl = intl3.intl;
                    open(obj);
                  }
                }
              }
              cResult[10] = tmp11;
              cResult[11] = guildId.available;
              cResult[12] = E;
              tmp15 = E;
            }
          }
          const obj4 = PremiumUtilsDefault;
          const result = obj4.canUseSoundboardEverywhere(stateFromStores);
          cResult[6] = guild_id;
          cResult[7] = stateFromStores;
          cResult[8] = guildId.guildId;
          cResult[9] = !result && guildId.guildId !== guild_id.guild_id && guildId.guildId !== DEFAULT_SOUND_GUILD_ID;
          tmp11 = tmp13;
        }
      }
      const tmpResult2 = require("SoundboardUtils");
      const result1 = tmpResult2.canUseSoundboardSound(stateFromStores, guildId, guild_id);
      cResult[2] = guild_id;
      cResult[3] = stateFromStores;
      cResult[4] = guildId;
      cResult[5] = result1;
      tmp8 = result1;
    }
  : (guildId, guild_id) => {
      let closure_1;
      let currentUser;
      _require = guildId;
      let obj = require("get initialized");
      const items = [UserStore];
      const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
      const obj2 = require("SoundboardUtils");
      const result = obj2.canUseSoundboardSound(stateFromStores, guildId, guild_id);
      const isLocked = !result;
      const obj3 = PremiumUtilsDefault;
      const result1 = obj3.canUseSoundboardEverywhere(stateFromStores);
      importDefault = tmp7;
      const items1 = [tmp7, guildId.available];
      let lockedAccessibilityHint;
      const onLockedPress = react.useCallback((onDismiss) => {
        let intl;
        if (closure_1) {
          const SoundboardSoundPreviewMenuExperiment =
            SoundboardSoundPreviewMenuExperiment2.SoundboardSoundPreviewMenuExperiment;
          const returnOnUpsellDismiss = SoundboardSoundPreviewMenuExperiment.getConfig({
            location: "PremiumUpsellActionSheet",
          }).returnOnUpsellDismiss;
          const tmp17 = openPremiumUpsellActionSheetDefault;
          const SOUNDBOARD_EVERYWHERE = EntitlementFeatureNames.EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE;
          let tmp20;
          if (returnOnUpsellDismiss) {
            tmp20 = onDismiss;
          }
          tmp17(SOUNDBOARD_EVERYWHERE, undefined, undefined, tmp20);
        } else if (!guildId.available) {
          const obj = {
            key: "DISABLED_SOUND_PRESSED",
            icon: AssetRegistryDefault,
            content: intl.string(intl3.t.MDOXJR),
            toastDurationMs: 3000,
          };
          const open = ToastActionCreatorsDefault.open;
          ToastActionCreatorsDefault;
          intl = intl3.intl;
          open(obj);
        }
      }, items1);
      if (!result) {
        let stringResult;
        if (!result1 && guildId.guildId !== guild_id.guild_id && guildId.guildId !== DEFAULT_SOUND_GUILD_ID) {
          const intl2 = tmp(1126).intl;
          stringResult = intl2.string(tmp(1126).t.BARTXV);
        } else if (!guildId.available) {
          let intl = tmp(1126).intl;
          stringResult = intl.string(tmp(1126).t.MDOXJR);
        }
        lockedAccessibilityHint = stringResult;
      }
      return { isLocked, lockedAccessibilityHint, onLockedPress };
    };
let result = size.fileFinishedImporting("modules/soundboard/native/utils/useSoundboardSoundLock.tsx");

export const useSoundboardSoundLock = tmp2;
