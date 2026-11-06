// === Module 12366: ConjureRestorePanelOp ===

// Module 12366 (ConjureRestorePanelOp)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/history/ConjureRestorePanelOp.tsx");

export const RESTORE_WINDOW_DAYS = 30;
export function restorePanelEnvironments(c1) {
  return c1 ? ["stable", "preview"] : ["stable"];
}