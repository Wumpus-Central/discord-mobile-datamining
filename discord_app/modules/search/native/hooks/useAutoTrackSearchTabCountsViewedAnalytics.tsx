// discord_app/modules/search/native/hooks/useAutoTrackSearchTabCountsViewedAnalytics.tsx
import noop from "../../../../../_runtime/00019_noop.js";
import { SearchTabs } from "../../SearchConstants.tsx";

let result = require("obj132").fileFinishedImporting("modules/search/native/hooks/useAutoTrackSearchTabCountsViewedAnalytics.tsx");

export const useAutoTrackSearchTabCountsViewedAnalytics = function useAutoTrackSearchTabCountsViewedAnalytics(searchContext) {
  searchContext = searchContext.searchContext;
  const visibleTabCounts = searchContext.visibleTabCounts;
  const visibleTabs = searchContext.visibleTabs;
  closure_3 = visibleTabs.useRef(visibleTabs);
  const items = [visibleTabs];
  const effect = visibleTabs.useEffect(() => {
    closure_3.current = visibleTabs;
  }, items);
  const items1 = [searchContext, visibleTabCounts];
  const effect1 = visibleTabs.useEffect(() => {
    if (null != visibleTabCounts) {
      const _Object = Object;
      const keys = Object.keys(visibleTabCounts);
      const reduced = keys.reduce((acc, item, index) => {
        let num = null;
        if (null != closure_1) {
          const current = ref.current;
          let tmp4 = null;
          if (current.includes(item)) {
            tmp4 = tmp[item];
          }
          num = tmp4;
        }
        if (num == null) {
          num = 0;
        }
        return acc + num;
      }, 0);
      if (reduced > 0) {
        searchContext(visibleTabCounts[2]);
        const obj = { searchContext: null, searchResultTotalCount: null, numMemberTabReturnedResults: null, numChannelTabReturnedResults: null, numPeopleTabReturnedResults: null, numMessageTabReturnedResults: null, numMediaTabReturnedResults: null, numFileTabReturnedResults: null, numLinkTabReturnedResults: null };
        obj[0] = searchContext;
        obj[1] = reduced;
        const MEMBERS = closure_3.MEMBERS;
        let tmp4 = null;
        if (null != visibleTabCounts) {
          let current = closure_3.current;
          let tmp3 = null;
          if (current.includes(MEMBERS)) {
            tmp3 = visibleTabCounts[MEMBERS];
          }
          tmp4 = tmp3;
        }
        obj[2] = tmp4;
        const GUILD_CHANNELS = closure_3.GUILD_CHANNELS;
        let tmp5 = null;
        if (null != visibleTabCounts) {
          const current2 = closure_3.current;
          let tmp7 = null;
          if (current2.includes(GUILD_CHANNELS)) {
            tmp7 = visibleTabCounts[GUILD_CHANNELS];
          }
          tmp5 = tmp7;
        }
        obj[3] = tmp5;
        const PEOPLE = closure_3.PEOPLE;
        let tmp8 = null;
        if (null != visibleTabCounts) {
          const current3 = closure_3.current;
          let tmp10 = null;
          if (current3.includes(PEOPLE)) {
            tmp10 = visibleTabCounts[PEOPLE];
          }
          tmp8 = tmp10;
        }
        obj[4] = tmp8;
        const MESSAGES = closure_3.MESSAGES;
        let tmp11 = null;
        if (null != visibleTabCounts) {
          const current4 = closure_3.current;
          let tmp13 = null;
          if (current4.includes(MESSAGES)) {
            tmp13 = visibleTabCounts[MESSAGES];
          }
          tmp11 = tmp13;
        }
        obj[5] = tmp11;
        const MEDIA = closure_3.MEDIA;
        let tmp14 = null;
        if (null != visibleTabCounts) {
          const current5 = closure_3.current;
          let tmp16 = null;
          if (current5.includes(MEDIA)) {
            tmp16 = visibleTabCounts[MEDIA];
          }
          tmp14 = tmp16;
        }
        obj[6] = tmp14;
        const FILES = closure_3.FILES;
        let tmp17 = null;
        if (null != visibleTabCounts) {
          const current6 = closure_3.current;
          let tmp19 = null;
          if (current6.includes(FILES)) {
            tmp19 = visibleTabCounts[FILES];
          }
          tmp17 = tmp19;
        }
        obj[7] = tmp17;
        const LINKS = closure_3.LINKS;
        let tmp20 = null;
        if (null != visibleTabCounts) {
          const current7 = closure_3.current;
          let tmp22 = null;
          if (current7.includes(LINKS)) {
            tmp22 = visibleTabCounts[LINKS];
          }
          tmp20 = tmp22;
        }
        obj[8] = tmp20;
        const result = obj.trackSearchResultReturned(obj);
      }
    }
  }, items1);
};