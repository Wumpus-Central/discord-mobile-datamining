// === Module 7275: NavigatorGradientContext ===

// Module 7275 (NavigatorGradientContext)
import _mod7074 from "module_7074" /* 7074 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const context = noop.createContext(undefined);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Navigator/native/NavigatorGradientContext.native.tsx");

export const NavigatorGradientContext = context;
export function NavigatorGradientProvider(children) {
  const color = children.color;
  const headerHeight = _mod7074.useHeaderHeight();
  items = [color, headerHeight];
  return <context.Provider value={noop.useMemo(() => ({ color, headerHeight }), items)}>{children.children}</context.Provider>;
}