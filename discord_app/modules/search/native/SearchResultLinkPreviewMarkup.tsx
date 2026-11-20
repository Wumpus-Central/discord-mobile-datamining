// === Module 18644: SearchResultLinkPreviewMarkup ===

// Module 18644 (SearchResultLinkPreviewMarkup)
import MarkupRulesDefault from "MarkupRules" /* 5817 */;
import combineMarkupRules from "combineMarkupRules" /* 5816 */;
import MarkupParser from "markup/MarkupParser" /* 8606 */;

const items = [MarkupRulesDefault.NATIVE_SEARCH_RESULT_LINK_RULES, fn(18645).createSearchResultLinkPreviewReactRules()];
const MarkupSearchResultLinkPreviewReactRules = fn(18645);
const importDefaultResultResult = combineMarkupRules(items);
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/SearchResultLinkPreviewMarkup.tsx");

export const NativeSearchResultLinkPreviewParser = MarkupParser.reactParserFor(combineMarkupRules(items));