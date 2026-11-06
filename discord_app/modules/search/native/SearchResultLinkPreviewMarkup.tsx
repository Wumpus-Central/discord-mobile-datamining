// === Module 19039: SearchResultLinkPreviewMarkup ===

// Module 19039 (SearchResultLinkPreviewMarkup)
import MarkupRulesDefault from "MarkupRules" /* 6192 */;
import combineMarkupRules from "combineMarkupRules" /* 6191 */;
import MarkupParser from "MarkupParser" /* 8536 */;

const items = [MarkupRulesDefault.NATIVE_SEARCH_RESULT_LINK_RULES, fn(19040).createSearchResultLinkPreviewReactRules()];
const MarkupSearchResultLinkPreviewReactRules = fn(19040);
const importDefaultResultResult = combineMarkupRules(items);
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/SearchResultLinkPreviewMarkup.tsx");

export const NativeSearchResultLinkPreviewParser = MarkupParser.reactParserFor(combineMarkupRules(items));