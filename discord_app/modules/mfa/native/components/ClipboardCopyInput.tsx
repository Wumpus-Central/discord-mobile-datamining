// discord_app/modules/mfa/native/components/ClipboardCopyInput.tsx
import jsxProd from "jsxProd";
import noop from "noop";
import { View } from "get ActivityIndicator";
import getState from "getState";
import { AppStates } from "ME";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
let closure_9 = createCacheKey.createStyles({ inputContainer: { flexDirection: "column", alignSelf: "stretch" } });
const result = require("get ActivityIndicator").fileFinishedImporting("modules/mfa/native/components/ClipboardCopyInput.tsx");

export default function ClipboardCopyInput(arg0) {
  let autoComplete;
  let autoFocus;
  let error;
  let isDisabled;
  let isValidClipboardCode;
  let keyboardType;
  let label;
  let maxLength;
  let onChangeCode;
  let placeholder;
  let textContentType;
  ({ label, onChangeCode, autoFocus } = arg0);
  ({ placeholder, isValidClipboardCode, maxLength, error, textContentType, autoComplete, keyboardType, isDisabled } = arg0);
  if (autoFocus === undefined) {
    autoFocus = true;
  }
  let _require;
  let ref;
  let stateFromStores;
  let c3;
  _require = React.useRef(null);
  ref = React.useRef(null);
  let obj = _require(stateFromStores[7]);
  const items = [getState];
  stateFromStores = obj.useStateFromStores(items, () => state.getState());
  let tmp = callback();
  const tmp5 = ref(stateFromStores[8])(isValidClipboardCode);
  c3 = tmp5;
  const items1 = [stateFromStores, tmp5, ref(stateFromStores[8])(onChangeCode)];
  const effect = React.useEffect(() => {
    function _run() {
      const self = this;
      const tmp = callback(function*() {
        if (v0 === 2) {
          v0 = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw arg1;
          } else if (arg0 === 2) {
            let obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            return { value: "T", done: null };
          }
        } else {
          try {
            v0 = 2;
            if (0 === c2) {
              if (arg0 === 1) {
                v0 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                v0 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                let closure_1 = tmp4;
                let callback = 0;
                callback = undefined;
                let promise = new Promise((arg0) => setTimeout(arg0, 500));
                c2 = 1;
                v0 = 1;
                let obj1 = { value: null, done: false };
                obj1[0] = promise;
                return obj1;
              }
            } else if (1 === tmp4) {
              if (arg0 === 1) {
                v0 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                v0 = 3;
                const obj2 = { value: null, done: true };
                obj2[0] = arg1;
                return obj2;
              } else {
                promise = new Promise((arg0) => callback(table[9]).runAfterInteractions(arg0));
                c2 = 2;
                v0 = 1;
                const obj3 = { value: null, done: false };
                obj3[0] = promise;
                return obj3;
              }
            } else if (2 === tmp4) {
              if (arg0 === 1) {
                v0 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                v0 = 3;
                const obj4 = { value: null, done: true };
                obj4[0] = arg1;
                return obj4;
              } else {
                obj1 = callback(outer2_2[10]);
                c2 = 3;
                v0 = 1;
                const obj5 = { value: null, done: false };
                obj5[0] = obj1.getString();
                return obj5;
              }
            } else if (arg0 === 1) {
              v0 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              v0 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              callback = arg1.trim();
              if (callback !== outer1_0.current) {
                outer1_0.current = outer1_0;
                if (v0(outer1_0)) {
                  const current = outer1_1.current;
                  if (current != null) {
                    current.setText(outer1_0);
                  }
                }
              }
              v0 = 3;
              return { value: "T", done: null };
            }
          } catch (tmp31) {
            v0 = tmp;
            throw tmp31;
          }
        }
      });
      const _run = tmp;
      const apply = tmp.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
    if (stateFromStores === outer1_7.ACTIVE) {
      (function run() {
        const self = this;
        const apply = _run.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      })();
    }
  }, items1);
  obj = { style: tmp.inputContainer, children: jsx(_require(stateFromStores[11]).TextInput, { ref, autoFocus, autoCorrect: false, autoCapitalize: "none", errorMessage: error, maxLength, onChange: onChangeCode, label, accessibilityLabel: label, placeholder, isClearable: true, textContentType, autoComplete, keyboardType, isDisabled }) };
  return <View style={tmp.inputContainer}>{jsx(_require(stateFromStores[11]).TextInput, { ref, autoFocus, autoCorrect: false, autoCapitalize: "none", errorMessage: error, maxLength, onChange: onChangeCode, label, accessibilityLabel: label, placeholder, isClearable: true, textContentType, autoComplete, keyboardType, isDisabled })}</View>;
};