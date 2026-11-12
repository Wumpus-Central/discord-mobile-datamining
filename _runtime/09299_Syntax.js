// _runtime/09299_Syntax.js
import reviveBigInts from "09300_reviveBigInts.js";
import DiscordMarkdownDefault from "09301_DiscordMarkdown.js";
import _mod9302 from "metro/09302__.js";

export const Syntax = _mod9302.Syntax;
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
