// === Module 19616: KeywordTextUtils ===

// Module 19616 (KeywordTextUtils)
import size from "module_2" /* 2 */;

const re0 = /[\t\n,]/g;
const re1 = /\s{2,}/g;
const re2 = /[*"']/g;
const re3 = /\r?\n/;
const result = size.fileFinishedImporting("modules/guild_automod/KeywordTextUtils.tsx");

export function getKeywordsFromString(str) {
  const parts = str.split(re0);
  const mapped = parts.map((item) => item.replace(closure_1_1, " ").trim());
  return mapped.filter((item) => item.length > 0);
}
export function dedupeKeywords(items) {
  return Array.from(new Set(items));
}
export function sortKeywords(arr) {
  return arr.sort((str, str2) => {
    const replaced = str.replaceAll(closure_1_2, "");
    return replaced.localeCompare(str2.replaceAll(closure_1_2, ""));
  });
}
export function getKeywordStringFromKeywordFilter(join) {
  return join.join(", ");
}
export function isKeywordParseableString(arr) {
  let hasItem = arr.includes("\n");
  if (!hasItem) {
    hasItem = arr.includes(",");
  }
  return hasItem;
}
export function getRegexPatternsFromString(str) {
  const parts = str.split(re3);
  const mapped = parts.map((item) => item.trim());
  return mapped.filter(Boolean);
}
export function getStringFromRegexPatterns(join) {
  return join.join("\n");
}