// === Module 12527: useIframeLifecycle ===

// Module 12527 (useIframeLifecycle)
import closure_2 from "noop" /* 19 */;
import { ComponentActions } from "ME" /* 676 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/activities/useIframeLifecycle.tsx");

export default function useIframeLifecycle(arg0) {
  closure_0 = arg0;
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  const onIframeMount = obj.onIframeMount;
  const onIframeUnmount = obj.onIframeUnmount;
  let flag = obj.isNewIframe;
  if (flag === undefined) {
    flag = true;
  }
  let flag2 = obj.isIframeRetiring;
  if (flag2 === undefined) {
    flag2 = true;
  }
  closure_5 = undefined;
  closure_6 = undefined;
  closure_7 = undefined;
  closure_8 = undefined;
  closure_5 = onIframeUnmount.useRef(onIframeMount);
  closure_6 = onIframeUnmount.useRef(onIframeUnmount);
  closure_7 = onIframeUnmount.useRef(flag);
  closure_8 = onIframeUnmount.useRef(flag2);
  const effect = onIframeUnmount.useEffect(() => {
    closure_5.current = onIframeMount;
    closure_6.current = onIframeUnmount;
    closure_7.current = flag;
    closure_8.current = flag2;
  });
  const items = [arg0];
  const effect1 = onIframeUnmount.useEffect(() => {
    if (ref2.current) {
      let ComponentDispatch = callback(onIframeMount[2]).ComponentDispatch;
      let obj = { id: null };
      obj[0] = callback;
      ComponentDispatch.dispatch(flag.IFRAME_MOUNT, obj);
      let current = ref.current;
      if (current != null) {
        current(tmp4);
      }
      tmp4 = callback;
    }
    return () => {
      if (ref2.current) {
        const ComponentDispatch = closure_1_0(closure_1_1[2]).ComponentDispatch;
        const obj = { id: null };
        obj[0] = closure_0;
        ComponentDispatch.dispatch(closure_1_3.IFRAME_UNMOUNT, obj);
        const current = ref.current;
        if (current != null) {
          current(tmp4);
        }
        tmp4 = closure_0;
      }
    };
  }, items);
};