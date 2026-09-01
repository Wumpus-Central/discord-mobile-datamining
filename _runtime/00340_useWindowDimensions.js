// _runtime/00340_useWindowDimensions.js
import closure_2 from "metro/00032__slicedToArray.js";
import noop from "00019_noop.js";

({ useEffect: c3, useState: c4 } = noop);

export default function useWindowDimensions() {
  const tmp = callback(
    callback3(() => first(88).get("window")),
    2,
  );
  const first = tmp[0];
  closure_1 = tmp[1];
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
}
