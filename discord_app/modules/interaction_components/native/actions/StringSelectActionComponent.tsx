// === Module 15711: StringSelectActionComponent ===

// Module 15711 (StringSelectActionComponent)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import InteractionComponentUtils from "InteractionComponentUtils" /* 4785 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/interaction_components/native/actions/StringSelectActionComponent.tsx");

export default function StringSelectActionComponent(type) {
  _require = type;
  type = type.type;
  const options = type.options;
  let obj = require("InteractionComponentUtils");
  let obj1 = componentStateContext;
  const items = [options];
  const selectPlaceholder = obj.getSelectPlaceholder(type);
  const memo = componentStateContext.useMemo(() => {
    const found = options.filter((item) => item.default);
    return found.map((value) => value.value);
  }, items);
  componentStateContext = require("ComponentStateContext").useComponentStateContext();
  let modal;
  const obj3 = require("ComponentStateContext");
  let tmp = _require;
  const tmp4 = type;
  if (componentStateContext != null) {
    modal = componentStateContext.modal;
  }
  type(options[4])(null != modal, "StringSelectActionComponent must be rendered inside a modal ComponentStateContext");
  let tmp8;
  if (memo.length > 0) {
    obj = { type, values: memo };
    tmp8 = obj;
  }
  const componentState = componentStateContext.useComponentState(type, tmp8);
  const state = componentState.state;
  const executeStateUpdate = componentState.executeStateUpdate;
  const items1 = [options, type, state];
  const customId = componentStateContext.modal.customId;
  const memo1 = obj1.useMemo(() => {
    type = undefined;
    if (state != null) {
      type = tmp.type;
    }
    const mapped = type === type ? state.values : [].map((item) => {
      closure_0 = item;
      return options.findIndex((value) => value.value === closure_0);
    });
    return mapped.filter((item) => -1 !== item);
  }, items1);
  const parents = componentStateContext.getParents(type);
  let labelComponent;
  if (parents != null) {
    labelComponent = parents[0];
  }
  type = undefined;
  if (labelComponent != null) {
    type = labelComponent.type;
  }
  let tmp14;
  if (type === tmp(options[5]).ComponentType.LABEL) {
    tmp14 = labelComponent;
  }
  labelComponent = tmp14;
  obj = { model: null, onTap: null };
  obj1 = {};
  const tmp5 = type(options[4]);
  const merged = Object.assign(type);
  obj1.placeholder = selectPlaceholder;
  obj1.state = componentState.visualState;
  obj1.selectedOptions = memo1;
  obj.model = obj1;
  obj.onTap = function onTap() {
    const obj = { selectionActionComponent, labelComponent, channelId: componentStateContext.channelId, containerId: customId, onSubmit: executeStateUpdate, allowEmpty: null };
    const combined = "StringSelectComponentActionSheet:" + customId;
    const tmp = asyncRequireImpl(11821, dependencyMap.paths);
    obj.allowEmpty = InteractionComponentUtils.canSelectBeEmpty(selectionActionComponent, "modal");
    obj.openLazy(tmp, combined, obj);
  };
  return state(tmp4(options[6]), obj);
};