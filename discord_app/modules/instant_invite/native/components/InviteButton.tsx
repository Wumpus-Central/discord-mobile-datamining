// === Module 11890: ? ===

// Module 11890
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Button from "Button" /* 4745 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { InviteSendStates } from "InviteSendStates" /* 4371 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;
import importAllResult from "noop" /* 19 */;

require = fn;
let closure_5 = createCacheKey.createStyles({ buttonWrapper: { minWidth: 66, flexDirection: "row" } });
const memoResult = importAllResult.memo(function InviteButton(onPress) {
  ({ sendState, disabled } = onPress);
  if (disabled === undefined) {
    disabled = false;
  }
  const intl = getSystemLocale.intl;
  intl.string(getSystemLocale.t.jYnGPG);
  if (InviteSendStates.SENDING === sendState) {
    const intl5 = getSystemLocale.intl;
    let stringResult1 = intl5.string(getSystemLocale.t.jYnGPG);
    disabled = false;
    let flag = true;
  } else if (InviteSendStates.SENT === sendState) {
    const intl4 = getSystemLocale.intl;
    stringResult1 = intl4.string(getSystemLocale.t.dVT149);
    disabled = true;
    flag = false;
  } else if (InviteSendStates.ERROR === sendState) {
    const intl3 = getSystemLocale.intl;
    stringResult1 = intl3.string(getSystemLocale.t.wNcfpX);
    disabled = false;
    flag = false;
  } else {
    const intl2 = getSystemLocale.intl;
    stringResult1 = intl2.string(getSystemLocale.t.jYnGPG);
    flag = false;
  }
  { style: callback().buttonWrapper, children: null };
  const obj = { accessibilityRole: "none", size: "sm", variant: "secondary", text: stringResult1, onPress: onPress.onPressSend, disabled: null, grow: true };
  if (!disabled) {
    disabled = flag;
  }
  obj[5] = disabled;
  obj[1] = jsx(Button.Button, { accessibilityRole: "none", size: "sm", variant: "secondary", text: stringResult1, onPress: onPress.onPressSend, disabled: null, grow: true });
  return <View accessibilityRole="none" size="sm" variant="secondary" text={stringResult1} onPress={onPress.onPressSend} disabled={null} grow />;
});
const result = require("obj132").fileFinishedImporting("modules/instant_invite/native/components/InviteButton.tsx");

export default memoResult;