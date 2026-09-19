// === Module 17184: useAutoSearchGuildChannelTab ===

// Module 17184 (useAutoSearchGuildChannelTab)
import _mod12 from "module_12" /* 12 */;
import SearchPlatformUtilsDefault from "SearchPlatformUtils" /* 12590 */;
import SearchUtils from "SearchUtils" /* 12592 */;
import SearchPlatformActionCreatorsDefault from "SearchPlatformActionCreators" /* 12613 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_4 = fn(12605).SEARCH_TEXT_INPUT_DEBOUNCE_TIME;
const size = fn(2);
let result = size.fileFinishedImporting("modules/search/native/hooks/useAutoSearchGuildChannelTab.tsx");

export const useAutoSearchGuildChannelTab = function useAutoSearchGuildChannelTab(searchContext, arg1) {
  closure_1 = arg1;
  const items = [searchContext];
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
      const debounceResult = _mod12.debounce(callback, closure_4);
      return SearchPlatformUtilsDefault.subscribeTextInputValue(closure_0, debounceResult, true);
    }
  }, items2);
  const items3 = [searchContext];
  const effect2 = noop.useEffect(() => () => {
    const result = closure_1(callback[3]).cleanupGuildChannelTab(searchContext);
  }, items3);
};