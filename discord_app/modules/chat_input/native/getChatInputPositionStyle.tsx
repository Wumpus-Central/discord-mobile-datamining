// === Module 11544: getChatInputPositionStyle ===

// Module 11544 (getChatInputPositionStyle)
let obj = {};
const merged = Object.assign(require("get ActivityIndicator").StyleSheet.absoluteFillObject);
obj.top = undefined;
const result = require("set").fileFinishedImporting("modules/chat_input/native/getChatInputPositionStyle.tsx");

export default function getChatInputPositionStyle() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = { isCreatingThread: false };
  }
  let tmp;
  if (!obj.isCreatingThread) {
    if (obj2.isIOS()) {
      tmp = obj;
    }
    obj2 = require(500) /* set */;
  }
  return tmp;
};