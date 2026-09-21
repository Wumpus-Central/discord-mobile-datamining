// === Module 17805: CheckboxActionComponent ===

// Module 17805 (CheckboxActionComponent)
import _modDef38 from "module_38" /* 38 */;
import Server from "Server" /* 1978 */;
import ComponentStateContext from "ComponentStateContext" /* 8381 */;
import Checkbox from "Checkbox" /* 9543 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/interaction_components/native/actions/CheckboxActionComponent.tsx");

export default noop.memo((type) => {
  type = type.type;
  const componentStateContext = ComponentStateContext.useComponentStateContext();
  _modDef38(null != componentStateContext, "CheckboxActionComponent must be rendered inside a ComponentStateContext");
  let tmp5;
  if (null != type.default) {
    const obj2 = { type, value: _default };
    tmp5 = obj2;
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
  let type1;
  if (first != null) {
    type1 = first.type;
  }
  let tmp11;
  if (type1 === Server.ComponentType.LABEL) {
    tmp11 = first;
  }
  _modDef38(null != tmp11, "CheckboxActionComponent must be a child of a Label component");
  return jsx(Checkbox.Checkbox, {
    label: tmp11.label,
    description: tmp11.description,
    checked: memo,
    onToggle(value) {
      executeStateUpdate({ type, value });
    }
  });
});