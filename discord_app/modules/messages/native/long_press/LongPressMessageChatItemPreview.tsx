// === Module 11673: LongPressMessageChatItemPreview ===

// Module 11673 (LongPressMessageChatItemPreview)
import jsxProd from "jsxProd" /* 21 */;
import nativeDefault from "native" /* 576 */;
import RowGeneratorDefault from "RowGenerator" /* 7932 */;
import ChatItemDefault from "ChatItem" /* 8652 */;
import createStyles from "createStyles" /* 4560 */;
import size from "module_2" /* 2 */;

const jsx = jsxProd.jsx;
let obj = { chatItem: null };
obj = { maxHeight: 2 * nativeDefault.space.PX_80 };
obj.chatItem = obj;
let closure_3 = createStyles.createStyles(obj);
const rowGenerator = new RowGeneratorDefault();
const result = size.fileFinishedImporting("modules/messages/native/long_press/LongPressMessageChatItemPreview.tsx");

export default function LongPressMessageChatItemPreview(message) {
  const obj = { rowGenerator, message: message.message, maxHeight: closure_3().chatItem.maxHeight, backgroundColor: null, pointerEvents: "none" };
  const tmp = closure_3();
  obj.backgroundColor = nativeDefault.colors.MOBILE_ALERT_BACKGROUND_DEFAULT;
  return jsx(ChatItemDefault, { rowGenerator, message: message.message, maxHeight: closure_3().chatItem.maxHeight, backgroundColor: null, pointerEvents: "none" });
};