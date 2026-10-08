// discord_app/modules/conversations/components/native/ConversationPreviewBlockedMessage.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import Stack_Stack from "../../../../design/components/Stack/native/Stack.native.tsx";
import EyeSlashIcon2 from "../../../../design/components/Icon/native/redesign/generated/EyeSlashIcon.tsx";
import DenyIcon from "../../../../design/components/Icon/native/redesign/generated/DenyIcon.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/conversations/components/native/ConversationPreviewBlockedMessage.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ConversationPreviewBlockedMessage(reason) {
      const cResult = c.c(9);
      reason = reason.reason;
      if (cResult[0] !== reason) {
        if ("blocked" === reason) {
          let EyeSlashIcon = DenyIcon.DenyIcon;
        } else {
          EyeSlashIcon = EyeSlashIcon2.EyeSlashIcon;
        }
        const obj2 = { size: "sm", color: nativeDefault.colors.TEXT_MUTED };
        const tmp5Result = React3(EyeSlashIcon, obj2);
        cResult[0] = reason;
        cResult[1] = tmp5Result;
      } else if (cResult[2] !== reason) {
        const intl = util.intl;
        if ("blocked" === reason) {
          let uxrh1O = util.t["WPe+xL"];
        } else {
          uxrh1O = util.t.uxrh1O;
        }
        const stringResult = intl.string(uxrh1O);
        cResult[2] = reason;
        cResult[3] = stringResult;
      } else {
        if (cResult[4] !== cResult[3]) {
          const obj3 = { variant: "text-md/normal", color: "text-muted", children: tmp9 };
          const tmp14 = React3(Text_Text.Text, obj3);
          cResult[4] = tmp9;
          cResult[5] = tmp14;
          let tmp12 = tmp14;
        } else {
          tmp12 = cResult[5];
        }
        if (cResult[6] === tmp4) {
          if (cResult[7] === tmp12) {
            let tmp15 = cResult[8];
          }
          return tmp15;
        }
        const obj4 = { direction: "horizontal", spacing: nativeDefault.space.PX_8, align: "center", children: null };
        const items = [tmp4, tmp12];
        obj4.children = items;
        const tmp18 = React4(Stack_Stack.Stack, obj4);
        cResult[6] = tmp4;
        cResult[7] = tmp12;
        cResult[8] = tmp18;
        tmp15 = tmp18;
      }
    }
  : function ConversationPreviewBlockedMessage(reason) {
      const obj = { direction: "horizontal", spacing: nativeDefault.space.PX_8, align: "center", children: null };
      if ("blocked" === reason.reason) {
        let EyeSlashIcon = DenyIcon.DenyIcon;
      } else {
        EyeSlashIcon = EyeSlashIcon2.EyeSlashIcon;
      }
      const items = [React3(EyeSlashIcon, { size: "sm", color: nativeDefault.colors.TEXT_MUTED })];
      const intl = util.intl;
      const t = util.t;
      const obj2 = { size: "sm", color: nativeDefault.colors.TEXT_MUTED };
      items[1] = React3(Text_Text.Text, {
        variant: "text-md/normal",
        color: "text-muted",
        children: intl.string("blocked" === reason.reason ? t["WPe+xL"] : t.uxrh1O),
      });
      obj.children = items;
      return React4(Stack_Stack.Stack, obj);
    };
