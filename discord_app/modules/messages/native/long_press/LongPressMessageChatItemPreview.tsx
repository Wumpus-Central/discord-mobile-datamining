// === Module 11310: LongPressMessageChatItemPreview ===

// Module 11310 (LongPressMessageChatItemPreview)
import Fragment from "Fragment" /* 21 */;
import react from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import RowGeneratorDefault from "RowGenerator" /* 7602 */;
import ChatItemDefault from "ChatItem" /* 8336 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let message;

let obj2;
const jsx = Fragment.jsx;
let obj = { chatItem: obj2 };
obj2 = { maxHeight: 2 * nativeDefault.space.PX_80 };
let closure_4 = createStyles.createStyles(obj);
const tmp2 = new RowGeneratorDefault();
const rowGenerator = tmp2;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((message) => {
  const obj = react;
  const cResult = obj.c(3);
  message = message.message;
  const tmp3 = closure_4();
  if (cResult[0] === message) {
    let tmp4;
    if (cResult[1] === tmp3.chatItem.maxHeight) {
      tmp4 = cResult[2];
    }
    return tmp4;
  }
  ChatItemDefault;
  const tmp6 = <tmp5 rowGenerator={rowGenerator} message={message} maxHeight={tmp3.chatItem.maxHeight} backgroundColor={nativeDefault.colors.MOBILE_ALERT_BACKGROUND_DEFAULT} pointerEvents="none" />;
  cResult[0] = message;
  cResult[1] = tmp3.chatItem.maxHeight;
  cResult[2] = tmp6;
  tmp4 = tmp6;
}) : ((message) => {
  message = message.message;
  ChatItemDefault;
  return <tmp2 rowGenerator={rowGenerator} message={message} maxHeight={closure_4().chatItem.maxHeight} backgroundColor={nativeDefault.colors.MOBILE_ALERT_BACKGROUND_DEFAULT} pointerEvents="none" />;
});
const result = size.fileFinishedImporting("modules/messages/native/long_press/LongPressMessageChatItemPreview.tsx");

export default tmp3;