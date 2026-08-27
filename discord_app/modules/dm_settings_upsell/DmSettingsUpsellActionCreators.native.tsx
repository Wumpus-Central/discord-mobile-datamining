// === Module 16832: ? ===

// Module 16832
import set from "set" /* 2 */;
import Storage3 from "Storage" /* 595 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4412 */;
import DM_SETTINGS_UPSELL_LAST_SHOWN_KEY from "DM_SETTINGS_UPSELL_LAST_SHOWN_KEY" /* 16833 */;

({ DM_SETTINGS_UPSELL_LAST_SHOWN_KEY: c3, DM_SETTINGS_UPSELL_LAST_SHOWN_MAX_TIME_MS: c4 } = DM_SETTINGS_UPSELL_LAST_SHOWN_KEY);
let result = set.fileFinishedImporting("modules/dm_settings_upsell/DmSettingsUpsellActionCreators.native.tsx");

export default {
  openDmSettingsUpsellModal(guildId) {
    const Storage = Storage3.Storage;
    const value = Storage.get(closure_3);
    const timestamp = Date.now();
    if (null != value) {
      if (timestamp - value <= closure_4) {
        tmp(16835).trackEvent(tmp(16835).DmUpsellActionTypes.SUPPRESSED_BY_COOLDOWN, guildId);
        const tmpResult = tmp(16835);
      }
    }
    ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(16834, dependencyMap.paths), "dm_settings_upsell_modal", { guildId });
    const Storage2 = tmp(595).Storage;
    const result = Storage2.set(closure_3, timestamp);
  }
};