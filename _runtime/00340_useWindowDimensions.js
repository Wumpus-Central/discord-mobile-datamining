// === Module 340: useWindowDimensions ===

// Module 340 (useWindowDimensions)
import _slicedToArray from "_slicedToArray";
import noop from "noop";

let c3;
let c4;
({ useEffect: c3, useState: c4 } = noop);

export default function useWindowDimensions() {
  const tmp = callback(callback3(() => first(88).get("window")), 2);
  const first = tmp[0];
  let closure_1 = tmp[1];
  const items = [first];
  callback2(() => {
    const styles = first(88).addEventListener("change", function handleChange(window) {
      const _window = window.window;
      if (!tmp2) {
        callback(_window);
      }
    });
    const obj = first(88);
    const size = first(88).get("window");
    if (!tmp2) {
      dependencyMap(size);
    }
    return () => {
      closure_0.remove();
    };
  }, items);
  return first;
};