// === Module 12072: SearchFetchManager ===

// Module 12072 (SearchFetchManager)
import AbstractSearchFetchManager2 from "AbstractSearchFetchManager" /* 12070 */;
import SearchFetcher from "SearchFetcher" /* 12071 */;
import size from "module_2" /* 2 */;

const AbstractSearchFetchManager = AbstractSearchFetchManager2.AbstractSearchFetchManager;
class SearchFetchManager extends AbstractSearchFetchManager {
}
SearchFetchManager.prototype["create"] = function create(arg0) {
  ({ id, searchType, searchQuery } = arg0);
  this.cancel(id);
  const searchFetcherImpl = new SearchFetcher.SearchFetcherImpl(id, searchType, searchQuery);
  const result = this.set(id, searchFetcherImpl);
  return searchFetcherImpl;
};
const searchFetchManager = new SearchFetchManager();
let result = size.fileFinishedImporting("modules/search/managers/SearchFetchManager.tsx");

export default searchFetchManager;