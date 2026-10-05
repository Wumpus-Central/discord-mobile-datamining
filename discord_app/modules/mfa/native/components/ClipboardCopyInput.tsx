// discord_app/modules/mfa/native/components/ClipboardCopyInput.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import Constants from "../../../../Constants.tsx";
import _asyncToGenerator from "../../../../../_runtime/metro/00005__asyncToGenerator.js";
import react from "../../../../../_runtime/00019_react.js";
import AppStateStore from "../../../../stores/native/AppStateStore.tsx";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, c2;

const View = react_native.View;
const AppStates = Constants.AppStates;
const jsx = Fragment.jsx;
let closure_9 = createStyles.createStyles({ inputContainer: { flexDirection: "column", alignSelf: "stretch" } });
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (isValidClipboardCode) => {
      let autoComplete;
      let autoFocus;
      let error;
      let isDisabled;
      let keyboardType;
      let label;
      let maxLength;
      let onChangeCode;
      let placeholder;
      let state;
      let stateFromStores;
      let textContentType;
      let tmp7;
      let tmp8;
      let tmp2 = stateFromStores;
      let obj = require("react");
      const cResult = obj.c(23);
      ({
        label,
        placeholder,
        maxLength,
        onChangeCode,
        error,
        textContentType,
        autoComplete,
        keyboardType,
        isDisabled,
        autoFocus,
      } = isValidClipboardCode);
      let tmp4 = undefined === autoFocus;
      isValidClipboardCode = isValidClipboardCode.isValidClipboardCode;
      if (!tmp4) {
        tmp4 = autoFocus;
      }
      const tmp5 = closure_9();
      _require = react.useRef(null);
      const ref = react.useRef(null);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [AppStateStore];
        const fn = function f() {
          return state.getState();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp7 = items;
        tmp8 = fn;
      } else {
        [tmp7, tmp8] = cResult;
      }
      const tmpResult = require("get initialized");
      stateFromStores = tmpResult.useStateFromStores(tmp7, tmp8);
      const tmp11 = ref(tmp2[10])(onChangeCode);
      const tmp12 = ref(tmp2[10])(isValidClipboardCode);
      let closure_3 = tmp12;
      if (cResult[2] === stateFromStores) {
        let tmp13;
        if (cResult[3] === tmp12) {
          tmp13 = cResult[4];
        }
        if (cResult[5] === stateFromStores) {
          if (cResult[6] === tmp12) {
            let tmp14;
            if (cResult[7] === tmp11) {
              tmp14 = cResult[8];
            }
            const effect = react.useEffect(tmp13, tmp14);
            if (cResult[9] === autoComplete) {
              if (cResult[10] === tmp4) {
                if (cResult[11] === error) {
                  if (cResult[12] === isDisabled) {
                    if (cResult[13] === keyboardType) {
                      if (cResult[14] === label) {
                        if (cResult[15] === maxLength) {
                          if (cResult[16] === onChangeCode) {
                            if (cResult[17] === placeholder) {
                              let tmp16;
                              if (cResult[18] === textContentType) {
                                tmp16 = cResult[19];
                              }
                              if (cResult[20] === tmp5.inputContainer) {
                                let tmp19;
                                if (cResult[21] === tmp16) {
                                  tmp19 = cResult[22];
                                }
                                return tmp19;
                              }
                              const tmp22 = <View style={tmp5.inputContainer}>{tmp16}</View>;
                              cResult[20] = tmp5.inputContainer;
                              cResult[21] = tmp16;
                              cResult[22] = tmp22;
                              tmp19 = tmp22;
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
            const tmp18 = jsx(require("TextInput/TextInput").TextInput, {
              ref,
              autoFocus: tmp4,
              autoCorrect: false,
              autoCapitalize: "none",
              errorMessage: error,
              maxLength,
              onChange: onChangeCode,
              label,
              placeholder,
              clearable: true,
              textContentType,
              autoComplete,
              keyboardType,
              disabled: isDisabled,
            });
            cResult[9] = autoComplete;
            cResult[10] = tmp4;
            cResult[11] = error;
            cResult[12] = isDisabled;
            cResult[13] = keyboardType;
            cResult[14] = label;
            cResult[15] = maxLength;
            cResult[16] = onChangeCode;
            cResult[17] = placeholder;
            cResult[18] = textContentType;
            cResult[19] = tmp18;
            tmp16 = tmp18;
          }
        }
        const items1 = [stateFromStores, tmp12, tmp11];
        cResult[5] = stateFromStores;
        cResult[6] = tmp12;
        cResult[7] = tmp11;
        cResult[8] = items1;
        tmp14 = items1;
      }
      const fn2 = function k() {
        function run() {
          return closure_0(...arguments);
        }
        if (stateFromStores === constants.ACTIVE) {
          closure_0 = closure_3(function* () {
            let obj2;
            let v3;
            if (v3 === 2) {
              v3 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp2 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                const obj3 = { value, done: true };
                return obj3;
              } else {
                return { value: "IconComponent", done: null };
              }
            } else {
              try {
                let current;
                v3 = 2;
                if (0 === c2) {
                  if (arg0 === 1) {
                    v3 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    v3 = 3;
                    const obj4 = { value, done: true };
                    return obj4;
                  } else {
                    current = undefined;
                    const self3 = this;
                    const self4 = this;
                    const promise = new Promise((arg0) => setTimeout(arg0, 500));
                    c2 = 1;
                    v3 = 1;
                    const obj5 = { value: promise, done: false };
                    return obj5;
                  }
                } else if (1 === c2) {
                  if (arg0 === 1) {
                    v3 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    v3 = 3;
                    const obj6 = { value, done: true };
                    return obj6;
                  } else {
                    const self = this;
                    const self2 = this;
                    const promise2 = new Promise((arg0) => {
                      const obj = current(closure_1_2[11]);
                      return obj.runAfterInteractions(arg0);
                    });
                    c2 = 2;
                    v3 = 1;
                    const obj7 = { value: promise2, done: false };
                    return obj7;
                  }
                } else if (2 === c2) {
                  if (arg0 === 1) {
                    v3 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    v3 = 3;
                    const obj8 = { value, done: true };
                    return obj8;
                  } else {
                    c2 = 3;
                    v3 = 1;
                    const obj9 = { value: obj2.getString(), done: false };
                    obj2 = current(stateFromStores[12]);
                    return obj9;
                  }
                } else if (arg0 === 1) {
                  v3 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  v3 = 3;
                  let obj = { value, done: true };
                  return obj;
                } else {
                  current = value.trim();
                  if (current !== current.current) {
                    current.current = current;
                    if (v3(current)) {
                      current = ref.current;
                      if (current != null) {
                        current.setText(current);
                      }
                    }
                  }
                  v3 = 3;
                  return { value: "IconComponent", done: null };
                }
              } catch (tmp26) {
                v3 = 3;
                throw tmp26;
              }
            }
          });
          const tmp2 = run();
        }
      };
      cResult[2] = stateFromStores;
      cResult[3] = tmp12;
      cResult[4] = fn2;
      tmp13 = fn2;
    }
  : (arg0) => {
      let autoComplete;
      let autoFocus;
      let closure_0;
      let error;
      let isDisabled;
      let isValidClipboardCode;
      let keyboardType;
      let label;
      let maxLength;
      let onChangeCode;
      let placeholder;
      let state;
      let textContentType;
      ({ onChangeCode, autoFocus } = arg0);
      ({
        label,
        placeholder,
        isValidClipboardCode,
        maxLength,
        error,
        textContentType,
        autoComplete,
        keyboardType,
        isDisabled,
      } = arg0);
      if (autoFocus === undefined) {
        autoFocus = true;
      }
      let stateFromStores;
      const tmp = closure_9();
      _require = react.useRef(null);
      const ref = react.useRef(null);
      let obj = require("get initialized");
      const items = [AppStateStore];
      stateFromStores = obj.useStateFromStores(items, () => state.getState());
      const tmp4 = ref(stateFromStores[10])(onChangeCode);
      const tmp5 = ref(stateFromStores[10])(isValidClipboardCode);
      let closure_3 = tmp5;
      const items1 = [stateFromStores, tmp5, tmp4];
      const effect = react.useEffect(() => {
        function run() {
          return obj(...arguments);
        }
        let obj = function _run2() {
          obj = _asyncToGenerator(async function () {
            let obj2;
            let v3;
            if (v3 === 2) {
              v3 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp2 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                const obj3 = { value, done: true };
                return obj3;
              } else {
                return { value: "IconComponent", done: null };
              }
            } else {
              try {
                let current;
                v3 = 2;
                if (0 === c2) {
                  if (arg0 === 1) {
                    v3 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    v3 = 3;
                    const obj4 = { value, done: true };
                    return obj4;
                  } else {
                    current = undefined;
                    const self3 = this;
                    const self4 = this;
                    const promise = new Promise((arg0) => setTimeout(arg0, 500));
                    c2 = 1;
                    v3 = 1;
                    const obj5 = { value: promise, done: false };
                    return obj5;
                  }
                } else if (1 === c2) {
                  if (arg0 === 1) {
                    v3 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    v3 = 3;
                    const obj6 = { value, done: true };
                    return obj6;
                  } else {
                    const self = this;
                    const self2 = this;
                    const promise2 = new Promise((arg0) => {
                      obj = current(closure_1_2[11]);
                      return obj.runAfterInteractions(arg0);
                    });
                    c2 = 2;
                    v3 = 1;
                    const obj7 = { value: promise2, done: false };
                    return obj7;
                  }
                } else if (2 === c2) {
                  if (arg0 === 1) {
                    v3 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    v3 = 3;
                    const obj8 = { value, done: true };
                    return obj8;
                  } else {
                    c2 = 3;
                    v3 = 1;
                    const obj9 = { value: obj2.getString(), done: false };
                    obj2 = closure_2_0(stateFromStores[12]);
                    return obj9;
                  }
                } else if (arg0 === 1) {
                  v3 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  v3 = 3;
                  obj = { value, done: true };
                  return obj;
                } else {
                  current = value.trim();
                  if (current !== current.current) {
                    current.current = current;
                    if (v3(current)) {
                      current = ref.current;
                      if (current != null) {
                        current.setText(current);
                      }
                    }
                  }
                  v3 = 3;
                  return { value: "IconComponent", done: null };
                }
              } catch (tmp26) {
                v3 = 3;
                throw tmp26;
              }
            }
          });
          return obj(...arguments);
        };
        if (stateFromStores === constants.ACTIVE) {
          run();
        }
      }, items1);
      return (
        <View style={tmp.inputContainer}>
          {jsx(require("TextInput/TextInput").TextInput, {
            ref,
            autoFocus,
            autoCorrect: false,
            autoCapitalize: "none",
            errorMessage: error,
            maxLength,
            onChange: onChangeCode,
            label,
            placeholder,
            clearable: true,
            textContentType,
            autoComplete,
            keyboardType,
            disabled: isDisabled,
          })}
        </View>
      );
    };
const result = size.fileFinishedImporting("modules/mfa/native/components/ClipboardCopyInput.tsx");

export default tmp2;
