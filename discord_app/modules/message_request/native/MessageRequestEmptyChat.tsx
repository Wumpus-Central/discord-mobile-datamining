// === Module 14154: MessageRequestEmptyChat ===

// Module 14154 (MessageRequestEmptyChat)
import util from "util" /* 1114 */;
import Text_Text from "Text/Text" /* 5619 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5009);
const PlatformUtils = fn(1376);
if (PlatformUtils.isAndroid()) {
  const obj3 = { fontFamily: fn(1083).Fonts.PRIMARY_NORMAL_ITALIC };
  let obj4 = obj3;
} else {
  obj4 = { fontStyle: "italic" };
}
const obj5 = { text: null };
const merged = Object.assign(obj4);
obj5.text = { textAlign: "center" };
let closure_4 = createStyles.createStyles(obj5);
const size = fn(2);
const result = size.fileFinishedImporting("modules/message_request/native/MessageRequestEmptyChat.tsx");

export default function MessageRequestEmptyChat(style) {
  const obj = { style: style.style, children: null };
  const obj2 = { style: closure_4().text, variant: "text-md/normal", color: "text-muted", children: null };
  const intl = util.intl;
  obj2.children = intl.string(util.t.eeJvfA);
  obj.children = jsx(Text_Text.Text, { style: closure_4().text, variant: "text-md/normal", color: "text-muted", children: null });
  return <View style={style.style}>{null}</View>;
};