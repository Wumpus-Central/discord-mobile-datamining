// === Module 8813: Syntax ===

// Module 8813 (Syntax)
import reviveBigInts from "reviveBigInts" /* 8814 */;
import DiscordMarkdownDefault from "DiscordMarkdown" /* 8815 */;
import _mod8816 from "module_8816" /* 8816 */;


export const Syntax = _mod8816.Syntax;
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