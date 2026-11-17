// === Module 20264: DmSettingsUpsellActionCreators ===

// Module 20264 (DmSettingsUpsellActionCreators)
import Storage3 from "Storage" /* 510 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5546 */;
import DmSettingsUpsellUtils from "DmSettingsUpsellUtils" /* 20267 */;
import DmSettingsUpsellConstants from "DmSettingsUpsellConstants" /* 20265 */;
import size from "module_2" /* 2 */;

({ DM_SETTINGS_UPSELL_LAST_SHOWN_KEY: c3, DM_SETTINGS_UPSELL_LAST_SHOWN_MAX_TIME_MS: closure_4 } = DmSettingsUpsellConstants);
let result = size.fileFinishedImporting("modules/dm_settings_upsell/DmSettingsUpsellActionCreators.native.tsx");

export default {
  openDmSettingsUpsellModal(guildId) {
    const Storage = Storage3.Storage;
    value = Storage.get(React3);
    const timestamp = Date.now();
    if (null != value) {
      if (timestamp - value <= React4) {
        DmSettingsUpsellUtils.trackEvent(DmSettingsUpsellUtils.DmUpsellActionTypes.SUPPRESSED_BY_COOLDOWN, guildId);
        const tmpResult = DmSettingsUpsellUtils;
      }
    }
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(20266, dependencyMap.paths), "dm_settings_upsell_modal", { guildId });
    const Storage2 = Storage3.Storage;
    const result = Storage2.set(React3, timestamp);
    const obj = { guildId };
  }
};