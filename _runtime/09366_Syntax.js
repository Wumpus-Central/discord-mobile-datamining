// === Module 9366: Syntax ===

// Module 9366 (Syntax)
import reviveBigInts from "reviveBigInts" /* 9367 */;
import DiscordMarkdownDefault from "DiscordMarkdown" /* 9368 */;
import _mod9369 from "module_9369" /* 9369 */;


export const Syntax = _mod9369.Syntax;
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