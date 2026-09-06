// discord_app/modules/rtc/native/SecureFramesExistingVerificationsHelpMessage.tsx
import _mod17 from "../../../../_runtime/metro/00017__.js";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import util from "../../../intl/index.native.tsx";
import native from "../../../design/void/native.tsx";
import useSecureFramesUserVerifiedKeysCount from "../hooks/useSecureFramesUserVerifiedKeysCount.tsx";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../_runtime/metro/00002__.js";

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
}
