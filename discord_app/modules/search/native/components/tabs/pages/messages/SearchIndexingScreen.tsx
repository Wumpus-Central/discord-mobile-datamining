// === Module 18735: SearchIndexingScreen ===

// Module 18735 (SearchIndexingScreen)
import search_tracking_TrackingDefault from "search/tracking/Tracking" /* 13857 */;
import pages_ErrorScreenDefault from "pages/ErrorScreen" /* 18654 */;
import noop from "module_19" /* 19 */;

const require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/components/tabs/pages/messages/SearchIndexingScreen.tsx");

export default function SearchIndexingScreen(searchContext) {
  searchContext = searchContext.searchContext;
  const items = [searchContext];
  const effect = noop.useEffect(() => {
    search_tracking_TrackingDefault.trackSearchIndexing({ searchContext });
  }, items);
  const text = searchContext(13843).getIndexingErrorText(searchContext);
  return jsx(pages_ErrorScreenDefault, { text });
};