// === Module 11853: MessageBlock ===

// Module 11853 (MessageBlock)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1188 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const MessageBlockColors = { RED: 0, [0]: "RED", YELLOW: 1, [1]: "YELLOW" };
const createStyles = fn(4890);
let closure_6 = createStyles.createStyles((arg0) => {
  if (obj.RED === arg0) {
    obj = { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_CRITICAL, borderColor: nativeDefault.colors.BORDER_FEEDBACK_CRITICAL };
    let tmp2 = obj;
  } else if (tmp.YELLOW === arg0) {
    const obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_WARNING, borderColor: nativeDefault.colors.STATUS_WARNING };
    tmp2 = obj2;
  }
  const obj3 = { container: null, text: null };
  const obj4 = {};
  const merged = Object.assign(tmp2);
  obj4.alignItems = "center";
  obj4.borderRadius = nativeDefault.radii.xs;
  obj4.borderWidth = 1;
  obj4.padding = 8;
  obj4.width = "100%";
  obj3.container = obj4;
  if (obj.RED === arg0) {
    let TEXT_FEEDBACK_WARNING = nativeDefault.colors.TEXT_FEEDBACK_CRITICAL;
  } else if (tmp.YELLOW === arg0) {
    TEXT_FEEDBACK_WARNING = nativeDefault.colors.TEXT_FEEDBACK_WARNING;
  }
  obj3.text = { textAlign: "center", color: TEXT_FEEDBACK_WARNING };
  return obj3;
});
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/MessageBlock.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((children) => {
  const cResult = c.c(6);
  children = children.children;
  const tmp4 = closure_6(children.color);
  if (cResult[0] === children) {
    if (cResult[1] === tmp4.text) {
      let tmp5 = cResult[2];
    }
    if (cResult[3] === tmp4.container) {
      if (cResult[4] === tmp5) {
        let tmp7 = cResult[5];
      }
      return tmp7;
    }
    const obj2 = { style: tmp4.container, children: tmp5 };
    const tmp10 = <View style={tmp4.container}>{tmp5}</View>;
    cResult[3] = tmp4.container;
    cResult[4] = tmp5;
    cResult[5] = tmp10;
    tmp7 = tmp10;
  }
  const tmp6 = jsx(native.LegacyText, { style: tmp4.text, children });
  cResult[0] = children;
  cResult[1] = tmp4.text;
  cResult[2] = tmp6;
  tmp5 = tmp6;
  const obj3 = { style: tmp4.text, children };
}) : ((children) => {
  const tmp = closure_6(children.color);
  const obj = { style: tmp.container, children: jsx(native.LegacyText, { style: tmp.text, children: children.children }) };
  return <View style={tmp.container}>{jsx(native.LegacyText, { style: tmp.text, children: children.children })}</View>;
});
export { MessageBlockColors };