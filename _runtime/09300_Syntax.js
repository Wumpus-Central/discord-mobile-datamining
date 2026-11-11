// _runtime/09300_Syntax.js
import reviveBigInts from "09301_reviveBigInts.js";
import DiscordMarkdownDefault from "09302_DiscordMarkdown.js";
import _mod9303 from "metro/09303__.js";

export const Syntax = _mod9303.Syntax;
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
