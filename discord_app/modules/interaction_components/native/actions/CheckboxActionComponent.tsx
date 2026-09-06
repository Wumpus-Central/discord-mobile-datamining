// === Module 17399: CheckboxActionComponent ===

// Module 17399 (CheckboxActionComponent)
import _modDef38 from "module_38" /* 38 */;
import Server from "Server" /* 1894 */;
import ComponentStateContext from "ComponentStateContext" /* 8112 */;
import Checkbox from "Checkbox" /* 9429 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/interaction_components/native/actions/CheckboxActionComponent.tsx");

export default noop.memo((type) => {
  type = type.type;
  let obj = ComponentStateContext;
  const componentStateContext = obj.useComponentStateContext();
  _modDef38(null != componentStateContext, "CheckboxActionComponent must be rendered inside a ComponentStateContext");
  let tmp5;
  if (null != type.default) {
    obj = { type, value: _default };
    tmp5 = obj;
  }
  const componentState = componentStateContext.useComponentState(type, tmp5);
  const state = componentState.state;
  const executeStateUpdate = componentState.executeStateUpdate;
  const items = [state, type];
  const memo = noop.useMemo(() => {
    type = undefined;
    if (state != null) {
      type = state.type;
    }
    return type === type && state.value;
  }, items);
  const parents = componentStateContext.getParents(type);
  let first;
  if (parents != null) {
    first = parents[0];
  }
  type = undefined;
  if (first != null) {
    type = first.type;
  }
  let tmp11;
  if (type === Server.ComponentType.LABEL) {
    tmp11 = first;
  }
  _modDef38(null != tmp11, "CheckboxActionComponent must be a child of a Label component");
  obj = {
    label: tmp11.label,
    description: tmp11.description,
    checked: memo,
    onToggle(value) {
      executeStateUpdate({ type, value });
    }
  };
  return jsx(Checkbox.Checkbox, {
    label: tmp11.label,
    description: tmp11.description,
    checked: memo,
    onToggle(value) {
      executeStateUpdate({ type, value });
    }
  });
});