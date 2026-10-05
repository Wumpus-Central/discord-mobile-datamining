// === Module 6649: ActionSheetHeaderBar ===

// Module 6649 (ActionSheetHeaderBar)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl2 from "intl" /* 1126 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1484 */;
import useToken from "useToken" /* 4580 */;
import useIsScreenReaderEnabled from "useIsScreenReaderEnabled" /* 5770 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let c3;
let c9;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
({ Pressable: c3, StyleSheet: closure_4, TouchableWithoutFeedback: hasOwnProperty, View: metroRequire } = react_native);
({ jsx: metroImportDefault, Fragment: metroImportAll, jsxs: c9 } = Fragment);
let closure_10 = createStyles.createStyles((arg0, height, marginBottom) => {
  let obj6;
  let rect;
  let tmp4;
  const obj = { marginBottom };
  if ("floating" === arg0) {
    rect = { left: 0, right: 0, position: "absolute" };
  }
  const obj2 = { header: obj, indicator: size, accessibleDismiss: obj6 };
  const merged = Object.assign(rect);
  size = { alignSelf: "center", width: nativeDefault.modules.mobile.SHEET_HANDLE_WIDTH, height: nativeDefault.modules.mobile.SHEET_HANDLE_HEIGHT, borderRadius: nativeDefault.radii.sm, top: nativeDefault.modules.mobile.SHEET_HANDLE_MARGIN_TOP };
  if ("default" === arg0) {
    tmp4 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
    const obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
  } else if ("floating" === arg0) {
    tmp4 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
    const obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
  } else if ("overlay" === arg0) {
    const obj5 = { backgroundColor: nativeDefault.unsafe_rawColors.WHITE };
    const merged1 = Object.assign(nativeDefault.shadows.SHADOW_LOW);
    tmp4 = obj5;
  }
  const merged2 = Object.assign(tmp4);
  obj6 = { height, marginTop: -height + marginBottom };
  const merged3 = Object.assign(absoluteFillObject.absoluteFillObject);
  return obj2;
});
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let accessibilityLabel;
  let items;
  let items1;
  let onPress;
  let style;
  let tabStyle;
  let tmp4;
  let variant;
  const obj = react2;
  const cResult = obj.c(21);
  ({ accessibilityLabel, style, tabStyle, onPress, variant } = arg0);
  if (cResult[0] !== accessibilityLabel) {
    let stringResult = accessibilityLabel;
    if (undefined === accessibilityLabel) {
      const intl = intl2.intl;
      stringResult = intl.string(intl2.t.WAI6xu);
    }
    cResult[0] = accessibilityLabel;
    cResult[1] = stringResult;
    tmp4 = stringResult;
  } else {
    tmp4 = cResult[1];
  }
  let str = "default";
  if (undefined !== variant) {
    str = variant;
  }
  const height = useWindowDimensionsDefault().height;
  const tmpResult = useToken;
  const tmp6 = closure_10(str, height, tmpResult.useToken(nativeDefault.modules.mobile.SHEET_HANDLE_MARGIN_BOTTOM));
  useIsScreenReaderEnabled;
  if (cResult[2] === style) {
    let tmp9;
    if (cResult[3] === tmp6.header) {
      tmp9 = cResult[4];
    }
    if (cResult[5] === tmp6.indicator) {
      let tmp10;
      if (cResult[6] === tabStyle) {
        tmp10 = cResult[7];
      }
      if (cResult[8] === tmp9) {
        let tmp14;
        if (cResult[9] === tmp10) {
          tmp14 = cResult[10];
        }
        if (cResult[11] === onPress) {
          let tmp18;
          if (cResult[12] === tmp14) {
            tmp18 = cResult[13];
          }
          let tmp22 = tmp18;
          if (tmp8) {
            if (cResult[14] === tmp4) {
              if (cResult[15] === onPress) {
                let tmp23;
                if (cResult[16] === tmp6.accessibleDismiss) {
                  tmp23 = cResult[17];
                }
                if (cResult[18] === tmp18) {
                  let tmp27;
                  if (cResult[19] === tmp23) {
                    tmp27 = cResult[20];
                  }
                  tmp22 = tmp27;
                }
                const obj2 = { children: items };
                items = [tmp23, tmp18];
                const tmp30 = React4(metroImportAll, obj2);
                cResult[18] = tmp18;
                cResult[19] = tmp23;
                cResult[20] = tmp30;
                tmp27 = tmp30;
              }
            }
            const obj3 = { style: tmp6.accessibleDismiss, accessible: true, accessibilityLabel: tmp4, accessibilityRole: "button", onPress };
            const tmp26 = metroImportDefault(_false, obj3);
            cResult[14] = tmp4;
            cResult[15] = onPress;
            cResult[16] = tmp6.accessibleDismiss;
            cResult[17] = tmp26;
            tmp23 = tmp26;
          }
          return tmp22;
        }
        const obj4 = { onPress, onAccessibilityEscape: onPress, "aria-hidden": true, children: tmp14 };
        const tmp21 = metroImportDefault(hasOwnProperty, obj4);
        cResult[11] = onPress;
        cResult[12] = tmp14;
        cResult[13] = tmp21;
        tmp18 = tmp21;
      }
      const obj5 = { style: tmp9, children: tmp10 };
      const tmp17 = metroImportDefault(metroRequire, obj5);
      cResult[8] = tmp9;
      cResult[9] = tmp10;
      cResult[10] = tmp17;
      tmp14 = tmp17;
    }
    const obj6 = { style: items1 };
    items1 = [tmp6.indicator, tabStyle];
    const tmp13 = metroImportDefault(metroRequire, obj6);
    cResult[5] = tmp6.indicator;
    cResult[6] = tabStyle;
    cResult[7] = tmp13;
    tmp10 = tmp13;
  }
  const items2 = [tmp6.header, style];
  cResult[2] = style;
  cResult[3] = tmp6.header;
  cResult[4] = items2;
  tmp9 = items2;
}) : ((accessibilityLabel) => {
  let items;
  let items1;
  let items2;
  let obj4;
  let obj5;
  let onPress;
  let style;
  let tabStyle;
  let variant;
  accessibilityLabel = accessibilityLabel.accessibilityLabel;
  if (accessibilityLabel === undefined) {
    const intl = intl2.intl;
    accessibilityLabel = intl.string(intl2.t.WAI6xu);
  }
  ({ onPress, variant, style, tabStyle } = accessibilityLabel);
  if (variant === undefined) {
    variant = "default";
  }
  const height = useWindowDimensionsDefault().height;
  const obj = useToken;
  const tmp3 = closure_10(variant, height, obj.useToken(nativeDefault.modules.mobile.SHEET_HANDLE_MARGIN_BOTTOM));
  const obj3 = { onPress, onAccessibilityEscape: onPress, "aria-hidden": true, children: metroImportDefault(metroRequire, obj4) };
  obj4 = { style: items, children: metroImportDefault(metroRequire, obj5) };
  items = [tmp3.header, style];
  obj5 = { style: items1 };
  items1 = [tmp3.indicator, tabStyle];
  const obj2 = useIsScreenReaderEnabled;
  const isScreenReaderEnabled = obj2.useIsScreenReaderEnabled();
  const tmp6 = metroImportDefault(hasOwnProperty, obj3);
  let tmp7 = tmp6;
  if (isScreenReaderEnabled) {
    const obj6 = { children: items2 };
    const obj7 = { style: tmp3.accessibleDismiss, accessible: true, accessibilityLabel, accessibilityRole: "button", onPress };
    items2 = [metroImportDefault(_false, obj7), tmp6];
    tmp7 = React4(metroImportAll, obj6);
  }
  return tmp7;
});
let size = size_mod;
const result = size.fileFinishedImporting("design/components/Sheet/native/ActionSheetHeaderBar.native.tsx");

export const ActionSheetHeaderBar = tmp5;