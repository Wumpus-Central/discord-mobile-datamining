// === Module 16675: SearchResultLinkPreviewMarkup ===

// Module 16675 (SearchResultLinkPreviewMarkup)
import MarkupRulesDefault from "MarkupRules" /* 4998 */;
import combineMarkupRules from "combineMarkupRules" /* 4997 */;
import MarkupParser from "MarkupParser" /* 7987 */;

const items = [MarkupRulesDefault.NATIVE_SEARCH_RESULT_LINK_RULES, fn(16676).createSearchResultLinkPreviewReactRules()];
const MarkupSearchResultLinkPreviewReactRules = fn(16676);
const importDefaultResultResult = combineMarkupRules(items);
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/SearchResultLinkPreviewMarkup.tsx");

export const NativeSearchResultLinkPreviewParser = MarkupParser.reactParserFor(combineMarkupRules(items));