// === Module 8763: context ===

// Module 8763 (context)
import importAllResult from "noop" /* 19 */;

let c0 = importAllResult;
const context = importAllResult.createContext({ obscured: false });
const result = require("set").fileFinishedImporting("modules/safety_common/ObscuredSurfaceContext.tsx");

export const ObscuredSurfaceContext = context;
export const OBSCURED_VALUE = { obscured: true };
export const useObscuredSurface = function useObscuredSurface() {
  return importAllResult.useContext(context);
};