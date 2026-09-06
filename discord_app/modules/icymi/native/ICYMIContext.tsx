// discord_app/modules/icymi/native/ICYMIContext.tsx
import _mod19 from "../../../../_runtime/metro/00019__.js";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import useWindowDimensionsDefault from "../../screen/useWindowDimensions.native.tsx";
import size from "../../../../_runtime/metro/00002__.js";

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
  return (
    <context.Provider value={{ width: bound, margin: PX_16, inset: PX_16 + 38 }}>{children.children}</context.Provider>
  );
};
