// discord_app/modules/search/native/components/tabs/pages/messages/SearchIndexingScreen.tsx
import search_tracking_TrackingDefault from "../../../../tracking/Tracking.tsx";
import pages_ErrorScreenDefault from "../ErrorScreen.tsx";
import noop from "../../../../../../../../_runtime/metro/00019__.js";

const require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/search/native/components/tabs/pages/messages/SearchIndexingScreen.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function SearchIndexingScreen(searchContext) {
      const cResult = searchContext(576).c(7);
      searchContext = searchContext.searchContext;
      if (cResult[0] !== searchContext) {
        const fn = function s() {
          search_tracking_TrackingDefault.trackSearchIndexing({ searchContext });
        };
        const items = [searchContext];
        cResult[0] = searchContext;
        cResult[1] = fn;
        cResult[2] = items;
        let tmp5 = items;
        let tmp4 = fn;
      } else {
        tmp4 = cResult[1];
        tmp5 = cResult[2];
      }
      const effect = noop.useEffect(tmp4, tmp5);
      if (cResult[3] !== searchContext) {
        const indexingErrorText = searchContext(11997).getIndexingErrorText(searchContext);
        cResult[3] = searchContext;
        cResult[4] = indexingErrorText;
        let tmp7 = indexingErrorText;
        const tmpResult = searchContext(11997);
      } else {
        tmp7 = cResult[4];
      }
      if (cResult[5] !== tmp7) {
        const obj2 = { text: tmp7 };
        const tmp12 = jsx(pages_ErrorScreenDefault, { text: tmp7 });
        cResult[5] = tmp7;
        cResult[6] = tmp12;
        let tmp9 = tmp12;
      } else {
        tmp9 = cResult[6];
      }
      return tmp9;
    }
  : function SearchIndexingScreen(searchContext) {
      searchContext = searchContext.searchContext;
      const items = [searchContext];
      const effect = noop.useEffect(() => {
        search_tracking_TrackingDefault.trackSearchIndexing({ searchContext });
      }, items);
      const text = searchContext(11997).getIndexingErrorText(searchContext);
      return jsx(pages_ErrorScreenDefault, { text });
    };
