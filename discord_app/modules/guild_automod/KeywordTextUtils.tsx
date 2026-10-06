// === Module 17729: KeywordTextUtils ===

// Module 17729 (KeywordTextUtils)
import size from "module_2" /* 2 */;

let set;

const re0 = /[\t\n,]/g;
const re1 = /\s{2,}/g;
const re2 = /[*"']/g;
const re3 = /\r?\n/;
const result = size.fileFinishedImporting("modules/guild_automod/KeywordTextUtils.tsx");

export const getKeywordsFromString = function getKeywordsFromString(str) {
  const parts = str.split(re0);
  const mapped = parts.map((item) => {
    const str = item.replace(closure_1_1, " ");
    return str.trim();
  });
  return mapped.filter((item) => item.length > 0);
};
export const dedupeKeywords = function dedupeKeywords(items) {
  set = new Set(items);
  return Array.from(set);
};
export const sortKeywords = function sortKeywords(arr) {
  return arr.sort((str, str2) => {
    const replaced = str.replaceAll(closure_1_2, "");
    return replaced.localeCompare(str2.replaceAll(closure_1_2, ""));
  });
};
export const getKeywordStringFromKeywordFilter = function getKeywordStringFromKeywordFilter(keywords) {
  return keywords.join(", ");
};
export const isKeywordParseableString = function isKeywordParseableString(arr) {
  const hasItem = arr.includes("\n") || arr.includes(",");
  return hasItem;
};
export const getRegexPatternsFromString = function getRegexPatternsFromString(str) {
  const parts = str.split(re3);
  const mapped = parts.map((item) => item.trim());
  return mapped.filter(Boolean);
};
export const getStringFromRegexPatterns = function getStringFromRegexPatterns(keywords) {
  return keywords.join("\n");
};