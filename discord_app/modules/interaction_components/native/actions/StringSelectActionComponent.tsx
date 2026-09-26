// discord_app/modules/interaction_components/native/actions/StringSelectActionComponent.tsx
import asyncRequireImpl from "../../../../../_runtime/01981_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import InteractionComponentUtils from "../../InteractionComponentUtils.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/interaction_components/native/actions/StringSelectActionComponent.tsx",
);

export default function StringSelectActionComponent(type) {
  _require = type;
  type = type.type;
  const options = type.options;
  const items = [options];
  const selectPlaceholder = require("InteractionComponentUtils").getSelectPlaceholder(type);
  const memo = componentStateContext.useMemo(() => {
    const found = options.filter((item) => item.default);
    return found.map((value) => value.value);
  }, items);
  let obj = require("InteractionComponentUtils");
  let obj2 = componentStateContext;
  let tmp = _require;
  componentStateContext = require("ComponentStateContext").useComponentStateContext();
  let modal;
  const obj3 = require("ComponentStateContext");
  const tmp4 = type;
  if (componentStateContext != null) {
    modal = componentStateContext.modal;
  }
  type(options[4])(null != modal, "StringSelectActionComponent must be rendered inside a modal ComponentStateContext");
  let tmp8;
  if (memo.length > 0) {
    const obj4 = { type, values: memo };
    tmp8 = obj4;
  }
  const componentState = componentStateContext.useComponentState(type, tmp8);
  const state = componentState.state;
  const executeStateUpdate = componentState.executeStateUpdate;
  const items1 = [options, type, state];
  const customId = componentStateContext.modal.customId;
  const memo1 = obj2.useMemo(() => {
    type = undefined;
    if (state != null) {
      type = state.type;
    }
    const mapped =
      type === type
        ? state.values
        : [].map((item) => {
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
  let type1;
  if (labelComponent != null) {
    type1 = labelComponent.type;
  }
  let tmp14;
  if (type1 === tmp(options[5]).ComponentType.LABEL) {
    tmp14 = labelComponent;
  }
  labelComponent = tmp14;
  const obj5 = { model: null, onTap: null };
  const obj6 = {};
  const tmp5 = type(options[4]);
  const merged = Object.assign(type);
  obj6.placeholder = selectPlaceholder;
  obj6.state = componentState.visualState;
  obj6.selectedOptions = memo1;
  obj5.model = obj6;
  obj5.onTap = function onTap() {
    const obj = ActionSheetActionCreatorsDefault;
    const obj2 = {
      selectionActionComponent,
      labelComponent,
      channelId: componentStateContext.channelId,
      containerId: customId,
      onSubmit: executeStateUpdate,
      allowEmpty: null,
    };
    const combined = "StringSelectComponentActionSheet:" + customId;
    const tmp = asyncRequireImpl(11299, dependencyMap.paths);
    obj2.allowEmpty = InteractionComponentUtils.canSelectBeEmpty(selectionActionComponent, "modal");
    obj.openLazy(tmp, combined, obj2);
  };
  return state(tmp4(options[6]), obj5);
}
