// === Module 6163: SimpleLoadingModal ===

// Module 6163 (SimpleLoadingModal)
import closure_2 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

const require = arg1;
({ Modal: c3, View: c4 } = get_ActivityIndicator);
let closure_6 = createCacheKey.createStyles({ modalBackground: { flex: 1, alignItems: "center", flexDirection: "column", justifyContent: "center" } });
let closure_7 = { OPENING: 0, [0]: "OPENING", SHOWN: 1, [1]: "SHOWN", DISMISSED: 2, [2]: "DISMISSED" };
const result = require("set").fileFinishedImporting("modules/mobile_web_handoff/native/SimpleLoadingModalUI.tsx");

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
  jsx = undefined;
  let callback;
  let callback1;
  let callback2;
  jsx = onRejected.useRef(callback1.OPENING);
  const items = [D];
  callback = onRejected.useCallback(() => {
    if (ref.current === callback1.SHOWN) {
      onDismissed();
    }
    ref.current = callback1.DISMISSED;
  }, items);
  const items1 = [callback, S];
  callback1 = onRejected.useCallback((arg0) => {
    onResolved(arg0);
    callback();
  }, items1);
  const items2 = [callback, I];
  callback2 = onRejected.useCallback((arg0) => {
    onRejected(arg0);
    callback();
  }, items2);
  const items3 = [operation, callback1, callback2];
  const effect = onRejected.useEffect(() => {
    const promise = operation();
    operation().then((arg0) => callback(arg0)).catch((arg0) => callback2(arg0));
  }, items3);
  let obj = {
    transparent: true,
    animationType: "none",
    onShow() {
      if (ref.current === callback1.DISMISSED) {
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
  obj[4] = <onDismissed style={callback().modalBackground}>{jsx(operation(onResolved[4]).ActivityIndicator, {})}</onDismissed>;
  return <cancelable style={callback().modalBackground}>{jsx(operation(onResolved[4]).ActivityIndicator, {})}</cancelable>;
};