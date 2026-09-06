// discord_app/design/components/TableRow/native/TableRadioGroup.native.tsx
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = fn;
let jsx = fn(21).jsx;
const context = noop.createContext({ selectedValue: null, onSelect: fn(1074).NOOP });
const size = fn(2);
const result = size.fileFinishedImporting("design/components/TableRow/native/TableRadioGroup.native.tsx");

export const TableRadioGroupContext = context;
export const TableRadioGroup = function TableRadioGroup(arg0) {
  ({ value, defaultValue, onChange } = arg0);
  _slicedToArray = undefined;
  noop = undefined;
  jsx = undefined;
  let onSelect;
  dependencyMap = tmp;
  let obj = noop;
  let tmp2 = null;
  ({ children, title, description, helperText, hasIcons, groupRef, accessibilityLabel } = arg0);
  if (undefined === value) {
    if (defaultValue == null) {
      defaultValue = null;
    }
    tmp2 = defaultValue;
  }
  [tmp4, c2] = _slicedToArray(noop.useState(tmp2), 2);
  if (undefined !== value) {
    tmp4 = value;
  }
  if (tmp4 == null) {
    tmp4 = null;
  }
  noop = tmp4;
  const items = [undefined !== value, onChange, tmp4];
  const imperativeHandle = obj.useImperativeHandle(
    groupRef,
    () => ({
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
      },
    }),
    items,
  );
  jsx = obj.useContext(onChange(5686).RedesignCompatContext);
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
  obj = { value: obj.useMemo(() => ({ selectedValue, onSelect }), items2), children: null };
  obj = {
    accessibilityRole: "radiogroup",
    accessibilityLabel,
    title,
    description,
    helperText,
    hasIcons,
    children: null,
  };
  const Children = obj.Children;
  obj.children = Children.map(children, (type) => {
    if (!noop.isValidElement(type)) {
      let tmp4 = null;
      return tmp4;
    }
    tmp4 = type;
  });
  obj.children = jsx(onChange(5687).TableRowGroup, {
    accessibilityRole: "radiogroup",
    accessibilityLabel,
    title,
    description,
    helperText,
    hasIcons,
    children: null,
  });
  return (
    <onSelect.Provider
      accessibilityRole="radiogroup"
      accessibilityLabel={accessibilityLabel}
      title={title}
      description={description}
      helperText={helperText}
      hasIcons={hasIcons}
    >
      {null}
    </onSelect.Provider>
  );
};
