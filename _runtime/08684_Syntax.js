// _runtime/08684_Syntax.js
import reviveBigInts from "08685_reviveBigInts.js";
import DiscordMarkdownDefault from "08686_DiscordMarkdown.js";
import _mod8687 from "metro/08687__.js";

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
