// discord_app/modules/collectibles/records/CountdownTimerBlockRecord.tsx
import { ShopBlockType } from "../../../../discord_common/js/shared/shared-constants/ShopBlockType.tsx";
let prototype;
prototype = function CountdownTimerBlockRecord(end_time) {
  const obj = Object.create(new.target.prototype);
  obj.type = ShopBlockType.ShopBlockType.COUNTDOWN_TIMER;
  ({ title: tmp.title, body: tmp.body, banner_url: tmp.bannerUrl } = end_time);
  obj.endTime = new Date(end_time.end_time);
  obj.textColor = end_time.text_color;
  return obj;
}.prototype;
prototype["fromServer"] = function fromServer(end_time) {
  if (typeof prototype !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const obj = Object.create(prototype.prototype);
  obj.type = ShopBlockType.ShopBlockType.COUNTDOWN_TIMER;
  ({ title: tmp2.title, body: tmp2.body, banner_url: tmp2.bannerUrl } = end_time);
  obj.endTime = new Date(end_time.end_time);
  obj.textColor = end_time.text_color;
  return obj;
};
const result = require("set").fileFinishedImporting("modules/collectibles/records/CountdownTimerBlockRecord.tsx");

export const CountdownTimerBlockRecord = prototype;