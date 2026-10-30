// discord_app/modules/safety_common/ObscuredSurfaceContext.tsx
import noop from "../../../_runtime/metro/00019__.js";

const context = noop.createContext({ obscured: false });
const size = fn(2);
const result = size.fileFinishedImporting("modules/safety_common/ObscuredSurfaceContext.tsx");

export const ObscuredSurfaceContext = context;
export const OBSCURED_VALUE = { obscured: true };
export function useObscuredSurface() {
  return noop.useContext(context);
}
