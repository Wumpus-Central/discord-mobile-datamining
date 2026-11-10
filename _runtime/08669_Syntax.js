// _runtime/08669_Syntax.js
import reviveBigInts from "08670_reviveBigInts.js";
import DiscordMarkdownDefault from "08671_DiscordMarkdown.js";
import _mod8672 from "metro/08672__.js";

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
