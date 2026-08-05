// discord_app/modules/main_tabs_v2/native/tabs/messages/items/channel/MessagesItemChannelWave.tsx
import { jsx } from "jsxProd";
import importAllResult from "noop";

const require = arg1;
const memoResult = require("noop").memo(function MessagesItemChannelWave(hasNameplate) {
  let flag = hasNameplate.hasNameplate;
  if (flag === undefined) {
    flag = false;
  }
  const obj = { text: null, icon: null, variant: null, size: "sm", onPress: null };
  const intl = require("../../../../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[0] = intl.string(require("../../../../../../../intl/index.native.tsx") /* getSystemLocale */.t.n8nU4W);
  obj[1] = jsx(require("../../../../../../../design/components/Text/native/Text.tsx") /* Text */.Text, { style: { marginTop: 3 }, variant: "text-sm/semibold", "aria-hidden": true, children: "\u{1F44B}" });
  let str = "secondary";
  if (flag) {
    str = "secondary-overlay";
  }
  obj[2] = str;
  obj[4] = hasNameplate.wavePressed;
  return jsx(require("../../../../../../../design/components/Button/native/Button.native.tsx") /* Button */.Button, { text: null, icon: null, variant: null, size: "sm", onPress: null });
});
const result = require("Button").fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/items/channel/MessagesItemChannelWave.tsx");

export default memoResult;