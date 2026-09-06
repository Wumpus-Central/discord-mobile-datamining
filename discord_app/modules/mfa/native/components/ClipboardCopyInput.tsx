// discord_app/modules/mfa/native/components/ClipboardCopyInput.tsx
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import AppStateStore from "../../../../stores/native/AppStateStore.tsx";

const require = fn;
const View = fn(17).View;
const AppStates = fn(1074).AppStates;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_9 = createStyles.createStyles({ inputContainer: { flexDirection: "column", alignSelf: "stretch" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/mfa/native/components/ClipboardCopyInput.tsx");

export default function ClipboardCopyInput(arg0) {
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
  let obj = require("initialize");
  const items = [AppStateStore];
  stateFromStores = obj.useStateFromStores(items, () => state.getState());
  const tmp = closure_9();
  const tmp5 = ref(stateFromStores[8])(isValidClipboardCode);
  closure_3 = tmp5;
  const items1 = [stateFromStores, tmp5, ref(stateFromStores[8])(onChangeCode)];
  const effect = noop.useEffect(() => {
    closure_0 = async function _run(arg0, value) {
      if (v3 === 2) {
        v3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj = { value, done: true };
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
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
              obj = { value, done: true };
              return obj;
            } else {
              closure_128_0 = undefined;
              let promise = new Promise((arg0) => setTimeout(arg0, 500));
              c2 = 1;
              v3 = 1;
              let obj1 = { value: promise, done: false };
              return obj1;
            }
          } else if (1 === tmp4) {
            if (arg0 === 1) {
              v3 = 3;
              throw value;
            } else if (arg0 === 2) {
              v3 = 3;
              const obj2 = { value, done: true };
              return obj2;
            } else {
              promise = new Promise((arg0) => ref(closure_1_2[9]).runAfterInteractions(arg0));
              c2 = 2;
              v3 = 1;
              const obj3 = { value: promise, done: false };
              return obj3;
            }
          } else if (2 === tmp4) {
            if (arg0 === 1) {
              v3 = 3;
              throw value;
            } else if (arg0 === 2) {
              v3 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              obj1 = closure_2_0(stateFromStores[10]);
              c2 = 3;
              v3 = 1;
              const obj5 = { value: obj1.getString(), done: false };
              return obj5;
            }
          } else if (arg0 === 1) {
            v3 = 3;
            throw value;
          } else if (arg0 === 2) {
            v3 = 3;
            obj = { value, done: true };
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
            return { value: "HermesInternal", done: null };
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
  obj = {
    style: tmp.inputContainer,
    children: jsx(require("TextInput").TextInput, {
      ref,
      autoFocus,
      autoCorrect: false,
      autoCapitalize: "none",
      errorMessage: error,
      maxLength,
      onChange: onChangeCode,
      label,
      placeholder,
      isClearable: true,
      textContentType,
      autoComplete,
      keyboardType,
      isDisabled,
    }),
  };
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
        isClearable: true,
        textContentType,
        autoComplete,
        keyboardType,
        isDisabled,
      })}
    </View>
  );
}
