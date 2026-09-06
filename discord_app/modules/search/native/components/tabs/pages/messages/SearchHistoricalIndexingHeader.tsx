// === Module 16697: SearchHistoricalIndexingHeader ===

// Module 16697 (SearchHistoricalIndexingHeader)
import search_tracking_TrackingDefault from "search/tracking/Tracking" /* 12358 */;
import noop from "module_19" /* 19 */;
import LocaleStore from "LocaleStore" /* 2025 */;

const require = fn;
const SearchConstants = fn(7878);
({ SearchTabs: hasOwnProperty, SEARCH_LIST_HORIZONTAL_PADDING, SEARCH_ROW_TAP_STATE_PADDING } = SearchConstants);
const jsx = fn(21).jsx;
fn(4560);
const createStyles = { header: { marginBottom: 16 }, headerMessages: { marginHorizontal: SEARCH_LIST_HORIZONTAL_PADDING, marginTop: SEARCH_ROW_TAP_STATE_PADDING } };
let closure_7 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/components/tabs/pages/messages/SearchHistoricalIndexingHeader.tsx");

export default function HistoricalIndexingHeader(searchContext) {
  searchContext = searchContext.searchContext;
  const documentsIndexed = searchContext.documentsIndexed;
  const tab = searchContext.tab;
  const tmp = closure_7();
  noop = tmp;
  const items = [documentsIndexed];
  const items1 = [tmp.headerMessages, tab];
  const memo = noop.useMemo(() => Number(documentsIndexed).toLocaleString(LocaleStore.locale), items);
  const items2 = [documentsIndexed, searchContext];
  const memo1 = noop.useMemo(() => {
    if (tab === constants.MESSAGES) {
      headerMessages = headerMessages.headerMessages;
    }
    return headerMessages;
  }, items1);
  const effect = noop.useEffect(() => {
    const obj = { searchContext, isHistoricalIndexing: true, documentsIndexed };
    obj.trackSearchIndexing(obj);
  }, items2);
  let obj = { variant: "primary", border: "subtle", style: null, children: null };
  const items3 = [tmp.header, memo1];
  obj.style = items3;
  obj = { variant: "heading-sm/normal", color: "interactive-text-default", children: null };
  const intl = searchContext(tab[8]).intl;
  obj.children = intl.format(searchContext(tab[8]).t["4Y3O+O"], { count: memo });
  obj.children = jsx(searchContext(tab[7]).Text, { variant: "heading-sm/normal", color: "interactive-text-default", children: null });
  return jsx(searchContext(tab[6]).Card, { variant: "heading-sm/normal", color: "interactive-text-default", children: null });
};