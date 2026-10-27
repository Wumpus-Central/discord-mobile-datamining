// === Module 8491: Syntax ===

// Module 8491 (Syntax)
import reviveBigInts from "reviveBigInts" /* 8492 */;
import DiscordMarkdownDefault from "DiscordMarkdown" /* 8493 */;
import _mod8494 from "module_8494" /* 8494 */;


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