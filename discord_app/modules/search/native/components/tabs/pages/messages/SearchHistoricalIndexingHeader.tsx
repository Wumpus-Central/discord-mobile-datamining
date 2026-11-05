// === Module 19089: SearchHistoricalIndexingHeader ===

// Module 19089 (SearchHistoricalIndexingHeader)
import TrackingDefault from "Tracking" /* 14138 */;
import noop from "module_19" /* 19 */;
import LocaleStore from "LocaleStore" /* 2191 */;

const require = fn;
const SearchConstants = fn(9982);
({ SearchTabs: hasOwnProperty, SEARCH_LIST_HORIZONTAL_PADDING, SEARCH_ROW_TAP_STATE_PADDING } = SearchConstants);
const jsx = fn(21).jsx;
const createStyles = fn(5143);
let closure_7 = createStyles.createStyles({ header: { marginBottom: 16 }, headerMessages: { marginHorizontal: SEARCH_LIST_HORIZONTAL_PADDING, marginTop: SEARCH_ROW_TAP_STATE_PADDING } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/components/tabs/pages/messages/SearchHistoricalIndexingHeader.tsx");

export default function HistoricalIndexingHeader(searchContext) {
  searchContext = searchContext.searchContext;
  const documentsIndexed = searchContext.documentsIndexed;
  const tab = searchContext.tab;
  const tmp = closure_7();
  noop = tmp;
  items = [documentsIndexed];
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
    TrackingDefault.trackSearchIndexing({ searchContext, isHistoricalIndexing: true, documentsIndexed });
  }, items2);
  const obj = { variant: "primary", border: "subtle", style: null, children: null };
  const items3 = [tmp.header, memo1];
  obj.style = items3;
  const obj2 = { variant: "heading-xs/medium", color: "interactive-text-default", children: null };
  const intl = searchContext(tab[8]).intl;
  obj2.children = intl.format(searchContext(tab[8]).t["4Y3O+O"], { count: memo });
  obj.children = jsx(searchContext(tab[7]).Text, { variant: "heading-xs/medium", color: "interactive-text-default", children: null });
  return jsx(searchContext(tab[6]).Card, { variant: "primary", border: "subtle", style: null, children: null });
};