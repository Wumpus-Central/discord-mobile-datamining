// discord_app/modules/guild_role_subscriptions/native/components/MessageBlock.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../design/void/native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const MessageBlockColors = { RED: 0, [0]: "RED", YELLOW: 1, [1]: "YELLOW" };
const createStyles = fn(4640);
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
  if (obj.RED === arg0) {
    let TEXT_FEEDBACK_WARNING = nativeDefault.colors.TEXT_FEEDBACK_CRITICAL;
  } else if (tmp.YELLOW === arg0) {
    TEXT_FEEDBACK_WARNING = nativeDefault.colors.TEXT_FEEDBACK_WARNING;
  }
  obj3.text = { textAlign: "center", color: TEXT_FEEDBACK_WARNING };
  return obj3;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/MessageBlock.tsx");

export default function MessageBlock(children) {
  const tmp = closure_6(children.color);
  const obj = {
    style: tmp.container,
    children: jsx(native.LegacyText, { style: tmp.text, children: children.children }),
  };
  return <View style={tmp.container}>{jsx(native.LegacyText, { style: tmp.text, children: children.children })}</View>;
}
export { MessageBlockColors };
