// === Module 15554: HistoricalIndexingHeader ===

// Module 15554 (HistoricalIndexingHeader)
import noop from "noop";
import _getSystemLocale from "_getSystemLocale";
import MessageEmbedTypes from "MessageEmbedTypes";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

let SEARCH_LIST_HORIZONTAL_PADDING;
let SEARCH_ROW_TAP_STATE_PADDING;
let c5;
const require = arg1;
({ SearchTabs: c5, SEARCH_LIST_HORIZONTAL_PADDING, SEARCH_ROW_TAP_STATE_PADDING } = MessageEmbedTypes);
let closure_7 = createCacheKey.createStyles({ header: { marginBottom: 16 }, headerMessages: { marginHorizontal: SEARCH_LIST_HORIZONTAL_PADDING, marginTop: SEARCH_ROW_TAP_STATE_PADDING } });
const result = require("MessageEmbedTypes").fileFinishedImporting("modules/search/native/components/tabs/pages/messages/SearchHistoricalIndexingHeader.tsx");

export default function HistoricalIndexingHeader(searchContext) {
  searchContext = searchContext.searchContext;
  const documentsIndexed = searchContext.documentsIndexed;
  const tab = searchContext.tab;
  let React;
  const tmp = callback();
  React = tmp;
  const items = [documentsIndexed];
  const items1 = [tmp.headerMessages, tab];
  const memo = React.useMemo(() => Number(documentsIndexed).toLocaleString(outer1_4.locale), items);
  const items2 = [documentsIndexed, searchContext];
  const memo1 = React.useMemo(() => {
    if (tab === outer1_5.MESSAGES) {
      const headerMessages = _undefined.headerMessages;
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