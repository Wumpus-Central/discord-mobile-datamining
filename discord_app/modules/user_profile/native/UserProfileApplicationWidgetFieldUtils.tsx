// === Module 12255: UserProfileApplicationWidgetFieldUtils ===

// Module 12255 (UserProfileApplicationWidgetFieldUtils)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import PlatformUtils from "PlatformUtils" /* 1380 */;
import Text_Text from "Text/Text" /* 5929 */;
import useFontScale from "useFontScale" /* 5944 */;
import FastImageDefault from "FastImage" /* 6020 */;
import noop from "module_19" /* 19 */;

const UserProfileApplicationWidgetSkeletons = TextSkeleton(12256);
const ApplicationWidgetMarkupUtils = TextSkeleton(12257);
require = fn;
get_ActivityIndicator = fn(17);
({ PixelRatio: c3, View: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: closure_6 } = jsxProd);
let createStyles = fn(5306);
let obj2 = { fieldTextRow: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 }, fieldIcon: { width: 16, height: 16 } };
let closure_7 = createStyles.createStyles(obj2);
createStyles = fn(5306);
let closure_8 = createStyles.createStyles((paddingTop) => ({ text: { paddingTop, marginTop: -paddingTop } }));
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileApplicationWidgetFieldUtils.tsx");

export function useEmojiOverflowStyle(arg0) {
  const fontScale = useFontScale.useFontScale();
  let num = 0;
  if (obj2.isIOS()) {
    num = React3.roundToNearestPixel(Text_Text.TextStyleSheet[arg0].fontSize * fontScale * 0.25);
  }
  let text;
  if (num > 0) {
    text = closure_8(num).text;
  }
  return text;
}
export function formatDurationNarrow(result1) {
  let num = 0;
  if (Number.isFinite(result1)) {
    const _Math = Math;
    const _Math2 = Math;
    num = Math.max(0, Math.floor(result1));
  }
  const rounded = Math.floor(num / 3600000);
  const result = Math.floor(num / 60000) % 60;
  result1 = Math.floor(num / 1000) % 60;
  items = [];
  if (rounded > 0) {
    const intl = util.intl;
    const obj = { hours: rounded };
    items.push(intl.formatToPlainString(util.t.rhY1Rs, obj));
  }
  if (0 < result) {
    const intl2 = util.intl;
    const obj2 = { minutes: result };
    items.push(intl2.formatToPlainString(util.t["XIGt+W"], obj2));
  }
  let tmp10 = result1 > 0;
  if (0 >= result1) {
    tmp10 = 0 === items.length;
  }
  if (tmp10) {
    const intl3 = util.intl;
    const obj3 = { seconds: result1 };
    items.push(intl3.formatToPlainString(util.t.pyvjRp, obj3));
  }
  return items.join(" ");
}
export function FieldText(arg0) {
  ({ field, variant } = arg0);
  ({ color, skeletonWidthChars } = arg0);
  const tmp = closure_7();
  let TextSkeleton = require;
  let obj = dependencyMap;
  const fontScale = useFontScale.useFontScale();
  let num = 0;
  if (obj3.isIOS()) {
    num = React3.roundToNearestPixel(Text_Text.TextStyleSheet[variant].fontSize * fontScale * 0.25);
  }
  if (num > 0) {
    const text = closure_8(num).text;
  }
  if ("hidden" === field.status) {
    return null;
  } else if ("skeleton" === field.status) {
    TextSkeleton = UserProfileApplicationWidgetSkeletons.TextSkeleton;
    obj = { variant, widthChars: skeletonWidthChars };
    let tmp9Result = hasOwnProperty(TextSkeleton, obj);
  } else {
    const obj4 = { style: tmp.fieldTextRow, children: null };
    const obj5 = { variant, color, lineClamp: 2, style: text, children: null };
    const obj6 = { linkVariant: variant };
    obj5.children = ApplicationWidgetMarkupUtils.parseApplicationWidgetText(field.text, obj6);
    items = [hasOwnProperty(Text_Text.Text, obj5), ];
    let tmp11Result = null != field.icon;
    if (tmp11Result) {
      const obj7 = { source: null, style: null, resizeMode: "contain" };
      const obj8 = { uri: field.icon.url };
      obj7.source = obj8;
      obj7.style = tmp.fieldIcon;
      tmp11Result = hasOwnProperty(FastImageDefault, obj7);
    }
    items[1] = tmp11Result;
    obj4.children = items;
    tmp9Result = timestampProducer(React4, obj4);
    const TextSkeletonResult = ApplicationWidgetMarkupUtils;
  }
  obj3 = PlatformUtils;
}