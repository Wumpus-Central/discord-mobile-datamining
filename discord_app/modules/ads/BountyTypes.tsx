// === Module 11284: BountyTypes ===

// Module 11284 (BountyTypes)
import AssetUtils from "AssetUtils" /* 11285 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/ads/BountyTypes.tsx");

export const bountyCtaFromServer = function bountyCtaFromServer(url) {
  let obj = { url: url.url, buttonLabel: url.button_label, android: null, ios: null };
  let tmp;
  if (null != url.android) {
    obj = { androidAppId: url.android.android_app_id };
    tmp = obj;
  }
  obj.android = tmp;
  let tmp2;
  if (null != url.ios) {
    obj = { iosAppId: url.ios.ios_app_id };
    tmp2 = obj;
  }
  obj.ios = tmp2;
  return obj;
};
export const bountyFromServer = function bountyFromServer(creative_content) {
  let obj = { id: creative_content.id, advertiserName: creative_content.advertiser_name, productName: creative_content.product_name, productIcon: null, videoPreview: null, imagePreview: null, videoHls: null, cta: null, rewardTimerSeconds: null };
  let obj1 = AssetUtils;
  obj.productIcon = obj1.resolveOptionalAdCreativeCdnUrl(creative_content.product_icon);
  obj.videoPreview = AssetUtils.resolveOptionalAdCreativeCdnUrl(creative_content.video_preview);
  obj.imagePreview = AssetUtils.resolveOptionalAdCreativeCdnUrl(creative_content.image_preview);
  obj.videoHls = AssetUtils.resolveAdCreativeCdnUrl(creative_content.video_hls);
  const cta = creative_content.cta;
  obj = { url: cta.url, buttonLabel: cta.button_label, android: null, ios: null };
  let tmp;
  if (null != cta.android) {
    obj = { androidAppId: cta.android.android_app_id };
    tmp = obj;
  }
  obj.android = tmp;
  let tmp2;
  if (null != cta.ios) {
    obj1 = { iosAppId: cta.ios.ios_app_id };
    tmp2 = obj1;
  }
  obj.ios = tmp2;
  obj.cta = obj;
  let num = creative_content.reward_timer_seconds;
  if (num == null) {
    num = 15;
  }
  obj.rewardTimerSeconds = num;
  return obj;
};