// === Module 17843: SearchResultLinkPreviewMarkup ===

// Module 17843 (SearchResultLinkPreviewMarkup)
import MarkupRulesDefault from "MarkupRules" /* 5937 */;
import combineMarkupRules from "combineMarkupRules" /* 5936 */;
import MarkupParser from "MarkupParser" /* 8288 */;

const items = [MarkupRulesDefault.NATIVE_SEARCH_RESULT_LINK_RULES, fn(17844).createSearchResultLinkPreviewReactRules()];
const MarkupSearchResultLinkPreviewReactRules = fn(17844);
const importDefaultResultResult = combineMarkupRules(items);
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/SearchResultLinkPreviewMarkup.tsx");

export const NativeSearchResultLinkPreviewParser = MarkupParser.reactParserFor(combineMarkupRules(items));