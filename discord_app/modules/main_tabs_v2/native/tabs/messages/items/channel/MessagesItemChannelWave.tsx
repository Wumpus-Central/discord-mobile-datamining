// discord_app/modules/main_tabs_v2/native/tabs/messages/items/channel/MessagesItemChannelWave.tsx
import getSystemLocale from "../../../../../../../intl/index.native.tsx";
import Text from "../../../../../../../design/components/Text/native/Text.tsx";
import Button from "../../../../../../../design/components/Button/native/Button.native.tsx";
import { jsx } from "../../../../../../../../_runtime/react/00021_jsxProd.js";
import importAllResult from "../../../../../../../../_runtime/00019_noop.js";

require = arg1;
const memoResult = importAllResult.memo(function MessagesItemChannelWave(hasNameplate) {
  let flag = hasNameplate.hasNameplate;
  if (flag === undefined) {
    flag = false;
  }
  const obj = { text: null, icon: null, variant: null, size: "sm", onPress: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t.n8nU4W);
  obj[1] = jsx(Text.Text, { style: { marginTop: 3 }, variant: "text-sm/semibold", "aria-hidden": true, children: "\u{1F44B}" });
  let str = "secondary";
  if (flag) {
    str = "secondary-overlay";
  }
  obj[2] = str;
  obj[4] = hasNameplate.wavePressed;
  return jsx(Button.Button, { text: null, icon: null, variant: null, size: "sm", onPress: null });
});
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/items/channel/MessagesItemChannelWave.tsx");

export default memoResult;