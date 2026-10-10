// discord_app/modules/mobile_web_handoff/native/SimpleLoadingModalUI.tsx
import noop from "../../../../_runtime/metro/00019__.js";

const require = fn;
get_ActivityIndicator = fn(17);
({ Modal: c3, View: closure_4 } = get_ActivityIndicator);
let jsx = fn(21).jsx;
const createStyles = fn(5092);
let closure_6 = createStyles.createStyles({
  modalBackground: { flex: 1, alignItems: "center", flexDirection: "column", justifyContent: "center" },
});
let constants = { OPENING: 0, [0]: "OPENING", SHOWN: 1, [1]: "SHOWN", DISMISSED: 2, [2]: "DISMISSED" };
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/mobile_web_handoff/native/SimpleLoadingModalUI.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function SimpleLoadingModal(operation) {
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
      closure_3 = tmp4;
      if (cResult[4] !== onDismissed) {
        let fn3 = onDismissed;
        if (undefined === onDismissed) {
          fn3 = () => {};
        }
        cResult[4] = onDismissed;
        cResult[5] = fn3;
        let tmp5 = fn3;
      } else {
        tmp5 = cResult[5];
      }
      closure_4 = tmp5;
      closure_6();
      noop.useRef(constants.OPENING);
      if (cResult[6] !== tmp5) {
        const fn4 = function y() {
          if (ref.current === constants.SHOWN) {
            closure_4();
          }
          ref.current = constants.DISMISSED;
        };
        cResult[6] = tmp5;
        cResult[7] = fn4;
        let tmp7 = fn4;
      } else {
        tmp7 = cResult[7];
      }
      closure_6 = tmp7;
      if (cResult[8] === tmp7) {
        if (cResult[9] === tmp2) {
          let tmp8 = cResult[10];
        }
        constants = tmp8;
        if (cResult[11] === tmp7) {
          if (cResult[12] === tmp3) {
            let tmp9 = cResult[13];
          }
          closure_8 = tmp9;
          if (cResult[14] === operation) {
            if (cResult[15] === tmp9) {
              if (cResult[16] === tmp8) {
                let tmp10 = cResult[17];
                let tmp11 = cResult[18];
              }
              const effect = noop.useEffect(tmp10, tmp11);
              if (cResult[19] !== tmp5) {
                const fn5 = function w() {
                  if (ref.current === constants.DISMISSED) {
                    closure_4();
                  } else {
                    tmp.current = tmp2.SHOWN;
                  }
                };
                cResult[19] = tmp5;
                class B {
                  constructor() {
                    promise = operation();
                    nextPromise = promise.then((result) => constants(result));
                    catchPromise = nextPromise.catch((error) => closure_1_8(error));
                    return;
                  }
                }
                cResult[20] = fn5;
              }
              class B {
                constructor() {
                  promise = operation();
                  nextPromise = promise.then((result) => constants(result));
                  catchPromise = nextPromise.catch((error) => closure_1_8(error));
                  return;
                }
              }
              const fn6 = function x() {
                if (closure_3) {
                  closure_6();
                }
              };
              cResult[21] = tmp4;
              cResult[22] = tmp7;
              cResult[23] = fn6;
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
          const items = [operation, tmp8, tmp9];
          cResult[14] = operation;
          cResult[15] = tmp9;
          cResult[16] = tmp8;
          cResult[17] = B;
          cResult[18] = items;
          tmp11 = items;
          tmp10 = B;
        }
        class W {
          constructor(arg0) {
            tmp = closure_2(operation);
            tmp2 = closure_6();
            return;
          }
        }
        cResult[11] = tmp7;
        cResult[12] = tmp3;
        cResult[13] = W;
        tmp9 = W;
      }
      class C {
        constructor(arg0) {
          tmp = closure_1(operation);
          tmp2 = closure_6();
          return;
        }
      }
      cResult[8] = tmp7;
      cResult[9] = tmp2;
      cResult[10] = C;
      tmp8 = C;
    }
  : function SimpleLoadingModal(operation) {
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
