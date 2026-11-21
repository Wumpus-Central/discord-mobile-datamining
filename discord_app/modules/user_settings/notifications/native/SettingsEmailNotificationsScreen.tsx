// === Module 16903: SettingsEmailNotificationsScreen ===

// Module 16903 (SettingsEmailNotificationsScreen)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1112 */;
import SettingBuilders from "SettingBuilders" /* 11937 */;
import EmailSettingsActionCreators from "EmailSettingsActionCreators" /* 16905 */;
import noop from "module_19" /* 19 */;
import EmailSettingsStore from "EmailSettingsStore" /* 15018 */;

require = fn;
const MobileUserSettings = fn(8712).MobileUserSettings;
const jsx = fn(21).jsx;
const createStyles = fn(4913);
let obj = { notice: { padding: nativeDefault.space.PX_16 } };
let closure_6 = createStyles.createStyles(obj);
let obj4 = { categories: null, unsubscribeFromAllMarketing: MobileUserSettings.EMAIL_UNSUBSCRIBE_FROM_ALL_MARKETING };
let items = [, , , , ];
({ EMAIL_COMMUNICATION: arr[0], EMAIL_SOCIAL: arr[1], EMAIL_UPDATES_AND_ANNOUNCEMENTS: arr[2], EMAIL_TIPS: arr[3], EMAIL_RECOMMENDATIONS_AND_EVENTS: arr[4] } = MobileUserSettings);
obj4.categories = items;
let obj5 = { categories: null, unsubscribeFromAllMarketing: MobileUserSettings.REDESIGN_EMAIL_UNSUBSCRIBE_FROM_ALL_MARKETING };
let items1 = [, , , , ];
({ REDESIGN_EMAIL_COMMUNICATION: arr2[0], REDESIGN_EMAIL_SOCIAL: arr2[1], REDESIGN_EMAIL_UPDATES_AND_ANNOUNCEMENTS: arr2[2], REDESIGN_EMAIL_TIPS: arr2[3], REDESIGN_EMAIL_RECOMMENDATIONS_AND_EVENTS: arr2[4] } = MobileUserSettings);
obj5.categories = items1;
let obj3 = { padding: nativeDefault.space.PX_16 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/notifications/native/SettingsEmailNotificationsScreen.tsx");

export default noop.memo(function SettingsEmailNotificationsScreen() {
  let tmp = closure_6();
  isDeclarativeSettingsUIAvailable = isDeclarativeSettingsUIAvailable(stateFromStores[6]).useIsDeclarativeSettingsUIAvailable("SettingsEmailNotificationsScreen");
  let obj = isDeclarativeSettingsUIAvailable(stateFromStores[6]);
  enabled = enabled(stateFromStores[7]).useConfig({ location: "SettingsEmailNotificationsScreen" }).enabled;
  let obj2 = enabled(stateFromStores[7]);
  items = [EmailSettingsStore];
  stateFromStores = isDeclarativeSettingsUIAvailable(stateFromStores[8]).useStateFromStores(items, () => null != emailSettings.getEmailSettings().initialized);
  let obj3 = isDeclarativeSettingsUIAvailable(stateFromStores[8]);
  let items1 = [EmailSettingsStore];
  const items2 = [stateFromStores];
  const stateFromStores1 = isDeclarativeSettingsUIAvailable(stateFromStores[8]).useStateFromStores(items1, () => emailSettings.isFetching);
  const layoutEffect = noop.useLayoutEffect(() => {
    if (!stateFromStores) {
      emailSettings = EmailSettingsActionCreators.fetchEmailSettings();
    }
  }, items2);
  const items3 = [isDeclarativeSettingsUIAvailable, enabled];
  const memo = noop.useMemo(() => {
    const tmp = isDeclarativeSettingsUIAvailable ? obj5 : obj4;
    const obj2 = { settings: tmp.categories, subLabel: null };
    let stringResult;
    if (enabled) {
      const intl = util.intl;
      stringResult = intl.string(util.t.WViBDk);
    }
    const obj3 = { sections: null };
    obj2.subLabel = stringResult;
    items = [obj2, ];
    obj4 = { settings: null };
    const items1 = [tmp.unsubscribeFromAllMarketing];
    obj4.settings = items1;
    items[1] = obj4;
    obj3.sections = items;
    return SettingBuilders.createList(obj3);
  }, items3);
  if (isDeclarativeSettingsUIAvailable) {
    if (!stateFromStores) {
      if (stateFromStores1) {
        let tmp10Result = jsx(tmp2(tmp3[12]).SceneLoadingIndicator, {});
      } else {
        obj5 = { style: tmp.notice, children: null };
        const obj6 = { type: "warning", role: "status", message: null, action: null };
        let intl = tmp2(tmp3[11]).intl;
        obj6.message = intl.string(tmp5(tmp3[15]).Nu2TMI);
        const obj7 = { text: null, onPress: null };
        const intl2 = tmp2(tmp3[11]).intl;
        obj7.text = intl2.string(tmp2(tmp3[11]).t["5911Lb"]);
        obj7.onPress = tmp2(tmp3[9]).fetchEmailSettings;
        obj6.action = obj7;
        obj5.children = jsx(tmp2(tmp3[14]).InlineNotice, { type: "warning", role: "status", message: null, action: null });
        tmp10Result = jsx(tmp2(tmp3[13]).Stack, { style: tmp.notice, children: null });
      }
    }
    return tmp10Result;
  }
  tmp10Result = jsx(tmp5(tmp3[16]), { node: memo });
  obj4 = isDeclarativeSettingsUIAvailable(stateFromStores[8]);
});