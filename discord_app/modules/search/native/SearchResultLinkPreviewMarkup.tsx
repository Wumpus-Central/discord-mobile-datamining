// === Module 16719: SearchResultLinkPreviewMarkup ===

// Module 16719 (SearchResultLinkPreviewMarkup)
import MarkupRulesDefault from "MarkupRules" /* 5500 */;
import combineMarkupRules from "combineMarkupRules" /* 5499 */;
import MarkupParser from "MarkupParser" /* 7624 */;

const items = [MarkupRulesDefault.NATIVE_SEARCH_RESULT_LINK_RULES, fn(16720).createSearchResultLinkPreviewReactRules()];
const MarkupSearchResultLinkPreviewReactRules = fn(16720);
const importDefaultResultResult = combineMarkupRules(items);
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/SearchResultLinkPreviewMarkup.tsx");

export const NativeSearchResultLinkPreviewParser = MarkupParser.reactParserFor(combineMarkupRules(items));