// === Module 9469: IndicatorDot ===

// Module 9469 (IndicatorDot)
import _mod17 from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import nativeDefault from "native" /* 575 */;
import IndicatorDotShared from "IndicatorDotShared" /* 9470 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

const View = _mod17.View;
const jsx = jsxProd.jsx;
let obj = { xs: nativeDefault.space.PX_4, sm: nativeDefault.space.PX_6, md: nativeDefault.space.PX_8, lg: nativeDefault.space.PX_10 };
const obj2 = { dot: { borderRadius: nativeDefault.radii.round }, primary: null, notification: null, neutral: null, active: null, "cutout-base-lower": null };
const obj3 = { borderRadius: nativeDefault.radii.round };
obj2.primary = { backgroundColor: nativeDefault.colors.BADGE_PRIMARY_BACKGROUND };
const obj4 = { backgroundColor: nativeDefault.colors.BADGE_PRIMARY_BACKGROUND };
obj2.notification = { backgroundColor: nativeDefault.colors.BADGE_NOTIFICATION_BACKGROUND };
const obj5 = { backgroundColor: nativeDefault.colors.BADGE_NOTIFICATION_BACKGROUND };
obj2.neutral = { backgroundColor: nativeDefault.colors.ICON_STRONG };
const obj6 = { backgroundColor: nativeDefault.colors.ICON_STRONG };
obj2.active = { backgroundColor: nativeDefault.colors.STATUS_POSITIVE };
const obj7 = { backgroundColor: nativeDefault.colors.STATUS_POSITIVE };
obj2["cutout-base-lower"] = { borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
let closure_5 = createStyles.createStyles(obj2);
const result = size.fileFinishedImporting("design/components/IndicatorDot/native/IndicatorDot.native.tsx");

export function IndicatorDot(variant) {
  let DEFAULT_INDICATOR_DOT_VARIANT = variant.variant;
  if (DEFAULT_INDICATOR_DOT_VARIANT === undefined) {
    DEFAULT_INDICATOR_DOT_VARIANT = IndicatorDotShared.DEFAULT_INDICATOR_DOT_VARIANT;
  }
  let DEFAULT_INDICATOR_DOT_SIZE = variant.size;
  if (DEFAULT_INDICATOR_DOT_SIZE === undefined) {
    DEFAULT_INDICATOR_DOT_SIZE = IndicatorDotShared.DEFAULT_INDICATOR_DOT_SIZE;
  }
  ({ cutout, aria-label: tmp5 } = variant);
  const tmp6 = closure_5();
  const items = [tmp6.dot, tmp6[DEFAULT_INDICATOR_DOT_VARIANT], , ];
  if (null != cutout) {
    const size = { width: tmp10 + 4, height: tmp10 + 4, borderWidth: 2, margin: -2 };
    let size1 = size;
  } else {
    size1 = { width: tmp10, height: tmp10 };
  }
  items[2] = size1;
  let tmp11 = null != cutout;
  if (tmp11) {
    const _HermesInternal = HermesInternal;
    tmp11 = tmp6["cutout-" + cutout];
  }
  obj = { style: items, accessible: null != tmp5, accessibilityRole: null, accessibilityLabel: null, accessibilityElementsHidden: null, importantForAccessibility: null };
  items[3] = tmp11;
  let str2;
  if (null != tmp5) {
    str2 = "image";
  }
  obj.accessibilityRole = str2;
  obj.accessibilityLabel = tmp5;
  obj.accessibilityElementsHidden = null == tmp5;
  let str3 = "no-hide-descendants";
  if (null != tmp5) {
    str3 = "yes";
  }
  obj.importantForAccessibility = str3;
  return <View style={items} accessible={null != tmp5} accessibilityRole={null} accessibilityLabel={null} accessibilityElementsHidden={null} importantForAccessibility={null} />;
}