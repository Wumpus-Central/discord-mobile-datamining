// discord_app/modules/interaction_components/native/actions/TextInputActionComponent.tsx
import _slicedToArray from "_slicedToArray";
import importAllResult from "noop";
import { jsx } from "jsxProd";

const require = arg1;
let c3 = importAllResult;
const memoResult = importAllResult.memo((type) => {
  let _slicedToArray;
  let executeStateUpdate;
  let label;
  let maxLength;
  let placeholder;
  let required;
  let style;
  let value;
  type = type.type;
  ({ style, label, value } = type);
  const dependencyMap = value;
  ({ placeholder, required, maxLength } = type);
  let obj = type(8026);
  let tmp3;
  if (null != value) {
    obj = { type: null, value: null };
    obj[0] = type;
    obj[1] = value;
    tmp3 = obj;
  }
  const componentState = obj.useComponentState(type, tmp3);
  ({ state: _slicedToArray, executeStateUpdate } = componentState);
  const error = componentState.error;
  let obj3 = executeStateUpdate;
  const isFirstTextInputInModal = type(16336).useIsFirstTextInputInModal(type.id);
  obj = { placeholder, maxLength, status: null, defaultValue: null, onChange: null, autoFocus: null, isClearable: true };
  let str = "default";
  const state = executeStateUpdate.useState(() => {
    let type;
    if (_slicedToArray != null) {
      type = iter.type;
    }
    return type === type ? _slicedToArray.value : closure_1;
  });
  if (null != error) {
    str = "error";
  }
  obj[2] = str;
  obj[3] = callback(state, 1)[0];
  const items = [type, executeStateUpdate];
  obj[4] = obj3.useCallback((value) => executeStateUpdate({ type, value }), items);
  obj[5] = isFirstTextInputInModal;
  if (type(1906).TextInputComponentStyle.SMALL === style) {
    const obj1 = {};
    const merged = Object.assign(obj);
    let tmp7 = jsx(tmp(5902).TextField, {});
  } else if (tmp(1906).TextInputComponentStyle.PARAGRAPH === style) {
    const obj2 = {};
    const merged1 = Object.assign(obj);
    tmp7 = jsx(tmp(7787).TextAreaField, {});
  }
  let tmp16 = tmp7;
  if (null != label) {
    obj3 = { label: null, required: null, errorMessage: null, children: null };
    obj3[0] = label;
    obj3[1] = required;
    obj3[2] = error;
    obj3[3] = tmp7;
    tmp16 = jsx(tmp(7714).Input, { label: null, required: null, errorMessage: null, children: null });
  }
  return tmp16;
});
const result = require("jsxProd").fileFinishedImporting("modules/interaction_components/native/actions/TextInputActionComponent.tsx");

export default memoResult;