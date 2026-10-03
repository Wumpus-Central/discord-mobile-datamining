// discord_app/modules/mobile_web_handoff/native/SimpleLoadingModalUI.tsx
import noop from "../../../../_runtime/metro/00019__.js";

const require = fn;
get_ActivityIndicator = fn(17);
({ Modal: c3, View: closure_4 } = get_ActivityIndicator);
let jsx = fn(21).jsx;
const createStyles = fn(4890);
let closure_6 = createStyles.createStyles({
  modalBackground: { flex: 1, alignItems: "center", flexDirection: "column", justifyContent: "center" },
});
let constants = { OPENING: 0, [0]: "OPENING", SHOWN: 1, [1]: "SHOWN", DISMISSED: 2, [2]: "DISMISSED" };
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/mobile_web_handoff/native/SimpleLoadingModalUI.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (operation) => {
      const cResult = operation(576).c(31);
      operation = operation.operation;
      ({ onResolved, onRejected, cancelable, onDismissed } = operation);
      if (cResult[0] !== onResolved) {
        let fn = onResolved;
        if (undefined === onResolved) {
          fn = () => {};
        }
        cResult[0] = onResolved;
        cResult[1] = fn;
        let tmp2 = fn;
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
        let tmp3 = fn2;
      } else {
        tmp3 = cResult[3];
      }
      noop = tmp3;
      closure_3 = undefined !== cancelable && cancelable;
      if (cResult[4] !== onDismissed) {
        let fn3 = onDismissed;
        if (undefined === onDismissed) {
          fn3 = () => {};
        }
        cResult[4] = onDismissed;
        cResult[5] = fn3;
        let tmp4 = fn3;
      } else {
        tmp4 = cResult[5];
      }
      closure_4 = tmp4;
      M();
      jsx = noop.useRef(constants.OPENING);
      if (cResult[6] !== tmp4) {
        class M {
          constructor() {
            tmp = closure_5;
            tmp2 = closure_7;
            if (closure_5.current === closure_7.SHOWN) {
              tmp3 = closure_4;
              tmp4 = closure_4();
            }
            tmp.current = tmp2.DISMISSED;
            return;
          }
        }
        cResult[6] = tmp4;
        cResult[7] = M;
      } else {
        class M {
          constructor() {
            tmp = closure_5;
            tmp2 = closure_7;
            if (closure_5.current === closure_7.SHOWN) {
              tmp3 = closure_4;
              tmp4 = closure_4();
            }
            tmp.current = tmp2.DISMISSED;
            return;
          }
        }
      }
      M = tmp6;
      if (cResult[8] === tmp6) {
        class M {
          constructor() {
            tmp = closure_5;
            tmp2 = closure_7;
            if (closure_5.current === closure_7.SHOWN) {
              tmp3 = closure_4;
              tmp4 = closure_4();
            }
            tmp.current = tmp2.DISMISSED;
            return;
          }
        }
        constants = C;
        if (cResult[11] === tmp6) {
          class M {
            constructor() {
              tmp = closure_5;
              tmp2 = closure_7;
              if (closure_5.current === closure_7.SHOWN) {
                tmp3 = closure_4;
                tmp4 = closure_4();
              }
              tmp.current = tmp2.DISMISSED;
              return;
            }
          }
          closure_8 = W;
          if (cResult[14] === operation) {
            class M {
              constructor() {
                tmp = closure_5;
                tmp2 = closure_7;
                if (closure_5.current === closure_7.SHOWN) {
                  tmp3 = closure_4;
                  tmp4 = closure_4();
                }
                tmp.current = tmp2.DISMISSED;
                return;
              }
            }
          }
          class B {
            constructor() {
              promise = operation();
              nextPromise = promise.then((result) => closure_1_7(result));
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
            tmp = closure_2(operation);
            tmp2 = closure_6();
            return;
          }
        }
        cResult[11] = tmp6;
        cResult[12] = tmp3;
        cResult[13] = W;
      }
      class C {
        constructor(arg0) {
          tmp = closure_1(operation);
          tmp2 = closure_6();
          return;
        }
      }
      cResult[8] = tmp6;
      cResult[9] = tmp2;
      cResult[10] = C;
      const obj = operation(576);
    }
  : (operation) => {
      operation = operation.operation;
      const S = operation.onResolved;
      if (S === undefined) {
        class S {
          constructor() {
            return;
          }
        }
      }
      const onResolved = S;
      const I = operation.onRejected;
      if (I === undefined) {
        class I {
          constructor() {
            return;
          }
        }
      }
      const onRejected = I;
      const cancelable = operation.cancelable;
      if (cancelable === undefined) {
        class I {
          constructor() {
            return;
          }
        }
      }
      const onDismissed = operation.onDismissed;
      if (onDismissed === undefined) {
        class I {
          constructor() {
            return;
          }
        }
      }
      let callback1;
      jsx = onRejected.useRef(callback1.OPENING);
      const items = [onDismissed];
      const callback = onRejected.useCallback(() => {
        if (ref.current === constants.SHOWN) {
          onDismissed();
        }
        ref.current = constants.DISMISSED;
      }, items);
      const items1 = [callback, S];
      callback1 = onRejected.useCallback((arg0) => {
        onResolved(arg0);
        callback();
      }, items1);
      const items2 = [callback, I];
      const callback2 = onRejected.useCallback((_55) => {
        onRejected(_55);
        callback();
      }, items2);
      const items3 = [operation, callback1, callback2];
      const effect = onRejected.useEffect(() => {
        const promise = operation();
        operation()
          .then((result) => constants(result))
          .catch((error) => callback2(error));
      }, items3);
      const obj = {
        transparent: true,
        animationType: "none",
        onShow() {
          if (ref.current === constants.DISMISSED) {
            onDismissed();
          } else {
            tmp.current = tmp2.SHOWN;
          }
        },
        onRequestClose() {
          if (cancelable) {
            callback();
          }
        },
        children: null,
      };
      const tmp = callback();
      obj.children = (
        <onDismissed style={callback().modalBackground}>
          {jsx(operation(onResolved[6]).ActivityIndicator, {})}
        </onDismissed>
      );
      return (
        <cancelable
          transparent
          animationType="none"
          onShow={function onShow() {
            if (ref.current === constants.DISMISSED) {
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
