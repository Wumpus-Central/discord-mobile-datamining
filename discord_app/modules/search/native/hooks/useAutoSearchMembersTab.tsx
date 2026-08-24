// === Module 15942: useAutoSearchMembersTab ===

// Module 15942 (useAutoSearchMembersTab)
import closure_3 from "noop" /* 19 */;
import closure_4 from "prototype" /* 11510 */;
import { SEARCH_TEXT_INPUT_DEBOUNCE_TIME as closure_5 } from "SEARCH_TEXT_INPUT_DEBOUNCE_TIME" /* 11524 */;
import { SearchTypes } from "ME" /* 676 */;

const require = arg1;
let result = require("set").fileFinishedImporting("modules/search/native/hooks/useAutoSearchMembersTab.tsx");

export const useAutoSearchMembersTab = function useAutoSearchMembersTab(searchContext, arg1) {
  closure_0 = searchContext;
  closure_1 = arg1;
  const items = [arg1, searchContext];
  const effect = React.useEffect(() => {
    if (!callback) {
      let obj = searchContext(closure_1_2[4]);
      const debounceResult = searchContext(closure_1_2[4]).debounce((arg0) => {
        let obj = closure_1_4;
        if (!closure_1_4.isAutocompleteVisible(closure_0)) {
          const guildIdFromSearchContext = closure_1_0(closure_1_2[5]).getGuildIdFromSearchContext(tmp);
          if (null != guildIdFromSearchContext) {
            const channelIds = obj.getChannelIds(tmp);
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
            obj[0] = tmp;
            obj[1] = arg0;
            obj[2] = guildIdFromSearchContext;
            obj[3] = tmp8;
            let tmp12 = null;
            if (tmp.type === closure_1_6.THREAD) {
              tmp12 = tmp8;
            }
            obj[4] = tmp12;
            closure_1_1(tmp3[6]).searchGuildMemberTab(obj);
            const obj3 = closure_1_1(tmp3[6]);
          }
          const obj2 = closure_1_0(closure_1_2[5]);
          tmp3 = closure_1_2;
        }
      }, closure_1_5);
      return callback(closure_1_2[7]).subscribeTextInputValue(searchContext, debounceResult);
    }
  }, items);
  const items1 = [searchContext];
  const effect1 = React.useEffect(() => () => {
    const result = closure_1_1(closure_1_2[6]).cleanupGuildMemberTab(closure_0);
  }, items1);
};