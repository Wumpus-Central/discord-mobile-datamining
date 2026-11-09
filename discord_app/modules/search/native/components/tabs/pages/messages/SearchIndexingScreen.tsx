// discord_app/modules/search/native/components/tabs/pages/messages/SearchIndexingScreen.tsx
import TrackingDefault from "../../../../tracking/Tracking.tsx";
import pages_ErrorScreenDefault from "../ErrorScreen.tsx";
import noop from "../../../../../../../../_runtime/metro/00019__.js";

const require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/search/native/components/tabs/pages/messages/SearchIndexingScreen.tsx",
);

export default function SearchIndexingScreen(searchContext) {
  searchContext = searchContext.searchContext;
  items = [searchContext];
  const effect = noop.useEffect(() => {
    TrackingDefault.trackSearchIndexing({ searchContext });
  }, items);
  const text = searchContext(14127).getIndexingErrorText(searchContext);
  return jsx(pages_ErrorScreenDefault, { text });
}
