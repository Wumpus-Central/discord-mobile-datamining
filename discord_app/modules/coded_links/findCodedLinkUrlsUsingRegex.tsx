// discord_app/modules/coded_links/findCodedLinkUrlsUsingRegex.tsx
import importDefaultResult from "../../../_runtime/01488_ip.js";

function trimTrailingPunctuation(str) {
  return str.replace(closure_2, "");
}
const regExp = new RegExp("(?:(?:(?:https?:)?//)|www\\.)(?:[^\\s:@]+(?::[^\\s@]*)?@)?(?:localhost|" + importDefaultResult.v4().source + "|(?:[a-z\\u00a1-\\uffff0-9-_]+\\.)+(?:(?:[a-z\\u00a1-\\uffff]{2,})))(?::\\d{2,5})?(?:[/?#][^\\s\"()\\[\\]<>]*)?", "ig");
const re1 = /`{3,}[\s\S]*?(?:`{3,}|$)|(`{1,2})[^`]+\1(?!`)/g;
const re2 = /[.,;:?'*_~|]+$/;
const result = require("set").fileFinishedImporting("modules/coded_links/findCodedLinkUrlsUsingRegex.tsx");

export default function findCodedLinkUrlsUsingRegex(str) {
  const match = str.replaceAll(closure_1, " ").match(regExp);
  let mapped;
  if (match != null) {
    mapped = match.map(trimTrailingPunctuation);
  }
  if (mapped == null) {
    mapped = [];
  }
  return mapped;
};