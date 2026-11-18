// === Module 18828: SearchResultLinkPreviewMarkup ===

// Module 18828 (SearchResultLinkPreviewMarkup)
import MarkupRulesDefault from "MarkupRules" /* 5844 */;
import combineMarkupRules from "combineMarkupRules" /* 5843 */;
import MarkupParser from "markup/MarkupParser" /* 8638 */;

const items = [MarkupRulesDefault.NATIVE_SEARCH_RESULT_LINK_RULES, fn(18829).createSearchResultLinkPreviewReactRules()];
const MarkupSearchResultLinkPreviewReactRules = fn(18829);
const importDefaultResultResult = combineMarkupRules(items);
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/SearchResultLinkPreviewMarkup.tsx");

export const NativeSearchResultLinkPreviewParser = MarkupParser.reactParserFor(combineMarkupRules(items));