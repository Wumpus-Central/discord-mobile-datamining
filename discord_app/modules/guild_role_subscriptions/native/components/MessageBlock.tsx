// discord_app/modules/guild_role_subscriptions/native/components/MessageBlock.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../design/void/native.tsx";
import react from "../../../../../_runtime/00019_react.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

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
    obj = {
      backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_CRITICAL,
      borderColor: nativeDefault.colors.BORDER_FEEDBACK_CRITICAL,
    };
    tmp2 = obj;
  } else if (obj.YELLOW === arg0) {
    tmp2 = {
      backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_WARNING,
      borderColor: nativeDefault.colors.STATUS_WARNING,
    };
    const obj2 = {
      backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_WARNING,
      borderColor: nativeDefault.colors.STATUS_WARNING,
    };
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
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (children) => {
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
    }
  : (children) => {
      children = children.children;
      const tmp = closure_6(children.color);
      return <View style={tmp.container}>{null}</View>;
    };
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/MessageBlock.tsx");

export default tmp3;
export { MessageBlockColors };
