// discord_app/modules/user_settings/defs/native/SyncContactsNameSetting.tsx
import { AnalyticEvents } from "ME";
import createToggle from "createToggle";

const pressable = createToggle.createPressable({
  useTitle() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.nAsWKy);
  },
  parent: require("MobileSetting").MobileSetting.CONTENT_AND_SOCIAL_DISCORD,
  onPress: function onContactSyncNamePress() {
    require("../../../../utils/AnalyticsUtils.tsx").track(AnalyticEvents.OPEN_MODAL, { type: "Change Name", location: { page: "User Settings" } });
    const obj = require("../../../../utils/AnalyticsUtils.tsx");
    require("../../../../actions/ModalActionCreators.tsx").pushLazy(require("../../../../../_runtime/01959_asyncRequireImpl.js") /* asyncRequireImpl */(13995, dependencyMap.paths), "Contact Sync Name Update Modal");
  },
  withArrow: true,
  usePredicate: function useHasContactSyncAccount() {
    return null != require("../../../contact_sync/native/ContactSyncUtils.tsx") /* _uploadContacts */.useContactSyncAccount();
  }
});
let obj = {
  useTitle() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.nAsWKy);
  },
  parent: require("MobileSetting").MobileSetting.CONTENT_AND_SOCIAL_DISCORD,
  onPress: function onContactSyncNamePress() {
    require("../../../../utils/AnalyticsUtils.tsx").track(AnalyticEvents.OPEN_MODAL, { type: "Change Name", location: { page: "User Settings" } });
    const obj = require("../../../../utils/AnalyticsUtils.tsx");
    require("../../../../actions/ModalActionCreators.tsx").pushLazy(require("../../../../../_runtime/01959_asyncRequireImpl.js") /* asyncRequireImpl */(13995, dependencyMap.paths), "Contact Sync Name Update Modal");
  },
  withArrow: true,
  usePredicate: function useHasContactSyncAccount() {
    return null != require("../../../contact_sync/native/ContactSyncUtils.tsx") /* _uploadContacts */.useContactSyncAccount();
  }
};
const result = require("expandEventProperties").fileFinishedImporting("modules/user_settings/defs/native/SyncContactsNameSetting.tsx");

export default pressable;