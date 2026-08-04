// discord_app/design/components/TableRow/native/TableRadioGroup.native.tsx
import _slicedToArray from "_slicedToArray";
import importAllResult from "noop";
import { jsx } from "jsxProd";

const require = arg1;
let c3 = importAllResult;
const context = importAllResult.createContext({ selectedValue: null, onSelect: require("ME").NOOP });
const result = require("ME").fileFinishedImporting("design/components/TableRow/native/TableRadioGroup.native.tsx");

export const TableRadioGroupContext = context;
export const TableRadioGroup = function TableRadioGroup(arg0) {
  let accessibilityLabel;
  let c2;
  let children;
  let defaultValue;
  let description;
  let groupRef;
  let hasIcons;
  let helperText;
  let onChange;
  let title;
  let tmp4;
  let value;
  ({ value, defaultValue, onChange } = arg0);
  let callback;
  let importAllResult;
  let jsx;
  callback = undefined;
  const dependencyMap = tmp;
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
  const imperativeHandle = obj.useImperativeHandle(groupRef, () => ({
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
    }
  }), items);
  jsx = obj.useContext(onChange(5223).RedesignCompatContext);
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
  obj = { accessibilityRole: "radiogroup", accessibilityLabel, title, description, helperText, hasIcons, children: null };
  const Children = obj.Children;
  obj[6] = Children.map(children, (type) => {
    if (!_undefined2.isValidElement(type)) {
      let tmp4 = null;
      return tmp4;
    }
    tmp4 = type;
  });
  obj[1] = jsx(onChange(5558).TableRowGroup, { accessibilityRole: "radiogroup", accessibilityLabel, title, description, helperText, hasIcons, children: null });
  return <callback.Provider accessibilityRole="radiogroup" accessibilityLabel={accessibilityLabel} title={title} description={description} helperText={helperText} hasIcons={hasIcons}>{null}</callback.Provider>;
};