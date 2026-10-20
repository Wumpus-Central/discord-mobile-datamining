// === Module 17866: SearchResultLinkPreviewMarkup ===

// Module 17866 (SearchResultLinkPreviewMarkup)
import MarkupRulesDefault from "MarkupRules" /* 5940 */;
import combineMarkupRules from "combineMarkupRules" /* 5939 */;
import MarkupParser from "MarkupParser" /* 8292 */;

const items = [MarkupRulesDefault.NATIVE_SEARCH_RESULT_LINK_RULES, fn(17867).createSearchResultLinkPreviewReactRules()];
const MarkupSearchResultLinkPreviewReactRules = fn(17867);
const importDefaultResultResult = combineMarkupRules(items);
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/SearchResultLinkPreviewMarkup.tsx");

export const NativeSearchResultLinkPreviewParser = MarkupParser.reactParserFor(combineMarkupRules(items));