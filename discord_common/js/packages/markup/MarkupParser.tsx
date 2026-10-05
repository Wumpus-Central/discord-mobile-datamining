// discord_common/js/packages/markup/MarkupParser.tsx
import markup_MarkupParser from "native/MarkupParser.tsx";
import MarkupASTUtils from "MarkupASTUtils.tsx";
import MarkupParserTypes from "MarkupParserTypes.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const reactParserFor = markup_MarkupParser.default.reactParserFor;
const astParserFor = markup_MarkupParser.default.astParserFor;
const result = size.fileFinishedImporting("../discord_common/js/packages/markup/MarkupParser.tsx");
for (const key10026 in MarkupASTUtils) {
  exports[key10026] = MarkupASTUtils[key10026];
  continue;
}
for (const key10030 in MarkupParserTypes) {
  exports[key10030] = MarkupParserTypes[key10030];
  continue;
}

export { reactParserFor };
export { astParserFor };
