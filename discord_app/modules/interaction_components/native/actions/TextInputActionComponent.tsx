// === Module 17568: TextInputActionComponent ===

// Module 17568 (TextInputActionComponent)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import Server from "Server" /* 1985 */;
import TextField2 from "TextField" /* 6107 */;
import Input from "Input" /* 6430 */;
import TextAreaField2 from "TextAreaField" /* 6588 */;
import ComponentStateContext from "ComponentStateContext" /* 7806 */;
import InteractionModalUtils from "InteractionModalUtils" /* 17565 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let iter, type;

const jsx = Fragment.jsx;
const memo = react.memo;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((type) => {
  let label;
  let maxLength;
  let placeholder;
  let required;
  let style;
  let value;
  let obj = react2;
  const cResult = obj.c(26);
  type = type.type;
  ({ style, label, placeholder, required, maxLength, value } = type);
  if (cResult[0] === value) {
    let tmp4;
    if (cResult[1] === type) {
      tmp4 = cResult[2];
    }
    const tmpResult = ComponentStateContext;
    const componentState = tmpResult.useComponentState(type, tmp4);
    const state = componentState.state;
    const executeStateUpdate = componentState.executeStateUpdate;
    const error = componentState.error;
    const tmpResult2 = InteractionModalUtils;
    const isFirstTextInputInModal = tmpResult2.useIsFirstTextInputInModal(type.id);
    if (cResult[3] === value) {
      if (cResult[4] === state) {
        let tmp8;
        if (cResult[5] === type) {
          tmp8 = cResult[6];
        }
        const first = _slicedToArray(react.useState(tmp8), 1)[0];
        if (cResult[7] === executeStateUpdate) {
          let tmp12;
          if (cResult[8] === type) {
            tmp12 = cResult[9];
          }
          let str = "default";
          if (null != error) {
            str = "error";
          }
          if (cResult[10] === first) {
            if (cResult[11] === isFirstTextInputInModal) {
              if (cResult[12] === maxLength) {
                if (cResult[13] === tmp12) {
                  if (cResult[14] === placeholder) {
                    let tmp14;
                    let tmp15;
                    if (cResult[15] === str) {
                      tmp14 = cResult[16];
                    }
                    if (Server.TextInputComponentStyle.SMALL === style) {
                      let tmp22;
                      if (cResult[17] !== tmp14) {
                        const TextField = TextField2.TextField;
                        const merged = Object.assign(tmp14);
                        class F {
                          constructor(arg0) {
                            obj = { type, value: type };
                            return executeStateUpdate(obj);
                          }
                        }
                        cResult[17] = tmp14;
                        cResult[18] = tmp27;
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
                      } else {
                        tmp22 = cResult[18];
                      }
                      tmp15 = tmp22;
                    } else if (Server.TextInputComponentStyle.PARAGRAPH === style) {
                      let tmp16;
                      if (cResult[19] !== tmp14) {
                        const TextAreaField = TextAreaField2.TextAreaField;
                        const merged1 = Object.assign(tmp14);
                        class F {
                          constructor(arg0) {
                            obj = { type, value: type };
                            return executeStateUpdate(obj);
                          }
                        }
                        cResult[19] = tmp14;
                        cResult[20] = tmp21;
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
                      } else {
                        tmp16 = cResult[20];
                      }
                      tmp15 = tmp16;
                    }
                    let tmp28 = tmp15;
                    if (null != label) {
                      if (cResult[21] === tmp15) {
                        if (cResult[22] === error) {
                          if (cResult[23] === label) {
                            let tmp29;
                            if (cResult[24] === required) {
                              tmp29 = cResult[25];
                            }
                            tmp28 = tmp29;
                          }
                        }
                      }
                      class F {
                        constructor(arg0) {
                          obj = { type, value: type };
                          return executeStateUpdate(obj);
                        }
                      }
                      const tmp31 = jsx(Input.Input, { label, required, errorMessage: error, children: null });
                      cResult[21] = tmp15;
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
                      cResult[23] = label;
                      cResult[24] = required;
                      cResult[25] = tmp31;
                      tmp29 = tmp31;
                    }
                    return tmp28;
                  }
                }
              }
            }
          }
          const obj5 = { placeholder: null, maxLength, status: str, defaultValue: first, onChange: tmp12, autoFocus: null, clearable: true };
          class F {
            constructor(arg0) {
              obj = { type, value: type };
              return executeStateUpdate(obj);
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
          cResult[10] = first;
          cResult[11] = isFirstTextInputInModal;
          cResult[12] = maxLength;
          cResult[13] = tmp12;
          cResult[14] = placeholder;
          cResult[15] = str;
          cResult[16] = obj5;
          tmp14 = obj5;
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
        tmp12 = F;
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
    tmp8 = S;
  }
  let tmp5;
  if (null != value) {
    tmp5 = { type, value };
    const obj6 = { type, value };
  }
  cResult[0] = value;
  cResult[1] = type;
  cResult[2] = tmp5;
  tmp4 = tmp5;
}) : ((type) => {
  let closure_129_2;
  let executeStateUpdate;
  let items;
  let label;
  let maxLength;
  let placeholder;
  let required;
  let state;
  let str;
  let style;
  let tmp8;
  let value;
  type = type.type;
  ({ style, label, value } = type);
  ({ placeholder, required, maxLength } = type);
  let tmp4;
  const useComponentState = ComponentStateContext.useComponentState;
  ComponentStateContext;
  if (null != value) {
    let obj = { type, value };
    tmp4 = obj;
  }
  const componentState = useComponentState(type, tmp4);
  ({ state: closure_129_2, executeStateUpdate } = componentState);
  const error = componentState.error;
  const tmpResult = InteractionModalUtils;
  const isFirstTextInputInModal = tmpResult.useIsFirstTextInputInModal(type.id);
  const obj2 = {
    placeholder,
    maxLength,
    status: str,
    defaultValue: _slicedToArray(state, 1)[0],
    onChange: react.useCallback((value) => {
      const obj = { type, value };
      return executeStateUpdate(obj);
    }, items),
    autoFocus: isFirstTextInputInModal,
    clearable: true
  };
  str = "default";
  state = react.useState(() => {
    type = undefined;
    if (closure_1_2 != null) {
      type = closure_1_2.type;
    }
    return type === type ? closure_1_2.value : value;
  });
  if (null != error) {
    str = "error";
  }
  items = [type, executeStateUpdate];
  if (Server.TextInputComponentStyle.SMALL === style) {
    const TextField = TextField2.TextField;
    const merged = Object.assign(obj2);
    tmp8 = <TextField />;
  } else if (Server.TextInputComponentStyle.PARAGRAPH === style) {
    const TextAreaField = TextAreaField2.TextAreaField;
    const merged1 = Object.assign(obj2);
    tmp8 = <TextAreaField />;
  }
  let tmp17 = tmp8;
  if (null != label) {
    tmp17 = jsx(Input.Input, { label, required, errorMessage: error, children: tmp8 });
  }
  return tmp17;
}));
const result = size.fileFinishedImporting("modules/interaction_components/native/actions/TextInputActionComponent.tsx");

export default memoResult;