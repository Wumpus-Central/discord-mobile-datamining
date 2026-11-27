// === Module 14211: Syntax ===

// Module 14211 (Syntax)
import reviveBigInts from "reviveBigInts" /* 14212 */;
import DiscordMarkdownDefault from "DiscordMarkdown" /* 14213 */;
import _mod14214 from "module_14214" /* 14214 */;


export const Syntax = _mod14214.Syntax;
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