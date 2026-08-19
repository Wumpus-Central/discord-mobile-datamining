// === Module 16554: ? ===

// Module 16554
import obj132 from "obj132" /* 2 */;
import Storage3 from "Storage" /* 595 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2007 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4342 */;
import trackEvent from "trackEvent" /* 16557 */;
import DM_SETTINGS_UPSELL_LAST_SHOWN_KEY from "DM_SETTINGS_UPSELL_LAST_SHOWN_KEY" /* 16555 */;

({ DM_SETTINGS_UPSELL_LAST_SHOWN_KEY: c3, DM_SETTINGS_UPSELL_LAST_SHOWN_MAX_TIME_MS: c4 } = DM_SETTINGS_UPSELL_LAST_SHOWN_KEY);
let result = obj132.fileFinishedImporting("modules/dm_settings_upsell/DmSettingsUpsellActionCreators.native.tsx");

export default {
  openDmSettingsUpsellModal(guildId) {
    const Storage = Storage3.Storage;
    const value = Storage.get(closure_3);
    const timestamp = Date.now();
    if (null != value) {
      if (timestamp - value <= closure_4) {
        trackEvent.trackEvent(trackEvent.DmUpsellActionTypes.SUPPRESSED_BY_COOLDOWN, guildId);
        const tmpResult = trackEvent;
      }
    }
    ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(16556, dependencyMap.paths), "dm_settings_upsell_modal", { guildId });
    const Storage2 = Storage3.Storage;
    const result = Storage2.set(closure_3, timestamp);
  }
};