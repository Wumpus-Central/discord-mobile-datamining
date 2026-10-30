// === Module 12709: ConjurePlanCommandMenuPreview ===

// Module 12709 (ConjurePlanCommandMenuPreview)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1114 */;
import AvatarUtils from "AvatarUtils" /* 1410 */;
import Text_Text from "Text/Text" /* 5619 */;
import FastImageDefault from "FastImage" /* 5712 */;
import ArrowAngleLeftUpIcon from "ArrowAngleLeftUpIcon" /* 12710 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5009);
let obj2 = { sheet: { gap: nativeDefault.space.PX_4, padding: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND }, row: null, muted: null, highlighted: null, label: null, appIcon: null };
let obj3 = { gap: nativeDefault.space.PX_4, padding: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
obj2.row = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.sm, borderWidth: 2, borderColor: "transparent", backgroundColor: nativeDefault.colors.TABLEROW_BACKGROUND_DEFAULT };
obj2.muted = { opacity: 0.5 };
const obj4 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.sm, borderWidth: 2, borderColor: "transparent", backgroundColor: nativeDefault.colors.TABLEROW_BACKGROUND_DEFAULT };
obj2.highlighted = { borderColor: nativeDefault.colors.BORDER_FOCUS };
obj2.label = { flexShrink: 1 };
let size = { width: 20, height: 20, borderRadius: nativeDefault.radii.sm };
obj2.appIcon = size;
let closure_6 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/plan/native/ConjurePlanCommandMenuPreview.tsx");

export default function ConjurePlanCommandMenuPreview(appIconSrc) {
  appIconSrc = appIconSrc.appIconSrc;
  ({ target, commandName } = appIconSrc);
  const tmp = closure_6();
  const obj = { style: tmp.sheet, pointerEvents: "none", accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: null };
  const obj2 = { style: null, children: null };
  const items = [, ];
  ({ row: arr[0], muted: arr[1] } = tmp);
  obj2.style = items;
  let tmp5 = null;
  if ("message" === target) {
    const obj3 = { size: "xs", color: nativeDefault.colors.ICON_DEFAULT };
    tmp5 = React4(ArrowAngleLeftUpIcon.ArrowAngleLeftUpIcon, obj3);
  }
  const items1 = [tmp5, ];
  const intl = util.intl;
  const t = util.t;
  items1[1] = React4(Text_Text.Text, { variant: "text-sm/medium", color: "text-default", children: intl.string("message" === target ? t["5IEsGx"] : t.LYju5J) });
  obj2.children = items1;
  const items2 = [hasOwnProperty(View, obj2), ];
  const obj5 = { style: null, children: null };
  const items3 = [, ];
  ({ row: arr4[0], highlighted: arr4[1] } = tmp);
  obj5.style = items3;
  let tmp10Result = null;
  if (null != appIconSrc) {
    const obj6 = { source: null, style: null };
    const tmp15 = FastImageDefault;
    obj6.source = AvatarUtils.makeSource(appIconSrc);
    obj6.style = tmp.appIcon;
    tmp10Result = React4(tmp15, obj6);
    const tmp11Result = AvatarUtils;
  }
  const items4 = [tmp10Result, React4(Text_Text.Text, { variant: "text-sm/medium", color: "text-strong", style: tmp.label, children: commandName })];
  obj5.children = items4;
  items2[1] = hasOwnProperty(View, obj5);
  obj.children = items2;
  return hasOwnProperty(View, obj);
};