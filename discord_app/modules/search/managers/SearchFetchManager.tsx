// discord_app/modules/search/managers/SearchFetchManager.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import cleanUp from "AbstractSearchFetchManager.tsx";
import fetch from "../SearchFetcher.tsx";

const AbstractSearchFetchManager = cleanUp.AbstractSearchFetchManager;
class SearchFetchManager extends AbstractSearchFetchManager {
}
SearchFetchManager.prototype["create"] = function create(arg0) {
  ({ id, searchType, searchQuery } = arg0);
  this.cancel(id);
  const searchFetcherImpl = new fetch.SearchFetcherImpl(id, searchType, searchQuery);
  const result = this.set(id, searchFetcherImpl);
  return searchFetcherImpl;
};
const searchFetchManager = new SearchFetchManager();
let result = obj132.fileFinishedImporting("modules/search/managers/SearchFetchManager.tsx");

export default searchFetchManager;