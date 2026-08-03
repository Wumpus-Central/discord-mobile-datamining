import { View } from "get ActivityIndicator";
import { InviteSendStates } from "InviteSendStates";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import importAllResult from "noop";

const require = arg1;
let closure_5 = createCacheKey.createStyles({ buttonWrapper: { minWidth: 66, flexDirection: "row" } });
const memoResult = require("noop").memo(function InviteButton(onPress) {
  let disabled;
  let sendState;
  ({ sendState, disabled } = onPress);
  if (disabled === undefined) {
    disabled = false;
  }
  const intl = require(1236) /* getSystemLocale */.intl;
  intl.string(require(1236) /* getSystemLocale */.t.jYnGPG);
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
  obj[1] = jsx(require(4666) /* Button */.Button, { accessibilityRole: "none", size: "sm", variant: "secondary", text: stringResult1, onPress: onPress.onPressSend, disabled: null, grow: true });
  return <View accessibilityRole="none" size="sm" variant="secondary" text={stringResult1} onPress={arg0.onPressSend} disabled={null} grow />;
});
const result = require("InviteSendStates").fileFinishedImporting("modules/instant_invite/native/components/InviteButton.tsx");

export default memoResult;