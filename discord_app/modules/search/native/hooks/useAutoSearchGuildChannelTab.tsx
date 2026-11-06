// === Module 19097: useAutoSearchGuildChannelTab ===

// Module 19097 (useAutoSearchGuildChannelTab)
import apply from "apply" /* 12 */;
import SearchPlatformUtilsDefault from "SearchPlatformUtils" /* 14094 */;
import SearchUtils from "SearchUtils" /* 14101 */;
import SearchPlatformActionCreatorsDefault from "SearchPlatformActionCreators" /* 14119 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_4 = fn(14110).SEARCH_TEXT_INPUT_DEBOUNCE_TIME;
const size = fn(2);
let result = size.fileFinishedImporting("modules/search/native/hooks/useAutoSearchGuildChannelTab.tsx");

export function useAutoSearchGuildChannelTab(searchContext, arg1) {
  closure_1 = arg1;
  items = [searchContext];
  const callback = noop.useCallback((searchQueryString) => {
    const guildIdFromSearchContext = SearchUtils.getGuildIdFromSearchContext(searchContext);
    if (null != guildIdFromSearchContext) {
      const obj3 = { searchContext, searchQueryString, guildId: guildIdFromSearchContext };
      const result = SearchPlatformActionCreatorsDefault.searchGuildChannelTab(obj3);
    }
  }, items);
  const items1 = [arg1, callback];
  const effect = noop.useEffect(() => {
    if (!closure_1) {
      callback("");
    }
  }, items1);
  const items2 = [searchContext, arg1, callback];
  const effect1 = noop.useEffect(() => {
    if (!closure_1) {
      const debounceResult = apply.debounce(callback, closure_4);
      return SearchPlatformUtilsDefault.subscribeTextInputValue(closure_0, debounceResult, true);
    }
  }, items2);
  const items3 = [searchContext];
  const effect2 = noop.useEffect(() => () => {
    const result = closure_1(callback[3]).cleanupGuildChannelTab(searchContext);
  }, items3);
}