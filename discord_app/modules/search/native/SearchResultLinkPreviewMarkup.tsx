// === Module 18162: SearchResultLinkPreviewMarkup ===

// Module 18162 (SearchResultLinkPreviewMarkup)
import MarkupRulesDefault from "MarkupRules" /* 5983 */;
import combineMarkupRules from "combineMarkupRules" /* 5982 */;
import MarkupParser from "MarkupParser" /* 8343 */;

const items = [MarkupRulesDefault.NATIVE_SEARCH_RESULT_LINK_RULES, fn(18163).createSearchResultLinkPreviewReactRules()];
const MarkupSearchResultLinkPreviewReactRules = fn(18163);
const importDefaultResultResult = combineMarkupRules(items);
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/SearchResultLinkPreviewMarkup.tsx");

export const NativeSearchResultLinkPreviewParser = MarkupParser.reactParserFor(combineMarkupRules(items));