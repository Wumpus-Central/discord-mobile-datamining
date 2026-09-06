// discord_app/modules/user_settings/defs/native/SyncContactsNameSetting.tsx
import Constants from "../../../../Constants.tsx";
import util from "../../../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import asyncRequireImpl from "../../../../../_runtime/01896_asyncRequireImpl.js";
import ModalActionCreatorsDefault from "../../../../actions/ModalActionCreators.tsx";
import SettingsConstants from "../../core/native/SettingsConstants.tsx";
import ContactSyncUtils from "../../../contact_sync/native/ContactSyncUtils.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const AnalyticEvents = Constants.AnalyticEvents;
const pressable = SettingBuilders.createPressable({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.nAsWKy);
  },
  parent: SettingsConstants.MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  onPress: function onContactSyncNamePress() {
    AnalyticsUtilsDefault.track(AnalyticEvents.OPEN_MODAL, {
      type: "Change Name",
      location: { page: "User Settings" },
    });
    ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(14845, dependencyMap.paths), "Contact Sync Name Update Modal");
  },
  withArrow: true,
  usePredicate: function useHasContactSyncAccount() {
    return null != ContactSyncUtils.useContactSyncAccount();
  },
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/SyncContactsNameSetting.tsx");

export default pressable;
