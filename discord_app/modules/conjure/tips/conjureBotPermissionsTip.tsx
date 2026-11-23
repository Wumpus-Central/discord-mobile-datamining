// discord_app/modules/conjure/tips/conjureBotPermissionsTip.tsx
import size from "../../../../_runtime/metro/00002__.js";

function resolveBotPermissionsTip(publish) {
  publish = publish.publish;
  let str = null;
  if (null != publish.turn) {
    state = undefined;
    if (publish != null) {
      state = publish.state;
    }
    let tmp2 = "action_needed" === state;
    if (tmp2) {
      tmp2 = "review_permissions" === publish.action;
    }
    str = null;
    if (tmp2) {
      str = "hint";
    }
  }
  return str;
}
const result = size.fileFinishedImporting("modules/conjure/tips/conjureBotPermissionsTip.tsx");

export function isBotPermissionsReviewPending(state) {
  state = undefined;
  if (state != null) {
    state = state.state;
  }
  let tmp2 = "action_needed" === state;
  if (tmp2) {
    tmp2 = "review_permissions" === state.action;
  }
  return tmp2;
}
export { resolveBotPermissionsTip };
export const CONJURE_BOT_PERMISSIONS_TIP_BASE = {
  id: "bot_permissions",
  priority: 3,
  resolve: resolveBotPermissionsTip,
};
