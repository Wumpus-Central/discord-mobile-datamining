// _runtime/metro/08216__.js
import reviveBigInts from "../08217_reviveBigInts.js";
import DiscordMarkdownDefault from "../08218_DiscordMarkdown.js";

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
