// === Module 340: ? ===

// Module 340
import _slicedToArray from "module_32" /* 32 */;

const noop = fn(19);
({ useEffect: c3, useState: closure_4 } = noop);

export default function useWindowDimensions() {
  const tmp = _slicedToArray(closure_4(() => first(88).get("window")), 2);
  const first = tmp[0];
  dependencyMap = tmp[1];
  const items = [first];
  closure_3(() => {
    styles = first(88).addEventListener("change", function handleChange(event) {
      const _window = event.window;
      if (!tmp2) {
        dependencyMap(_window);
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