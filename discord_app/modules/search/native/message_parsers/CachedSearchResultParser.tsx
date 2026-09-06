// discord_app/modules/search/native/message_parsers/CachedSearchResultParser.tsx
import size from "../../../../../_runtime/metro/00002__.js";

let result = size.fileFinishedImporting("modules/search/native/message_parsers/CachedSearchResultParser.tsx");

export const CachedSearchResultParser = function CachedSearchResultParser() {
  const obj = Object.create(new.target.prototype);
  obj.resultsCache = new Map();
  obj.parse = function parse(id) {
    const resultsCache = obj.resultsCache;
    value = resultsCache.get(id.id);
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
