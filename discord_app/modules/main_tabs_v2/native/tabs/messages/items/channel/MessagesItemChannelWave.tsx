// discord_app/modules/main_tabs_v2/native/tabs/messages/items/channel/MessagesItemChannelWave.tsx
import util from "../../../../../../../intl/index.native.tsx";
import Text_Text from "../../../../../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../../../../../design/components/Button/native/Button.native.tsx";
import noop from "../../../../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/main_tabs_v2/native/tabs/messages/items/channel/MessagesItemChannelWave.tsx",
);

export default noop.memo(function MessagesItemChannelWave(hasNameplate) {
  let flag = hasNameplate.hasNameplate;
  if (flag === undefined) {
    flag = false;
  }
  const obj = { text: null, icon: null, variant: null, size: "sm", onPress: null };
  const intl = util.intl;
  obj.text = intl.string(util.t.n8nU4W);
  obj.icon = jsx(Text_Text.Text, {
    style: { marginTop: 3 },
    variant: "text-sm/semibold",
    "aria-hidden": true,
    children: "\u{1F44B}",
  });
  let str = "secondary";
  if (flag) {
    str = "secondary-overlay";
  }
  obj.variant = str;
  obj.onPress = hasNameplate.wavePressed;
  return jsx(components_Button_Button.Button, { text: null, icon: null, variant: null, size: "sm", onPress: null });
});
