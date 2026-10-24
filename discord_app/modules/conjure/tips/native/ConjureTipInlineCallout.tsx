// discord_app/modules/conjure/tips/native/ConjureTipInlineCallout.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import XSmallIcon from "../../../../design/components/Icon/native/redesign/generated/XSmallIcon.tsx";
import IconButton from "../../../../design/components/Button/native/IconButton.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(4971);
let obj2 = { dismissible: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 } };
let closure_5 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/tips/native/ConjureTipInlineCallout.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ConjureTipInlineCallout(arg0) {
      const cResult = c.c(8);
      ({ onDismiss, children } = arg0);
      const tmp4 = closure_5();
      if (null == onDismiss) {
        return children;
      } else {
        const _Symbol2 = Symbol;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp7 = React3(XSmallIcon.XSmallIcon, { size: "sm" });
          cResult[0] = tmp7;
          let first = tmp7;
        } else {
          first = cResult[0];
        }
        const _Symbol = Symbol;
        if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = util.intl;
          const stringResult = intl.string(util.t.WAI6xu);
          cResult[1] = stringResult;
          let tmp8 = stringResult;
        } else {
          tmp8 = cResult[1];
        }
        if (cResult[2] !== onDismiss) {
          const obj2 = { variant: "tertiary", size: "sm", icon: first, onPress: onDismiss, accessibilityLabel: tmp8 };
          const tmp12 = React3(IconButton.IconButton, obj2);
          cResult[2] = onDismiss;
          cResult[3] = tmp12;
          let tmp10 = tmp12;
        } else {
          tmp10 = cResult[3];
        }
        if (cResult[4] === children) {
          if (cResult[5] === tmp4.dismissible) {
            if (cResult[6] === tmp10) {
              let tmp13 = cResult[7];
            }
            return tmp13;
          }
        }
        const obj3 = { style: tmp4.dismissible, children: null };
        const items = [children, tmp10];
        obj3.children = items;
        const tmp16 = React4(View, obj3);
        cResult[4] = children;
        cResult[5] = tmp4.dismissible;
        cResult[6] = tmp10;
        cResult[7] = tmp16;
        tmp13 = tmp16;
      }
    }
  : function ConjureTipInlineCallout(arg0) {
      ({ onDismiss, children } = arg0);
      let tmp2 = children;
      if (null != onDismiss) {
        const obj = { style: tmp.dismissible, children: null };
        const items = [children];
        const obj2 = {
          variant: "tertiary",
          size: "sm",
          icon: React3(XSmallIcon.XSmallIcon, { size: "sm" }),
          onPress: onDismiss,
          accessibilityLabel: null,
        };
        const intl = util.intl;
        obj2.accessibilityLabel = intl.string(util.t.WAI6xu);
        items[1] = React3(IconButton.IconButton, obj2);
        obj.children = items;
        tmp2 = React4(View, obj);
      }
      return tmp2;
    };
