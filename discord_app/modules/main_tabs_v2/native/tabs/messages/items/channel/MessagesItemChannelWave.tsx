// === Module 16005: MessagesItemChannelWave ===

// Module 16005 (MessagesItemChannelWave)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import intl2 from "intl" /* 1126 */;
import Text_Text from "Text/Text" /* 4892 */;
import components_Button_Button from "components/Button/Button" /* 5601 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let first;
  let hasNameplate;
  let tmp7;
  let wavePressed;
  const obj = react2;
  const cResult = obj.c(5);
  ({ wavePressed, hasNameplate } = arg0);
  const tmp4 = undefined !== hasNameplate && hasNameplate;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = intl2.intl;
    const stringResult = intl.string(intl2.t.n8nU4W);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp9 = jsx(Text_Text.Text, { style: { marginTop: 3 }, variant: "text-sm/semibold", "aria-hidden": true, children: "\u{1F44B}" });
    cResult[1] = tmp9;
    tmp7 = tmp9;
  } else {
    tmp7 = cResult[1];
  }
  let str = "secondary";
  if (tmp4) {
    str = "secondary-overlay";
  }
  if (cResult[2] === str) {
    let tmp10;
    if (cResult[3] === wavePressed) {
      tmp10 = cResult[4];
    }
    return tmp10;
  }
  const tmp11 = jsx(components_Button_Button.Button, { text: first, icon: tmp7, variant: str, size: "sm", onPress: wavePressed });
  cResult[2] = str;
  cResult[3] = wavePressed;
  cResult[4] = tmp11;
  tmp10 = tmp11;
}) : ((hasNameplate) => {
  let flag = hasNameplate.hasNameplate;
  const wavePressed = hasNameplate.wavePressed;
  if (flag === undefined) {
    flag = false;
  }
  const Button = components_Button_Button.Button;
  const intl = intl2.intl;
  let str = "secondary";
  if (flag) {
    str = "secondary-overlay";
  }
  return <Button text={intl.string(intl2.t.n8nU4W)} icon={null} variant={str} size="sm" onPress={wavePressed} />;
}));
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/items/channel/MessagesItemChannelWave.tsx");

export default memoResult;