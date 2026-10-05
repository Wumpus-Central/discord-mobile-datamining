// === Module 11853: MessageBlock ===

// Module 11853 (MessageBlock)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1188 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let children;

const View = react_native.View;
const jsx = Fragment.jsx;
const MessageBlockColors = { RED: 0, [0]: "RED", YELLOW: 1, [1]: "YELLOW" };
let closure_6 = createStyles.createStyles((arg0) => {
  let TEXT_FEEDBACK_WARNING;
  let obj;
  let obj4;
  let tmp2;
  if (obj.RED === arg0) {
    obj = { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_CRITICAL, borderColor: nativeDefault.colors.BORDER_FEEDBACK_CRITICAL };
    tmp2 = obj;
  } else if (obj.YELLOW === arg0) {
    tmp2 = { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_WARNING, borderColor: nativeDefault.colors.STATUS_WARNING };
    const obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_WARNING, borderColor: nativeDefault.colors.STATUS_WARNING };
  }
  const obj3 = { container: obj4, text: { textAlign: "center", color: TEXT_FEEDBACK_WARNING } };
  obj4 = { alignItems: "center", borderRadius: nativeDefault.radii.xs, borderWidth: 1, padding: 8, width: "100%" };
  const merged = Object.assign(tmp2);
  if (obj.RED === arg0) {
    TEXT_FEEDBACK_WARNING = nativeDefault.colors.TEXT_FEEDBACK_CRITICAL;
  } else if (obj.YELLOW === arg0) {
    TEXT_FEEDBACK_WARNING = nativeDefault.colors.TEXT_FEEDBACK_WARNING;
  }
  return obj3;
});
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((children) => {
  const obj = react2;
  const cResult = obj.c(6);
  children = children.children;
  const tmp4 = closure_6(children.color);
  if (cResult[0] === children) {
    let tmp5;
    if (cResult[1] === tmp4.text) {
      tmp5 = cResult[2];
    }
    if (cResult[3] === tmp4.container) {
      let tmp7;
      if (cResult[4] === tmp5) {
        tmp7 = cResult[5];
      }
      return tmp7;
    }
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
}) : ((children) => {
  children = children.children;
  const tmp = closure_6(children.color);
  return <View style={tmp.container}>{null}</View>;
});
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/MessageBlock.tsx");

export default tmp3;
export { MessageBlockColors };