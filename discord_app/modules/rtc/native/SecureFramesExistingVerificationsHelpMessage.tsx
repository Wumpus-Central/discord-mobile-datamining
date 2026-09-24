// === Module 10067: SecureFramesExistingVerificationsHelpMessage ===

// Module 10067 (SecureFramesExistingVerificationsHelpMessage)
import _mod17 from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import util from "util" /* 1115 */;
import native from "native" /* 1177 */;
import useSecureFramesUserVerifiedKeysCount from "useSecureFramesUserVerifiedKeysCount" /* 10068 */;
import createStyles from "createStyles" /* 4829 */;
import size from "module_2" /* 2 */;

const View = _mod17.View;
const jsx = jsxProd.jsx;
let closure_4 = createStyles.createStyles({ container: { width: "100%" } });
const result = size.fileFinishedImporting("modules/rtc/native/SecureFramesExistingVerificationsHelpMessage.tsx");

export default function SecureFramesExistingVerificationsHelpMessage(arg0) {
  ({ style, userId, userKey } = arg0);
  const tmp = closure_4();
  const secureFramesUserVerifiedKeysCount = useSecureFramesUserVerifiedKeysCount.useSecureFramesUserVerifiedKeysCount({ userId, keyToOmit: userKey });
  let tmp5 = null;
  if (0 !== secureFramesUserVerifiedKeysCount) {
    const obj2 = { style: null, children: null };
    const items = [tmp.container, style];
    obj2.style = items;
    const obj3 = { messageType: native.HelpMessageTypes.INFO, children: null };
    const intl = util.intl;
    const obj4 = { count: secureFramesUserVerifiedKeysCount };
    obj3.children = intl.format(util.t.uZDkz0, obj4);
    obj2.children = jsx(native.HelpMessage, { messageType: native.HelpMessageTypes.INFO, children: null });
    tmp5 = <View style={null}>{null}</View>;
  }
  return tmp5;
};