// discord_app/modules/user_settings/quests/native/MobileSearchableSelect.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, ScrollView: hasOwnProperty, TouchableOpacity: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5091);
let obj2 = { dropdownContainer: null, dropdownItem: null, dropdownItemLast: null, dropdownItemText: null };
const rect = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER,
  borderRadius: nativeDefault.radii.md,
  marginTop: nativeDefault.space.PX_4,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  left: 0,
  right: 0,
  zIndex: 999999,
  elevation: 30,
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 6 },
  shadowOpacity: 0.4,
  shadowRadius: 8,
  maxHeight: 250,
};
obj2.dropdownContainer = rect;
obj2.dropdownItem = {
  padding: nativeDefault.space.PX_12,
  borderBottomWidth: 1,
  borderBottomColor: nativeDefault.colors.BORDER_MUTED,
};
obj2.dropdownItemLast = { borderBottomWidth: 0 };
obj2.dropdownItemText = { fontSize: 14 };
let closure_9 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? function MobileSearchableSelect(options) {
      const cResult = options(576).c(45);
      options = options.options;
      value = options.value;
      dependencyMap = value;
      const onChange = options.onChange;
      ({ placeholder, allowCustomValue, isDisabled } = options);
      if (cResult[0] !== placeholder) {
        let stringResult = placeholder;
        if (undefined === placeholder) {
          const intl = tmp(1126).intl;
          stringResult = intl.string(tmp(1126).t.XqMe3N);
        }
        cResult[0] = placeholder;
        cResult[1] = stringResult;
        let tmp4 = stringResult;
      } else {
        tmp4 = cResult[1];
      }
      noop = tmp7;
      let obj = options(576);
      const tmp6 = undefined !== allowCustomValue && allowCustomValue;
      const dropdownItem = closure_9();
      let str = value;
      if (value == null) {
        str = "";
      }
      const tmp9 = onChange(noop.useState(str), 2);
      closure_6 = tmp9[1];
      const tmp8 = closure_9();
      [r10046, closure_7] = onChange(noop.useState(false), 2);
      const tmp11 = onChange(noop.useState(false), 2);
      const first = tmp11[0];
      closure_9 = tmp11[1];
      if (cResult[2] === first) {
        if (cResult[3] === str2) {
          if (cResult[4] === value) {
            let tmp13 = cResult[5];
            let tmp14 = cResult[6];
          }
          const effect = obj2.useEffect(tmp13, tmp14);
          if (cResult[7] === options) {
            if (cResult[8] === str2) {
              let arr3 = cResult[9];
            }
            let tmp17 = arr3;
            if (tmp6) {
              tmp17 = arr3;
              if (0 === arr3.length) {
                tmp17 = arr3;
                if ("" !== str2.trim()) {
                  if (cResult[10] !== str2) {
                    const trimmed = str2.trim();
                    cResult[10] = str2;
                    cResult[11] = trimmed;
                    let tmp18 = trimmed;
                  } else {
                    tmp18 = cResult[11];
                  }
                  if (cResult[12] !== str2) {
                    const trimmed1 = str2.trim();
                    cResult[12] = str2;
                    cResult[13] = trimmed1;
                    let tmp20 = trimmed1;
                  } else {
                    tmp20 = cResult[13];
                  }
                  if (cResult[14] === tmp20) {
                  }
                  const obj3 = { label: tmp18, value: tmp20 };
                  class J {
                    constructor() {
                      tmp = closure_5;
                      if ("" !== closure_5.trim()) {
                        tmp2 = onChange;
                        tmp3 = onChange(tmp);
                        tmp4 = closure_9;
                        flag = false;
                        tmp5 = closure_9(false);
                        tmp6 = closure_7;
                        tmp7 = closure_7(false);
                      }
                      return;
                    }
                  }
                  tmp23[0] = obj3;
                  cResult[14] = tmp20;
                  cResult[15] = tmp18;
                  cResult[16] = tmp23;
                }
              }
            }
            arr3 = tmp17;
            if (cResult[17] !== options.length) {
              class A {
                constructor(arg0) {
                  tmp = closure_9(true);
                  tmp2 = closure_6(options);
                  tmp4 = options.length > 0;
                  tmp3 = closure_7;
                  if (!tmp4) {
                    tmp5 = closure_0;
                    tmp4 = closure_0.length > 0;
                  }
                  tmp3Result = tmp3(tmp4);
                  return;
                }
              }
              cResult[17] = options.length;
              cResult[18] = A;
            } else {
              class A {
                constructor(arg0) {
                  tmp = closure_9(true);
                  tmp2 = closure_6(options);
                  tmp4 = options.length > 0;
                  tmp3 = closure_7;
                  if (!tmp4) {
                    tmp5 = closure_0;
                    tmp4 = closure_0.length > 0;
                  }
                  tmp3Result = tmp3(tmp4);
                  return;
                }
              }
            }
            if (cResult[19] === onChange) {
              class A {
                constructor(arg0) {
                  tmp = closure_9(true);
                  tmp2 = closure_6(options);
                  tmp4 = options.length > 0;
                  tmp3 = closure_7;
                  if (!tmp4) {
                    tmp5 = closure_0;
                    tmp4 = closure_0.length > 0;
                  }
                  tmp3Result = tmp3(tmp4);
                  return;
                }
              }
              if (cResult[22] !== onChange) {
                class Y {
                  constructor(arg0) {
                    tmp = closure_6(options);
                    tmp2 = onChange(options);
                    tmp3 = closure_9(false);
                    tmp4 = closure_7(false);
                    return;
                  }
                }
                cResult[22] = onChange;
                cResult[23] = Y;
              } else {
                class Y {
                  constructor(arg0) {
                    tmp = closure_6(options);
                    tmp2 = onChange(options);
                    tmp3 = closure_9(false);
                    tmp4 = closure_7(false);
                    return;
                  }
                }
              }
              closure_11 = Y;
              if (cResult[24] === options.length) {
                class Y {
                  constructor(arg0) {
                    tmp = closure_6(options);
                    tmp2 = onChange(options);
                    tmp3 = closure_9(false);
                    tmp4 = closure_7(false);
                    return;
                  }
                }
                const _Symbol = Symbol;
                if (cResult[27] === Symbol.for("react.memo_cache_sentinel")) {
                  class Y {
                    constructor(arg0) {
                      tmp = closure_6(options);
                      tmp2 = onChange(options);
                      tmp3 = closure_9(false);
                      tmp4 = closure_7(false);
                      return;
                    }
                  }
                  cResult[27] = tmp31;
                } else {
                  class Y {
                    constructor(arg0) {
                      tmp = closure_6(options);
                      tmp2 = onChange(options);
                      tmp3 = closure_9(false);
                      tmp4 = closure_7(false);
                      return;
                    }
                  }
                }
                class J {
                  constructor() {
                    tmp = closure_5;
                    if ("" !== closure_5.trim()) {
                      tmp2 = onChange;
                      tmp3 = onChange(tmp);
                      tmp4 = closure_9;
                      flag = false;
                      tmp5 = closure_9(false);
                      tmp6 = closure_7;
                      tmp7 = closure_7(false);
                    }
                    return;
                  }
                }
                if (cResult[28] === Symbol.for("react.memo_cache_sentinel")) {
                  class Y {
                    constructor(arg0) {
                      tmp = closure_6(options);
                      tmp2 = onChange(options);
                      tmp3 = closure_9(false);
                      tmp4 = closure_7(false);
                      return;
                    }
                  }
                  cResult[28] = tmp33;
                } else {
                  class Y {
                    constructor(arg0) {
                      tmp = closure_6(options);
                      tmp2 = onChange(options);
                      tmp3 = closure_9(false);
                      tmp4 = closure_7(false);
                      return;
                    }
                  }
                }
                if (cResult[29] === A) {
                  class Y {
                    constructor(arg0) {
                      tmp = closure_6(options);
                      tmp2 = onChange(options);
                      tmp3 = closure_9(false);
                      tmp4 = closure_7(false);
                      return;
                    }
                  }
                }
                const obj4 = {
                  placeholder: tmp4,
                  value: str2,
                  onChange: A,
                  onSubmitEditing: J,
                  onFocus: tmp28,
                  onBlur: tmp31,
                  leadingIcon: tmp(6738).MagnifyingGlassIcon,
                  clearable: true,
                  returnKeyType: "search",
                  accessibilityRole: "search",
                  autoCorrect: false,
                  autoCapitalize: "none",
                  disabled: tmp7,
                };
                const tmp36 = closure_7(tmp(6294).TextField, obj4);
                cResult[29] = A;
                cResult[30] = tmp28;
                cResult[31] = J;
                cResult[32] = tmp7;
                cResult[33] = tmp4;
                cResult[34] = str2;
                cResult[35] = tmp36;
              }
              function ee() {
                let tmp2 = str2.length > 0;
                if (!tmp2) {
                  tmp2 = options.length > 0;
                }
                closure_1_7(tmp2);
              }
              class J {
                constructor() {
                  tmp = closure_5;
                  if ("" !== closure_5.trim()) {
                    tmp2 = onChange;
                    tmp3 = onChange(tmp);
                    tmp4 = closure_9;
                    flag = false;
                    tmp5 = closure_9(false);
                    tmp6 = closure_7;
                    tmp7 = closure_7(false);
                  }
                  return;
                }
              }
              cResult[25] = str2.length;
              cResult[26] = ee;
            }
            class J {
              constructor() {
                tmp = closure_5;
                if ("" !== closure_5.trim()) {
                  tmp2 = onChange;
                  tmp3 = onChange(tmp);
                  tmp4 = closure_9;
                  flag = false;
                  tmp5 = closure_9(false);
                  tmp6 = closure_7;
                  tmp7 = closure_7(false);
                }
                return;
              }
            }
            cResult[19] = onChange;
            cResult[20] = str2;
            cResult[21] = J;
          }
          let found = options;
          if ("" !== str2.trim()) {
            class Y {
              constructor(arg0) {
                tmp = closure_6(options);
                tmp2 = onChange(options);
                tmp3 = closure_9(false);
                tmp4 = closure_7(false);
                return;
              }
            }
            found = options.filter((label) => {
              const formatted = label.label.toLowerCase();
              let hasItem = formatted.includes(closure_0);
              if (!hasItem) {
                const formatted1 = label.value.toLowerCase();
                hasItem = formatted1.includes(closure_0);
              }
              return hasItem;
            });
          }
          cResult[7] = options;
          cResult[8] = str2;
          cResult[9] = found;
          arr3 = found;
        }
      }
      const fn = function x() {
        let tmp2 = null == value;
        if (!tmp2) {
          tmp2 = value === str2;
        }
        if (!tmp2) {
          tmp2 = first;
        }
        if (!tmp2) {
          closure_6(value);
        }
      };
      let items = [value, tmp9[0], first];
      cResult[2] = first;
      cResult[3] = tmp9[0];
      cResult[4] = value;
      cResult[5] = fn;
      cResult[6] = items;
      tmp14 = items;
      tmp13 = fn;
      const tmp10 = onChange(noop.useState(false), 2);
    }
  : function MobileSearchableSelect(options) {
      options = options.options;
      value = options.value;
      dependencyMap = value;
      const onChange = options.onChange;
      let placeholder = options.placeholder;
      if (placeholder === undefined) {
        const intl = options(1126).intl;
        placeholder = intl.string(options(1126).t.XqMe3N);
      }
      let flag = options.allowCustomValue;
      if (flag === undefined) {
        flag = false;
      }
      let flag2 = options.isDisabled;
      if (flag2 === undefined) {
        flag2 = false;
      }
      value = undefined;
      closure_7 = undefined;
      c8 = undefined;
      let first1;
      closure_10 = undefined;
      let memo;
      closure_12 = undefined;
      const tmp3 = first1();
      const dropdownItem = tmp3;
      let str = value;
      if (value == null) {
        str = "";
      }
      let tmp4 = onChange(flag.useState(str), 2);
      value = tmp4[0];
      closure_7 = tmp4[1];
      [tmp6, c8] = onChange(flag.useState(false), 2);
      const tmp7 = onChange(flag.useState(false), 2);
      first1 = tmp7[0];
      closure_10 = tmp7[1];
      let items = [value, value, first1];
      const effect = obj.useEffect(() => {
        let tmp2 = null == value;
        if (!tmp2) {
          tmp2 = value === first;
        }
        if (!tmp2) {
          tmp2 = first1;
        }
        if (!tmp2) {
          closure_7(value);
        }
      }, items);
      const items1 = [options, value, flag];
      memo = obj.useMemo(() => {
        let found = options;
        if ("" !== first.trim()) {
          closure_0 = first.toLowerCase();
          found = options.filter((label) => {
            const formatted = label.label.toLowerCase();
            let hasItem = formatted.includes(closure_0);
            if (!hasItem) {
              const formatted1 = label.value.toLowerCase();
              hasItem = formatted1.includes(closure_0);
            }
            return hasItem;
          });
        }
        let tmp = found;
        if (flag) {
          tmp = found;
          if (0 === found.length) {
            tmp = found;
            if ("" !== first.trim()) {
              const obj = { label: first.trim(), value: first.trim() };
              const items = [obj];
              tmp = items;
            }
          }
        }
        return tmp;
      }, items1);
      const items2 = [options.length];
      const items3 = [value, onChange];
      const callback = obj.useCallback((arg0) => {
        closure_10(true);
        closure_7(arg0);
        let tmp4 = arg0.length > 0;
        if (!tmp4) {
          tmp4 = options.length > 0;
        }
        _undefined(tmp4);
      }, items2);
      const items4 = [onChange];
      const callback1 = obj.useCallback(() => {
        if ("" !== first.trim()) {
          onChange(first);
          closure_10(false);
          _undefined(false);
        }
      }, items3);
      closure_12 = obj.useCallback((arg0) => {
        closure_7(arg0);
        onChange(arg0);
        closure_10(false);
        _undefined(false);
      }, items4);
      const items5 = [value.length, options.length];
      const callback2 = obj.useCallback(() => {
        let tmp2 = first.length > 0;
        if (!tmp2) {
          tmp2 = options.length > 0;
        }
        _undefined(tmp2);
      }, items5);
      const obj2 = { style: { position: "relative", zIndex: 100, overflow: "visible" }, children: null };
      const callback3 = obj.useCallback(() => {
        _undefined(false);
        closure_10(false);
      }, []);
      const tmp14 = c8;
      const tmp5 = onChange(flag.useState(false), 2);
      const items6 = [
        closure_7(options(6294).TextField, {
          placeholder,
          value,
          onChange: callback,
          onSubmitEditing: callback1,
          onFocus: callback2,
          onBlur: callback3,
          leadingIcon: options(6738).MagnifyingGlassIcon,
          clearable: true,
          returnKeyType: "search",
          accessibilityRole: "search",
          autoCorrect: false,
          autoCapitalize: "none",
          disabled: flag2,
        }),
      ];
      if (tmp16Result) {
        tmp16Result = memo.length > 0;
      }
      if (tmp16Result) {
        const obj4 = { style: tmp3.dropdownContainer, children: null };
        const obj5 = {
          nestedScrollEnabled: true,
          showsVerticalScrollIndicator: false,
          keyboardShouldPersistTaps: "handled",
          children: memo.map((children, index) => {
            value = children;
            const items = [dropdownItem.dropdownItem];
            let dropdownItemLast = index === memo.length - 1;
            if (dropdownItemLast) {
              dropdownItemLast = dropdownItem.dropdownItemLast;
            }
            const obj = {
              style: items,
              activeOpacity: 0.7,
              onPress() {
                closure_12(value.value);
              },
              disabled: flag2,
              children: closure_7(options(value[11]).Text, {
                variant: "text-sm/medium",
                color: "text-default",
                style: dropdownItem.dropdownItemText,
                children: children.label,
              }),
            };
            items[1] = dropdownItemLast;
            return closure_7(first, obj, "option-" + children.value + "-" + index);
          }),
        };
        obj4.children = tmp16(dropdownItem, obj5);
        tmp16Result = tmp16(tmp15, obj4);
      }
      items6[1] = tmp16Result;
      obj2.children = items6;
      return tmp14(flag2, obj2);
    };
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/quests/native/MobileSearchableSelect.tsx");

export default tmp4;
export const MobileSearchableSelect = tmp4;
