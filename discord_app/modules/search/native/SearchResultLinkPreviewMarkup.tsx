// === Module 17750: SearchResultLinkPreviewMarkup ===

// Module 17750 (SearchResultLinkPreviewMarkup)
import MarkupRulesDefault from "MarkupRules" /* 5465 */;
import combineMarkupRules from "combineMarkupRules" /* 5464 */;
import MarkupParser from "MarkupParser" /* 8226 */;

const items = [MarkupRulesDefault.NATIVE_SEARCH_RESULT_LINK_RULES, fn(17751).createSearchResultLinkPreviewReactRules()];
const MarkupSearchResultLinkPreviewReactRules = fn(17751);
const importDefaultResultResult = combineMarkupRules(items);
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/SearchResultLinkPreviewMarkup.tsx");

export const NativeSearchResultLinkPreviewParser = MarkupParser.reactParserFor(combineMarkupRules(items));