// === Module 6609: ErrorText ===

// Module 6609 (ErrorText)
import shared from "shared" /* 4411 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/ErrorText/native/ErrorText.native.tsx");

export const ErrorText = function ErrorText(children) {
  children = children.children;
  let nodeText;
  let obj = nodeText(4264);
  nodeText = obj.getNodeText(children);
  const items = [nodeText];
  const effect = noop.useEffect(() => {
    let tmp2 = null != nodeText;
    if (tmp2) {
      tmp2 = "" !== nodeText;
    }
    if (tmp2) {
      const AccessibilityAnnouncer = shared.AccessibilityAnnouncer;
      AccessibilityAnnouncer.announce(nodeText);
    }
  }, items);
  obj = { direction: "horizontal", spacing: 4, align: "flex-start", style: children.style, children: null };
  const items1 = [closure_3(nodeText(6610).CircleErrorIcon, { size: "xs", color: "text-feedback-critical" }), closure_3(nodeText(4556).Text, { variant: "text-xs/medium", color: "text-feedback-critical", children })];
  obj.children = items1;
  return closure_4(nodeText(4973).Stack, obj);
};