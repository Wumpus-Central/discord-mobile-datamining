// discord_app/modules/search/native/components/tabs/pages/messages/SearchHistoricalIndexingHeader.tsx
import noop from "../../../../../../../../_runtime/00019_noop.js";
import _getSystemLocale from "../../../../../../user_settings/LocaleStore.tsx";
import MessageEmbedTypes from "../../../../../SearchConstants.tsx";
import { jsx } from "../../../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../../../design/components/Styles/native/createStyles.tsx";

const require = fn;
({ SearchTabs: c5, SEARCH_LIST_HORIZONTAL_PADDING, SEARCH_ROW_TAP_STATE_PADDING } = MessageEmbedTypes);
let closure_7 = createCacheKey.createStyles({ header: { marginBottom: 16 }, headerMessages: { marginHorizontal: SEARCH_LIST_HORIZONTAL_PADDING, marginTop: SEARCH_ROW_TAP_STATE_PADDING } });
const result = require("obj132").fileFinishedImporting("modules/search/native/components/tabs/pages/messages/SearchHistoricalIndexingHeader.tsx");

export default function HistoricalIndexingHeader(searchContext) {
  searchContext = searchContext.searchContext;
  const documentsIndexed = searchContext.documentsIndexed;
  const tab = searchContext.tab;
  const tmp = callback();
  const React = tmp;
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
    documentsIndexed(tab[5]);
    const obj = { searchContext, isHistoricalIndexing: true, documentsIndexed };
    obj.trackSearchIndexing(obj);
  }, items2);
  const items3 = [tmp.header, memo1];
  let obj = { variant: "heading-sm/normal", color: "interactive-text-default", children: null };
  const intl = searchContext(tab[8]).intl;
  obj[2] = intl.format(searchContext(tab[8]).t["4Y3O+O"], { count: memo });
  obj[3] = jsx(searchContext(tab[7]).Text, { variant: "heading-sm/normal", color: "interactive-text-default", children: null });
  return jsx(searchContext(tab[6]).Card, { variant: "heading-sm/normal", color: "interactive-text-default", children: null });
};