// _runtime/14029_Syntax.js
import reviveBigInts from "14030_reviveBigInts.js";
import DiscordMarkdownDefault from "14031_DiscordMarkdown.js";
import _mod14032 from "metro/14032__.js";

export const Syntax = _mod14032.Syntax;
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
