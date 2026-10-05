// === Module 16903: useAutoSearchPeopleTab ===

// Module 16903 (useAutoSearchPeopleTab)
import _mod12 from "module_12" /* 12 */;
import UserAffinitiesActionCreators from "UserAffinitiesActionCreators" /* 9509 */;
import SearchPlatformUtilsDefault from "SearchPlatformUtils" /* 11966 */;
import SearchPlatformConstants from "SearchPlatformConstants" /* 11977 */;
import SearchPlatformActionCreatorsDefault from "SearchPlatformActionCreators" /* 11985 */;
import react from "react" /* 19 */;
import SearchQueryStore from "SearchQueryStore" /* 11967 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let closure_5 = SearchPlatformConstants.SEARCH_TEXT_INPUT_DEBOUNCE_TIME;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  let autocompleteVisible;
  let closure_0;
  _require = arg0;
  let closure_1 = arg1;
  let obj = require("react");
  const cResult = obj.c(11);
  if (cResult[0] === arg1) {
    let tmp2;
    let tmp3;
    if (cResult[1] === arg0) {
      tmp2 = cResult[2];
      tmp3 = cResult[3];
    }
    const effect = react.useEffect(tmp2, tmp3);
    if (cResult[4] === arg1) {
      let tmp5;
      let tmp6;
      let tmp9;
      let tmp8;
      if (cResult[5] === arg0) {
        tmp5 = cResult[6];
        tmp6 = cResult[7];
      }
      const effect1 = react.useEffect(tmp5, tmp6);
      if (cResult[8] !== arg0) {
        const fn3 = function p() {
          return () => {
            const obj = closure_1(dependencyMap[6]);
            obj.cleanupPeopleTab(closure_1_0);
          };
        };
        const items = [arg0];
        cResult[8] = arg0;
        cResult[9] = fn3;
        cResult[10] = items;
        tmp9 = items;
        tmp8 = fn3;
      } else {
        tmp8 = cResult[9];
        tmp9 = cResult[10];
      }
      const effect2 = react.useEffect(tmp8, tmp9);
    }
    const fn2 = function n() {
      if (!closure_1) {
        let obj = _mod12;
        const debounceResult = obj.debounce((searchQueryString) => {
          if (!autocompleteVisible.isAutocompleteVisible(closure_1_0)) {
            const obj = closure_1(dependencyMap[6]);
            obj.searchPeopleTab(closure_1_0, searchQueryString);
          }
        }, closure_5);
        const obj2 = SearchPlatformUtilsDefault;
        return obj2.subscribeTextInputValue(closure_0, debounceResult);
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
      const obj = UserAffinitiesActionCreators;
      const userAffinitiesV2 = obj.fetchUserAffinitiesV2();
      const obj2 = SearchPlatformActionCreatorsDefault;
      obj2.searchPeopleTab(closure_0, "");
    }
  };
  const items2 = [arg1, arg0];
  cResult[0] = arg1;
  cResult[1] = arg0;
  cResult[2] = fn;
  cResult[3] = items2;
  tmp3 = items2;
  tmp2 = fn;
}) : ((arg0, arg1) => {
  let autocompleteVisible;
  let closure_0 = arg0;
  let closure_1 = arg1;
  const items = [arg1, arg0];
  const effect = react.useEffect(() => {
    if (!closure_1) {
      const obj = UserAffinitiesActionCreators;
      const userAffinitiesV2 = obj.fetchUserAffinitiesV2();
      const obj2 = SearchPlatformActionCreatorsDefault;
      obj2.searchPeopleTab(closure_0, "");
    }
  }, items);
  const items1 = [arg0, arg1];
  const effect1 = react.useEffect(() => {
    if (!closure_1) {
      let obj = _mod12;
      const debounceResult = obj.debounce((searchQueryString) => {
        if (!autocompleteVisible.isAutocompleteVisible(closure_1_0)) {
          const obj = closure_1(dependencyMap[6]);
          obj.searchPeopleTab(closure_1_0, searchQueryString);
        }
      }, closure_5);
      const obj2 = SearchPlatformUtilsDefault;
      return obj2.subscribeTextInputValue(closure_0, debounceResult);
    }
  }, items1);
  const items2 = [arg0];
  const effect2 = react.useEffect(() => () => {
    const obj = closure_1(dependencyMap[6]);
    obj.cleanupPeopleTab(closure_1_0);
  }, items2);
});
const result = size.fileFinishedImporting("modules/search/native/hooks/useAutoSearchPeopleTab.tsx");

export const useAutoSearchPeopleTab = tmp2;