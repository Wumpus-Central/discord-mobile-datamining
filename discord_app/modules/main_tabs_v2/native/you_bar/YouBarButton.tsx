// discord_app/modules/main_tabs_v2/native/you_bar/YouBarButton.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import BadgeDefault from "../shared_components/Badge.tsx";
import IconButton from "../../../../design/components/Button/native/IconButton.native.tsx";
import ClipView from "../../../../design/components/Icon/native/ClipView.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const ClipViewDefault = ClipView;

require = fn;
const View = fn(17).View;
const YouBarConstants = fn(14899);
({ YOU_BAR_BUTTON_HIT_SLOP: hasOwnProperty, YOU_BAR_BUTTON_ICON_SIZE: metroRequire } = YouBarConstants);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4890);
let obj = {
  buttonContainer: {
    position: "relative",
    borderRadius: nativeDefault.modules.button.BORDER_RADIUS,
    overflow: "hidden",
  },
};
let closure_9 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled()
  ? (badgeRadius) => {
      const cResult = c.c(6);
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
              if (cResult[4] === sum1) {
                let tmp12 = cResult[5];
              }
              return tmp12;
            }
          }
        }
      }
      const size1 = {
        shape: ClipView.CutoutShape.RoundedRect,
        x: sum2,
        y: sum3,
        width: sum1,
        height: result,
        cornerRadius: bound,
      };
      cResult[0] = result;
      cResult[1] = sum2;
      cResult[2] = sum3;
      cResult[3] = bound;
      cResult[4] = sum1;
      cResult[5] = size1;
      tmp12 = size1;
    }
  : (size) => {
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
        size = {
          shape: ClipView.CutoutShape.RoundedRect,
          x: size - (result - borderWidth) + num,
          y: size - (result - borderWidth) + num2,
          width: sum1,
          height: result,
          cornerRadius: Math.min(sum, size / 2, sum1 / 2),
        };
        return size;
      }, items);
    };
ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(3);
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
        if (cResult[1] === sum1) {
          let tmp6 = cResult[2];
        }
        return tmp6;
      }
      const rect = {
        position: "absolute",
        left: sum,
        top: sum1,
        right: "concat",
        bottom: "lj",
        padding: "key",
        minWidth: "userId",
      };
      cResult[0] = sum;
      cResult[1] = sum1;
      cResult[2] = rect;
      tmp6 = rect;
    }
  : (size) => {
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
      return noop.useMemo(() => {
        const rect = {
          position: "absolute",
          left: size - badgeSize + num,
          top: size - badgeSize + num2,
          right: "concat",
          bottom: "lj",
          padding: "key",
          minWidth: "userId",
        };
        return rect;
      }, items);
    };
ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(16);
      ({ icon, hasBadge, badgeStyle } = arg0);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { size: width, badgeRadius: 4, borderWidth: 2 };
        cResult[0] = obj2;
        let first = obj2;
      } else {
        first = cResult[0];
      }
      const tmp5 = closure_10(first);
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const obj3 = { size: width, badgeSize: 8 };
        cResult[1] = obj3;
        let tmp6 = obj3;
      } else {
        tmp6 = cResult[1];
      }
      const tmp8 = closure_11(tmp6);
      if (cResult[2] === tmp5) {
        if (cResult[3] === hasBadge) {
          const _Symbol = Symbol;
          if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
            const size = { position: "relative", height: width, width };
            cResult[5] = size;
            let tmp10 = size;
          } else {
            tmp10 = cResult[5];
          }
          if (cResult[6] === cResult[4]) {
            if (cResult[7] === icon) {
              let tmp12 = cResult[8];
            }
            if (cResult[9] === badgeStyle) {
              if (cResult[10] === hasBadge) {
                if (cResult[11] === tmp8) {
                  let tmp16 = cResult[12];
                }
                if (cResult[13] === tmp12) {
                  if (cResult[14] === tmp16) {
                    let tmp20 = cResult[15];
                  }
                  return tmp20;
                }
                const obj4 = { style: tmp10, children: null };
                const items = [tmp12, tmp16];
                obj4.children = items;
                const tmp23 = closure_1_8(View, obj4);
                cResult[13] = tmp12;
                cResult[14] = tmp16;
                cResult[15] = tmp23;
                tmp20 = tmp23;
              }
            }
            let tmp17 = hasBadge;
            if (hasBadge) {
              const obj5 = { style: tmp8, size: 8, badgeStyle };
              tmp17 = React5(BadgeDefault, obj5);
            }
            cResult[9] = badgeStyle;
            cResult[10] = hasBadge;
            cResult[11] = tmp8;
            cResult[12] = tmp17;
            tmp16 = tmp17;
          }
          const obj6 = { cutouts: cResult[4], children: icon };
          const tmp15 = React5(ClipViewDefault, obj6);
          cResult[6] = cResult[4];
          cResult[7] = icon;
          cResult[8] = tmp15;
          tmp12 = tmp15;
        }
      }
      if (hasBadge) {
        const items1 = [tmp5];
        let items2 = items1;
      } else {
        items2 = [];
      }
      cResult[2] = tmp5;
      cResult[3] = hasBadge;
      cResult[4] = items2;
    }
  : (hasBadge) => {
      hasBadge = hasBadge.hasBadge;
      ({ icon, badgeStyle } = hasBadge);
      const tmp = closure_10({ size: width, badgeRadius: 4, borderWidth: 2 });
      closure_1 = tmp;
      let items = [tmp, hasBadge];
      const obj3 = { style: { position: "relative", height: width, width }, children: null };
      const memo = noop.useMemo(() => {
        if (hasBadge) {
          const items = [closure_1];
          let items1 = items;
        } else {
          items1 = [];
        }
        return items1;
      }, items);
      let items1 = [React5(ClipViewDefault, { cutouts: memo, children: icon })];
      if (hasBadge) {
        const obj4 = { style: tmp2, size: 8, badgeStyle };
        hasBadge = React5(BadgeDefault, obj4);
      }
      items1[1] = hasBadge;
      obj3.children = items1;
      return closure_1_8(View, obj3);
    };
