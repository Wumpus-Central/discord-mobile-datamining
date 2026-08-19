// === Module 15919: SearchIndexingScreen ===

// Module 15919 (SearchIndexingScreen)
import _modDef11531 from "module_11531" /* 11531 */;
import _modDef15862 from "module_15862" /* 15862 */;
import noop from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/search/native/components/tabs/pages/messages/SearchIndexingScreen.tsx");

export default function SearchIndexingScreen(searchContext) {
  searchContext = searchContext.searchContext;
  const items = [searchContext];
  const effect = React.useEffect(() => {
    const obj = { searchContext };
    obj.trackSearchIndexing(obj);
  }, items);
  const text = searchContext(11511).getIndexingErrorText(searchContext);
  return jsx(_modDef15862, { text });
};