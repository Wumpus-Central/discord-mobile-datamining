// _runtime/08528_Syntax.js
import reviveBigInts from "08529_reviveBigInts.js";
import DiscordMarkdownDefault from "08530_DiscordMarkdown.js";
import _mod8531 from "metro/08531__.js";

export const Syntax = _mod8531.Syntax;
export const parse = function parse(arg0, arg1, arg2) {
  const obj = reviveBigInts;
  const tmp = arg1;
  return obj.decodeAstJson(DiscordMarkdownDefault.parseToAstString(arg0, tmp, arg2));
};
export const parseLossless = function parseLossless(arg0, arg1, arg2) {
  const obj = reviveBigInts;
  const tmp = arg1;
  return obj.decodeAstJson(DiscordMarkdownDefault.parseLosslessToAstString(arg0, tmp, arg2));
};
export const unparse = function unparse(arg0) {
  const obj = DiscordMarkdownDefault;
  return obj.unparseFromAstString(reviveBigInts.encodeAstJson(arg0));
};
