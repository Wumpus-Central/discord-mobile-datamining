// === Module 18692: conjureBotPermissionsTip ===

// Module 18692 (conjureBotPermissionsTip)
import size from "module_2" /* 2 */;

function resolveBotPermissionsTip(publish) {
  publish = publish.publish;
  let str = null;
  if (null != publish.turn) {
    state = undefined;
    if (publish != null) {
      state = publish.state;
    }
    str = null;
    if (tmp2) {
      str = "hint";
    }
    tmp2 = "action_needed" === state && publish.permissionsChanged;
  }
  return str;
}
const result = size.fileFinishedImporting("modules/conjure/tips/conjureBotPermissionsTip.tsx");

export function isBotPermissionsReviewPending(state) {
  state = undefined;
  if (state != null) {
    state = state.state;
  }
  return "action_needed" === state && state.permissionsChanged;
}
export { resolveBotPermissionsTip };
export const CONJURE_BOT_PERMISSIONS_TIP_BASE = { id: "bot_permissions", priority: 3, resolve: resolveBotPermissionsTip };