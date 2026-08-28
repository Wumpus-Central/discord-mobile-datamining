// === Module 16223: CachedSearchResultParser ===

// Module 16223 (CachedSearchResultParser)
import set from "set" /* 2 */;

let result = set.fileFinishedImporting("modules/search/native/message_parsers/CachedSearchResultParser.tsx");

export const CachedSearchResultParser = function CachedSearchResultParser() {
  const obj = Object.create(new.target.prototype);
  obj.resultsCache = new Map();
  obj.parse = function parse(id) {
    const resultsCache = obj.resultsCache;
    const value = resultsCache.get(id.id);
    if (null != value) {
      return value;
    } else {
      const searchResults = obj.getSearchResults(id);
      const resultsCache2 = obj.resultsCache;
      const result = resultsCache2.set(id.id, searchResults);
      return searchResults;
    }
  };
  return obj;
}.prototype;