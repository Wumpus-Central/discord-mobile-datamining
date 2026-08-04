// discord_app/modules/search/native/hooks/useAutoSearchMembersTab.tsx
import noop from "noop";
import prototype from "prototype";
import { SEARCH_TEXT_INPUT_DEBOUNCE_TIME as closure_5 } from "SEARCH_TEXT_INPUT_DEBOUNCE_TIME";
import { SearchTypes } from "ME";

const require = arg1;
let result = require("SEARCH_TEXT_INPUT_DEBOUNCE_TIME").fileFinishedImporting("modules/search/native/hooks/useAutoSearchMembersTab.tsx");

export const useAutoSearchMembersTab = function useAutoSearchMembersTab(searchContext, arg1) {
  let closure_0 = searchContext;
  let closure_1 = arg1;
  const items = [arg1, searchContext];
  const effect = React.useEffect(() => {
    if (!callback) {
      let obj = searchContext(outer1_2[4]);
      const debounceResult = searchContext(outer1_2[4]).debounce((arg0) => {
        let obj = outer1_4;
        if (!outer1_4.isAutocompleteVisible(closure_0)) {
          const guildIdFromSearchContext = outer1_0(outer1_2[5]).getGuildIdFromSearchContext(tmp);
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
            if (tmp.type === outer1_6.THREAD) {
              tmp12 = tmp8;
            }
            obj[4] = tmp12;
            outer1_1(tmp3[6]).searchGuildMemberTab(obj);
            const obj3 = outer1_1(tmp3[6]);
          }
          const obj2 = outer1_0(outer1_2[5]);
          tmp3 = outer1_2;
        }
      }, outer1_5);
      return callback(outer1_2[7]).subscribeTextInputValue(searchContext, debounceResult);
    }
  }, items);
  const items1 = [searchContext];
  const effect1 = React.useEffect(() => () => {
    const result = outer1_1(outer1_2[6]).cleanupGuildMemberTab(closure_0);
  }, items1);
};