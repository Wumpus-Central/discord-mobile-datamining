// === Module 9999: BountyTypes ===

// Module 9999 (BountyTypes)
import AssetUtils from "AssetUtils" /* 10000 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import size from "module_2" /* 2 */;

function videoRenditionsFromServer(video_renditions) {
  let tmp10;
  let tmp11;
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
const result = size.fileFinishedImporting("modules/ads/BountyTypes.tsx");

export const bountyCtaFromServer = function bountyCtaFromServer(url) {
  let tmp;
  let tmp2;
  const obj = { url: url.url, buttonLabel: url.button_label, android: tmp, ios: tmp2 };
  tmp = undefined;
  if (null != url.android) {
    tmp = { androidAppId: url.android.android_app_id };
    const obj2 = { androidAppId: url.android.android_app_id };
  }
  tmp2 = undefined;
  if (null != url.ios) {
    tmp2 = { iosAppId: url.ios.ios_app_id };
    const obj3 = { iosAppId: url.ios.ios_app_id };
  }
  return obj;
};
export const bountyFromServer = function bountyFromServer(creative_content) {
  let num;
  let obj2;
  let obj3;
  let obj4;
  let obj5;
  let obj6;
  let tmp;
  let tmp2;
  const obj = { id: creative_content.id, advertiserName: creative_content.advertiser_name, productName: creative_content.product_name, productIcon: obj2.resolveOptionalAdCreativeCdnUrl(creative_content.product_icon), videoPreview: obj3.resolveOptionalAdCreativeCdnUrl(creative_content.video_preview), imagePreview: obj4.resolveOptionalAdCreativeCdnUrl(creative_content.image_preview), videoHls: obj5.resolveAdCreativeCdnUrl(creative_content.video_hls), videoRenditions: videoRenditionsFromServer(creative_content.video_renditions), cta: obj6, rewardTimerSeconds: num, videoDurationSeconds: creative_content.video_duration_seconds };
  obj2 = AssetUtils;
  obj3 = AssetUtils;
  obj4 = AssetUtils;
  const cta = creative_content.cta;
  obj6 = { url: cta.url, buttonLabel: cta.button_label, android: tmp, ios: tmp2 };
  tmp = undefined;
  obj5 = AssetUtils;
  if (null != cta.android) {
    tmp = { androidAppId: cta.android.android_app_id };
    const obj7 = { androidAppId: cta.android.android_app_id };
  }
  tmp2 = undefined;
  if (null != cta.ios) {
    tmp2 = { iosAppId: cta.ios.ios_app_id };
    const obj8 = { iosAppId: cta.ios.ios_app_id };
  }
  num = creative_content.reward_timer_seconds;
  if (num == null) {
    num = 15;
  }
  return obj;
};