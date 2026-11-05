// === Module 15400: InAppReportsUserPreview ===

// Module 15400 (InAppReportsUserPreview)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import native from "native" /* 1187 */;
import ColorUtils from "ColorUtils" /* 5140 */;
import Text_Text from "Text/Text" /* 5763 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(5143);
let obj2 = { container: { alignSelf: "stretch", marginHorizontal: 16, marginBottom: 16 }, borderColor: { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY }, title: { lineHeight: 16, marginBottom: 8 }, userContainer: null, userProfileInfo: null };
let obj3 = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
obj2.userContainer = { flexDirection: "row", alignItems: "center", justifyContent: "flex-start", minHeight: 40, borderRadius: nativeDefault.radii.sm, borderWidth: 1, padding: 12 };
obj2.userProfileInfo = { marginLeft: 8 };
let closure_5 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsUserPreview.tsx");

export default function UserPreview(user) {
  user = user.user;
  const tmp = closure_5();
  const obj2 = { style: tmp.container, children: null };
  const obj3 = { style: tmp.title, accessibilityRole: "header", variant: "body-sm/medium", children: null };
  const intl = util.intl;
  obj3.children = intl.string(util.t.Rsth7z);
  items = [React3(Text_Text.Text, obj3), ];
  const obj4 = { style: null, children: null };
  const items1 = [tmp.userContainer, { borderColor: ColorUtils.hexWithOpacity(tmp.borderColor.color, 0.08) }];
  obj4.style = items1;
  const hexWithOpacityResult = ColorUtils.hexWithOpacity(tmp.borderColor.color, 0.08);
  const items2 = [React3(native.Avatar, { size: native.AvatarSizes.LARGE_48, user, guildId: "Array" }), ];
  const obj6 = { style: tmp.userProfileInfo, children: null };
  let tmp7Result = null != user.globalName;
  if (tmp7Result) {
    const obj7 = { variant: "body-md/semibold", color: "mobile-text-heading-primary", children: user.globalName };
    tmp7Result = React3(Text_Text.Text, obj7);
  }
  const items3 = [tmp7Result, React3(Text_Text.Text, { color: "text-default", variant: "body-sm/normal", children: user.username })];
  obj6.children = items3;
  items2[1] = React4(View, obj6);
  obj4.children = items2;
  items[1] = React4(View, obj4);
  obj2.children = items;
  return React4(View, obj2);
};