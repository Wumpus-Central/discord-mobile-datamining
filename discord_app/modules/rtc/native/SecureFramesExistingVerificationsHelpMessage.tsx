// === Module 9258: SecureFramesExistingVerificationsHelpMessage ===

// Module 9258 (SecureFramesExistingVerificationsHelpMessage)
import _mod17 from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import util from "util" /* 1114 */;
import InlineNotice from "InlineNotice" /* 8017 */;
import useSecureFramesUserVerifiedKeysCount from "useSecureFramesUserVerifiedKeysCount" /* 9259 */;
import createStyles from "createStyles" /* 5009 */;
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
    const obj3 = { type: "info", message: null, role: "none" };
    const intl = util.intl;
    const obj4 = { count: secureFramesUserVerifiedKeysCount };
    obj3.message = intl.format(util.t.uZDkz0, obj4);
    obj2.children = jsx(InlineNotice.InlineNotice, { type: "info", message: null, role: "none" });
    tmp5 = <View style={null}>{null}</View>;
  }
  return tmp5;
};