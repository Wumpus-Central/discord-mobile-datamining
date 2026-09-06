// === Module 7572: CountdownTimerBlockRecord ===

// Module 7572 (CountdownTimerBlockRecord)
import ShopBlockType from "ShopBlockType" /* 7573 */;
import size from "module_2" /* 2 */;

const prototype = function CountdownTimerBlockRecord(end_time) {
  const obj = Object.create(new.target.prototype);
  obj.type = ShopBlockType.ShopBlockType.COUNTDOWN_TIMER;
  ({ title: tmp.title, body: tmp.body, banner_url: tmp.bannerUrl } = end_time);
  obj.endTime = new Date(end_time.end_time);
  obj.textColor = end_time.text_color;
  return obj;
}.prototype;
prototype["fromServer"] = function fromServer(end_time) {
  if (typeof prototype === "function") {
    const obj = Object.create(tmp.prototype);
    obj.type = ShopBlockType.ShopBlockType.COUNTDOWN_TIMER;
    ({ title: tmp3.title, body: tmp3.body, banner_url: tmp3.bannerUrl } = end_time);
    const _Date = Date;
    const date = new Date(end_time.end_time);
    obj.endTime = date;
    obj.textColor = end_time.text_color;
    return obj;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
const result = size.fileFinishedImporting("modules/collectibles/records/CountdownTimerBlockRecord.tsx");

export const CountdownTimerBlockRecord = prototype;