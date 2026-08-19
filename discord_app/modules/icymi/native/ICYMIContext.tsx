// === Module 15709: context ===

// Module 15709 (context)
import obj132 from "obj132" /* 2 */;
import noop from "noop" /* 19 */;
import jsxProd from "jsxProd" /* 21 */;
import ThemesDefault from "Themes" /* 712 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1494 */;

const jsx = jsxProd.jsx;
const context = noop.createContext({ width: 0, margin: 0, inset: 0 });
const result = obj132.fileFinishedImporting("modules/icymi/native/ICYMIContext.tsx");

export const ICYMIContext = context;
export const useICYMIContextConstructor = function useICYMIContextConstructor() {
  const bound = Math.min(useWindowDimensionsDefault().width, 480);
  const PX_16 = ThemesDefault.space.PX_16;
  return { width: bound, margin: PX_16, inset: PX_16 + 38 };
};
export const ICYMIContextProvider = function ICYMIContextProvider(children) {
  const bound = Math.min(useWindowDimensionsDefault().width, 480);
  const PX_16 = ThemesDefault.space.PX_16;
  return <context.Provider value={{ width: bound, margin: PX_16, inset: PX_16 + 38 }}>{children.children}</context.Provider>;
};