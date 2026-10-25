// discord_app/modules/conjure/tips/conjureBotPermissionsTip.tsx
import size from "../../../../_runtime/metro/00002__.js";

function resolveBotPermissionsTip(publish) {
  publish = publish.publish;
  let str = null;
  if (null != publish.turn) {
    let tmp = null != publish && !publish.publishing;
    if (tmp) {
      tmp = "review_permissions" === publish.action;
    }
    str = null;
    if (tmp) {
      str = "hint";
    }
  }
  return str;
}
const result = size.fileFinishedImporting("modules/conjure/tips/conjureBotPermissionsTip.tsx");

export const isBotPermissionsReviewPending = function isBotPermissionsReviewPending(publish) {
  let tmp = null != publish && !publish.publishing;
  if (tmp) {
    tmp = "review_permissions" === publish.action;
  }
  return tmp;
};
export { resolveBotPermissionsTip };
export const CONJURE_BOT_PERMISSIONS_TIP_BASE = {
  id: "bot_permissions",
  priority: 3,
  resolve: resolveBotPermissionsTip,
};
