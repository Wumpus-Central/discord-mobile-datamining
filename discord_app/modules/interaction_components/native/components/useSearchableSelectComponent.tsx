// === Module 11620: useSearchableSelectComponent ===

// Module 11620 (useSearchableSelectComponent)
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;

const require = arg1;
let result = require("set").fileFinishedImporting("modules/interaction_components/native/components/useSearchableSelectComponent.tsx");

export default function useSearchableSelectComponent(selectActionComponent) {
  selectActionComponent = selectActionComponent.selectActionComponent;
  const queryOptions = selectActionComponent.queryOptions;
  const onSubmit = selectActionComponent.onSubmit;
  let first;
  let React;
  let first1;
  closure_6 = undefined;
  closure_7 = undefined;
  ({ containerId, guildId } = selectActionComponent);
  const tmp = first(React.useState(""), 2);
  first = tmp[0];
  let obj = selectActionComponent(onSubmit[2]);
  React = obj.getInitialSnowflakeSelectOptions(selectActionComponent, containerId, guildId);
  const tmp3 = first(React.useState(() => new Map(closure_4.map((value) => {
    const items = [value.value, value];
    return items;
  }))), 2);
  first1 = tmp3[0];
  closure_6 = tmp3[1];
  let items = [first, queryOptions];
  closure_7 = selectActionComponent.maxValues > 1;
  obj = {
    options: React.useMemo(() => queryOptions(first), items),
    selectedOptions: items1,
    isSelected(value) {
      return first1.has(value.value);
    },
    onPressOptionItem(arg0, value) {
      selectActionComponent = value;
      const hasItem = first1.has(value.value);
      if (closure_7) {
        let tmp17 = !hasItem;
        if (!hasItem) {
          tmp17 = first1.size >= selectActionComponent.maxValues;
        }
        if (!tmp17) {
          callback((arg0) => {
            const map = new Map(arg0);
            if (hasItem) {
              map.delete(value.value);
            } else {
              const result = map.set(value.value, value);
            }
            return map;
          });
        }
      } else {
        let _Map = Map;
        if (hasItem) {
          _Map = new _Map();
        } else {
          const items = [value.value, value];
          const items1 = [items];
          _Map = new _Map(items1);
        }
        const obj = { type: null, selectedOptions: null };
        obj[0] = selectActionComponent.type;
        const items2 = [];
        HermesBuiltin.arraySpread(_Map.values(), 0);
        obj[1] = items2;
        onSubmit(obj);
        queryOptions(onSubmit[3]).hideActionSheet();
        const obj3 = queryOptions(onSubmit[3]);
      }
    },
    submitSelection() {
      const items = [...first1.values()];
      onSubmit({ type: selectActionComponent.type, selectedOptions: items });
      queryOptions(onSubmit[3]).hideActionSheet();
    },
    setQuery: tmp[1]
  };
  items1 = [...first1.values()];
  return obj;
};