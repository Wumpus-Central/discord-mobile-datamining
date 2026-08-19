// === Module 11425: getChatInputPositionStyle ===

// Module 11425 (getChatInputPositionStyle)
import obj132 from "obj132" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import obj1322 from "obj132" /* 500 */;

let obj = {};
const merged = Object.assign(get_ActivityIndicator.StyleSheet.absoluteFillObject);
obj.top = undefined;
const result = obj132.fileFinishedImporting("modules/chat_input/native/getChatInputPositionStyle.tsx");

export default function getChatInputPositionStyle() {
  obj = arg0;
  if (arg0 === undefined) {
    obj = { isCreatingThread: false };
  }
  let tmp;
  if (!obj.isCreatingThread) {
    if (obj2.isIOS()) {
      tmp = obj;
    }
    obj2 = obj1322;
  }
  return tmp;
};