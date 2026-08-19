// discord_app/modules/mobile_web_handoff/native/SimpleLoadingModalUI.tsx
import noop from "../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

const require = fn;
({ Modal: c3, View: c4 } = get_ActivityIndicator);
let closure_6 = createCacheKey.createStyles({ modalBackground: { flex: 1, alignItems: "center", flexDirection: "column", justifyContent: "center" } });
let closure_7 = { OPENING: 0, [0]: "OPENING", SHOWN: 1, [1]: "SHOWN", DISMISSED: 2, [2]: "DISMISSED" };
const result = require("obj132").fileFinishedImporting("modules/mobile_web_handoff/native/SimpleLoadingModalUI.tsx");

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
  const callback2 = onRejected.useCallback((_55) => {
    onRejected(_55);
    callback();
  }, items2);
  const items3 = [operation, callback1, callback2];
  const effect = onRejected.useEffect(() => {
    const promise = operation();
    operation().then((result) => callback(result)).catch((error) => callback2(error));
  }, items3);
  const obj = { style: callback().modalBackground, children: jsx(operation(onResolved[4]).ActivityIndicator, {}) };
  obj[4] = <onDismissed style={callback().modalBackground}>{jsx(operation(onResolved[4]).ActivityIndicator, {})}</onDismissed>;
  return <cancelable style={callback().modalBackground}>{jsx(operation(onResolved[4]).ActivityIndicator, {})}</cancelable>;
};