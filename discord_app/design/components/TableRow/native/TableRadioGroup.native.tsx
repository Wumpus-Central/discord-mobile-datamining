// discord_app/design/components/TableRow/native/TableRadioGroup.native.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import Constants from "../../../../Constants.tsx";
import _slicedToArray_mod from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react_mod from "../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let dependencyMap;

let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
const NOOP = Constants.NOOP;
let jsx = Fragment.jsx;
let context = react.createContext({ selectedValue: null, onSelect: NOOP });
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (groupRef) => {
      let accessibilityLabel;
      let c3;
      let children;
      let closure_1;
      let defaultValue;
      let description;
      let hasIcons;
      let helperText;
      let onChange;
      let title;
      let tmp7;
      let value;
      const obj = onChange(576);
      const cResult = obj.c(26);
      ({ children, value, defaultValue, onChange } = groupRef);
      ({ title, description, helperText, hasIcons, accessibilityLabel } = groupRef);
      let tmp4 = undefined !== value;
      dependencyMap = tmp4;
      let tmp5 = null;
      groupRef = groupRef.groupRef;
      const useState = react.useState;
      if (!tmp4) {
        if (defaultValue == null) {
          defaultValue = null;
        }
        tmp5 = defaultValue;
      }
      const tmp6 = _slicedToArray(useState(tmp5), 2);
      [tmp7, _slicedToArray] = tmp6;
      if (tmp4) {
        tmp7 = value;
      }
      if (tmp7 == null) {
        tmp7 = null;
      }
      react = tmp7;
      if (cResult[0] === tmp4) {
        if (cResult[1] === onChange) {
          let tmp8;
          let tmp9;
          if (cResult[2] === tmp7) {
            tmp8 = cResult[3];
            tmp9 = cResult[4];
          }
          const imperativeHandle = obj2.useImperativeHandle(groupRef, tmp8, tmp9);
          context = obj2.useContext(onChange(6073).RedesignCompatContext);
          if (cResult[5] === tmp4) {
            let tmp12;
            if (cResult[6] === onChange) {
              tmp12 = cResult[7];
            }
            if (cResult[8] === tmp12) {
              let tmp13;
              if (cResult[9] === tmp7) {
                tmp13 = cResult[10];
              }
              if (cResult[11] === children) {
                let tmp14;
                if (cResult[12] === context) {
                  tmp14 = cResult[13];
                }
                if (cResult[16] === accessibilityLabel) {
                  if (cResult[17] === description) {
                    if (cResult[18] === hasIcons) {
                      if (cResult[19] === helperText) {
                        if (cResult[20] === tmp14) {
                          let tmp17;
                          if (cResult[21] === title) {
                            tmp17 = cResult[22];
                          }
                          if (cResult[23] === tmp13) {
                            let tmp20;
                            if (cResult[24] === tmp17) {
                              tmp20 = cResult[25];
                            }
                            return tmp20;
                          }
                          const obj3 = { value: tmp13, children: tmp17 };
                          const tmp23 = context(context.Provider, obj3);
                          cResult[23] = tmp13;
                          cResult[24] = tmp17;
                          cResult[25] = tmp23;
                          tmp20 = tmp23;
                        }
                      }
                    }
                  }
                }
                const obj4 = {
                  accessibilityRole: "radiogroup",
                  accessibilityLabel,
                  title,
                  description,
                  helperText,
                  hasIcons,
                  children: tmp14,
                };
                const tmp19 = context(onChange(6074).TableRowGroup, obj4);
                cResult[16] = accessibilityLabel;
                cResult[17] = description;
                cResult[18] = hasIcons;
                cResult[19] = helperText;
                cResult[20] = tmp14;
                cResult[21] = title;
                cResult[22] = tmp19;
                tmp17 = tmp19;
              }
              if (cResult[14] !== context) {
                class M {
                  constructor(type) {
                    if (!react.isValidElement(type)) {
                      let tmp4 = null;
                      return tmp4;
                    }
                    tmp4 = type;
                  }
                }
                cResult[14] = context;
                cResult[15] = M;
              } else {
                class M {
                  constructor(type) {
                    if (!react.isValidElement(type)) {
                      let tmp4 = null;
                      return tmp4;
                    }
                    tmp4 = type;
                  }
                }
              }
              const Children = obj2.Children;
              const mapped = Children.map(children, M);
              cResult[11] = children;
              cResult[12] = context;
              cResult[13] = mapped;
              tmp14 = mapped;
            }
            const obj5 = { selectedValue: tmp7, onSelect: tmp12 };
            cResult[8] = tmp12;
            cResult[9] = tmp7;
            cResult[10] = obj5;
            tmp13 = obj5;
          }
          const fn2 = function _(arg0) {
            if (!closure_1) {
              _slicedToArray(arg0);
            }
            if (onChange != null) {
              tmp4(arg0);
            }
          };
          cResult[5] = tmp4;
          cResult[6] = onChange;
          cResult[7] = fn2;
          tmp12 = fn2;
        }
      }
      const fn = function u() {
        return {
          setValue(arg0) {
            if (!closure_1_1) {
              closure_1_2(arg0);
            }
            if (onChange != null) {
              tmp4(arg0);
            }
          },
          getValue() {
            return closure_1_3;
          },
        };
      };
      const items = [tmp4, onChange, tmp7];
      cResult[0] = tmp4;
      cResult[1] = onChange;
      cResult[2] = tmp7;
      cResult[3] = fn;
      cResult[4] = items;
      tmp9 = items;
      tmp8 = fn;
    }
  : (arg0) => {
      let Children;
      let _undefined;
      let accessibilityLabel;
      let c2;
      let children;
      let closure_1;
      let closure_4;
      let defaultValue;
      let description;
      let groupRef;
      let hasIcons;
      let helperText;
      let onChange;
      let selectedValue;
      let title;
      let tmp4;
      let value;
      ({ value, defaultValue, onChange } = arg0);
      _slicedToArray = undefined;
      react = undefined;
      jsx = undefined;
      let onSelect;
      dependencyMap = tmp;
      let tmp2 = null;
      ({ children, title, description, helperText, hasIcons, groupRef, accessibilityLabel } = arg0);
      const useState = react.useState;
      if (undefined === value) {
        if (defaultValue == null) {
          defaultValue = null;
        }
        tmp2 = defaultValue;
      }
      [tmp4, c2] = _slicedToArray(useState(tmp2), 2);
      const tmp3 = _slicedToArray(useState(tmp2), 2);
      if (undefined !== value) {
        tmp4 = value;
      }
      if (tmp4 == null) {
        tmp4 = null;
      }
      react = tmp4;
      const items = [undefined !== value, onChange, tmp4];
      const imperativeHandle = obj.useImperativeHandle(
        groupRef,
        () => ({
          setValue(arg0) {
            if (!closure_1_1) {
              _undefined(arg0);
            }
            if (onChange != null) {
              tmp4(arg0);
            }
          },
          getValue() {
            return selectedValue;
          },
        }),
        items,
      );
      jsx = obj.useContext(onChange(6073).RedesignCompatContext);
      const items1 = [undefined !== value, onChange];
      onSelect = obj.useCallback((arg0) => {
        if (!closure_1) {
          _undefined(arg0);
        }
        if (onChange != null) {
          tmp4(arg0);
        }
      }, items1);
      const items2 = [tmp4, onSelect];
      const Provider = onSelect.Provider;
      ({
        accessibilityRole: "radiogroup",
        accessibilityLabel,
        title,
        description,
        helperText,
        hasIcons,
        children: Children.map(children, (type) => {
          if (!react.isValidElement(type)) {
            let tmp4 = null;
            return tmp4;
          }
          tmp4 = type;
        }),
      });
      Children = obj.Children;
      const TableRowGroup = onChange(6074).TableRowGroup;
      return <Provider value={react.useMemo(() => ({ selectedValue, onSelect }), items2)}>{null}</Provider>;
    };
const result = size.fileFinishedImporting("design/components/TableRow/native/TableRadioGroup.native.tsx");

export const TableRadioGroupContext = context;
export const TableRadioGroup = tmp3;
