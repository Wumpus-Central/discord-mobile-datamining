// discord_app/modules/collectibles/records/CountdownTimerBlockRecord.tsx
import ShopBlockType from "../../../../discord_common/js/shared/shared-constants/ShopBlockType.tsx";
import size from "../../../../_runtime/metro/00002__.js";

class CountdownTimerBlockRecord {
  constructor(end_time) {
    const obj = Object.create(new.target.prototype);
    obj.type = ShopBlockType.ShopBlockType.COUNTDOWN_TIMER;
    ({ title: tmp.title, body: tmp.body, banner_url: tmp.bannerUrl } = end_time);
    obj.endTime = new Date(end_time.end_time);
    obj.textColor = end_time.text_color;
    new Date(end_time.end_time);
    return obj;
  }
  static fromServer(end_time) {
    if (typeof CountdownTimerBlockRecord === "function") {
      const obj = Object.create(tmp.prototype);
      obj.type = ShopBlockType.ShopBlockType.COUNTDOWN_TIMER;
      ({ title: tmp3.title, body: tmp3.body, banner_url: tmp3.bannerUrl } = end_time);
      const _Date = Date;
      const self = this;
      const self2 = this;
      obj.endTime = new Date(end_time.end_time);
      obj.textColor = end_time.text_color;
      const date = new Date(end_time.end_time);
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
const result = size.fileFinishedImporting("modules/collectibles/records/CountdownTimerBlockRecord.tsx");

export { CountdownTimerBlockRecord };
