// === Module 17761: SettingsEmailNotificationsScreen ===

// Module 17761 (SettingsEmailNotificationsScreen)
import util from "util" /* 1113 */;
import SettingBuilders from "SettingBuilders" /* 11737 */;
import EmailSettingsActionCreators from "EmailSettingsActionCreators" /* 17762 */;
import noop from "module_19" /* 19 */;
import EmailSettingsStore from "EmailSettingsStore" /* 15884 */;

require = fn;
function initializeEmailSettings() {
  if (!EmailSettingsStore.getEmailSettings().initialized) {
    const emailSettings = EmailSettingsActionCreators.fetchEmailSettings();
  }
}
const MobileUserSettings = fn(8578).MobileUserSettings;
const jsx = fn(21).jsx;
let obj = { categories: null, unsubscribeFromAllMarketing: MobileUserSettings.EMAIL_UNSUBSCRIBE_FROM_ALL_MARKETING };
let items = [, , , , ];
({ EMAIL_COMMUNICATION: arr[0], EMAIL_SOCIAL: arr[1], EMAIL_UPDATES_AND_ANNOUNCEMENTS: arr[2], EMAIL_TIPS: arr[3], EMAIL_RECOMMENDATIONS_AND_EVENTS: arr[4] } = MobileUserSettings);
obj.categories = items;
let obj2 = { categories: null, unsubscribeFromAllMarketing: MobileUserSettings.REDESIGN_EMAIL_UNSUBSCRIBE_FROM_ALL_MARKETING };
let items1 = [, , , , ];
({ REDESIGN_EMAIL_COMMUNICATION: arr2[0], REDESIGN_EMAIL_SOCIAL: arr2[1], REDESIGN_EMAIL_UPDATES_AND_ANNOUNCEMENTS: arr2[2], REDESIGN_EMAIL_TIPS: arr2[3], REDESIGN_EMAIL_RECOMMENDATIONS_AND_EVENTS: arr2[4] } = MobileUserSettings);
obj2.categories = items1;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/notifications/native/SettingsEmailNotificationsScreen.tsx");

export default noop.memo(function SettingsEmailNotificationsScreen() {
  isDeclarativeSettingsUIAvailable = isDeclarativeSettingsUIAvailable(16541).useIsDeclarativeSettingsUIAvailable("SettingsEmailNotificationsScreen");
  obj = isDeclarativeSettingsUIAvailable(16541);
  enabled = enabled(17765).useConfig({ location: "SettingsEmailNotificationsScreen" }).enabled;
  items = [isDeclarativeSettingsUIAvailable, enabled];
  const node = noop.useMemo(() => {
    const tmp = isDeclarativeSettingsUIAvailable ? obj2 : obj;
    obj = SettingBuilders;
    obj2 = { settings: tmp.categories, subLabel: null };
    let stringResult;
    if (enabled) {
      const intl = util.intl;
      stringResult = intl.string(util.t.WViBDk);
    }
    const obj3 = { sections: null };
    obj2.subLabel = stringResult;
    items = [obj2, ];
    const obj4 = { settings: null };
    const items1 = [tmp.unsubscribeFromAllMarketing];
    obj4.settings = items1;
    items[1] = obj4;
    obj3.sections = items;
    return obj.createList(obj3);
  }, items);
  enabled(5731)(initializeEmailSettings);
  return jsx(enabled(16858), { node });
});