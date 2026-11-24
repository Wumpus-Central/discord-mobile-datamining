// === Module 18815: SearchResultLinkPreviewMarkup ===

// Module 18815 (SearchResultLinkPreviewMarkup)
import MarkupRulesDefault from "MarkupRules" /* 6946 */;
import combineMarkupRules from "combineMarkupRules" /* 6945 */;
import MarkupParser from "markup/MarkupParser" /* 7053 */;

const items = [MarkupRulesDefault.NATIVE_SEARCH_RESULT_LINK_RULES, fn(18816).createSearchResultLinkPreviewReactRules()];
const MarkupSearchResultLinkPreviewReactRules = fn(18816);
const importDefaultResultResult = combineMarkupRules(items);
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/SearchResultLinkPreviewMarkup.tsx");

export const NativeSearchResultLinkPreviewParser = MarkupParser.reactParserFor(combineMarkupRules(items));