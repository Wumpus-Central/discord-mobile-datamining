// === Module 16453: ICYMIContext ===

// Module 16453 (ICYMIContext)
import _mod19 from "module_19" /* 19 */;
import jsxProd from "jsxProd" /* 21 */;
import nativeDefault from "native" /* 576 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1477 */;
import size from "module_2" /* 2 */;

const jsx = jsxProd.jsx;
const context = _mod19.createContext({ width: 0, margin: 0, inset: 0 });
const result = size.fileFinishedImporting("modules/icymi/native/ICYMIContext.tsx");

export const ICYMIContext = context;
export const useICYMIContextConstructor = function useICYMIContextConstructor() {
  const bound = Math.min(useWindowDimensionsDefault().width, 480);
  const PX_16 = nativeDefault.space.PX_16;
  return { width: bound, margin: PX_16, inset: PX_16 + 38 };
};
export const ICYMIContextProvider = function ICYMIContextProvider(children) {
  const bound = Math.min(useWindowDimensionsDefault().width, 480);
  const PX_16 = nativeDefault.space.PX_16;
  return <context.Provider value={{ width: bound, margin: PX_16, inset: PX_16 + 38 }}>{arg0.children}</context.Provider>;
};