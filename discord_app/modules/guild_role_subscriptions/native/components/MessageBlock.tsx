// === Module 12224: MessageBlock ===

// Module 12224 (MessageBlock)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1178 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const MessageBlockColors = { RED: 0, [0]: "RED", YELLOW: 1, [1]: "YELLOW" };
const createStyles = fn(4560);
let closure_6 = createStyles.createStyles((arg0) => {
  if (obj.RED === arg0) {
    obj = { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_CRITICAL, borderColor: nativeDefault.colors.BORDER_FEEDBACK_CRITICAL };
    let tmp2 = obj;
  } else if (tmp.YELLOW === arg0) {
    obj = { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_WARNING, borderColor: nativeDefault.colors.STATUS_WARNING };
    tmp2 = obj;
  }
  obj = { container: null, text: null };
  const obj1 = {};
  const merged = Object.assign(tmp2);
  obj1.alignItems = "center";
  obj1.borderRadius = nativeDefault.radii.xs;
  obj1.borderWidth = 1;
  obj1.padding = 8;
  obj1.width = "100%";
  obj.container = obj1;
  if (obj.RED === arg0) {
    let TEXT_FEEDBACK_WARNING = tmp6(576).colors.TEXT_FEEDBACK_CRITICAL;
  } else if (tmp.YELLOW === arg0) {
    TEXT_FEEDBACK_WARNING = tmp6(576).colors.TEXT_FEEDBACK_WARNING;
  }
  obj.text = { textAlign: "center", color: TEXT_FEEDBACK_WARNING };
  return obj;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/MessageBlock.tsx");

export default function MessageBlock(children) {
  const tmp = closure_6(children.color);
  let obj = { style: tmp.container, children: null };
  obj = { style: tmp.text, children: children.children };
  obj.children = jsx(native.LegacyText, { style: tmp.text, children: children.children });
  return <View style={tmp.text}>{arg0.children}</View>;
};
export { MessageBlockColors };