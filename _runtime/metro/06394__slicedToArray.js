// _runtime/metro/06394__slicedToArray.js
import _slicedToArray from "06349__slicedToArray.js";
import react from "../00019_react.js";

let set;

let c2;
let c3;
let closure_4;
({ useCallback: c2, useEffect: c3, useState: closure_4 } = react);

export const useUnmountAwareTimeout = function useUnmountAwareTimeout() {
  let items1;
  let first = _slicedToArray(
    closure_4(() => {
      set = new Set();
      return set;
    }),
    1,
  )[0];
  const items = [first];
  closure_3(
    () => () => {
      const item = first.forEach((item) => closure_1_0.clearTimeout(item));
      first.clear();
    },
    items,
  );
  const obj = {
    setTimeout: closure_2((arg0, arg1) => {
      let closure_0;
      first = arg0;
      const timerId = first.setTimeout(() => {
        first.delete(timerId);
        closure_0();
      }, arg1);
      first.add(timerId);
    }, items1),
  };
  items1 = [first];
  return obj;
};
export const useUnmountAwareAnimationFrame = function useUnmountAwareAnimationFrame() {
  let items1;
  let first = _slicedToArray(
    closure_4(() => {
      set = new Set();
      return set;
    }),
    1,
  )[0];
  const items = [first];
  closure_3(
    () => () => {
      const item = first.forEach((item) => cancelAnimationFrame(item));
      first.clear();
    },
    items,
  );
  const obj = {
    requestAnimationFrame: closure_2((arg0) => {
      let closure_0;
      first = arg0;
      const animationFrame = first.requestAnimationFrame((arg0) => {
        first.delete(animationFrame);
        closure_0(arg0);
      });
      first.add(animationFrame);
    }, items1),
  };
  items1 = [first];
  return obj;
};
