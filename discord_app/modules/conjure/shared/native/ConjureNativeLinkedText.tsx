// === Module 11794: ConjureNativeLinkedText ===

// Module 11794 (ConjureNativeLinkedText)
import c from "c" /* 576 */;
import Text_Text from "Text/Text" /* 5232 */;
import conjureMarkup from "conjureMarkup" /* 11795 */;
import conjureLinkifyBareDomains from "conjureLinkifyBareDomains" /* 11804 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
function conjureLinkedNodes(hint, linkVariant) {
  const obj = conjureMarkup;
  return obj.parseConjureMarkup(conjureLinkifyBareDomains.linkifyBareDomains(hint), true, { allowLinks: true, linkVariant });
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/shared/native/ConjureNativeLinkedText.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureNativeLinkedText(arg0) {
  const cResult = c.c(7);
  ({ text, variant, color } = arg0);
  if (cResult[0] === text) {
    if (cResult[1] === variant) {
      let tmp4 = cResult[2];
    }
    if (cResult[3] === color) {
      if (cResult[4] === tmp4) {
        if (cResult[5] === variant) {
          let tmp6 = cResult[6];
        }
        return tmp6;
      }
    }
    const obj2 = { variant, color, children: tmp4 };
    const tmp8 = jsx(Text_Text.Text, { variant, color, children: tmp4 });
    cResult[3] = color;
    cResult[4] = tmp4;
    cResult[5] = variant;
    cResult[6] = tmp8;
    tmp6 = tmp8;
  }
  const tmpResult = conjureMarkup;
  const parseConjureMarkupResult = tmpResult.parseConjureMarkup(conjureLinkifyBareDomains.linkifyBareDomains(text), true, { allowLinks: true, linkVariant: variant });
  cResult[0] = text;
  cResult[1] = variant;
  cResult[2] = parseConjureMarkupResult;
  tmp4 = parseConjureMarkupResult;
  const tmpResult2 = conjureLinkifyBareDomains;
}) : (function ConjureNativeLinkedText(variant) {
  variant = variant.variant;
  ({ text, color } = variant);
  const obj = { variant, color, children: null };
  const obj2 = conjureMarkup;
  obj.children = obj2.parseConjureMarkup(conjureLinkifyBareDomains.linkifyBareDomains(text), true, { allowLinks: true, linkVariant: variant });
  return jsx(Text_Text.Text, { variant, color, children: null });
});
export { conjureLinkedNodes };