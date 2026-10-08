// === Module 13434: IconButton/IconButton ===

// Module 13434 (IconButton/IconButton)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1200 */;
import Pressables from "Pressables" /* 6189 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_2 = ["style", "size", "disableColor"];
const jsx = fn(21).jsx;
const Sizes = { SMALL_24: 24, [24]: "SMALL_24", MEDIUM_32: 32, [32]: "MEDIUM_32", LARGE_40: 40, [40]: "LARGE_40" };
const createStyles = fn(5090);
let obj3 = { container: { borderRadius: nativeDefault.radii.xs, alignItems: "center", justifyContent: "center", backgroundColor: fn(5974).DARK_PRIMARY_700_LIGHT_PRIMARY_230 }, small: { height: Sizes.SMALL_24, width: Sizes.SMALL_24 }, medium: { height: Sizes.MEDIUM_32, width: Sizes.MEDIUM_32 }, large: { height: Sizes.LARGE_40, width: Sizes.LARGE_40 }, smallCircular: { borderRadius: Sizes.SMALL_24 / 2 }, mediumCircular: { borderRadius: Sizes.MEDIUM_32 / 2 }, largeCircular: { borderRadius: Sizes.LARGE_40 / 2 }, icon: null };
const obj4 = { borderRadius: nativeDefault.radii.xs, alignItems: "center", justifyContent: "center", backgroundColor: fn(5974).DARK_PRIMARY_700_LIGHT_PRIMARY_230 };
const obj5 = { borderRadius: Sizes.SMALL_24 / 2 };
obj3.icon = { tintColor: fn(5974).DARK_PRIMARY_300_LIGHT_PRIMARY_500 };
let closure_7 = createStyles.createStyles(obj3);
let ReactCompilerGating = fn(558);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function SquareIconButton(accessibilityLabel) {
  const obj = c;
  const cResult = obj.c(19);
  ({ onPress, source, style, iconStyle, size, disableColor, accessibilityHidden, disabled } = accessibilityLabel);
  const tmp4 = closure_7();
  if (obj.MEDIUM_32 === size) {
    let small = tmp4.medium;
  } else if (tmp5.LARGE_40 === size) {
    small = tmp4.large;
  } else {
    const SMALL_24 = tmp5.SMALL_24;
    small = tmp4.small;
  }
  if (!accessibilityHidden) {
    accessibilityLabel = accessibilityLabel.accessibilityLabel;
  }
  if (cResult[0] === small) {
    if (cResult[1] === style) {
      if (cResult[2] === tmp4.container) {
        let tmp6 = cResult[3];
      }
      if (size === tmp5.LARGE_40) {
        let REFRESH_SMALL_16 = native.Icon.Sizes.MEDIUM;
      } else {
        REFRESH_SMALL_16 = native.Icon.Sizes.REFRESH_SMALL_16;
      }
      let icon = null;
      if (!disableColor) {
        icon = tmp4.icon;
      }
      if (cResult[4] === iconStyle) {
        if (cResult[5] === icon) {
          let tmp8 = cResult[6];
        }
        if (cResult[7] === disableColor) {
          if (cResult[8] === source) {
            if (cResult[9] === REFRESH_SMALL_16) {
              if (cResult[10] === tmp8) {
                let tmp9 = cResult[11];
              }
              if (cResult[12] === accessibilityHidden) {
                if (cResult[13] === disabled) {
                  if (cResult[14] === onPress) {
                    if (cResult[15] === accessibilityLabel) {
                      if (cResult[16] === tmp6) {
                        if (cResult[17] === tmp9) {
                          let tmp12 = cResult[18];
                        }
                        return tmp12;
                      }
                    }
                  }
                }
              }
              const obj2 = { accessibilityRole: "button", accessibilityLabel, accessibilityElementsHidden: accessibilityHidden, onPress, disabled, style: tmp6, children: tmp9 };
              const tmp14 = jsx(Pressables.PressableOpacity, { accessibilityRole: "button", accessibilityLabel, accessibilityElementsHidden: accessibilityHidden, onPress, disabled, style: tmp6, children: tmp9 });
              cResult[12] = accessibilityHidden;
              cResult[13] = disabled;
              cResult[14] = onPress;
              cResult[15] = accessibilityLabel;
              cResult[16] = tmp6;
              cResult[17] = tmp9;
              cResult[18] = tmp14;
              tmp12 = tmp14;
            }
          }
        }
        const obj3 = { size: REFRESH_SMALL_16, style: tmp8, disableColor, source };
        const tmp11 = jsx(native.Icon, { size: REFRESH_SMALL_16, style: tmp8, disableColor, source });
        cResult[7] = disableColor;
        cResult[8] = source;
        cResult[9] = REFRESH_SMALL_16;
        cResult[10] = tmp8;
        cResult[11] = tmp11;
        tmp9 = tmp11;
      }
      const items = [icon, iconStyle];
      cResult[4] = iconStyle;
      cResult[5] = icon;
      cResult[6] = items;
      tmp8 = items;
    }
  }
  const items1 = [tmp4.container, style, small];
  cResult[0] = small;
  cResult[1] = style;
  cResult[2] = tmp4.container;
  cResult[3] = items1;
  tmp6 = items1;
}) : (function SquareIconButton(size) {
  size = size.size;
  ({ disableColor, accessibilityHidden } = size);
  ({ onPress, source, style, iconStyle, accessibilityLabel, disabled } = size);
  const tmp = closure_7();
  dependencyMap = tmp;
  const items = [size, tmp];
  const memo = noop.useMemo(() => {
    if (obj.MEDIUM_32 === size) {
      return closure_1.medium;
    } else if (obj.LARGE_40 === tmp) {
      return closure_1.large;
    } else {
      const SMALL_24 = obj.SMALL_24;
      return closure_1.small;
    }
  }, items);
  let tmp6;
  if (!accessibilityHidden) {
    tmp6 = accessibilityLabel;
  }
  const obj = { accessibilityRole: "button", accessibilityLabel: tmp6, accessibilityElementsHidden: accessibilityHidden, onPress, disabled, style: null, children: null };
  const items1 = [tmp.container, style, memo];
  obj.style = items1;
  if (size === obj.LARGE_40) {
    let REFRESH_SMALL_16 = tmp4(1200).Icon.Sizes.MEDIUM;
  } else {
    REFRESH_SMALL_16 = tmp4(1200).Icon.Sizes.REFRESH_SMALL_16;
  }
  const obj2 = { size: REFRESH_SMALL_16, style: null, disableColor: null, source: null };
  let icon = null;
  if (!disableColor) {
    icon = tmp.icon;
  }
  const items2 = [icon, iconStyle];
  obj2.style = items2;
  obj2.disableColor = disableColor;
  obj2.source = source;
  obj.children = jsx(size(1200).Icon, { size: REFRESH_SMALL_16, style: null, disableColor: null, source: null });
  return jsx(size(6189).PressableOpacity, { accessibilityRole: "button", accessibilityLabel: tmp6, accessibilityElementsHidden: accessibilityHidden, onPress, disabled, style: null, children: null });
});
let closure_8 = tmp2;
tmp2.Sizes = Sizes;
ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function CircularIconButton(disableColor) {
  const cResult = require("c").c(18);
  if (cResult[0] !== disableColor) {
    ({ style, size } = disableColor);
    _require = size;
    disableColor = disableColor.disableColor;
    const tmp8 = _objectWithoutProperties(disableColor, closure_2);
    cResult[0] = disableColor;
    cResult[1] = disableColor;
    cResult[2] = tmp8;
    cResult[3] = size;
    cResult[4] = style;
    let tmp5 = style;
    let tmp3 = tmp8;
    let tmp2 = disableColor;
  } else {
    tmp2 = cResult[1];
    tmp3 = cResult[2];
    _require = cResult[3];
    tmp5 = cResult[4];
  }
  const tmp9 = closure_7();
  dependencyMap = tmp9;
  if (cResult[5] === size) {
    if (cResult[6] === tmp9) {
      let tmp10 = cResult[7];
    }
    if (cResult[8] !== tmp10) {
      const tmp10Result = tmp10();
      cResult[8] = tmp10;
      cResult[9] = tmp10Result;
      let tmp11 = tmp10Result;
    } else {
      tmp11 = cResult[9];
    }
    if (cResult[10] === tmp5) {
      if (cResult[11] === tmp11) {
        let tmp13 = cResult[12];
      }
      if (cResult[13] === tmp2) {
        if (cResult[14] === tmp3) {
          if (cResult[15] === size) {
            if (cResult[16] === tmp13) {
              let tmp14 = cResult[17];
            }
            return tmp14;
          }
        }
      }
      const obj2 = { style: tmp13, size };
      const merged = Object.assign(tmp3);
      obj2.disableColor = tmp2;
      const tmp20 = <closure_8 style={tmp13} size={size} />;
      cResult[13] = tmp2;
      cResult[14] = tmp3;
      cResult[15] = size;
      cResult[16] = tmp13;
      cResult[17] = tmp20;
      tmp14 = tmp20;
    }
    const items = [tmp11, tmp5];
    cResult[10] = tmp5;
    cResult[11] = tmp11;
    cResult[12] = items;
    tmp13 = items;
  }
  function getCircularStyle() {
    if (obj.SMALL_24 === closure_0) {
      return closure_1.smallCircular;
    } else if (obj.MEDIUM_32 === closure_0) {
      return closure_1.mediumCircular;
    } else if (obj.LARGE_40 === closure_0) {
      return closure_1.largeCircular;
    }
  }
  cResult[5] = size;
  cResult[6] = tmp9;
  cResult[7] = getCircularStyle;
  tmp10 = getCircularStyle;
  const obj = require("c");
}) : (function CircularIconButton(size) {
  size = size.size;
  ({ style, disableColor } = size);
  const merged = Object.assign(size, Object.assign({ style: 0, size: 0, disableColor: 0 }));
  const tmp2 = closure_7();
  if (obj.SMALL_24 === size) {
    let largeCircular = tmp2.smallCircular;
  } else if (tmp5.MEDIUM_32 === size) {
    largeCircular = tmp2.mediumCircular;
  } else if (tmp5.LARGE_40 === size) {
    largeCircular = tmp2.largeCircular;
  }
  obj = { style: null, size };
  const items = [largeCircular, style];
  obj.style = items;
  const merged1 = Object.assign(merged);
  obj.disableColor = disableColor;
  return <closure_8 style={null} size={size} />;
});
tmp3.Sizes = Sizes;
let size = fn(2);
const result = size.fileFinishedImporting("design/void/IconButton/native/IconButton.tsx");

export const SquareIconButton = tmp2;
export const CircularIconButton = tmp3;