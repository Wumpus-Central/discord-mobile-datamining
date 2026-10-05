// _runtime/00340_useWindowDimensions.js
import _slicedToArray from "metro/00032__slicedToArray.js";
import react from "00019_react.js";

let size;

let c3;
let closure_4;
({ useEffect: c3, useState: closure_4 } = react);

export default function useWindowDimensions() {
  let closure_1;
  let first;
  [first, closure_1] = closure_4(() => {
    const obj = first(closure_1[2]);
    return obj.get("window");
  });
  const items = [first];
  closure_3(() => {
    let closure_0;
    const obj = first(closure_1[2]);
    first = obj.addEventListener("change", function handleChange(event) {
      const _window = event.window;
      const tmp2 =
        closure_0.width === _window.width &&
        closure_0.height === _window.height &&
        closure_0.scale === _window.scale &&
        closure_0.fontScale === _window.fontScale;
      if (!tmp2) {
        closure_1_1(_window);
      }
    });
    const obj2 = first(closure_1[2]);
    size = obj2.get("window");
    let tmp2 =
      first.width === size.width &&
      tmp.height === size.height &&
      tmp.scale === size.scale &&
      tmp.fontScale === size.fontScale;
    if (!tmp2) {
      closure_1(size);
    }
    return () => {
      closure_0.remove();
    };
  }, items);
  return first;
}
