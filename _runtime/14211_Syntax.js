// _runtime/14211_Syntax.js
import reviveBigInts from "14212_reviveBigInts.js";
import DiscordMarkdownDefault from "14213_DiscordMarkdown.js";
import _mod14214 from "metro/14214__.js";

export const Syntax = _mod14214.Syntax;
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
