// discord_app/design/void/NewTag/native/NewTag.tsx
import "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import { HorizontalGradient } from "ME";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import { LinearGradient } from "../../../../../_runtime/04725_LinearGradient.js";
import { Themes } from "../../../../../discord_common/js/packages/tokens/native.tsx";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { Text } from "../../../components/Text/native/Text.tsx";

let Platform;
let c3;
const require = arg1;
({ View: c3, Platform } = get_ActivityIndicator);
createCacheKey = { tagContainer: null, tagText: null };
createCacheKey = { height: "auto", backgroundColor: require("Themes").unsafe_rawColors.RED_400, justifyContent: "center", alignItems: "center", paddingHorizontal: 4, marginBottom: 2, borderRadius: require("Themes").radii.round };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { textTransform: "uppercase" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("ME").fileFinishedImporting("design/void/NewTag/native/NewTag.tsx");

export default function NewTag(color) {
  let containerStyle;
  let textStyle;
  let variant;
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
    sm = Themes.radii.sm;
  }
  let colors = color.colors;
  if (colors === undefined) {
    const items = [Themes.unsafe_rawColors.PREMIUM_TIER_2_PURPLE, Themes.unsafe_rawColors.PREMIUM_TIER_2_PINK];
    colors = items;
  }
  const merged = Object.assign(color, Object.create(null));
  const tmp6 = createCacheKey();
  if (flag) {
    let obj = { style: null, start: null, end: null, colors: null, children: null };
    obj = { borderRadius: null, marginLeft: null };
    obj[0] = sm;
    obj[1] = Themes.space.PX_4;
    obj[0] = obj;
    ({ START: obj3[1], END: obj3[2] } = HorizontalGradient);
    obj[3] = colors;
    const obj1 = { style: null, children: null };
    const items1 = [tmp6.tagContainer, containerStyle];
    obj1[0] = items1;
    const obj2 = { variant: null, color: null };
    obj2[0] = variant;
    obj2[1] = str;
    const merged1 = Object.assign(merged);
    const items2 = [tmp6.tagText, textStyle];
    obj2.style = items2;
    const intl2 = getSystemLocale.intl;
    obj2.children = intl2.string(getSystemLocale.t.y2b7CA);
    obj1[1] = tmp7(Text.Text, obj2);
    obj[4] = tmp7(closure_3, obj1);
    let tmp7Result = tmp7(LinearGradient, obj);
    const tmp17 = LinearGradient;
  } else {
    obj = { style: null, children: null };
    const items3 = [tmp6.tagContainer, containerStyle];
    obj[0] = items3;
    const obj3 = { variant: null, color: null };
    obj3[0] = variant;
    obj3[1] = str;
    const merged2 = Object.assign(merged);
    const items4 = [tmp6.tagText, textStyle];
    obj3.style = items4;
    const intl = getSystemLocale.intl;
    obj3.children = intl.string(getSystemLocale.t.y2b7CA);
    obj[1] = tmp7(Text.Text, obj3);
    tmp7Result = tmp7(closure_3, obj);
  }
  return tmp7Result;
};