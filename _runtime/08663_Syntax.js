// _runtime/08663_Syntax.js
import reviveBigInts from "08664_reviveBigInts.js";
import DiscordMarkdownDefault from "08665_DiscordMarkdown.js";
import _mod8666 from "metro/08666__.js";

export const Syntax = _mod8666.Syntax;
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
