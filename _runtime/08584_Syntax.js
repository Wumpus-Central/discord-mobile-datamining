// === Module 8584: Syntax ===

// Module 8584 (Syntax)
import reviveBigInts from "reviveBigInts" /* 8585 */;
import DiscordMarkdownDefault from "DiscordMarkdown" /* 8586 */;
import _mod8587 from "module_8587" /* 8587 */;


export const Syntax = _mod8587.Syntax;
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