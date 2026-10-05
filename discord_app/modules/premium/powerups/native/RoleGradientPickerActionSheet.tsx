// === Module 17798: RoleGradientPickerActionSheet ===

// Module 17798 (RoleGradientPickerActionSheet)
import nativeDefault from "native" /* 587 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import showCustomColorPickerActionSheetDefault from "showCustomColorPickerActionSheet" /* 14421 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import EnhancedRoleColorConstants from "EnhancedRoleColorConstants" /* 17783 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let BottomSheet, importDefault;

let c10;
let c9;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let rect;
let size;
let size1;
let _slicedToArray = _slicedToArray_mod;
({ View: hasOwnProperty, Pressable: metroRequire } = react_native);
({ DEFAULT_GRADIENT_ROLE_COLORS: metroImportDefault, GRADIENT_PRESETS: metroImportAll } = EnhancedRoleColorConstants);
({ jsx: c9, jsxs: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = { body: obj2, gradientContainer: obj3, dropperContainer: rect, dropper: obj4, gradient: size, optionContainer: obj5, pressable: size1, selected: obj6, option: obj7 };
obj2 = { paddingVertical: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_12, flexGrow: 1, justifyContent: "center", alignItems: "center", gap: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", paddingHorizontal: nativeDefault.space.PX_8 };
rect = { left: nativeDefault.space.PX_24, right: nativeDefault.space.PX_24, position: "absolute", display: "flex", flexDirection: "row", justifyContent: "space-between" };
obj4 = { borderColor: "white", tintColor: "white", padding: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.round, borderWidth: 1 };
size = { height: 50, width: "100%", borderRadius: nativeDefault.radii.sm };
obj5 = { display: "flex", flexDirection: "row", gap: nativeDefault.space.PX_8, flexWrap: "wrap", alignItems: "center", justifyContent: "center" };
size1 = { width: 80, height: 50, borderRadius: nativeDefault.radii.sm, overflow: "hidden", padding: 2 };
obj6 = { borderWidth: 2, borderColor: nativeDefault.colors.BACKGROUND_BRAND };
obj7 = { flex: 1, borderRadius: nativeDefault.radii.sm };
let closure_11 = createStyles(obj);
const tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let body;
  let closure_1;
  let closure_3;
  let colors;
  let dropper;
  let dropperContainer;
  let first;
  let gradientContainer;
  let items;
  let obj5;
  let onSelect;
  let tmp8;
  let obj = onSelect(first[8]);
  const cResult = obj.c(54);
  ({ colors, onSelect } = arg0);
  const tmp4 = closure_11();
  importDefault = tmp4;
  const useState = I.useState;
  if (null == colors) {
    colors = closure_7;
  }
  [first, _slicedToArray] = useState(colors);
  if (cResult[0] !== first) {
    const _Object = Object;
    const tmpResult = onSelect(tmp2[9]);
    const values2 = values(tmpResult.extractColorStringsFromServerColors(first));
    const found = values2.filter(onSelect(tmp2[10]).isNotNullish);
    let num = 0;
    cResult[0] = first;
    cResult[1] = found;
    tmp8 = found;
  } else {
    tmp8 = cResult[1];
  }
  if (cResult[2] === first) {
    let tmp11;
    let tmp13;
    let tmp18;
    let tmp20;
    let tmp25;
    if (cResult[3] === onSelect) {
      tmp11 = cResult[4];
    }
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      class I {
        constructor(arg0) {
          closure_3(arg0);
        }
      }
      cResult[5] = I;
      tmp13 = I;
    } else {
      class I {
        constructor(arg0) {
          closure_3(arg0);
        }
      }
    }
    I = tmp13;
    const _Symbol2 = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      class D {
        constructor() {
          closure_3(metroImportDefault);
        }
      }
      cResult[6] = D;
    } else {
      class D {
        constructor() {
          closure_3(metroImportDefault);
        }
      }
    }
    if (cResult[7] !== first) {
      class X {
        constructor() {
          num = undefined;
          tmp = closure_1(closure_2[12]);
          if (closure_2 != null) {
            num = closure_2.primary_color;
          }
          if (num == null) {
            num = 0;
          }
          obj = {
            color: num,
            onSelect(primary_color) {
                      const obj = { primary_color };
                      const merged = Object.assign(first);
                      return closure_1_4(obj);
                    }
          };
          tmpResult = tmp(obj, "stack");
          return;
        }
      }
      cResult[7] = first;
      cResult[8] = X;
    } else {
      class X {
        constructor() {
          num = undefined;
          tmp = closure_1(closure_2[12]);
          if (closure_2 != null) {
            num = closure_2.primary_color;
          }
          if (num == null) {
            num = 0;
          }
          obj = {
            color: num,
            onSelect(primary_color) {
                      const obj = { primary_color };
                      const merged = Object.assign(first);
                      return closure_1_4(obj);
                    }
          };
          tmpResult = tmp(obj, "stack");
          return;
        }
      }
    }
    if (cResult[9] !== first) {
      class X {
        constructor() {
          num = undefined;
          tmp = closure_1(closure_2[12]);
          if (closure_2 != null) {
            num = closure_2.primary_color;
          }
          if (num == null) {
            num = 0;
          }
          obj = {
            color: num,
            onSelect(primary_color) {
                      const obj = { primary_color };
                      const merged = Object.assign(first);
                      return closure_1_4(obj);
                    }
          };
          tmpResult = tmp(obj, "stack");
          return;
        }
      }
      cResult[9] = first;
      cResult[10] = tmp17;
    } else {
      class X {
        constructor() {
          num = undefined;
          tmp = closure_1(closure_2[12]);
          if (closure_2 != null) {
            num = closure_2.primary_color;
          }
          if (num == null) {
            num = 0;
          }
          obj = {
            color: num,
            onSelect(primary_color) {
                      const obj = { primary_color };
                      const merged = Object.assign(first);
                      return closure_1_4(obj);
                    }
          };
          tmpResult = tmp(obj, "stack");
          return;
        }
      }
    }
    const _Symbol3 = Symbol;
    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
      class X {
        constructor() {
          num = undefined;
          tmp = closure_1(closure_2[12]);
          if (closure_2 != null) {
            num = closure_2.primary_color;
          }
          if (num == null) {
            num = 0;
          }
          obj = {
            color: num,
            onSelect(primary_color) {
                      const obj = { primary_color };
                      const merged = Object.assign(first);
                      return closure_1_4(obj);
                    }
          };
          tmpResult = tmp(obj, "stack");
          return;
        }
      }
      const stringResult = obj3.string(onSelect(first[13]).t.XpWmJz);
      cResult[11] = stringResult;
      tmp18 = stringResult;
    } else {
      class X {
        constructor() {
          num = undefined;
          tmp = closure_1(closure_2[12]);
          if (closure_2 != null) {
            num = closure_2.primary_color;
          }
          if (num == null) {
            num = 0;
          }
          obj = {
            color: num,
            onSelect(primary_color) {
                      const obj = { primary_color };
                      const merged = Object.assign(first);
                      return closure_1_4(obj);
                    }
          };
          tmpResult = tmp(obj, "stack");
          return;
        }
      }
    }
    const _Symbol4 = Symbol;
    if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
      class X {
        constructor() {
          num = undefined;
          tmp = closure_1(closure_2[12]);
          if (closure_2 != null) {
            num = closure_2.primary_color;
          }
          if (num == null) {
            num = 0;
          }
          obj = {
            color: num,
            onSelect(primary_color) {
                      const obj = { primary_color };
                      const merged = Object.assign(first);
                      return closure_1_4(obj);
                    }
          };
          tmpResult = tmp(obj, "stack");
          return;
        }
      }
      const stringResult1 = obj4.string(onSelect(first[13]).t["R3BPH+"]);
      cResult[12] = stringResult1;
      tmp20 = stringResult1;
    } else {
      class X {
        constructor() {
          num = undefined;
          tmp = closure_1(closure_2[12]);
          if (closure_2 != null) {
            num = closure_2.primary_color;
          }
          if (num == null) {
            num = 0;
          }
          obj = {
            color: num,
            onSelect(primary_color) {
                      const obj = { primary_color };
                      const merged = Object.assign(first);
                      return closure_1_4(obj);
                    }
          };
          tmpResult = tmp(obj, "stack");
          return;
        }
      }
    }
    if (cResult[13] !== tmp11) {
      class X {
        constructor() {
          num = undefined;
          tmp = closure_1(closure_2[12]);
          if (closure_2 != null) {
            num = closure_2.primary_color;
          }
          if (num == null) {
            num = 0;
          }
          obj = {
            color: num,
            onSelect(primary_color) {
                      const obj = { primary_color };
                      const merged = Object.assign(first);
                      return closure_1_4(obj);
                    }
          };
          tmpResult = tmp(obj, "stack");
          return;
        }
      }
      let obj2 = { title: tmp18, trailing: closure_9(onSelect(first[15]).Button, obj5) };
      const BottomSheetTitleHeader = onSelect(tmp2[14]).BottomSheetTitleHeader;
      obj5 = { variant: "secondary", size: "sm", text: tmp20, onPress: tmp11 };
      cResult[13] = tmp11;
      cResult[14] = closure_9(BottomSheetTitleHeader, obj2);
      const tmp23 = closure_9(BottomSheetTitleHeader, obj2);
    } else {
      class X {
        constructor() {
          num = undefined;
          tmp = closure_1(closure_2[12]);
          if (closure_2 != null) {
            num = closure_2.primary_color;
          }
          if (num == null) {
            num = 0;
          }
          obj = {
            color: num,
            onSelect(primary_color) {
                      const obj = { primary_color };
                      const merged = Object.assign(first);
                      return closure_1_4(obj);
                    }
          };
          tmpResult = tmp(obj, "stack");
          return;
        }
      }
    }
    const _Symbol5 = Symbol;
    ({ body, gradientContainer } = tmp4);
    if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
      class X {
        constructor() {
          num = undefined;
          tmp = closure_1(closure_2[12]);
          if (closure_2 != null) {
            num = closure_2.primary_color;
          }
          if (num == null) {
            num = 0;
          }
          obj = {
            color: num,
            onSelect(primary_color) {
                      const obj = { primary_color };
                      const merged = Object.assign(first);
                      return closure_1_4(obj);
                    }
          };
          tmpResult = tmp(obj, "stack");
          return;
        }
      }
      const point = { x: 1, y: 0 };
      cResult[15] = tmp26;
      cResult[16] = point;
      tmp25 = point;
    } else {
      class X {
        constructor() {
          num = undefined;
          tmp = closure_1(closure_2[12]);
          if (closure_2 != null) {
            num = closure_2.primary_color;
          }
          if (num == null) {
            num = 0;
          }
          obj = {
            color: num,
            onSelect(primary_color) {
                      const obj = { primary_color };
                      const merged = Object.assign(first);
                      return closure_1_4(obj);
                    }
          };
          tmpResult = tmp(obj, "stack");
          return;
        }
      }
      tmp25 = cResult[16];
    }
    if (cResult[17] === tmp8) {
      let tmp31;
      let tmp33;
      class X {
        constructor() {
          num = undefined;
          tmp = closure_1(closure_2[12]);
          if (closure_2 != null) {
            num = closure_2.primary_color;
          }
          if (num == null) {
            num = 0;
          }
          obj = {
            color: num,
            onSelect(primary_color) {
                      const obj = { primary_color };
                      const merged = Object.assign(first);
                      return closure_1_4(obj);
                    }
          };
          tmpResult = tmp(obj, "stack");
          return;
        }
      }
      const _Symbol6 = Symbol;
      ({ dropperContainer, dropper } = tmp4);
      if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
        class X {
          constructor() {
            num = undefined;
            tmp = closure_1(closure_2[12]);
            if (closure_2 != null) {
              num = closure_2.primary_color;
            }
            if (num == null) {
              num = 0;
            }
            obj = {
              color: num,
              onSelect(primary_color) {
                          const obj = { primary_color };
                          const merged = Object.assign(first);
                          return closure_1_4(obj);
                        }
            };
            tmpResult = tmp(obj, "stack");
            return;
          }
        }
        const stringResult2 = obj9.string(onSelect(first[13]).t.QPqIEx);
        cResult[20] = stringResult2;
        tmp31 = stringResult2;
      } else {
        class X {
          constructor() {
            num = undefined;
            tmp = closure_1(closure_2[12]);
            if (closure_2 != null) {
              num = closure_2.primary_color;
            }
            if (num == null) {
              num = 0;
            }
            obj = {
              color: num,
              onSelect(primary_color) {
                          const obj = { primary_color };
                          const merged = Object.assign(first);
                          return closure_1_4(obj);
                        }
            };
            tmpResult = tmp(obj, "stack");
            return;
          }
        }
      }
      const _Symbol7 = Symbol;
      if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
        class X {
          constructor() {
            num = undefined;
            tmp = closure_1(closure_2[12]);
            if (closure_2 != null) {
              num = closure_2.primary_color;
            }
            if (num == null) {
              num = 0;
            }
            obj = {
              color: num,
              onSelect(primary_color) {
                          const obj = { primary_color };
                          const merged = Object.assign(first);
                          return closure_1_4(obj);
                        }
            };
            tmpResult = tmp(obj, "stack");
            return;
          }
        }
        const tmp34 = closure_9(onSelect(first[17]).EyeDropperIcon, { color: "white", size: "sm" });
        cResult[21] = tmp34;
        tmp33 = tmp34;
      } else {
        class X {
          constructor() {
            num = undefined;
            tmp = closure_1(closure_2[12]);
            if (closure_2 != null) {
              num = closure_2.primary_color;
            }
            if (num == null) {
              num = 0;
            }
            obj = {
              color: num,
              onSelect(primary_color) {
                          const obj = { primary_color };
                          const merged = Object.assign(first);
                          return closure_1_4(obj);
                        }
            };
            tmpResult = tmp(obj, "stack");
            return;
          }
        }
      }
      if (cResult[22] === X) {
        let tmp39;
        let tmp41;
        class X {
          constructor() {
            num = undefined;
            tmp = closure_1(closure_2[12]);
            if (closure_2 != null) {
              num = closure_2.primary_color;
            }
            if (num == null) {
              num = 0;
            }
            obj = {
              color: num,
              onSelect(primary_color) {
                          const obj = { primary_color };
                          const merged = Object.assign(first);
                          return closure_1_4(obj);
                        }
            };
            tmpResult = tmp(obj, "stack");
            return;
          }
        }
        const _Symbol8 = Symbol;
        const dropper2 = tmp4.dropper;
        if (cResult[25] === Symbol.for("react.memo_cache_sentinel")) {
          class X {
            constructor() {
              num = undefined;
              tmp = closure_1(closure_2[12]);
              if (closure_2 != null) {
                num = closure_2.primary_color;
              }
              if (num == null) {
                num = 0;
              }
              obj = {
                color: num,
                onSelect(primary_color) {
                              const obj = { primary_color };
                              const merged = Object.assign(first);
                              return closure_1_4(obj);
                            }
              };
              tmpResult = tmp(obj, "stack");
              return;
            }
          }
          const stringResult3 = obj11.string(onSelect(first[13]).t.fLMusI);
          cResult[25] = stringResult3;
          tmp39 = stringResult3;
        } else {
          class X {
            constructor() {
              num = undefined;
              tmp = closure_1(closure_2[12]);
              if (closure_2 != null) {
                num = closure_2.primary_color;
              }
              if (num == null) {
                num = 0;
              }
              obj = {
                color: num,
                onSelect(primary_color) {
                              const obj = { primary_color };
                              const merged = Object.assign(first);
                              return closure_1_4(obj);
                            }
              };
              tmpResult = tmp(obj, "stack");
              return;
            }
          }
        }
        const _Symbol9 = Symbol;
        if (cResult[26] === Symbol.for("react.memo_cache_sentinel")) {
          class X {
            constructor() {
              num = undefined;
              tmp = closure_1(closure_2[12]);
              if (closure_2 != null) {
                num = closure_2.primary_color;
              }
              if (num == null) {
                num = 0;
              }
              obj = {
                color: num,
                onSelect(primary_color) {
                              const obj = { primary_color };
                              const merged = Object.assign(first);
                              return closure_1_4(obj);
                            }
              };
              tmpResult = tmp(obj, "stack");
              return;
            }
          }
          const tmp42 = closure_9(onSelect(first[17]).EyeDropperIcon, { color: "white", size: "sm" });
          cResult[26] = tmp42;
          tmp41 = tmp42;
        } else {
          class X {
            constructor() {
              num = undefined;
              tmp = closure_1(closure_2[12]);
              if (closure_2 != null) {
                num = closure_2.primary_color;
              }
              if (num == null) {
                num = 0;
              }
              obj = {
                color: num,
                onSelect(primary_color) {
                              const obj = { primary_color };
                              const merged = Object.assign(first);
                              return closure_1_4(obj);
                            }
              };
              tmpResult = tmp(obj, "stack");
              return;
            }
          }
        }
        if (cResult[27] === tmp17) {
          class X {
            constructor() {
              num = undefined;
              tmp = closure_1(closure_2[12]);
              if (closure_2 != null) {
                num = closure_2.primary_color;
              }
              if (num == null) {
                num = 0;
              }
              obj = {
                color: num,
                onSelect(primary_color) {
                              const obj = { primary_color };
                              const merged = Object.assign(first);
                              return closure_1_4(obj);
                            }
              };
              tmpResult = tmp(obj, "stack");
              return;
            }
          }
          if (cResult[30] === tmp4.dropperContainer) {
            class X {
              constructor() {
                num = undefined;
                tmp = closure_1(closure_2[12]);
                if (closure_2 != null) {
                  num = closure_2.primary_color;
                }
                if (num == null) {
                  num = 0;
                }
                obj = {
                  color: num,
                  onSelect(primary_color) {
                                  const obj = { primary_color };
                                  const merged = Object.assign(first);
                                  return closure_1_4(obj);
                                }
                };
                tmpResult = tmp(obj, "stack");
                return;
              }
            }
          }
          const obj6 = { style: dropperContainer, children: items };
          items = [tmp35, tmp43];
          cResult[30] = tmp4.dropperContainer;
          cResult[31] = tmp35;
          cResult[32] = tmp43;
          cResult[33] = closure_10(closure_5, obj6);
          const tmp50 = closure_10(closure_5, obj6);
        }
        const obj7 = { style: dropper2, onPress: tmp17, accessibilityLabel: tmp39, accessibilityRole: "button", children: tmp41 };
        cResult[27] = tmp17;
        cResult[28] = tmp4.dropper;
        cResult[29] = closure_9(closure_6, obj7);
        const tmp46 = closure_9(closure_6, obj7);
      }
      const obj8 = { style: dropper, onPress: X, accessibilityLabel: tmp31, accessibilityRole: "button", children: tmp33 };
      cResult[22] = X;
      cResult[23] = tmp4.dropper;
      cResult[24] = closure_9(closure_6, obj8);
      const tmp38 = closure_9(closure_6, obj8);
    }
    const obj10 = { style: tmp4.gradient, colors: tmp8, start: tmp26, end: tmp25 };
    cResult[17] = tmp8;
    cResult[18] = tmp4.gradient;
    cResult[19] = closure_9(require("LinearGradient"), obj10);
    const tmp30 = closure_9(require("LinearGradient"), obj10);
  }
  const fn = function w() {
    onSelect(first);
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
  };
  cResult[2] = first;
  cResult[3] = onSelect;
  cResult[4] = fn;
  tmp11 = fn;
}) : ((arg0) => {
  let BottomSheetTitleHeader;
  let Button;
  let closure_1;
  let closure_3;
  let colors;
  let first;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let items3;
  let items4;
  let items5;
  let obj4;
  let obj5;
  let obj6;
  let onSelect;
  ({ colors, onSelect } = arg0);
  first = undefined;
  _slicedToArray = undefined;
  let callback1;
  let tmp = closure_11();
  importDefault = tmp;
  let obj = callback1;
  const useState = callback1.useState;
  if (null == colors) {
    colors = closure_7;
  }
  [first, _slicedToArray] = useState(colors);
  let obj2 = onSelect(first[9]);
  const values2 = values(obj2.extractColorStringsFromServerColors(first));
  let items = [first, onSelect];
  const found = values2.filter(onSelect(first[10]).isNotNullish);
  const callback = obj.useCallback(() => {
    onSelect(first);
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
  }, items);
  callback1 = obj.useCallback((arg0) => {
    closure_3(arg0);
  }, []);
  let items1 = [first, callback1];
  const items2 = [first, callback1];
  const callback2 = obj.useCallback(() => {
    let num;
    const tmp = showCustomColorPickerActionSheetDefault;
    if (first != null) {
      num = first.primary_color;
    }
    if (num == null) {
      num = 0;
    }
    let obj = {
      color: num,
      onSelect(primary_color) {
        const obj = { primary_color };
        const merged = Object.assign(first);
        return callback1(obj);
      }
    };
    tmp(obj, "stack");
  }, items1);
  const callback3 = obj.useCallback(() => {
    let num;
    const tmp = showCustomColorPickerActionSheetDefault;
    if (first != null) {
      num = first.secondary_color;
    }
    if (num == null) {
      num = 0;
    }
    let obj = {
      color: num,
      onSelect(secondary_color) {
        const obj = { secondary_color };
        const merged = Object.assign(first);
        return callback1(obj);
      }
    };
    tmp(obj, "stack");
  }, items2);
  const obj3 = { header: closure_9(BottomSheetTitleHeader, obj4), children: closure_10(closure_5, obj6) };
  BottomSheet = onSelect(first[20]).BottomSheet;
  obj4 = { title: intl.string(onSelect(first[13]).t.XpWmJz), trailing: closure_9(Button, obj5) };
  BottomSheetTitleHeader = onSelect(first[14]).BottomSheetTitleHeader;
  intl = onSelect(first[13]).intl;
  obj5 = { variant: "secondary", size: "sm", text: intl2.string(onSelect(first[13]).t["R3BPH+"]), onPress: callback };
  Button = onSelect(first[15]).Button;
  intl2 = onSelect(first[13]).intl;
  const obj7 = { style: tmp.gradientContainer, children: items3 };
  items3 = [, ];
  obj6 = { style: tmp.body, children: items5 };
  const obj8 = { style: tmp.gradient, colors: found, start: { x: 0, y: 0 }, end: { x: 1, y: 0 } };
  items3[0] = closure_9(require("LinearGradient"), obj8);
  const obj9 = { style: tmp.dropperContainer, children: items4 };
  const obj10 = { style: tmp.dropper, onPress: callback2, accessibilityLabel: intl3.string(onSelect(first[13]).t.QPqIEx), accessibilityRole: "button", children: closure_9(onSelect(first[17]).EyeDropperIcon, { color: "white", size: "sm" }) };
  intl3 = onSelect(first[13]).intl;
  items4 = [closure_9(closure_6, obj10), ];
  const obj11 = { style: tmp.dropper, onPress: callback3, accessibilityLabel: intl4.string(onSelect(first[13]).t.fLMusI), accessibilityRole: "button", children: closure_9(onSelect(first[17]).EyeDropperIcon, { color: "white", size: "sm" }) };
  intl4 = onSelect(first[13]).intl;
  items4[1] = closure_9(closure_6, obj11);
  items3[1] = closure_10(closure_5, obj9);
  items5 = [closure_10(closure_5, obj7), , ];
  const obj12 = {
    style: tmp.optionContainer,
    children: closure_8.map((colors) => {
      let items1;
      let obj2;
      let tmp8;
      const tmp = closure_3(colors.colors, 2);
      const primary_color = tmp[0];
      const secondary_color = tmp3;
      const items = [secondary_color.pressable, ];
      let selected = primary_color === primary_color.primary_color;
      const PressableOpacity = onSelect(primary_color[18]).PressableOpacity;
      if (selected) {
        selected = tmp3 === primary_color.secondary_color;
      }
      if (selected) {
        selected = tmp7.selected;
      }
      let obj = {
        style: items,
        onPress() {
          const obj = { primary_color, secondary_color };
          const merged = Object.assign(primary_color);
          return callback1(obj);
        },
        children: closure_1_9(tmp8, obj2)
      };
      items[1] = selected;
      obj2 = { style: secondary_color.option, colors: items1, start: { x: 0, y: 0 }, end: { x: 1, y: 0 } };
      items1 = [, ];
      tmp8 = secondary_color(primary_color[16]);
      const tmp5Result = onSelect(primary_color[19]);
      items1[0] = tmp5Result.int2hex(primary_color);
      const tmp5Result2 = onSelect(primary_color[19]);
      items1[1] = tmp5Result2.int2hex(tmp[1]);
      return closure_1_9(PressableOpacity, obj, colors.name);
    })
  };
  items5[1] = closure_9(closure_5, obj12);
  const obj13 = {
    text: intl5.string(onSelect(first[13]).t.yBZMsQ),
    onPress() {
      closure_3(metroImportDefault);
    }
  };
  const Button2 = onSelect(first[15]).Button;
  intl5 = onSelect(first[13]).intl;
  items5[2] = closure_9(Button2, obj13);
  return closure_9(BottomSheet, obj3);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/premium/powerups/native/RoleGradientPickerActionSheet.tsx");

export default tmp6;