// === Module 7252: fromServer ===

// Module 7252 (fromServer)
import set from "set" /* 2 */;
import ShopBlockType from "ShopBlockType" /* 7245 */;

let prototype;
prototype = function ImmersiveBannerBlockRecord(end_time) {
  const obj = Object.create(new.target.prototype);
  obj.type = ShopBlockType.ShopBlockType.IMMERSIVE_BANNER;
  ({ title: tmp.title, body: tmp.body, help_center_url: tmp.helpCenterUrl, text_color: tmp.textColor } = end_time);
  let date;
  if (null != end_time.end_time) {
    const _Date = Date;
    date = new Date(end_time.end_time);
  }
  obj.endTime = date;
  ({ banner_url: tmp.bannerUrl, banner_animated_url: tmp.bannerAnimatedUrl } = end_time);
  return obj;
}.prototype;
prototype["fromServer"] = function fromServer(end_time) {
  if (typeof prototype !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const obj = Object.create(prototype.prototype);
  obj.type = ShopBlockType.ShopBlockType.IMMERSIVE_BANNER;
  ({ title: tmp2.title, body: tmp2.body, help_center_url: tmp2.helpCenterUrl, text_color: tmp2.textColor } = end_time);
  let date;
  if (null != end_time.end_time) {
    const _Date = Date;
    date = new Date(end_time.end_time);
  }
  obj.endTime = date;
  ({ banner_url: tmp2.bannerUrl, banner_animated_url: tmp2.bannerAnimatedUrl } = end_time);
  return obj;
};
const result = set.fileFinishedImporting("modules/collectibles/records/ImmersiveBannerBlockRecord.tsx");

export const ImmersiveBannerBlockRecord = prototype;