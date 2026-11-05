// === Module 19050: SearchResultLinkPreviewMarkup ===

// Module 19050 (SearchResultLinkPreviewMarkup)
import MarkupRulesDefault from "MarkupRules" /* 6172 */;
import combineMarkupRules from "combineMarkupRules" /* 6171 */;
import MarkupParser from "MarkupParser" /* 8590 */;

const items = [MarkupRulesDefault.NATIVE_SEARCH_RESULT_LINK_RULES, fn(19051).createSearchResultLinkPreviewReactRules()];
const MarkupSearchResultLinkPreviewReactRules = fn(19051);
const importDefaultResultResult = combineMarkupRules(items);
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/SearchResultLinkPreviewMarkup.tsx");

export const NativeSearchResultLinkPreviewParser = MarkupParser.reactParserFor(combineMarkupRules(items));