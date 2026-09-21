// === Module 13407: UserProfilePrivateBanner ===

// Module 13407 (UserProfilePrivateBanner)
import nativeDefault from "native" /* 576 */;
import utils_ColorUtils from "utils/ColorUtils" /* 1092 */;
import util from "util" /* 1115 */;
import Text_Text from "Text/Text" /* 4752 */;
import LockIcon from "LockIcon" /* 5313 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4756);
let obj2 = { banner: { flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 6, paddingTop: 18, paddingBottom: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_8, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, position: "relative", zIndex: fn(7453).PROFILE_TOP_LAYER_Z_INDEX } };
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfilePrivateBanner.tsx");

export default function UserProfilePrivateBanner(primaryColor) {
  primaryColor = primaryColor.primaryColor;
  const items = [closure_6().banner, ];
  let tmp3 = null != primaryColor;
  if (tmp3) {
    const obj = { backgroundColor: utils_ColorUtils.int2hex(primaryColor) };
    tmp3 = obj;
  }
  const obj3 = { style: items, children: null };
  items[1] = tmp3;
  const items1 = [React4(LockIcon.LockIcon, { size: "xs", color: nativeDefault.colors.TEXT_DEFAULT }), ];
  const obj5 = { variant: "text-sm/medium", color: "text-default", children: null };
  const intl = util.intl;
  obj5.children = intl.string(util.t.KPnd2O);
  items1[1] = React4(Text_Text.Text, obj5);
  obj3.children = items1;
  return hasOwnProperty(View, obj3);
};