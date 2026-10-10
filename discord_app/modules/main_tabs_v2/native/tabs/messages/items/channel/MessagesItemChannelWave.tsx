// === Module 16451: MessagesItemChannelWave ===

// Module 16451 (MessagesItemChannelWave)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import Text_Text from "Text/Text" /* 5088 */;
import components_Button_Button from "components/Button/Button" /* 5379 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/items/channel/MessagesItemChannelWave.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function MessagesItemChannelWave(arg0) {
  const cResult = c.c(5);
  ({ wavePressed, hasNameplate } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(util.t.n8nU4W);
    cResult[0] = stringResult;
    let first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { style: { marginTop: 3 }, variant: "text-sm/semibold", "aria-hidden": true, children: "\u{1F44B}" };
    const tmp9 = jsx(Text_Text.Text, { style: { marginTop: 3 }, variant: "text-sm/semibold", "aria-hidden": true, children: "\u{1F44B}" });
    cResult[1] = tmp9;
    let tmp7 = tmp9;
  } else {
    tmp7 = cResult[1];
  }
  let str = "secondary";
  if (tmp4) {
    str = "secondary-overlay";
  }
  if (cResult[2] === str) {
    if (cResult[3] === wavePressed) {
      let tmp10 = cResult[4];
    }
    return tmp10;
  }
  const tmp11 = jsx(components_Button_Button.Button, { text: first, icon: tmp7, variant: str, size: "sm", onPress: wavePressed });
  cResult[2] = str;
  cResult[3] = wavePressed;
  cResult[4] = tmp11;
  tmp10 = tmp11;
  tmp4 = undefined !== hasNameplate && hasNameplate;
}) : (function MessagesItemChannelWave(hasNameplate) {
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
}));