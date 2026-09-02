// === Module 17212: ? ===

// Module 17212
import importAllResult from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
const memoResult = importAllResult.memo((type) => {
  type = type.type;
  const options = type.options;
  const maxValues = type.maxValues;
  let obj = maxValues;
  let items = [options];
  const memo = maxValues.useMemo(() => {
    const found = options.filter((arg0) => arg0.default);
    return found.map((value) => value.value);
  }, items);
  let tmp3;
  if (memo.length > 0) {
    obj = { type: null, values: null };
    obj[0] = type;
    obj[1] = memo;
    tmp3 = obj;
  }
  const componentState = type(options[2]).useComponentState(type, tmp3);
  const state = componentState.state;
  const executeStateUpdate = componentState.executeStateUpdate;
  const items1 = [state, type];
  closure_5 = obj.useMemo(() => {
    type = undefined;
    if (state != null) {
      type = tmp.type;
    }
    return type === type ? state.values : [];
  }, items1);
  obj = {
    hasIcons: false,
    children: options.map((label) => {
      const hasItem = closure_5.includes(label.value);
      const obj = {
        label: label.label,
        subLabel: label.description,
        checked: hasItem,
        onPress: (arg0) => {
          if (arg0) {
            const items = [];
            items[HermesBuiltin.arraySpread(arr, 0)] = closure_0;
            let found = items;
          } else {
            found = arr.filter((arg0) => arg0 !== closure_0);
          }
          closure_1_4({ type: value, values: found });
        },
        disabled: null
      };
      type = label.value;
      let tmp3 = closure_5.length >= maxValues;
      if (tmp3) {
        tmp3 = !hasItem;
      }
      obj[4] = tmp3;
      return state(type(options[4]).TableCheckboxRow, obj, label.value);
    })
  };
  return state(type(options[3]).TableRowGroup, obj);
});
const result = require("set").fileFinishedImporting("modules/interaction_components/native/actions/CheckboxGroupActionComponent.tsx");

export default memoResult;