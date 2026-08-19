// discord_app/modules/interaction_components/native/actions/CheckboxGroupActionComponent.tsx
import importAllResult from "../../../../../_runtime/00019_noop.js";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

const require = fn;
const memoResult = importAllResult.memo((type) => {
  type = type.type;
  const options = type.options;
  const maxValues = type.maxValues;
  let obj = maxValues;
  let items = [options];
  const memo = maxValues.useMemo(() => {
    const found = options.filter((item, index) => item.default);
    return found.map((item, index) => item.value);
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
      type = state.type;
    }
    return type === type ? state.values : [];
  }, items1);
  obj = {
    hasIcons: false,
    children: options.map((item, index) => {
      const hasItem = closure_5.includes(item.value);
      let obj = {
        label: item.label,
        subLabel: item.description,
        checked: hasItem,
        onPress: (arg0) => {
          if (arg0) {
            const items = [];
            items[HermesBuiltin.arraySpread(closure_1_5, 0)] = closure_0;
            let found = items;
          } else {
            found = closure_1_5.filter((item, index) => item !== closure_0);
          }
          executeStateUpdate({ type: value, values: found });
        },
        disabled: null
      };
      type = item.value;
      let tmp3 = closure_5.length >= maxValues;
      if (tmp3) {
        tmp3 = !hasItem;
      }
      obj[4] = tmp3;
      return state(type(options[4]).TableCheckboxRow, obj, item.value);
    })
  };
  return state(type(options[3]).TableRowGroup, obj);
});
const result = require("obj132").fileFinishedImporting("modules/interaction_components/native/actions/CheckboxGroupActionComponent.tsx");

export default memoResult;