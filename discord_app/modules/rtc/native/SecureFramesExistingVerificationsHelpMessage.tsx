// === Module 8840: SecureFramesExistingVerificationsHelpMessage ===

// Module 8840 (SecureFramesExistingVerificationsHelpMessage)
import _mod17 from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import InlineNotice from "InlineNotice" /* 7567 */;
import useSecureFramesUserVerifiedKeysCount from "useSecureFramesUserVerifiedKeysCount" /* 8841 */;
import createStyles from "createStyles" /* 5092 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const View = _mod17.View;
const jsx = jsxProd.jsx;
let closure_4 = createStyles.createStyles({ container: { width: "100%" } });
const result = size.fileFinishedImporting("modules/rtc/native/SecureFramesExistingVerificationsHelpMessage.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function SecureFramesExistingVerificationsHelpMessage(arg0) {
  const cResult = c.c(13);
  ({ style, userId, userKey } = arg0);
  const tmp4 = closure_4();
  if (cResult[0] === userId) {
    if (cResult[1] === userKey) {
      let tmp5 = cResult[2];
    }
    const secureFramesUserVerifiedKeysCount = useSecureFramesUserVerifiedKeysCount.useSecureFramesUserVerifiedKeysCount(tmp5);
    if (0 === secureFramesUserVerifiedKeysCount) {
      return null;
    } else {
      if (cResult[3] === style) {
        if (cResult[4] === tmp4.container) {
          let tmp8 = cResult[5];
        }
        if (cResult[6] !== secureFramesUserVerifiedKeysCount) {
          const intl = util.intl;
          const obj2 = { count: secureFramesUserVerifiedKeysCount };
          const formatResult = intl.format(util.t.uZDkz0, obj2);
          cResult[6] = secureFramesUserVerifiedKeysCount;
          cResult[7] = formatResult;
          let tmp9 = formatResult;
        } else {
          tmp9 = cResult[7];
        }
        if (cResult[8] !== tmp9) {
          const obj3 = { type: "info", message: tmp9, role: "static" };
          const tmp13 = jsx(InlineNotice.InlineNotice, { type: "info", message: tmp9, role: "static" });
          cResult[8] = tmp9;
          cResult[9] = tmp13;
          let tmp11 = tmp13;
        } else {
          tmp11 = cResult[9];
        }
        if (cResult[10] === tmp8) {
        }
        const obj4 = { style: tmp8, children: tmp11 };
        const tmp17 = <View style={tmp8}>{tmp11}</View>;
        cResult[10] = tmp8;
        cResult[11] = tmp11;
        cResult[12] = tmp17;
      }
      const items = [tmp4.container, style];
      cResult[3] = style;
      cResult[4] = tmp4.container;
      cResult[5] = items;
      tmp8 = items;
    }
    const tmpResult = useSecureFramesUserVerifiedKeysCount;
  }
  const obj5 = { userId, keyToOmit: userKey };
  cResult[0] = userId;
  cResult[1] = userKey;
  cResult[2] = obj5;
  tmp5 = obj5;
}) : (function SecureFramesExistingVerificationsHelpMessage(arg0) {
  ({ style, userId, userKey } = arg0);
  const tmp = closure_4();
  const secureFramesUserVerifiedKeysCount = useSecureFramesUserVerifiedKeysCount.useSecureFramesUserVerifiedKeysCount({ userId, keyToOmit: userKey });
  let tmp5 = null;
  if (0 !== secureFramesUserVerifiedKeysCount) {
    const obj2 = { style: null, children: null };
    const items = [tmp.container, style];
    obj2.style = items;
    const obj3 = { type: "info", message: null, role: "static" };
    const intl = util.intl;
    const obj4 = { count: secureFramesUserVerifiedKeysCount };
    obj3.message = intl.format(util.t.uZDkz0, obj4);
    obj2.children = jsx(InlineNotice.InlineNotice, { type: "info", message: null, role: "static" });
    tmp5 = <View style={null}>{null}</View>;
  }
  return tmp5;
});