// === Module 16883: SearchHistoricalIndexingHeader ===

// Module 16883 (SearchHistoricalIndexingHeader)
import Fragment from "Fragment" /* 21 */;
import search_tracking_TrackingDefault from "search/tracking/Tracking" /* 11982 */;
import react_mod from "react" /* 19 */;
import LocaleStore from "LocaleStore" /* 2116 */;
import SearchConstants from "SearchConstants" /* 7513 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let searchContext;

let SEARCH_LIST_HORIZONTAL_PADDING;
let SEARCH_ROW_TAP_STATE_PADDING;
let hasOwnProperty;
let react = react_mod;
({ SearchTabs: hasOwnProperty, SEARCH_LIST_HORIZONTAL_PADDING, SEARCH_ROW_TAP_STATE_PADDING } = SearchConstants);
const jsx = Fragment.jsx;
let obj = { header: { marginBottom: 16 }, headerMessages: { marginHorizontal: SEARCH_LIST_HORIZONTAL_PADDING, marginTop: SEARCH_ROW_TAP_STATE_PADDING } };
let closure_7 = createStyles.createStyles(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((searchContext) => {
  let headerMessages;
  let tmp5;
  let obj = searchContext(576);
  const cResult = obj.c(16);
  searchContext = searchContext.searchContext;
  const documentsIndexed = searchContext.documentsIndexed;
  const tab = searchContext.tab;
  const tmp4 = closure_7();
  const NumberResult = Number(documentsIndexed);
  if (cResult[0] !== NumberResult) {
    const toLocaleStringResult = NumberResult.toLocaleString(LocaleStore.locale);
    cResult[0] = NumberResult;
    cResult[1] = toLocaleStringResult;
    tmp5 = toLocaleStringResult;
  } else {
    tmp5 = cResult[1];
  }
  if (tab === constants.MESSAGES) {
    headerMessages = tmp4.headerMessages;
  }
  if (cResult[2] === documentsIndexed) {
    let tmp9;
    let tmp10;
    if (cResult[3] === searchContext) {
      tmp9 = cResult[4];
      tmp10 = cResult[5];
    }
    const effect = react.useEffect(tmp9, tmp10);
    if (cResult[6] === headerMessages) {
      let tmp13;
      let tmp14;
      let tmp16;
      if (cResult[7] === tmp4.header) {
        tmp13 = cResult[8];
      }
      if (cResult[9] !== tmp5) {
        const intl = tmp(1126).intl;
        let obj2 = { count: tmp5 };
        const formatResult = intl.format(searchContext(1126).t["4Y3O+O"], obj2);
        cResult[9] = tmp5;
        cResult[10] = formatResult;
        tmp14 = formatResult;
      } else {
        tmp14 = cResult[10];
      }
      if (cResult[11] !== tmp14) {
        const tmp18 = jsx(searchContext(4886).Text, { variant: "heading-sm/normal", color: "interactive-text-default", children: tmp14 });
        cResult[11] = tmp14;
        cResult[12] = tmp18;
        tmp16 = tmp18;
      } else {
        tmp16 = cResult[12];
      }
      if (cResult[13] === tmp13) {
        let tmp19;
        if (cResult[14] === tmp16) {
          tmp19 = cResult[15];
        }
        return tmp19;
      }
      const tmp21 = jsx(searchContext(5995).Card, { variant: "primary", border: "subtle", style: tmp13, children: tmp16 });
      cResult[13] = tmp13;
      cResult[14] = tmp16;
      cResult[15] = tmp21;
      tmp19 = tmp21;
    }
    const items = [tmp4.header, headerMessages];
    cResult[6] = headerMessages;
    cResult[7] = tmp4.header;
    cResult[8] = items;
    tmp13 = items;
  }
  const fn = function b() {
    const obj = search_tracking_TrackingDefault;
    const obj2 = { searchContext, isHistoricalIndexing: true, documentsIndexed };
    obj.trackSearchIndexing(obj2);
  };
  const items1 = [documentsIndexed, searchContext];
  cResult[2] = documentsIndexed;
  cResult[3] = searchContext;
  cResult[4] = fn;
  cResult[5] = items1;
  tmp10 = items1;
  tmp9 = fn;
}) : ((searchContext) => {
  let intl;
  searchContext = searchContext.searchContext;
  const documentsIndexed = searchContext.documentsIndexed;
  const tab = searchContext.tab;
  const tmp = closure_7();
  react = tmp;
  const items = [documentsIndexed];
  const items1 = [tmp.headerMessages, tab];
  const memo = react.useMemo(() => {
    const NumberResult = Number(documentsIndexed);
    return NumberResult.toLocaleString(LocaleStore.locale);
  }, items);
  const items2 = [documentsIndexed, searchContext];
  const memo1 = react.useMemo(() => {
    if (tab === hasOwnProperty.MESSAGES) {
      headerMessages = headerMessages.headerMessages;
    }
    return headerMessages;
  }, items1);
  const effect = react.useEffect(() => {
    const obj = search_tracking_TrackingDefault;
    const obj2 = { searchContext, isHistoricalIndexing: true, documentsIndexed };
    obj.trackSearchIndexing(obj2);
  }, items2);
  const items3 = [tmp.header, memo1];
  const Card = searchContext(tab[10]).Card;
  let obj2 = { variant: "heading-sm/normal", color: "interactive-text-default", children: intl.format(searchContext(tab[8]).t["4Y3O+O"], { count: memo }) };
  const Text = searchContext(tab[9]).Text;
  intl = searchContext(tab[8]).intl;
  return <Card variant="primary" border="subtle" style={items3}>{null}</Card>;
});
const result = size.fileFinishedImporting("modules/search/native/components/tabs/pages/messages/SearchHistoricalIndexingHeader.tsx");

export default tmp3;