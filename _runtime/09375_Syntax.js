// _runtime/09375_Syntax.js
import reviveBigInts from "09376_reviveBigInts.js";
import DiscordMarkdownDefault from "09377_DiscordMarkdown.js";
import _mod9378 from "metro/09378__.js";

export const Syntax = _mod9378.Syntax;
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
