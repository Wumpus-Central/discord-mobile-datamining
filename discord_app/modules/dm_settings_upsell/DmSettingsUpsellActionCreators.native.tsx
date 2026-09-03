// discord_app/modules/dm_settings_upsell/DmSettingsUpsellActionCreators.native.tsx
import set from "../../../_runtime/00002_set.js";
import Storage3 from "../../../discord_common/js/packages/storage/Storage.tsx";
import asyncRequireImpl from "../../../_runtime/02008_asyncRequireImpl.js";
import ACTION_SHEET_HEIGHT_HALFDefault from "../action_sheet/native/ActionSheetActionCreators.tsx";
import DM_SETTINGS_UPSELL_LAST_SHOWN_KEY from "DmSettingsUpsellConstants.tsx";

({ DM_SETTINGS_UPSELL_LAST_SHOWN_KEY: c3, DM_SETTINGS_UPSELL_LAST_SHOWN_MAX_TIME_MS: c4 } =
  DM_SETTINGS_UPSELL_LAST_SHOWN_KEY);
let result = set.fileFinishedImporting("modules/dm_settings_upsell/DmSettingsUpsellActionCreators.native.tsx");

export default {
  openDmSettingsUpsellModal(guildId) {
    const Storage = Storage3.Storage;
    const value = Storage.get(closure_3);
    const timestamp = Date.now();
    if (null != value) {
      if (timestamp - value <= closure_4) {
        tmp(17178).trackEvent(tmp(17178).DmUpsellActionTypes.SUPPRESSED_BY_COOLDOWN, guildId);
        const tmpResult = tmp(17178);
      }
    }
    ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(17177, dependencyMap.paths), "dm_settings_upsell_modal", {
      guildId,
    });
    const Storage2 = tmp(592).Storage;
    const result = Storage2.set(closure_3, timestamp);
  },
};
