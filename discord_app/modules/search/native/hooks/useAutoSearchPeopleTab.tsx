// === Module 18797: useAutoSearchPeopleTab ===

// Module 18797 (useAutoSearchPeopleTab)
import _mod12 from "module_12" /* 12 */;
import UserAffinitiesActionCreators from "UserAffinitiesActionCreators" /* 9151 */;
import SearchPlatformUtilsDefault from "SearchPlatformUtils" /* 13871 */;
import SearchPlatformActionCreatorsDefault from "SearchPlatformActionCreators" /* 13896 */;
import noop from "module_19" /* 19 */;
import SearchQueryStore from "SearchQueryStore" /* 13885 */;

require = fn;
let closure_5 = fn(13887).SEARCH_TEXT_INPUT_DEBOUNCE_TIME;
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
          closure_1(13896).searchPeopleTab(searchContext, searchQueryString);
          const obj = closure_1(13896);
        }
      }, closure_5);
      return SearchPlatformUtilsDefault.subscribeTextInputValue(closure_0, debounceResult);
    }
  }, items1);
  const items2 = [searchContext];
  const effect2 = noop.useEffect(() => () => {
    closure_1(13896).cleanupPeopleTab(searchContext);
  }, items2);
}