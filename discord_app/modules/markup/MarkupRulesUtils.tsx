// === Module 7779: MarkupRulesUtils ===

// Module 7779 (MarkupRulesUtils)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/markup/MarkupRulesUtils.tsx");

export const smartOutput = function smartOutput(node, output, state) {
  if (typeof node.content !== "string") {
    let content;
    if (undefined !== node.content) {
      content = output(node.content, state);
    }
    return content;
  }
  content = node.content;
};
export function isStaticRouteIconType(channelId) {
  return "home" === channelId || "browse" === channelId || "customize" === channelId || "guide" === channelId || "linked-roles" === channelId;
}