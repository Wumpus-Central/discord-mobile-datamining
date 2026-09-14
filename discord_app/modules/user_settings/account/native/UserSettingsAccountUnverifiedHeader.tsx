// discord_app/modules/user_settings/account/native/UserSettingsAccountUnverifiedHeader.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import Pressables from "../../../../design/void/Pressables/native/Pressables.tsx";
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
    const obj2 = { title: null, button: null };
    const intl3 = util.intl;
    obj2.title = intl3.string(util.t["/yqgqs"]);
    const intl4 = util.intl;
    obj2.button = intl4.string(util.t.ydw5nX);
  } else if (!currentUser.verified) {
    const obj = { title: null, button: null };
    const intl = util.intl;
    obj.title = intl.string(util.t["3sWbf3"]);
    const intl2 = util.intl;
    obj.button = intl2.string(util.t["13ofGu"]);
  }
}
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4636);
let obj2 = {
  accountWarning: {
    backgroundColor: nativeDefault.unsafe_rawColors.RED_400,
    height: 36,
    alignItems: "center",
    alignSelf: "stretch",
    flexDirection: "row",
    paddingHorizontal: 16,
  },
  accountWarningText: { flex: 1, lineHeight: 16 },
  accountWarningButton: null,
};
let obj3 = {
  backgroundColor: nativeDefault.unsafe_rawColors.RED_400,
  height: 36,
  alignItems: "center",
  alignSelf: "stretch",
  flexDirection: "row",
  paddingHorizontal: 16,
};
obj2.accountWarningButton = {
  borderWidth: 1,
  borderColor: nativeDefault.colors.WHITE,
  borderRadius: nativeDefault.radii.xs,
  paddingHorizontal: 8,
  paddingVertical: 4,
};
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/user_settings/account/native/UserSettingsAccountUnverifiedHeader.tsx",
);

export default function UserSettingsAccountUnverifiedHeader() {
  const tmp = closure_6();
  const items = [UserStore];
  const tmp4 = getBannerText(initialize.useStateFromStores(items, () => currentUser.getCurrentUser()));
  let tmp5 = null;
  if (null != tmp4) {
    const obj2 = {
      accessibilityRole: "button",
      style: tmp.accountWarning,
      onPress: handleOpenEmailVerification,
      children: null,
    };
    const obj3 = {
      style: tmp.accountWarningText,
      variant: "text-xs/bold",
      color: "text-overlay-light",
      children: tmp4.title,
    };
    const items1 = [React4(Text_Text.Text, obj3)];
    const obj4 = {
      style: tmp.accountWarningButton,
      variant: "text-xs/medium",
      color: "text-overlay-light",
      children: tmp4.button,
    };
    items1[1] = React4(Text_Text.Text, obj4);
    obj2.children = items1;
    tmp5 = hasOwnProperty(Pressables.PressableOpacity, obj2);
  }
  return tmp5;
}
export { getBannerText };
