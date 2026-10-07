// === Module 6431: ErrorText ===

// Module 6431 (ErrorText)
import shared from "shared" /* 4735 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/ErrorText/native/ErrorText.native.tsx");

export const ErrorText = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = require("c").c(11);
  ({ children, style } = arg0);
  if (cResult[0] !== children) {
    const nodeText = tmp(4588).getNodeText(children);
    cResult[0] = children;
    cResult[1] = nodeText;
    let tmp4 = nodeText;
    const tmpResult = tmp(4588);
  } else {
    tmp4 = cResult[1];
  }
  _require = tmp4;
  if (cResult[2] !== tmp4) {
    const fn = function f() {
      let tmp2 = null != closure_0;
      if (tmp2) {
        tmp2 = "" !== closure_0;
      }
      if (tmp2) {
        const AccessibilityAnnouncer = shared.AccessibilityAnnouncer;
        AccessibilityAnnouncer.announce(closure_0);
      }
    };
    const items = [tmp4];
    cResult[2] = tmp4;
    cResult[3] = fn;
    cResult[4] = items;
    let tmp7 = items;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[3];
    tmp7 = cResult[4];
  }
  const effect = noop.useEffect(tmp6, tmp7);
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp11 = closure_3(tmp(4806).CircleErrorIcon, { size: "xs", color: "text-feedback-critical" });
    cResult[5] = tmp11;
    let tmp9 = tmp11;
  } else {
    tmp9 = cResult[5];
  }
  if (cResult[6] !== children) {
    const obj2 = { variant: "text-xs/medium", color: "text-feedback-critical", children };
    const tmp14 = closure_3(tmp(4892).Text, obj2);
    cResult[6] = children;
    cResult[7] = tmp14;
    let tmp12 = tmp14;
  } else {
    tmp12 = cResult[7];
  }
  if (cResult[8] === style) {
    if (cResult[9] === tmp12) {
      let tmp15 = cResult[10];
    }
    return tmp15;
  }
  const obj3 = { direction: "horizontal", spacing: 4, align: "flex-start", style, children: null };
  const items1 = [tmp9, tmp12];
  obj3.children = items1;
  const tmp16 = closure_4(require("Stack/Stack").Stack, obj3);
  cResult[8] = style;
  cResult[9] = tmp12;
  cResult[10] = tmp16;
  tmp15 = tmp16;
  const obj = require("c");
}) : ((children) => {
  children = children.children;
  let nodeText;
  nodeText = nodeText(4588).getNodeText(children);
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
  const items1 = [closure_3(nodeText(4806).CircleErrorIcon, { size: "xs", color: "text-feedback-critical" }), closure_3(nodeText(4892).Text, { variant: "text-xs/medium", color: "text-feedback-critical", children })];
  obj2.children = items1;
  return closure_4(nodeText(5600).Stack, obj2);
});