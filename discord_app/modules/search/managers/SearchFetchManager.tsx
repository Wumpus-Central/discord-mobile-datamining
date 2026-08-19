// === Module 11522: create ===

// Module 11522 (create)
import obj132 from "obj132" /* 2 */;
import cleanUp from "cleanUp" /* 11520 */;
import fetch from "fetch" /* 11521 */;

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