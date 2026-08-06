// _runtime/01571_NavigationContent.js
import noop from "noop";
import { jsx } from "jsxProd";

function NavigationContent(render) {
  return render.render(render.children);
}

export const useComponent = function useComponent(current) {
  ref = ref.useRef(current);
  ref.current = current;
  const effect = ref.useEffect(() => {
    ref.current = null;
  });
  return ref.useRef((arg0) => {
    const current = ref.current;
    if (null === current) {
      const _Error = Error;
      const error = new Error("The returned component must be rendered in the same render phase as the hook.");
      throw error;
    } else {
      const obj = { render: null, children: null };
      obj[0] = current;
      obj[1] = tmp;
      return outer1_1(outer1_2, obj);
    }
  }).current;
};