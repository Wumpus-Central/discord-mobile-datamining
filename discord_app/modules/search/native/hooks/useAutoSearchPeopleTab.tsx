// === Module 19065: useAutoSearchPeopleTab ===

// Module 19065 (useAutoSearchPeopleTab)
import _mod12 from "module_12" /* 12 */;
import UserAffinitiesActionCreators from "UserAffinitiesActionCreators" /* 9296 */;
import SearchPlatformUtilsDefault from "SearchPlatformUtils" /* 14103 */;
import SearchPlatformActionCreatorsDefault from "SearchPlatformActionCreators" /* 14128 */;
import noop from "module_19" /* 19 */;
import SearchQueryStore from "SearchQueryStore" /* 14117 */;

require = fn;
let closure_5 = fn(14119).SEARCH_TEXT_INPUT_DEBOUNCE_TIME;
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/hooks/useAutoSearchPeopleTab.tsx");

export function useAutoSearchPeopleTab(searchContext, arg1) {
  closure_0 = searchContext;
  closure_1 = arg1;
  items = [arg1, searchContext];
  const effect = noop.useEffect(() => {
    if (!closure_1) {
      const userAffinitiesV2 = UserAffinitiesActionCreators.fetchUserAffinitiesV2();
      SearchPlatformActionCreatorsDefault.searchPeopleTab(closure_0, "");
    }
  }, items);
  const items1 = [searchContext, arg1];
  const effect1 = noop.useEffect(() => {
    if (!closure_1) {
      const debounceResult = _mod12.debounce((searchQueryString) => {
        if (!autocompleteVisible.isAutocompleteVisible(searchContext)) {
          closure_1(14128).searchPeopleTab(searchContext, searchQueryString);
          const obj = closure_1(14128);
        }
      }, closure_5);
      return SearchPlatformUtilsDefault.subscribeTextInputValue(closure_0, debounceResult);
    }
  }, items1);
  const items2 = [searchContext];
  const effect2 = noop.useEffect(() => () => {
    closure_1(14128).cleanupPeopleTab(searchContext);
  }, items2);
}