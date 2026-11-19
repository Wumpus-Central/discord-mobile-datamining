// === Module 18349: ConjureNativeLinkedText ===

// Module 18349 (ConjureNativeLinkedText)
import Text_Text from "Text/Text" /* 5383 */;
import conjureMarkup from "conjureMarkup" /* 18350 */;
import conjureLinkifyBareDomains from "conjureLinkifyBareDomains" /* 18359 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/shared/native/ConjureNativeLinkedText.tsx");

export default function ConjureNativeLinkedText(variant) {
  variant = variant.variant;
  ({ text, color } = variant);
  const obj = { variant, color, children: null };
  const obj2 = conjureMarkup;
  obj.children = obj2.parseConjureMarkup(conjureLinkifyBareDomains.linkifyBareDomains(text), true, { allowLinks: true, linkVariant: variant });
  return jsx(Text_Text.Text, { variant, color, children: null });
};
export function conjureLinkedNodes(hint, linkVariant) {
  const obj = conjureMarkup;
  return obj.parseConjureMarkup(conjureLinkifyBareDomains.linkifyBareDomains(hint), true, { allowLinks: true, linkVariant });
}