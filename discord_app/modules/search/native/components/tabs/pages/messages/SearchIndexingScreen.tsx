import noop from "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("module_11644").fileFinishedImporting("modules/search/native/components/tabs/pages/messages/SearchIndexingScreen.tsx");

export default function SearchIndexingScreen(searchContext) {
  searchContext = searchContext.searchContext;
  const items = [searchContext];
  const effect = React.useEffect(() => {
    let obj = outer1_1(outer1_2[2]);
    obj = { searchContext };
    obj.trackSearchIndexing(obj);
  }, items);
  const text = searchContext(11624).getIndexingErrorText(searchContext);
  return jsx(importDefault(15596), { text });
};