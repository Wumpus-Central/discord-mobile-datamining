// === Module 13847: findCodedLinkUrlsUsingRegex ===

// Module 13847 (findCodedLinkUrlsUsingRegex)
import ip from "ip" /* 1366 */;

function trimTrailingPunctuation(str) {
  return str.replace(re2, "");
}
const regExp = new RegExp("(?:(?:(?:https?:)?//)|www\\.)(?:[^\\s:@]+(?::[^\\s@]*)?@)?(?:localhost|" + ip.v4().source + "|(?:[a-z\\u00a1-\\uffff0-9-_]+\\.)+(?:(?:[a-z\\u00a1-\\uffff]{2,})))(?::\\d{2,5})?(?:[/?#][^\\s\"()\\[\\]<>]*)?", "ig");
const re1 = /`{3,}[\s\S]*?(?:`{3,}|$)|(`{1,2})[^`]+\1(?!`)/g;
const re2 = /[.,;:?'*_~|]+$/;
const size = fn(2);
const result = size.fileFinishedImporting("modules/coded_links/findCodedLinkUrlsUsingRegex.tsx");

export default function findCodedLinkUrlsUsingRegex(str) {
  str = str.replaceAll(re1, " ");
  const match = str.match(regExp);
  let mapped;
  if (match != null) {
    mapped = match.map(trimTrailingPunctuation);
  }
  if (mapped == null) {
    mapped = [];
  }
  return mapped;
};