// discord_app/design/components/ErrorText/native/ErrorText.native.tsx
import shared from "../../../shared.tsx";
import react from "../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import ReactCompilerGating from "../../../../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

let c3;
let closure_4;
({ jsx: c3, jsxs: closure_4 } = Fragment);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let children;
      let closure_0;
      let items1;
      let style;
      let tmp12;
      let tmp4;
      let tmp6;
      let tmp7;
      let tmp9;
      const obj = require("react");
      const cResult = obj.c(11);
      ({ children, style } = arg0);
      if (cResult[0] !== children) {
        const tmpResult = require("native");
        const nodeText = tmpResult.getNodeText(children);
        cResult[0] = children;
        cResult[1] = nodeText;
        tmp4 = nodeText;
      } else {
        tmp4 = cResult[1];
      }
      _require = tmp4;
      if (cResult[2] !== tmp4) {
        const fn = function f() {
          const tmp2 = null != closure_0 && "" !== closure_0;
          if (tmp2) {
            const AccessibilityAnnouncer = shared.AccessibilityAnnouncer;
            AccessibilityAnnouncer.announce(closure_0);
          }
        };
        const items = [tmp4];
        cResult[2] = tmp4;
        cResult[3] = fn;
        cResult[4] = items;
        tmp7 = items;
        tmp6 = fn;
      } else {
        tmp6 = cResult[3];
        tmp7 = cResult[4];
      }
      const effect = react.useEffect(tmp6, tmp7);
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp11 = closure_3(require("CircleErrorIcon").CircleErrorIcon, {
          size: "xs",
          color: "text-feedback-critical",
        });
        cResult[5] = tmp11;
        tmp9 = tmp11;
      } else {
        tmp9 = cResult[5];
      }
      if (cResult[6] !== children) {
        const obj2 = { variant: "text-xs/medium", color: "text-feedback-critical", children };
        const tmp14 = closure_3(require("Text/Text").Text, obj2);
        cResult[6] = children;
        cResult[7] = tmp14;
        tmp12 = tmp14;
      } else {
        tmp12 = cResult[7];
      }
      if (cResult[8] === style) {
        let tmp15;
        if (cResult[9] === tmp12) {
          tmp15 = cResult[10];
        }
        return tmp15;
      }
      const obj3 = { direction: "horizontal", spacing: 4, align: "flex-start", style, children: items1 };
      items1 = [tmp9, tmp12];
      const tmp16 = closure_4(require("Stack/Stack").Stack, obj3);
      cResult[8] = style;
      cResult[9] = tmp12;
      cResult[10] = tmp16;
      tmp15 = tmp16;
    }
  : (children) => {
      let items1;
      children = children.children;
      let nodeText;
      const style = children.style;
      const obj = nodeText(4582);
      nodeText = obj.getNodeText(children);
      const items = [nodeText];
      const effect = react.useEffect(() => {
        const tmp2 = null != nodeText && "" !== nodeText;
        if (tmp2) {
          const AccessibilityAnnouncer = shared.AccessibilityAnnouncer;
          AccessibilityAnnouncer.announce(nodeText);
        }
      }, items);
      const obj2 = { direction: "horizontal", spacing: 4, align: "flex-start", style, children: items1 };
      const Stack = nodeText(5593).Stack;
      items1 = [
        closure_3(nodeText(4800).CircleErrorIcon, { size: "xs", color: "text-feedback-critical" }),
        closure_3(nodeText(4886).Text, { variant: "text-xs/medium", color: "text-feedback-critical", children }),
      ];
      return closure_4(Stack, obj2);
    };
const result = size.fileFinishedImporting("design/components/ErrorText/native/ErrorText.native.tsx");

export const ErrorText = tmp3;
