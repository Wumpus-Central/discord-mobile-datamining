// === Module 18755: useAutoSearchPeopleTab ===

// Module 18755 (useAutoSearchPeopleTab)
import _mod12 from "module_12" /* 12 */;
import UserAffinitiesActionCreators from "UserAffinitiesActionCreators" /* 9132 */;
import SearchPlatformUtilsDefault from "SearchPlatformUtils" /* 13836 */;
import SearchPlatformActionCreatorsDefault from "SearchPlatformActionCreators" /* 13861 */;
import noop from "module_19" /* 19 */;
import SearchQueryStore from "SearchQueryStore" /* 13850 */;

require = fn;
let closure_5 = fn(13852).SEARCH_TEXT_INPUT_DEBOUNCE_TIME;
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/hooks/useAutoSearchPeopleTab.tsx");

export function useAutoSearchPeopleTab(searchContext, arg1) {
  closure_0 = searchContext;
  closure_1 = arg1;
  const items = [arg1, searchContext];
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
          closure_1(13861).searchPeopleTab(searchContext, searchQueryString);
          const obj = closure_1(13861);
        }
      }, closure_5);
      return SearchPlatformUtilsDefault.subscribeTextInputValue(closure_0, debounceResult);
    }
  }, items1);
  const items2 = [searchContext];
  const effect2 = noop.useEffect(() => () => {
    closure_1(13861).cleanupPeopleTab(searchContext);
  }, items2);
}