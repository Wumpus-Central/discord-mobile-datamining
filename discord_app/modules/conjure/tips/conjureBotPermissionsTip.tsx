// === Module 12336: conjureBotPermissionsTip ===

// Module 12336 (conjureBotPermissionsTip)
import size from "module_2" /* 2 */;

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

export const isBotPermissionsReviewPending = function isBotPermissionsReviewPending(publishing) {
  let tmp = null != publishing && !publishing.publishing;
  if (tmp) {
    tmp = "review_permissions" === publishing.action;
  }
  return tmp;
};
export { resolveBotPermissionsTip };
export const CONJURE_BOT_PERMISSIONS_TIP_BASE = { id: "bot_permissions", priority: 3, resolve: resolveBotPermissionsTip };