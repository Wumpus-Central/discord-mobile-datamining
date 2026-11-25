// === Module 18986: useAutoSearchPeopleTab ===

// Module 18986 (useAutoSearchPeopleTab)
import apply from "apply" /* 12 */;
import UserAffinitiesActionCreators from "UserAffinitiesActionCreators" /* 10401 */;
import SearchPlatformUtilsDefault from "SearchPlatformUtils" /* 13234 */;
import SearchPlatformActionCreatorsDefault from "SearchPlatformActionCreators" /* 13265 */;
import noop from "module_19" /* 19 */;
import SearchQueryStore from "SearchQueryStore" /* 13248 */;

require = fn;
let closure_5 = fn(13250).SEARCH_TEXT_INPUT_DEBOUNCE_TIME;
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
      const debounceResult = apply.debounce((searchQueryString) => {
        if (!autocompleteVisible.isAutocompleteVisible(searchContext)) {
          closure_1(13265).searchPeopleTab(searchContext, searchQueryString);
          const obj = closure_1(13265);
        }
      }, closure_5);
      return SearchPlatformUtilsDefault.subscribeTextInputValue(closure_0, debounceResult);
    }
  }, items1);
  const items2 = [searchContext];
  const effect2 = noop.useEffect(() => () => {
    closure_1(13265).cleanupPeopleTab(searchContext);
  }, items2);
}