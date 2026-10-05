// === Module 1581: react ===

// Module 1581 (react)
import Fragment from "Fragment" /* 21 */;
import react from "react" /* 19 */;

const jsx = Fragment.jsx;
function NavigationContent(render) {
  return render.render(render.children);
}

export const useComponent = function useComponent(current) {
  let ref;
  ref = ref.useRef(current);
  ref.current = current;
  const effect = ref.useEffect(() => {
    ref.current = null;
  });
  return ref.useRef(function(arg0) {
    const current = ref.current;
    if (null === current) {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error("The returned component must be rendered in the same render phase as the hook.");
      throw error;
    } else {
      return <NavigationContent render={current}>{tmp}</NavigationContent>;
    }
  }).current;
};