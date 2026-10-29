// discord_app/modules/conjure/chat/native/conjureMarkup.tsx
import MarkupUtilsDefault from "../../../markup/MarkupUtils.tsx";
import conjureFileMentions from "../conjureFileMentions.tsx";
import ConjureFileMentionDefault from "ConjureFileMention.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import apply from "../../../../../_runtime/metro/00012__.js";

require = fn;
const jsx = fn(21).jsx;
let closure_4 = apply.once(() => {
  const obj2 = {};
  const merged = Object.assign(MarkupUtilsDefault.defaultRules);
  const obj = MarkupUtilsDefault;
  obj2.conjureFile = conjureFileMentions.createConjureFileMentionRule((attachmentId, id) =>
    jsx(ConjureFileMentionDefault, { attachmentId }, id),
  );
  return obj.reactParserFor(obj2);
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/chat/native/conjureMarkup.tsx");

export function parseConjureMarkup() {
  const items = [...arguments];
  return closure_4()(...items);
}
