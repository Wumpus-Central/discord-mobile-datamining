// === Module 16723: useAutoTrackSearchTabCountsViewedAnalytics ===

// Module 16723 (useAutoTrackSearchTabCountsViewedAnalytics)
import search_tracking_TrackingDefault from "search/tracking/Tracking" /* 12358 */;
import noop from "module_19" /* 19 */;

const SearchTabs = fn(7878).SearchTabs;
const size = fn(2);
let result = size.fileFinishedImporting("modules/search/native/hooks/useAutoTrackSearchTabCountsViewedAnalytics.tsx");

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
      const reduced = keys.reduce((acc, item) => {
        let num = null;
        if (null != visibleTabCounts) {
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
        const obj = { searchContext, searchResultTotalCount: reduced, numMemberTabReturnedResults: null, numChannelTabReturnedResults: null, numPeopleTabReturnedResults: null, numMessageTabReturnedResults: null, numMediaTabReturnedResults: null, numFileTabReturnedResults: null, numLinkTabReturnedResults: null };
        const MEMBERS = SearchTabs.MEMBERS;
        let tmp4 = null;
        if (null != visibleTabCounts) {
          let current = ref.current;
          let tmp3 = null;
          if (current.includes(MEMBERS)) {
            tmp3 = visibleTabCounts[MEMBERS];
          }
          tmp4 = tmp3;
        }
        obj.numMemberTabReturnedResults = tmp4;
        const GUILD_CHANNELS = SearchTabs.GUILD_CHANNELS;
        let tmp5 = null;
        if (null != visibleTabCounts) {
          const current2 = ref.current;
          let tmp7 = null;
          if (current2.includes(GUILD_CHANNELS)) {
            tmp7 = visibleTabCounts[GUILD_CHANNELS];
          }
          tmp5 = tmp7;
        }
        obj.numChannelTabReturnedResults = tmp5;
        const PEOPLE = SearchTabs.PEOPLE;
        let tmp8 = null;
        if (null != visibleTabCounts) {
          const current3 = ref.current;
          let tmp10 = null;
          if (current3.includes(PEOPLE)) {
            tmp10 = visibleTabCounts[PEOPLE];
          }
          tmp8 = tmp10;
        }
        obj.numPeopleTabReturnedResults = tmp8;
        const MESSAGES = SearchTabs.MESSAGES;
        let tmp11 = null;
        if (null != visibleTabCounts) {
          const current4 = ref.current;
          let tmp13 = null;
          if (current4.includes(MESSAGES)) {
            tmp13 = visibleTabCounts[MESSAGES];
          }
          tmp11 = tmp13;
        }
        obj.numMessageTabReturnedResults = tmp11;
        const MEDIA = SearchTabs.MEDIA;
        let tmp14 = null;
        if (null != visibleTabCounts) {
          const current5 = ref.current;
          let tmp16 = null;
          if (current5.includes(MEDIA)) {
            tmp16 = visibleTabCounts[MEDIA];
          }
          tmp14 = tmp16;
        }
        obj.numMediaTabReturnedResults = tmp14;
        const FILES = SearchTabs.FILES;
        let tmp17 = null;
        if (null != visibleTabCounts) {
          const current6 = ref.current;
          let tmp19 = null;
          if (current6.includes(FILES)) {
            tmp19 = visibleTabCounts[FILES];
          }
          tmp17 = tmp19;
        }
        obj.numFileTabReturnedResults = tmp17;
        const LINKS = SearchTabs.LINKS;
        let tmp20 = null;
        if (null != visibleTabCounts) {
          const current7 = ref.current;
          let tmp22 = null;
          if (current7.includes(LINKS)) {
            tmp22 = visibleTabCounts[LINKS];
          }
          tmp20 = tmp22;
        }
        obj.numLinkTabReturnedResults = tmp20;
        const result = obj.trackSearchResultReturned(obj);
      }
    }
  }, items1);
};