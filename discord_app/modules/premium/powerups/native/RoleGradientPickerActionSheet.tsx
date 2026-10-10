// === Module 18367: RoleGradientPickerActionSheet ===

// Module 18367 (RoleGradientPickerActionSheet)
import nativeDefault from "native" /* 587 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
import showCustomColorPickerActionSheetDefault from "showCustomColorPickerActionSheet" /* 14822 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, Pressable: metroRequire } = get_ActivityIndicator);
const EnhancedRoleColorConstants = fn(18350);
({ DEFAULT_GRADIENT_ROLE_COLORS: closure_7, GRADIENT_PRESETS: closure_8 } = EnhancedRoleColorConstants);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(5092);
let obj2 = { body: { paddingVertical: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_12, flexGrow: 1, justifyContent: "center", alignItems: "center", gap: nativeDefault.space.PX_16 }, gradientContainer: null, dropperContainer: null, dropper: null, gradient: null, optionContainer: null, pressable: null, selected: null, option: null };
let obj3 = { paddingVertical: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_12, flexGrow: 1, justifyContent: "center", alignItems: "center", gap: nativeDefault.space.PX_16 };
obj2.gradientContainer = { display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", paddingHorizontal: nativeDefault.space.PX_8 };
const rect = { left: nativeDefault.space.PX_24, right: nativeDefault.space.PX_24, position: "absolute", display: "flex", flexDirection: "row", justifyContent: "space-between" };
obj2.dropperContainer = rect;
let obj4 = { display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", paddingHorizontal: nativeDefault.space.PX_8 };
obj2.dropper = { borderColor: "white", tintColor: "white", padding: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.round, borderWidth: 1 };
let size = { height: 50, width: "100%", borderRadius: nativeDefault.radii.sm };
obj2.gradient = size;
let obj5 = { borderColor: "white", tintColor: "white", padding: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.round, borderWidth: 1 };
obj2.optionContainer = { display: "flex", flexDirection: "row", gap: nativeDefault.space.PX_8, flexWrap: "wrap", alignItems: "center", justifyContent: "center" };
const size1 = { width: 80, height: 50, borderRadius: nativeDefault.radii.sm, overflow: "hidden", padding: 2 };
obj2.pressable = size1;
let obj6 = { display: "flex", flexDirection: "row", gap: nativeDefault.space.PX_8, flexWrap: "wrap", alignItems: "center", justifyContent: "center" };
obj2.selected = { borderWidth: 2, borderColor: nativeDefault.colors.BACKGROUND_BRAND };
let obj7 = { borderWidth: 2, borderColor: nativeDefault.colors.BACKGROUND_BRAND };
obj2.option = { flex: 1, borderRadius: nativeDefault.radii.sm };
let closure_11 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj8 = { flex: 1, borderRadius: nativeDefault.radii.sm };
size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/native/RoleGradientPickerActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function RoleGradientPickerActionSheet(arg0) {
  const cResult = onSelect(first[8]).c(54);
  ({ colors, onSelect } = arg0);
  const tmp4 = closure_11();
  importDefault = tmp4;
  if (null == colors) {
    colors = closure_7;
  }
  [first, _slicedToArray] = noop.useState(colors);
  if (cResult[0] !== first) {
    const _Object = Object;
    const values = Object.values(onSelect(tmp2[9]).extractColorStringsFromServerColors(first));
    const found = values.filter(onSelect(tmp2[10]).isNotNullish);
    cResult[0] = first;
    cResult[1] = found;
    let tmp8 = found;
    const tmpResult = onSelect(tmp2[9]);
  } else {
    tmp8 = cResult[1];
  }
  if (cResult[2] === first) {
    if (cResult[3] === onSelect) {
      let tmp11 = cResult[4];
    }
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      class I {
        constructor(arg0) {
          tmp = closure_3(arg0);
          return;
        }
      }
      cResult[5] = I;
    } else {
      class I {
        constructor(arg0) {
          tmp = closure_3(arg0);
          return;
        }
      }
    }
    noop = I;
    const _Symbol2 = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      class I {
        constructor(arg0) {
          tmp = closure_3(arg0);
          return;
        }
      }
      cResult[6] = tmp15;
    } else {
      class I {
        constructor(arg0) {
          tmp = closure_3(arg0);
          return;
        }
      }
    }
    if (cResult[7] !== first) {
      class I {
        constructor(arg0) {
          tmp = closure_3(arg0);
          return;
        }
      }
      cResult[7] = first;
      cResult[8] = tmp17;
    } else {
      class I {
        constructor(arg0) {
          tmp = closure_3(arg0);
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
            num = closure_2.secondary_color;
          }
          if (num == null) {
            num = 0;
          }
          obj = {
            color: num,
            onSelect(secondary_color) {
                      const obj = {};
                      const merged = Object.assign(first);
                      obj.secondary_color = secondary_color;
                      return closure_1_4(obj);
                    }
          };
          tmpResult = tmp(obj, "stack");
          return;
        }
      }
      cResult[9] = first;
      cResult[10] = X;
    } else {
      class X {
        constructor() {
          num = undefined;
          tmp = closure_1(closure_2[12]);
          if (closure_2 != null) {
            num = closure_2.secondary_color;
          }
          if (num == null) {
            num = 0;
          }
          obj = {
            color: num,
            onSelect(secondary_color) {
                      const obj = {};
                      const merged = Object.assign(first);
                      obj.secondary_color = secondary_color;
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
            num = closure_2.secondary_color;
          }
          if (num == null) {
            num = 0;
          }
          obj = {
            color: num,
            onSelect(secondary_color) {
                      const obj = {};
                      const merged = Object.assign(first);
                      obj.secondary_color = secondary_color;
                      return closure_1_4(obj);
                    }
          };
          tmpResult = tmp(obj, "stack");
          return;
        }
      }
      const stringResult = obj3.string(onSelect(tmp2[13]).t.XpWmJz);
      cResult[11] = stringResult;
      const tmp19 = stringResult;
    } else {
      class X {
        constructor() {
          num = undefined;
          tmp = closure_1(closure_2[12]);
          if (closure_2 != null) {
            num = closure_2.secondary_color;
          }
          if (num == null) {
            num = 0;
          }
          obj = {
            color: num,
            onSelect(secondary_color) {
                      const obj = {};
                      const merged = Object.assign(first);
                      obj.secondary_color = secondary_color;
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
            num = closure_2.secondary_color;
          }
          if (num == null) {
            num = 0;
          }
          obj = {
            color: num,
            onSelect(secondary_color) {
                      const obj = {};
                      const merged = Object.assign(first);
                      obj.secondary_color = secondary_color;
                      return closure_1_4(obj);
                    }
          };
          tmpResult = tmp(obj, "stack");
          return;
        }
      }
      const stringResult1 = obj4.string(onSelect(tmp2[13]).t["R3BPH+"]);
      cResult[12] = stringResult1;
      const tmp21 = stringResult1;
    } else {
      class X {
        constructor() {
          num = undefined;
          tmp = closure_1(closure_2[12]);
          if (closure_2 != null) {
            num = closure_2.secondary_color;
          }
          if (num == null) {
            num = 0;
          }
          obj = {
            color: num,
            onSelect(secondary_color) {
                      const obj = {};
                      const merged = Object.assign(first);
                      obj.secondary_color = secondary_color;
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
            num = closure_2.secondary_color;
          }
          if (num == null) {
            num = 0;
          }
          obj = {
            color: num,
            onSelect(secondary_color) {
                      const obj = {};
                      const merged = Object.assign(first);
                      obj.secondary_color = secondary_color;
                      return closure_1_4(obj);
                    }
          };
          tmpResult = tmp(obj, "stack");
          return;
        }
      }
      let obj2 = { title: tmp19, trailing: null };
      const obj5 = { variant: "secondary", size: "sm", text: tmp21, onPress: tmp11 };
      obj2.trailing = closure_9(onSelect(tmp2[15]).Button, obj5);
      const tmp24 = closure_9(onSelect(tmp2[14]).BottomSheetTitleHeader, obj2);
      cResult[13] = tmp11;
      cResult[14] = tmp24;
    } else {
      class X {
        constructor() {
          num = undefined;
          tmp = closure_1(closure_2[12]);
          if (closure_2 != null) {
            num = closure_2.secondary_color;
          }
          if (num == null) {
            num = 0;
          }
          obj = {
            color: num,
            onSelect(secondary_color) {
                      const obj = {};
                      const merged = Object.assign(first);
                      obj.secondary_color = secondary_color;
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
            num = closure_2.secondary_color;
          }
          if (num == null) {
            num = 0;
          }
          obj = {
            color: num,
            onSelect(secondary_color) {
                      const obj = {};
                      const merged = Object.assign(first);
                      obj.secondary_color = secondary_color;
                      return closure_1_4(obj);
                    }
          };
          tmpResult = tmp(obj, "stack");
          return;
        }
      }
      const point = { x: 1, y: 0 };
      cResult[15] = tmp27;
      cResult[16] = point;
      let tmp26 = point;
    } else {
      class X {
        constructor() {
          num = undefined;
          tmp = closure_1(closure_2[12]);
          if (closure_2 != null) {
            num = closure_2.secondary_color;
          }
          if (num == null) {
            num = 0;
          }
          obj = {
            color: num,
            onSelect(secondary_color) {
                      const obj = {};
                      const merged = Object.assign(first);
                      obj.secondary_color = secondary_color;
                      return closure_1_4(obj);
                    }
          };
          tmpResult = tmp(obj, "stack");
          return;
        }
      }
      tmp26 = cResult[16];
    }
    if (cResult[17] === tmp8) {
      class X {
        constructor() {
          num = undefined;
          tmp = closure_1(closure_2[12]);
          if (closure_2 != null) {
            num = closure_2.secondary_color;
          }
          if (num == null) {
            num = 0;
          }
          obj = {
            color: num,
            onSelect(secondary_color) {
                      const obj = {};
                      const merged = Object.assign(first);
                      obj.secondary_color = secondary_color;
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
              num = closure_2.secondary_color;
            }
            if (num == null) {
              num = 0;
            }
            obj = {
              color: num,
              onSelect(secondary_color) {
                          const obj = {};
                          const merged = Object.assign(first);
                          obj.secondary_color = secondary_color;
                          return closure_1_4(obj);
                        }
            };
            tmpResult = tmp(obj, "stack");
            return;
          }
        }
        const stringResult2 = obj9.string(onSelect(tmp2[13]).t.QPqIEx);
        cResult[20] = stringResult2;
        const tmp32 = stringResult2;
      } else {
        class X {
          constructor() {
            num = undefined;
            tmp = closure_1(closure_2[12]);
            if (closure_2 != null) {
              num = closure_2.secondary_color;
            }
            if (num == null) {
              num = 0;
            }
            obj = {
              color: num,
              onSelect(secondary_color) {
                          const obj = {};
                          const merged = Object.assign(first);
                          obj.secondary_color = secondary_color;
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
              num = closure_2.secondary_color;
            }
            if (num == null) {
              num = 0;
            }
            obj = {
              color: num,
              onSelect(secondary_color) {
                          const obj = {};
                          const merged = Object.assign(first);
                          obj.secondary_color = secondary_color;
                          return closure_1_4(obj);
                        }
            };
            tmpResult = tmp(obj, "stack");
            return;
          }
        }
        const tmp35 = closure_9(onSelect(tmp2[17]).EyeDropperIcon, { color: "white", size: "sm" });
        cResult[21] = tmp35;
        const tmp34 = tmp35;
      } else {
        class X {
          constructor() {
            num = undefined;
            tmp = closure_1(closure_2[12]);
            if (closure_2 != null) {
              num = closure_2.secondary_color;
            }
            if (num == null) {
              num = 0;
            }
            obj = {
              color: num,
              onSelect(secondary_color) {
                          const obj = {};
                          const merged = Object.assign(first);
                          obj.secondary_color = secondary_color;
                          return closure_1_4(obj);
                        }
            };
            tmpResult = tmp(obj, "stack");
            return;
          }
        }
      }
      if (cResult[22] === tmp17) {
        class X {
          constructor() {
            num = undefined;
            tmp = closure_1(closure_2[12]);
            if (closure_2 != null) {
              num = closure_2.secondary_color;
            }
            if (num == null) {
              num = 0;
            }
            obj = {
              color: num,
              onSelect(secondary_color) {
                          const obj = {};
                          const merged = Object.assign(first);
                          obj.secondary_color = secondary_color;
                          return closure_1_4(obj);
                        }
            };
            tmpResult = tmp(obj, "stack");
            return;
          }
        }
        const _Symbol8 = Symbol;
        if (cResult[25] === Symbol.for("react.memo_cache_sentinel")) {
          class X {
            constructor() {
              num = undefined;
              tmp = closure_1(closure_2[12]);
              if (closure_2 != null) {
                num = closure_2.secondary_color;
              }
              if (num == null) {
                num = 0;
              }
              obj = {
                color: num,
                onSelect(secondary_color) {
                              const obj = {};
                              const merged = Object.assign(first);
                              obj.secondary_color = secondary_color;
                              return closure_1_4(obj);
                            }
              };
              tmpResult = tmp(obj, "stack");
              return;
            }
          }
          const stringResult3 = obj11.string(onSelect(tmp2[13]).t.fLMusI);
          cResult[25] = stringResult3;
          const tmp40 = stringResult3;
        } else {
          class X {
            constructor() {
              num = undefined;
              tmp = closure_1(closure_2[12]);
              if (closure_2 != null) {
                num = closure_2.secondary_color;
              }
              if (num == null) {
                num = 0;
              }
              obj = {
                color: num,
                onSelect(secondary_color) {
                              const obj = {};
                              const merged = Object.assign(first);
                              obj.secondary_color = secondary_color;
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
                num = closure_2.secondary_color;
              }
              if (num == null) {
                num = 0;
              }
              obj = {
                color: num,
                onSelect(secondary_color) {
                              const obj = {};
                              const merged = Object.assign(first);
                              obj.secondary_color = secondary_color;
                              return closure_1_4(obj);
                            }
              };
              tmpResult = tmp(obj, "stack");
              return;
            }
          }
          const tmp43 = closure_9(onSelect(tmp2[17]).EyeDropperIcon, { color: "white", size: "sm" });
          cResult[26] = tmp43;
          const tmp42 = tmp43;
        } else {
          class X {
            constructor() {
              num = undefined;
              tmp = closure_1(closure_2[12]);
              if (closure_2 != null) {
                num = closure_2.secondary_color;
              }
              if (num == null) {
                num = 0;
              }
              obj = {
                color: num,
                onSelect(secondary_color) {
                              const obj = {};
                              const merged = Object.assign(first);
                              obj.secondary_color = secondary_color;
                              return closure_1_4(obj);
                            }
              };
              tmpResult = tmp(obj, "stack");
              return;
            }
          }
        }
        if (cResult[27] === X) {
          class X {
            constructor() {
              num = undefined;
              tmp = closure_1(closure_2[12]);
              if (closure_2 != null) {
                num = closure_2.secondary_color;
              }
              if (num == null) {
                num = 0;
              }
              obj = {
                color: num,
                onSelect(secondary_color) {
                              const obj = {};
                              const merged = Object.assign(first);
                              obj.secondary_color = secondary_color;
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
                  num = closure_2.secondary_color;
                }
                if (num == null) {
                  num = 0;
                }
                obj = {
                  color: num,
                  onSelect(secondary_color) {
                                  const obj = {};
                                  const merged = Object.assign(first);
                                  obj.secondary_color = secondary_color;
                                  return closure_1_4(obj);
                                }
                };
                tmpResult = tmp(obj, "stack");
                return;
              }
            }
          }
          const obj6 = { style: dropperContainer, children: null };
          let items = [tmp36, tmp44];
          obj6.children = items;
          const tmp51 = closure_10(closure_5, obj6);
          cResult[30] = tmp4.dropperContainer;
          cResult[31] = tmp36;
          cResult[32] = tmp44;
          cResult[33] = tmp51;
        }
        const obj7 = { style: tmp4.dropper, onPress: X, accessibilityLabel: tmp40, accessibilityRole: "button", children: tmp42 };
        const tmp47 = closure_9(closure_6, obj7);
        cResult[27] = X;
        cResult[28] = tmp4.dropper;
        cResult[29] = tmp47;
      }
      const obj8 = { style: dropper, onPress: tmp17, accessibilityLabel: tmp32, accessibilityRole: "button", children: tmp34 };
      const tmp39 = closure_9(closure_6, obj8);
      cResult[22] = tmp17;
      cResult[23] = tmp4.dropper;
      cResult[24] = tmp39;
    }
    const obj10 = { style: tmp4.gradient, colors: tmp8, start: tmp27, end: tmp26 };
    const tmp31 = closure_9(require("LinearGradient"), obj10);
    cResult[17] = tmp8;
    cResult[18] = tmp4.gradient;
    cResult[19] = tmp31;
  }
  const fn = function w() {
    onSelect(first);
    ActionSheetActionCreatorsDefault.hideActionSheet();
  };
  cResult[2] = first;
  cResult[3] = onSelect;
  cResult[4] = fn;
  tmp11 = fn;
  let obj = onSelect(first[8]);
}) : (function RoleGradientPickerActionSheet(arg0) {
  ({ colors, onSelect } = arg0);
  first = undefined;
  _slicedToArray = undefined;
  let callback1;
  let tmp = closure_11();
  importDefault = tmp;
  if (null == colors) {
    colors = closure_7;
  }
  [first, _slicedToArray] = callback1.useState(colors);
  const values = Object.values(onSelect(first[9]).extractColorStringsFromServerColors(first));
  let items = [first, onSelect];
  const found = values.filter(onSelect(first[10]).isNotNullish);
  const callback = obj.useCallback(() => {
    onSelect(first);
    ActionSheetActionCreatorsDefault.hideActionSheet();
  }, items);
  callback1 = obj.useCallback((arg0) => {
    closure_3(arg0);
  }, []);
  let items1 = [first, callback1];
  const items2 = [first, callback1];
  const callback2 = obj.useCallback(() => {
    let num;
    if (first != null) {
      num = first.primary_color;
    }
    if (num == null) {
      num = 0;
    }
    showCustomColorPickerActionSheetDefault({
      color: num,
      onSelect(primary_color) {
        const obj = {};
        const merged = Object.assign(first);
        obj.primary_color = primary_color;
        return callback1(obj);
      }
    }, "stack");
  }, items1);
  const callback3 = obj.useCallback(() => {
    let num;
    if (first != null) {
      num = first.secondary_color;
    }
    if (num == null) {
      num = 0;
    }
    showCustomColorPickerActionSheetDefault({
      color: num,
      onSelect(secondary_color) {
        const obj = {};
        const merged = Object.assign(first);
        obj.secondary_color = secondary_color;
        return callback1(obj);
      }
    }, "stack");
  }, items2);
  const obj3 = { header: null, children: null };
  const obj4 = { title: null, trailing: null };
  const intl = onSelect(first[13]).intl;
  obj4.title = intl.string(onSelect(first[13]).t.XpWmJz);
  const obj5 = { variant: "secondary", size: "sm", text: null, onPress: null };
  const intl2 = onSelect(first[13]).intl;
  obj5.text = intl2.string(onSelect(first[13]).t["R3BPH+"]);
  obj5.onPress = callback;
  obj4.trailing = closure_9(onSelect(first[15]).Button, obj5);
  obj3.header = closure_9(onSelect(first[14]).BottomSheetTitleHeader, obj4);
  const obj6 = { style: tmp.body, children: null };
  const obj7 = { style: tmp.gradientContainer, children: null };
  const items3 = [closure_9(require("LinearGradient"), { style: tmp.gradient, colors: found, start: { x: 0, y: 0 }, end: { x: 1, y: 0 } }), ];
  const obj9 = { style: tmp.dropperContainer, children: null };
  const obj10 = { style: tmp.dropper, onPress: callback2, accessibilityLabel: null, accessibilityRole: "button", children: null };
  const intl3 = onSelect(first[13]).intl;
  obj10.accessibilityLabel = intl3.string(onSelect(first[13]).t.QPqIEx);
  obj10.children = closure_9(onSelect(first[17]).EyeDropperIcon, { color: "white", size: "sm" });
  const items4 = [closure_9(closure_6, obj10), ];
  const obj11 = { style: tmp.dropper, onPress: callback3, accessibilityLabel: null, accessibilityRole: "button", children: null };
  const intl4 = onSelect(first[13]).intl;
  obj11.accessibilityLabel = intl4.string(onSelect(first[13]).t.fLMusI);
  obj11.children = closure_9(onSelect(first[17]).EyeDropperIcon, { color: "white", size: "sm" });
  items4[1] = closure_9(closure_6, obj11);
  obj9.children = items4;
  items3[1] = closure_10(closure_5, obj9);
  obj7.children = items3;
  const items5 = [closure_10(closure_5, obj7), , ];
  let obj2 = onSelect(first[9]);
  const obj8 = { style: tmp.gradient, colors: found, start: { x: 0, y: 0 }, end: { x: 1, y: 0 } };
  items5[1] = closure_9(closure_5, {
    style: tmp.optionContainer,
    children: closure_8.map((colors) => {
      const tmp = closure_3(colors.colors, 2);
      const primary_color = tmp[0];
      const secondary_color = tmp3;
      const items = [secondary_color.pressable, ];
      let selected = primary_color === primary_color.primary_color;
      if (selected) {
        selected = tmp3 === primary_color.secondary_color;
      }
      if (selected) {
        selected = tmp7.selected;
      }
      let obj = {
        style: items,
        onPress() {
          const obj = {};
          const merged = Object.assign(primary_color);
          obj.primary_color = primary_color;
          obj.secondary_color = secondary_color;
          return callback1(obj);
        },
        children: null
      };
      items[1] = selected;
      const obj2 = { style: secondary_color.option, colors: null, start: null, end: null };
      const tmp8 = secondary_color(primary_color[16]);
      const items1 = [onSelect(primary_color[19]).int2hex(primary_color), ];
      const tmp5Result = onSelect(primary_color[19]);
      items1[1] = onSelect(primary_color[19]).int2hex(tmp[1]);
      obj2.colors = items1;
      obj2.start = { x: 0, y: 0 };
      obj2.end = { x: 1, y: 0 };
      obj.children = closure_1_9(tmp8, obj2);
      return closure_1_9(onSelect(primary_color[18]).PressableOpacity, obj, colors.name);
    })
  });
  const obj13 = { text: null, onPress: null };
  const intl5 = onSelect(first[13]).intl;
  obj13.text = intl5.string(onSelect(first[13]).t.yBZMsQ);
  obj13.onPress = function handleReset() {
    closure_3(React5);
  };
  items5[2] = closure_9(onSelect(first[15]).Button, obj13);
  obj6.children = items5;
  obj3.children = closure_10(closure_5, obj6);
  return closure_9(onSelect(first[20]).BottomSheet, obj3);
});