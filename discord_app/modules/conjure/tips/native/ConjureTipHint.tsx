// discord_app/modules/conjure/tips/native/ConjureTipHint.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import XSmallIcon from "../../../../design/components/Icon/native/redesign/generated/XSmallIcon.tsx";
import IconButton from "../../../../design/components/Button/native/IconButton.native.tsx";
import ConjureTipGutterRowDefault from "ConjureTipGutterRow.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
let c6 = "text-sm/normal";
const createStyles = fn(5005);
let obj2 = {
  line: { flexDirection: "row", alignItems: "flex-start", gap: nativeDefault.space.PX_4 },
  text: { flexShrink: 1 },
  dismiss: null,
};
let obj3 = { flexDirection: "row", alignItems: "flex-start", gap: nativeDefault.space.PX_4 };
obj2.dismiss = { height: fn(5271).TextStyleSheet["text-sm/normal"].lineHeight, justifyContent: "center" };
let closure_7 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = { height: fn(5271).TextStyleSheet["text-sm/normal"].lineHeight, justifyContent: "center" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/tips/native/ConjureTipHint.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ConjureTipHint(arg0) {
      const cResult = c.c(15);
      ({ icon, onDismiss, children } = arg0);
      const tmp4 = closure_7();
      if (cResult[0] !== children) {
        const obj2 = { variant: textsmnormal, color: "text-muted", children };
        const tmp8 = React4(Text_Text.Text, obj2);
        cResult[0] = children;
        cResult[1] = tmp8;
        let tmp5 = tmp8;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === tmp4.text) {
        if (cResult[3] === tmp5) {
          let tmp9 = cResult[4];
        }
        if (cResult[5] === onDismiss) {
          if (cResult[6] === tmp4.dismiss) {
            let tmp11 = cResult[7];
          }
          if (cResult[8] === tmp4.line) {
            if (cResult[9] === tmp9) {
              if (cResult[10] === tmp11) {
                let tmp16 = cResult[11];
              }
              if (cResult[12] === icon) {
                if (cResult[13] === tmp16) {
                  let tmp20 = cResult[14];
                }
                return tmp20;
              }
              const obj3 = { icon, tone: "muted", firstLine: textsmnormal, children: tmp16 };
              const tmp24 = React4(ConjureTipGutterRowDefault, obj3);
              cResult[12] = icon;
              cResult[13] = tmp16;
              cResult[14] = tmp24;
              tmp20 = tmp24;
            }
          }
          const obj4 = { style: tmp4.line, children: null };
          const items = [tmp9, tmp11];
          obj4.children = items;
          const tmp19 = hasOwnProperty(View, obj4);
          cResult[8] = tmp4.line;
          cResult[9] = tmp9;
          cResult[10] = tmp11;
          cResult[11] = tmp19;
          tmp16 = tmp19;
        }
        let tmp12 = null;
        if (null != onDismiss) {
          const obj5 = { style: tmp4.dismiss, children: null };
          const obj6 = { variant: "tertiary", size: "sm", icon: null, onPress: null, accessibilityLabel: null };
          const obj7 = { size: "xs", color: nativeDefault.colors.ICON_MUTED };
          obj6.icon = React4(XSmallIcon.XSmallIcon, obj7);
          obj6.onPress = onDismiss;
          const intl = util.intl;
          obj6.accessibilityLabel = intl.string(util.t.WAI6xu);
          obj5.children = React4(IconButton.IconButton, obj6);
          tmp12 = React4(View, obj5);
        }
        cResult[5] = onDismiss;
        cResult[6] = tmp4.dismiss;
        cResult[7] = tmp12;
        tmp11 = tmp12;
      }
      const tmp10 = React4(View, { style: tmp4.text, children: tmp5 });
      cResult[2] = tmp4.text;
      cResult[3] = tmp5;
      cResult[4] = tmp10;
      tmp9 = tmp10;
      const obj8 = { style: tmp4.text, children: tmp5 };
    }
  : function ConjureTipHint(onDismiss) {
      onDismiss = onDismiss.onDismiss;
      ({ icon, children } = onDismiss);
      const tmp = closure_7();
      const obj = { icon, tone: "muted", firstLine: textsmnormal, children: null };
      const obj2 = { style: tmp.line, children: null };
      const obj3 = {
        style: tmp.text,
        children: React4(Text_Text.Text, { variant: textsmnormal, color: "text-muted", children }),
      };
      const items = [React4(View, obj3)];
      let tmp2Result = null;
      if (null != onDismiss) {
        const obj5 = { style: tmp.dismiss, children: null };
        const obj6 = { variant: "tertiary", size: "sm", icon: null, onPress: null, accessibilityLabel: null };
        const obj7 = { size: "xs", color: nativeDefault.colors.ICON_MUTED };
        obj6.icon = React4(XSmallIcon.XSmallIcon, obj7);
        obj6.onPress = onDismiss;
        const intl = util.intl;
        obj6.accessibilityLabel = intl.string(util.t.WAI6xu);
        obj5.children = React4(IconButton.IconButton, obj6);
        tmp2Result = React4(View, obj5);
      }
      items[1] = tmp2Result;
      obj2.children = items;
      obj.children = hasOwnProperty(View, obj2);
      return React4(ConjureTipGutterRowDefault, obj);
    };
