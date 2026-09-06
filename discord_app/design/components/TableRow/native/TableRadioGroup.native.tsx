// discord_app/design/components/TableRow/native/TableRadioGroup.native.tsx
import closure_2 from "../../../../../_runtime/metro/00032__slicedToArray.js";
import importAllResult from "../../../../../_runtime/00019_noop.js";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

const require = arg1;
let c3 = importAllResult;
const context = importAllResult.createContext({ selectedValue: null, onSelect: require("ME").NOOP });
const result = require("set").fileFinishedImporting("design/components/TableRow/native/TableRadioGroup.native.tsx");

export const TableRadioGroupContext = context;
export const TableRadioGroup = function TableRadioGroup(arg0) {
  ({ value, defaultValue, onChange } = arg0);
  let callback;
  importAllResult = undefined;
  jsx = undefined;
  callback = undefined;
  dependencyMap = tmp;
  let obj = importAllResult;
  let tmp2 = null;
  ({ children, title, description, helperText, hasIcons, groupRef, accessibilityLabel } = arg0);
  if (undefined === value) {
    if (defaultValue == null) {
      defaultValue = null;
    }
    tmp2 = defaultValue;
  }
  [tmp4, c2] = callback(importAllResult.useState(tmp2), 2);
  if (undefined !== value) {
    tmp4 = value;
  }
  if (tmp4 == null) {
    tmp4 = null;
  }
  importAllResult = tmp4;
  const items = [undefined !== value, onChange, tmp4];
  const imperativeHandle = obj.useImperativeHandle(
    groupRef,
    () => ({
      setValue(arg0) {
        if (!closure_1) {
          callback(arg0);
        }
        if (closure_0 != null) {
          tmp3(arg0);
        }
      },
      getValue() {
        return closure_3;
      },
    }),
    items,
  );
  jsx = obj.useContext(onChange(5686).RedesignCompatContext);
  const items1 = [undefined !== value, onChange];
  callback = obj.useCallback((arg0) => {
    if (!closure_1) {
      _undefined(arg0);
    }
    if (onChange != null) {
      tmp3(arg0);
    }
  }, items1);
  const items2 = [tmp4, callback];
  obj = { value: obj.useMemo(() => ({ selectedValue: c3, onSelect: callback }), items2), children: null };
  obj = {
    accessibilityRole: "radiogroup",
    accessibilityLabel,
    title,
    description,
    helperText,
    hasIcons,
    children: Children.map(children, (type) => {
      if (!_null.isValidElement(type)) {
        let tmp4 = null;
        return tmp4;
      }
      tmp4 = type;
    }),
  };
  Children = obj.Children;
  obj[1] = jsx(onChange(5687).TableRowGroup, {
    accessibilityRole: "radiogroup",
    accessibilityLabel,
    title,
    description,
    helperText,
    hasIcons,
    children: Children.map(children, (type) => {
      if (!_null.isValidElement(type)) {
        let tmp4 = null;
        return tmp4;
      }
      tmp4 = type;
    }),
  });
  return (
    <callback.Provider
      accessibilityRole="radiogroup"
      accessibilityLabel={accessibilityLabel}
      title={title}
      description={description}
      helperText={helperText}
      hasIcons={hasIcons}
    >
      {Children.map(children, (type) => {
        if (!_null.isValidElement(type)) {
          let tmp4 = null;
          return tmp4;
        }
        tmp4 = type;
      })}
    </callback.Provider>
  );
};
