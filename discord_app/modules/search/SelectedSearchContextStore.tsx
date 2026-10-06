// discord_app/modules/search/SelectedSearchContextStore.tsx
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import isEqualDefault from "../../../_runtime/05016_isEqual.js";
import size from "../../../_runtime/metro/00002__.js";

function handleSearchContextUpdate(searchContext) {
  searchContext = searchContext.searchContext;
  if (isEqualDefault(c2, searchContext)) {
    return false;
  } else {
    c2 = searchContext;
  }
}
let c2 = null;
const Store = get_initializedDefault.Store;
class SelectedSearchContextStore extends Store {
  getSelectedSearchContext() {
    return c2;
  }
}
const prototype = SelectedSearchContextStore.prototype;
SelectedSearchContextStore.displayName = "SelectedSearchContextStore";
const obj = {
  SEARCH_AUTOCOMPLETE_INITIALIZE: handleSearchContextUpdate,
  SEARCH_AUTOCOMPLETE_QUERY_UPDATE: handleSearchContextUpdate,
  SEARCH_QUERY_TEXT_CLEAR: function handleSearchQueryTextClear() {
    c2 = null;
  },
};
const selectedSearchContextStore = new SelectedSearchContextStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/search/SelectedSearchContextStore.tsx");

export default selectedSearchContextStore;
