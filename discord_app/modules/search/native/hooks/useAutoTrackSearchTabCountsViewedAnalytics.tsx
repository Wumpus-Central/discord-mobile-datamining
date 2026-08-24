// === Module 15944: useAutoTrackSearchTabCountsViewedAnalytics ===

// Module 15944 (useAutoTrackSearchTabCountsViewedAnalytics)
import closure_2 from "noop" /* 19 */;
import { SearchTabs } from "MessageEmbedTypes" /* 8507 */;

let result = require("set").fileFinishedImporting("modules/search/native/hooks/useAutoTrackSearchTabCountsViewedAnalytics.tsx");

export const useAutoTrackSearchTabCountsViewedAnalytics = function useAutoTrackSearchTabCountsViewedAnalytics(searchContext) {
  searchContext = searchContext.searchContext;
  const visibleTabCounts = searchContext.visibleTabCounts;
  const visibleTabs = searchContext.visibleTabs;
  closure_3 = undefined;
  closure_3 = visibleTabs.useRef(visibleTabs);
  const items = [visibleTabs];
  const effect = visibleTabs.useEffect(() => {
    closure_3.current = visibleTabs;
  }, items);
  const items1 = [searchContext, visibleTabCounts];
  const effect1 = visibleTabs.useEffect(() => {
    if (null != visibleTabCounts) {
      const _Object = Object;
      const keys = Object.keys(tmp);
      const reduced = keys.reduce((arg0, arg1) => {
        let num = null;
        if (null != closure_1) {
          const current = ref.current;
          let tmp4 = null;
          if (current.includes(arg1)) {
            tmp4 = tmp[arg1];
          }
          num = tmp4;
        }
        if (num == null) {
          num = 0;
        }
        return arg0 + num;
      }, 0);
      if (reduced > 0) {
        let obj = searchContext(visibleTabCounts[2]);
        obj = { searchContext: null, searchResultTotalCount: null, numMemberTabReturnedResults: null, numChannelTabReturnedResults: null, numPeopleTabReturnedResults: null, numMessageTabReturnedResults: null, numMediaTabReturnedResults: null, numFileTabReturnedResults: null, numLinkTabReturnedResults: null };
        obj[0] = searchContext;
        obj[1] = reduced;
        const MEMBERS = closure_3.MEMBERS;
        let tmp4 = null;
        if (null != tmp) {
          let current = closure_3.current;
          let tmp3 = null;
          if (current.includes(MEMBERS)) {
            tmp3 = tmp[MEMBERS];
          }
          tmp4 = tmp3;
        }
        obj[2] = tmp4;
        const GUILD_CHANNELS = tmp29.GUILD_CHANNELS;
        let tmp5 = null;
        if (null != tmp) {
          const current2 = closure_3.current;
          let tmp7 = null;
          if (current2.includes(GUILD_CHANNELS)) {
            tmp7 = tmp[GUILD_CHANNELS];
          }
          tmp5 = tmp7;
        }
        obj[3] = tmp5;
        const PEOPLE = tmp29.PEOPLE;
        let tmp8 = null;
        if (null != tmp) {
          const current3 = closure_3.current;
          let tmp10 = null;
          if (current3.includes(PEOPLE)) {
            tmp10 = tmp[PEOPLE];
          }
          tmp8 = tmp10;
        }
        obj[4] = tmp8;
        const MESSAGES = tmp29.MESSAGES;
        let tmp11 = null;
        if (null != tmp) {
          const current4 = closure_3.current;
          let tmp13 = null;
          if (current4.includes(MESSAGES)) {
            tmp13 = tmp[MESSAGES];
          }
          tmp11 = tmp13;
        }
        obj[5] = tmp11;
        const MEDIA = tmp29.MEDIA;
        let tmp14 = null;
        if (null != tmp) {
          const current5 = closure_3.current;
          let tmp16 = null;
          if (current5.includes(MEDIA)) {
            tmp16 = tmp[MEDIA];
          }
          tmp14 = tmp16;
        }
        obj[6] = tmp14;
        const FILES = tmp29.FILES;
        let tmp17 = null;
        if (null != tmp) {
          const current6 = closure_3.current;
          let tmp19 = null;
          if (current6.includes(FILES)) {
            tmp19 = tmp[FILES];
          }
          tmp17 = tmp19;
        }
        obj[7] = tmp17;
        const LINKS = tmp29.LINKS;
        let tmp20 = null;
        if (null != tmp) {
          const current7 = closure_3.current;
          let tmp22 = null;
          if (current7.includes(LINKS)) {
            tmp22 = tmp[LINKS];
          }
          tmp20 = tmp22;
        }
        obj[8] = tmp20;
        const result = obj.trackSearchResultReturned(obj);
      }
    }
  }, items1);
};