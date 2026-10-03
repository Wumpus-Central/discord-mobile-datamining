// === Module 9926: PortalKeyboardModalContext ===

// Module 9926 (PortalKeyboardModalContext)
import noop from "module_19" /* 19 */;

const context = noop.createContext(false);
let ReactCompilerGating = fn(558);
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const size = fn(2);
const result1 = size.fileFinishedImporting("modules/keyboard/native/PortalKeyboardModalContext.tsx");

export const PortalKeyboardInModalContext = context;
export const useIsPortalKeyboardInModal = () => noop.useContext(context);