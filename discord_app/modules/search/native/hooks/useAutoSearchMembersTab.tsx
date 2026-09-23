// === Module 17277: useAutoSearchMembersTab ===

// Module 17277 (useAutoSearchMembersTab)
import _mod12 from "module_12" /* 12 */;
import SearchPlatformUtilsDefault from "SearchPlatformUtils" /* 12672 */;
import noop from "module_19" /* 19 */;
import SearchQueryStore from "SearchQueryStore" /* 12673 */;

require = fn;
let closure_5 = fn(12687).SEARCH_TEXT_INPUT_DEBOUNCE_TIME;
const SearchTypes = fn(1074).SearchTypes;
const size = fn(2);
let result = size.fileFinishedImporting("modules/search/native/hooks/useAutoSearchMembersTab.tsx");

export const useAutoSearchMembersTab = function useAutoSearchMembersTab(searchContext, arg1) {
  closure_0 = searchContext;
  closure_1 = arg1;
  const items = [arg1, searchContext];
  const effect = noop.useEffect(() => {
    if (!closure_1) {
      const debounceResult = _mod12.debounce((searchQueryString) => {
        if (!autocompleteVisible.isAutocompleteVisible(searchContext)) {
          const guildIdFromSearchContext = closure_0(12674).getGuildIdFromSearchContext(searchContext);
          if (null != guildIdFromSearchContext) {
            const channelIds = autocompleteVisible.getChannelIds(searchContext);
            let tmp8 = null;
            if (0 !== channelIds.size) {
              let first = null;
              if (1 === channelIds.size) {
                const _Array = Array;
                first = Array.from(channelIds)[0];
              }
              tmp8 = first;
            }
            const obj4 = { searchContext, searchQueryString, guildId: guildIdFromSearchContext, channelId: tmp8, threadId: null };
            let tmp12 = null;
            if (searchContext.type === constants.THREAD) {
              tmp12 = tmp8;
            }
            obj4.threadId = tmp12;
            closure_1(12695).searchGuildMemberTab(obj4);
            const obj3 = closure_1(12695);
          }
          const obj2 = closure_0(12674);
        }
      }, closure_5);
      return SearchPlatformUtilsDefault.subscribeTextInputValue(closure_0, debounceResult);
    }
  }, items);
  const items1 = [searchContext];
  const effect1 = noop.useEffect(() => () => {
    const result = closure_1(12695).cleanupGuildMemberTab(searchContext);
  }, items1);
};