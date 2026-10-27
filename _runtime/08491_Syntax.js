// _runtime/08491_Syntax.js
import reviveBigInts from "08492_reviveBigInts.js";
import DiscordMarkdownDefault from "08493_DiscordMarkdown.js";
import _mod8494 from "metro/08494__.js";

export const Syntax = _mod8494.Syntax;
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
