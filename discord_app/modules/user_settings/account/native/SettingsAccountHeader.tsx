// discord_app/modules/user_settings/account/native/SettingsAccountHeader.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import EmailVerificationModalActionCreatorsDefault from "../../../../actions/native/EmailVerificationModalActionCreators.tsx";
import UserSettingsAccountUnverifiedHeader from "UserSettingsAccountUnverifiedHeader.tsx";
import openUserSettings from "../../core/native/openUserSettings.tsx";
import SafetySettingsNoticeDefault from "../../../safety_common/native/SafetySettingsNotice.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import RelationshipStore from "../../../../stores/RelationshipStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";

require = fn;
function RestrictedAccountRedirect() {
  let obj = {
    label: util.t.zqv4nV,
    labelHook() {
      const obj = { screen: constants.SETTINGS_CONTENT_AND_SOCIAL };
      obj.openUserSettings(obj);
    },
    noticeType: SafetySettingsNoticeType.RESTRICTED_ACCOUNTS_SETTING_NOTICE,
  };
  return React7(SafetySettingsNoticeDefault, obj);
}
const View = fn(17).View;
const AnalyticsSections = fn(1074).AnalyticsSections;
const SafetySettingsNoticeType = fn(8399).SafetySettingsNoticeType;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4560);
let obj = { header: null };
obj = { paddingTop: nativeDefault.space.PX_24, gap: nativeDefault.space.PX_24 };
obj.header = obj;
let closure_11 = createStyles.createStyles(obj);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/account/native/SettingsAccountHeader.tsx");

export default noop.memo(() => {
  let obj = initialize;
  const items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj1 = UserSettingsAccountUnverifiedHeader;
  const bannerText = obj1.getBannerText(stateFromStores);
  const tmp = closure_11();
  const items1 = [RelationshipStore];
  const stateFromStores1 = initialize.useStateFromStores(
    items1,
    () => blockedOrIgnoredIDs.getBlockedOrIgnoredIDs().size > 0,
  );
  const callback = noop.useCallback(() => {
    EmailVerificationModalActionCreatorsDefault.open();
  }, []);
  if (null != bannerText) {
    obj = { style: tmp.header, children: null };
    let tmp11 = null;
    if (stateFromStores1) {
      tmp11 = React7(RestrictedAccountRedirect, {});
    }
    const items2 = [tmp11];
    let tmp14 = null;
    if (null != bannerText) {
      obj = {
        onPress: callback,
        variant: "danger",
        label: null,
        accessibilityLabel: null,
        trailing: null,
        start: true,
        end: true,
      };
      ({ title: obj5.label, title: obj5.accessibilityLabel } = bannerText);
      obj1 = { text: null, accessibilityLabel: null, onPress: null };
      ({ button: obj6.text, button: obj6.accessibilityLabel } = bannerText);
      obj1.onPress = callback;
      obj.trailing = React7(tmp2(4975).Button, obj1);
      tmp14 = React7(tmp2(5605).TableRow, obj);
    }
    items2[1] = tmp14;
    obj.children = items2;
    let tmp9Result = closure_1_10(View, obj);
  } else {
    tmp9Result = null;
  }
  return tmp9Result;
});
