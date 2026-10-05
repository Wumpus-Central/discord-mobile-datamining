// discord_app/modules/conjure/history/ConjureRestorePanelOp.tsx
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/conjure/history/ConjureRestorePanelOp.tsx");

export const RESTORE_WINDOW_DAYS = 30;
export function restorePanelEnvironments(arg0) {
  return "user" === arg0 ? ["stable"] : ["preview", "stable"];
}
