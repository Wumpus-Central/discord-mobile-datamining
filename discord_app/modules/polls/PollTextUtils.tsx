// discord_app/modules/polls/PollTextUtils.tsx
import MarkupUtilsDefault from "../markup/MarkupUtils.tsx";
import markup_MarkupParser from "../../../discord_common/js/packages/markup/MarkupParser.tsx";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/polls/PollTextUtils.tsx");

export function getPollPlainText(questionText) {
  const parsePollToASTResult = MarkupUtilsDefault.parsePollToAST(questionText, true);
  markup_MarkupParser.walkAst(parsePollToASTResult, (type) => {
    if ("timestamp" === type.type) {
      type.content = type.formatted;
    }
  });
  return markup_MarkupParser.astToString(parsePollToASTResult);
}
