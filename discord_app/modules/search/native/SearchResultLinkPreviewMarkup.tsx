// === Module 18989: SearchResultLinkPreviewMarkup ===

// Module 18989 (SearchResultLinkPreviewMarkup)
import MarkupRulesDefault from "MarkupRules" /* 7072 */;
import combineMarkupRules from "combineMarkupRules" /* 7071 */;
import MarkupParser from "markup/MarkupParser" /* 7179 */;

const items = [MarkupRulesDefault.NATIVE_SEARCH_RESULT_LINK_RULES, fn(18990).createSearchResultLinkPreviewReactRules()];
const MarkupSearchResultLinkPreviewReactRules = fn(18990);
const importDefaultResultResult = combineMarkupRules(items);
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/SearchResultLinkPreviewMarkup.tsx");

export const NativeSearchResultLinkPreviewParser = MarkupParser.reactParserFor(combineMarkupRules(items));