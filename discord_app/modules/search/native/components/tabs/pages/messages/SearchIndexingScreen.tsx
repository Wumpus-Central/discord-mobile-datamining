// === Module 19079: SearchIndexingScreen ===

// Module 19079 (SearchIndexingScreen)
import TrackingDefault from "Tracking" /* 14115 */;
import pages_ErrorScreenDefault from "pages/ErrorScreen" /* 18998 */;
import noop from "module_19" /* 19 */;

const require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/components/tabs/pages/messages/SearchIndexingScreen.tsx");

export default function SearchIndexingScreen(searchContext) {
  searchContext = searchContext.searchContext;
  items = [searchContext];
  const effect = noop.useEffect(() => {
    TrackingDefault.trackSearchIndexing({ searchContext });
  }, items);
  const text = searchContext(14101).getIndexingErrorText(searchContext);
  return jsx(pages_ErrorScreenDefault, { text });
};