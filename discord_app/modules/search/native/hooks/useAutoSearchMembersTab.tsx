// discord_app/modules/search/native/hooks/useAutoSearchMembersTab.tsx
import noop from "../../../../../_runtime/00019_noop.js";
import prototype from "../stores/SearchQueryStore.tsx";
import { SEARCH_TEXT_INPUT_DEBOUNCE_TIME as closure_5 } from "../SearchPlatformConstants.tsx";
import { SearchTypes } from "../../../../Constants.tsx";

const require = fn;
let result = require("obj132").fileFinishedImporting("modules/search/native/hooks/useAutoSearchMembersTab.tsx");

export const useAutoSearchMembersTab = function useAutoSearchMembersTab(searchContext, arg1) {
  closure_0 = searchContext;
  closure_1 = arg1;
  const items = [arg1, searchContext];
  const effect = React.useEffect(() => {
    if (!callback) {
      let obj = searchContext(dependencyMap[4]);
      const debounceResult = searchContext(dependencyMap[4]).debounce((arg0) => {
        let obj = closure_1_4;
        if (!closure_1_4.isAutocompleteVisible(type)) {
          const guildIdFromSearchContext = searchContext(closure_1_2[5]).getGuildIdFromSearchContext(type);
          if (null != guildIdFromSearchContext) {
            const channelIds = obj.getChannelIds(type);
            let tmp8 = null;
            if (0 !== channelIds.size) {
              let first = null;
              if (1 === channelIds.size) {
                const _Array = Array;
                first = Array.from(channelIds)[0];
              }
              tmp8 = first;
            }
            obj = { searchContext: null, searchQueryString: null, guildId: null, channelId: null, threadId: null };
            obj[0] = type;
            obj[1] = arg0;
            obj[2] = guildIdFromSearchContext;
            obj[3] = tmp8;
            let tmp12 = null;
            if (type.type === closure_1_6.THREAD) {
              tmp12 = tmp8;
            }
            obj[4] = tmp12;
            closure_1_1(closure_1_2[6]).searchGuildMemberTab(obj);
            const obj3 = closure_1_1(closure_1_2[6]);
          }
          const obj2 = searchContext(closure_1_2[5]);
        }
      }, closure_1_5);
      return callback(dependencyMap[7]).subscribeTextInputValue(searchContext, debounceResult);
    }
  }, items);
  const items1 = [searchContext];
  const effect1 = React.useEffect(() => () => {
    const result = closure_1_1(closure_1_2[6]).cleanupGuildMemberTab(closure_0);
  }, items1);
};