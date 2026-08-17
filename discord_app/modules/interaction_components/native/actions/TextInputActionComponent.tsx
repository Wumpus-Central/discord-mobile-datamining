// discord_app/modules/interaction_components/native/actions/TextInputActionComponent.tsx
import closure_2 from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
let c3 = importAllResult;
const memoResult = importAllResult.memo((type) => {
  type = type.type;
  ({ style, label, value } = type);
  dependencyMap = value;
  ({ placeholder, required, maxLength } = type);
  let obj = type(8326);
  let tmp3;
  if (null != value) {
    obj = { type: null, value: null };
    obj[0] = type;
    obj[1] = value;
    tmp3 = obj;
  }
  const componentState = obj.useComponentState(type, tmp3);
  ({ state: closure_2, executeStateUpdate } = componentState);
  error = componentState.error;
  let obj3 = executeStateUpdate;
  const isFirstTextInputInModal = type(16602).useIsFirstTextInputInModal(type.id);
  obj = { placeholder, maxLength, status: null, defaultValue: null, onChange: null, autoFocus: null, isClearable: true };
  let str = "default";
  const state = executeStateUpdate.useState(() => {
    type = undefined;
    if (closure_2 != null) {
      type = iter.type;
    }
    return type === type ? closure_2.value : closure_1;
  });
  if (null != error) {
    str = "error";
  }
  obj[2] = str;
  obj[3] = callback(state, 1)[0];
  const items = [type, executeStateUpdate];
  obj[4] = obj3.useCallback((value) => executeStateUpdate({ type, value }), items);
  obj[5] = isFirstTextInputInModal;
  if (type(1954).TextInputComponentStyle.SMALL === style) {
    obj1 = {};
    const merged = Object.assign(obj);
    let tmp7 = jsx(tmp(7338).TextField, {});
  } else if (tmp(1954).TextInputComponentStyle.PARAGRAPH === style) {
    const obj2 = {};
    const merged1 = Object.assign(obj);
    tmp7 = jsx(tmp(8093).TextAreaField, {});
  }
  let tmp16 = tmp7;
  if (null != label) {
    obj3 = { label: null, required: null, errorMessage: null, children: null };
    obj3[0] = label;
    obj3[1] = required;
    obj3[2] = error;
    obj3[3] = tmp7;
    tmp16 = jsx(tmp(8072).Input, { label: null, required: null, errorMessage: null, children: null });
  }
  return tmp16;
});
const result = require("set").fileFinishedImporting("modules/interaction_components/native/actions/TextInputActionComponent.tsx");

export default memoResult;