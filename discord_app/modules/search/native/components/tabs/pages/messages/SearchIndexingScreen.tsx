// === Module 16532: SearchIndexingScreen ===

// Module 16532 (SearchIndexingScreen)
import _modDef16475 from "module_16475" /* 16475 */;
import closure_3 from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/search/native/components/tabs/pages/messages/SearchIndexingScreen.tsx");

export default function SearchIndexingScreen(searchContext) {
  searchContext = searchContext.searchContext;
  const items = [searchContext];
  const effect = React.useEffect(() => {
    let obj = closure_1_1(closure_1_2[2]);
    obj = { searchContext };
    obj.trackSearchIndexing(obj);
  }, items);
  const text = searchContext(12136).getIndexingErrorText(searchContext);
  return jsx(_modDef16475, { text });
};