// === Module 7365: NavigatorGradientContext ===

// Module 7365 (NavigatorGradientContext)
import _mod7167 from "module_7167" /* 7167 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const context = noop.createContext(undefined);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Navigator/native/NavigatorGradientContext.native.tsx");

export const NavigatorGradientContext = context;
export function NavigatorGradientProvider(children) {
  const color = children.color;
  const headerHeight = _mod7167.useHeaderHeight();
  items = [color, headerHeight];
  return <context.Provider value={noop.useMemo(() => ({ color, headerHeight }), items)}>{children.children}</context.Provider>;
}