// discord_app/modules/user_settings/account/native/UserSettingsAccountUnverifiedHeader.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import EmailVerificationModalActionCreatorsDefault from "../../../../actions/native/EmailVerificationModalActionCreators.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import UserStore from "../../../../stores/UserStore.tsx";

require = fn;
function handleOpenEmailVerification() {
  EmailVerificationModalActionCreatorsDefault.open();
}
function getBannerText(currentUser) {
  if (null == currentUser) {
    return null;
  } else if (null == currentUser.email) {
    let obj = { title: null, button: null };
    const intl3 = util.intl;
    obj.title = intl3.string(util.t["/yqgqs"]);
    const intl4 = util.intl;
    obj.button = intl4.string(util.t.ydw5nX);
  } else if (!currentUser.verified) {
    obj = { title: null, button: null };
    const intl = util.intl;
    obj.title = intl.string(util.t["3sWbf3"]);
    const intl2 = util.intl;
    obj.button = intl2.string(util.t["13ofGu"]);
  }
}
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
fn(4560);
let createStyles = { accountWarning: null, accountWarningText: null, accountWarningButton: null };
createStyles = {
  backgroundColor: nativeDefault.unsafe_rawColors.RED_400,
  height: 36,
  alignItems: "center",
  alignSelf: "stretch",
  flexDirection: "row",
  paddingHorizontal: 16,
};
createStyles.accountWarning = createStyles;
createStyles.accountWarningText = { flex: 1, lineHeight: 16 };
createStyles.accountWarningButton = {
  borderWidth: 1,
  borderColor: nativeDefault.colors.WHITE,
  borderRadius: nativeDefault.radii.xs,
  paddingHorizontal: 8,
  paddingVertical: 4,
};
let closure_6 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/user_settings/account/native/UserSettingsAccountUnverifiedHeader.tsx",
);

export default function UserSettingsAccountUnverifiedHeader() {
  const tmp = closure_6();
  let obj = initialize;
  const items = [UserStore];
  const tmp4 = getBannerText(obj.useStateFromStores(items, () => currentUser.getCurrentUser()));
  let tmp5 = null;
  if (null != tmp4) {
    obj = {
      accessibilityRole: "button",
      style: tmp.accountWarning,
      onPress: handleOpenEmailVerification,
      children: null,
    };
    obj = { style: tmp.accountWarningText, variant: "text-xs/bold", color: "text-overlay-light", children: tmp4.title };
    const items1 = [React4(tmp2(4556).Text, obj)];
    const obj1 = {
      style: tmp.accountWarningButton,
      variant: "text-xs/medium",
      color: "text-overlay-light",
      children: tmp4.button,
    };
    items1[1] = React4(tmp2(4556).Text, obj1);
    obj.children = items1;
    tmp5 = hasOwnProperty(tmp2(5123).PressableOpacity, obj);
  }
  return tmp5;
}
export { getBannerText };
