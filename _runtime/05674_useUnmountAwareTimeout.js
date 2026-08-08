// _runtime/05674_useUnmountAwareTimeout.js
import _slicedToArray from "_slicedToArray";
import noop from "noop";

let c3;
let c4;
let obj1;
({ useCallback: obj1, useEffect: c3, useState: c4 } = noop);

export const useUnmountAwareTimeout = function useUnmountAwareTimeout() {
  const first = callback(callback4(() => new Set()), 1)[0];
  const items = [first];
  callback3(() => () => {
    const item = closure_0.forEach((arg0) => closure_0.clearTimeout(arg0));
    closure_0.clear();
  }, items);
  const items1 = [first];
  return {
    setTimeout: callback2((arg0, arg1) => {
      const timerId = first.setTimeout(() => {
        set.delete(timerId);
        set();
      }, arg1);
      arg0.add(timerId);
    }, items1)
  };
};
export const useUnmountAwareAnimationFrame = function useUnmountAwareAnimationFrame() {
  const first = callback(callback4(() => new Set()), 1)[0];
  const items = [first];
  callback3(() => () => {
    const item = closure_0.forEach((closure_0) => cancelAnimationFrame(closure_0));
    closure_0.clear();
  }, items);
  const items1 = [first];
  return {
    requestAnimationFrame: callback2((arg0) => {
      const animationFrame = first.requestAnimationFrame((arg0) => {
        set.delete(animationFrame);
        set(arg0);
      });
      arg0.add(animationFrame);
    }, items1)
  };
};