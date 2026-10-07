// discord_app/design/void/Form/native/FreeFormErrorLabel.tsx
import shared from "../../../shared.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Form/native/FreeFormErrorLabel.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = require("c").c(8);
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
      if (cResult[5] === children) {
        if (cResult[6] === style) {
          let tmp9 = cResult[7];
        }
        return tmp9;
      }
      const tmp10 = jsx(require("Text/Text").Text, {
        style,
        variant: "text-xs/medium",
        color: "text-feedback-critical",
        children,
      });
      cResult[5] = children;
      cResult[6] = style;
      cResult[7] = tmp10;
      tmp9 = tmp10;
      const obj = require("c");
    }
  : (style) => {
      const children = style.children;
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
      return jsx(nodeText(4892).Text, {
        style: style.style,
        variant: "text-xs/medium",
        color: "text-feedback-critical",
        children,
      });
    };
