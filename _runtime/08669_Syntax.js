// === Module 8669: Syntax ===

// Module 8669 (Syntax)
import reviveBigInts from "reviveBigInts" /* 8670 */;
import DiscordMarkdownDefault from "DiscordMarkdown" /* 8671 */;
import _mod8672 from "module_8672" /* 8672 */;


export const Syntax = _mod8672.Syntax;
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