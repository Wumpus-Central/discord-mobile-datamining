// discord_app/modules/guild_role_subscriptions/native/components/MessageBlock.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const MessageBlockColors = { RED: 0, [0]: "RED", YELLOW: 1, [1]: "YELLOW" };
const createStyles = fn(5004);
let closure_6 = createStyles.createStyles((arg0) => {
  if (obj.RED === arg0) {
    obj = {
      backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_CRITICAL,
      borderColor: nativeDefault.colors.BORDER_FEEDBACK_CRITICAL,
    };
    let tmp2 = obj;
  } else if (tmp.YELLOW === arg0) {
    const obj2 = {
      backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_WARNING,
      borderColor: nativeDefault.colors.STATUS_WARNING,
    };
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
  obj3.text = { textAlign: "center" };
  return obj3;
});
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/MessageBlock.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function MessageBlock(arg0) {
      const obj = c;
      const cResult = obj.c(9);
      ({ color, children } = arg0);
      const tmp4 = closure_6(color);
      ({ container, text } = tmp4);
      if (cResult[0] !== color) {
        let str = "text-feedback-critical";
        if (obj.RED !== color) {
          if (obj.YELLOW === color) {
            str = "text-feedback-warning";
          }
        }
        cResult[0] = color;
        cResult[1] = str;
        let tmp5 = str;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === children) {
        if (cResult[3] === tmp4.text) {
          if (cResult[4] === tmp5) {
            let tmp6 = cResult[5];
          }
          if (cResult[6] === tmp4.container) {
            if (cResult[7] === tmp6) {
              let tmp8 = cResult[8];
            }
            return tmp8;
          }
          const obj2 = { style: container, children: tmp6 };
          const tmp11 = <View style={container}>{tmp6}</View>;
          cResult[6] = tmp4.container;
          cResult[7] = tmp6;
          cResult[8] = tmp11;
          tmp8 = tmp11;
        }
      }
      const tmp7 = jsx(Text_Text.Text, { style: text, variant: "text-sm/medium", color: tmp5, children });
      cResult[2] = children;
      cResult[3] = tmp4.text;
      cResult[4] = tmp5;
      cResult[5] = tmp7;
      tmp6 = tmp7;
    }
  : function MessageBlock(color) {
      color = color.color;
      const tmp = closure_6(color);
      const obj = { style: tmp.container, children: null };
      const obj2 = { style: tmp.text, variant: "text-sm/medium", color: null, children: null };
      let str = "text-feedback-critical";
      if (obj.RED !== color) {
        if (obj.YELLOW === color) {
          str = "text-feedback-warning";
        }
      }
      obj2.color = str;
      obj2.children = color.children;
      obj.children = jsx(Text_Text.Text, { style: tmp.text, variant: "text-sm/medium", color: null, children: null });
      return <View style={tmp.container}>{null}</View>;
    };
export { MessageBlockColors };
