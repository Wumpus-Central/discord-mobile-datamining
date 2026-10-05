// discord_app/modules/chat_input/native/getChatInputPositionStyle.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let obj = { top: undefined };
const merged = Object.assign(react_native.StyleSheet.absoluteFillObject);
const result = size.fileFinishedImporting("modules/chat_input/native/getChatInputPositionStyle.tsx");

export default function getChatInputPositionStyle() {
  obj = arg0;
  if (arg0 === undefined) {
    obj = { isCreatingThread: false };
  }
  let tmp;
  if (!obj.isCreatingThread) {
    const obj2 = PlatformUtils;
    if (obj2.isIOS()) {
      tmp = obj;
    }
  }
  return tmp;
}
