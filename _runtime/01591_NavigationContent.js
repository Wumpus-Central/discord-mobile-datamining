// _runtime/01591_NavigationContent.js
import closure_0 from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

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
      error = new Error("The returned component must be rendered in the same render phase as the hook.");
      throw error;
    } else {
      const obj = { render: null, children: null };
      obj[0] = current;
      obj[1] = tmp;
      return closure_1_1(closure_1_2, obj);
    }
  }).current;
};