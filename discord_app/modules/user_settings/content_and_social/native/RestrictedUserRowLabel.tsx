// discord_app/modules/user_settings/content_and_social/native/RestrictedUserRowLabel.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import intl2 from "../../../../intl/index.native.tsx";
import useToken from "../../../../design/tokens/native/useToken.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import react from "../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let closure_4;
let hasOwnProperty;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
const tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let accessibilityActions;
      let first;
      let items;
      let onAccessibilityAction;
      let userRecord;
      const obj = react2;
      const cResult = obj.c(13);
      ({ userRecord, accessibilityActions, onAccessibilityAction } = arg0);
      const obj2 = useToken;
      const token = obj2.useToken(nativeDefault.modules.mobile.TABLE_ROW_LABEL_TEXT_STYLE);
      const obj3 = useToken;
      const token1 = obj3.useToken(nativeDefault.modules.mobile.TABLE_ROW_LABEL_COLOR);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = intl2.intl;
        const stringResult = intl.string(intl2.t.cSgdvE);
        cResult[0] = stringResult;
        first = stringResult;
      } else {
        first = cResult[0];
      }
      let username = userRecord.globalName;
      if (username == null) {
        username = userRecord.username;
      }
      if (cResult[1] === token1) {
        if (cResult[2] === token) {
          let tmp9;
          if (cResult[3] === username) {
            tmp9 = cResult[4];
          }
          if ((cResult[5] === null) != userRecord.globalName) {
            let tmp11;
            if (cResult[6] === userRecord.username) {
              tmp11 = cResult[7];
            }
            if (cResult[8] === accessibilityActions) {
              if (cResult[9] === onAccessibilityAction) {
                if (cResult[10] === tmp9) {
                  let tmp14;
                  if (cResult[11] === tmp11) {
                    tmp14 = cResult[12];
                  }
                  return tmp14;
                }
              }
            }
            const obj4 = {
              accessible: true,
              accessibilityRole: "button",
              accessibilityHint: first,
              accessibilityActions,
              onAccessibilityAction,
              children: items,
            };
            items = [tmp9, tmp11];
            const tmp17 = hasOwnProperty(View, obj4);
            cResult[8] = accessibilityActions;
            cResult[9] = onAccessibilityAction;
            cResult[10] = tmp9;
            cResult[11] = tmp11;
            cResult[12] = tmp17;
            tmp14 = tmp17;
          }
          let tmp12 = tmp6;
          if (tmp12) {
            const obj5 = {
              variant: "text-xs/medium",
              color: "text-subtle",
              lineClamp: 1,
              includeFontPadding: true,
              children: userRecord.username,
            };
            tmp12 = React3(Text_Text.Text, obj5);
          }
          cResult[5] = null != userRecord.globalName;
          cResult[6] = userRecord.username;
          cResult[7] = tmp12;
          tmp11 = tmp12;
        }
      }
      const tmp10 = React3(Text_Text.Text, {
        variant: token,
        color: token1,
        lineClamp: 1,
        includeFontPadding: true,
        children: username,
      });
      cResult[1] = token1;
      cResult[2] = token;
      cResult[3] = username;
      cResult[4] = tmp10;
      tmp9 = tmp10;
    }
  : (userRecord) => {
      let accessibilityActions;
      let intl;
      let items;
      let onAccessibilityAction;
      let username;
      userRecord = userRecord.userRecord;
      ({ accessibilityActions, onAccessibilityAction } = userRecord);
      const obj = useToken;
      const token = obj.useToken(nativeDefault.modules.mobile.TABLE_ROW_LABEL_TEXT_STYLE);
      let tmp8Result = null != userRecord.globalName;
      const obj3 = {
        accessible: true,
        accessibilityRole: "button",
        accessibilityHint: intl.string(intl2.t.cSgdvE),
        accessibilityActions,
        onAccessibilityAction,
        children: items,
      };
      const obj2 = useToken;
      const token1 = obj2.useToken(nativeDefault.modules.mobile.TABLE_ROW_LABEL_COLOR);
      intl = intl2.intl;
      const obj4 = { variant: token, color: token1, lineClamp: 1, includeFontPadding: true, children: username };
      username = userRecord.globalName;
      const Text = Text_Text.Text;
      if (username == null) {
        username = userRecord.username;
      }
      items = [React3(Text, obj4)];
      if (tmp8Result) {
        const obj5 = {
          variant: "text-xs/medium",
          color: "text-subtle",
          lineClamp: 1,
          includeFontPadding: true,
          children: userRecord.username,
        };
        tmp8Result = React3(Text_Text.Text, obj5);
      }
      items[1] = tmp8Result;
      return hasOwnProperty(View, obj3);
    };
const result = size.fileFinishedImporting("modules/user_settings/content_and_social/native/RestrictedUserRowLabel.tsx");

export const RestrictedUserRowLabel = tmp4;
