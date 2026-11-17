// === Module 19552: SearchResultLinkPreviewMarkup ===

// Module 19552 (SearchResultLinkPreviewMarkup)
import MarkupRulesDefault from "MarkupRules" /* 6342 */;
import combineMarkupRules from "combineMarkupRules" /* 6341 */;
import MarkupParser from "markup/MarkupParser" /* 9227 */;

const items = [MarkupRulesDefault.NATIVE_SEARCH_RESULT_LINK_RULES, fn(19553).createSearchResultLinkPreviewReactRules()];
const MarkupSearchResultLinkPreviewReactRules = fn(19553);
const importDefaultResultResult = combineMarkupRules(items);
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/SearchResultLinkPreviewMarkup.tsx");

export const NativeSearchResultLinkPreviewParser = MarkupParser.reactParserFor(combineMarkupRules(items));