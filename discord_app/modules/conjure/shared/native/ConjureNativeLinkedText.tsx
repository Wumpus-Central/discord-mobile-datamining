// discord_app/modules/conjure/shared/native/ConjureNativeLinkedText.tsx
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import conjureMarkup from "../../chat/native/conjureMarkup.tsx";
import conjureLinkifyBareDomains from "../conjureLinkifyBareDomains.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/shared/native/ConjureNativeLinkedText.tsx");

export default function ConjureNativeLinkedText(variant) {
  variant = variant.variant;
  ({ text, color } = variant);
  const obj = { variant, color, children: null };
  const obj2 = conjureMarkup;
  obj.children = obj2.parseConjureMarkup(conjureLinkifyBareDomains.linkifyBareDomains(text), true, {
    allowLinks: true,
    linkVariant: variant,
  });
  return jsx(Text_Text.Text, { variant, color, children: null });
}
export function conjureLinkedNodes(hint, linkVariant) {
  const obj = conjureMarkup;
  return obj.parseConjureMarkup(conjureLinkifyBareDomains.linkifyBareDomains(hint), true, {
    allowLinks: true,
    linkVariant,
  });
}
