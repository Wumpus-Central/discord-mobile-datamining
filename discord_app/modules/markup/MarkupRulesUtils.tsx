// === Module 8096: MarkupRulesUtils ===

// Module 8096 (MarkupRulesUtils)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/markup/MarkupRulesUtils.tsx");

export const smartOutput = function smartOutput(node, output, state) {
  if (typeof node.content !== "string") {
    if (undefined !== node.content) {
      let content = output(node.content, state);
    }
    return content;
  }
  content = node.content;
};
export function isStaticRouteIconType(channelId) {
  let tmp = "home" === channelId;
  if (!tmp) {
    tmp = "browse" === channelId;
  }
  if (!tmp) {
    tmp = "customize" === channelId;
  }
  if (!tmp) {
    tmp = "guide" === channelId;
  }
  if (!tmp) {
    tmp = "linked-roles" === channelId;
  }
  return tmp;
}