// discord_app/modules/verification/native/components/ChangeEmailCollectReasons.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ConstantsIOS from "../../../../ConstantsIOS.tsx";
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import TableRadioGroup from "../../../../design/components/TableRow/native/TableRadioGroup.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import UserStore from "../../../../stores/UserStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, ScrollView: hasOwnProperty } = get_ActivityIndicator);
const VerificationConstants = fn(5765);
({ CHANGE_EMAIL_REASONS_ORDER: closure_7, SUSPICIOUS_CHANGE_EMAIL_REASONS: closure_8 } = VerificationConstants);
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(4636);
let obj2 = {
  background: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW },
  container: null,
  radioGroup: null,
  title: null,
};
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.container = { paddingVertical: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16 };
let obj4 = { paddingVertical: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16 };
obj2.radioGroup = { paddingTop: nativeDefault.space.PX_16, paddingBottom: 38 };
obj2.title = { textAlign: "center" };
let closure_12 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/verification/native/components/ChangeEmailCollectReasons.tsx");

export default function ChangeEmailCollectReasons(changeEmailReason) {
  changeEmailReason = changeEmailReason.changeEmailReason;
  const setChangeEmailReason = changeEmailReason.setChangeEmailReason;
  let navigation;
  let callback1;
  const tmp = closure_12();
  const items = [UserStore];
  const stateFromStores = changeEmailReason(navigation[8]).useStateFromStores(items, () =>
    currentUser.getCurrentUser(),
  );
  let obj = changeEmailReason(navigation[8]);
  navigation = changeEmailReason(navigation[9]).useNavigation();
  const items1 = [navigation, changeEmailReason];
  const items2 = [setChangeEmailReason];
  const callback = callback1.useCallback(() => {
    AnalyticsUtilsDefault.track(AnalyticEvents.USER_ACCOUNT_EMAIL_CHANGE_REASON_CONTINUE, {
      change_email_reason_enum: changeEmailReason,
    });
    if (null != changeEmailReason) {
      if (set.has(changeEmailReason)) {
        navigation.push(ConstantsIOS.VerificationModalScenes.CHANGE_EMAIL_WARNING);
      }
    }
    navigation.push(ConstantsIOS.VerificationModalScenes.ENTER_EMAIL);
    const obj2 = { change_email_reason_enum: changeEmailReason };
  }, items1);
  callback1 = callback1.useCallback((change_email_reason_enum) => {
    AnalyticsUtilsDefault.track(AnalyticEvents.USER_ACCOUNT_EMAIL_CHANGE_REASON_SELECTED, { change_email_reason_enum });
    setChangeEmailReason(change_email_reason_enum);
  }, items2);
  const items3 = [changeEmailReason, callback1];
  let tmp9 = null;
  if (null != stateFromStores) {
    const obj3 = {
      keyboardShouldPersistTaps: "handled",
      alwaysBounceVertical: false,
      style: tmp.background,
      children: null,
    };
    const obj4 = { style: tmp.container, children: null };
    const obj5 = {
      style: tmp.title,
      accessibilityRole: "header",
      variant: "heading-xl/extrabold",
      color: "mobile-text-heading-primary",
      children: null,
    };
    const intl = tmp2(tmp3[16]).intl;
    obj5.children = intl.string(tmp2(tmp3[16]).t["41NIIh"]);
    const items4 = [closure_10(tmp2(tmp3[15]).Text, obj5), ,];
    const obj6 = { style: tmp.radioGroup, children: tmp8 };
    items4[1] = closure_10(closure_4, obj6);
    const obj7 = { size: "md", variant: "primary", onPress: callback, text: null, disabled: null };
    const intl2 = tmp2(tmp3[16]).intl;
    obj7.text = intl2.string(tmp2(tmp3[16]).t.XiOHRX);
    obj7.disabled = null == changeEmailReason;
    items4[2] = closure_10(tmp2(tmp3[17]).Button, obj7);
    obj4.children = items4;
    obj3.children = closure_11(closure_4, obj4);
    tmp9 = closure_10(closure_5, obj3);
  }
  return tmp9;
}
