// === Module 16772: SearchResultLinkPreviewMarkup ===

// Module 16772 (SearchResultLinkPreviewMarkup)
import MarkupRulesDefault from "MarkupRules" /* 5048 */;
import combineMarkupRules from "combineMarkupRules" /* 5047 */;
import MarkupParser from "MarkupParser" /* 8039 */;

const items = [MarkupRulesDefault.NATIVE_SEARCH_RESULT_LINK_RULES, fn(16773).createSearchResultLinkPreviewReactRules()];
const MarkupSearchResultLinkPreviewReactRules = fn(16773);
const importDefaultResultResult = combineMarkupRules(items);
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/SearchResultLinkPreviewMarkup.tsx");

export const NativeSearchResultLinkPreviewParser = MarkupParser.reactParserFor(combineMarkupRules(items));