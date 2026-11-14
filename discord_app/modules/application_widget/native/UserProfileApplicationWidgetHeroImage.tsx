// === Module 12259: UserProfileApplicationWidgetHeroImage ===

// Module 12259 (UserProfileApplicationWidgetHeroImage)
import LinearGradientDefault from "LinearGradient" /* 5893 */;
import FastImageDefault from "FastImage" /* 6020 */;
import _modDef7533 from "module_7533" /* 7533 */;
import noop from "module_19" /* 19 */;

const View = fn(17).View;
const HorizontalGradient = fn(1072).HorizontalGradient;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const colors = ["transparent", "black"];
const createStyles = fn(5306);
let closure_7 = createStyles.createStyles({ mask: { flex: 1, flexDirection: "row" }, gradient: { width: 130 }, remainder: { flex: 1, backgroundColor: "black" }, imageClip: { width: "100%", height: "100%", overflow: "hidden" }, image: { position: "absolute", top: 0, right: 0, width: "100%" } });
let size = fn(2);
let result = size.fileFinishedImporting("modules/application_widget/native/UserProfileApplicationWidgetHeroImage.tsx");

export default function UserProfileApplicationWidgetHeroImage(arg0) {
  ({ media, width, height } = arg0);
  const tmp = closure_7();
  let str;
  if (null != width) {
    const _Math = Math;
    str = Math.min(width, 212);
  }
  let result;
  if (null != str) {
    result = str * media.height / media.width;
  }
  let bound = height;
  if (null != result) {
    let tmp6 = height;
    if (height == null) {
      tmp6 = result;
    }
    bound = Math.min(tmp6, result);
  }
  let str2 = str;
  if (str == null) {
    str2 = "100%";
  }
  const size = { width: str2, maxWidth: 212, alignSelf: "flex-end", height: bound, aspectRatio: null, overflow: "hidden" };
  let result1;
  if (null == bound) {
    result1 = media.width / media.height;
  }
  const obj = { style: size, androidRenderingMode: "hardware", maskElement: null, children: null };
  size.aspectRatio = result1;
  const obj2 = { style: tmp.mask, children: null };
  items = [React4(LinearGradientDefault, { start: HorizontalGradient.START, end: HorizontalGradient.END, colors, style: tmp.gradient }), React4(View, { style: tmp.remainder })];
  obj2.children = items;
  obj.maskElement = hasOwnProperty(View, obj2);
  const obj5 = { style: tmp.imageClip, collapsable: false, children: null };
  const obj6 = { source: { uri: media.url }, style: null, resizeMode: "cover" };
  const items1 = [tmp.image, ];
  const obj3 = { start: HorizontalGradient.START, end: HorizontalGradient.END, colors, style: tmp.gradient };
  const obj4 = { style: tmp.remainder };
  const tmp10 = _modDef7533;
  if (str == null) {
    str = "100%";
  }
  items1[1] = { width: str, height: result, aspectRatio: media.width / media.height };
  obj6.style = items1;
  obj5.children = React4(FastImageDefault, obj6);
  obj.children = React4(View, obj5);
  return React4(tmp10, obj);
};