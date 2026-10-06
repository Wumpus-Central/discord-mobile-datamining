// discord_app/modules/user_settings/quests/native/MobileSearchableSelect.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react_mod from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let closure_12, dependencyMap, options;

let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let rect;
let react = react_mod;
({ View: closure_4, ScrollView: hasOwnProperty, TouchableOpacity: metroRequire } = react_native);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  dropdownContainer: rect,
  dropdownItem: obj2,
  dropdownItemLast: { borderBottomWidth: 0 },
  dropdownItemText: { fontSize: 14 },
};
rect = {
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
createStyles = createStyles.createStyles;
obj2 = {
  padding: nativeDefault.space.PX_12,
  borderBottomWidth: 1,
  borderBottomColor: nativeDefault.colors.BORDER_MUTED,
};
let closure_9 = createStyles(obj);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (options) => {
      let allowCustomValue;
      let closure_7;
      let disabled;
      let isDisabled;
      let placeholder;
      let tmp4;
      let tmp2 = dependencyMap;
      let obj = options(576);
      const cResult = obj.c(45);
      options = options.options;
      const value = options.value;
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
        tmp4 = stringResult;
      } else {
        tmp4 = cResult[1];
      }
      react = tmp7;
      const tmp6 = undefined !== allowCustomValue && allowCustomValue;
      const dropdownItem = closure_9();
      let obj2 = react;
      let str = value;
      const useState = react.useState;
      closure_9();
      if (value == null) {
        str = "";
      }
      const tmp9 = onChange(useState(str), 2);
      const str2 = tmp9[0];
      let closure_6 = tmp9[1];
      [r10046, closure_7] = onChange(obj2.useState(false), 2);
      onChange(obj2.useState(false), 2);
      const tmp11 = onChange(obj2.useState(false), 2);
      const first = tmp11[0];
      closure_9 = tmp11[1];
      if (cResult[2] === first) {
        if (cResult[3] === str2) {
          let tmp13;
          let tmp14;
          if (cResult[4] === value) {
            tmp13 = cResult[5];
            tmp14 = cResult[6];
          }
          const effect = obj2.useEffect(tmp13, tmp14);
          if (cResult[7] === options) {
            let arr3;
            if (cResult[8] === str2) {
              arr3 = cResult[9];
            }
            let tmp17 = arr3;
            if (tmp6) {
              tmp17 = arr3;
              if (0 === arr3.length) {
                tmp17 = arr3;
                if ("" !== str2.trim()) {
                  let tmp18;
                  let tmp20;
                  if (cResult[10] !== str2) {
                    const trimmed = str2.trim();
                    cResult[10] = str2;
                    cResult[11] = trimmed;
                    tmp18 = trimmed;
                  } else {
                    tmp18 = cResult[11];
                  }
                  if (cResult[12] !== str2) {
                    const trimmed1 = str2.trim();
                    cResult[12] = str2;
                    cResult[13] = trimmed1;
                    tmp20 = trimmed1;
                  } else {
                    tmp20 = cResult[13];
                  }
                  if (cResult[14] === tmp20) {
                    let tmp22;
                    if (cResult[15] === tmp18) {
                      tmp22 = cResult[16];
                    }
                    tmp17 = tmp22;
                  }
                  const obj3 = { label: tmp18, value: tmp20 };
                  class J {
                    constructor() {
                      if ("" !== str2.trim()) {
                        onChange(str2);
                        closure_9(false);
                        closure_7(false);
                      }
                    }
                  }
                  tmp23[0] = obj3;
                  cResult[14] = tmp20;
                  cResult[15] = tmp18;
                  cResult[16] = tmp23;
                  tmp22 = tmp23;
                }
              }
            }
            const length = tmp17;
            if (cResult[17] !== options.length) {
              class A {
                constructor(arg0) {
                  closure_9(true);
                  closure_6(arg0);
                  const tmp4 = arg0.length > 0 || options.length > 0;
                  closure_7(tmp4);
                }
              }
              cResult[17] = options.length;
              cResult[18] = A;
            } else {
              class A {
                constructor(arg0) {
                  closure_9(true);
                  closure_6(arg0);
                  const tmp4 = arg0.length > 0 || options.length > 0;
                  closure_7(tmp4);
                }
              }
            }
            if (cResult[19] === onChange) {
              let tmp26;
              class A {
                constructor(arg0) {
                  closure_9(true);
                  closure_6(arg0);
                  const tmp4 = arg0.length > 0 || options.length > 0;
                  closure_7(tmp4);
                }
              }
              if (cResult[22] !== onChange) {
                class Y {
                  constructor(arg0) {
                    closure_6(arg0);
                    onChange(arg0);
                    closure_9(false);
                    closure_7(false);
                  }
                }
                cResult[22] = onChange;
                cResult[23] = Y;
                tmp26 = Y;
              } else {
                class Y {
                  constructor(arg0) {
                    closure_6(arg0);
                    onChange(arg0);
                    closure_9(false);
                    closure_7(false);
                  }
                }
              }
              Y = tmp26;
              if (cResult[24] === options.length) {
                class Y {
                  constructor(arg0) {
                    closure_6(arg0);
                    onChange(arg0);
                    closure_9(false);
                    closure_7(false);
                  }
                }
                const _Symbol = Symbol;
                if (cResult[27] === Symbol.for("react.memo_cache_sentinel")) {
                  class Y {
                    constructor(arg0) {
                      closure_6(arg0);
                      onChange(arg0);
                      closure_9(false);
                      closure_7(false);
                    }
                  }
                  cResult[27] = tmp30;
                } else {
                  class Y {
                    constructor(arg0) {
                      closure_6(arg0);
                      onChange(arg0);
                      closure_9(false);
                      closure_7(false);
                    }
                  }
                }
                class J {
                  constructor() {
                    if ("" !== str2.trim()) {
                      onChange(str2);
                      closure_9(false);
                      closure_7(false);
                    }
                  }
                }
                if (cResult[28] === Symbol.for("react.memo_cache_sentinel")) {
                  class Y {
                    constructor(arg0) {
                      closure_6(arg0);
                      onChange(arg0);
                      closure_9(false);
                      closure_7(false);
                    }
                  }
                  cResult[28] = tmp32;
                } else {
                  class Y {
                    constructor(arg0) {
                      closure_6(arg0);
                      onChange(arg0);
                      closure_9(false);
                      closure_7(false);
                    }
                  }
                }
                if (cResult[29] === A) {
                  class Y {
                    constructor(arg0) {
                      closure_6(arg0);
                      onChange(arg0);
                      closure_9(false);
                      closure_7(false);
                    }
                  }
                }
                const obj4 = {
                  placeholder: tmp4,
                  value: str2,
                  onChange: A,
                  onSubmitEditing: J,
                  onFocus: tmp27,
                  onBlur: tmp30,
                  leadingIcon: options(6555).MagnifyingGlassIcon,
                  clearable: true,
                  returnKeyType: "search",
                  accessibilityRole: "search",
                  autoCorrect: false,
                  autoCapitalize: "none",
                  disabled: undefined !== isDisabled && isDisabled,
                };
                const TextField = tmp(6107).TextField;
                cResult[29] = A;
                cResult[30] = tmp27;
                cResult[31] = J;
                cResult[32] = undefined !== isDisabled && isDisabled;
                cResult[33] = tmp4;
                cResult[34] = str2;
                cResult[35] = closure_7(TextField, obj4);
                const tmp35 = closure_7(TextField, obj4);
              }
              function ee() {
                const tmp2 = str2.length > 0 || options.length > 0;
                closure_7(tmp2);
              }
              class J {
                constructor() {
                  if ("" !== str2.trim()) {
                    onChange(str2);
                    closure_9(false);
                    closure_7(false);
                  }
                }
              }
              cResult[25] = str2.length;
              cResult[26] = ee;
            }
            class J {
              constructor() {
                if ("" !== str2.trim()) {
                  onChange(str2);
                  closure_9(false);
                  closure_7(false);
                }
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
                closure_6(arg0);
                onChange(arg0);
                closure_9(false);
                closure_7(false);
              }
            }
            found = options.filter((label) => {
              const str = label.label;
              const formatted = str.toLowerCase();
              let hasItem = formatted.includes(closure_0);
              if (!hasItem) {
                const str2 = label.value;
                const formatted1 = str2.toLowerCase();
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
        const tmp2 = null == dependencyMap || dependencyMap === str2 || first;
        if (!tmp2) {
          closure_6(dependencyMap);
        }
      };
      let items = [value, str2, first];
      cResult[2] = first;
      cResult[3] = str2;
      cResult[4] = value;
      cResult[5] = fn;
      cResult[6] = items;
      tmp14 = items;
      tmp13 = fn;
    }
  : (options) => {
      let _undefined;
      let c8;
      let items6;
      let obj5;
      let tmp16Result;
      let tmp6;
      options = options.options;
      let value = options.value;
      dependencyMap = value;
      const onChange = options.onChange;
      let placeholder = options.placeholder;
      if (placeholder === undefined) {
        let tmp = options;
        let tmp2 = dependencyMap;
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
      let closure_7;
      c8 = undefined;
      let first1;
      let closure_10;
      let memo;
      closure_12 = undefined;
      const tmp3 = first1();
      const dropdownItem = tmp3;
      let obj = flag;
      let str = value;
      const useState = flag.useState;
      if (value == null) {
        str = "";
      }
      let tmp4 = onChange(useState(str), 2);
      value = tmp4[0];
      closure_7 = tmp4[1];
      [tmp6, c8] = onChange(obj.useState(false), 2);
      const tmp5 = onChange(obj.useState(false), 2);
      const tmp7 = onChange(obj.useState(false), 2);
      first1 = tmp7[0];
      closure_10 = tmp7[1];
      let items = [value, value, first1];
      const effect = obj.useEffect(() => {
        const tmp2 = null == dependencyMap || dependencyMap === first || first1;
        if (!tmp2) {
          closure_7(dependencyMap);
        }
      }, items);
      const items1 = [options, value, flag];
      memo = obj.useMemo(() => {
        let found = options;
        if ("" !== first.trim()) {
          let closure_0 = first.toLowerCase();
          found = options.filter((label) => {
            const str = label.label;
            const formatted = str.toLowerCase();
            let hasItem = formatted.includes(closure_0);
            if (!hasItem) {
              const str2 = label.value;
              const formatted1 = str2.toLowerCase();
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
              const items = [{ label: first.trim(), value: first.trim() }];
              tmp = items;
              const obj = { label: first.trim(), value: first.trim() };
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
        const tmp4 = arg0.length > 0 || options.length > 0;
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
        const tmp2 = first.length > 0 || options.length > 0;
        _undefined(tmp2);
      }, items5);
      let obj2 = { style: { position: "relative", zIndex: 100, overflow: "visible" }, children: items6 };
      const callback3 = obj.useCallback(() => {
        _undefined(false);
        closure_10(false);
      }, []);
      const obj3 = {
        placeholder,
        value,
        onChange: callback,
        onSubmitEditing: callback1,
        onFocus: callback2,
        onBlur: callback3,
        leadingIcon: options(6555).MagnifyingGlassIcon,
        clearable: true,
        returnKeyType: "search",
        accessibilityRole: "search",
        autoCorrect: false,
        autoCapitalize: "none",
        disabled: flag2,
      };
      const TextField = options(6107).TextField;
      items6 = [closure_7(TextField, obj3)];
      const tmp14 = c8;
      if (tmp16Result) {
        tmp16Result = memo.length > 0;
      }
      if (tmp16Result) {
        const obj4 = { style: tmp3.dropdownContainer, children: closure_7(dropdownItem, obj5) };
        obj5 = {
          nestedScrollEnabled: true,
          showsVerticalScrollIndicator: false,
          keyboardShouldPersistTaps: "handled",
          children: memo.map((children, index) => {
            let obj2;
            const items = [dropdownItem.dropdownItem];
            const dropdownItemLast = index === memo.length - 1 && dropdownItem.dropdownItemLast;
            items[1] = dropdownItemLast;
            const obj = {
              style: items,
              activeOpacity: 0.7,
              onPress() {
                closure_12(children.value);
              },
              disabled: flag2,
              children: closure_7(options(dependencyMap[11]).Text, obj2),
            };
            obj2 = {
              variant: "text-sm/medium",
              color: "text-default",
              style: dropdownItem.dropdownItemText,
              children: children.label,
            };
            return closure_7(first, obj, "option-" + children.value + "-" + index);
          }),
        };
        tmp16Result = tmp16(tmp15, obj4);
      }
      items6[1] = tmp16Result;
      return tmp14(flag2, obj2);
    };
const result = size.fileFinishedImporting("modules/user_settings/quests/native/MobileSearchableSelect.tsx");

export default tmp5;
export const MobileSearchableSelect = tmp5;
