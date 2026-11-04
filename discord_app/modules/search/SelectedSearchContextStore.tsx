// === Module 14113: SelectedSearchContextStore ===

// Module 14113 (SelectedSearchContextStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import _modDef5988 from "module_5988" /* 5988 */;

function handleSearchContextUpdate(searchContext) {
  searchContext = searchContext.searchContext;
  if (_modDef5988(c2, searchContext)) {
    return false;
  } else {
    c2 = searchContext;
  }
}
let c2 = null;
const Store = initializeDefault.Store;
class SelectedSearchContextStore extends Store {
}
SelectedSearchContextStore.prototype["getSelectedSearchContext"] = function getSelectedSearchContext() {
  return c2;
};
SelectedSearchContextStore.displayName = "SelectedSearchContextStore";
const selectedSearchContextStore = new SelectedSearchContextStore(DispatcherDefault, {
  SEARCH_AUTOCOMPLETE_INITIALIZE: handleSearchContextUpdate,
  SEARCH_AUTOCOMPLETE_QUERY_UPDATE: handleSearchContextUpdate,
  SEARCH_QUERY_TEXT_CLEAR: function handleSearchQueryTextClear() {
    c2 = null;
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/SelectedSearchContextStore.tsx");

export default selectedSearchContextStore;