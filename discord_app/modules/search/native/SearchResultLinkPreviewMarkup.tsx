// === Module 16849: SearchResultLinkPreviewMarkup ===

// Module 16849 (SearchResultLinkPreviewMarkup)
import MarkupRulesDefault from "MarkupRules" /* 5787 */;
import combineMarkupRules from "combineMarkupRules" /* 5786 */;
import MarkupParser from "MarkupParser" /* 7646 */;

const items = [MarkupRulesDefault.NATIVE_SEARCH_RESULT_LINK_RULES, fn(16850).createSearchResultLinkPreviewReactRules()];
const MarkupSearchResultLinkPreviewReactRules = fn(16850);
const importDefaultResultResult = combineMarkupRules(items);
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/SearchResultLinkPreviewMarkup.tsx");

export const NativeSearchResultLinkPreviewParser = MarkupParser.reactParserFor(combineMarkupRules(items));