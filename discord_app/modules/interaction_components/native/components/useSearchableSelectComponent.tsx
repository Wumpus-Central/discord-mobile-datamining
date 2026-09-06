// === Module 11824: useSearchableSelectComponent ===

// Module 11824 (useSearchableSelectComponent)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/interaction_components/native/components/useSearchableSelectComponent.tsx");

export default function useSearchableSelectComponent(selectActionComponent) {
  selectActionComponent = selectActionComponent.selectActionComponent;
  const queryOptions = selectActionComponent.queryOptions;
  const onSubmit = selectActionComponent.onSubmit;
  let first;
  noop = undefined;
  ({ containerId, guildId } = selectActionComponent);
  const tmp = first(noop.useState(""), 2);
  first = tmp[0];
  let obj = selectActionComponent(onSubmit[2]);
  noop = obj.getInitialSnowflakeSelectOptions(selectActionComponent, containerId, guildId);
  const tmp3 = first(noop.useState(() => new Map(closure_4.map((value) => {
    const items = [value.value, value];
    return items;
  }))), 2);
  const first1 = tmp3[0];
  closure_6 = tmp3[1];
  let items = [first, queryOptions];
  closure_7 = selectActionComponent.maxValues > 1;
  obj = {
    options: noop.useMemo(() => queryOptions(first), items),
    selectedOptions: null,
    isSelected(value) {
      return first1.has(value.value);
    },
    onPressOptionItem(arg0, value) {
      const hasItem = first1.has(value.value);
      if (closure_7) {
        let tmp17 = !hasItem;
        if (!hasItem) {
          tmp17 = first1.size >= selectActionComponent.maxValues;
        }
        if (!tmp17) {
          closure_6((arg0) => {
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
        const obj = { type: selectActionComponent.type, selectedOptions: null };
        const items2 = [];
        HermesBuiltin.arraySpread(_Map.values(), 0);
        obj.selectedOptions = items2;
        onSubmit(obj);
        ActionSheetActionCreatorsDefault.hideActionSheet();
      }
    },
    submitSelection() {
      const obj = { type: selectActionComponent.type, selectedOptions: null };
      const items = [...first1.values()];
      obj.selectedOptions = items;
      onSubmit(obj);
      ActionSheetActionCreatorsDefault.hideActionSheet();
    },
    setQuery: tmp[1]
  };
  let items1 = [...first1.values()];
  obj.selectedOptions = items1;
  return obj;
};