// === Module 15774: IndicatorDot ===

// Module 15774 (IndicatorDot)
import _mod17 from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import IndicatorDotShared from "IndicatorDotShared" /* 15775 */;
import createStyles from "createStyles" /* 5005 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const View = _mod17.View;
const jsx = jsxProd.jsx;
let obj = { xs: nativeDefault.space.PX_4, sm: nativeDefault.space.PX_6, md: nativeDefault.space.PX_8, lg: nativeDefault.space.PX_10 };
let obj2 = { dot: { borderRadius: nativeDefault.radii.round }, primary: null, notification: null, neutral: null, active: null, "cutout-base-lower": null };
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
const obj8 = { borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
const result = size.fileFinishedImporting("design/components/IndicatorDot/native/IndicatorDot.native.tsx");

export const IndicatorDot = ReactCompilerGating.isReactCompilerEnabled() ? (function IndicatorDot(arg0) {
  obj = c;
  const cResult = obj.c(15);
  ({ variant, size, cutout, aria-label: tmp4 } = arg0);
  if (undefined === variant) {
    variant = IndicatorDotShared.DEFAULT_INDICATOR_DOT_VARIANT;
  }
  if (undefined === size) {
    size = IndicatorDotShared.DEFAULT_INDICATOR_DOT_SIZE;
  }
  const tmp5 = closure_5();
  if (cResult[0] === size) {
    if (cResult[1] === tmp9) {
      let tmp12 = null != cutout;
      if (tmp12) {
        const _HermesInternal = HermesInternal;
        tmp12 = tmp5["cutout-" + cutout];
      }
      if (cResult[3] === tmp5.dot) {
        if (cResult[4] === tmp8) {
          if (cResult[5] === tmp10) {
            if (cResult[6] === tmp12) {
              let tmp14 = cResult[7];
            }
            let str2;
            if (tmp6) {
              str2 = "image";
            }
            let str3 = "no-hide-descendants";
            if (tmp6) {
              str3 = "yes";
            }
            if (cResult[8] === tmp4) {
              if (cResult[9] === tmp6) {
                if (cResult[10] === tmp15) {
                  if (cResult[11] === str3) {
                    if (cResult[12] === tmp14) {
                      if (cResult[13] === str2) {
                        let tmp16 = cResult[14];
                      }
                      return tmp16;
                    }
                  }
                }
              }
            }
            const obj2 = { style: tmp14, accessible: tmp6, accessibilityRole: str2, accessibilityLabel: tmp4, accessibilityElementsHidden: !tmp6, importantForAccessibility: str3 };
            const tmp19 = <View style={tmp14} accessible={tmp6} accessibilityRole={str2} accessibilityLabel={tmp4} accessibilityElementsHidden={!tmp6} importantForAccessibility={str3} />;
            cResult[8] = tmp4;
            cResult[9] = tmp6;
            cResult[10] = !tmp6;
            cResult[11] = str3;
            cResult[12] = tmp14;
            cResult[13] = str2;
            cResult[14] = tmp19;
            tmp16 = tmp19;
          }
        }
      }
      const items = [tmp7, tmp8, cResult[2], tmp12];
      cResult[3] = tmp5.dot;
      cResult[4] = tmp8;
      cResult[5] = cResult[2];
      cResult[6] = tmp12;
      cResult[7] = items;
      tmp14 = items;
    }
  }
  let sum = obj[size];
  if (null != cutout) {
    const size1 = { width: sum + 4, height: null, borderWidth: 2, margin: -2 };
    sum = sum + 4;
    size1.height = sum;
    let size2 = size1;
  } else {
    size2 = { width: sum, height: sum };
  }
  cResult[0] = size;
  cResult[1] = null != cutout;
  cResult[2] = size2;
}) : (function IndicatorDot(variant) {
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
});