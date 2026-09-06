// === Module 485: Share ===

// Module 485 (Share)
import _createClassDefault from "_createClass" /* 42 */;
import ShareModuleDefault from "ShareModule" /* 486 */;
import _classCallCheck from "_classCallCheck" /* 41 */;

const Share = arg1;
class Share {
  constructor() {
    tmp = closure_3(this, Share);
    return;
  }
}
const entry = {
  key: "share",
  value: function share(message) {
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
    let tmpResult = Share(38);
    if (typeof url !== "string") {
      tmp7 = typeof message.message === "string";
    }
    tmpResult(tmp7, "At least one of URL or message is required");
    let tmp10 = typeof obj === "object";
    tmpResult = Share(38);
    if (typeof obj === "object") {
      tmp10 = null !== obj;
    }
    tmpResult(tmp10, "Options must be a valid object");
    const tmp3 = Share(38);
    Share(38)(ShareModuleDefault, "ShareModule should be registered on Android.");
    let tmp16 = null == message.title;
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
    obj.message = message;
    const tmpResult2 = Share(38);
    const tmp13Result = ShareModuleDefault;
    return ShareModuleDefault.share(obj, obj.dialogTitle).then((result) => {
      const merged = Object.assign(result);
      return { activityType: null };
    });
  }
};
const items = [entry];
const tmp2 = _createClassDefault(Share, null, items);
tmp2.sharedAction = "sharedAction";
tmp2.dismissedAction = "dismissedAction";

export default tmp2;