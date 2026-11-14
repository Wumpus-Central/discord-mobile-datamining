// === Module 17210: SettingsAccountHeader ===

// Module 17210 (SettingsAccountHeader)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import components_Button_Button from "components/Button/Button" /* 5936 */;
import TableRow from "TableRow" /* 7443 */;
import EmailVerificationModalActionCreatorsDefault from "EmailVerificationModalActionCreators" /* 7740 */;
import UserSettingsAccountUnverifiedHeader from "UserSettingsAccountUnverifiedHeader" /* 7815 */;
import openUserSettings from "openUserSettings" /* 8604 */;
import SafetySettingsNoticeDefault from "SafetySettingsNotice" /* 17211 */;
import noop from "module_19" /* 19 */;
import RelationshipStore from "RelationshipStore" /* 5248 */;
import UserStore from "UserStore" /* 1388 */;

require = fn;
function RestrictedAccountRedirect() {
  const obj = {
    label: util.t.zqv4nV,
    labelHook: function handleRestrictedAccountRedirect() {
      openUserSettings.openUserSettings({ screen: constants.SETTINGS_CONTENT_AND_SOCIAL });
    },
    noticeType: SafetySettingsNoticeType.RESTRICTED_ACCOUNTS_SETTING_NOTICE
  };
  return React6(SafetySettingsNoticeDefault, obj);
}
const View = fn(17).View;
const AnalyticsSections = fn(1072).AnalyticsSections;
const SafetySettingsNoticeType = fn(6910).SafetySettingsNoticeType;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
const createStyles = fn(5306);
let obj = { header: { paddingTop: nativeDefault.space.PX_24, gap: nativeDefault.space.PX_24 } };
let closure_11 = createStyles.createStyles(obj);
const obj3 = { paddingTop: nativeDefault.space.PX_24, gap: nativeDefault.space.PX_24 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/account/native/SettingsAccountHeader.tsx");

export default noop.memo(function SettingsAccountHeader() {
  const tmp = closure_11();
  items = [UserStore];
  const stateFromStores = initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
  const bannerText = UserSettingsAccountUnverifiedHeader.getBannerText(stateFromStores);
  const items1 = [RelationshipStore];
  const stateFromStores1 = initialize.useStateFromStores(items1, () => blockedOrIgnoredIDs.getBlockedOrIgnoredIDs().size > 0);
  const callback = noop.useCallback(() => {
    EmailVerificationModalActionCreatorsDefault.open();
  }, []);
  if (null != bannerText) {
    const obj4 = { style: tmp.header, children: null };
    let tmp11 = null;
    if (stateFromStores1) {
      tmp11 = React6(RestrictedAccountRedirect, {});
    }
    const items2 = [tmp11, ];
    let tmp14 = null;
    if (null != bannerText) {
      const obj9 = { onPress: callback, variant: "danger", label: null, accessibilityLabel: null, trailing: null, start: true, end: true };
      ({ title: obj5.label, title: obj5.accessibilityLabel } = bannerText);
      const obj10 = { text: null, accessibilityLabel: null, onPress: null };
      ({ button: obj6.text, button: obj6.accessibilityLabel } = bannerText);
      obj10.onPress = callback;
      obj9.trailing = React6(components_Button_Button.Button, obj10);
      tmp14 = React6(TableRow.TableRow, obj9);
    }
    items2[1] = tmp14;
    obj4.children = items2;
    let tmp9Result = refs(View, obj4);
  } else {
    tmp9Result = null;
  }
  return tmp9Result;
});