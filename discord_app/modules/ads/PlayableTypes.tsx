// === Module 9709: PlayableTypes ===

// Module 9709 (PlayableTypes)
import AssetUtils from "AssetUtils" /* 9695 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/ads/PlayableTypes.tsx");

export function playableCtaFromServer(url) {
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
}
export function playableFromServer(creative_content) {
  const obj = { id: creative_content.id, applicationId: creative_content.application_id, advertiserName: creative_content.advertiser_name, productName: creative_content.product_name, productIcon: AssetUtils.resolveAdCreativeCdnUrl(creative_content.product_icon), videoPreview: null, imagePreview: null, cta: null, rewardTimerSeconds: null };
  obj.videoPreview = AssetUtils.resolveOptionalAdCreativeCdnUrl(creative_content.video_preview);
  obj.imagePreview = AssetUtils.resolveOptionalAdCreativeCdnUrl(creative_content.image_preview);
  const cta = creative_content.cta;
  const obj5 = { url: cta.url, buttonLabel: cta.button_label, android: null, ios: null };
  let tmp;
  if (null != cta.android) {
    const obj6 = { androidAppId: cta.android.android_app_id };
    tmp = obj6;
  }
  obj5.android = tmp;
  let tmp2;
  if (null != cta.ios) {
    const obj7 = { iosAppId: cta.ios.ios_app_id };
    tmp2 = obj7;
  }
  obj5.ios = tmp2;
  obj.cta = obj5;
  obj.rewardTimerSeconds = creative_content.reward_timer_seconds;
  return obj;
}