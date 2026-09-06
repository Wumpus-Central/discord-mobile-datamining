// discord_app/modules/messages/native/long_press/LongPressMessageChatItemPreview.tsx
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import RowGeneratorDefault from "../renderer/RowGenerator.tsx";
import ChatItemDefault from "../../../../components_native/chat/ChatItem.tsx";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const jsx = jsxProd.jsx;
let obj = { chatItem: null };
obj = { maxHeight: 2 * nativeDefault.space.PX_80 };
obj.chatItem = obj;
let closure_3 = createStyles.createStyles(obj);
const rowGenerator = new RowGeneratorDefault();
const result = size.fileFinishedImporting("modules/messages/native/long_press/LongPressMessageChatItemPreview.tsx");

export default function LongPressMessageChatItemPreview(message) {
  const obj = {
    rowGenerator,
    message: message.message,
    maxHeight: closure_3().chatItem.maxHeight,
    backgroundColor: null,
    pointerEvents: "none",
  };
  const tmp = closure_3();
  obj.backgroundColor = nativeDefault.colors.MOBILE_ALERT_BACKGROUND_DEFAULT;
  return jsx(ChatItemDefault, {
    rowGenerator,
    message: message.message,
    maxHeight: closure_3().chatItem.maxHeight,
    backgroundColor: null,
    pointerEvents: "none",
  });
}
