// === Module 8356: ObscuredSurfaceContext ===

// Module 8356 (ObscuredSurfaceContext)
import noop from "module_19" /* 19 */;

const context = noop.createContext({ obscured: false });
let ReactCompilerGating = fn(558);
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const size = fn(2);
const result1 = size.fileFinishedImporting("modules/safety_common/ObscuredSurfaceContext.tsx");

export const ObscuredSurfaceContext = context;
export const OBSCURED_VALUE = { obscured: true };
export const useObscuredSurface = () => noop.useContext(context);