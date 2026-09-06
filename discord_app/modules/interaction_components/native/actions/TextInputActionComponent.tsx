// === Module 17393: TextInputActionComponent ===

// Module 17393 (TextInputActionComponent)
import Server from "Server" /* 1894 */;
import ComponentStateContext from "ComponentStateContext" /* 8112 */;
import InteractionModalUtils from "InteractionModalUtils" /* 17390 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/interaction_components/native/actions/TextInputActionComponent.tsx");

export default noop.memo((type) => {
  type = type.type;
  ({ style, label, value } = type);
  dependencyMap = value;
  ({ placeholder, required, maxLength } = type);
  let obj = ComponentStateContext;
  let tmp3;
  if (null != value) {
    obj = { type, value };
    tmp3 = obj;
  }
  const componentState = obj.useComponentState(type, tmp3);
  ({ state: _slicedToArray, executeStateUpdate } = componentState);
  const error = componentState.error;
  let obj3 = noop;
  const isFirstTextInputInModal = InteractionModalUtils.useIsFirstTextInputInModal(type.id);
  obj = { placeholder, maxLength, status: null, defaultValue: null, onChange: null, autoFocus: null, isClearable: true };
  let str = "default";
  const state = noop.useState(() => {
    type = undefined;
    if (_slicedToArray != null) {
      type = iter.type;
    }
    return type === type ? _slicedToArray.value : value;
  });
  if (null != error) {
    str = "error";
  }
  obj.status = str;
  obj.defaultValue = _slicedToArray(state, 1)[0];
  const items = [type, executeStateUpdate];
  obj.onChange = obj3.useCallback((value) => executeStateUpdate({ type, value }), items);
  obj.autoFocus = isFirstTextInputInModal;
  if (Server.TextInputComponentStyle.SMALL === style) {
    const obj1 = {};
    const merged = Object.assign(obj);
    let tmp7 = jsx(tmp(6613).TextField, {});
  } else if (tmp(1894).TextInputComponentStyle.PARAGRAPH === style) {
    const obj2 = {};
    const merged1 = Object.assign(obj);
    tmp7 = jsx(tmp(7086).TextAreaField, {});
  }
  let tmp16 = tmp7;
  if (null != label) {
    obj3 = { label, required, errorMessage: error, children: tmp7 };
    tmp16 = jsx(tmp(6607).Input, { label, required, errorMessage: error, children: tmp7 });
  }
  return tmp16;
});