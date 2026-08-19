// discord_app/modules/dm_settings_upsell/DmSettingsUpsellActionCreators.native.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import Storage3 from "../../../discord_common/js/packages/storage/Storage.tsx";
import asyncRequireImpl from "../../../_runtime/02007_asyncRequireImpl.js";
import ACTION_SHEET_HEIGHT_HALFDefault from "../action_sheet/native/ActionSheetActionCreators.tsx";
import trackEvent from "DmSettingsUpsellUtils.tsx";
import DM_SETTINGS_UPSELL_LAST_SHOWN_KEY from "DmSettingsUpsellConstants.tsx";

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