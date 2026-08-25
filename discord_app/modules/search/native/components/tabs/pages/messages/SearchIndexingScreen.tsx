// === Module 16048: SearchIndexingScreen ===

// Module 16048 (SearchIndexingScreen)
import _modDef15991 from "module_15991" /* 15991 */;
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
  const text = searchContext(11907).getIndexingErrorText(searchContext);
  return jsx(_modDef15991, { text });
};