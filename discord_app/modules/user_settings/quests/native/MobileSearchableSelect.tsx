// === Module 16560: MobileSearchableSelect ===

// Module 16560 (MobileSearchableSelect)
import nativeDefault from "native" /* 587 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, ScrollView: hasOwnProperty, TouchableOpacity: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4972);
let obj2 = { dropdownContainer: null, dropdownItem: null, dropdownItemLast: null, dropdownItemText: null };
const rect = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, borderRadius: nativeDefault.radii.md, marginTop: nativeDefault.space.PX_4, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, left: 0, right: 0, zIndex: 999999, elevation: 30, shadowColor: "#000", shadowOffset: { width: 0, height: 6 }, shadowOpacity: 0.4, shadowRadius: 8, maxHeight: 250 };
obj2.dropdownContainer = rect;
obj2.dropdownItem = { padding: nativeDefault.space.PX_12, borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_MUTED };
obj2.dropdownItemLast = { borderBottomWidth: 0 };
obj2.dropdownItemText = { fontSize: 14 };
let closure_9 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function MobileSearchableSelect(options) {
  const cResult = require("c").c(46);
  options = options.options;
  _require = options;
  value = options.value;
  dependencyMap = value;
  const onChange = options.onChange;
  ({ placeholder, allowCustomValue, isDisabled } = options);
  if (cResult[0] !== placeholder) {
    let stringResult = placeholder;
    if (undefined === placeholder) {
      const intl = tmp(1125).intl;
      stringResult = intl.string(tmp(1125).t.XqMe3N);
    }
    cResult[0] = placeholder;
    cResult[1] = stringResult;
    let tmp4 = stringResult;
  } else {
    tmp4 = cResult[1];
  }
  noop = tmp7;
  const tmp8 = closure_9();
  const dropdownItem = tmp8;
  noop.useRef(null);
  const ref = noop.useRef(false);
  let str = value;
  if (value == null) {
    str = "";
  }
  const first = onChange(noop.useState(str), 1)[0];
  let str2 = value;
  if (value == null) {
    str2 = "";
  }
  const tmp10Result = onChange(noop.useState(str2), 2);
  const str3 = tmp10Result[0];
  closure_8 = tmp10Result[1];
  let obj = require("c");
  const tmp6 = undefined !== allowCustomValue && allowCustomValue;
  [tmp14, closure_9] = onChange(noop.useState(false), 2);
  const tmp10Result4 = onChange(noop.useState(false), 2);
  const first1 = tmp10Result4[0];
  closure_11 = tmp10Result4[1];
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function _(arg0) {
      closure_6.current = true;
      const current = ref.current;
      if (current != null) {
        current.setText(arg0);
      }
      closure_6.current = false;
      closure_8(arg0);
    };
    cResult[2] = fn;
    let tmp17 = fn;
  } else {
    tmp17 = cResult[2];
  }
  closure_12 = tmp17;
  if (cResult[3] === first1) {
    if (cResult[4] === str3) {
      if (cResult[5] === value) {
        let tmp18 = cResult[6];
        let tmp19 = cResult[7];
      }
      const effect = obj2.useEffect(tmp18, tmp19);
      if (cResult[8] === options) {
        if (cResult[9] === str3) {
          let arr3 = cResult[10];
        }
        let arr4 = arr3;
        if (tmp6) {
          arr4 = arr3;
          if (0 === arr3.length) {
            arr4 = arr3;
            if ("" !== str3.trim()) {
              if (cResult[11] !== str3) {
                const trimmed = str3.trim();
                cResult[11] = str3;
                cResult[12] = trimmed;
                let tmp22 = trimmed;
              } else {
                tmp22 = cResult[12];
              }
              if (cResult[13] !== str3) {
                const trimmed1 = str3.trim();
                cResult[13] = str3;
                cResult[14] = trimmed1;
                let tmp24 = trimmed1;
              } else {
                tmp24 = cResult[14];
              }
              if (cResult[15] === tmp22) {
              }
              const obj3 = { label: tmp22, value: tmp24 };
              let items = [obj3];
              cResult[15] = tmp22;
              cResult[16] = tmp24;
              cResult[17] = items;
            }
          }
        }
        if (cResult[18] !== options.length) {
          function ee(arg0) {
            if (!ref.current) {
              closure_11(true);
              closure_8(arg0);
              let tmp7 = arg0.length > 0;
              if (!tmp7) {
                tmp7 = closure_0.length > 0;
              }
              closure_1_9(tmp7);
            }
          }
          cResult[18] = options.length;
          cResult[19] = ee;
          let tmp28 = ee;
        } else {
          tmp28 = cResult[19];
        }
        if (cResult[20] === onChange) {
          if (cResult[21] === str3) {
            let tmp29 = cResult[22];
          }
          if (cResult[23] !== onChange) {
            function ae(arg0) {
              closure_12(arg0);
              onChange(arg0);
              closure_11(false);
              closure_1_9(false);
            }
            cResult[23] = onChange;
            cResult[24] = ae;
            let tmp30 = ae;
          } else {
            tmp30 = cResult[24];
          }
          closure_14 = tmp30;
          if (cResult[25] === options.length) {
            if (cResult[26] === str3.length) {
              let tmp31 = cResult[27];
            }
            const _Symbol = Symbol;
            if (cResult[28] === Symbol.for("react.memo_cache_sentinel")) {
              function de() {
                closure_1_9(false);
                closure_11(false);
              }
              cResult[28] = de;
              let tmp32 = de;
            } else {
              tmp32 = cResult[28];
            }
            const _Symbol2 = Symbol;
            if (cResult[29] === Symbol.for("react.memo_cache_sentinel")) {
              const obj4 = { position: "relative", zIndex: 100, overflow: "visible" };
              cResult[29] = obj4;
              let tmp33 = obj4;
            } else {
              tmp33 = cResult[29];
            }
            if (cResult[30] === tmp28) {
              if (cResult[31] === tmp31) {
                if (cResult[32] === tmp29) {
                  if (cResult[33] === first) {
                    if (cResult[34] === tmp7) {
                      if (cResult[35] === tmp4) {
                        let tmp34 = cResult[36];
                      }
                      if (cResult[37] === arr4) {
                        if (cResult[38] === tmp30) {
                          if (cResult[39] === tmp7) {
                            if (cResult[40] === tmp14) {
                              if (cResult[41] === tmp8) {
                                let tmp37 = cResult[42];
                              }
                              if (cResult[43] === tmp34) {
                                if (cResult[44] === tmp37) {
                                  let tmp42 = cResult[45];
                                }
                                return tmp42;
                              }
                              const obj5 = { style: tmp33, children: null };
                              const items1 = [tmp34, tmp37];
                              obj5.children = items1;
                              const tmp45 = closure_8(dropdownItem, obj5);
                              cResult[43] = tmp34;
                              cResult[44] = tmp37;
                              cResult[45] = tmp45;
                              tmp42 = tmp45;
                            }
                          }
                        }
                      }
                      let tmp38 = tmp14;
                      if (tmp14) {
                        tmp38 = arr4.length > 0;
                      }
                      if (tmp38) {
                        const obj6 = { style: tmp8.dropdownContainer, children: null };
                        const obj7 = {
                          nestedScrollEnabled: true,
                          showsVerticalScrollIndicator: false,
                          keyboardShouldPersistTaps: "handled",
                          children: arr4.map((children, index) => {
                                                  value = children;
                                                  const items = [dropdownItem.dropdownItem, ];
                                                  let dropdownItemLast = index === arr4.length - 1;
                                                  if (dropdownItemLast) {
                                                    dropdownItemLast = dropdownItem.dropdownItemLast;
                                                  }
                                                  const obj = {
                                                    style: items,
                                                    activeOpacity: 0.7,
                                                    onPress() {
                                                      closure_14(value.value);
                                                    },
                                                    disabled,
                                                    children: str3(value(value[10]).Text, { variant: "text-sm/medium", color: "text-default", style: dropdownItem.dropdownItemText, children: children.label })
                                                  };
                                                  items[1] = dropdownItemLast;
                                                  return str3(closure_6, obj, "option-" + children.value + "-" + index);
                                                })
                        };
                        obj6.children = str3(ref, obj7);
                        tmp38 = str3(dropdownItem, obj6);
                      }
                      cResult[37] = arr4;
                      cResult[38] = tmp30;
                      cResult[39] = tmp7;
                      cResult[40] = tmp14;
                      cResult[41] = tmp8;
                      cResult[42] = tmp38;
                      tmp37 = tmp38;
                    }
                  }
                }
              }
            }
            const obj8 = { ref, placeholder: tmp4, defaultValue: first, onChange: tmp28, onSubmitEditing: tmp29, onFocus: tmp31, onBlur: tmp32, disabled: tmp7 };
            const tmp36 = str3(tmp(7147).SearchBar, obj8);
            cResult[30] = tmp28;
            cResult[31] = tmp31;
            cResult[32] = tmp29;
            cResult[33] = first;
            cResult[34] = tmp7;
            cResult[35] = tmp4;
            cResult[36] = tmp36;
            tmp34 = tmp36;
          }
          function ne() {
            let tmp2 = str3.length > 0;
            if (!tmp2) {
              tmp2 = closure_0.length > 0;
            }
            closure_1_9(tmp2);
          }
          cResult[25] = options.length;
          cResult[26] = str3.length;
          cResult[27] = ne;
          tmp31 = ne;
        }
        function le() {
          if ("" !== str3.trim()) {
            onChange(str3);
            closure_11(false);
            closure_1_9(false);
          }
        }
        cResult[20] = onChange;
        cResult[21] = str3;
        cResult[22] = le;
        tmp29 = le;
      }
      let found = options;
      if ("" !== str3.trim()) {
        _require = str3.toLowerCase();
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
      cResult[8] = options;
      cResult[9] = str3;
      cResult[10] = found;
      arr3 = found;
    }
  }
  class U {
    constructor() {
      tmp = value;
      tmp2 = null == value;
      if (!tmp2) {
        tmp3 = closure_7;
        tmp2 = tmp === closure_7;
      }
      if (!tmp2) {
        tmp2 = closure_10;
      }
      if (!tmp2) {
        tmp4 = closure_12;
        tmp5 = closure_12(tmp);
      }
      return;
    }
  }
  const items2 = [value, str3, first1, tmp17];
  cResult[3] = first1;
  cResult[4] = str3;
  cResult[5] = value;
  cResult[6] = U;
  cResult[7] = items2;
  tmp19 = items2;
  tmp18 = U;
}) : (function MobileSearchableSelect(options) {
  options = options.options;
  value = options.value;
  dependencyMap = value;
  const onChange = options.onChange;
  let placeholder = options.placeholder;
  if (placeholder === undefined) {
    const intl = options(1125).intl;
    placeholder = intl.string(options(1125).t.XqMe3N);
  }
  let flag = options.allowCustomValue;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = options.isDisabled;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let first;
  closure_9 = undefined;
  c10 = undefined;
  let first1;
  closure_12 = undefined;
  let callback;
  let memo;
  closure_15 = undefined;
  const tmp3 = closure_9();
  const dropdownItem = tmp3;
  flag.useRef(null);
  const ref = flag.useRef(false);
  let str = value;
  if (value == null) {
    str = "";
  }
  let str2 = value;
  if (value == null) {
    str2 = "";
  }
  const tmp5Result = onChange(flag.useState(str2), 2);
  first = tmp5Result[0];
  closure_9 = tmp5Result[1];
  [tmp8, c10] = onChange(flag.useState(false), 2);
  const tmp5Result4 = onChange(flag.useState(false), 2);
  first1 = tmp5Result4[0];
  closure_12 = tmp5Result4[1];
  callback = obj.useCallback((arg0) => {
    closure_7.current = true;
    const current = ref.current;
    if (current != null) {
      current.setText(arg0);
    }
    closure_7.current = false;
    closure_9(arg0);
  }, []);
  let items = [value, first, first1, callback];
  const effect = obj.useEffect(() => {
    let tmp2 = null == value;
    if (!tmp2) {
      tmp2 = value === first;
    }
    if (!tmp2) {
      tmp2 = first1;
    }
    if (!tmp2) {
      callback(value);
    }
  }, items);
  const items1 = [options, first, flag];
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
  const items3 = [first, onChange];
  const callback1 = obj.useCallback((arg0) => {
    if (!ref.current) {
      closure_12(true);
      closure_9(arg0);
      let tmp7 = arg0.length > 0;
      if (!tmp7) {
        tmp7 = options.length > 0;
      }
      _undefined(tmp7);
    }
  }, items2);
  const items4 = [onChange, callback];
  const callback2 = obj.useCallback(() => {
    if ("" !== first.trim()) {
      onChange(first);
      closure_12(false);
      _undefined(false);
    }
  }, items3);
  closure_15 = obj.useCallback((arg0) => {
    callback(arg0);
    onChange(arg0);
    closure_12(false);
    _undefined(false);
  }, items4);
  const items5 = [first.length, options.length];
  const callback3 = obj.useCallback(() => {
    let tmp2 = first.length > 0;
    if (!tmp2) {
      tmp2 = options.length > 0;
    }
    _undefined(tmp2);
  }, items5);
  const obj2 = { style: { position: "relative", zIndex: 100, overflow: "visible" }, children: null };
  const callback4 = obj.useCallback(() => {
    _undefined(false);
    closure_12(false);
  }, []);
  const items6 = [ref(options(7147).SearchBar, { ref, placeholder, defaultValue: onChange(flag.useState(str), 1)[0], onChange: callback1, onSubmitEditing: callback2, onFocus: callback3, onBlur: callback4, disabled: flag2 }), ];
  if (tmp19Result) {
    tmp19Result = memo.length > 0;
  }
  if (tmp19Result) {
    const obj3 = { style: tmp3.dropdownContainer, children: null };
    const obj4 = {
      nestedScrollEnabled: true,
      showsVerticalScrollIndicator: false,
      keyboardShouldPersistTaps: "handled",
      children: memo.map((children, index) => {
          value = children;
          const items = [dropdownItem.dropdownItem, ];
          let dropdownItemLast = index === memo.length - 1;
          if (dropdownItemLast) {
            dropdownItemLast = dropdownItem.dropdownItemLast;
          }
          const obj = {
            style: items,
            activeOpacity: 0.7,
            onPress() {
              closure_15(value.value);
            },
            disabled: flag2,
            children: closure_7(options(value[10]).Text, { variant: "text-sm/medium", color: "text-default", style: dropdownItem.dropdownItemText, children: children.label })
          };
          items[1] = dropdownItemLast;
          return closure_7(ref, obj, "option-" + children.value + "-" + index);
        })
    };
    obj3.children = tmp19(dropdownItem, obj4);
    tmp19Result = tmp19(tmp18, obj3);
  }
  items6[1] = tmp19Result;
  obj2.children = items6;
  return first(flag2, obj2);
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/quests/native/MobileSearchableSelect.tsx");

export default tmp4;
export const MobileSearchableSelect = tmp4;