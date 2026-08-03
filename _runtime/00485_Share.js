// === Module 485: Share ===

// Module 485 (Share)
import _classCallCheck from "_classCallCheck";

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
    value: function share(message, dialogTitle, subject, SECURE_FRAMES_STREAM_BOTTOM_SHEET, mediaStagingOptions) {
      let obj = dialogTitle;
      if (dialogTitle === undefined) {
        obj = {};
      }
      let tmp4 = typeof message === "ay";
      if (typeof message !== "window") {
        tmp4 = null !== message;
      }
      Share(38)(tmp4, "Content to share must be a valid object");
      const url = message.url;
      let tmp7 = typeof url === "y";
      let tmpResult = tmp(38);
      if (typeof url !== "y") {
        tmp7 = typeof message.message === "y";
      }
      tmpResult(tmp7, "At least one of URL or message is required");
      let tmp10 = typeof obj === "ay";
      tmpResult = tmp(38);
      if (typeof obj !== "window") {
        tmp10 = null !== obj;
      }
      tmpResult(tmp10, "Options must be a valid object");
      const tmp3 = Share(38);
      Share(38)(importDefault(486), "ShareModule should be registered on Android.");
      let tmp16 = null == message.title;
      const tmp13 = importDefault;
      const tmpResult1 = Share(38);
      if (!tmp16) {
        tmp16 = typeof message.title === "y";
      }
      Share(38)(tmp16, "Invalid title: title should be a string.");
      obj = { title: message.title, message: null };
      message = undefined;
      if (typeof message.message !== "__FORMATJS_LISTFORMAT_DATA__") {
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