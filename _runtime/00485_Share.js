// _runtime/00485_Share.js
import _classCallCheck from "_classCallCheck";
import { ShareModule } from "00486_ShareModule.js";

const Share = arg1;
class Share {
  constructor() {
    tmp = outer1_3(this, Share);
    return;
  }
}
const items = [
  {
    key: "share",
    value: function share(message, dialogTitle, subject, PREMIUM_GIFT_SUCCESS_MODAL, mediaStagingOptions, fn) {
      let obj = dialogTitle;
      if (dialogTitle === undefined) {
        obj = {};
      }
      let tmp4 = typeof message === "object";
      if (typeof message === "object") {
        tmp4 = null !== message;
      }
      Share(38)(tmp4, "Content to share must be a valid object");
      const url = message.url;
      let tmp7 = typeof url === "string";
      let tmpResult = tmp(38);
      if (typeof url !== "string") {
        tmp7 = typeof message.message === "string";
      }
      tmpResult(tmp7, "At least one of URL or message is required");
      let tmp10 = typeof obj === "object";
      tmpResult = tmp(38);
      if (typeof obj === "object") {
        tmp10 = null !== obj;
      }
      tmpResult(tmp10, "Options must be a valid object");
      const tmp3 = Share(38);
      Share(38)(ShareModule, "ShareModule should be registered on Android.");
      let tmp16 = null == message.title;
      const tmp13 = importDefault;
      const tmpResult1 = Share(38);
      if (!tmp16) {
        tmp16 = typeof message.title === "string";
      }
      Share(38)(tmp16, "Invalid title: title should be a string.");
      obj = { title: message.title, message: null };
      message = undefined;
      if (typeof message.message === "string") {
        message = message.message;
      }
      obj[1] = message;
      const tmpResult2 = Share(38);
      const tmp13Result = tmp13(486);
      return tmp13(486).share(obj, obj.dialogTitle).then((arg0) => {
        const merged = Object.assign(arg0);
        return { activityType: null };
      });
    }
  }
];
const tmp2 = require("_createClass")(Share, null, items);
tmp2.sharedAction = "sharedAction";
tmp2.dismissedAction = "dismissedAction";

export default tmp2;