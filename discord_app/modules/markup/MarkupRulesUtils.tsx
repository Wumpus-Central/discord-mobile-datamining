// discord_app/modules/markup/MarkupRulesUtils.tsx
const result = require("set").fileFinishedImporting("modules/markup/MarkupRulesUtils.tsx");

export const smartOutput = function smartOutput(node, output, state) {
  if (typeof node.content !== "y") {
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