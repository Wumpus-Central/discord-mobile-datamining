// === Module 11310: LongPressMessageChatItemPreview ===

// Module 11310 (LongPressMessageChatItemPreview)
import jsxProd from "jsxProd" /* 21 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import RowGeneratorDefault from "RowGenerator" /* 7602 */;
import ChatItemDefault from "ChatItem" /* 8336 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = jsxProd.jsx;
let obj = { chatItem: { maxHeight: 2 * nativeDefault.space.PX_80 } };
let closure_4 = createStyles.createStyles(obj);
let obj2 = { maxHeight: 2 * nativeDefault.space.PX_80 };
const rowGenerator = new RowGeneratorDefault();
const tmp2 = new RowGeneratorDefault();
const result = size.fileFinishedImporting("modules/messages/native/long_press/LongPressMessageChatItemPreview.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((message) => {
  const cResult = c.c(3);
  message = message.message;
  const tmp3 = closure_4();
  if (cResult[0] === message) {
    if (cResult[1] === tmp3.chatItem.maxHeight) {
      let tmp4 = cResult[2];
    }
    return tmp4;
  }
  const obj2 = { rowGenerator, message, maxHeight: tmp3.chatItem.maxHeight, backgroundColor: null, pointerEvents: "none" };
  obj2.backgroundColor = nativeDefault.colors.MOBILE_ALERT_BACKGROUND_DEFAULT;
  const tmp6 = jsx(ChatItemDefault, { rowGenerator, message, maxHeight: tmp3.chatItem.maxHeight, backgroundColor: null, pointerEvents: "none" });
  cResult[0] = message;
  cResult[1] = tmp3.chatItem.maxHeight;
  cResult[2] = tmp6;
  tmp4 = tmp6;
}) : ((message) => {
  const obj = { rowGenerator, message: message.message, maxHeight: closure_4().chatItem.maxHeight, backgroundColor: null, pointerEvents: "none" };
  const tmp = closure_4();
  obj.backgroundColor = nativeDefault.colors.MOBILE_ALERT_BACKGROUND_DEFAULT;
  return jsx(ChatItemDefault, { rowGenerator, message: message.message, maxHeight: closure_4().chatItem.maxHeight, backgroundColor: null, pointerEvents: "none" });
});