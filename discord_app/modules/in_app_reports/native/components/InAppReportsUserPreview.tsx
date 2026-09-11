// === Module 8747: InAppReportsUserPreview ===

// Module 8747 (InAppReportsUserPreview)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import native from "native" /* 1178 */;
import ColorUtils from "ColorUtils" /* 4456 */;
import Text_Text from "Text/Text" /* 4602 */;
import useTypeConsolidationTextTransform from "useTypeConsolidationTextTransform" /* 7052 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
fn(4606);
let createStyles = { container: { alignSelf: "stretch", marginHorizontal: 16, marginBottom: 16 }, borderColor: null, title: null, userContainer: null, userProfileInfo: null };
createStyles = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
createStyles.borderColor = createStyles;
createStyles.title = { lineHeight: 16, marginBottom: 8 };
createStyles.userContainer = { flexDirection: "row", alignItems: "center", justifyContent: "flex-start", minHeight: 40, borderRadius: nativeDefault.radii.sm, borderWidth: 1, padding: 12 };
createStyles.userProfileInfo = { marginLeft: 8 };
let closure_5 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsUserPreview.tsx");

export default function UserPreview(user) {
  user = user.user;
  const tmp = closure_5();
  let obj = useTypeConsolidationTextTransform;
  const typeConsolidationEyebrow = obj.useTypeConsolidationEyebrow("InAppReportsUserPreview", "text-xs/bold");
  let obj1 = ColorUtils;
  obj = { style: tmp.container, children: null };
  if (null != typeConsolidationEyebrow.style) {
    const items = [tmp.title, typeConsolidationEyebrow.style];
    let title = items;
  } else {
    title = tmp.title;
  }
  obj = { style: title, accessibilityRole: "header", variant: typeConsolidationEyebrow.variant, children: null };
  if (null != typeConsolidationEyebrow.style) {
    const intl2 = util.intl;
    let stringResult = intl2.string(util.t.Rsth7z);
  } else {
    const intl = util.intl;
    stringResult = intl.string(util.t.Rsth7z).toUpperCase();
    const str = intl.string(util.t.Rsth7z);
  }
  obj.children = stringResult;
  const items1 = [React3(Text_Text.Text, obj), ];
  obj1 = { style: null, children: null };
  const items2 = [tmp.userContainer, { borderColor: obj1.hexWithOpacity(tmp.borderColor.color, 0.08) }];
  obj1.style = items2;
  const hexWithOpacityResult = obj1.hexWithOpacity(tmp.borderColor.color, 0.08);
  const items3 = [React3(native.Avatar, { size: native.AvatarSizes.LARGE_48, user, guildId: "Array" }), ];
  const obj3 = { style: tmp.userProfileInfo, children: null };
  let tmp8Result = null != user.globalName;
  if (tmp8Result) {
    const obj4 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: user.globalName };
    tmp8Result = React3(Text_Text.Text, obj4);
  }
  const items4 = [tmp8Result, React3(Text_Text.Text, { color: "text-default", variant: "text-sm/normal", children: user.username })];
  obj3.children = items4;
  items3[1] = React4(View, obj3);
  obj1.children = items3;
  items1[1] = React4(View, obj1);
  obj.children = items1;
  return React4(View, obj);
};