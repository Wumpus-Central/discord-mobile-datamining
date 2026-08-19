// === Module 15899: NativeSearchResultLinkPreviewParser ===

// Module 15899 (NativeSearchResultLinkPreviewParser)
import parseLinkDefault from "parseLink" /* 6809 */;
import importDefaultResult from "combineMarkupRules" /* 6808 */;
import createSearchResultLinkPreviewReactRules from "createSearchResultLinkPreviewReactRules" /* 15900 */;
import importAllResult from "reactParserFor" /* 6902 */;

const items = [parseLinkDefault.NATIVE_SEARCH_RESULT_LINK_RULES, ];
items[1] = require("createSearchResultLinkPreviewReactRules").createSearchResultLinkPreviewReactRules();
const importDefaultResultResult = importDefaultResult(items);
const reactParserForResult = importAllResult.reactParserFor(importDefaultResultResult);
const result = require("obj132").fileFinishedImporting("modules/search/native/SearchResultLinkPreviewMarkup.tsx");

export const NativeSearchResultLinkPreviewParser = reactParserForResult;