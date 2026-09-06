// === Module 14094: NewTag ===

// Module 14094 (NewTag)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import Text_Text from "Text/Text" /* 4556 */;
import LinearGradientDefault from "LinearGradient" /* 4987 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, Platform } = get_ActivityIndicator);
const HorizontalGradient = fn(1074).HorizontalGradient;
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { tagContainer: null, tagText: null };
createStyles = { height: "auto", backgroundColor: nativeDefault.unsafe_rawColors.RED_400, justifyContent: "center", alignItems: "center", paddingHorizontal: 4, marginBottom: 2, borderRadius: nativeDefault.radii.round };
createStyles.tagContainer = createStyles;
createStyles.tagText = { textTransform: "uppercase" };
let closure_6 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("design/void/NewTag/native/NewTag.tsx");

export default function NewTag(color) {
  ({ containerStyle, textStyle, variant } = color);
  if (variant === undefined) {
    variant = "heading-sm/semibold";
  }
  let str = color.color;
  if (str === undefined) {
    str = "text-overlay-light";
  }
  let flag = color.gradient;
  if (flag === undefined) {
    flag = false;
  }
  let sm = color.borderRadius;
  if (sm === undefined) {
    sm = nativeDefault.radii.sm;
  }
  let colors = color.colors;
  if (colors === undefined) {
    const items = [nativeDefault.unsafe_rawColors.PREMIUM_TIER_2_PURPLE, nativeDefault.unsafe_rawColors.PREMIUM_TIER_2_PINK];
    colors = items;
  }
  const merged = Object.assign(color, Object.assign({ containerStyle: 0, textStyle: 0, variant: 0, color: 0, gradient: 0, borderRadius: 0, colors: 0 }));
  const tmp6 = closure_6();
  if (flag) {
    let obj = { style: null, start: null, end: null, colors: null, children: null };
    obj = { borderRadius: sm, marginLeft: nativeDefault.space.PX_4 };
    obj.style = obj;
    ({ START: obj3.start, END: obj3.end } = HorizontalGradient);
    obj.colors = colors;
    const obj1 = { style: null, children: null };
    const items1 = [tmp6.tagContainer, containerStyle];
    obj1.style = items1;
    const obj2 = { variant, color: str };
    const merged1 = Object.assign(merged);
    const items2 = [tmp6.tagText, textStyle];
    obj2.style = items2;
    const intl2 = util.intl;
    obj2.children = intl2.string(util.t.y2b7CA);
    obj1.children = tmp7(Text_Text.Text, obj2);
    obj.children = tmp7(React3, obj1);
    let tmp7Result = tmp7(LinearGradientDefault, obj);
  } else {
    obj = { style: null, children: null };
    const items3 = [tmp6.tagContainer, containerStyle];
    obj.style = items3;
    const obj3 = { variant, color: str };
    const merged2 = Object.assign(merged);
    const items4 = [tmp6.tagText, textStyle];
    obj3.style = items4;
    const intl = util.intl;
    obj3.children = intl.string(util.t.y2b7CA);
    obj.children = tmp7(Text_Text.Text, obj3);
    tmp7Result = tmp7(React3, obj);
  }
  return tmp7Result;
};