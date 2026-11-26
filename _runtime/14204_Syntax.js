// _runtime/14204_Syntax.js
import reviveBigInts from "14205_reviveBigInts.js";
import DiscordMarkdownDefault from "14206_DiscordMarkdown.js";
import _mod14207 from "metro/14207__.js";

export const Syntax = _mod14207.Syntax;
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
