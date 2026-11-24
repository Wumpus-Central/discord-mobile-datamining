// === Module 14029: Syntax ===

// Module 14029 (Syntax)
import reviveBigInts from "reviveBigInts" /* 14030 */;
import DiscordMarkdownDefault from "DiscordMarkdown" /* 14031 */;
import _mod14032 from "module_14032" /* 14032 */;


export const Syntax = _mod14032.Syntax;
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