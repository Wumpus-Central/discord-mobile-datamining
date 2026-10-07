// === Module 16929: useAutoTrackSearchTabCountsViewedAnalytics ===

// Module 16929 (useAutoTrackSearchTabCountsViewedAnalytics)
import search_tracking_TrackingDefault from "search/tracking/Tracking" /* 12001 */;
import noop from "module_19" /* 19 */;

const require = fn;
const SearchTabs = fn(7524).SearchTabs;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/search/native/hooks/useAutoTrackSearchTabCountsViewedAnalytics.tsx");

export const useAutoTrackSearchTabCountsViewedAnalytics = ReactCompilerGating.isReactCompilerEnabled() ? ((searchContext) => {
  const cResult = searchContext(visibleTabs[3]).c(7);
  searchContext = searchContext.searchContext;
  const visibleTabCounts = searchContext.visibleTabCounts;
  visibleTabs = searchContext.visibleTabs;
  noop = noop.useRef(visibleTabs);
  if (cResult[0] !== visibleTabs) {
    const fn = function s() {
      closure_3.current = visibleTabs;
    };
    const items = [visibleTabs];
    cResult[0] = visibleTabs;
    cResult[1] = fn;
    cResult[2] = items;
    let tmp3 = items;
    let tmp2 = fn;
  } else {
    tmp2 = cResult[1];
    tmp3 = cResult[2];
  }
  const effect = obj2.useEffect(tmp2, tmp3);
  if (cResult[3] === searchContext) {
    if (cResult[4] === visibleTabCounts) {
      let tmp5 = cResult[5];
      let tmp6 = cResult[6];
    }
    const effect1 = obj2.useEffect(tmp5, tmp6);
  }
  const fn2 = function c() {
    if (null != visibleTabCounts) {
      function getSearchTabCount(arg0) {

      }
      const _Object = Object;
      const keys = Object.keys(visibleTabCounts);
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
        const obj2 = { searchContext: getSearchTabCount, searchResultTotalCount: reduced, numMemberTabReturnedResults: null, numChannelTabReturnedResults: null, numPeopleTabReturnedResults: null, numMessageTabReturnedResults: null, numMediaTabReturnedResults: null, numFileTabReturnedResults: null, numLinkTabReturnedResults: null };
        const MEMBERS = constants.MEMBERS;
        let tmp4 = null;
        if (null != visibleTabCounts) {
          let current = ref.current;
          let tmp3 = null;
          if (current.includes(MEMBERS)) {
            tmp3 = visibleTabCounts[MEMBERS];
          }
          tmp4 = tmp3;
        }
        obj2.numMemberTabReturnedResults = tmp4;
        const GUILD_CHANNELS = constants.GUILD_CHANNELS;
        let tmp5 = null;
        if (null != visibleTabCounts) {
          const current2 = ref.current;
          let tmp7 = null;
          if (current2.includes(GUILD_CHANNELS)) {
            tmp7 = visibleTabCounts[GUILD_CHANNELS];
          }
          tmp5 = tmp7;
        }
        obj2.numChannelTabReturnedResults = tmp5;
        const PEOPLE = constants.PEOPLE;
        let tmp8 = null;
        if (null != visibleTabCounts) {
          const current3 = ref.current;
          let tmp10 = null;
          if (current3.includes(PEOPLE)) {
            tmp10 = visibleTabCounts[PEOPLE];
          }
          tmp8 = tmp10;
        }
        obj2.numPeopleTabReturnedResults = tmp8;
        const MESSAGES = constants.MESSAGES;
        let tmp11 = null;
        if (null != visibleTabCounts) {
          const current4 = ref.current;
          let tmp13 = null;
          if (current4.includes(MESSAGES)) {
            tmp13 = visibleTabCounts[MESSAGES];
          }
          tmp11 = tmp13;
        }
        obj2.numMessageTabReturnedResults = tmp11;
        const MEDIA = constants.MEDIA;
        let tmp14 = null;
        if (null != visibleTabCounts) {
          const current5 = ref.current;
          let tmp16 = null;
          if (current5.includes(MEDIA)) {
            tmp16 = visibleTabCounts[MEDIA];
          }
          tmp14 = tmp16;
        }
        obj2.numMediaTabReturnedResults = tmp14;
        const FILES = constants.FILES;
        let tmp17 = null;
        if (null != visibleTabCounts) {
          const current6 = ref.current;
          let tmp19 = null;
          if (current6.includes(FILES)) {
            tmp19 = visibleTabCounts[FILES];
          }
          tmp17 = tmp19;
        }
        obj2.numFileTabReturnedResults = tmp17;
        const LINKS = constants.LINKS;
        let tmp20 = null;
        if (null != visibleTabCounts) {
          const current7 = ref.current;
          let tmp22 = null;
          if (current7.includes(LINKS)) {
            tmp22 = visibleTabCounts[LINKS];
          }
          tmp20 = tmp22;
        }
        obj2.numLinkTabReturnedResults = tmp20;
        const result = visibleTabCounts(visibleTabs[4]).trackSearchResultReturned(obj2);
        const obj = visibleTabCounts(visibleTabs[4]);
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
  searchContext = searchContext.searchContext;
  const visibleTabCounts = searchContext.visibleTabCounts;
  const visibleTabs = searchContext.visibleTabs;
  noop = undefined;
  noop = noop.useRef(visibleTabs);
  const items = [visibleTabs];
  const effect = noop.useEffect(() => {
    closure_3.current = visibleTabs;
  }, items);
  const items1 = [searchContext, visibleTabCounts];
  const effect1 = noop.useEffect(() => {
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
        const obj2 = { searchContext, searchResultTotalCount: reduced, numMemberTabReturnedResults: null, numChannelTabReturnedResults: null, numPeopleTabReturnedResults: null, numMessageTabReturnedResults: null, numMediaTabReturnedResults: null, numFileTabReturnedResults: null, numLinkTabReturnedResults: null };
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
        obj2.numMemberTabReturnedResults = tmp4;
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
        obj2.numChannelTabReturnedResults = tmp5;
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
        obj2.numPeopleTabReturnedResults = tmp8;
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
        obj2.numMessageTabReturnedResults = tmp11;
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
        obj2.numMediaTabReturnedResults = tmp14;
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
        obj2.numFileTabReturnedResults = tmp17;
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
        obj2.numLinkTabReturnedResults = tmp20;
        const result = search_tracking_TrackingDefault.trackSearchResultReturned(obj2);
      }
    }
  }, items1);
});