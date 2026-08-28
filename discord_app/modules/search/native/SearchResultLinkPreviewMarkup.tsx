// === Module 16190: NativeSearchResultLinkPreviewParser ===

// Module 16190 (NativeSearchResultLinkPreviewParser)
import parseLinkDefault from "parseLink" /* 4916 */;
import importDefaultResult from "combineMarkupRules" /* 4915 */;
import createSearchResultLinkPreviewReactRules from "createSearchResultLinkPreviewReactRules" /* 16191 */;
import importAllResult from "reactParserFor" /* 7842 */;

const items = [parseLinkDefault.NATIVE_SEARCH_RESULT_LINK_RULES, ];
items[1] = require("createSearchResultLinkPreviewReactRules").createSearchResultLinkPreviewReactRules();
const importDefaultResultResult = importDefaultResult(items);
const reactParserForResult = importAllResult.reactParserFor(importDefaultResultResult);
const result = require("set").fileFinishedImporting("modules/search/native/SearchResultLinkPreviewMarkup.tsx");

export const NativeSearchResultLinkPreviewParser = reactParserForResult;