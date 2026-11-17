// === Module 9375: Syntax ===

// Module 9375 (Syntax)
import reviveBigInts from "reviveBigInts" /* 9376 */;
import DiscordMarkdownDefault from "DiscordMarkdown" /* 9377 */;
import _mod9378 from "module_9378" /* 9378 */;


export const Syntax = _mod9378.Syntax;
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