// === Module 17149: SearchResultLinkPreviewMarkup ===

// Module 17149 (SearchResultLinkPreviewMarkup)
import MarkupRulesDefault from "MarkupRules" /* 5398 */;
import combineMarkupRules from "combineMarkupRules" /* 5397 */;
import MarkupParser from "MarkupParser" /* 7978 */;

const items = [MarkupRulesDefault.NATIVE_SEARCH_RESULT_LINK_RULES, fn(17150).createSearchResultLinkPreviewReactRules()];
const MarkupSearchResultLinkPreviewReactRules = fn(17150);
const importDefaultResultResult = combineMarkupRules(items);
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/SearchResultLinkPreviewMarkup.tsx");

export const NativeSearchResultLinkPreviewParser = MarkupParser.reactParserFor(combineMarkupRules(items));