// discord_app/modules/search/native/SearchResultLinkPreviewMarkup.tsx
import MarkupRulesDefault from "../../markup/MarkupRules.tsx";
import combineMarkupRules from "../../markup/combineMarkupRules.tsx";
import MarkupParser from "../../../../discord_common/js/packages/markup/MarkupParser.tsx";

const items = [MarkupRulesDefault.NATIVE_SEARCH_RESULT_LINK_RULES, fn(16676).createSearchResultLinkPreviewReactRules()];
const MarkupSearchResultLinkPreviewReactRules = fn(16676);
const importDefaultResultResult = combineMarkupRules(items);
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/SearchResultLinkPreviewMarkup.tsx");

export const NativeSearchResultLinkPreviewParser = MarkupParser.reactParserFor(combineMarkupRules(items));
