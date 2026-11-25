// === Module 14152: Syntax ===

// Module 14152 (Syntax)
import reviveBigInts from "reviveBigInts" /* 14153 */;
import DiscordMarkdownDefault from "DiscordMarkdown" /* 14154 */;
import _mod14155 from "module_14155" /* 14155 */;


export const Syntax = _mod14155.Syntax;
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