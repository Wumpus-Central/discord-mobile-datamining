// discord_app/modules/conjure/tips/native/ConjureTipCallout.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import XSmallIcon from "../../../../design/components/Icon/native/redesign/generated/XSmallIcon.tsx";
import IconButton from "../../../../design/components/Button/native/IconButton.native.tsx";
import ConjureNativeCardSurfaceDefault from "../../shared/native/ConjureNativeCardSurface.tsx";
import ConjureTipGutterRowDefault from "ConjureTipGutterRow.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const firstLineInset = nativeDefault.space.PX_12 + 1;
const createStyles = fn(5004);
let obj2 = { card: { gap: nativeDefault.space.PX_4 }, title: null, actions: null, dismiss: null };
let obj3 = { gap: nativeDefault.space.PX_4 };
obj2.title = { paddingRight: nativeDefault.space.PX_32 };
let obj4 = { paddingRight: nativeDefault.space.PX_32 };
obj2.actions = { flexDirection: "row", marginTop: nativeDefault.space.PX_8 };
const rect = { position: "absolute", top: nativeDefault.space.PX_4, right: nativeDefault.space.PX_4 };
obj2.dismiss = rect;
let closure_7 = createStyles.createStyles(obj2);
fn(558);
let obj5 = { flexDirection: "row", marginTop: nativeDefault.space.PX_8 };
let ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ConjureTipCallout(arg0) {
      const cResult = c.c(10);
      ({ icon, onDismiss, children } = arg0);
      const tmp4 = closure_7();
      if (cResult[0] === onDismiss) {
        if (cResult[1] === tmp4.dismiss) {
          let tmp5 = cResult[2];
        }
        if (cResult[3] === children) {
          if (cResult[4] === tmp4.card) {
            if (cResult[5] === tmp5) {
              let tmp9 = cResult[6];
            }
            if (cResult[7] === icon) {
              if (cResult[8] === tmp9) {
                let tmp13 = cResult[9];
              }
              return tmp13;
            }
            const obj2 = { icon, tone: "brand", firstLine: "text-md/semibold", firstLineInset, children: tmp9 };
            const tmp17 = React4(ConjureTipGutterRowDefault, obj2);
            cResult[7] = icon;
            cResult[8] = tmp9;
            cResult[9] = tmp17;
            tmp13 = tmp17;
          }
        }
        const obj3 = { style: tmp4.card, children: null };
        const items = [children, tmp5];
        obj3.children = items;
        const tmp12 = hasOwnProperty(ConjureNativeCardSurfaceDefault, obj3);
        cResult[3] = children;
        cResult[4] = tmp4.card;
        cResult[5] = tmp5;
        cResult[6] = tmp12;
        tmp9 = tmp12;
      }
      let tmp6 = null;
      if (null != onDismiss) {
        const obj4 = { style: tmp4.dismiss, children: null };
        const obj5 = {
          variant: "tertiary",
          size: "sm",
          icon: React4(XSmallIcon.XSmallIcon, { size: "sm" }),
          onPress: onDismiss,
          accessibilityLabel: null,
        };
        const intl = util.intl;
        obj5.accessibilityLabel = intl.string(util.t.WAI6xu);
        obj4.children = React4(IconButton.IconButton, obj5);
        tmp6 = React4(View, obj4);
      }
      cResult[0] = onDismiss;
      cResult[1] = tmp4.dismiss;
      cResult[2] = tmp6;
      tmp5 = tmp6;
    }
  : function ConjureTipCallout(onDismiss) {
      onDismiss = onDismiss.onDismiss;
      ({ icon, children } = onDismiss);
      const tmp = closure_7();
      const obj = { icon, tone: "brand", firstLine: "text-md/semibold", firstLineInset, children: null };
      const obj2 = { style: tmp.card, children: null };
      const items = [children];
      let tmp2Result = null;
      const tmp4 = ConjureTipGutterRowDefault;
      if (null != onDismiss) {
        const obj3 = { style: tmp.dismiss, children: null };
        const obj4 = {
          variant: "tertiary",
          size: "sm",
          icon: React4(XSmallIcon.XSmallIcon, { size: "sm" }),
          onPress: onDismiss,
          accessibilityLabel: null,
        };
        const intl = util.intl;
        obj4.accessibilityLabel = intl.string(util.t.WAI6xu);
        obj3.children = React4(IconButton.IconButton, obj4);
        tmp2Result = React4(View, obj3);
      }
      items[1] = tmp2Result;
      obj2.children = items;
      obj.children = hasOwnProperty(ConjureNativeCardSurfaceDefault, obj2);
      return React4(tmp4, obj);
    };
ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ConjureTipTitle(children) {
      const cResult = c.c(5);
      children = children.children;
      const tmp4 = closure_7();
      if (cResult[0] !== children) {
        const obj2 = { variant: "text-md/semibold", color: "text-strong", accessibilityRole: "header", children };
        const tmp7 = React4(Text_Text.Text, obj2);
        cResult[0] = children;
        cResult[1] = tmp7;
        let tmp5 = tmp7;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === tmp4.title) {
        if (cResult[3] === tmp5) {
          let tmp8 = cResult[4];
        }
        return tmp8;
      }
      const tmp9 = React4(View, { style: tmp4.title, children: tmp5 });
      cResult[2] = tmp4.title;
      cResult[3] = tmp5;
      cResult[4] = tmp9;
      tmp8 = tmp9;
      const obj3 = { style: tmp4.title, children: tmp5 };
    }
  : function ConjureTipTitle(children) {
      return React4(View, {
        style: closure_7().title,
        children: React4(Text_Text.Text, {
          variant: "text-md/semibold",
          color: "text-strong",
          accessibilityRole: "header",
          children: children.children,
        }),
      });
    };
ReactCompilerGating = fn(558);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ConjureTipBody(children) {
      const cResult = c.c(2);
      children = children.children;
      if (cResult[0] !== children) {
        const obj2 = { variant: "text-sm/normal", color: "text-muted", children };
        const tmp6 = React4(Text_Text.Text, obj2);
        cResult[0] = children;
        cResult[1] = tmp6;
        let tmp4 = tmp6;
      } else {
        tmp4 = cResult[1];
      }
      return tmp4;
    }
  : function ConjureTipBody(children) {
      return React4(Text_Text.Text, { variant: "text-sm/normal", color: "text-muted", children: children.children });
    };
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/tips/native/ConjureTipCallout.tsx");

export default tmp4;
export const ConjureTipTitle = tmp5;
export const ConjureTipBody = tmp6;
export const ConjureTipActions = ReactCompilerGating.isReactCompilerEnabled()
  ? function ConjureTipActions(children) {
      const cResult = c.c(3);
      children = children.children;
      const tmp2 = closure_7();
      if (cResult[0] === children) {
        if (cResult[1] === tmp2.actions) {
          let tmp3 = cResult[2];
        }
        return tmp3;
      }
      const tmp4 = React4(View, { style: tmp2.actions, children });
      cResult[0] = children;
      cResult[1] = tmp2.actions;
      cResult[2] = tmp4;
      tmp3 = tmp4;
    }
  : function ConjureTipActions(children) {
      return React4(View, { style: closure_7().actions, children: children.children });
    };
