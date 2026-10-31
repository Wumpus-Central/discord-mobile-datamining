// === Module 8592: Syntax ===

// Module 8592 (Syntax)
import reviveBigInts from "reviveBigInts" /* 8593 */;
import DiscordMarkdownDefault from "DiscordMarkdown" /* 8594 */;
import _mod8595 from "module_8595" /* 8595 */;


export const Syntax = _mod8595.Syntax;
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
export function unparse(arg0) {
  const obj = DiscordMarkdownDefault;
  return obj.unparseFromAstString(reviveBigInts.encodeAstJson(arg0));
}