// discord_app/modules/safety_common/ObscuredSurfaceContext.tsx
import noop from "../../../_runtime/metro/00019__.js";

const context = noop.createContext({ obscured: false });
let ReactCompilerGating = fn(558);
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const size = fn(2);
const result1 = size.fileFinishedImporting("modules/safety_common/ObscuredSurfaceContext.tsx");

export const ObscuredSurfaceContext = context;
export const OBSCURED_VALUE = { obscured: true };
export const useObscuredSurface = () => noop.useContext(context);
