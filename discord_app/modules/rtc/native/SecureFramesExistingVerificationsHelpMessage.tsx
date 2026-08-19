// === Module 9719: SecureFramesExistingVerificationsHelpMessage ===

// Module 9719 (SecureFramesExistingVerificationsHelpMessage)
import obj132 from "obj132" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Button from "Button" /* 1297 */;
import useSecureFramesUserVerifiedKeysCount from "useSecureFramesUserVerifiedKeysCount" /* 9720 */;
import createCacheKey from "createCacheKey" /* 4661 */;

const View = get_ActivityIndicator.View;
const jsx = jsxProd.jsx;
let closure_4 = createCacheKey.createStyles({ container: { width: "100%" } });
const result = obj132.fileFinishedImporting("modules/rtc/native/SecureFramesExistingVerificationsHelpMessage.tsx");

export default function SecureFramesExistingVerificationsHelpMessage(arg0) {
  ({ style, userId, userKey } = arg0);
  let obj = useSecureFramesUserVerifiedKeysCount;
  const secureFramesUserVerifiedKeysCount = obj.useSecureFramesUserVerifiedKeysCount({ userId, keyToOmit: userKey });
  let tmp5 = null;
  if (0 !== secureFramesUserVerifiedKeysCount) {
    obj = { style: null, children: null };
    const items = [tmp.container, style];
    obj[0] = items;
    obj = { messageType: null, children: null };
    obj[0] = Button.HelpMessageTypes.INFO;
    const intl = getSystemLocale.intl;
    obj1 = { count: null };
    obj1[0] = secureFramesUserVerifiedKeysCount;
    obj[1] = intl.format(getSystemLocale.t.uZDkz0, obj1);
    obj[1] = jsx(Button.HelpMessage, { messageType: null, children: null });
    tmp5 = <View messageType={null}>{null}</View>;
  }
  return tmp5;
};