// discord_app/modules/search/native/SearchResultLinkPreviewMarkup.tsx
import parseLinkDefault from "../../markup/MarkupRules.tsx";
import importDefaultResult from "../../markup/combineMarkupRules.tsx";
import createSearchResultLinkPreviewReactRules from "../../markup/native/MarkupSearchResultLinkPreviewReactRules.tsx";
import importAllResult from "../../../../discord_common/js/packages/markup/MarkupParser.tsx";

const items = [parseLinkDefault.NATIVE_SEARCH_RESULT_LINK_RULES];
items[1] = require("createSearchResultLinkPreviewReactRules").createSearchResultLinkPreviewReactRules();
const importDefaultResultResult = importDefaultResult(items);
const reactParserForResult = importAllResult.reactParserFor(importDefaultResultResult);
const result = require("set").fileFinishedImporting("modules/search/native/SearchResultLinkPreviewMarkup.tsx");

export const NativeSearchResultLinkPreviewParser = reactParserForResult;
