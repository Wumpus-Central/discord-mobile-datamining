// discord_app/modules/search/native/hooks/useAutoSearchGuildChannelTab.tsx
import _mod12 from "../../../../../_runtime/metro/00012__.js";
import SearchPlatformUtilsDefault from "../SearchPlatformUtils.tsx";
import SearchUtils from "../../SearchUtils.tsx";
import SearchPlatformActionCreatorsDefault from "../SearchPlatformActionCreators.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
let closure_4 = fn(12353).SEARCH_TEXT_INPUT_DEBOUNCE_TIME;
const size = fn(2);
let result = size.fileFinishedImporting("modules/search/native/hooks/useAutoSearchGuildChannelTab.tsx");

export const useAutoSearchGuildChannelTab = function useAutoSearchGuildChannelTab(searchContext, arg1) {
  closure_1 = arg1;
  const items = [searchContext];
  const callback = noop.useCallback((searchQueryString) => {
    let obj = SearchUtils;
    const guildIdFromSearchContext = obj.getGuildIdFromSearchContext(searchContext);
    if (null != guildIdFromSearchContext) {
      obj = { searchContext, searchQueryString, guildId: guildIdFromSearchContext };
      const result = SearchPlatformActionCreatorsDefault.searchGuildChannelTab(obj);
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
  const effect2 = noop.useEffect(
    () => () => {
      const result = closure_1(callback[3]).cleanupGuildChannelTab(searchContext);
    },
    items3,
  );
};
