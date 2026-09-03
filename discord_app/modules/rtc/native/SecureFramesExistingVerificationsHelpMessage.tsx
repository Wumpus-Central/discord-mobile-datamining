// === Module 9878: SecureFramesExistingVerificationsHelpMessage ===

// Module 9878 (SecureFramesExistingVerificationsHelpMessage)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import useSecureFramesUserVerifiedKeysCount from "useSecureFramesUserVerifiedKeysCount" /* 9879 */;
import createCacheKey from "createCacheKey" /* 4478 */;

const View = get_ActivityIndicator.View;
const jsx = jsxProd.jsx;
let closure_4 = createCacheKey.createStyles({ container: { width: "100%" } });
const result = set.fileFinishedImporting("modules/rtc/native/SecureFramesExistingVerificationsHelpMessage.tsx");

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
    obj[0] = tmp2(1296).HelpMessageTypes.INFO;
    const intl = tmp2(1233).intl;
    obj1 = { count: null };
    obj1[0] = secureFramesUserVerifiedKeysCount;
    obj[1] = intl.format(tmp2(1233).t.uZDkz0, obj1);
    obj[1] = jsx(tmp2(1296).HelpMessage, { messageType: null, children: null });
    tmp5 = <View messageType={null}>{null}</View>;
  }
  return tmp5;
};