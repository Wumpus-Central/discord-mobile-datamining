// discord_app/modules/search/native/hooks/useAutoSearchPeopleTab.tsx
import _mod12 from "../../../../../_runtime/metro/00012__.js";
import UserAffinitiesActionCreators from "../../../user_affinities/UserAffinitiesActionCreators.tsx";
import SearchPlatformUtilsDefault from "../SearchPlatformUtils.tsx";
import SearchPlatformActionCreatorsDefault from "../SearchPlatformActionCreators.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import SearchQueryStore from "../stores/SearchQueryStore.tsx";

require = fn;
let closure_5 = fn(12353).SEARCH_TEXT_INPUT_DEBOUNCE_TIME;
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/hooks/useAutoSearchPeopleTab.tsx");

export const useAutoSearchPeopleTab = function useAutoSearchPeopleTab(searchContext, arg1) {
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
          closure_1(12361).searchPeopleTab(searchContext, searchQueryString);
          const obj = closure_1(12361);
        }
      }, closure_5);
      return SearchPlatformUtilsDefault.subscribeTextInputValue(closure_0, debounceResult);
    }
  }, items1);
  const items2 = [searchContext];
  const effect2 = noop.useEffect(
    () => () => {
      closure_1(12361).cleanupPeopleTab(searchContext);
    },
    items2,
  );
};
