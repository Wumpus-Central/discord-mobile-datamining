// === Module 15001: RestrictedUserRowLabel ===

// Module 15001 (RestrictedUserRowLabel)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import useToken from "useToken" /* 4779 */;
import Text_Text from "Text/Text" /* 5087 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/content_and_social/native/RestrictedUserRowLabel.tsx");

export const RestrictedUserRowLabel = ReactCompilerGating.isReactCompilerEnabled() ? (function RestrictedUserRowLabel(arg0) {
  const cResult = c.c(13);
  ({ userRecord, accessibilityActions, onAccessibilityAction } = arg0);
  const token = useToken.useToken(nativeDefault.modules.mobile.TABLE_ROW_LABEL_TEXT_STYLE);
  const token1 = useToken.useToken(nativeDefault.modules.mobile.TABLE_ROW_LABEL_COLOR);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(util.t.cSgdvE);
    cResult[0] = stringResult;
    let first = stringResult;
  } else {
    first = cResult[0];
  }
  let username = userRecord.globalName;
  if (username == null) {
    username = userRecord.username;
  }
  if (cResult[1] === token1) {
    if (cResult[2] === token) {
      if (cResult[3] === username) {
        let tmp9 = cResult[4];
      }
      if (cResult[5] === tmp6) {
        if (cResult[6] === userRecord.username) {
          let tmp11 = cResult[7];
        }
        if (cResult[8] === accessibilityActions) {
          if (cResult[9] === onAccessibilityAction) {
            if (cResult[10] === tmp9) {
              if (cResult[11] === tmp11) {
                let tmp14 = cResult[12];
              }
              return tmp14;
            }
          }
        }
        const obj4 = { accessible: true, accessibilityRole: "button", accessibilityHint: first, accessibilityActions, onAccessibilityAction, children: null };
        const items = [tmp9, tmp11];
        obj4.children = items;
        const tmp17 = hasOwnProperty(View, obj4);
        cResult[8] = accessibilityActions;
        cResult[9] = onAccessibilityAction;
        cResult[10] = tmp9;
        cResult[11] = tmp11;
        cResult[12] = tmp17;
        tmp14 = tmp17;
      }
      let tmp12 = tmp6;
      if (tmp6) {
        const obj5 = { variant: "text-xs/medium", color: "text-subtle", lineClamp: 1, includeFontPadding: true, children: userRecord.username };
        tmp12 = React4(Text_Text.Text, obj5);
      }
      cResult[5] = tmp6;
      cResult[6] = userRecord.username;
      cResult[7] = tmp12;
      tmp11 = tmp12;
    }
  }
  const tmp10 = React4(Text_Text.Text, { variant: token, color: token1, lineClamp: 1, includeFontPadding: true, children: username });
  cResult[1] = token1;
  cResult[2] = token;
  cResult[3] = username;
  cResult[4] = tmp10;
  tmp9 = tmp10;
}) : (function RestrictedUserRowLabel(userRecord) {
  userRecord = userRecord.userRecord;
  ({ accessibilityActions, onAccessibilityAction } = userRecord);
  const token = useToken.useToken(nativeDefault.modules.mobile.TABLE_ROW_LABEL_TEXT_STYLE);
  let tmp8Result = null != userRecord.globalName;
  const obj3 = { accessible: true, accessibilityRole: "button", accessibilityHint: null, accessibilityActions: null, onAccessibilityAction: null, children: null };
  const token1 = useToken.useToken(nativeDefault.modules.mobile.TABLE_ROW_LABEL_COLOR);
  const intl = util.intl;
  obj3.accessibilityHint = intl.string(util.t.cSgdvE);
  obj3.accessibilityActions = accessibilityActions;
  obj3.onAccessibilityAction = onAccessibilityAction;
  const obj4 = { variant: token, color: token1, lineClamp: 1, includeFontPadding: true, children: null };
  let username = userRecord.globalName;
  if (username == null) {
    username = userRecord.username;
  }
  obj4.children = username;
  const items = [React4(Text_Text.Text, obj4), ];
  if (tmp8Result) {
    const obj5 = { variant: "text-xs/medium", color: "text-subtle", lineClamp: 1, includeFontPadding: true, children: userRecord.username };
    tmp8Result = React4(Text_Text.Text, obj5);
  }
  items[1] = tmp8Result;
  obj3.children = items;
  return hasOwnProperty(View, obj3);
});