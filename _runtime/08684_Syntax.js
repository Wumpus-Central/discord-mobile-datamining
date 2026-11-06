// === Module 8684: Syntax ===

// Module 8684 (Syntax)
import reviveBigInts from "reviveBigInts" /* 8685 */;
import DiscordMarkdownDefault from "DiscordMarkdown" /* 8686 */;
import _mod8687 from "module_8687" /* 8687 */;


export const Syntax = _mod8687.Syntax;
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