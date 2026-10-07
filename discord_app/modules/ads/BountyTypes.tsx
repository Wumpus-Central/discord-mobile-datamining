// === Module 10012: BountyTypes ===

// Module 10012 (BountyTypes)
import AssetUtils from "AssetUtils" /* 10013 */;
import _slicedToArray from "module_32" /* 32 */;

require = fn;
function videoRenditionsFromServer(video_renditions) {
  if (null != video_renditions) {
    const obj = {};
    const _Object = Object;
    const entries = Object.entries(video_renditions);
    const tmp4 = entries[Symbol.iterator]();
    while (tmp4 !== undefined) {
      let tmp9 = _slicedToArray(tmp6, 2);
      [tmp10, tmp11] = tmp9;
      let obj2 = AssetUtils;
      obj[tmp10] = obj2.resolveAdCreativeCdnUrl(tmp11);
      continue;
    }
    const _Object2 = Object;
    let tmp14;
    if (Object.keys(obj).length > 0) {
      tmp14 = obj;
    }
    return tmp14;
  }
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/ads/BountyTypes.tsx");

export const bountyCtaFromServer = function bountyCtaFromServer(url) {
  const obj = { url: url.url, buttonLabel: url.button_label, android: null, ios: null };
  let tmp;
  if (null != url.android) {
    const obj2 = { androidAppId: url.android.android_app_id };
    tmp = obj2;
  }
  obj.android = tmp;
  let tmp2;
  if (null != url.ios) {
    const obj3 = { iosAppId: url.ios.ios_app_id };
    tmp2 = obj3;
  }
  obj.ios = tmp2;
  return obj;
};
export const bountyFromServer = function bountyFromServer(creative_content) {
  const obj = { id: creative_content.id, advertiserName: creative_content.advertiser_name, productName: creative_content.product_name, productIcon: AssetUtils.resolveOptionalAdCreativeCdnUrl(creative_content.product_icon), videoPreview: null, imagePreview: null, videoHls: null, videoRenditions: null, cta: null, rewardTimerSeconds: null, videoDurationSeconds: null };
  obj.videoPreview = AssetUtils.resolveOptionalAdCreativeCdnUrl(creative_content.video_preview);
  obj.imagePreview = AssetUtils.resolveOptionalAdCreativeCdnUrl(creative_content.image_preview);
  obj.videoHls = AssetUtils.resolveAdCreativeCdnUrl(creative_content.video_hls);
  obj.videoRenditions = videoRenditionsFromServer(creative_content.video_renditions);
  const cta = creative_content.cta;
  const obj6 = { url: cta.url, buttonLabel: cta.button_label, android: null, ios: null };
  let tmp;
  if (null != cta.android) {
    const obj7 = { androidAppId: cta.android.android_app_id };
    tmp = obj7;
  }
  obj6.android = tmp;
  let tmp2;
  if (null != cta.ios) {
    const obj8 = { iosAppId: cta.ios.ios_app_id };
    tmp2 = obj8;
  }
  obj6.ios = tmp2;
  obj.cta = obj6;
  let num = creative_content.reward_timer_seconds;
  if (num == null) {
    num = 15;
  }
  obj.rewardTimerSeconds = num;
  obj.videoDurationSeconds = creative_content.video_duration_seconds;
  return obj;
};