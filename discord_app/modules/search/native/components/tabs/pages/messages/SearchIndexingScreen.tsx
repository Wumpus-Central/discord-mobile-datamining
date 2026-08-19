// discord_app/modules/search/native/components/tabs/pages/messages/SearchIndexingScreen.tsx
import _modDef11531 from "../../../../tracking/Tracking.tsx";
import _modDef15862 from "../ErrorScreen.tsx";
import noop from "../../../../../../../../_runtime/00019_noop.js";
import { jsx } from "../../../../../../../../_runtime/react/00021_jsxProd.js";

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