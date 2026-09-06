// === Module 9644: useIframeLifecycle ===

// Module 9644 (useIframeLifecycle)
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1109 */;
import noop from "module_19" /* 19 */;

require = fn;
const ComponentActions = fn(1074).ComponentActions;
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/useIframeLifecycle.tsx");

export default function useIframeLifecycle(id) {
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
  onIframeUnmount.useRef(onIframeMount);
  closure_6 = onIframeUnmount.useRef(onIframeUnmount);
  onIframeUnmount.useRef(flag);
  closure_8 = onIframeUnmount.useRef(flag2);
  const effect = onIframeUnmount.useEffect(() => {
    closure_5.current = onIframeMount;
    closure_6.current = onIframeUnmount;
    closure_7.current = flag;
    closure_8.current = flag2;
  });
  const items = [id];
  const effect1 = onIframeUnmount.useEffect(() => {
    if (ref2.current) {
      let ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
      let obj = { id };
      ComponentDispatch.dispatch(ComponentActions.IFRAME_MOUNT, obj);
      let current = ref.current;
      if (current != null) {
        current(tmp4);
      }
      tmp4 = id;
    }
    return () => {
      if (ref2.current) {
        const ComponentDispatch = id(onIframeMount[2]).ComponentDispatch;
        const obj = { id };
        ComponentDispatch.dispatch(flag.IFRAME_UNMOUNT, obj);
        const current = ref.current;
        if (current != null) {
          current(tmp4);
        }
        tmp4 = id;
      }
    };
  }, items);
};