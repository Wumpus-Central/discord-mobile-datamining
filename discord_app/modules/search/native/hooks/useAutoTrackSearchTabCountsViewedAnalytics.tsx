// === Module 16929: useAutoTrackSearchTabCountsViewedAnalytics ===

// Module 16929 (useAutoTrackSearchTabCountsViewedAnalytics)
import SearchConstants from "SearchConstants" /* 7524 */;
import search_tracking_TrackingDefault from "search/tracking/Tracking" /* 12001 */;
import react_mod from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let searchContext;

let react = react_mod;
const SearchTabs = SearchConstants.SearchTabs;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((searchContext) => {
  let closure_3;
  let tmp2;
  let tmp3;
  let visibleTabs;
  let obj = searchContext(visibleTabs[3]);
  const cResult = obj.c(7);
  searchContext = searchContext.searchContext;
  const visibleTabCounts = searchContext.visibleTabCounts;
  visibleTabs = searchContext.visibleTabs;
  react = react.useRef(visibleTabs);
  if (cResult[0] !== visibleTabs) {
    const fn = function s() {
      closure_3.current = visibleTabs;
    };
    const items = [visibleTabs];
    let num = 0;
    cResult[0] = visibleTabs;
    cResult[1] = fn;
    cResult[2] = items;
    tmp3 = items;
    tmp2 = fn;
  } else {
    tmp2 = cResult[1];
    tmp3 = cResult[2];
  }
  const effect = obj2.useEffect(tmp2, tmp3);
  if (cResult[3] === searchContext) {
    let tmp5;
    let tmp6;
    if (cResult[4] === visibleTabCounts) {
      tmp5 = cResult[5];
      tmp6 = cResult[6];
    }
    const effect1 = obj2.useEffect(tmp5, tmp6);
  }
  const fn2 = function c() {
    let tmp11;
    let tmp14;
    let tmp17;
    let tmp20;
    let tmp4;
    let tmp5;
    let tmp8;
    if (null != visibleTabCounts) {
      function getSearchTabCount(arg0) {

      }
      const _Object = Object;
      const keys = Object.keys(visibleTabCounts);
      let num = 0;
      const reduced = keys.reduce((acc, item) => {
        if (typeof getSearchTabCount === "function") {
          let num = null;
          if (null != visibleTabCounts) {
            const current = ref.current;
            let tmp5 = null;
            if (current.includes(item)) {
              tmp5 = tmp[item];
            }
            num = tmp5;
          }
          if (num == null) {
            num = 0;
          }
          return acc + num;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }, 0);
      if (reduced > 0) {
        const MEMBERS = constants.MEMBERS;
        const obj = { searchContext: getSearchTabCount, searchResultTotalCount: reduced, numMemberTabReturnedResults: tmp4, numChannelTabReturnedResults: tmp5, numPeopleTabReturnedResults: tmp8, numMessageTabReturnedResults: tmp11, numMediaTabReturnedResults: tmp14, numFileTabReturnedResults: tmp17, numLinkTabReturnedResults: tmp20 };
        tmp4 = null;
        const trackSearchResultReturned = visibleTabCounts(visibleTabs[4]).trackSearchResultReturned;
        if (null != visibleTabCounts) {
          let current = ref.current;
          let tmp3 = null;
          if (current.includes(MEMBERS)) {
            tmp3 = visibleTabCounts[MEMBERS];
          }
          tmp4 = tmp3;
        }
        const GUILD_CHANNELS = constants.GUILD_CHANNELS;
        tmp5 = null;
        if (null != visibleTabCounts) {
          const current2 = ref.current;
          let tmp7 = null;
          if (current2.includes(GUILD_CHANNELS)) {
            tmp7 = visibleTabCounts[GUILD_CHANNELS];
          }
          tmp5 = tmp7;
        }
        const PEOPLE = constants.PEOPLE;
        tmp8 = null;
        if (null != visibleTabCounts) {
          const current3 = ref.current;
          let tmp10 = null;
          if (current3.includes(PEOPLE)) {
            tmp10 = visibleTabCounts[PEOPLE];
          }
          tmp8 = tmp10;
        }
        const MESSAGES = constants.MESSAGES;
        tmp11 = null;
        if (null != visibleTabCounts) {
          const current4 = ref.current;
          let tmp13 = null;
          if (current4.includes(MESSAGES)) {
            tmp13 = visibleTabCounts[MESSAGES];
          }
          tmp11 = tmp13;
        }
        const MEDIA = constants.MEDIA;
        tmp14 = null;
        if (null != visibleTabCounts) {
          const current5 = ref.current;
          let tmp16 = null;
          if (current5.includes(MEDIA)) {
            tmp16 = visibleTabCounts[MEDIA];
          }
          tmp14 = tmp16;
        }
        const FILES = constants.FILES;
        tmp17 = null;
        if (null != visibleTabCounts) {
          const current6 = ref.current;
          let tmp19 = null;
          if (current6.includes(FILES)) {
            tmp19 = visibleTabCounts[FILES];
          }
          tmp17 = tmp19;
        }
        const LINKS = constants.LINKS;
        tmp20 = null;
        if (null != visibleTabCounts) {
          const current7 = ref.current;
          let tmp22 = null;
          if (current7.includes(LINKS)) {
            tmp22 = visibleTabCounts[LINKS];
          }
          tmp20 = tmp22;
        }
        const result = trackSearchResultReturned(obj);
      }
    }
  };
  const items1 = [searchContext, visibleTabCounts];
  cResult[3] = searchContext;
  cResult[4] = visibleTabCounts;
  cResult[5] = fn2;
  cResult[6] = items1;
  tmp6 = items1;
  tmp5 = fn2;
}) : ((searchContext) => {
  let closure_3;
  searchContext = searchContext.searchContext;
  const visibleTabCounts = searchContext.visibleTabCounts;
  const visibleTabs = searchContext.visibleTabs;
  react = undefined;
  react = react.useRef(visibleTabs);
  const items = [visibleTabs];
  const effect = react.useEffect(() => {
    closure_3.current = visibleTabs;
  }, items);
  const items1 = [searchContext, visibleTabCounts];
  const effect1 = react.useEffect(() => {
    let tmp11;
    let tmp14;
    let tmp17;
    let tmp20;
    let tmp4;
    let tmp5;
    let tmp8;
    if (null != visibleTabCounts) {
      const _Object = Object;
      const keys = Object.keys(visibleTabCounts);
      let num = 0;
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
        const MEMBERS = SearchTabs.MEMBERS;
        const obj = { searchContext, searchResultTotalCount: reduced, numMemberTabReturnedResults: tmp4, numChannelTabReturnedResults: tmp5, numPeopleTabReturnedResults: tmp8, numMessageTabReturnedResults: tmp11, numMediaTabReturnedResults: tmp14, numFileTabReturnedResults: tmp17, numLinkTabReturnedResults: tmp20 };
        tmp4 = null;
        const trackSearchResultReturned = search_tracking_TrackingDefault.trackSearchResultReturned;
        if (null != visibleTabCounts) {
          let current = ref.current;
          let tmp3 = null;
          if (current.includes(MEMBERS)) {
            tmp3 = visibleTabCounts[MEMBERS];
          }
          tmp4 = tmp3;
        }
        const GUILD_CHANNELS = SearchTabs.GUILD_CHANNELS;
        tmp5 = null;
        if (null != visibleTabCounts) {
          const current2 = ref.current;
          let tmp7 = null;
          if (current2.includes(GUILD_CHANNELS)) {
            tmp7 = visibleTabCounts[GUILD_CHANNELS];
          }
          tmp5 = tmp7;
        }
        const PEOPLE = SearchTabs.PEOPLE;
        tmp8 = null;
        if (null != visibleTabCounts) {
          const current3 = ref.current;
          let tmp10 = null;
          if (current3.includes(PEOPLE)) {
            tmp10 = visibleTabCounts[PEOPLE];
          }
          tmp8 = tmp10;
        }
        const MESSAGES = SearchTabs.MESSAGES;
        tmp11 = null;
        if (null != visibleTabCounts) {
          const current4 = ref.current;
          let tmp13 = null;
          if (current4.includes(MESSAGES)) {
            tmp13 = visibleTabCounts[MESSAGES];
          }
          tmp11 = tmp13;
        }
        const MEDIA = SearchTabs.MEDIA;
        tmp14 = null;
        if (null != visibleTabCounts) {
          const current5 = ref.current;
          let tmp16 = null;
          if (current5.includes(MEDIA)) {
            tmp16 = visibleTabCounts[MEDIA];
          }
          tmp14 = tmp16;
        }
        const FILES = SearchTabs.FILES;
        tmp17 = null;
        if (null != visibleTabCounts) {
          const current6 = ref.current;
          let tmp19 = null;
          if (current6.includes(FILES)) {
            tmp19 = visibleTabCounts[FILES];
          }
          tmp17 = tmp19;
        }
        const LINKS = SearchTabs.LINKS;
        tmp20 = null;
        if (null != visibleTabCounts) {
          const current7 = ref.current;
          let tmp22 = null;
          if (current7.includes(LINKS)) {
            tmp22 = visibleTabCounts[LINKS];
          }
          tmp20 = tmp22;
        }
        const result = trackSearchResultReturned(obj);
      }
    }
  }, items1);
});
let result = size.fileFinishedImporting("modules/search/native/hooks/useAutoTrackSearchTabCountsViewedAnalytics.tsx");

export const useAutoTrackSearchTabCountsViewedAnalytics = tmp2;