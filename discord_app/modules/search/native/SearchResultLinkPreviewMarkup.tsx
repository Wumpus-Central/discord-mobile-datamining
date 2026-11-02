// === Module 18744: SearchResultLinkPreviewMarkup ===

// Module 18744 (SearchResultLinkPreviewMarkup)
import MarkupRulesDefault from "MarkupRules" /* 6034 */;
import combineMarkupRules from "combineMarkupRules" /* 6033 */;
import MarkupParser from "MarkupParser" /* 8444 */;

const items = [MarkupRulesDefault.NATIVE_SEARCH_RESULT_LINK_RULES, fn(18745).createSearchResultLinkPreviewReactRules()];
const MarkupSearchResultLinkPreviewReactRules = fn(18745);
const importDefaultResultResult = combineMarkupRules(items);
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/SearchResultLinkPreviewMarkup.tsx");

export const NativeSearchResultLinkPreviewParser = MarkupParser.reactParserFor(combineMarkupRules(items));