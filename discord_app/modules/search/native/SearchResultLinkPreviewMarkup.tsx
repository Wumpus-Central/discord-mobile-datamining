// === Module 16172: NativeSearchResultLinkPreviewParser ===

// Module 16172 (NativeSearchResultLinkPreviewParser)
import parseLinkDefault from "parseLink" /* 4903 */;
import importDefaultResult from "combineMarkupRules" /* 4902 */;
import createSearchResultLinkPreviewReactRules from "createSearchResultLinkPreviewReactRules" /* 16173 */;
import importAllResult from "reactParserFor" /* 7828 */;

const items = [parseLinkDefault.NATIVE_SEARCH_RESULT_LINK_RULES, ];
items[1] = require("createSearchResultLinkPreviewReactRules").createSearchResultLinkPreviewReactRules();
const importDefaultResultResult = importDefaultResult(items);
const reactParserForResult = importAllResult.reactParserFor(importDefaultResultResult);
const result = require("set").fileFinishedImporting("modules/search/native/SearchResultLinkPreviewMarkup.tsx");

export const NativeSearchResultLinkPreviewParser = reactParserForResult;