// === Module 16510: HistoricalIndexingHeader ===

// Module 16510 (HistoricalIndexingHeader)
import closure_3 from "noop" /* 19 */;
import closure_4 from "_getSystemLocale" /* 1995 */;
import MessageEmbedTypes from "MessageEmbedTypes" /* 7632 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

const require = arg1;
({ SearchTabs: c5, SEARCH_LIST_HORIZONTAL_PADDING, SEARCH_ROW_TAP_STATE_PADDING } = MessageEmbedTypes);
let closure_7 = createCacheKey.createStyles({ header: { marginBottom: 16 }, headerMessages: { marginHorizontal: SEARCH_LIST_HORIZONTAL_PADDING, marginTop: SEARCH_ROW_TAP_STATE_PADDING } });
const result = require("set").fileFinishedImporting("modules/search/native/components/tabs/pages/messages/SearchHistoricalIndexingHeader.tsx");

export default function HistoricalIndexingHeader(searchContext) {
  searchContext = searchContext.searchContext;
  const documentsIndexed = searchContext.documentsIndexed;
  const tab = searchContext.tab;
  let React;
  const tmp = callback();
  React = tmp;
  const items = [documentsIndexed];
  const items1 = [tmp.headerMessages, tab];
  const memo = React.useMemo(() => Number(documentsIndexed).toLocaleString(closure_1_4.locale), items);
  const items2 = [documentsIndexed, searchContext];
  const memo1 = React.useMemo(() => {
    if (tab === closure_1_5.MESSAGES) {
      headerMessages = headerMessages.headerMessages;
    }
    return headerMessages;
  }, items1);
  const effect = React.useEffect(() => {
    let obj = documentsIndexed(tab[5]);
    obj = { searchContext, isHistoricalIndexing: true, documentsIndexed };
    obj.trackSearchIndexing(obj);
  }, items2);
  let obj = { variant: "primary", border: "subtle", style: items3, children: null };
  items3 = [tmp.header, memo1];
  obj = { variant: "heading-sm/normal", color: "interactive-text-default", children: null };
  const intl = searchContext(tab[8]).intl;
  obj[2] = intl.format(searchContext(tab[8]).t["4Y3O+O"], { count: memo });
  obj[3] = jsx(searchContext(tab[7]).Text, { variant: "heading-sm/normal", color: "interactive-text-default", children: null });
  return jsx(searchContext(tab[6]).Card, { variant: "heading-sm/normal", color: "interactive-text-default", children: null });
};