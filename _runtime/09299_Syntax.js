// === Module 9299: Syntax ===

// Module 9299 (Syntax)
import reviveBigInts from "reviveBigInts" /* 9300 */;
import DiscordMarkdownDefault from "DiscordMarkdown" /* 9301 */;
import _mod9302 from "module_9302" /* 9302 */;


export const Syntax = _mod9302.Syntax;
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