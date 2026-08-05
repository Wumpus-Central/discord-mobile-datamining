// discord_app/modules/search/managers/SearchFetchManager.tsx
import { AbstractSearchFetchManager } from "cleanUp";
import { fetch } from "../SearchFetcher.tsx";

class SearchFetchManager extends AbstractSearchFetchManager {
}
SearchFetchManager.prototype["create"] = function create(arg0) {
  let id;
  let searchQuery;
  let searchType;
  ({ id, searchType, searchQuery } = arg0);
  this.cancel(id);
  const searchFetcherImpl = new fetch /* fetch */.SearchFetcherImpl(id, searchType, searchQuery);
  const result = this.set(id, searchFetcherImpl);
  return searchFetcherImpl;
};
const searchFetchManager = new SearchFetchManager();
let result = require("set").fileFinishedImporting("modules/search/managers/SearchFetchManager.tsx");

export default searchFetchManager;