// _runtime/00485_Share.js
import _createClassDefault from "metro/00042__createClass.js";
import ShareModuleDefault from "00486_ShareModule.js";
import _classCallCheck from "metro/00041__classCallCheck.js";

const Share = arg1;
class Share {
  constructor() {
    tmp = closure_3(this, Share);
    return;
  }
}
const entry = {
  key: "share",
  value: function share(message, dialogTitle) {
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
  },
};
const items = [entry];
const tmp2 = _createClassDefault(Share, null, items);
tmp2.sharedAction = "sharedAction";
tmp2.dismissedAction = "dismissedAction";

export default tmp2;
