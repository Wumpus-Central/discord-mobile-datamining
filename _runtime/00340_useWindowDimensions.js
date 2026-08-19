// _runtime/00340_useWindowDimensions.js
import _slicedToArray from "metro/00032__slicedToArray.js";
import noop from "00019_noop.js";

({ useEffect: c3, useState: c4 } = noop);

export default function useWindowDimensions() {
  const tmp = callback(callback3(() => first(88).get("window")), 2);
  const first = tmp[0];
  closure_1 = tmp[1];
  const items = [first];
  callback2(() => {
    const styles = first(88).addEventListener("change", function handleChange(event) {
      const _window = event.window;
      if (!tmp2) {
        callback(_window);
      }
      tmp2 = closure_0.width === _window.width && closure_0.height === _window.height && closure_0.scale === _window.scale && closure_0.fontScale === _window.fontScale;
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