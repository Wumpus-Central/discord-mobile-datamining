// === Module 9300: Syntax ===

// Module 9300 (Syntax)
import reviveBigInts from "reviveBigInts" /* 9301 */;
import DiscordMarkdownDefault from "DiscordMarkdown" /* 9302 */;
import _mod9303 from "module_9303" /* 9303 */;


export const Syntax = _mod9303.Syntax;
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