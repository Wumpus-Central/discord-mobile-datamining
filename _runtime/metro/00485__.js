// _runtime/metro/00485__.js
import _mod38 from "00038__.js";
import _createClassDefault from "00042__createClass.js";
import ShareModuleDefault from "../00486_ShareModule.js";
import _classCallCheck from "00041__classCallCheck.js";

class Share {
  constructor() {
    _classCallCheck(this, Share);
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
    const tmp3 = _mod38;
    if (typeof message === "object") {
      tmp4 = null !== message;
    }
    tmp3(tmp4, "Content to share must be a valid object");
    const url = message.url;
    let tmp7 = typeof url === "string";
    const tmpResult = _mod38;
    if (typeof url !== "string") {
      tmp7 = typeof message.message === "string";
    }
    tmpResult(tmp7, "At least one of URL or message is required");
    let tmp10 = typeof obj === "object";
    const tmpResult4 = _mod38;
    if (typeof obj === "object") {
      tmp10 = null !== obj;
    }
    tmpResult4(tmp10, "Options must be a valid object");
    const tmpResult5 = _mod38;
    tmpResult5(ShareModuleDefault, "ShareModule should be registered on Android.");
    let tmp16 = null == message.title;
    const tmpResult6 = _mod38;
    if (!tmp16) {
      tmp16 = typeof message.title === "string";
    }
    tmpResult6(tmp16, "Invalid title: title should be a string.");
    const obj2 = { title: message.title, message };
    message = undefined;
    if (typeof message.message === "string") {
      message = message.message;
    }
    const tmp13Result = ShareModuleDefault;
    const shareResult = tmp13Result.share(obj2, obj.dialogTitle);
    return shareResult.then((result) => {
      const obj = { activityType: null };
      const merged = Object.assign(result);
      return obj;
    });
  },
};
const items = [entry];
const tmp2 = _createClassDefault(Share, null, items);
tmp2.sharedAction = "sharedAction";
tmp2.dismissedAction = "dismissedAction";

export default tmp2;
