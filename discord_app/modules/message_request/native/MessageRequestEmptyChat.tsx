// === Module 13514: MessageRequestEmptyChat ===

// Module 13514 (MessageRequestEmptyChat)
import c from "c" /* 576 */;
import util from "util" /* 1128 */;
import Text_Text from "Text/Text" /* 5232 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4969);
const PlatformUtils = fn(1384);
if (PlatformUtils.isAndroid()) {
  const obj3 = { fontFamily: fn(1098).Fonts.PRIMARY_NORMAL_ITALIC };
  let obj4 = obj3;
} else {
  obj4 = { fontStyle: "italic" };
}
const obj5 = { text: null };
const merged = Object.assign(obj4);
obj5.text = { textAlign: "center" };
let closure_4 = createStyles.createStyles(obj5);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/message_request/native/MessageRequestEmptyChat.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function MessageRequestEmptyChat(style) {
  const cResult = c.c(6);
  style = style.style;
  const tmp4 = closure_4();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(util.t.eeJvfA);
    cResult[0] = stringResult;
    let first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.text) {
    const obj2 = { style: tmp4.text, variant: "text-md/normal", color: "text-muted", children: first };
    const tmp9 = jsx(Text_Text.Text, { style: tmp4.text, variant: "text-md/normal", color: "text-muted", children: first });
    cResult[1] = tmp4.text;
    cResult[2] = tmp9;
    let tmp7 = tmp9;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] === style) {
    if (cResult[4] === tmp7) {
      let tmp10 = cResult[5];
    }
    return tmp10;
  }
  const tmp11 = <View style={style}>{tmp7}</View>;
  cResult[3] = style;
  cResult[4] = tmp7;
  cResult[5] = tmp11;
  tmp10 = tmp11;
}) : (function MessageRequestEmptyChat(style) {
  const obj = { style: style.style, children: null };
  const obj2 = { style: closure_4().text, variant: "text-md/normal", color: "text-muted", children: null };
  const intl = util.intl;
  obj2.children = intl.string(util.t.eeJvfA);
  obj.children = jsx(Text_Text.Text, { style: closure_4().text, variant: "text-md/normal", color: "text-muted", children: null });
  return <View style={style.style}>{null}</View>;
});