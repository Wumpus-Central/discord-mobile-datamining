// === Module 17063: SearchResultLinkPreviewMarkup ===

// Module 17063 (SearchResultLinkPreviewMarkup)
import MarkupRulesDefault from "MarkupRules" /* 5167 */;
import combineMarkupRules from "combineMarkupRules" /* 5166 */;
import MarkupParser from "MarkupParser" /* 8206 */;

const items = [MarkupRulesDefault.NATIVE_SEARCH_RESULT_LINK_RULES, fn(17064).createSearchResultLinkPreviewReactRules()];
const MarkupSearchResultLinkPreviewReactRules = fn(17064);
const importDefaultResultResult = combineMarkupRules(items);
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/SearchResultLinkPreviewMarkup.tsx");

export const NativeSearchResultLinkPreviewParser = MarkupParser.reactParserFor(combineMarkupRules(items));