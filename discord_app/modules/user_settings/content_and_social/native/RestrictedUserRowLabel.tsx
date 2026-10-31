// === Module 16695: RestrictedUserRowLabel ===

// Module 16695 (RestrictedUserRowLabel)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import useToken from "useToken" /* 5596 */;
import Text_Text from "Text/Text" /* 5624 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/content_and_social/native/RestrictedUserRowLabel.tsx");

export function RestrictedUserRowLabel(userRecord) {
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
}