// === Module 9163: SecureFramesExistingVerificationsHelpMessage ===

// Module 9163 (SecureFramesExistingVerificationsHelpMessage)
import _mod17 from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import util from "util" /* 1114 */;
import native from "native" /* 1178 */;
import useSecureFramesUserVerifiedKeysCount from "useSecureFramesUserVerifiedKeysCount" /* 9164 */;
import createStyles from "createStyles" /* 4560 */;
import size from "module_2" /* 2 */;

const View = _mod17.View;
const jsx = jsxProd.jsx;
let closure_4 = createStyles.createStyles({ container: { width: "100%" } });
const result = size.fileFinishedImporting("modules/rtc/native/SecureFramesExistingVerificationsHelpMessage.tsx");

export default function SecureFramesExistingVerificationsHelpMessage(arg0) {
  ({ style, userId, userKey } = arg0);
  let obj = useSecureFramesUserVerifiedKeysCount;
  const secureFramesUserVerifiedKeysCount = obj.useSecureFramesUserVerifiedKeysCount({ userId, keyToOmit: userKey });
  let tmp5 = null;
  if (0 !== secureFramesUserVerifiedKeysCount) {
    obj = { style: null, children: null };
    const items = [tmp.container, style];
    obj.style = items;
    obj = { messageType: native.HelpMessageTypes.INFO, children: null };
    const intl = util.intl;
    const obj1 = { count: secureFramesUserVerifiedKeysCount };
    obj.children = intl.format(util.t.uZDkz0, obj1);
    obj.children = jsx(native.HelpMessage, { messageType: native.HelpMessageTypes.INFO, children: null });
    tmp5 = <View messageType={native.HelpMessageTypes.INFO}>{null}</View>;
  }
  return tmp5;
};