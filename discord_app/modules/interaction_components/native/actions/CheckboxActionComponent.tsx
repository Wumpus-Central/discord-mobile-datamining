// discord_app/modules/interaction_components/native/actions/CheckboxActionComponent.tsx
import importAllResult from "../../../../../_runtime/00019_noop.js";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

const require = arg1;
let c3 = importAllResult;
const memoResult = importAllResult.memo((type) => {
  type = type.type;
  let obj = type(executeStateUpdate[2]);
  const componentStateContext = obj.useComponentStateContext();
  state(executeStateUpdate[3])(
    null != componentStateContext,
    "CheckboxActionComponent must be rendered inside a ComponentStateContext",
  );
  let tmp5;
  if (null != type.default) {
    obj = { type: null, value: null };
    obj[0] = type;
    obj[1] = _default;
    tmp5 = obj;
  }
  const componentState = componentStateContext.useComponentState(type, tmp5);
  state = componentState.state;
  executeStateUpdate = componentState.executeStateUpdate;
  const items = [state, type];
  const memo = importAllResult.useMemo(() => {
    type = undefined;
    if (state != null) {
      type = iter.type;
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
  if (type === type(executeStateUpdate[4]).ComponentType.LABEL) {
    tmp11 = first;
  }
  state(executeStateUpdate[3])(null != tmp11, "CheckboxActionComponent must be a child of a Label component");
  obj = {
    label: tmp11.label,
    description: tmp11.description,
    checked: memo,
    onToggle(value) {
      executeStateUpdate({ type, value });
    },
  };
  return jsx(type(executeStateUpdate[5]).Checkbox, {
    label: tmp11.label,
    description: tmp11.description,
    checked: memo,
    onToggle(value) {
      executeStateUpdate({ type, value });
    },
  });
});
const result = require("set").fileFinishedImporting(
  "modules/interaction_components/native/actions/CheckboxActionComponent.tsx",
);

export default memoResult;
