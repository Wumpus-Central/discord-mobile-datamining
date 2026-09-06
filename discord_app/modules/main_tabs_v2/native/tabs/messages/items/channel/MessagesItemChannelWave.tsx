// === Module 16039: MessagesItemChannelWave ===

// Module 16039 (MessagesItemChannelWave)
import util from "util" /* 1114 */;
import Text_Text from "Text/Text" /* 4556 */;
import components_Button_Button from "components/Button/Button" /* 4975 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/items/channel/MessagesItemChannelWave.tsx");

export default noop.memo(function MessagesItemChannelWave(hasNameplate) {
  let flag = hasNameplate.hasNameplate;
  if (flag === undefined) {
    flag = false;
  }
  const obj = { text: null, icon: null, variant: null, size: "sm", onPress: null };
  const intl = util.intl;
  obj.text = intl.string(util.t.n8nU4W);
  obj.icon = jsx(Text_Text.Text, { style: { marginTop: 3 }, variant: "text-sm/semibold", "aria-hidden": true, children: "\u{1F44B}" });
  let str = "secondary";
  if (flag) {
    str = "secondary-overlay";
  }
  obj.variant = str;
  obj.onPress = hasNameplate.wavePressed;
  return jsx(components_Button_Button.Button, { text: null, icon: null, variant: null, size: "sm", onPress: null });
});