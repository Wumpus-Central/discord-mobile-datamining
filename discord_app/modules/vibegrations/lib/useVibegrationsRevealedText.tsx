// === Module 17031: useVibegrationsRevealedText ===

// Module 17031 (useVibegrationsRevealedText)
import VibegrationsStreamReveal from "VibegrationsStreamReveal" /* 17032 */;
import vibegrationsPageVisibility from "vibegrationsPageVisibility" /* 17033 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4748 */;

const require = globalThis.__r;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/lib/useVibegrationsRevealedText.tsx");

export const useVibegrationsRevealedText = function useVibegrationsRevealedText(source, streaming) {
  _require = source;
  streaming = streaming.streaming;
  dependencyMap = undefined;
  let obj5;
  noop = undefined;
  let ref;
  closure_5 = undefined;
  closure_6 = undefined;
  target = _require;
  const items = [ref];
  if (streaming) {
    streaming = !obj.useStateFromStores(items, () => ref.useReducedMotion);
  }
  length = dependencyMap;
  obj = require("initialize");
  [tmp2, tmp3] = obj5(noop.useState(() => ({ target, length: target.length })), 2);
  dependencyMap = tmp3;
  obj5 = tmp2;
  let arr2 = tmp2;
  if (tmp2.target === source) {
    let tmp5 = streaming;
    if (!streaming) {
      tmp5 = arr2.length === source.length;
    }
    if (!tmp5) {
      let obj3 = { target: source, length: source.length };
      obj5 = obj3;
      arr2 = obj3;
    }
    if (arr2 !== tmp2) {
      tmp3(arr2);
    }
    let tmp7 = streaming;
    if (streaming) {
      tmp7 = arr2.length < source.length;
    }
    noop = tmp7;
    ref = obj2.useRef(arr2);
    const layoutEffect = obj2.useLayoutEffect(() => {
      closure_4.current = obj5;
    });
    closure_5 = obj2.useRef(0);
    closure_6 = obj2.useRef(0);
    const items1 = [tmp7];
    const effect = obj2.useEffect(() => {
      if (closure_3) {
        ref3.current = 0;
        const _requestAnimationFrame = requestAnimationFrame;
        function step(current) {
          if (0 === ref3.current) {
            let REVEAL_FRAME_MS = VibegrationsStreamReveal.REVEAL_FRAME_MS;
          } else {
            REVEAL_FRAME_MS = current - ref3.current;
          }
          if (REVEAL_FRAME_MS >= VibegrationsStreamReveal.REVEAL_FRAME_MS) {
            ref3.current = current;
            current = ref.current;
            const obj3 = { target: null, revealed: null, elapsedMs: null };
            ({ target: obj2.target, length: obj2.revealed } = current);
            obj3.elapsedMs = REVEAL_FRAME_MS;
            const nextRevealLengthResult = VibegrationsStreamReveal.nextRevealLength(obj3);
            if (nextRevealLengthResult !== current.length) {
              obj5 = { target: current.target, length: nextRevealLengthResult };
              c1(obj5);
            }
          }
          closure_5.current = requestAnimationFrame(step);
        }
        ref2.current = requestAnimationFrame(step);
        return () => cancelAnimationFrame(ref2.current);
      }
    }, items1);
    const items2 = [tmp7];
    const effect1 = obj2.useEffect(() => {
      if (closure_3) {
        if (obj.isPageHidden()) {
          target = ref.current.target;
          let obj2 = { target, length: target.length };
          _undefined(obj2);
        }
        function flushIfHidden() {
          if (obj.isPageHidden()) {
            target = ref.current.target;
            const obj2 = { target, length: target.length };
            dependencyMap(obj2);
          }
          obj = closure_0(17033);
        }
        obj = vibegrationsPageVisibility;
        return vibegrationsPageVisibility.subscribePageVisibility(flushIfHidden);
      }
    }, items2);
    const _Math = Math;
    const bound = Math.min(arr2.length, source.length);
    let substr = source;
    if (bound < source.length) {
      substr = source.slice(0, bound);
    }
    const obj4 = { text: substr, revealing: null };
    if (streaming) {
      streaming = bound < source.length;
    }
    obj4.revealing = streaming;
    return obj4;
  } else {
    obj5 = { target: source, length: null };
    if (streaming) {
      ({ target, length } = tmp2);
      let length2 = target(17032).reconcileRevealedLength(target, source, length);
      const targetResult = target(17032);
    } else {
      length2 = source.length;
    }
    obj5.length = length2;
  }
};