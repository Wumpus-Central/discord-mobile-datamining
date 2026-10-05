// discord_app/modules/mobile_web_handoff/native/SimpleLoadingModalUI.tsx
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import react_mod from "../../../../_runtime/00019_react.js";
import react_native from "../../../../_runtime/00017_react-native.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let catchPromise, dependencyMap, operation;

let c3;
let closure_4;
let react = react_mod;
({ Modal: c3, View: closure_4 } = react_native);
let jsx = Fragment.jsx;
let closure_6 = createStyles.createStyles({
  modalBackground: { flex: 1, alignItems: "center", flexDirection: "column", justifyContent: "center" },
});
let constants = { OPENING: 0, [0]: "OPENING", SHOWN: 1, [1]: "SHOWN", DISMISSED: 2, [2]: "DISMISSED" };
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (operation) => {
      let cancelable;
      let closure_1;
      let closure_2;
      let onDismissed;
      let onRejected;
      let onResolved;
      let ref;
      let tmp2;
      let tmp3;
      let tmp4;
      const obj = operation(576);
      const cResult = obj.c(31);
      operation = operation.operation;
      ({ onResolved, onRejected, cancelable, onDismissed } = operation);
      if (cResult[0] !== onResolved) {
        let fn = onResolved;
        if (undefined === onResolved) {
          fn = () => {};
        }
        cResult[0] = onResolved;
        cResult[1] = fn;
        tmp2 = fn;
      } else {
        tmp2 = cResult[1];
      }
      dependencyMap = tmp2;
      if (cResult[2] !== onRejected) {
        let fn2 = onRejected;
        if (undefined === onRejected) {
          fn2 = () => {};
        }
        cResult[2] = onRejected;
        cResult[3] = fn2;
        tmp3 = fn2;
      } else {
        tmp3 = cResult[3];
      }
      react = tmp3;
      let closure_3 = undefined !== cancelable && cancelable;
      if (cResult[4] !== onDismissed) {
        let fn3 = onDismissed;
        if (undefined === onDismissed) {
          fn3 = () => {};
        }
        cResult[4] = onDismissed;
        cResult[5] = fn3;
        tmp4 = fn3;
      } else {
        tmp4 = cResult[5];
      }
      let closure_4 = tmp4;
      M();
      jsx = react.useRef(constants.OPENING);
      if (cResult[6] !== tmp4) {
        class M {
          constructor() {
            if (ref.current === constants.SHOWN) {
              closure_4();
            }
            ref.current = constants.DISMISSED;
          }
        }
        cResult[6] = tmp4;
        cResult[7] = M;
      } else {
        class M {
          constructor() {
            if (ref.current === constants.SHOWN) {
              closure_4();
            }
            ref.current = constants.DISMISSED;
          }
        }
      }
      M = tmp6;
      if (cResult[8] === tmp6) {
        class M {
          constructor() {
            if (ref.current === constants.SHOWN) {
              closure_4();
            }
            ref.current = constants.DISMISSED;
          }
        }
        constants = C;
        if (cResult[11] === tmp6) {
          class M {
            constructor() {
              if (ref.current === constants.SHOWN) {
                closure_4();
              }
              ref.current = constants.DISMISSED;
            }
          }
          let closure_8 = W;
          if (cResult[14] === operation) {
            class M {
              constructor() {
                if (ref.current === constants.SHOWN) {
                  closure_4();
                }
                ref.current = constants.DISMISSED;
              }
            }
          }
          class B {
            constructor() {
              promise = operation();
              nextPromise = promise.then((result) => constants(result));
              catchPromise = nextPromise.catch((error) => closure_1_8(error));
              return;
            }
          }
          const items = [operation, C, W];
          cResult[14] = operation;
          cResult[15] = W;
          cResult[16] = C;
          cResult[17] = B;
          cResult[18] = items;
        }
        class W {
          constructor(arg0) {
            closure_2(arg0);
            M();
          }
        }
        cResult[11] = tmp6;
        cResult[12] = tmp3;
        cResult[13] = W;
      }
      class C {
        constructor(arg0) {
          closure_1(arg0);
          M();
        }
      }
      cResult[8] = tmp6;
      cResult[9] = tmp2;
      cResult[10] = C;
    }
  : (operation) => {
      let ref;
      operation = operation.operation;
      const S = operation.onResolved;
      if (S === undefined) {
        class S {
          constructor() {}
        }
      }
      const I = operation.onRejected;
      if (I === undefined) {
        class I {
          constructor() {}
        }
      }
      const cancelable = operation.cancelable;
      if (cancelable === undefined) {
        class I {
          constructor() {}
        }
      }
      const onDismissed = operation.onDismissed;
      if (onDismissed === undefined) {
        class I {
          constructor() {}
        }
      }
      let callback;
      let callback1;
      const tmp = callback();
      jsx = I.useRef(callback1.OPENING);
      const items = [onDismissed];
      callback = I.useCallback(() => {
        if (ref.current === callback1.SHOWN) {
          onDismissed();
        }
        ref.current = callback1.DISMISSED;
      }, items);
      const items1 = [callback, S];
      callback1 = I.useCallback((arg0) => {
        S(arg0);
        callback();
      }, items1);
      const items2 = [callback, I];
      const callback2 = I.useCallback((arg0) => {
        I(arg0);
        callback();
      }, items2);
      const items3 = [operation, callback1, callback2];
      const effect = I.useEffect(() => {
        const promise = operation();
        const nextPromise = promise.then((result) => callback1(result));
        nextPromise.catch((error) => callback2(error));
      }, items3);
      ({ style: tmp.modalBackground, children: jsx(operation(S[6]).ActivityIndicator, {}) });
      return (
        <cancelable
          transparent
          animationType="none"
          onShow={function onShow() {
            if (ref.current === callback1.DISMISSED) {
              onDismissed();
            } else {
              tmp.current = tmp2.SHOWN;
            }
          }}
          onRequestClose={function onRequestClose() {
            if (cancelable) {
              callback();
            }
          }}
        >
          {null}
        </cancelable>
      );
    };
const result = size.fileFinishedImporting("modules/mobile_web_handoff/native/SimpleLoadingModalUI.tsx");

export default tmp3;
