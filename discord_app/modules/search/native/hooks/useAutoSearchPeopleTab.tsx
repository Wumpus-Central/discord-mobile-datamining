// discord_app/modules/search/native/hooks/useAutoSearchPeopleTab.tsx
import noop from "../../../../../_runtime/00019_noop.js";
import prototype from "../stores/SearchQueryStore.tsx";
import { SEARCH_TEXT_INPUT_DEBOUNCE_TIME as closure_5 } from "../SearchPlatformConstants.tsx";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/search/native/hooks/useAutoSearchPeopleTab.tsx");

export const useAutoSearchPeopleTab = function useAutoSearchPeopleTab(searchContext, arg1) {
  closure_0 = searchContext;
  closure_1 = arg1;
  const items = [arg1, searchContext];
  const effect = React.useEffect(() => {
    if (!callback) {
      const userAffinitiesV2 = searchContext(dependencyMap[3]).fetchUserAffinitiesV2();
      const obj = searchContext(dependencyMap[3]);
      callback(dependencyMap[4]).searchPeopleTab(searchContext, "");
      const obj2 = callback(dependencyMap[4]);
    }
  }, items);
  const items1 = [searchContext, arg1];
  const effect1 = React.useEffect(() => {
    if (!callback) {
      let obj = searchContext(dependencyMap[5]);
      const debounceResult = searchContext(dependencyMap[5]).debounce((searchQueryString) => {
        if (!closure_1_4.isAutocompleteVisible(closure_0)) {
          closure_1_1(closure_1_2[4]).searchPeopleTab(closure_0, searchQueryString);
          const obj = closure_1_1(closure_1_2[4]);
        }
      }, closure_1_5);
      return callback(dependencyMap[6]).subscribeTextInputValue(searchContext, debounceResult);
    }
  }, items1);
  const items2 = [searchContext];
  const effect2 = React.useEffect(() => () => {
    closure_1_1(closure_1_2[4]).cleanupPeopleTab(closure_0);
  }, items2);
};