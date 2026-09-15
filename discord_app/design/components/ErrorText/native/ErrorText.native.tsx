// discord_app/design/components/ErrorText/native/ErrorText.native.tsx
import shared from "../../../shared.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/ErrorText/native/ErrorText.native.tsx");

export const ErrorText = function ErrorText(children) {
  children = children.children;
  let nodeText;
  nodeText = nodeText(4343).getNodeText(children);
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
  const obj2 = { direction: "horizontal", spacing: 4, align: "flex-start", style: children.style, children: null };
  const items1 = [
    closure_3(nodeText(6715).CircleErrorIcon, { size: "xs", color: "text-feedback-critical" }),
    closure_3(nodeText(4635).Text, { variant: "text-xs/medium", color: "text-feedback-critical", children }),
  ];
  obj2.children = items1;
  return closure_4(nodeText(5057).Stack, obj2);
};
