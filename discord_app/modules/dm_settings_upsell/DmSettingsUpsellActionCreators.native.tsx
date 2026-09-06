// discord_app/modules/dm_settings_upsell/DmSettingsUpsellActionCreators.native.tsx
import Storage3 from "../../../discord_common/js/packages/storage/Storage.tsx";
import asyncRequireImpl from "../../../_runtime/01896_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../action_sheet/native/ActionSheetActionCreators.tsx";
import DmSettingsUpsellUtils from "DmSettingsUpsellUtils.tsx";
import DmSettingsUpsellConstants from "DmSettingsUpsellConstants.tsx";
import size from "../../../_runtime/metro/00002__.js";

({ DM_SETTINGS_UPSELL_LAST_SHOWN_KEY: c3, DM_SETTINGS_UPSELL_LAST_SHOWN_MAX_TIME_MS: closure_4 } =
  DmSettingsUpsellConstants);
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
    ActionSheetActionCreatorsDefault.openLazy(
      asyncRequireImpl(17343, dependencyMap.paths),
      "dm_settings_upsell_modal",
      { guildId },
    );
    const Storage2 = Storage3.Storage;
    const result = Storage2.set(React3, timestamp);
    const obj = { guildId };
  },
};
