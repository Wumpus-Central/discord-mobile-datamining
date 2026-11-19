// === Module 8755: Syntax ===

// Module 8755 (Syntax)
import reviveBigInts from "reviveBigInts" /* 8756 */;
import DiscordMarkdownDefault from "DiscordMarkdown" /* 8757 */;
import _mod8758 from "module_8758" /* 8758 */;


export const Syntax = _mod8758.Syntax;
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