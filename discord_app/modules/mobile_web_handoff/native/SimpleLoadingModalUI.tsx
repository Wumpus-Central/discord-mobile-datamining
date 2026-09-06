// === Module 7318: SimpleLoadingModalUI ===

// Module 7318 (SimpleLoadingModalUI)
import noop from "module_19" /* 19 */;

const require = fn;
get_ActivityIndicator = fn(17);
({ Modal: c3, View: closure_4 } = get_ActivityIndicator);
let jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_6 = createStyles.createStyles({ modalBackground: { flex: 1, alignItems: "center", flexDirection: "column", justifyContent: "center" } });
let closure_7 = { OPENING: 0, [0]: "OPENING", SHOWN: 1, [1]: "SHOWN", DISMISSED: 2, [2]: "DISMISSED" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/mobile_web_handoff/native/SimpleLoadingModalUI.tsx");

export default function SimpleLoadingModal(operation) {
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
  const D = operation.onDismissed;
  if (D === undefined) {
    class D {
      constructor() {
        return;
      }
    }
  }
  const onDismissed = D;
  let callback1;
  jsx = onRejected.useRef(callback1.OPENING);
  const items = [D];
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
  const callback2 = onRejected.useCallback((arg0) => {
    onRejected(arg0);
    callback();
  }, items2);
  const items3 = [operation, callback1, callback2];
  const effect = onRejected.useEffect(() => {
    const promise = operation();
    operation().then((result) => constants(result)).catch((error) => callback2(error));
  }, items3);
  let obj = {
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
    children: null
  };
  obj = { style: callback().modalBackground, children: jsx(operation(onResolved[4]).ActivityIndicator, {}) };
  obj.children = <onDismissed style={callback().modalBackground}>{jsx(operation(onResolved[4]).ActivityIndicator, {})}</onDismissed>;
  return <cancelable style={callback().modalBackground}>{jsx(operation(onResolved[4]).ActivityIndicator, {})}</cancelable>;
};