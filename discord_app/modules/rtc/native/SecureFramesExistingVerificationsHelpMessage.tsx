// discord_app/modules/rtc/native/SecureFramesExistingVerificationsHelpMessage.tsx
import set from "../../../../_runtime/00002_set.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import useSecureFramesUserVerifiedKeysCount from "../hooks/useSecureFramesUserVerifiedKeysCount.tsx";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

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
    obj[0] = tmp2(1297).HelpMessageTypes.INFO;
    const intl = tmp2(1236).intl;
    obj1 = { count: null };
    obj1[0] = secureFramesUserVerifiedKeysCount;
    obj[1] = intl.format(tmp2(1236).t.uZDkz0, obj1);
    obj[1] = jsx(tmp2(1297).HelpMessage, { messageType: null, children: null });
    tmp5 = <View messageType={null}>{null}</View>;
  }
  return tmp5;
};