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
const VerificationConstants = fn(5684);
({ CHANGE_EMAIL_REASONS_ORDER: closure_7, SUSPICIOUS_CHANGE_EMAIL_REASONS: closure_8 } = VerificationConstants);
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
fn(4560);
let createStyles = { background: null, container: null, radioGroup: null, title: null };
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles.background = createStyles;
createStyles.container = { paddingVertical: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16 };
let obj1 = { paddingVertical: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16 };
createStyles.radioGroup = { paddingTop: nativeDefault.space.PX_16, paddingBottom: 38 };
createStyles.title = { textAlign: "center" };
let closure_12 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/verification/native/components/ChangeEmailCollectReasons.tsx");

export default function ChangeEmailCollectReasons(changeEmailReason) {
  changeEmailReason = changeEmailReason.changeEmailReason;
  const setChangeEmailReason = changeEmailReason.setChangeEmailReason;
  let navigation;
  let callback1;
  const tmp = closure_12();
  let obj = changeEmailReason(navigation[8]);
  const items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj1 = changeEmailReason(navigation[9]);
  navigation = obj1.useNavigation();
  const items1 = [navigation, changeEmailReason];
  const items2 = [setChangeEmailReason];
  const callback = callback1.useCallback(() => {
    const obj = { change_email_reason_enum: changeEmailReason };
    obj.track(AnalyticEvents.USER_ACCOUNT_EMAIL_CHANGE_REASON_CONTINUE, obj);
    if (null != changeEmailReason) {
      if (set.has(changeEmailReason)) {
        navigation.push(ConstantsIOS.VerificationModalScenes.CHANGE_EMAIL_WARNING);
      }
    }
    navigation.push(ConstantsIOS.VerificationModalScenes.ENTER_EMAIL);
  }, items1);
  callback1 = callback1.useCallback((change_email_reason_enum) => {
    const obj = { change_email_reason_enum };
    obj.track(AnalyticEvents.USER_ACCOUNT_EMAIL_CHANGE_REASON_SELECTED, obj);
    setChangeEmailReason(change_email_reason_enum);
  }, items2);
  const items3 = [changeEmailReason, callback1];
  let tmp9 = null;
  if (null != stateFromStores) {
    obj = { keyboardShouldPersistTaps: "handled", alwaysBounceVertical: false, style: tmp.background, children: null };
    obj = { style: tmp.container, children: null };
    obj1 = {
      style: tmp.title,
      accessibilityRole: "header",
      variant: "heading-xl/extrabold",
      color: "mobile-text-heading-primary",
      children: null,
    };
    const intl = tmp2(tmp3[16]).intl;
    obj1.children = intl.string(tmp2(tmp3[16]).t["41NIIh"]);
    const items4 = [closure_10(tmp2(tmp3[15]).Text, obj1), ,];
    const obj2 = { style: tmp.radioGroup, children: tmp8 };
    items4[1] = closure_10(closure_4, obj2);
    const obj3 = { size: "md", variant: "primary", onPress: callback, text: null, disabled: null };
    const intl2 = tmp2(tmp3[16]).intl;
    obj3.text = intl2.string(tmp2(tmp3[16]).t.XiOHRX);
    obj3.disabled = null == changeEmailReason;
    items4[2] = closure_10(tmp2(tmp3[17]).Button, obj3);
    obj.children = items4;
    obj.children = closure_11(closure_4, obj);
    tmp9 = closure_10(closure_5, obj);
  }
  return tmp9;
}
