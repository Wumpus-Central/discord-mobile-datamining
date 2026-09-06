// === Module 1574: NavigationContent ===

// Module 1574 (NavigationContent)
import noop from "module_19" /* 19 */;

const jsx = fn(21).jsx;
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
      const obj = { render: current, children: tmp };
      return <NavigationContent render={current}>{tmp}</NavigationContent>;
    }
  }).current;
};