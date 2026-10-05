// === Module 15591: StringSelectActionComponent ===

// Module 15591 (StringSelectActionComponent)
import Fragment from "Fragment" /* 21 */;
import asyncRequire from "asyncRequire" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import InteractionComponentUtils from "InteractionComponentUtils" /* 5114 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/interaction_components/native/actions/StringSelectActionComponent.tsx");

export default function StringSelectActionComponent(type) {
  let componentStateContext;
  let obj6;
  let selectionActionComponent;
  _require = type;
  type = type.type;
  const options = type.options;
  let tmp2 = options;
  const tmp = _require;
  let obj = require("InteractionComponentUtils");
  let obj2 = componentStateContext;
  const items = [options];
  const selectPlaceholder = obj.getSelectPlaceholder(type);
  const memo = componentStateContext.useMemo(() => {
    const found = options.filter((item) => item.default);
    return found.map((value) => value.value);
  }, items);
  const obj3 = require("ComponentStateContext");
  componentStateContext = obj3.useComponentStateContext();
  let modal;
  const tmp4 = type;
  const tmp5 = type(options[4]);
  if (componentStateContext != null) {
    modal = componentStateContext.modal;
  }
  tmp5(null != modal, "StringSelectActionComponent must be rendered inside a modal ComponentStateContext");
  let tmp8;
  const useComponentState = componentStateContext.useComponentState;
  if (memo.length > 0) {
    tmp8 = { type, values: memo };
    const obj4 = { type, values: memo };
  }
  const componentState = useComponentState(type, tmp8);
  const state = componentState.state;
  const executeStateUpdate = componentState.executeStateUpdate;
  const items1 = [options, type, state];
  const visualState = componentState.visualState;
  const customId = componentStateContext.modal.customId;
  const memo1 = obj2.useMemo(() => {
    type = undefined;
    if (state != null) {
      type = state.type;
    }
    const arr = type === type ? state.values : [];
    const mapped = arr.map((item) => {
      let closure_0 = item;
      return options.findIndex((value) => value.value === closure_0);
    });
    return mapped.filter((item) => -1 !== item);
  }, items1);
  const parents = componentStateContext.getParents(type);
  let labelComponent;
  if (parents != null) {
    labelComponent = parents[0];
  }
  let type1;
  if (labelComponent != null) {
    type1 = labelComponent.type;
  }
  let tmp14;
  if (type1 === tmp(tmp2[5]).ComponentType.LABEL) {
    tmp14 = labelComponent;
  }
  labelComponent = tmp14;
  const obj5 = {
    model: obj6,
    onTap() {
      let obj2;
      const openLazy = ActionSheetActionCreatorsDefault.openLazy;
      ActionSheetActionCreatorsDefault;
      const obj = { selectionActionComponent, labelComponent, channelId: componentStateContext.channelId, containerId: customId, onSubmit: executeStateUpdate, allowEmpty: obj2.canSelectBeEmpty(selectionActionComponent, "modal") };
      const tmp2 = asyncRequire(11431, dependencyMap.paths);
      const combined = "StringSelectComponentActionSheet:" + customId;
      obj2 = InteractionComponentUtils;
      openLazy(tmp2, combined, obj);
    }
  };
  obj6 = { placeholder: selectPlaceholder, state: visualState, selectedOptions: memo1 };
  const tmp4Result = tmp4(tmp2[6]);
  const merged = Object.assign(type);
  return state(tmp4Result, obj5);
};