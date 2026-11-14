// _runtime/09366_Syntax.js
import reviveBigInts from "09367_reviveBigInts.js";
import DiscordMarkdownDefault from "09368_DiscordMarkdown.js";
import _mod9369 from "metro/09369__.js";

export const Syntax = _mod9369.Syntax;
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
