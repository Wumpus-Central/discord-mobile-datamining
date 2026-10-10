// discord_app/modules/mfa/native/components/ClipboardCopyInput.tsx
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import AppStateStore from "../../../../stores/native/AppStateStore.tsx";

const require = globalThis.__r;

const require = fn;
const View = fn(17).View;
const AppStates = fn(1085).AppStates;
const jsx = fn(21).jsx;
const createStyles = fn(5092);
let closure_9 = createStyles.createStyles({ inputContainer: { flexDirection: "column", alignSelf: "stretch" } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/mfa/native/components/ClipboardCopyInput.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ClipboardCopyInput(isValidClipboardCode) {
      const cResult = require("c").c(23);
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
      if (!tmp4) {
        tmp4 = autoFocus;
      }
      const tmp5 = closure_9();
      _require = noop.useRef(null);
      const ref = noop.useRef(null);
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
      let obj = require("c");
      stateFromStores = require("initialize").useStateFromStores(tmp7, tmp8);
      const tmp11 = ref(stateFromStores[10])(onChangeCode);
      const tmp12 = ref(stateFromStores[10])(isValidClipboardCode.isValidClipboardCode);
      closure_3 = tmp12;
      if (cResult[2] === stateFromStores) {
        if (cResult[3] === tmp12) {
          let tmp13 = cResult[4];
        }
        if (cResult[5] === stateFromStores) {
          if (cResult[6] === tmp12) {
            if (cResult[7] === tmp11) {
              let tmp14 = cResult[8];
            }
            const effect = noop.useEffect(tmp13, tmp14);
            if (cResult[9] === autoComplete) {
              if (cResult[10] === tmp4) {
                if (cResult[11] === error) {
                  if (cResult[12] === isDisabled) {
                    if (cResult[13] === keyboardType) {
                      if (cResult[14] === label) {
                        if (cResult[15] === maxLength) {
                          if (cResult[16] === onChangeCode) {
                            if (cResult[17] === placeholder) {
                              if (cResult[18] === textContentType) {
                                let tmp16 = cResult[19];
                              }
                              if (cResult[20] === tmp5.inputContainer) {
                                if (cResult[21] === tmp16) {
                                  let tmp19 = cResult[22];
                                }
                                return tmp19;
                              }
                              let obj3 = { style: tmp5.inputContainer, children: tmp16 };
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
            let obj4 = {
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
            };
            const tmp18 = jsx(tmp(tmp2[13]).TextInput, {
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
        if (stateFromStores === constants.ACTIVE) {
          closure_0 = closure_3(function* () {
            if (v3 === 2) {
              v3 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp3 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                const obj3 = { value, done: true };
                return obj3;
              } else {
                return { value: "IconComponent", done: "+51" };
              }
            } else {
              try {
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
                    closure_128_0 = undefined;
                    const promise = new Promise((arg0) => setTimeout(arg0, 500));
                    c2 = 1;
                    v3 = 1;
                    const obj5 = { value: promise, done: false };
                    return obj5;
                  }
                } else if (1 === tmp4) {
                  if (arg0 === 1) {
                    v3 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    v3 = 3;
                    const obj6 = { value, done: true };
                    return obj6;
                  } else {
                    const promise2 = new Promise((arg0) => ref(closure_1_2[11]).runAfterInteractions(arg0));
                    c2 = 2;
                    v3 = 1;
                    const obj7 = { value: promise2, done: false };
                    return obj7;
                  }
                } else if (2 === tmp4) {
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
                    const obj9 = { value: ref(stateFromStores[12]).getString(), done: false };
                    return obj9;
                  }
                } else if (arg0 === 1) {
                  v3 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  v3 = 3;
                  const obj = { value, done: true };
                  return obj;
                } else {
                  closure_128_0 = value.trim();
                  if (closure_128_0 !== ref.current) {
                    ref.current = closure_128_0;
                    if (v3(closure_128_0)) {
                      const current = ref2.current;
                      if (current != null) {
                        current.setText(closure_128_0);
                      }
                    }
                  }
                  v3 = 3;
                  return { value: "IconComponent", done: "+51" };
                }
              } catch (tmp31) {
                v3 = tmp;
                throw tmp31;
              }
            }
          });
          (function run() {
            const self = this;
            const apply = closure_0.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          })();
        }
      };
      cResult[2] = stateFromStores;
      cResult[3] = tmp12;
      cResult[4] = fn2;
      tmp13 = fn2;
      const tmpResult = require("initialize");
    }
  : function ClipboardCopyInput(arg0) {
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
      _require = noop.useRef(null);
      const ref = noop.useRef(null);
      const tmp = closure_9();
      const items = [AppStateStore];
      stateFromStores = require("initialize").useStateFromStores(items, () => state.getState());
      let obj = require("initialize");
      const tmp5 = ref(stateFromStores[10])(isValidClipboardCode);
      closure_3 = tmp5;
      const items1 = [stateFromStores, tmp5, ref(stateFromStores[10])(onChangeCode)];
      const effect = noop.useEffect(() => {
        closure_0 = async function _run2() {
          if (v3 === 2) {
            v3 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj3 = { value, done: true };
              return obj3;
            } else {
              return { value: "IconComponent", done: "+51" };
            }
          } else {
            try {
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
                  closure_128_0 = undefined;
                  const promise = new Promise((arg0) => setTimeout(arg0, 500));
                  c2 = 1;
                  v3 = 1;
                  const obj5 = { value: promise, done: false };
                  return obj5;
                }
              } else if (1 === tmp4) {
                if (arg0 === 1) {
                  v3 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  v3 = 3;
                  const obj6 = { value, done: true };
                  return obj6;
                } else {
                  const promise2 = new Promise((arg0) => ref(closure_1_2[11]).runAfterInteractions(arg0));
                  c2 = 2;
                  v3 = 1;
                  const obj7 = { value: promise2, done: false };
                  return obj7;
                }
              } else if (2 === tmp4) {
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
                  const obj9 = { value: closure_2_0(stateFromStores[12]).getString(), done: false };
                  return obj9;
                }
              } else if (arg0 === 1) {
                v3 = 3;
                throw value;
              } else if (arg0 === 2) {
                v3 = 3;
                const obj = { value, done: true };
                return obj;
              } else {
                closure_128_0 = value.trim();
                if (closure_128_0 !== ref.current) {
                  ref.current = closure_128_0;
                  if (v3(closure_128_0)) {
                    const current = ref2.current;
                    if (current != null) {
                      current.setText(closure_128_0);
                    }
                  }
                }
                v3 = 3;
                return { value: "IconComponent", done: "+51" };
              }
            } catch (tmp31) {
              v3 = tmp;
              throw tmp31;
            }
          }
        };
        if (stateFromStores === constants.ACTIVE) {
          (function run() {
            const self = this;
            const apply = closure_0.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          })();
        }
      }, items1);
      const tmp4 = ref(stateFromStores[10])(onChangeCode);
      return (
        <View style={tmp.inputContainer}>
          {jsx(require("TextInput").TextInput, {
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
