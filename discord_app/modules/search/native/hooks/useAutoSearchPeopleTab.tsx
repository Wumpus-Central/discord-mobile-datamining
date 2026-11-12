// discord_app/modules/search/native/hooks/useAutoSearchPeopleTab.tsx
import apply from "../../../../../_runtime/00012_apply.js";
import UserAffinitiesActionCreators from "../../../user_affinities/UserAffinitiesActionCreators.tsx";
import SearchPlatformUtilsDefault from "../SearchPlatformUtils.tsx";
import SearchPlatformActionCreatorsDefault from "../SearchPlatformActionCreators.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import SearchQueryStore from "../stores/SearchQueryStore.tsx";

require = fn;
let closure_5 = fn(14643).SEARCH_TEXT_INPUT_DEBOUNCE_TIME;
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
          closure_1(14652).searchPeopleTab(searchContext, searchQueryString);
          const obj = closure_1(14652);
        }
      }, closure_5);
      return SearchPlatformUtilsDefault.subscribeTextInputValue(closure_0, debounceResult);
    }
  }, items1);
  const items2 = [searchContext];
  const effect2 = noop.useEffect(
    () => () => {
      closure_1(14652).cleanupPeopleTab(searchContext);
    },
    items2,
  );
}
