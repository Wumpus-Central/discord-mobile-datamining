// === Module 16231: RoleColorPickerActionSheet ===

// Module 16231 (RoleColorPickerActionSheet)
import nativeDefault from "native" /* 587 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import showCustomColorPickerActionSheetDefault from "showCustomColorPickerActionSheet" /* 14421 */;
import ColorBlockDefault from "ColorBlock" /* 14423 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let BottomSheet, color;

let ROLE_COLORS;
let c9;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let react = react_mod;
({ View: hasOwnProperty, Pressable: metroRequire } = react_native);
({ DEFAULT_ROLE_COLOR: metroImportDefault, ROLE_COLORS } = Constants);
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let items = [...ROLE_COLORS.slice(0, 5), ...ROLE_COLORS.slice(10, 15), ...ROLE_COLORS.slice(5, 10), ...ROLE_COLORS.slice(15, 18)];
let createStyles = createStyles_mod;
let obj = { body: obj2, colorWrap: obj3 };
obj2 = { paddingVertical: nativeDefault.space.PX_16, flexGrow: 1, justifyContent: "center", alignItems: "center" };
createStyles = createStyles.createStyles;
obj3 = { flexGrow: 1, flexDirection: "row", flexWrap: "wrap", justifyContent: "center", maxWidth: 340, marginBottom: nativeDefault.space.PX_16 };
let closure_11 = createStyles(obj);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((color) => {
  let Button;
  let closure_4;
  let colorBlock;
  let confirmLabel;
  let defaultColor;
  let first;
  let obj = color(defaultColor[8]);
  const cResult = obj.c(37);
  color = color.color;
  const onSelect = color.onSelect;
  ({ confirmLabel, defaultColor } = color);
  if (undefined === defaultColor) {
    defaultColor = closure_7;
  }
  const tmp4 = closure_11();
  const tmpResult = color(defaultColor[9]);
  const styles = tmpResult.useStyles();
  const tmp6 = first(react.useState(color), 2);
  first = tmp6[0];
  react = tmp6[1];
  const tmpResult2 = color(defaultColor[10]);
  if (tmpResult2.useIsWindowSmall()) {
    let tmp8;
    if (cResult[0] !== styles.colorBlock) {
      const obj2 = { minWidth: 38, height: 38 };
      const merged = Object.assign(styles.colorBlock);
      cResult[0] = styles.colorBlock;
      cResult[1] = obj2;
      tmp8 = obj2;
    } else {
      tmp8 = cResult[1];
    }
    colorBlock = tmp8;
  } else {
    colorBlock = styles.colorBlock;
  }
  if (cResult[2] === first) {
    let tmp11;
    let tmp13;
    if (cResult[3] === onSelect) {
      tmp11 = cResult[4];
    }
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      class E {
        constructor(arg0) {
          closure_4(arg0);
        }
      }
      cResult[5] = E;
      tmp13 = E;
    } else {
      class E {
        constructor(arg0) {
          closure_4(arg0);
        }
      }
    }
    E = tmp13;
    if (cResult[6] !== defaultColor) {
      class E {
        constructor(arg0) {
          closure_4(arg0);
        }
      }
      cResult[6] = defaultColor;
      cResult[7] = tmp15;
    } else {
      class E {
        constructor(arg0) {
          closure_4(arg0);
        }
      }
    }
    if (cResult[8] === color) {
      let tmp17;
      class E {
        constructor(arg0) {
          closure_4(arg0);
        }
      }
      const _Symbol2 = Symbol;
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        class E {
          constructor(arg0) {
            closure_4(arg0);
          }
        }
        const stringResult = obj5.string(color(defaultColor[13]).t.WTqQ5e);
        cResult[11] = stringResult;
        tmp17 = stringResult;
      } else {
        class E {
          constructor(arg0) {
            closure_4(arg0);
          }
        }
      }
      if (cResult[12] === confirmLabel) {
        class E {
          constructor(arg0) {
            closure_4(arg0);
          }
        }
        if (cResult[15] === colorBlock) {
          let tmp28;
          let tmp30;
          class E {
            constructor(arg0) {
              closure_4(arg0);
            }
          }
          const _Symbol3 = Symbol;
          if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
            class E {
              constructor(arg0) {
                closure_4(arg0);
              }
            }
            const stringResult1 = obj7.string(color(defaultColor[13]).t["/fkc8a"]);
            cResult[18] = stringResult1;
            tmp28 = stringResult1;
          } else {
            class E {
              constructor(arg0) {
                closure_4(arg0);
              }
            }
          }
          const _Symbol4 = Symbol;
          if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
            class E {
              constructor(arg0) {
                closure_4(arg0);
              }
            }
            const tmp31 = closure_8(color(defaultColor[16]).EyeDropperIcon, { size: "lg" });
            cResult[19] = tmp31;
            tmp30 = tmp31;
          } else {
            class E {
              constructor(arg0) {
                closure_4(arg0);
              }
            }
          }
          if (cResult[20] === colorBlock) {
            class E {
              constructor(arg0) {
                closure_4(arg0);
              }
            }
            if (cResult[23] === tmp4.colorWrap) {
              class E {
                constructor(arg0) {
                  closure_4(arg0);
                }
              }
            }
            items = [tmp25, tmp32];
            const obj3 = { style: tmp24, children: null };
            class A {
              constructor() {
                const obj = { color, onSelect };
                showCustomColorPickerActionSheetDefault(obj);
              }
            }
            cResult[23] = tmp4.colorWrap;
            cResult[24] = tmp25;
            cResult[25] = tmp32;
            cResult[26] = closure_9(colorBlock, obj3);
            const tmp38 = closure_9(colorBlock, obj3);
          }
          class A {
            constructor() {
              const obj = { color, onSelect };
              showCustomColorPickerActionSheetDefault(obj);
            }
          }
          const obj4 = { style: colorBlock, onPress: A, accessibilityLabel: tmp28, accessibilityRole: "button", children: tmp30 };
          cResult[20] = colorBlock;
          cResult[21] = A;
          cResult[22] = closure_8(E, obj4);
          const tmp34 = closure_8(E, obj4);
        }
        const mapped = items.map((color) => {
          const obj = { color, style: colorBlock, selected: color === first, onSelect: E };
          return metroImportAll(ColorBlockDefault, obj, color);
        });
        cResult[15] = colorBlock;
        cResult[16] = first;
        class A {
          constructor() {
            const obj = { color, onSelect };
            showCustomColorPickerActionSheetDefault(obj);
          }
        }
      }
      const obj6 = { title: tmp17, trailing: closure_8(Button, tmp22) };
      const BottomSheetTitleHeader = tmp(tmp2[14]).BottomSheetTitleHeader;
      class A {
        constructor() {
          const obj = { color, onSelect };
          showCustomColorPickerActionSheetDefault(obj);
        }
      }
      Button = tmp(tmp2[15]).Button;
      if (null != confirmLabel) {
        class E {
          constructor(arg0) {
            closure_4(arg0);
          }
        }
        tmp22[2] = confirmLabel;
        tmp22[3] = tmp11;
      } else {
        class E {
          constructor(arg0) {
            closure_4(arg0);
          }
        }
        const intl = tmp(tmp2[13]).intl;
        tmp22[1] = intl.string(color(defaultColor[13]).t["R3BPH+"]);
        tmp22[2] = tmp11;
      }
      cResult[12] = confirmLabel;
      cResult[13] = tmp11;
      cResult[14] = closure_8(BottomSheetTitleHeader, obj6);
      const tmp20Result = closure_8(BottomSheetTitleHeader, obj6);
    }
    class A {
      constructor() {
        const obj = { color, onSelect };
        showCustomColorPickerActionSheetDefault(obj);
      }
    }
    cResult[8] = color;
    cResult[9] = onSelect;
    cResult[10] = A;
  }
  class O {
    constructor() {
      onSelect(first);
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
    }
  }
  cResult[2] = first;
  cResult[3] = onSelect;
  cResult[4] = O;
  tmp11 = O;
}) : ((color) => {
  let Button;
  let confirmLabel;
  let defaultColor;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items3;
  let items4;
  let memo;
  let obj5;
  let obj7;
  color = color.color;
  let onSelect = color.onSelect;
  ({ confirmLabel, defaultColor } = color);
  if (defaultColor === undefined) {
    defaultColor = memo;
  }
  let first;
  onSelect = undefined;
  let tmp = closure_11();
  let obj = color(defaultColor[9]);
  const styles = obj.useStyles();
  const tmp5 = styles(first.useState(color), 2);
  first = tmp5[0];
  let closure_5 = tmp5[1];
  const obj2 = color(defaultColor[10]);
  const isWindowSmall = obj2.useIsWindowSmall();
  items = [isWindowSmall, styles.colorBlock];
  memo = first.useMemo(() => {
    let tmp;
    const colorBlock = styles.colorBlock;
    if (isWindowSmall) {
      const obj = { minWidth: 38, height: 38 };
      const merged = Object.assign(colorBlock);
      tmp = obj;
    } else {
      tmp = colorBlock;
    }
    return tmp;
  }, items);
  const items1 = [first, onSelect];
  const callback = first.useCallback(() => {
    onSelect(first);
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
  }, items1);
  onSelect = first.useCallback((arg0) => {
    closure_5(arg0);
  }, []);
  const items2 = [color, onSelect];
  const callback1 = first.useCallback(() => {
    const obj = { color, onSelect };
    showCustomColorPickerActionSheetDefault(obj);
  }, items2);
  BottomSheet = color(defaultColor[17]).BottomSheet;
  const obj3 = { title: intl.string(color(defaultColor[13]).t.WTqQ5e), trailing: onSelect(Button, obj5) };
  const BottomSheetTitleHeader = color(defaultColor[14]).BottomSheetTitleHeader;
  intl = color(defaultColor[13]).intl;
  Button = color(defaultColor[15]).Button;
  if (null != confirmLabel) {
    obj5 = { size: "sm", variant: "secondary", text: confirmLabel, onPress: callback };
    const obj4 = { size: "sm", variant: "secondary", text: confirmLabel, onPress: callback };
  } else {
    obj5 = { size: "sm", text: intl2.string(tmp2(tmp3[13]).t["R3BPH+"]), onPress: callback };
    intl2 = tmp2(tmp3[13]).intl;
  }
  const obj6 = { header: onSelect(BottomSheetTitleHeader, obj3), children: closure_9(closure_5, obj7) };
  obj7 = { style: tmp.body, children: items4 };
  const obj8 = { style: tmp.colorWrap, children: items3 };
  items3 = [
    items.map((color) => {
      const obj = { color, style: memo, selected: color === first, onSelect };
      return metroImportAll(ColorBlockDefault, obj, color);
    }),

  ];
  const obj9 = { style: memo, onPress: callback1, accessibilityLabel: intl3.string(color(defaultColor[13]).t["/fkc8a"]), accessibilityRole: "button", children: onSelect(color(defaultColor[16]).EyeDropperIcon, { size: "lg" }) };
  intl3 = tmp2(tmp3[13]).intl;
  items3[1] = onSelect(isWindowSmall, obj9);
  items4 = [closure_9(closure_5, obj8), ];
  const obj10 = {
    variant: "secondary",
    text: intl4.string(color(defaultColor[13]).t.yBZMsQ),
    onPress() {
      closure_5(defaultColor);
    }
  };
  const Button2 = tmp2(tmp3[15]).Button;
  intl4 = tmp2(tmp3[13]).intl;
  items4[1] = onSelect(Button2, obj10);
  return onSelect(BottomSheet, obj6);
});
const result = size.fileFinishedImporting("components_native/common/color_picker/RoleColorPickerActionSheet.tsx");

export default tmp6;