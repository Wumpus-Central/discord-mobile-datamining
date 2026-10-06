// === Module 13291: IconButton/IconButton ===

// Module 13291 (IconButton/IconButton)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1188 */;
import LegacyTokens from "LegacyTokens" /* 5627 */;
import Pressables from "Pressables" /* 5916 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

let obj3;
let obj4;
let closure_2 = ["style", "size", "disableColor"];
const jsx = Fragment.jsx;
const Sizes = { SMALL_24: 24, [24]: "SMALL_24", MEDIUM_32: 32, [32]: "MEDIUM_32", LARGE_40: 40, [40]: "LARGE_40" };
let createStyles = createStyles_mod;
const obj2 = { container: obj3, small: { height: Sizes.SMALL_24, width: Sizes.SMALL_24 }, medium: { height: Sizes.MEDIUM_32, width: Sizes.MEDIUM_32 }, large: { height: Sizes.LARGE_40, width: Sizes.LARGE_40 }, smallCircular: obj4, mediumCircular: { borderRadius: Sizes.MEDIUM_32 / 2 }, largeCircular: { borderRadius: Sizes.LARGE_40 / 2 }, icon: { tintColor: LegacyTokens.DARK_PRIMARY_300_LIGHT_PRIMARY_500 } };
createStyles = createStyles.createStyles;
obj3 = { borderRadius: nativeDefault.radii.xs, alignItems: "center", justifyContent: "center", backgroundColor: LegacyTokens.DARK_PRIMARY_700_LIGHT_PRIMARY_230 };
obj4 = { borderRadius: Sizes.SMALL_24 / 2 };
({ tintColor: LegacyTokens.DARK_PRIMARY_300_LIGHT_PRIMARY_500 });
let closure_7 = createStyles(obj2);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((accessibilityLabel) => {
  let accessibilityHidden;
  let disableColor;
  let disabled;
  let iconStyle;
  let onPress;
  let small;
  let source;
  let style;
  const obj = react2;
  const cResult = obj.c(19);
  ({ onPress, source, style, iconStyle, size, disableColor, accessibilityHidden, disabled } = accessibilityLabel);
  accessibilityLabel = accessibilityLabel.accessibilityLabel;
  const tmp4 = closure_7();
  if (obj.MEDIUM_32 === size) {
    small = tmp4.medium;
  } else if (obj.LARGE_40 === size) {
    small = tmp4.large;
  } else {
    const SMALL_24 = tmp5.SMALL_24;
    small = tmp4.small;
  }
  if (cResult[0] === small) {
    if (cResult[1] === style) {
      let tmp7;
      let REFRESH_SMALL_16;
      if (cResult[2] === tmp4.container) {
        tmp7 = cResult[3];
      }
      if (size === obj.LARGE_40) {
        REFRESH_SMALL_16 = native.Icon.Sizes.MEDIUM;
      } else {
        REFRESH_SMALL_16 = native.Icon.Sizes.REFRESH_SMALL_16;
      }
      let icon = null;
      if (!disableColor) {
        icon = tmp4.icon;
      }
      if (cResult[4] === iconStyle) {
        let tmp9;
        if (cResult[5] === icon) {
          tmp9 = cResult[6];
        }
        if (cResult[7] === disableColor) {
          if (cResult[8] === source) {
            if (cResult[9] === REFRESH_SMALL_16) {
              let tmp10;
              if (cResult[10] === tmp9) {
                tmp10 = cResult[11];
              }
              if (cResult[12] === accessibilityHidden) {
                if (cResult[13] === disabled) {
                  if (cResult[14] === onPress) {
                    if (cResult[15] === tmp6) {
                      if (cResult[16] === tmp7) {
                        let tmp13;
                        if (cResult[17] === tmp10) {
                          tmp13 = cResult[18];
                        }
                        return tmp13;
                      }
                    }
                  }
                }
              }
              const tmp15 = jsx(Pressables.PressableOpacity, { accessibilityRole: "button", accessibilityLabel: tmp6, accessibilityElementsHidden: accessibilityHidden, onPress, disabled, style: tmp7, children: tmp10 });
              cResult[12] = accessibilityHidden;
              cResult[13] = disabled;
              cResult[14] = onPress;
              cResult[15] = tmp6;
              cResult[16] = tmp7;
              cResult[17] = tmp10;
              cResult[18] = tmp15;
              tmp13 = tmp15;
            }
          }
        }
        const tmp12 = jsx(native.Icon, { size: REFRESH_SMALL_16, style: tmp9, disableColor, source });
        cResult[7] = disableColor;
        cResult[8] = source;
        cResult[9] = REFRESH_SMALL_16;
        cResult[10] = tmp9;
        cResult[11] = tmp12;
        tmp10 = tmp12;
      }
      const items = [icon, iconStyle];
      cResult[4] = iconStyle;
      cResult[5] = icon;
      cResult[6] = items;
      tmp9 = items;
    }
  }
  const items1 = [tmp4.container, style, small];
  cResult[0] = small;
  cResult[1] = style;
  cResult[2] = tmp4.container;
  cResult[3] = items1;
  tmp7 = items1;
}) : ((size) => {
  let accessibilityHidden;
  let accessibilityLabel;
  let closure_1;
  let disableColor;
  let disabled;
  let iconStyle;
  let items1;
  let onPress;
  let source;
  let style;
  size = size.size;
  ({ disableColor, accessibilityHidden } = size);
  ({ onPress, source, style, iconStyle, accessibilityLabel, disabled } = size);
  const tmp = closure_7();
  dependencyMap = tmp;
  const items = [size, tmp];
  const memo = react.useMemo(() => {
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
  const PressableOpacity = size(5916).PressableOpacity;
  if (!accessibilityHidden) {
    tmp6 = accessibilityLabel;
  }
  const obj = { accessibilityRole: "button", accessibilityLabel: tmp6, accessibilityElementsHidden: accessibilityHidden, onPress, disabled, style: items1, children: null };
  items1 = [tmp.container, style, memo];
  const Icon = tmp4(1188).Icon;
  if (size === obj.LARGE_40) {
    let REFRESH_SMALL_16 = tmp4(1188).Icon.Sizes.MEDIUM;
  } else {
    REFRESH_SMALL_16 = tmp4(1188).Icon.Sizes.REFRESH_SMALL_16;
  }
  let icon = null;
  if (!disableColor) {
    icon = tmp.icon;
  }
  const items2 = [icon, iconStyle];
  return <PressableOpacity accessibilityRole="button" accessibilityLabel={tmp6} accessibilityElementsHidden={accessibilityHidden} onPress={onPress} disabled={disabled} style={items1}>{null}</PressableOpacity>;
});
let closure_8 = tmp3;
tmp3.Sizes = Sizes;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((disableColor) => {
  let closure_0;
  let closure_1;
  let style;
  let tmp2;
  let tmp3;
  let tmp5;
  const obj = require("react");
  const cResult = obj.c(18);
  if (cResult[0] !== disableColor) {
    ({ style, size } = disableColor);
    _require = size;
    disableColor = disableColor.disableColor;
    cResult[0] = disableColor;
    cResult[1] = disableColor;
    const tmp8 = _objectWithoutProperties(disableColor, closure_2);
    class E {
      constructor() {
        tmp = closure_0;
        tmp2 = closure_6;
        if (closure_6.SMALL_24 === closure_0) {
          tmp5 = closure_1;
          return closure_1.smallCircular;
        } else if (tmp2.MEDIUM_32 === tmp) {
          tmp4 = closure_1;
          return closure_1.mediumCircular;
        } else if (tmp2.LARGE_40 === tmp) {
          tmp3 = closure_1;
          return closure_1.largeCircular;
        } else {
          return;
        }
      }
    }
    cResult[3] = size;
    cResult[4] = style;
    tmp5 = style;
    tmp3 = tmp8;
    tmp2 = disableColor;
  } else {
    tmp2 = cResult[1];
    tmp3 = cResult[2];
    _require = cResult[3];
    tmp5 = cResult[4];
  }
  const tmp9 = closure_7();
  dependencyMap = tmp9;
  if (cResult[5] === size) {
    let tmp10;
    let tmp11;
    if (cResult[6] === tmp9) {
      tmp10 = cResult[7];
    }
    if (cResult[8] !== tmp10) {
      const tmp10Result = tmp10();
      cResult[8] = tmp10;
      cResult[9] = tmp10Result;
      tmp11 = tmp10Result;
    } else {
      tmp11 = cResult[9];
    }
    if (cResult[10] === tmp5) {
      if (cResult[13] === tmp2) {
        if (cResult[14] === tmp3) {
          if (cResult[15] === size) {
            let tmp14;
            if (cResult[16] === tmp13) {
              tmp14 = cResult[17];
            }
            return tmp14;
          }
        }
      }
      const merged = Object.assign(tmp3);
      const tmp20 = <closure_8 style={tmp13} size={size} disableColor={tmp2} />;
      class E {
        constructor() {
          tmp = closure_0;
          tmp2 = closure_6;
          if (closure_6.SMALL_24 === closure_0) {
            tmp5 = closure_1;
            return closure_1.smallCircular;
          } else if (tmp2.MEDIUM_32 === tmp) {
            tmp4 = closure_1;
            return closure_1.mediumCircular;
          } else if (tmp2.LARGE_40 === tmp) {
            tmp3 = closure_1;
            return closure_1.largeCircular;
          } else {
            return;
          }
        }
      }
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
    class E {
      constructor() {
        tmp = closure_0;
        tmp2 = closure_6;
        if (closure_6.SMALL_24 === closure_0) {
          tmp5 = closure_1;
          return closure_1.smallCircular;
        } else if (tmp2.MEDIUM_32 === tmp) {
          tmp4 = closure_1;
          return closure_1.mediumCircular;
        } else if (tmp2.LARGE_40 === tmp) {
          tmp3 = closure_1;
          return closure_1.largeCircular;
        } else {
          return;
        }
      }
    }
  }
  class E {
    constructor() {
      tmp = closure_0;
      tmp2 = closure_6;
      if (closure_6.SMALL_24 === closure_0) {
        tmp5 = closure_1;
        return closure_1.smallCircular;
      } else if (tmp2.MEDIUM_32 === tmp) {
        tmp4 = closure_1;
        return closure_1.mediumCircular;
      } else if (tmp2.LARGE_40 === tmp) {
        tmp3 = closure_1;
        return closure_1.largeCircular;
      } else {
        return;
      }
    }
  }
  cResult[5] = size;
  cResult[6] = tmp9;
  cResult[7] = E;
  tmp10 = E;
}) : ((size) => {
  let disableColor;
  let items;
  let largeCircular;
  let obj;
  let style;
  size = size.size;
  ({ style, disableColor } = size);
  const merged = Object.assign(size, Object.assign({ style: 0, size: 0, disableColor: 0 }));
  const tmp2 = closure_7();
  if (obj.SMALL_24 === size) {
    largeCircular = tmp2.smallCircular;
  } else if (obj.MEDIUM_32 === size) {
    largeCircular = tmp2.mediumCircular;
  } else if (obj.LARGE_40 === size) {
    largeCircular = tmp2.largeCircular;
  }
  obj = { style: items, size, disableColor };
  items = [largeCircular, style];
  const merged1 = Object.assign(merged);
  return <closure_8 style={items} size={size} disableColor={disableColor} />;
});
tmp4.Sizes = Sizes;
let size = size_mod;
const result = size.fileFinishedImporting("design/void/IconButton/native/IconButton.tsx");

export const SquareIconButton = tmp3;
export const CircularIconButton = tmp4;