// === Module 18350: conjureMarkup ===

// Module 18350 (conjureMarkup)
import MarkupUtilsDefault from "MarkupUtils" /* 5516 */;
import conjureFileMentions from "conjureFileMentions" /* 18351 */;
import ConjureFileMentionDefault from "ConjureFileMention" /* 18352 */;
import noop from "module_19" /* 19 */;
import apply from "apply" /* 12 */;

require = fn;
const jsx = fn(21).jsx;
let closure_4 = apply.once(() => {
  const obj2 = {};
  const merged = Object.assign(MarkupUtilsDefault.defaultRules);
  const obj = MarkupUtilsDefault;
  obj2.conjureFile = conjureFileMentions.createConjureFileMentionRule((attachmentId, key) => jsx(ConjureFileMentionDefault, { attachmentId }, key));
  return obj.reactParserFor(obj2);
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/chat/native/conjureMarkup.tsx");

export function parseConjureMarkup() {
  items = [...arguments];
  return closure_4()(...items);
}