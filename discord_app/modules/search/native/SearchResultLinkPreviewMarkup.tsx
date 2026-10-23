// === Module 18083: SearchResultLinkPreviewMarkup ===

// Module 18083 (SearchResultLinkPreviewMarkup)
import MarkupRulesDefault from "MarkupRules" /* 5980 */;
import combineMarkupRules from "combineMarkupRules" /* 5979 */;
import MarkupParser from "MarkupParser" /* 8342 */;

const items = [MarkupRulesDefault.NATIVE_SEARCH_RESULT_LINK_RULES, fn(18084).createSearchResultLinkPreviewReactRules()];
const MarkupSearchResultLinkPreviewReactRules = fn(18084);
const importDefaultResultResult = combineMarkupRules(items);
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/SearchResultLinkPreviewMarkup.tsx");

export const NativeSearchResultLinkPreviewParser = MarkupParser.reactParserFor(combineMarkupRules(items));