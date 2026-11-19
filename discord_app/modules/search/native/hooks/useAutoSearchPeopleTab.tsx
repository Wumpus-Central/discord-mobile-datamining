// === Module 18880: useAutoSearchPeopleTab ===

// Module 18880 (useAutoSearchPeopleTab)
import apply from "apply" /* 12 */;
import UserAffinitiesActionCreators from "UserAffinitiesActionCreators" /* 9531 */;
import SearchPlatformUtilsDefault from "SearchPlatformUtils" /* 13107 */;
import SearchPlatformActionCreatorsDefault from "SearchPlatformActionCreators" /* 13132 */;
import noop from "module_19" /* 19 */;
import SearchQueryStore from "SearchQueryStore" /* 13121 */;

require = fn;
let closure_5 = fn(13123).SEARCH_TEXT_INPUT_DEBOUNCE_TIME;
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
          closure_1(13132).searchPeopleTab(searchContext, searchQueryString);
          const obj = closure_1(13132);
        }
      }, closure_5);
      return SearchPlatformUtilsDefault.subscribeTextInputValue(closure_0, debounceResult);
    }
  }, items1);
  const items2 = [searchContext];
  const effect2 = noop.useEffect(() => () => {
    closure_1(13132).cleanupPeopleTab(searchContext);
  }, items2);
}