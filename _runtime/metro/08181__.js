// === Module 8181: ? ===

// Module 8181
import reviveBigInts from "reviveBigInts" /* 8182 */;
import DiscordMarkdownDefault from "DiscordMarkdown" /* 8183 */;

require = arg1;
importDefault = arg2;
const dependencyMap = arg6;

export const parse = function parse(arg0, arg1, arg2) {
  const obj = reviveBigInts;
  let json;
  if (null != arg1) {
    const _JSON = JSON;
    json = JSON.stringify(arg1);
  }
  return obj.decodeAstJson(DiscordMarkdownDefault.parseToAstString(arg0, json, arg2));
};
export const unparse = function unparse(arg0) {
  const obj = DiscordMarkdownDefault;
  return obj.unparseFromAstString(reviveBigInts.encodeAstJson(arg0));
};