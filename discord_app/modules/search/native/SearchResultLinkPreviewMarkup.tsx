// === Module 17150: SearchResultLinkPreviewMarkup ===

// Module 17150 (SearchResultLinkPreviewMarkup)
import MarkupRulesDefault from "MarkupRules" /* 5209 */;
import combineMarkupRules from "combineMarkupRules" /* 5208 */;
import MarkupParser from "MarkupParser" /* 8245 */;

const items = [MarkupRulesDefault.NATIVE_SEARCH_RESULT_LINK_RULES, fn(17151).createSearchResultLinkPreviewReactRules()];
const MarkupSearchResultLinkPreviewReactRules = fn(17151);
const importDefaultResultResult = combineMarkupRules(items);
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/SearchResultLinkPreviewMarkup.tsx");

export const NativeSearchResultLinkPreviewParser = MarkupParser.reactParserFor(combineMarkupRules(items));