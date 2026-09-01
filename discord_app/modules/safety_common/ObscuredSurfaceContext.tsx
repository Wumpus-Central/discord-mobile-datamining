// discord_app/modules/safety_common/ObscuredSurfaceContext.tsx
import importAllResult from "../../../_runtime/00019_noop.js";

let c0 = importAllResult;
const context = importAllResult.createContext({ obscured: false });
const result = require("set").fileFinishedImporting("modules/safety_common/ObscuredSurfaceContext.tsx");

export const ObscuredSurfaceContext = context;
export const OBSCURED_VALUE = { obscured: true };
export const useObscuredSurface = function useObscuredSurface() {
  return importAllResult.useContext(context);
};
