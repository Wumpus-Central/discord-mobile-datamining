// === Module 16903: useAutoSearchPeopleTab ===

// Module 16903 (useAutoSearchPeopleTab)
import _mod12 from "module_12" /* 12 */;
import UserAffinitiesActionCreators from "UserAffinitiesActionCreators" /* 9509 */;
import SearchPlatformUtilsDefault from "SearchPlatformUtils" /* 11966 */;
import SearchPlatformActionCreatorsDefault from "SearchPlatformActionCreators" /* 11985 */;
import noop from "module_19" /* 19 */;
import SearchQueryStore from "SearchQueryStore" /* 11967 */;

const require = globalThis.__r;

require = fn;
let closure_5 = fn(11977).SEARCH_TEXT_INPUT_DEBOUNCE_TIME;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/hooks/useAutoSearchPeopleTab.tsx");

export const useAutoSearchPeopleTab = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  _require = arg0;
  closure_1 = arg1;
  const cResult = require("c").c(11);
  if (cResult[0] === arg1) {
    if (cResult[1] === arg0) {
      let tmp2 = cResult[2];
      let tmp3 = cResult[3];
    }
    const effect = noop.useEffect(tmp2, tmp3);
    if (cResult[4] === arg1) {
      if (cResult[5] === arg0) {
        let tmp5 = cResult[6];
        let tmp6 = cResult[7];
      }
      const effect1 = noop.useEffect(tmp5, tmp6);
      if (cResult[8] !== arg0) {
        const fn3 = function p() {
          return () => {
            closure_1(11985).cleanupPeopleTab(closure_1_0);
          };
        };
        const items = [arg0];
        cResult[8] = arg0;
        cResult[9] = fn3;
        cResult[10] = items;
        let tmp9 = items;
        let tmp8 = fn3;
      } else {
        tmp8 = cResult[9];
        tmp9 = cResult[10];
      }
      const effect2 = noop.useEffect(tmp8, tmp9);
    }
    const fn2 = function n() {
      if (!closure_1) {
        const debounceResult = _mod12.debounce((searchQueryString) => {
          if (!autocompleteVisible.isAutocompleteVisible(closure_1_0)) {
            closure_1(11985).searchPeopleTab(closure_1_0, searchQueryString);
            const obj = closure_1(11985);
          }
        }, closure_5);
        return SearchPlatformUtilsDefault.subscribeTextInputValue(closure_0, debounceResult);
      }
    };
    const items1 = [arg0, arg1];
    cResult[4] = arg1;
    cResult[5] = arg0;
    cResult[6] = fn2;
    cResult[7] = items1;
    tmp6 = items1;
    tmp5 = fn2;
  }
  const fn = function f() {
    if (!closure_1) {
      const userAffinitiesV2 = UserAffinitiesActionCreators.fetchUserAffinitiesV2();
      SearchPlatformActionCreatorsDefault.searchPeopleTab(closure_0, "");
    }
  };
  const items2 = [arg1, arg0];
  cResult[0] = arg1;
  cResult[1] = arg0;
  cResult[2] = fn;
  cResult[3] = items2;
  tmp3 = items2;
  tmp2 = fn;
  let obj = require("c");
}) : ((arg0, arg1) => {
  closure_0 = arg0;
  closure_1 = arg1;
  const items = [arg1, arg0];
  const effect = noop.useEffect(() => {
    if (!closure_1) {
      const userAffinitiesV2 = UserAffinitiesActionCreators.fetchUserAffinitiesV2();
      SearchPlatformActionCreatorsDefault.searchPeopleTab(closure_0, "");
    }
  }, items);
  const items1 = [arg0, arg1];
  const effect1 = noop.useEffect(() => {
    if (!closure_1) {
      const debounceResult = _mod12.debounce((searchQueryString) => {
        if (!autocompleteVisible.isAutocompleteVisible(closure_1_0)) {
          closure_1(11985).searchPeopleTab(closure_1_0, searchQueryString);
          const obj = closure_1(11985);
        }
      }, closure_5);
      return SearchPlatformUtilsDefault.subscribeTextInputValue(closure_0, debounceResult);
    }
  }, items1);
  const items2 = [arg0];
  const effect2 = noop.useEffect(() => () => {
    closure_1(11985).cleanupPeopleTab(closure_1_0);
  }, items2);
});