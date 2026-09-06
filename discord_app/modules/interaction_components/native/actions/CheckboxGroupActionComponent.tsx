// discord_app/modules/interaction_components/native/actions/CheckboxGroupActionComponent.tsx
import noop from "../../../../../_runtime/metro/00019__.js";

const require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/interaction_components/native/actions/CheckboxGroupActionComponent.tsx",
);

export default noop.memo((type) => {
  type = type.type;
  const options = type.options;
  const maxValues = type.maxValues;
  let obj = maxValues;
  let items = [options];
  const memo = maxValues.useMemo(() => {
    const found = options.filter((item) => item.default);
    return found.map((value) => value.value);
  }, items);
  let tmp3;
  if (memo.length > 0) {
    obj = { type, values: memo };
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
    children: options.map((label) => {
      const hasItem = closure_5.includes(label.value);
      let obj = {
        label: label.label,
        subLabel: label.description,
        checked: hasItem,
        onPress: (arg0) => {
          if (arg0) {
            const items = [];
            items[HermesBuiltin.arraySpread(closure_5, 0)] = value;
            let found = items;
          } else {
            found = closure_5.filter((item) => item !== closure_1_0);
          }
          executeStateUpdate({ type, values: found });
          const obj = { type, values: found };
        },
        disabled: null,
      };
      type = label.value;
      let tmp3 = closure_5.length >= maxValues;
      if (tmp3) {
        tmp3 = !hasItem;
      }
      obj.disabled = tmp3;
      return state(type(options[4]).TableCheckboxRow, obj, label.value);
    }),
  };
  return state(type(options[3]).TableRowGroup, obj);
});
