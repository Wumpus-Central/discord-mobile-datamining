// discord_app/modules/search/SelectedSearchContextStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import _modDef5202 from "../../../_runtime/metro/05202__.js";

function handleSearchContextUpdate(searchContext) {
  searchContext = searchContext.searchContext;
  if (_modDef5202(c2, searchContext)) {
    return false;
  } else {
    c2 = searchContext;
  }
}
let c2 = null;
const Store = initializeDefault.Store;
class SelectedSearchContextStore extends Store {}
SelectedSearchContextStore.prototype["getSelectedSearchContext"] = function getSelectedSearchContext() {
  return c2;
};
SelectedSearchContextStore.displayName = "SelectedSearchContextStore";
const selectedSearchContextStore = new SelectedSearchContextStore(DispatcherDefault, {
  SEARCH_AUTOCOMPLETE_INITIALIZE: handleSearchContextUpdate,
  SEARCH_AUTOCOMPLETE_QUERY_UPDATE: handleSearchContextUpdate,
  SEARCH_QUERY_TEXT_CLEAR: function handleSearchQueryTextClear() {
    c2 = null;
  },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/SelectedSearchContextStore.tsx");

export default selectedSearchContextStore;
