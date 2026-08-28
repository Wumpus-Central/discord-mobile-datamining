// === Module 9925: ? ===

// Module 9925
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Button from "Button" /* 4893 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { InviteSendStates } from "InviteSendStates" /* 7428 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4446 */;
import importAllResult from "noop" /* 19 */;

require = arg1;
let closure_5 = createCacheKey.createStyles({ buttonWrapper: { minWidth: 66, flexDirection: "row" } });
const memoResult = importAllResult.memo(function InviteButton(onPress) {
  ({ sendState, disabled } = onPress);
  if (disabled === undefined) {
    disabled = false;
  }
  const intl = getSystemLocale.intl;
  intl.string(getSystemLocale.t.jYnGPG);
  if (InviteSendStates.SENDING === sendState) {
    const intl5 = tmp2(1236).intl;
    let stringResult1 = intl5.string(tmp2(1236).t.jYnGPG);
    disabled = false;
    let flag = true;
  } else if (tmp5.SENT === sendState) {
    const intl4 = tmp2(1236).intl;
    stringResult1 = intl4.string(tmp2(1236).t.dVT149);
    disabled = true;
    flag = false;
  } else if (tmp5.ERROR === sendState) {
    const intl3 = tmp2(1236).intl;
    stringResult1 = intl3.string(tmp2(1236).t.wNcfpX);
    disabled = false;
    flag = false;
  } else {
    const intl2 = tmp2(1236).intl;
    stringResult1 = intl2.string(tmp2(1236).t.jYnGPG);
    flag = false;
  }
  let obj = { style: callback().buttonWrapper, children: null };
  obj = { accessibilityRole: "none", size: "sm", variant: "secondary", text: stringResult1, onPress: onPress.onPressSend, disabled: null, grow: true };
  if (!disabled) {
    disabled = flag;
  }
  obj[5] = disabled;
  obj[1] = jsx(Button.Button, { accessibilityRole: "none", size: "sm", variant: "secondary", text: stringResult1, onPress: onPress.onPressSend, disabled: null, grow: true });
  return <View accessibilityRole="none" size="sm" variant="secondary" text={stringResult1} onPress={arg0.onPressSend} disabled={null} grow />;
});
const result = require("set").fileFinishedImporting("modules/instant_invite/native/components/InviteButton.tsx");

export default memoResult;