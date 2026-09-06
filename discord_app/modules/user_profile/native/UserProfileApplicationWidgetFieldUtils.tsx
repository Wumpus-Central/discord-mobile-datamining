// === Module 9013: UserProfileApplicationWidgetFieldUtils ===

// Module 9013 (UserProfileApplicationWidgetFieldUtils)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import Text_Text from "Text/Text" /* 4556 */;
import UserProfileApplicationWidgetSkeletons from "UserProfileApplicationWidgetSkeletons" /* 9014 */;
import ApplicationWidgetMarkupUtils from "ApplicationWidgetMarkupUtils" /* 9015 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Image: c2, View: c3 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
fn(4560);
let createStyles = { fieldTextRow: null, fieldIcon: null };
createStyles = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
createStyles.fieldTextRow = createStyles;
createStyles.fieldIcon = { width: 16, height: 16 };
let closure_6 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileApplicationWidgetFieldUtils.tsx");

export const formatDurationNarrow = function formatDurationNarrow(arg0) {
  let num = 0;
  if (Number.isFinite(arg0)) {
    const _Math = Math;
    const _Math2 = Math;
    num = Math.max(0, Math.floor(arg0));
  }
  const rounded = Math.floor(num / 3600000);
  const result = Math.floor(num / 60000) % 60;
  const result1 = Math.floor(num / 1000) % 60;
  const items = [];
  if (rounded > 0) {
    const intl = util.intl;
    let obj = { hours: rounded };
    items.push(intl.formatToPlainString(util.t.rhY1Rs, obj));
  }
  if (0 < result) {
    const intl2 = util.intl;
    obj = { minutes: result };
    items.push(intl2.formatToPlainString(util.t["XIGt+W"], obj));
  }
  let tmp10 = result1 > 0;
  if (0 >= result1) {
    tmp10 = 0 === items.length;
  }
  if (tmp10) {
    const intl3 = util.intl;
    obj = { seconds: result1 };
    items.push(intl3.formatToPlainString(util.t.pyvjRp, obj));
  }
  return items.join(" ");
};
export const FieldText = function FieldText(arg0) {
  ({ field, variant } = arg0);
  ({ color, skeletonWidthChars } = arg0);
  const tmp = closure_6();
  if ("hidden" === field.status) {
    return null;
  } else if ("skeleton" === field.status) {
    let obj = { variant, widthChars: skeletonWidthChars };
    let tmp9Result = React4(UserProfileApplicationWidgetSkeletons.TextSkeleton, obj);
  } else {
    obj = { style: tmp.fieldTextRow, children: null };
    const obj1 = { variant, color, lineClamp: 2, children: null };
    const obj2 = { linkVariant: variant };
    obj1.children = ApplicationWidgetMarkupUtils.parseApplicationWidgetText(field.text, obj2);
    const items = [React4(Text_Text.Text, obj1), ];
    let tmp11Result = null != field.icon;
    if (tmp11Result) {
      obj = { source: null, style: null, resizeMode: "contain" };
      const obj3 = { uri: field.icon.url };
      obj.source = obj3;
      obj.style = tmp.fieldIcon;
      tmp11Result = tmp11(React2, obj);
    }
    items[1] = tmp11Result;
    obj.children = items;
    tmp9Result = hasOwnProperty(React3, obj);
    tmp11 = React4;
  }
};