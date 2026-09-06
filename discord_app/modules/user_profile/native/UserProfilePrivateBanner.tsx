// discord_app/modules/user_profile/native/UserProfilePrivateBanner.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import utils_ColorUtils from "../../../../discord_common/js/shared/utils/ColorUtils.tsx";
import util from "../../../intl/index.native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import LockIcon from "../../../design/components/Icon/native/redesign/generated/LockIcon.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
fn(4560);
let createStyles = { banner: null };
createStyles = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  gap: 6,
  paddingTop: 18,
  paddingBottom: nativeDefault.space.PX_12,
  paddingHorizontal: nativeDefault.space.PX_8,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  position: "relative",
  zIndex: fn(7208).PROFILE_TOP_LAYER_Z_INDEX,
};
createStyles.banner = createStyles;
let closure_6 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfilePrivateBanner.tsx");

export default function UserProfilePrivateBanner(primaryColor) {
  primaryColor = primaryColor.primaryColor;
  const items = [closure_6().banner];
  let tmp3 = null != primaryColor;
  if (tmp3) {
    let obj = { backgroundColor: null };
    let obj1 = utils_ColorUtils;
    obj.backgroundColor = obj1.int2hex(primaryColor);
    tmp3 = obj;
  }
  obj = { style: items, children: null };
  items[1] = tmp3;
  obj = { size: "xs", color: nativeDefault.colors.TEXT_DEFAULT };
  const items1 = [React4(LockIcon.LockIcon, obj)];
  obj1 = { variant: "text-sm/medium", color: "text-default", children: null };
  const intl = util.intl;
  obj1.children = intl.string(util.t.KPnd2O);
  items1[1] = React4(Text_Text.Text, obj1);
  obj.children = items1;
  return hasOwnProperty(View, obj);
}
