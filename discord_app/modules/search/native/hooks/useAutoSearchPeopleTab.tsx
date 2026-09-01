// === Module 16303: useAutoSearchPeopleTab ===

// Module 16303 (useAutoSearchPeopleTab)
import closure_3 from "noop" /* 19 */;
import closure_4 from "prototype" /* 11906 */;
import { SEARCH_TEXT_INPUT_DEBOUNCE_TIME as closure_5 } from "SEARCH_TEXT_INPUT_DEBOUNCE_TIME" /* 11920 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/search/native/hooks/useAutoSearchPeopleTab.tsx");

export const useAutoSearchPeopleTab = function useAutoSearchPeopleTab(searchContext, arg1) {
  closure_0 = searchContext;
  closure_1 = arg1;
  const items = [arg1, searchContext];
  const effect = React.useEffect(() => {
    if (!callback) {
      const userAffinitiesV2 = searchContext(closure_1_2[3]).fetchUserAffinitiesV2();
      const obj = searchContext(closure_1_2[3]);
      callback(closure_1_2[4]).searchPeopleTab(searchContext, "");
      const obj2 = callback(closure_1_2[4]);
    }
  }, items);
  const items1 = [searchContext, arg1];
  const effect1 = React.useEffect(() => {
    if (!callback) {
      let obj = searchContext(closure_1_2[5]);
      const debounceResult = searchContext(closure_1_2[5]).debounce((searchQueryString) => {
        if (!closure_1_4.isAutocompleteVisible(closure_0)) {
          closure_1_1(closure_1_2[4]).searchPeopleTab(closure_0, searchQueryString);
          const obj = closure_1_1(closure_1_2[4]);
        }
      }, closure_1_5);
      return callback(closure_1_2[6]).subscribeTextInputValue(searchContext, debounceResult);
    }
  }, items1);
  const items2 = [searchContext];
  const effect2 = React.useEffect(() => () => {
    closure_1_1(closure_1_2[4]).cleanupPeopleTab(closure_0);
  }, items2);
};