// discord_app/modules/icymi/native/ICYMIContext.tsx
import { jsx } from "jsxProd";

const context = require("noop").createContext({ width: 0, margin: 0, inset: 0 });
const result = require("useWindowDimensions").fileFinishedImporting("modules/icymi/native/ICYMIContext.tsx");

export const ICYMIContext = context;
export const useICYMIContextConstructor = function useICYMIContextConstructor() {
  const bound = Math.min(require("../../screen/useWindowDimensions.native.tsx")().width, 480);
  const PX_16 = require("../../../../discord_common/js/packages/tokens/native.tsx").space.PX_16;
  return { width: bound, margin: PX_16, inset: PX_16 + 38 };
};
export const ICYMIContextProvider = function ICYMIContextProvider(children) {
  const bound = Math.min(require("../../screen/useWindowDimensions.native.tsx")().width, 480);
  const PX_16 = require("../../../../discord_common/js/packages/tokens/native.tsx").space.PX_16;
  return <context.Provider value={{ width: bound, margin: PX_16, inset: PX_16 + 38 }}>{arg0.children}</context.Provider>;
};