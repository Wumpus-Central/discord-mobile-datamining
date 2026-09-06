// discord_app/modules/in_app_reports/native/components/InAppReportsUserPreview.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import ColorUtils from "../../../../utils/ColorUtils.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
fn(4560);
let createStyles = {
  container: { alignSelf: "stretch", marginHorizontal: 16, marginBottom: 16 },
  borderColor: null,
  title: null,
  userContainer: null,
  userProfileInfo: null,
};
createStyles = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
createStyles.borderColor = createStyles;
createStyles.title = { lineHeight: 16, marginBottom: 8 };
createStyles.userContainer = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-start",
  minHeight: 40,
  borderRadius: nativeDefault.radii.sm,
  borderWidth: 1,
  padding: 12,
};
createStyles.userProfileInfo = { marginLeft: 8 };
let closure_5 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsUserPreview.tsx");

export default function UserPreview(user) {
  user = user.user;
  const tmp = closure_5();
  let obj = { style: tmp.container, children: null };
  obj = { style: tmp.title, accessibilityRole: "header", variant: "text-xs/bold", children: null };
  const intl = util.intl;
  const hexWithOpacityResult = obj.hexWithOpacity(tmp.borderColor.color, 0.08);
  obj.children = intl.string(util.t.Rsth7z).toUpperCase();
  const items = [React3(Text_Text.Text, obj)];
  const obj1 = { style: null, children: null };
  const items1 = [tmp.userContainer, { borderColor: hexWithOpacityResult }];
  obj1.style = items1;
  const str = intl.string(util.t.Rsth7z);
  const items2 = [React3(native.Avatar, { size: native.AvatarSizes.LARGE_48, user, guildId: "Array" })];
  const obj3 = { style: tmp.userProfileInfo, children: null };
  let tmp7Result = null != user.globalName;
  if (tmp7Result) {
    const obj4 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: user.globalName };
    tmp7Result = tmp7(tmp2(4556).Text, obj4);
  }
  const items3 = [
    tmp7Result,
    React3(Text_Text.Text, { color: "text-default", variant: "text-sm/normal", children: user.username }),
  ];
  obj3.children = items3;
  items2[1] = React4(View, obj3);
  obj1.children = items2;
  items[1] = React4(View, obj1);
  obj.children = items;
  return React4(View, obj);
}
