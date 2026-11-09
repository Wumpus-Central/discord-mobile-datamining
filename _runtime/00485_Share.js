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
  value: function share(title) {
    let obj = arg1;
    if (arg1 === undefined) {
      obj = {};
    }
    let tmp4 = typeof title === "object";
    if (typeof title === "object") {
      tmp4 = null !== title;
    }
    Share(38)(tmp4, "Content to share must be a valid object");
    const url = title.url;
    let tmp7 = typeof url === "string";
    const tmp3 = Share(38);
    if (typeof url !== "string") {
      tmp7 = typeof title.message === "string";
    }
    Share(38)(tmp7, "At least one of URL or message is required");
    let tmp10 = typeof obj === "object";
    const tmpResult = Share(38);
    if (typeof obj === "object") {
      tmp10 = null !== obj;
    }
    Share(38)(tmp10, "Options must be a valid object");
    const tmpResult4 = Share(38);
    Share(38)(ShareModuleDefault, "ShareModule should be registered on Android.");
    let tmp16 = null == title.title;
    const tmpResult5 = Share(38);
    if (!tmp16) {
      tmp16 = typeof title.title === "string";
    }
    Share(38)(tmp16, "Invalid title: title should be a string.");
    const obj2 = { title: title.title, message: null };
    let message;
    if (typeof title.message === "string") {
      message = title.message;
    }
    obj2.message = message;
    const tmpResult6 = Share(38);
    const tmp13Result = ShareModuleDefault;
    return ShareModuleDefault.share(obj2, obj.dialogTitle).then((result) => {
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