// discord_app/modules/dm_settings_upsell/DmSettingsUpsellActionCreators.native.tsx
import Storage3 from "../../../discord_common/js/packages/storage/Storage.tsx";
import asyncRequire from "../../../_runtime/01987_asyncRequire.js";
import ActionSheetActionCreatorsDefault from "../action_sheet/native/ActionSheetActionCreators.tsx";
import DmSettingsUpsellUtils from "DmSettingsUpsellUtils.tsx";
import DmSettingsUpsellConstants from "DmSettingsUpsellConstants.tsx";
import size from "../../../_runtime/metro/00002__.js";

let c3;
let closure_4;
({ DM_SETTINGS_UPSELL_LAST_SHOWN_KEY: c3, DM_SETTINGS_UPSELL_LAST_SHOWN_MAX_TIME_MS: closure_4 } =
  DmSettingsUpsellConstants);
let obj = {
  openDmSettingsUpsellModal(guildId) {
    const Storage = Storage3.Storage;
    const value = Storage.get(_false);
    const timestamp = Date.now();
    if (null != value) {
      if (timestamp - value <= React3) {
        const tmpResult = DmSettingsUpsellUtils;
        tmpResult.trackEvent(DmSettingsUpsellUtils.DmUpsellActionTypes.SUPPRESSED_BY_COOLDOWN, guildId);
      }
    }
    const obj = { guildId };
    const obj2 = ActionSheetActionCreatorsDefault;
    obj2.openLazy(asyncRequire(17515, dependencyMap.paths), "dm_settings_upsell_modal", obj);
    const Storage2 = Storage3.Storage;
    const result = Storage2.set(_false, timestamp);
  },
};
let result = size.fileFinishedImporting("modules/dm_settings_upsell/DmSettingsUpsellActionCreators.native.tsx");

export default obj;
