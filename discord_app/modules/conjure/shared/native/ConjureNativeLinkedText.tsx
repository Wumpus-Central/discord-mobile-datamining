// === Module 18533: ConjureNativeLinkedText ===

// Module 18533 (ConjureNativeLinkedText)
import Text_Text from "Text/Text" /* 5634 */;
import conjureMarkup from "conjureMarkup" /* 18534 */;
import conjureLinkifyBareDomains from "conjureLinkifyBareDomains" /* 18543 */;
import conjureShortLinks from "conjureShortLinks" /* 18544 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/shared/native/ConjureNativeLinkedText.tsx");

export default function ConjureNativeLinkedText(color) {
  ({ text, variant, shortLinks } = color);
  if (shortLinks === undefined) {
    shortLinks = false;
  }
  const obj = { variant, color: color.color, children: null };
  if (shortLinks === undefined) {
    shortLinks = false;
  }
  const tmp2Result = conjureMarkup;
  let shortenConjureLinksResult = text;
  if (shortLinks) {
    shortenConjureLinksResult = conjureShortLinks.shortenConjureLinks(text);
    const tmp2Result4 = conjureShortLinks;
  }
  obj.children = tmp2Result.parseConjureMarkup(conjureLinkifyBareDomains.linkifyBareDomains(shortenConjureLinksResult), true, { allowLinks: true, linkVariant: variant });
  return jsx(Text_Text.Text, { variant, color: color.color, children: null });
};
export function conjureLinkedNodes(hint, linkVariant) {
  let flag = shortLinks;
  if (shortLinks === undefined) {
    flag = false;
  }
  const obj = conjureMarkup;
  let shortenConjureLinksResult = hint;
  if (flag) {
    shortenConjureLinksResult = conjureShortLinks.shortenConjureLinks(hint);
    const tmpResult = conjureShortLinks;
  }
  return obj.parseConjureMarkup(conjureLinkifyBareDomains.linkifyBareDomains(shortenConjureLinksResult), true, { allowLinks: true, linkVariant });
}