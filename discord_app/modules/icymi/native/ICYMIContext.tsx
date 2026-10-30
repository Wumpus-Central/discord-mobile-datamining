// === Module 18473: ICYMIContext ===

// Module 18473 (ICYMIContext)
import jsxProd from "jsxProd" /* 21 */;
import nativeDefault from "native" /* 575 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1492 */;
import noop from "module_19" /* 19 */;
import size from "module_2" /* 2 */;

({ useMemo: c2, createContext } = noop);
const jsx = jsxProd.jsx;
const context = createContext({ width: 0, margin: 0, inset: 0 });
const result = size.fileFinishedImporting("modules/icymi/native/ICYMIContext.tsx");

export const ICYMIContext = context;
export function useICYMIContextConstructor() {
  const bound = Math.min(useWindowDimensionsDefault().width, 480);
  const PX_16 = nativeDefault.space.PX_16;
  return { width: bound, margin: PX_16, inset: PX_16 + 38 };
}
export function ICYMIContextProvider(children) {
  const bound = Math.min(useWindowDimensionsDefault().width, 480);
  const PX_16 = nativeDefault.space.PX_16;
  const sum = PX_16 + 38;
  c2 = sum;
  const items = [bound, PX_16, sum];
  return <context.Provider value={React2(() => ({ width: bound, margin: PX_16, inset }), items)}>{children.children}</context.Provider>;
}