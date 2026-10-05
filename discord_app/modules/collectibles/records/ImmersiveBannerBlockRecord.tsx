// discord_app/modules/collectibles/records/ImmersiveBannerBlockRecord.tsx
import ShopBlockType from "../../../../discord_common/js/shared/shared-constants/ShopBlockType.tsx";
import size from "../../../../_runtime/metro/00002__.js";

class ImmersiveBannerBlockRecord {
  constructor(end_time) {
    const obj = Object.create(new.target.prototype);
    obj.type = ShopBlockType.ShopBlockType.IMMERSIVE_BANNER;
    ({ title: tmp.title, body: tmp.body, help_center_url: tmp.helpCenterUrl, text_color: tmp.textColor } = end_time);
    let date;
    if (null != end_time.end_time) {
      const _Date = Date;
      const self = this;
      const self2 = this;
      date = new Date(end_time.end_time);
    }
    obj.endTime = date;
    ({ banner_url: tmp.bannerUrl, banner_animated_url: tmp.bannerAnimatedUrl } = end_time);
    return obj;
  }
  static fromServer(end_time) {
    if (typeof ImmersiveBannerBlockRecord === "function") {
      const obj = Object.create(tmp.prototype);
      obj.type = ShopBlockType.ShopBlockType.IMMERSIVE_BANNER;
      ({
        title: tmp3.title,
        body: tmp3.body,
        help_center_url: tmp3.helpCenterUrl,
        text_color: tmp3.textColor,
      } = end_time);
      let date;
      if (null != end_time.end_time) {
        const _Date = Date;
        const self = this;
        const self2 = this;
        date = new Date(end_time.end_time);
      }
      obj.endTime = date;
      ({ banner_url: tmp3.bannerUrl, banner_animated_url: tmp3.bannerAnimatedUrl } = end_time);
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
const result = size.fileFinishedImporting("modules/collectibles/records/ImmersiveBannerBlockRecord.tsx");

export { ImmersiveBannerBlockRecord };
