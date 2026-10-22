// === Module 11764: conjureMarkup ===

// Module 11764 (conjureMarkup)
import MarkupUtilsDefault from "MarkupUtils" /* 5691 */;
import conjureFileMentions from "conjureFileMentions" /* 11765 */;
import ConjureFileMentionDefault from "ConjureFileMention" /* 11766 */;
import noop from "module_19" /* 19 */;
import apply from "module_12" /* 12 */;

require = fn;
const jsx = fn(21).jsx;
let closure_4 = apply.once(() => {
  const obj2 = {};
  const merged = Object.assign(MarkupUtilsDefault.defaultRules);
  const obj = MarkupUtilsDefault;
  obj2.conjureFile = conjureFileMentions.createConjureFileMentionRule((attachmentId, id) => jsx(ConjureFileMentionDefault, { attachmentId }, id));
  return obj.reactParserFor(obj2);
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/chat/native/conjureMarkup.tsx");

export const parseConjureMarkup = function parseConjureMarkup() {
  const items = [...arguments];
  return closure_4()(...items);
};