// === Module 16028: NativeSearchResultLinkPreviewParser ===

// Module 16028 (NativeSearchResultLinkPreviewParser)
import parseLinkDefault from "parseLink" /* 4837 */;
import importDefaultResult from "combineMarkupRules" /* 4836 */;
import createSearchResultLinkPreviewReactRules from "createSearchResultLinkPreviewReactRules" /* 16029 */;
import importAllResult from "reactParserFor" /* 8247 */;

const items = [parseLinkDefault.NATIVE_SEARCH_RESULT_LINK_RULES, ];
items[1] = require("createSearchResultLinkPreviewReactRules").createSearchResultLinkPreviewReactRules();
const importDefaultResultResult = importDefaultResult(items);
const reactParserForResult = importAllResult.reactParserFor(importDefaultResultResult);
const result = require("set").fileFinishedImporting("modules/search/native/SearchResultLinkPreviewMarkup.tsx");

export const NativeSearchResultLinkPreviewParser = reactParserForResult;