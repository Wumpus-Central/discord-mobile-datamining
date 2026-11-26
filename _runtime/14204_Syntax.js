// === Module 14204: Syntax ===

// Module 14204 (Syntax)
import reviveBigInts from "reviveBigInts" /* 14205 */;
import DiscordMarkdownDefault from "DiscordMarkdown" /* 14206 */;
import _mod14207 from "module_14207" /* 14207 */;


export const Syntax = _mod14207.Syntax;
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