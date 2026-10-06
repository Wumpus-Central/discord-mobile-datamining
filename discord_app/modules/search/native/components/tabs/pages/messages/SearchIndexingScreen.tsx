// === Module 16909: SearchIndexingScreen ===

// Module 16909 (SearchIndexingScreen)
import Fragment from "Fragment" /* 21 */;
import search_tracking_TrackingDefault from "search/tracking/Tracking" /* 12001 */;
import ErrorScreenDefault from "ErrorScreen" /* 16829 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let searchContext;

const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((searchContext) => {
  let tmp4;
  let tmp5;
  let tmp7;
  let tmp9;
  let obj = searchContext(576);
  const cResult = obj.c(7);
  const tmp = searchContext;
  searchContext = searchContext.searchContext;
  if (cResult[0] !== searchContext) {
    const fn = function s() {
      const obj = search_tracking_TrackingDefault;
      const obj2 = { searchContext };
      obj.trackSearchIndexing(obj2);
    };
    const items = [searchContext];
    cResult[0] = searchContext;
    cResult[1] = fn;
    cResult[2] = items;
    tmp5 = items;
    tmp4 = fn;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  const effect = react.useEffect(tmp4, tmp5);
  if (cResult[3] !== searchContext) {
    const tmpResult = tmp(11987);
    const indexingErrorText = tmpResult.getIndexingErrorText(searchContext);
    cResult[3] = searchContext;
    cResult[4] = indexingErrorText;
    tmp7 = indexingErrorText;
  } else {
    tmp7 = cResult[4];
  }
  if (cResult[5] !== tmp7) {
    const tmp12 = jsx(ErrorScreenDefault, { text: tmp7 });
    cResult[5] = tmp7;
    cResult[6] = tmp12;
    tmp9 = tmp12;
  } else {
    tmp9 = cResult[6];
  }
  return tmp9;
}) : ((searchContext) => {
  searchContext = searchContext.searchContext;
  const items = [searchContext];
  const effect = react.useEffect(() => {
    const obj = search_tracking_TrackingDefault;
    const obj2 = { searchContext };
    obj.trackSearchIndexing(obj2);
  }, items);
  let obj = searchContext(11987);
  const text = obj.getIndexingErrorText(searchContext);
  return jsx(ErrorScreenDefault, { text });
});
const result = size.fileFinishedImporting("modules/search/native/components/tabs/pages/messages/SearchIndexingScreen.tsx");

export default tmp2;