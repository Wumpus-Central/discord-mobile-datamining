// === Module 16720: useAutoSearchGuildChannelTab ===

// Module 16720 (useAutoSearchGuildChannelTab)
import closure_3 from "noop" /* 19 */;
import { SEARCH_TEXT_INPUT_DEBOUNCE_TIME as closure_4 } from "SEARCH_TEXT_INPUT_DEBOUNCE_TIME" /* 12353 */;

const require = arg1;
let result = require("set").fileFinishedImporting("modules/search/native/hooks/useAutoSearchGuildChannelTab.tsx");

export const useAutoSearchGuildChannelTab = function useAutoSearchGuildChannelTab(searchContext, arg1) {
  closure_0 = searchContext;
  closure_1 = arg1;
  const items = [searchContext];
  const callback = React.useCallback((arg0) => {
    let obj = searchContext(callback[2]);
    const guildIdFromSearchContext = obj.getGuildIdFromSearchContext(searchContext);
    if (null != guildIdFromSearchContext) {
      obj = { searchContext: null, searchQueryString: null, guildId: null };
      obj[0] = searchContext;
      obj[1] = arg0;
      obj[2] = guildIdFromSearchContext;
      const result = callback(callback[3]).searchGuildChannelTab(obj);
      const obj2 = callback(callback[3]);
    }
  }, items);
  const items1 = [arg1, callback];
  const effect = React.useEffect(() => {
    if (!closure_1) {
      callback("");
    }
  }, items1);
  const items2 = [searchContext, arg1, callback];
  const effect1 = React.useEffect(() => {
    if (!callback) {
      const obj = searchContext(callback[4]);
      const debounceResult = searchContext(callback[4]).debounce(callback, closure_1_4);
      return callback(callback[5]).subscribeTextInputValue(searchContext, debounceResult, true);
    }
  }, items2);
  const items3 = [searchContext];
  const effect2 = React.useEffect(() => () => {
    const result = closure_1_1(closure_1_2[3]).cleanupGuildChannelTab(closure_0);
  }, items3);
};