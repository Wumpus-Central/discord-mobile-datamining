// === Module 16374: YouBarButton ===

// Module 16374 (YouBarButton)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import shared_components_BadgeDefault from "shared_components/Badge" /* 7514 */;
import IconButton2 from "IconButton" /* 7586 */;
import ClipView from "ClipView" /* 8502 */;
import react from "react" /* 19 */;
import YouBarConstants from "YouBarConstants" /* 14915 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const ClipViewDefault = ClipView;
let children;

let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
const View = react_native.View;
({ YOU_BAR_BUTTON_HIT_SLOP: hasOwnProperty, YOU_BAR_BUTTON_ICON_SIZE: metroRequire } = YouBarConstants);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let obj = { buttonContainer: obj2 };
obj2 = { position: "relative", borderRadius: nativeDefault.modules.button.BORDER_RADIUS, overflow: "hidden" };
let closure_9 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? ((badgeRadius) => {
  let badgeWidth;
  let borderWidth;
  let xOffset;
  let yOffset;
  const obj = react2;
  const cResult = obj.c(6);
  ({ size, xOffset, yOffset, badgeWidth, borderWidth } = badgeRadius);
  const sum = badgeRadius.badgeRadius + borderWidth;
  const result = 2 * sum;
  let sum1 = result;
  if (null != badgeWidth) {
    sum1 = badgeWidth + 2 * borderWidth;
  }
  let num = 0;
  const diff = size - (result - borderWidth);
  if (undefined !== xOffset) {
    num = xOffset;
  }
  const sum2 = diff + num;
  let num2 = 0;
  const diff1 = size - (result - borderWidth);
  if (undefined !== yOffset) {
    num2 = yOffset;
  }
  const sum3 = diff1 + num2;
  const bound = Math.min(sum, size / 2, sum1 / 2);
  if (cResult[0] === result) {
    if (cResult[1] === sum2) {
      if (cResult[2] === sum3) {
        if (cResult[3] === bound) {
          let tmp12;
          if (cResult[4] === sum1) {
            tmp12 = cResult[5];
          }
          return tmp12;
        }
      }
    }
  }
  const size1 = { shape: ClipView.CutoutShape.RoundedRect, x: sum2, y: sum3, width: sum1, height: result, cornerRadius: bound };
  cResult[0] = result;
  cResult[1] = sum2;
  cResult[2] = sum3;
  cResult[3] = bound;
  cResult[4] = sum1;
  cResult[5] = size1;
  tmp12 = size1;
}) : ((size) => {
  size = size.size;
  let num = size.xOffset;
  if (num === undefined) {
    num = 0;
  }
  let num2 = size.yOffset;
  if (num2 === undefined) {
    num2 = 0;
  }
  const badgeRadius = size.badgeRadius;
  const badgeWidth = size.badgeWidth;
  const borderWidth = size.borderWidth;
  const items = [badgeRadius, borderWidth, size, num, num2, badgeWidth];
  return badgeRadius.useMemo(() => {
    const sum = badgeRadius + borderWidth;
    const result = 2 * sum;
    let sum1 = result;
    if (null != badgeWidth) {
      sum1 = tmp4 + 2 * borderWidth;
    }
    size = { shape: ClipView.CutoutShape.RoundedRect, x: size - (result - borderWidth) + num, y: size - (result - borderWidth) + num2, width: sum1, height: result, cornerRadius: Math.min(sum, size / 2, sum1 / 2) };
    return size;
  }, items);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let badgeSize;
  let xOffset;
  let yOffset;
  const obj = react2;
  const cResult = obj.c(3);
  ({ size, badgeSize, xOffset, yOffset } = arg0);
  let num = 0;
  const diff = size - badgeSize;
  if (undefined !== xOffset) {
    num = xOffset;
  }
  const sum = diff + num;
  let num2 = 0;
  const diff1 = size - badgeSize;
  if (undefined !== yOffset) {
    num2 = yOffset;
  }
  const sum1 = diff1 + num2;
  if (cResult[0] === sum) {
    let tmp6;
    if (cResult[1] === sum1) {
      tmp6 = cResult[2];
    }
    return tmp6;
  }
  const rect = { position: "absolute", left: sum, top: sum1, right: "concat", bottom: "TypeError", padding: "keys", minWidth: "ind" };
  cResult[0] = sum;
  cResult[1] = sum1;
  cResult[2] = rect;
  tmp6 = rect;
}) : ((size) => {
  size = size.size;
  const badgeSize = size.badgeSize;
  let num = size.xOffset;
  if (num === undefined) {
    num = 0;
  }
  let num2 = size.yOffset;
  if (num2 === undefined) {
    num2 = 0;
  }
  const items = [size, badgeSize, num2, num];
  return react.useMemo(() => {
    const rect = { position: "absolute", left: size - badgeSize + num, top: size - badgeSize + num2, right: "concat", bottom: "TypeError", padding: "keys", minWidth: "ind" };
    return rect;
  }, items);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let badgeStyle;
  let first;
  let hasBadge;
  let icon;
  let items;
  let items2;
  let tmp6;
  const obj = react2;
  const cResult = obj.c(16);
  ({ icon, hasBadge, badgeStyle } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { size: width, badgeRadius: 4, borderWidth: 2 };
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  const tmp5 = closure_10(first);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { size: width, badgeSize: 8 };
    cResult[1] = obj3;
    tmp6 = obj3;
  } else {
    tmp6 = cResult[1];
  }
  const tmp8 = closure_11(tmp6);
  if (cResult[2] === tmp5) {
    let tmp9;
    let tmp10;
    if (cResult[3] === hasBadge) {
      tmp9 = cResult[4];
    }
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      size = { position: "relative", height: width, width };
      cResult[5] = size;
      tmp10 = size;
    } else {
      tmp10 = cResult[5];
    }
    if (cResult[6] === tmp9) {
      let tmp12;
      if (cResult[7] === icon) {
        tmp12 = cResult[8];
      }
      if (cResult[9] === badgeStyle) {
        if (cResult[10] === hasBadge) {
          let tmp16;
          if (cResult[11] === tmp8) {
            tmp16 = cResult[12];
          }
          if (cResult[13] === tmp12) {
            let tmp20;
            if (cResult[14] === tmp16) {
              tmp20 = cResult[15];
            }
            return tmp20;
          }
          const obj4 = { style: tmp10, children: items };
          items = [tmp12, tmp16];
          const tmp23 = metroImportAll(View, obj4);
          cResult[13] = tmp12;
          cResult[14] = tmp16;
          cResult[15] = tmp23;
          tmp20 = tmp23;
        }
      }
      let tmp17 = hasBadge;
      if (tmp17) {
        const obj5 = { style: tmp8, size: 8, badgeStyle };
        tmp17 = metroImportDefault(shared_components_BadgeDefault, obj5);
      }
      cResult[9] = badgeStyle;
      cResult[10] = hasBadge;
      cResult[11] = tmp8;
      cResult[12] = tmp17;
      tmp16 = tmp17;
    }
    const obj6 = { cutouts: tmp9, children: icon };
    const tmp15 = metroImportDefault(ClipViewDefault, obj6);
    cResult[6] = tmp9;
    cResult[7] = icon;
    cResult[8] = tmp15;
    tmp12 = tmp15;
  }
  if (hasBadge) {
    const items1 = [tmp5];
    items2 = items1;
  } else {
    items2 = [];
  }
  cResult[2] = tmp5;
  cResult[3] = hasBadge;
  cResult[4] = items2;
  tmp9 = items2;
}) : ((hasBadge) => {
  let badgeStyle;
  let icon;
  let items1;
  hasBadge = hasBadge.hasBadge;
  const obj = { size: width, badgeRadius: 4, borderWidth: 2 };
  ({ icon, badgeStyle } = hasBadge);
  const tmp = closure_10(obj);
  let closure_1 = tmp;
  let items = [, ];
  const obj2 = { size: width, badgeSize: 8 };
  items[0] = tmp;
  items[1] = hasBadge;
  const obj3 = { style: { position: "relative", height: width, width }, children: items1 };
  const tmp2 = closure_11(obj2);
  const memo = react.useMemo(() => {
    let items1;
    if (hasBadge) {
      const items = [closure_1];
      items1 = items;
    } else {
      items1 = [];
    }
    return items1;
  }, items);
  items1 = [metroImportDefault(ClipViewDefault, { cutouts: memo, children: icon }), ];
  if (hasBadge) {
    const obj4 = { style: tmp2, size: 8, badgeStyle };
    hasBadge = metroImportDefault(shared_components_BadgeDefault, obj4);
  }
  items1[1] = hasBadge;
  return metroImportAll(View, obj3);
});
let closure_12 = tmp4;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((children) => {
  const obj = react2;
  const cResult = obj.c(3);
  children = children.children;
  const tmp2 = closure_9();
  if (cResult[0] === children) {
    let tmp3;
    if (cResult[1] === tmp2.buttonContainer) {
      tmp3 = cResult[2];
    }
    return tmp3;
  }
  const obj2 = { style: tmp2.buttonContainer, children };
  const tmp4 = metroImportDefault(View, obj2);
  cResult[0] = children;
  cResult[1] = tmp2.buttonContainer;
  cResult[2] = tmp4;
  tmp3 = tmp4;
}) : ((children) => {
  const obj = { style: closure_9().buttonContainer, children: children.children };
  return metroImportDefault(View, obj);
});
let closure_13 = tmp5;
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((hasNameplate) => {
  let accessibilityLabel;
  let badgeStyle;
  let hasBadge;
  let icon;
  let obj3;
  let onLongPress;
  let onPress;
  const obj = react2;
  const cResult = obj.c(10);
  ({ icon, hasBadge, badgeStyle, onPress, onLongPress, accessibilityLabel } = hasNameplate);
  let str = "tertiary";
  if (hasNameplate.hasNameplate) {
    str = "secondary-overlay";
  }
  if (cResult[0] === badgeStyle) {
    if (cResult[1] === hasBadge) {
      let tmp4;
      if (cResult[2] === icon) {
        tmp4 = cResult[3];
      }
      if (cResult[4] === accessibilityLabel) {
        if (cResult[5] === onLongPress) {
          if (cResult[6] === onPress) {
            if (cResult[7] === str) {
              let tmp6;
              if (cResult[8] === tmp4) {
                tmp6 = cResult[9];
              }
              return tmp6;
            }
          }
        }
      }
      const obj2 = { children: metroImportDefault(IconButton2.IconButton, obj3) };
      obj3 = { accessibilityLabel, variant: str, size: "sm", icon: tmp4, onPress, onLongPress, hitSlop: hasOwnProperty };
      const tmp10 = metroImportDefault(closure_13, obj2);
      cResult[4] = accessibilityLabel;
      cResult[5] = onLongPress;
      cResult[6] = onPress;
      cResult[7] = str;
      cResult[8] = tmp4;
      cResult[9] = tmp10;
      tmp6 = tmp10;
    }
  }
  const tmp5 = metroImportDefault(closure_12, { icon, badgeStyle, hasBadge });
  cResult[0] = badgeStyle;
  cResult[1] = hasBadge;
  cResult[2] = icon;
  cResult[3] = tmp5;
  tmp4 = tmp5;
}) : ((arg0) => {
  let accessibilityLabel;
  let badgeStyle;
  let hasBadge;
  let hasNameplate;
  let icon;
  let onLongPress;
  let onPress;
  let str;
  ({ hasNameplate, icon, hasBadge, badgeStyle, onPress, onLongPress, accessibilityLabel } = arg0);
  const obj = { accessibilityLabel, variant: str, size: "sm", icon: metroImportDefault(closure_12, { icon, badgeStyle, hasBadge }), onPress, onLongPress, hitSlop: hasOwnProperty };
  str = "tertiary";
  const IconButton = IconButton2.IconButton;
  if (hasNameplate) {
    str = "secondary-overlay";
  }
  const obj2 = { children: metroImportDefault(IconButton, obj) };
  return metroImportDefault(closure_13, obj2);
}));
let size = size_mod;
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBarButton.tsx");

export default memoResult;
export const YouBarButtonIcon = tmp4;
export const YouBarButtonContainer = tmp5;