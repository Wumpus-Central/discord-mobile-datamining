// === Module 8786: Syntax ===

// Module 8786 (Syntax)
import reviveBigInts from "reviveBigInts" /* 8787 */;
import DiscordMarkdownDefault from "DiscordMarkdown" /* 8788 */;
import _mod8789 from "module_8789" /* 8789 */;


export const Syntax = _mod8789.Syntax;
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