// === Module 17568: TextInputActionComponent ===

// Module 17568 (TextInputActionComponent)
import c from "c" /* 576 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const Server = Input(1985);
const TextField2 = Input(6107);
const Input2 = Input(6430);
const TextAreaField2 = Input(6588);
const ComponentStateContext = Input(7806);
const InteractionModalUtils = Input(17565);
require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/interaction_components/native/actions/TextInputActionComponent.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((type) => {
  let Input = require;
  let tmp = dependencyMap;
  const cResult = c.c(26);
  type = type.type;
  ({ style, label, placeholder, required, maxLength, value } = type);
  dependencyMap = value;
  if (cResult[0] === value) {
    if (cResult[1] === type) {
      let tmp3 = cResult[2];
    }
    const componentState = ComponentStateContext.useComponentState(type, tmp3);
    state = componentState.state;
    const executeStateUpdate = componentState.executeStateUpdate;
    const error = componentState.error;
    const InputResult = ComponentStateContext;
    const isFirstTextInputInModal = InteractionModalUtils.useIsFirstTextInputInModal(type.id);
    if (cResult[3] === value) {
      if (cResult[4] === state) {
        if (cResult[5] === type) {
          let tmp7 = cResult[6];
        }
        const first = _slicedToArray(noop.useState(tmp7), 1)[0];
        if (cResult[7] === executeStateUpdate) {
          if (cResult[8] === type) {
            let tmp11 = cResult[9];
          }
          let str = "default";
          if (null != error) {
            str = "error";
          }
          if (cResult[10] === first) {
            if (cResult[11] === isFirstTextInputInModal) {
              if (cResult[12] === maxLength) {
                if (cResult[13] === tmp11) {
                  if (cResult[14] === placeholder) {
                    if (cResult[15] === str) {
                      let tmp13 = cResult[16];
                    }
                    if (Server.TextInputComponentStyle.SMALL === style) {
                      if (cResult[17] !== tmp13) {
                        const TextField = TextField2.TextField;
                        const merged = Object.assign(tmp13);
                        class F {
                          constructor(arg0) {
                            obj = { type, value: type };
                            return executeStateUpdate(obj);
                          }
                        }
                        cResult[17] = tmp13;
                        cResult[18] = tmp26;
                        class S {
                          constructor() {
                            iter = state;
                            type = undefined;
                            if (state != null) {
                              type = iter.type;
                            }
                            return type === type ? iter.value : value;
                          }
                        }
                        const obj2 = {};
                      }
                    } else {
                      let tmp14;
                      if (Server.TextInputComponentStyle.PARAGRAPH === style) {
                        if (cResult[19] !== tmp13) {
                          const TextAreaField = TextAreaField2.TextAreaField;
                          const merged1 = Object.assign(tmp13);
                          class F {
                            constructor(arg0) {
                              obj = { type, value: type };
                              return executeStateUpdate(obj);
                            }
                          }
                          cResult[19] = tmp13;
                          cResult[20] = tmp20;
                          class S {
                            constructor() {
                              iter = state;
                              type = undefined;
                              if (state != null) {
                                type = iter.type;
                              }
                              return type === type ? iter.value : value;
                            }
                          }
                          const obj3 = {};
                        } else {
                          const tmp15 = cResult[20];
                        }
                        tmp14 = tmp15;
                      }
                      if (null == label) {
                        return tmp14;
                      } else {
                        if (cResult[21] === tmp14) {
                          if (cResult[22] === error) {
                            if (cResult[23] === label) {
                            }
                          }
                        }
                        Input = Input2.Input;
                        const obj4 = { label, required, errorMessage: null, children: null };
                        class F {
                          constructor(arg0) {
                            obj = { type, value: type };
                            return executeStateUpdate(obj);
                          }
                        }
                        obj4.children = tmp14;
                        tmp = <Input label={label} required={required} errorMessage={null}>{null}</Input>;
                        cResult[21] = tmp14;
                        class S {
                          constructor() {
                            iter = state;
                            type = undefined;
                            if (state != null) {
                              type = iter.type;
                            }
                            return type === type ? iter.value : value;
                          }
                        }
                        cResult[22] = error;
                        cResult[23] = label;
                        cResult[24] = required;
                        cResult[25] = tmp;
                      }
                    }
                  }
                }
              }
            }
          }
          const obj5 = { placeholder: null, maxLength: null, status: null, defaultValue: null, onChange: null, autoFocus: null, clearable: true };
          class F {
            constructor(arg0) {
              obj = { type, value: type };
              return executeStateUpdate(obj);
            }
          }
          obj5.maxLength = maxLength;
          obj5.status = str;
          obj5.defaultValue = first;
          obj5.onChange = tmp11;
          class S {
            constructor() {
              iter = state;
              type = undefined;
              if (state != null) {
                type = iter.type;
              }
              return type === type ? iter.value : value;
            }
          }
          cResult[10] = first;
          cResult[11] = isFirstTextInputInModal;
          cResult[12] = maxLength;
          cResult[13] = tmp11;
          cResult[14] = placeholder;
          cResult[15] = str;
          cResult[16] = obj5;
          tmp13 = obj5;
        }
        class F {
          constructor(arg0) {
            obj = { type, value: type };
            return executeStateUpdate(obj);
          }
        }
        cResult[7] = executeStateUpdate;
        cResult[8] = type;
        class S {
          constructor() {
            iter = state;
            type = undefined;
            if (state != null) {
              type = iter.type;
            }
            return type === type ? iter.value : value;
          }
        }
        cResult[9] = F;
        tmp11 = F;
      }
    }
    class S {
      constructor() {
        iter = state;
        type = undefined;
        if (state != null) {
          type = iter.type;
        }
        return type === type ? iter.value : value;
      }
    }
    cResult[3] = value;
    cResult[4] = state;
    cResult[5] = type;
    cResult[6] = S;
    tmp7 = S;
    const InputResult1 = InteractionModalUtils;
  }
  let tmp4;
  if (null != value) {
    const obj6 = { type, value };
    tmp4 = obj6;
  }
  cResult[0] = value;
  cResult[1] = type;
  cResult[2] = tmp4;
  tmp3 = tmp4;
}) : ((type) => {
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
  state = noop.useState(() => {
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
    let tmp7 = jsx(TextField2.TextField, {});
  } else if (Server.TextInputComponentStyle.PARAGRAPH === style) {
    const obj6 = {};
    const merged1 = Object.assign(obj3);
    tmp7 = jsx(TextAreaField2.TextAreaField, {});
  }
  let tmp16 = tmp7;
  if (null != label) {
    const obj7 = { label, required, errorMessage: error, children: tmp7 };
    tmp16 = jsx(Input2.Input, { label, required, errorMessage: error, children: tmp7 });
  }
  return tmp16;
}));