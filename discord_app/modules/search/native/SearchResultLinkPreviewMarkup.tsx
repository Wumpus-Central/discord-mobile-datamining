// === Module 17814: SearchResultLinkPreviewMarkup ===

// Module 17814 (SearchResultLinkPreviewMarkup)
import MarkupRulesDefault from "MarkupRules" /* 5502 */;
import combineMarkupRules from "combineMarkupRules" /* 5501 */;
import MarkupParser from "MarkupParser" /* 8272 */;

const items = [MarkupRulesDefault.NATIVE_SEARCH_RESULT_LINK_RULES, fn(17815).createSearchResultLinkPreviewReactRules()];
const MarkupSearchResultLinkPreviewReactRules = fn(17815);
const importDefaultResultResult = combineMarkupRules(items);
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/SearchResultLinkPreviewMarkup.tsx");

export const NativeSearchResultLinkPreviewParser = MarkupParser.reactParserFor(combineMarkupRules(items));