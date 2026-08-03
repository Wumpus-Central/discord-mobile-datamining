import noop from "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("flattenComponents").fileFinishedImporting("modules/interaction_components/native/actions/StringSelectActionComponent.tsx");

export default function StringSelectActionComponent(type) {
  const _require = type;
  type = type.type;
  const options = type.options;
  let obj = _require(options[2]);
  let obj1 = componentStateContext;
  const items = [options];
  const selectPlaceholder = obj.getSelectPlaceholder(type);
  const memo = componentStateContext.useMemo(() => {
    const found = options.filter((arg0) => arg0.default);
    return found.map((value) => value.value);
  }, items);
  componentStateContext = _require(options[3]).useComponentStateContext();
  let modal;
  const obj3 = _require(options[3]);
  let tmp = _require;
  const tmp4 = type;
  if (componentStateContext != null) {
    modal = componentStateContext.modal;
  }
  type(options[4])(null != modal, "StringSelectActionComponent must be rendered inside a modal ComponentStateContext");
  let tmp8;
  if (memo.length > 0) {
    obj = { type: null, values: null };
    obj[0] = type;
    obj[1] = memo;
    tmp8 = obj;
  }
  const componentState = componentStateContext.useComponentState(type, tmp8);
  const state = componentState.state;
  const executeStateUpdate = componentState.executeStateUpdate;
  const items1 = [options, type, state];
  const customId = componentStateContext.modal.customId;
  const memo1 = obj1.useMemo(() => {
    let type;
    if (state != null) {
      type = tmp.type;
    }
    const mapped = type === type ? state.values : [].map((arg0) => {
      let closure_0 = arg0;
      return closure_2.findIndex((value) => value.value === closure_0);
    });
    return mapped.filter((arg0) => -1 !== arg0);
  }, items1);
  const parents = componentStateContext.getParents(type);
  let first;
  if (parents != null) {
    first = parents[0];
  }
  type = undefined;
  if (first != null) {
    type = first.type;
  }
  let tmp14;
  if (type === tmp(options[5]).ComponentType.LABEL) {
    tmp14 = first;
  }
  let closure_7 = tmp14;
  obj = { model: null, onTap: null };
  obj1 = {};
  const tmp5 = type(options[4]);
  const merged = Object.assign(type);
  obj1.placeholder = selectPlaceholder;
  obj1.state = componentState.visualState;
  obj1.selectedOptions = memo1;
  obj[0] = obj1;
  obj[1] = function onTap() {
    let obj = type(options[7]);
    obj = { selectionActionComponent: type, labelComponent: closure_7, channelId: componentStateContext.channelId, containerId: customId, onSubmit: executeStateUpdate, allowEmpty: null };
    const combined = "StringSelectComponentActionSheet:" + customId;
    const tmp = type(options[9])(options[8], options.paths);
    obj[5] = type(options[2]).canSelectBeEmpty(type, "modal");
    obj.openLazy(tmp, combined, obj);
  };
  return state(tmp4(options[6]), obj);
};