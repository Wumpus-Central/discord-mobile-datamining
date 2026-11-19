// === Module 18820: SearchResultLinkPreviewMarkup ===

// Module 18820 (SearchResultLinkPreviewMarkup)
import MarkupRulesDefault from "MarkupRules" /* 5815 */;
import combineMarkupRules from "combineMarkupRules" /* 5814 */;
import MarkupParser from "markup/MarkupParser" /* 8607 */;

const items = [MarkupRulesDefault.NATIVE_SEARCH_RESULT_LINK_RULES, fn(18821).createSearchResultLinkPreviewReactRules()];
const MarkupSearchResultLinkPreviewReactRules = fn(18821);
const importDefaultResultResult = combineMarkupRules(items);
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/SearchResultLinkPreviewMarkup.tsx");

export const NativeSearchResultLinkPreviewParser = MarkupParser.reactParserFor(combineMarkupRules(items));