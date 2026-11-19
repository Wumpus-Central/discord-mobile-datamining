// _runtime/08755_Syntax.js
import reviveBigInts from "08756_reviveBigInts.js";
import DiscordMarkdownDefault from "08757_DiscordMarkdown.js";
import _mod8758 from "metro/08758__.js";

export const Syntax = _mod8758.Syntax;
export function parse(arg0, arg1, arg2) {
  const obj = reviveBigInts;
  const tmp = arg1;
  return obj.decodeAstJson(DiscordMarkdownDefault.parseToAstString(arg0, tmp, arg2));
}
export function parseLossless(arg0, arg1, arg2) {
  const obj = reviveBigInts;
  const tmp = arg1;
  return obj.decodeAstJson(DiscordMarkdownDefault.parseLosslessToAstString(arg0, tmp, arg2));
}
