// discord_app/modules/user_settings/defs/native/SyncContactsNameSetting.tsx
import { AnalyticEvents } from "ME";
import createToggle from "createToggle";
import { asyncRequireImpl } from "../../../../../_runtime/01959_asyncRequireImpl.js";
import { ModalActionCreators } from "../../../../actions/ModalActionCreators.tsx";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { expandEventProperties } from "../../../../utils/AnalyticsUtils.tsx";
import { _uploadContacts } from "../../../contact_sync/native/ContactSyncUtils.tsx";

const pressable = createToggle.createPressable({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.nAsWKy);
  },
  parent: require("MobileSetting").MobileSetting.CONTENT_AND_SOCIAL_DISCORD,
  onPress: function onContactSyncNamePress() {
    expandEventProperties.track(AnalyticEvents.OPEN_MODAL, { type: "Change Name", location: { page: "User Settings" } });
    const obj = expandEventProperties;
    ModalActionCreators.pushLazy(asyncRequireImpl(13969, dependencyMap.paths), "Contact Sync Name Update Modal");
  },
  withArrow: true,
  usePredicate: function useHasContactSyncAccount() {
    return null != _uploadContacts.useContactSyncAccount();
  }
});
let obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.nAsWKy);
  },
  parent: require("MobileSetting").MobileSetting.CONTENT_AND_SOCIAL_DISCORD,
  onPress: function onContactSyncNamePress() {
    expandEventProperties.track(AnalyticEvents.OPEN_MODAL, { type: "Change Name", location: { page: "User Settings" } });
    const obj = expandEventProperties;
    ModalActionCreators.pushLazy(asyncRequireImpl(13969, dependencyMap.paths), "Contact Sync Name Update Modal");
  },
  withArrow: true,
  usePredicate: function useHasContactSyncAccount() {
    return null != _uploadContacts.useContactSyncAccount();
  }
};
const result = require("expandEventProperties").fileFinishedImporting("modules/user_settings/defs/native/SyncContactsNameSetting.tsx");

export default pressable;