// === Module 8663: Syntax ===

// Module 8663 (Syntax)
import reviveBigInts from "reviveBigInts" /* 8664 */;
import DiscordMarkdownDefault from "DiscordMarkdown" /* 8665 */;
import _mod8666 from "module_8666" /* 8666 */;


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