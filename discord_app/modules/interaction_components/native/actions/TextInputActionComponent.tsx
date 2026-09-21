// === Module 17799: TextInputActionComponent ===

// Module 17799 (TextInputActionComponent)
import Server from "Server" /* 1978 */;
import Input from "Input" /* 6849 */;
import TextField from "TextField" /* 6855 */;
import TextAreaField from "TextAreaField" /* 7331 */;
import ComponentStateContext from "ComponentStateContext" /* 8381 */;
import InteractionModalUtils from "InteractionModalUtils" /* 17796 */;
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
  let tmp3;
  if (null != value) {
    const obj2 = { type, value };
    tmp3 = obj2;
  }
  const componentState = ComponentStateContext.useComponentState(type, tmp3);
  ({ state: _slicedToArray, executeStateUpdate } = componentState);
  const error = componentState.error;
  const isFirstTextInputInModal = InteractionModalUtils.useIsFirstTextInputInModal(type.id);
  const obj3 = { placeholder, maxLength, status: null, defaultValue: null, onChange: null, autoFocus: null, clearable: true };
  let str = "default";
  const state = noop.useState(() => {
    type = undefined;
    if (_slicedToArray != null) {
      type = _slicedToArray.type;
    }
    return type === type ? _slicedToArray.value : value;
  });
  if (null != error) {
    str = "error";
  }
  obj3.status = str;
  obj3.defaultValue = _slicedToArray(state, 1)[0];
  const items = [type, executeStateUpdate];
  obj3.onChange = noop.useCallback((value) => executeStateUpdate({ type, value }), items);
  obj3.autoFocus = isFirstTextInputInModal;
  if (Server.TextInputComponentStyle.SMALL === style) {
    const obj5 = {};
    const merged = Object.assign(obj3);
    let tmp7 = jsx(TextField.TextField, {});
  } else if (Server.TextInputComponentStyle.PARAGRAPH === style) {
    const obj6 = {};
    const merged1 = Object.assign(obj3);
    tmp7 = jsx(TextAreaField.TextAreaField, {});
  }
  let tmp16 = tmp7;
  if (null != label) {
    const obj7 = { label, required, errorMessage: error, children: tmp7 };
    tmp16 = jsx(Input.Input, { label, required, errorMessage: error, children: tmp7 });
  }
  return tmp16;
});