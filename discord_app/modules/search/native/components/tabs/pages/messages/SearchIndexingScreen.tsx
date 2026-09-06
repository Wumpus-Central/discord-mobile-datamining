// discord_app/modules/search/native/components/tabs/pages/messages/SearchIndexingScreen.tsx
import search_tracking_TrackingDefault from "../../../../tracking/Tracking.tsx";
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
  const items = [searchContext];
  const effect = noop.useEffect(() => {
    const obj = { searchContext };
    obj.trackSearchIndexing(obj);
  }, items);
  const text = searchContext(12340).getIndexingErrorText(searchContext);
  return jsx(pages_ErrorScreenDefault, { text });
}
