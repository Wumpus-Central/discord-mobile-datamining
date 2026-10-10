// === Module 6262: TableRadioGroup ===

// Module 6262 (TableRadioGroup)
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = fn;
let jsx = fn(21).jsx;
let context = noop.createContext({ selectedValue: null, onSelect: fn(1085).NOOP });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/TableRow/native/TableRadioGroup.native.tsx");

export const TableRadioGroupContext = context;
export const TableRadioGroup = ReactCompilerGating.isReactCompilerEnabled() ? (function TableRadioGroup(groupRef) {
  const cResult = onChange(576).c(26);
  ({ children, value, defaultValue, onChange } = groupRef);
  ({ title, description, helperText, hasIcons, accessibilityLabel } = groupRef);
  dependencyMap = tmp4;
  let mapped = noop;
  let tmp5 = null;
  if (undefined === value) {
    if (defaultValue == null) {
      defaultValue = null;
    }
    tmp5 = defaultValue;
  }
  const obj = onChange(576);
  [tmp7, _slicedToArray] = noop.useState(tmp5);
  if (undefined !== value) {
    tmp7 = value;
  }
  if (tmp7 == null) {
    tmp7 = null;
  }
  noop = tmp7;
  if (cResult[0] === undefined !== value) {
    if (cResult[1] === onChange) {
      if (cResult[2] === tmp7) {
        let tmp8 = cResult[3];
        let tmp9 = cResult[4];
      }
      const imperativeHandle = mapped.useImperativeHandle(groupRef.groupRef, tmp8, tmp9);
      context = mapped.useContext(onChange(6263).RedesignCompatContext);
      if (cResult[5] === tmp4) {
        if (cResult[6] === onChange) {
          let tmp12 = cResult[7];
        }
        if (cResult[8] === tmp12) {
          if (cResult[9] === tmp7) {
            let tmp13 = cResult[10];
          }
          if (cResult[11] === children) {
            if (cResult[12] === context) {
              if (cResult[16] === accessibilityLabel) {
                if (cResult[17] === description) {
                  if (cResult[18] === hasIcons) {
                    if (cResult[19] === helperText) {
                      if (cResult[20] === tmp14) {
                        if (cResult[21] === title) {
                          let tmp17 = cResult[22];
                        }
                        if (cResult[23] === tmp13) {
                          if (cResult[24] === tmp17) {
                            let tmp20 = cResult[25];
                          }
                          return tmp20;
                        }
                        const obj2 = { value: tmp13, children: tmp17 };
                        const tmp23 = context(context.Provider, obj2);
                        cResult[23] = tmp13;
                        cResult[24] = tmp17;
                        cResult[25] = tmp23;
                        tmp20 = tmp23;
                      }
                    }
                  }
                }
              }
              const obj3 = { accessibilityRole: "radiogroup", accessibilityLabel, title, description, helperText, hasIcons, children: cResult[13] };
              const tmp19 = context(onChange(6264).TableRowGroup, obj3);
              cResult[16] = accessibilityLabel;
              cResult[17] = description;
              cResult[18] = hasIcons;
              cResult[19] = helperText;
              cResult[20] = cResult[13];
              cResult[21] = title;
              cResult[22] = tmp19;
              tmp17 = tmp19;
            }
          }
          if (cResult[14] !== context) {
            class M {
              constructor(arg0) {
                if (!closure_3.isValidElement(groupRef)) {
                  tmp3 = closure_4;
                  tmp4 = null;
                  return tmp4;
                } else {
                  tmp = closure_0;
                  tmp2 = closure_1;
                }
                tmp4 = groupRef;
                return;
              }
            }
            cResult[14] = context;
            cResult[15] = M;
          } else {
            class M {
              constructor(arg0) {
                if (!closure_3.isValidElement(groupRef)) {
                  tmp3 = closure_4;
                  tmp4 = null;
                  return tmp4;
                } else {
                  tmp = closure_0;
                  tmp2 = closure_1;
                }
                tmp4 = groupRef;
                return;
              }
            }
          }
          const Children = mapped.Children;
          mapped = Children.map(children, M);
          cResult[11] = children;
          cResult[12] = context;
          cResult[13] = mapped;
        }
        const obj4 = { selectedValue: tmp7, onSelect: tmp12 };
        cResult[8] = tmp12;
        cResult[9] = tmp7;
        cResult[10] = obj4;
        tmp13 = obj4;
      }
      const fn2 = function _(arg0) {
        if (!closure_1) {
          _slicedToArray(arg0);
        }
        if (onChange != null) {
          tmp3(arg0);
        }
      };
      cResult[5] = tmp4;
      cResult[6] = onChange;
      cResult[7] = fn2;
      tmp12 = fn2;
    }
  }
  const fn = function s() {
    return {
      setValue(arg0) {
        if (!closure_1_1) {
          closure_1_2(arg0);
        }
        if (onChange != null) {
          tmp3(arg0);
        }
      },
      getValue() {
        return closure_1_3;
      }
    };
  };
  const items = [undefined !== value, onChange, tmp7];
  cResult[0] = undefined !== value;
  cResult[1] = onChange;
  cResult[2] = tmp7;
  cResult[3] = fn;
  cResult[4] = items;
  tmp9 = items;
  tmp8 = fn;
  const tmp6 = _slicedToArray(noop.useState(tmp5), 2);
}) : (function TableRadioGroup(arg0) {
  ({ value, defaultValue, onChange } = arg0);
  _slicedToArray = undefined;
  noop = undefined;
  jsx = undefined;
  let onSelect;
  dependencyMap = tmp;
  let tmp2 = null;
  ({ children, title, description, helperText, hasIcons, groupRef, accessibilityLabel } = arg0);
  if (undefined === value) {
    if (defaultValue == null) {
      defaultValue = null;
    }
    tmp2 = defaultValue;
  }
  [tmp4, c2] = noop.useState(tmp2);
  if (undefined !== value) {
    tmp4 = value;
  }
  if (tmp4 == null) {
    tmp4 = null;
  }
  noop = tmp4;
  const items = [undefined !== value, onChange, tmp4];
  const imperativeHandle = obj.useImperativeHandle(groupRef, () => ({
    setValue(arg0) {
      if (!closure_1_1) {
        _undefined(arg0);
      }
      if (onChange != null) {
        tmp3(arg0);
      }
    },
    getValue() {
      return selectedValue;
    }
  }), items);
  jsx = obj.useContext(onChange(6263).RedesignCompatContext);
  const items1 = [undefined !== value, onChange];
  onSelect = obj.useCallback((arg0) => {
    if (!closure_1) {
      _undefined(arg0);
    }
    if (onChange != null) {
      tmp3(arg0);
    }
  }, items1);
  const items2 = [tmp4, onSelect];
  const obj2 = { value: noop.useMemo(() => ({ selectedValue, onSelect }), items2), children: null };
  const obj3 = { accessibilityRole: "radiogroup", accessibilityLabel, title, description, helperText, hasIcons, children: null };
  const Children = obj.Children;
  obj3.children = Children.map(children, (type) => {
    if (!noop.isValidElement(type)) {
      let tmp4 = null;
      return tmp4;
    }
    tmp4 = type;
  });
  obj2.children = jsx(onChange(6264).TableRowGroup, { accessibilityRole: "radiogroup", accessibilityLabel, title, description, helperText, hasIcons, children: null });
  return <onSelect.Provider value={noop.useMemo(() => ({ selectedValue, onSelect }), items2)}>{null}</onSelect.Provider>;
});