let closure_12 = tmp4;
ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (children) => {
      const cResult = c.c(3);
      children = children.children;
      const tmp2 = closure_9();
      if (cResult[0] === children) {
        if (cResult[1] === tmp2.buttonContainer) {
          let tmp3 = cResult[2];
        }
        return tmp3;
      }
      const tmp4 = React5(View, { style: tmp2.buttonContainer, children });
      cResult[0] = children;
      cResult[1] = tmp2.buttonContainer;
      cResult[2] = tmp4;
      tmp3 = tmp4;
    }
  : (children) => React5(View, { style: closure_9().buttonContainer, children: children.children });
let closure_13 = tmp5;
ReactCompilerGating = fn(558);
let obj3 = { position: "relative", borderRadius: nativeDefault.modules.button.BORDER_RADIUS, overflow: "hidden" };
let size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBarButton.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (hasNameplate) => {
        const cResult = c.c(10);
        ({ icon, hasBadge, badgeStyle, onPress, onLongPress, accessibilityLabel } = hasNameplate);
        let str = "tertiary";
        if (hasNameplate.hasNameplate) {
          str = "secondary-overlay";
        }
        if (cResult[0] === badgeStyle) {
          if (cResult[1] === hasBadge) {
            if (cResult[2] === icon) {
              let tmp4 = cResult[3];
            }
            if (cResult[4] === accessibilityLabel) {
              if (cResult[5] === onLongPress) {
                if (cResult[6] === onPress) {
                  if (cResult[7] === str) {
                    if (cResult[8] === tmp4) {
                      let tmp6 = cResult[9];
                    }
                    return tmp6;
                  }
                }
              }
            }
            const obj2 = { children: null };
            const obj3 = { accessibilityLabel, variant: str, size: "sm", icon: tmp4, onPress, onLongPress, hitSlop };
            obj2.children = React5(IconButton.IconButton, obj3);
            const tmp10 = React5(closure_13, obj2);
            cResult[4] = accessibilityLabel;
            cResult[5] = onLongPress;
            cResult[6] = onPress;
            cResult[7] = str;
            cResult[8] = tmp4;
            cResult[9] = tmp10;
            tmp6 = tmp10;
          }
        }
        const tmp5 = React5(closure_12, { icon, badgeStyle, hasBadge });
        cResult[0] = badgeStyle;
        cResult[1] = hasBadge;
        cResult[2] = icon;
        cResult[3] = tmp5;
        tmp4 = tmp5;
      }
    : (arg0) => {
        ({ hasNameplate, icon, hasBadge, badgeStyle, onPress, onLongPress, accessibilityLabel } = arg0);
        const obj = {
          accessibilityLabel,
          variant: null,
          size: "sm",
          icon: null,
          onPress: null,
          onLongPress: null,
          hitSlop: null,
        };
        let str = "tertiary";
        if (hasNameplate) {
          str = "secondary-overlay";
        }
        const obj2 = { children: null };
        obj.variant = str;
        obj.icon = React5(closure_12, { icon, badgeStyle, hasBadge });
        obj.onPress = onPress;
        obj.onLongPress = onLongPress;
        obj.hitSlop = hitSlop;
        obj2.children = React5(IconButton.IconButton, obj);
        return React5(closure_13, obj2);
      },
);
export const YouBarButtonIcon = tmp4;
export const YouBarButtonContainer = tmp5;
