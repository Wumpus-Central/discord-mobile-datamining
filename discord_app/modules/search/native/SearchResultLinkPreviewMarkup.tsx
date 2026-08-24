// === Module 15996: NativeSearchResultLinkPreviewParser ===

// Module 15996 (NativeSearchResultLinkPreviewParser)
import parseLinkDefault from "parseLink" /* 6846 */;
import importDefaultResult from "combineMarkupRules" /* 6845 */;
import createSearchResultLinkPreviewReactRules from "createSearchResultLinkPreviewReactRules" /* 15997 */;
import importAllResult from "reactParserFor" /* 6940 */;

const items = [parseLinkDefault.NATIVE_SEARCH_RESULT_LINK_RULES, ];
items[1] = require("createSearchResultLinkPreviewReactRules").createSearchResultLinkPreviewReactRules();
const importDefaultResultResult = importDefaultResult(items);
const reactParserForResult = importAllResult.reactParserFor(importDefaultResultResult);
const result = require("set").fileFinishedImporting("modules/search/native/SearchResultLinkPreviewMarkup.tsx");

export const NativeSearchResultLinkPreviewParser = reactParserForResult;