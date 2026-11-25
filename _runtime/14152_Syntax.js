// _runtime/14152_Syntax.js
import reviveBigInts from "14153_reviveBigInts.js";
import DiscordMarkdownDefault from "14154_DiscordMarkdown.js";
import _mod14155 from "metro/14155__.js";

export const Syntax = _mod14155.Syntax;
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
