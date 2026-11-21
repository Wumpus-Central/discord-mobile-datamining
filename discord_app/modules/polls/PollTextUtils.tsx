// === Module 8790: PollTextUtils ===

// Module 8790 (PollTextUtils)
import MarkupUtilsDefault from "MarkupUtils" /* 5637 */;
import markup_MarkupParser from "markup/MarkupParser" /* 8726 */;
import size from "module_2" /* 2 */;

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