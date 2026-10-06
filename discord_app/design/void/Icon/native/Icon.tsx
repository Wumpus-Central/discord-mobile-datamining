// === Module 5603: Icon ===

// Module 5603 (Icon)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let obj;

let forwardRef;
let memo;
const Image = react_native.Image;
const jsx = Fragment.jsx;
const IconSizes = { EXTRA_SMALL_10: "extraSmall10", EXTRA_SMALL: "extraSmall", SMALL: "small", SMALL_20: "small20", MEDIUM: "medium", LARGE: "large", CUSTOM: "custom", REFRESH_SMALL_16: "refreshSmall16", SMALL_14: "small14" };
let closure_6 = createStyles.createStyles(() => {
  obj = { iconColor: { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT } };
  ({ tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT });
  return obj;
});
({ memo, forwardRef } = react);
function getIconSize(LARGE_BUTTON_ICON_SIZE) {
  if (obj.EXTRA_SMALL_10 === LARGE_BUTTON_ICON_SIZE) {
    return 10;
  } else if (obj.EXTRA_SMALL === LARGE_BUTTON_ICON_SIZE) {
    return 12;
  } else if (obj.SMALL === LARGE_BUTTON_ICON_SIZE) {
    return 18;
  } else if (obj.SMALL_14 === LARGE_BUTTON_ICON_SIZE) {
    return 14;
  } else if (obj.SMALL_20 === LARGE_BUTTON_ICON_SIZE) {
    return 20;
  } else if (obj.MEDIUM === LARGE_BUTTON_ICON_SIZE) {
    return 24;
  } else if (obj.LARGE === LARGE_BUTTON_ICON_SIZE) {
    return 32;
  } else if (obj.REFRESH_SMALL_16 === LARGE_BUTTON_ICON_SIZE) {
    return 16;
  }
}
function getIconStyle(MEDIUM) {
  let width = 10;
  if (obj.EXTRA_SMALL_10 !== MEDIUM) {
    width = 12;
    if (obj.EXTRA_SMALL !== MEDIUM) {
      width = 18;
      if (obj.SMALL !== MEDIUM) {
        width = 14;
        if (obj.SMALL_14 !== MEDIUM) {
          width = 20;
          if (obj.SMALL_20 !== MEDIUM) {
            width = 24;
            if (obj.MEDIUM !== MEDIUM) {
              width = 32;
              if (obj.LARGE !== MEDIUM) {
                width = 16;
                if (obj.REFRESH_SMALL_16 !== MEDIUM) {
                  const CUSTOM = obj.CUSTOM;
                }
              }
            }
          }
        }
      }
    }
  }
  return { width, height: width };
}
const memoResult = memo(forwardRef(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, ref) => {
  let accessibilityLabel;
  let accessible;
  let color;
  let disableColor;
  let resizeMode;
  let source;
  let style;
  let tmp8;
  obj = react2;
  const cResult = obj.c(15);
  ({ source, color, disableColor, size, style, resizeMode, accessible, accessibilityLabel } = arg0);
  const tmp2 = undefined !== disableColor && disableColor;
  if (undefined === size) {
    size = obj.MEDIUM;
  }
  let str = "cover";
  if (undefined !== resizeMode) {
    str = resizeMode;
  }
  let tmp5;
  if (!tmp2) {
    let iconColor;
    if (null != color) {
      let tmp7;
      if (cResult[0] !== color) {
        const obj2 = { tintColor: color };
        cResult[0] = color;
        cResult[1] = obj2;
        tmp7 = obj2;
      } else {
        tmp7 = cResult[1];
      }
      iconColor = tmp7;
    } else {
      iconColor = tmp4.iconColor;
    }
    tmp5 = iconColor;
  }
  if (cResult[2] !== size) {
    let num3 = 10;
    if (obj.EXTRA_SMALL_10 !== size) {
      num3 = 12;
      if (obj.EXTRA_SMALL !== size) {
        num3 = 18;
        if (obj.SMALL !== size) {
          num3 = 14;
          if (obj.SMALL_14 !== size) {
            num3 = 20;
            if (obj.SMALL_20 !== size) {
              num3 = 24;
              if (obj.MEDIUM !== size) {
                num3 = 32;
                if (obj.LARGE !== size) {
                  num3 = 16;
                  if (obj.REFRESH_SMALL_16 !== size) {
                    const CUSTOM = tmp9.CUSTOM;
                  }
                }
              }
            }
          }
        }
      }
    }
    const size1 = { width: num3, height: num3 };
    cResult[2] = size;
    cResult[3] = size1;
    tmp8 = size1;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] === style) {
    if (cResult[5] === tmp8) {
      let tmp10;
      if (cResult[6] === tmp5) {
        tmp10 = cResult[7];
      }
      if (cResult[8] === accessibilityLabel) {
        if (cResult[9] === accessible) {
          if (cResult[10] === ref) {
            if (cResult[11] === str) {
              if (cResult[12] === source) {
                let tmp12;
                if (cResult[13] === tmp10) {
                  tmp12 = cResult[14];
                }
                return tmp12;
              }
            }
          }
        }
      }
      const tmp15 = <Image resizeMode={str} source={source} style={tmp10} accessible={accessible} accessibilityLabel={accessibilityLabel} fadeDuration={0} ref={ref} />;
      cResult[8] = accessibilityLabel;
      cResult[9] = accessible;
      cResult[10] = ref;
      cResult[11] = str;
      cResult[12] = source;
      cResult[13] = tmp10;
      cResult[14] = tmp15;
      tmp12 = tmp15;
    }
  }
  const items = [tmp8, tmp5, style];
  cResult[4] = style;
  cResult[5] = tmp8;
  cResult[6] = tmp5;
  cResult[7] = items;
  tmp10 = items;
}) : ((source, ref) => {
  let accessibilityLabel;
  let accessible;
  let color;
  let disableColor;
  let resizeMode;
  let style;
  ({ color, disableColor } = source);
  source = source.source;
  if (disableColor === undefined) {
    disableColor = false;
  }
  let MEDIUM = source.size;
  if (MEDIUM === undefined) {
    MEDIUM = obj.MEDIUM;
  }
  ({ resizeMode, style } = source);
  if (resizeMode === undefined) {
    resizeMode = "cover";
  }
  ({ accessible, accessibilityLabel } = source);
  let tmp3;
  if (!disableColor) {
    let iconColor;
    if (null != color) {
      obj = { tintColor: color };
      iconColor = obj;
    } else {
      iconColor = tmp2.iconColor;
    }
    tmp3 = iconColor;
  }
  let num = 10;
  if (obj.EXTRA_SMALL_10 !== MEDIUM) {
    num = 12;
    if (obj.EXTRA_SMALL !== MEDIUM) {
      num = 18;
      if (obj.SMALL !== MEDIUM) {
        num = 14;
        if (obj.SMALL_14 !== MEDIUM) {
          num = 20;
          if (obj.SMALL_20 !== MEDIUM) {
            num = 24;
            if (obj.MEDIUM !== MEDIUM) {
              num = 32;
              if (obj.LARGE !== MEDIUM) {
                num = 16;
                if (obj.REFRESH_SMALL_16 !== MEDIUM) {
                  const CUSTOM = tmp7.CUSTOM;
                }
              }
            }
          }
        }
      }
    }
  }
  const items = [{ width: num, height: num }, tmp3, style];
  return <Image resizeMode={resizeMode} source={source} style={items} accessible={accessible} accessibilityLabel={accessibilityLabel} fadeDuration={0} ref={ref} />;
})));
memoResult.displayName = "Icon";
memoResult.Sizes = IconSizes;
let size = size_mod;
const result = size.fileFinishedImporting("design/void/Icon/native/Icon.tsx");

export default memoResult;
export { IconSizes };
export { getIconSize };
export { getIconStyle };