// === Module 15304: ? ===

// Module 15304
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Text from "Text" /* 4734 */;
import Button from "Button" /* 4745 */;
import { jsx } from "jsxProd" /* 21 */;
import importAllResult from "noop" /* 19 */;

require = fn;
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
const result = require("obj132").fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/items/channel/MessagesItemChannelWave.tsx");

export default memoResult;